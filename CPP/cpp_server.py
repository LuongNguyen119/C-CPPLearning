import json, os, shutil, subprocess, tempfile
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent


class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS, GET")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_POST(self):
        if self.path != "/api/run":
            self.send_error(404)
            return
        try:
            size = int(self.headers.get("Content-Length", "0"))
            if size > 30000:
                raise ValueError("Code quá dài (tối đa 30 KB).")
            body = json.loads(self.rfile.read(size))
            code = body.get("code", "")
            stdin = body.get("input", "")
            if not isinstance(code, str) or not isinstance(stdin, str):
                raise ValueError("Dữ liệu không hợp lệ.")
            if len(stdin) > 5000:
                raise ValueError("Input quá dài.")
            with tempfile.TemporaryDirectory(prefix="cpp-run-", dir=ROOT) as td:
                src = Path(td) / "main.cpp"
                exe = Path(td) / ("main.exe" if os.name == "nt" else "main")
                src.write_text(code, encoding="utf-8")
                comp = subprocess.run(
                    [
                        "g++",
                        "-std=c++20",
                        "-Wall",
                        "-Wextra",
                        "-pedantic",
                        str(src),
                        "-o",
                        str(exe),
                    ],
                    cwd=td,
                    capture_output=True,
                    text=True,
                    timeout=10,
                )
                if comp.returncode:
                    result = {
                        "ok": False,
                        "phase": "compile",
                        "output": comp.stderr[-8000:],
                    }
                else:
                    try:
                        run = subprocess.run(
                            [str(exe)],
                            cwd=td,
                            input=stdin,
                            capture_output=True,
                            text=True,
                            timeout=4,
                        )
                        result = {
                            "ok": run.returncode == 0,
                            "phase": "run",
                            "returncode": run.returncode,
                            "output": (run.stdout + run.stderr)[-12000:],
                        }
                    except subprocess.TimeoutExpired:
                        result = {
                            "ok": False,
                            "phase": "timeout",
                            "output": "Chương trình vượt quá 4 giây và đã bị dừng.",
                        }
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            self.wfile.write(json.dumps(result, ensure_ascii=False).encode())
        except Exception as exc:
            self.send_response(400)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            self.wfile.write(
                json.dumps(
                    {"ok": False, "phase": "server", "output": str(exc)},
                    ensure_ascii=False,
                ).encode()
            )

    def do_GET(self):
        if self.path == "/":
            self.path = "/CPP.html"
        return super().do_GET()


print("C++ learning server: http://127.0.0.1:8766/CPP.html")
print("Compiler:", shutil.which("g++") or "NOT FOUND")
os.chdir(ROOT)
Handler.directory = str(ROOT)
port = int(os.environ.get("PORT", "8766"))
ThreadingHTTPServer(("127.0.0.1", port), Handler).serve_forever()
