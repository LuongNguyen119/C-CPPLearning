# -*- coding: utf-8 -*-
"""C compiler server for the C-CPP learning site (interactive session mode).

Runs at :8765. Endpoints:
  POST /api/run/session              -> compile once, spawn process, return sessionId
  POST /api/run/session/<id>/input   -> send one stdin line (scanf / gets)
  GET  /api/run/session/<id>/poll    -> stream stdout, tell if program is waiting
  POST /api/run                      -> legacy one-shot run (stdin pre-filled)
"""
import json, os, subprocess, tempfile, shutil, threading, queue, time, uuid
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
NO_WINDOW = subprocess.CREATE_NO_WINDOW if os.name == "nt" else 0

# --- STDIN/STDOUT hardening: norm CRLF->LF + cuối, stdbuf trên Linux,
#     đóng stdin (EOF) sau khi ghi, bắt đủ stdout+stderr + timeout. ---
def norm_input(x):
    x = str(x or "").replace("\r\n", "\n").replace("\r", "\n")
    if x and not x.endswith("\n"):
        x += "\n"
    return x


def sanitize_line(text):
    return str(text or "").replace("\r", "")


def _run_cmd(exe):
    if os.name == "nt":
        return [str(exe)]
    stdbuf = shutil.which("stdbuf")
    return [stdbuf, "-o0", "-e0", str(exe)] if stdbuf else [str(exe)]


def exec_once(exe, stdin_text, timeout=3):
    stdin_text = norm_input(stdin_text)
    proc = subprocess.Popen(
        _run_cmd(exe),
        cwd=exe.parent,
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True, encoding="utf-8", errors="replace",
        creationflags=NO_WINDOW,
    )
    try:
        if stdin_text:
            proc.stdin.write(stdin_text)
        proc.stdin.close()  # <-- EOF ngay
    except Exception:
        pass
    try:
        out, _ = proc.communicate(timeout=timeout)
        return {"ok": proc.returncode == 0, "phase": "run",
                "returncode": proc.returncode, "output": (out or "")[-10000:]}
    except subprocess.TimeoutExpired:
        proc.kill()
        out, _ = proc.communicate(timeout=5)
        return {"ok": False, "phase": "timeout", "returncode": None,
                "output": ((out or "") + ("\n[timeout] Chuong trinh chay qua %d giay va da bi dung." % timeout))[-10000:]}

SESSIONS = {}
SESS_LOCK = threading.Lock()
SESS_TTL = 180


def _reader(p, q):
    try:
        buf = ""
        while True:
            ch = p.stdout.read(1)
            if not ch:
                break
            buf += ch.decode("utf-8", "replace")
            if ch in (b"\r", b"\n"):
                q.put(("out", buf))
                buf = ""
    except Exception:
        pass
    if buf:
        q.put(("out", buf))
    q.put(("eof", None))


class Session:
    def __init__(self, args, cwd):
        self.q = queue.Queue()
        self.proc = subprocess.Popen(
            args,
            cwd=cwd,
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            bufsize=0,
            creationflags=NO_WINDOW,
        )
        self.last = time.time()
        threading.Thread(target=_reader, args=(self.proc, self.q), daemon=True).start()

    def send_line(self, text):
        self.last = time.time()
        try:
            self.proc.stdin.write((sanitize_line(text) + "\n").encode("utf-8"))
            self.proc.stdin.flush()
            return True
        except Exception:
            return False

    def poll(self, wait=0.2):
        self.last = time.time()
        items = []
        end = time.time() + wait
        while time.time() < end:
            try:
                kind, payload = self.q.get_nowait()
                items.append({"type": kind, "text": payload})
                continue
            except queue.Empty:
                pass
            if self.proc.poll() is not None:
                break
            time.sleep(0.03)
        alive = self.proc.poll() is None
        return {"alive": alive, "items": items, "waiting": alive}

    def close(self):
        try:
            self.proc.kill()
        except Exception:
            pass


def _start_session(code):
    td = tempfile.mkdtemp(prefix="c-run-", dir=ROOT)
    src = Path(td) / "main.c"
    exe = Path(td) / ("main.exe" if os.name == "nt" else "main")
    src.write_bytes(code.encode("utf-8"))
    comp = subprocess.run(
        ["gcc", "-std=c11", "-Wall", "-Wextra", str(src), "-o", str(exe)],
        cwd=td, capture_output=True, text=True, timeout=10, creationflags=NO_WINDOW,
    )
    if comp.returncode:
        shutil.rmtree(td, ignore_errors=True)
        return None, {"ok": False, "phase": "compile", "output": comp.stderr[-6000:]}
    sid = uuid.uuid4().hex
    with SESS_LOCK:
        SESSIONS[sid] = {"session": Session(_run_cmd(exe), cwd=td), "td": td}
    return sid, {"ok": True, "phase": "session", "sessionId": sid}


