#!/usr/bin/env python3
"""
C Compiler Server - Fixed stdin/stdout pipeline
Port: 8765
"""

import http.server
import socketserver
import json
import subprocess
import tempfile
import os
import shutil
import sys
from pathlib import Path
import threading
import time

PORT = 8765
ROOT = Path(__file__).parent

# Windows: no window flag
if os.name == "nt":
    CREATE_NO_WINDOW = 0x08000000
else:
    CREATE_NO_WINDOW = 0

def norm_input(x):
    """Chuẩn hóa input: CRLF/CR → LF, đảm bảo kết thúc bằng \n"""
    x = str(x or "").replace("\r\n", "\n").replace("\r", "\n")
    if x and not x.endswith("\n"):
        x += "\n"
    return x

def run_cmd_with_stdbuf(exe_path):
    """Tạo command với stdbuf để tắt block-buffering trên Linux"""
    if os.name == "nt":
        return [str(exe_path)]
    
    # Linux: dùng stdbuf để stdout line-buffered
    stdbuf = shutil.which("stdbuf")
    if stdbuf:
        return [stdbuf, "-o0", "-e0", str(exe_path)]
    return [str(exe_path)]

class Handler(http.server.BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        pass  # Suppress logs

    def _json(self, code, obj):
        data = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_POST(self):
        if self.path == "/api/run":
            self._handle_run()
        else:
            self._json(404, {"ok": False, "error": "Not found"})

    def _handle_run(self):
        try:
            length = int(self.headers.get("Content-Length", 0))
            body = json.loads(self.rfile.read(length).decode("utf-8"))
            code = body.get("code", "")
            stdin_text = norm_input(body.get("input", ""))

            if not isinstance(code, str):
                raise ValueError("Code must be string")

            with tempfile.TemporaryDirectory(prefix="c-run-", dir=ROOT) as td:
                src = Path(td) / "main.c"
                exe = Path(td) / ("main.exe" if os.name == "nt" else "main")
                
                # Write source with UTF-8 encoding
                src.write_bytes(code.encode("utf-8"))

                # Compile
                comp = subprocess.run(
                    ["gcc", "-std=c11", "-Wall", "-Wextra", "-pedantic",
                     str(src), "-o", str(exe)],
                    cwd=td,
                    capture_output=True,
                    text=True,
                    timeout=10,
                    creationflags=CREATE_NO_WINDOW if os.name == "nt" else 0
                )

                if comp.returncode != 0:
                    self._json(200, {
                        "ok": False,
                        "phase": "compile",
                        "output": comp.stderr[-8000:]
                    })
                    return

                # Run with stdin
                cmd = run_cmd_with_stdbuf(exe)
                proc = subprocess.Popen(
                    cmd,
                    cwd=td,
                    stdin=subprocess.PIPE,
                    stdout=subprocess.PIPE,
                    stderr=subprocess.STDOUT,
                    text=True,
                    creationflags=CREATE_NO_WINDOW if os.name == "nt" else 0
                )

                # Write stdin and close immediately (EOF signal)
                if stdin_text:
                    proc.stdin.write(stdin_text)
                proc.stdin.close()

                try:
                    stdout, _ = proc.communicate(timeout=4)
                    self._json(200, {
                        "ok": proc.returncode == 0,
                        "phase": "run",
                        "returncode": proc.returncode,
                        "output": stdout[-12000:]
                    })
                except subprocess.TimeoutExpired:
                    proc.kill()
                    stdout, _ = proc.communicate(timeout=2)
                    self._json(200, {
                        "ok": False,
                        "phase": "timeout",
                        "output": stdout[-12000:] + "\n[TIMEOUT]"
                    })

        except Exception as e:
            self._json(500, {"ok": False, "error": str(e)})

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"C server on port {PORT}", flush=True)
        httpd.serve_forever()

</content>