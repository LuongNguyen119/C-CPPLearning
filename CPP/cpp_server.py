#!/usr/bin/env python3
"""
C++ Compiler Server - One-shot execution with proper stdin/stdout handling
Port: 8766
"""

import json
import os
import shutil
import subprocess
import sys
import tempfile
import threading
import time
from http.server import HTTPServer, BaseHTTPRequestHandler
from pathlib import Path

# Try to import pty for Linux (pseudo-terminal to disable buffering)
try:
    import pty
    import select
    HAS_PTY = True
except ImportError:
    HAS_PTY = False

ROOT = Path(__file__).parent
PORT = 8766

def norm_input(text):
    """Normalize input: CRLF/CR -> LF, ensure ends with newline"""
    text = str(text or "").replace("\r\n", "\n").replace("\r", "\n")
    if text and not text.endswith("\n"):
        text += "\n"
    return text

def run_with_pty(exe_path, stdin_text, timeout=4):
    """Run program with PTY (Linux) to get unbuffered output"""
    if not HAS_PTY:
        return None
    
    master_fd, slave_fd = pty.openpty()
    
    proc = subprocess.Popen(
        [str(exe_path)],
        stdin=slave_fd,
        stdout=slave_fd,
        stderr=slave_fd,
        close_fds=True,
        cwd=exe_path.parent
    )
    os.close(slave_fd)
    
    # Write stdin
    if stdin_text:
        os.write(master_fd, stdin_text.encode('utf-8'))
    
    # Read output
    output = []
    start = time.time()
    
    try:
        while time.time() - start < timeout:
            ready, _, _ = select.select([master_fd], [], [], 0.1)
            if ready:
                try:
                    data = os.read(master_fd, 1024)
                    if data:
                        output.append(data.decode('utf-8', errors='replace'))
                    else:
                        break
                except OSError:
                    break
            
            if proc.poll() is not None:
                # Process exited, drain remaining output
                while True:
                    ready, _, _ = select.select([master_fd], [], [], 0.1)
                    if not ready:
                        break
                    try:
                        data = os.read(master_fd, 1024)
                        if data:
                            output.append(data.decode('utf-8', errors='replace'))
                        else:
                            break
                    except OSError:
                        break
                break
    finally:
        os.close(master_fd)
        if proc.poll() is None:
            proc.kill()
            proc.wait(timeout=2)
    
    returncode = proc.returncode
    output_text = "".join(output)
    
    return {
        "ok": returncode == 0,
        "phase": "run",
        "returncode": returncode,
        "output": output_text[-12000:]
    }

def run_with_pipe(exe_path, stdin_text, timeout=4):
    """Run program with pipe (fallback for Windows or when PTY unavailable)"""
    flags = {}
    if os.name == "nt":
        flags["creationflags"] = subprocess.CREATE_NO_WINDOW
    
    proc = subprocess.Popen(
        [str(exe_path)],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        cwd=exe_path.parent,
        **flags
    )
    
    try:
        stdout, _ = proc.communicate(
            input=stdin_text.encode('utf-8') if stdin_text else None,
            timeout=timeout
        )
        return {
            "ok": proc.returncode == 0,
            "phase": "run",
            "returncode": proc.returncode,
            "output": stdout.decode('utf-8', errors='replace')[-12000:]
        }
    except subprocess.TimeoutExpired:
        proc.kill()
        try:
            stdout, _ = proc.communicate(timeout=2)
            output = stdout.decode('utf-8', errors='replace') if stdout else ""
        except:
            output = ""
        return {
            "ok": False,
            "phase": "timeout",
            "output": output[-12000:] + "\n[TIMEOUT after 4s]"
        }

def execute_code(code, stdin_text=""):
    """Compile and run C++ code"""
    stdin_text = norm_input(stdin_text)
    
    flags = {}
    if os.name == "nt":
        flags["creationflags"] = subprocess.CREATE_NO_WINDOW
    
    with tempfile.TemporaryDirectory(prefix="cpp-run-", dir=ROOT) as td:
        src = Path(td) / "main.cpp"
        exe = Path(td) / ("main.exe" if os.name == "nt" else "main")
        
        src.write_bytes(code.encode("utf-8"))
        
        # Compile
        comp = subprocess.run(
            ["g++", "-std=c++20", "-Wall", "-Wextra", "-pedantic", str(src), "-o", str(exe)],
            cwd=td,
            capture_output=True,
            text=True,
            timeout=10,
            **flags
        )
        
        if comp.returncode != 0:
            return {
                "ok": False,
                "phase": "compile",
                "output": comp.stderr[-8000:]
            }
        
        # Run - try PTY first (Linux), fallback to pipe
        if HAS_PTY and os.name != "nt":
            result = run_with_pty(exe, stdin_text)
            if result is not None:
                return result
        
        # Fallback to pipe
        return run_with_pipe(exe, stdin_text)

class Handler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        pass  # Suppress default logging
    
    def _send_json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)
    
    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
    
    def do_POST(self):
        if self.path != "/api/run":
            self._send_json({"error": "Not found"}, 404)
            return
        
        try:
            length = int(self.headers.get("Content-Length", 0))
            if length > 500000:
                self._send_json({"error": "Payload too large"}, 413)
                return
            
            body = json.loads(self.rfile.read(length).decode("utf-8"))
            code = body.get("code", "")
            stdin = body.get("input", "")
            
            if not isinstance(code, str) or not isinstance(stdin, str):
                self._send_json({"error": "Invalid data"}, 400)
                return
            
            result = execute_code(code, stdin)
            self._send_json(result)
            
        except Exception as e:
            self._send_json({"error": str(e)}, 500)

if __name__ == "__main__":
    server = HTTPServer(("127.0.0.1", PORT), Handler)
    print(f"C++ server running on http://127.0.0.1:{PORT}")
    print(f"PTY support: {'YES' if HAS_PTY else 'NO'}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down...")
        server.shutdown()