def _reap():
    now = time.time()
    with SESS_LOCK:
        for sid, rec in list(SESSIONS.items()):
            if now - rec["session"].last > SESS_TTL:
                rec["session"].close()
                shutil.rmtree(rec["td"], ignore_errors=True)
                SESSIONS.pop(sid, None)


class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS, GET")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def _json(self, obj, status=200):
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.end_headers()
        self.wfile.write(json.dumps(obj, ensure_ascii=False).encode())

    def do_POST(self):
        path = self.path.split("?")[0]
        try:
            size = int(self.headers.get("Content-Length", "0"))
            if size > 30000:
                raise ValueError("Nội dung quá dài (tối đa 30 KB).")
            body = json.loads(self.rfile.read(size)) if size else {}

            if path == "/api/run":
                self._run_once(body)
                return
            if path == "/api/run/session":
                code = body.get("code", "")
                if not isinstance(code, str):
                    raise ValueError("Dữ liệu không hợp lệ.")
                sid, res = _start_session(code)
                self._json(res)
                return
            m = path.split("/")
            if len(m) == 6 and m[1] == "api" and m[3] == "session" and m[5] == "input":
                sid = m[4]
                with SESS_LOCK:
                    rec = SESSIONS.get(sid)
                if not rec:
                    self._json({"ok": False, "phase": "gone", "output": "Phiên đã hết hạn."})
                    return
                ok = rec["session"].send_line(sanitize_line(str(body.get("text", ""))))
                self._json({"ok": ok, "phase": "input"})
                return
            self.send_error(404)
        except Exception as exc:
            self._json({"ok": False, "phase": "server", "output": str(exc)}, 400)

    def do_GET(self):
        path = self.path.split("?")[0]
        m = path.split("/")
        if len(m) == 6 and m[1] == "api" and m[3] == "session" and m[5] == "poll":
            _reap()
            sid = m[4]
            with SESS_LOCK:
                rec = SESSIONS.get(sid)
            if not rec:
                self._json({"ok": False, "alive": False, "phase": "gone", "items": []})
                return
            st = rec["session"].poll(wait=0.25)
            if not st["alive"]:
                extra = []
                deadline = time.time() + 1.5
                while time.time() < deadline:
                    try:
                        k, v = rec["session"].q.get_nowait()
                        extra.append({"type": k, "text": v})
                    except queue.Empty:
                        time.sleep(0.05)
                st["items"] += extra
                rec["session"].close()
                shutil.rmtree(rec["td"], ignore_errors=True)
                with SESS_LOCK:
                    SESSIONS.pop(sid, None)
            self._json({**st, "ok": True, "phase": "poll"})
            return
        if path == "/":
            self.path = "/C.html"
        return super().do_GET()

    def _run_once(self, body):
        code = body.get("code", "")
        stdin = body.get("input", "")
        if not isinstance(code, str) or not isinstance(stdin, str):
            raise ValueError("Dữ liệu không hợp lệ.")
        if len(stdin) > 5000:
            raise ValueError("Input quá dài.")
        with tempfile.TemporaryDirectory(prefix="c-run-", dir=ROOT) as td:
            src = Path(td) / "main.c"
            exe = Path(td) / ("main.exe" if os.name == "nt" else "main")
            src.write_bytes(code.encode("utf-8"))
            comp = subprocess.run(
                ["gcc", "-std=c11", "-Wall", "-Wextra", str(src), "-o", str(exe)],
                cwd=td, capture_output=True, text=True, timeout=8, creationflags=NO_WINDOW,
            )
            if comp.returncode:
                self._json({"ok": False, "phase": "compile", "output": comp.stderr[-6000:]})
                return
            try:
                run = subprocess.run(
                    [str(exe)], cwd=td, input=stdin, capture_output=True, text=True, timeout=3, creationflags=NO_WINDOW,
                )
                self._json({
                    "ok": run.returncode == 0, "phase": "run", "returncode": run.returncode,
                    "output": (run.stdout + run.stderr)[-10000:],
                })
            except subprocess.TimeoutExpired:
                self._json({"ok": False, "phase": "timeout", "output": "Chương trình vượt quá 3 giây và đã bị dừng."})


print("C learning server: http://127.0.0.1:8765/C.html (interactive scanf OK)")
print("Compiler:", shutil.which("gcc") or "NOT FOUND")
os.chdir(ROOT)
Handler.directory = str(ROOT)
port = int(os.environ.get("PORT", "8765"))
ThreadingHTTPServer(("127.0.0.1", port), Handler).serve_forever()