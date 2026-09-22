import json, os, shutil, subprocess, tempfile, threading, queue, time, uuid
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent

# Windows: never pop a console window for g++/main.exe children.
NO_WINDOW = subprocess.CREATE_NO_WINDOW if os.name == "nt" else 0


# --------------------------------------------------------------------------
# STDIN/STDOUT hardening (fixes the "scanf skips / garbage chars" bug):
#   1. Normalize input: \r\n -> \n, \r -> \n, always end with '\n' (EOF).
#   2. On Linux run through `stdbuf -o0 -e0` to kill output buffering.
#   3. Always close stdin after writing -> scanf/cin get a clean EOF.
#   4. Capture full stdout+stderr, handle timeout + errors.
# --------------------------------------------------------------------------

def norm_input(s):
    """CRLF -> LF, CR -> LF, and terminate with '\n' so scanf never eats a
    trailing value and never blocks waiting for the final newline."""
    s = str(s or "")
    s = s.replace("\r\n", "\n").replace("\r", "\n")
    if s and not s.endswith("\n"):
        s += "\n"
    return s


def sanitize_line(text):
    """Single interactive line: strip stray CR (from browser/textarea) so a
    `scanf("%d")` doesn't keep a dangling '\r' in its buffer."""
    return str(text or "").replace("\r", "")


def _run_cmd(exe):
    """Build the command to execute. On Linux, force line-buffering off with
    stdbuf so printf output streams in real time instead of flushing at exit."""
    if os.name == "nt":
        return [str(exe)]
    stdbuf = shutil.which("stdbuf")
    if stdbuf:
        return [stdbuf, "-o0", "-e0", str(exe)]
    return [str(exe)]


def exec_once(exe, stdin_text, timeout=4):
    """Compile-time helper: Popen the program, write all normalized stdin,
    CLOSE stdin (EOF), then return stdout+stderr with timeout/error handling.
    Returns -> dict(ok, phase, returncode, output)"""
    stdin_text = norm_input(stdin_text)
    proc = subprocess.Popen(
        _run_cmd(exe),
        cwd=exe.parent,
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        encoding="utf-8",
        errors="replace",
        creationflags=NO_WINDOW,
    )
    try:
        if stdin_text:
            proc.stdin.write(stdin_text)
        proc.stdin.close()  # <-- EOF: scanf/cin unblock immediately
    except Exception:
        pass
    try:
        out, _ = proc.communicate(timeout=timeout)
        return {
            "ok": proc.returncode == 0,
            "phase": "run",
            "returncode": proc.returncode,
            "output": (out or "")[-12000:],
        }
    except subprocess.TimeoutExpired:
        proc.kill()
        out, _ = proc.communicate(timeout=5)
        return {
            "ok": False,
            "phase": "timeout",
            "returncode": None,
            "output": ((out or "") + "\n[timeout] Chương trình chạy quá %d giây và đã bị dừng." % timeout)[-12000:],
        }


# --------------------------------------------------------------------------
# Interactive run sessions: stream stdout, accept one stdin line per poll.
# --------------------------------------------------------------------------

SESSIONS = {}
SESS_LOCK = threading.Lock()
SESS_TTL = 180  # seconds without activity => auto kill


def _reader(p, q):
    """Read stdout char-by-char; emit items per line AND per prompt (no newline)."""
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
        self.decoder_buf = b""
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

    def close_stdin(self):
        """Close stdin -> EOF; only used when a run should stop reading input."""
        try:
            self.proc.stdin.close()
        except Exception:
            pass

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
    td = tempfile.mkdtemp(prefix="cpp-run-", dir=ROOT)
    src = Path(td) / "main.cpp"
    exe = Path(td) / ("main.exe" if os.name == "nt" else "main")
    src.write_bytes(code.encode("utf-8"))
    comp = subprocess.run(
        [
            "g++", "-std=c++20", "-Wall", "-Wextra", "-pedantic",
            str(src), "-o", str(exe),
        ],
        cwd=td, capture_output=True, text=True, timeout=10, creationflags=NO_WINDOW,
    )
    if comp.returncode:
        shutil.rmtree(td, ignore_errors=True)
        return None, {
            "ok": False, "phase": "compile", "output": comp.stderr[-8000:],
        }
    sid = uuid.uuid4().hex
    with SESS_LOCK:
        SESSIONS[sid] = {"session": Session(_run_cmd(exe), cwd=td), "td": td}
    return sid, {"ok": True, "phase": "session", "sessionId": sid}


