#!/usr/bin/env python3
"""
C++ Compiler Server (port 8766) — Session + terminal-support API.

Endpoints:
  POST /api/run                     one-shot: {code, input} -> {ok, phase, output}
  POST /api/run/session             {code} -> {ok, sessionId}
  POST /api/run/session/<id>/input  {text} -> feed one stdin line (kept open)
  GET  /api/run/session/<id>/poll   -> {alive, items:[{type,text}], exitCode, truncated, timeout}
  POST /api/run/session/<id>/stop   kill session (Stop button)

Notes:
- stdout/stderr merged to one pipe (type "out"); we buffer client-side for "final output".
- stdout forced unbuffered via stdbuf on Linux (kills block-buffering).
- stdin kept OPEN between lines (stdin must stay realtime; NOT closed per line).
- output capped (MAX_OUTPUT_BYTES) + timeouts.
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile
import threading
import time
import queue as _queue
import uuid
import socketserver
from pathlib import Path
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse

HOST = "127.0.0.1"
PORT = 8766
ROOT = Path(__file__).parent
MAX_OUTPUT_BYTES = 5 * 1024 * 1024   # 5 MB
RUN_TIMEOUT = 600.0                    # seconds
SESSION_TTL = 300.0

if os.name == "nt":
    NO_WINDOW = subprocess.CREATE_NO_WINDOW
else:
    NO_WINDOW = 0


def norm_input(x):
    x = str(x or "").replace("\r\n", "\n").replace("\r", "\n")
    if x and not x.endswith("\n"):
        x += "\n"
    return x


def sanitize_line(text):
    return str(text or "").replace("\r", "")


def run_cmd(exe):
    if os.name == "nt":
        return [str(exe)]
    sb = shutil.which("stdbuf")
    return [sb, "-o0", "-e0", str(exe)] if sb else [str(exe)]


def _read_fd(fd, q, kind):
    """Read a pipe char-by-char; emit items (raw chunks, client decides splitting)."""
    try:
        while True:
            chunk = fd.read(4096)
            if not chunk:
                break
            q.put({"type": kind, "text": chunk})
    except Exception:
        pass
    q.put({"type": "eof", "text": ""})


class Session:
    def __init__(self, exe, cwd):
        self.q = _queue.Queue()
        self.proc = subprocess.Popen(
            run_cmd(exe),
            cwd=cwd,
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            bufsize=0,
            creationflags=NO_WINDOW, text=True, encoding="utf-8", errors="replace",
        )
        self.start = time.time()
        self.bytes_out = 0
        self.truncated = False
        self.timed_out = False
        self.stop_req = False
        threading.Thread(target=_read_fd, args=(self.proc.stdout, self.q, "out"), daemon=True).start()

    def alive(self):
        return self.proc.poll() is None and not self.stop_req

    def send_line(self, text):
        try:
            # stdin là text stream (text=True) → viết str, không encode bytes
            self.proc.stdin.write(sanitize_line(text) + "\n")
            self.proc.stdin.flush()
            return True
        except Exception:
            return False

    def poll(self, wait=0.15):
        """Return new items + status. Cuts output at MAX_OUTPUT_BYTES."""
        items = []
        end = time.time() + wait
        while time.time() < end:
            try:
                it = self.q.get_nowait()
                if it["type"] == "eof":
                    break
                # Enforce output cap
                room = MAX_OUTPUT_BYTES - self.bytes_out
                if len(it["text"]) > room:
                    self.truncated = True
                    self.proc.kill()
                    it["text"] = it["text"][:max(0, room)]
                    items.append(it)
                    break
                self.bytes_out += len(it["text"])
                items.append(it)
            except _queue.Empty:
                if not self.alive():
                    # Process exited — drain grace period so the reader
                    # thread has time to push final output into the queue.
                    grace_end = time.time() + 0.5
                    while time.time() < grace_end:
                        try:
                            it = self.q.get_nowait()
                            if it["type"] == "eof":
                                break
                            room = MAX_OUTPUT_BYTES - self.bytes_out
                            if len(it["text"]) > room:
                                self.truncated = True
                                it["text"] = it["text"][:max(0, room)]
                            self.bytes_out += len(it["text"])
                            items.append(it)
                        except _queue.Empty:
                            time.sleep(0.03)
                    break
                time.sleep(0.02)

        # timeout check
        if self.alive() and (time.time() - self.start) > RUN_TIMEOUT:
            self.timed_out = True
            try: self.proc.kill()
            except Exception: pass

        return {
            "alive": self.alive(),
            "items": items,
            "exitCode": None if self.alive() else self.proc.returncode,
            "truncated": self.truncated,
            "timeout": self.timed_out,
        }

    def stop(self):
        self.stop_req = True
        try: self.proc.kill()
        except Exception: pass


SESSIONS = {}
SESS_LOCK = threading.Lock()


def _reap():
    now = time.time()
    with SESS_LOCK:
        for sid, s in list(SESSIONS.items()):
            if now - s.start > SESSION_TTL:
                try: s.stop()
                except Exception: pass
                SESSIONS.pop(sid, None)


def _start_session(code):
    td = tempfile.mkdtemp(prefix="cpp-run-", dir=ROOT)
    src = Path(td) / "main.cpp"
    exe = Path(td) / ("main.exe" if os.name == "nt" else "main")
    src.write_bytes(code.encode("utf-8"))
    comp = subprocess.run(
        ["g++", "-std=c++20", "-Wall", "-Wextra", "-pedantic", str(src), "-o", str(exe)],
        cwd=td, capture_output=True, text=True, timeout=15, creationflags=NO_WINDOW,
    )
    if comp.returncode != 0:
        shutil.rmtree(td, ignore_errors=True)
        return None, {"ok": False, "phase": "compile", "output": comp.stderr[-8000:]}
    sid = uuid.uuid4().hex[:12]
    with SESS_LOCK:
        SESSIONS[sid] = Session(exe, td)
    return sid, {"ok": True, "phase": "session", "sessionId": sid}


def exec_once(code, stdin_text, timeout=5.0):
    stdin_text = norm_input(stdin_text)
    with tempfile.TemporaryDirectory(prefix="cpp-run-", dir=ROOT) as td:
        src = Path(td) / "main.cpp"
        exe = Path(td) / ("main.exe" if os.name == "nt" else "main")
        src.write_bytes(code.encode("utf-8"))
        comp = subprocess.run(
            ["g++", "-std=c++20", "-Wall", "-Wextra", "-pedantic", str(src), "-o", str(exe)],
            cwd=td, capture_output=True, text=True, timeout=15, creationflags=NO_WINDOW,
        )
        if comp.returncode != 0:
            return {"ok": False, "phase": "compile", "output": comp.stderr[-8000:]}
        proc = subprocess.Popen(
            run_cmd(exe), cwd=td, stdin=subprocess.PIPE,
            stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
            text=True, bufsize=1, creationflags=NO_WINDOW,
        )
        try:
            out, _ = proc.communicate(input=stdin_text, timeout=timeout)
            return {"ok": proc.returncode == 0, "phase": "run",
                    "returncode": proc.returncode, "output": (out or "")[-12000:]}
        except subprocess.TimeoutExpired:
            proc.kill()
            out, _ = proc.communicate(timeout=2)
            return {"ok": False, "phase": "timeout",
                    "output": ((out or "") + "\n[TIMEOUT]")[-12000:]}


class Handler(BaseHTTPRequestHandler):
    def log_message(self, *a, **k): pass

    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def _json(self, code, obj):
        body = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self._cors()
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def _read_body(self):
        length = int(self.headers.get("Content-Length", 0) or 0)
        if length <= 0: return {}
        return json.loads(self.rfile.read(length).decode("utf-8"))

    def do_POST(self):
        path = urlparse(self.path).path
        parts = path.split("/")
        try:
            if path == "/api/run":
                body = self._read_body()
                code = body.get("code", "")
                stdin = body.get("input", "") or body.get("stdin", "") or ""
                self._json(200, exec_once(code, stdin))
                return
            if path == "/api/run/session":
                body = self._read_body()
                code = body.get("code", "")
                sid, res = _start_session(code)
                self._json(200, res)
                return
            # /api/run/session/<id>/input
            if len(parts) == 6 and parts[1] == "api" and parts[2] == "run" and parts[3] == "session" and parts[5] == "input":
                sid = parts[4]
                with SESS_LOCK:
                    s = SESSIONS.get(sid)
                if not s: self._json(200, {"ok": False, "error": "session gone"}); return
                body = self._read_body()
                ok = s.send_line(body.get("text", ""))
                self._json(200, {"ok": ok})
                return
            # /api/run/session/<id>/stop
            if len(parts) == 6 and parts[1] == "api" and parts[2] == "run" and parts[3] == "session" and parts[5] == "stop":
                sid = parts[4]
                with SESS_LOCK:
                    s = SESSIONS.pop(sid, None)
                if not s: self._json(200, {"ok": False, "error": "session gone"}); return
                s.stop()
                self._json(200, {"ok": True})
                return
            self._json(404, {"ok": False, "error": "not found"})
        except Exception as e:
            self._json(500, {"ok": False, "error": str(e)})

    def do_GET(self):
        path = urlparse(self.path).path
        parts = path.split("/")
        if len(parts) == 6 and parts[1] == "api" and parts[2] == "run" and parts[3] == "session" and parts[5] == "poll":
            sid = parts[4]
            with SESS_LOCK:
                s = SESSIONS.get(sid)
            if not s:
                self._json(200, {"ok": True, "alive": False, "items": [], "exitCode": None, "truncated": False, "timeout": False, "gone": True})
                return
            self._json(200, s.poll())
            return
        self._json(404, {"ok": False, "error": "not found"})


if __name__ == "__main__":
    threading.Thread(target=lambda: (
        (lambda srv: (srv.serve_forever()))(HTTPServer((HOST, PORT), Handler))
    ), daemon=True).start()
    # reap loop
    while True:
        time.sleep(5)
        _reap()