def _reap():
    now = time.time()
    dead = []
    with SESS_LOCK:
        for sid, rec in list(SESSIONS.items()):
            if now - rec["session"].last > SESS_TTL:
                rec["session"].close()
                shutil.rmtree(rec["td"], ignore_errors=True)
                dead.append(sid)
        for sid in dead:
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
                if sid is None:
                    self._json(res, 200)
                else:
                    self._json(res, 200)
                return
            m = path.split("/")
            if len(m) == 6 and m[1] == "api" and m[2] == "run" and m[3] == "session" and m[5] == "input":
                sid = m[4]
                with SESS_LOCK:
                    rec = SESSIONS.get(sid)
                if not rec:
                    self._json({"ok": False, "phase": "gone", "output": "Phiên đã hết hạn."}, 200)
                    return
                text = body.get("text", "")
                ok = rec["session"].send_line(sanitize_line(str(text)))
                self._json({"ok": ok, "phase": "input"}, 200)
                return
            self.send_error(404)
        except Exception as exc:
            self._json({"ok": False, "phase": "server", "output": str(exc)}, 400)

    def do_GET(self):
        path = self.path.split("?")[0]
        m = path.split("/")
        if len(m) == 6 and m[1] == "api" and m[2] == "run" and m[3] == "session" and m[4] and m[5] == "poll":
            _reap()
            sid = m[4]
            with SESS_LOCK:
                rec = SESSIONS.get(sid)
            if not rec:
                self._json({"ok": False, "alive": False, "phase": "gone", "items": []})
                return
            st = rec["session"].poll(wait=0.25)
            if not st["alive"]:
                # Drain queued output after exit; the reader thread may lag
                # behind the child exiting, so give it a short grace period.
                extra = []
                deadline = time.time() + 1.5
                while time.time() < deadline:
                    try:
                        k, v = rec["session"].q.get_nowait()
                        extra.append({"type": k, "text": v})
                        continue
                    except queue.Empty:
                        pass
                    time.sleep(0.05)
                st["items"] += extra
                rec["session"].close()
                shutil.rmtree(rec["td"], ignore_errors=True)
                with SESS_LOCK:
                    SESSIONS.pop(sid, None)
            self._json({**st, "ok": True, "phase": "poll"})
            return
        if path == "/":
            self.path = "/CPP.html"
        return super().do_GET()

    def _run_once(self, body):
        """One-shot run: normalized stdin, stdin closed (EOF), full output."""
        code = body.get("code", "")
        stdin = body.get("input", "")
        if not isinstance(code, str) or not isinstance(stdin, str):
            raise ValueError("Dữ liệu không hợp lệ.")
        if len(stdin) > 5000:
            raise ValueError("Input quá dài.")
        with tempfile.TemporaryDirectory(prefix="cpp-run-", dir=ROOT) as td:
            src = Path(td) / "main.cpp"
            exe = Path(td) / ("main.exe" if os.name == "nt" else "main")
            src.write_bytes(code.encode("utf-8"))
            comp = subprocess.run(
                ["g++", "-std=c++20", "-Wall", "-Wextra", "-pedantic", str(src), "-o", str(exe)],
                cwd=td, capture_output=True, text=True, timeout=10, creationflags=NO_WINDOW,
            )
            if comp.returncode:
                self._json({"ok": False, "phase": "compile", "output": comp.stderr[-8000:]})
                return
            self._json(exec_once(exe, stdin, timeout=4))


print("C++ learning server: http://127.0.0.1:8766/CPP.html (interactive cin/scanf OK)")
print("Compiler:", shutil.which("g++") or "NOT FOUND")
os.chdir(ROOT)
Handler.directory = str(ROOT)
port = int(os.environ.get("PORT", "8766"))
ThreadingHTTPServer(("127.0.0.1", port), Handler).serve_forever()