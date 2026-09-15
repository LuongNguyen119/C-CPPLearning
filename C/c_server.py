import json, os, subprocess, tempfile, shutil
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PARENT_ROOT = ROOT.parent
class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS, GET')
        super().end_headers()
    def do_OPTIONS(self):
        self.send_response(204); self.end_headers()
    def do_POST(self):
        if self.path != '/api/run':
            self.send_error(404); return
        try:
            size = int(self.headers.get('Content-Length', '0'))
            if size > 20000: raise ValueError('Code quá dài (tối đa 20 KB).')
            body = json.loads(self.rfile.read(size))
            code = body.get('code', '')
            stdin = body.get('input', '')
            if not isinstance(code, str) or not isinstance(stdin, str): raise ValueError('Dữ liệu không hợp lệ.')
            if len(stdin) > 5000: raise ValueError('Input quá dài.')
            with tempfile.TemporaryDirectory(prefix='c-run-', dir=ROOT) as td:
                src, exe = Path(td) / 'main.c', Path(td) / ('main.exe' if os.name == 'nt' else 'main')
                src.write_text(code, encoding='utf-8')
                comp = subprocess.run(['gcc', '-std=c11', '-Wall', '-Wextra', str(src), '-o', str(exe)], capture_output=True, text=True, timeout=8)
                if comp.returncode != 0:
                    result = {'ok': False, 'phase': 'compile', 'output': comp.stderr[-6000:]}
                else:
                    try:
                        run = subprocess.run([str(exe)], input=stdin, capture_output=True, text=True, timeout=3)
                        result = {'ok': run.returncode == 0, 'phase': 'run', 'returncode': run.returncode, 'output': (run.stdout + run.stderr)[-10000:]}
                    except subprocess.TimeoutExpired:
                        result = {'ok': False, 'phase': 'timeout', 'output': 'Chương trình vượt quá 3 giây và đã bị dừng.'}
            self.send_response(200); self.send_header('Content-Type','application/json; charset=utf-8'); self.end_headers(); self.wfile.write(json.dumps(result, ensure_ascii=False).encode())
        except Exception as e:
            self.send_response(400); self.send_header('Content-Type','application/json; charset=utf-8'); self.end_headers(); self.wfile.write(json.dumps({'ok':False,'phase':'server','output':str(e)}, ensure_ascii=False).encode())
    def do_GET(self):
        if self.path == '/': self.path = '/C/C.html'
        return super().do_GET()

print('C learning server: http://127.0.0.1:8765/C/C.html')
print('Home: http://127.0.0.1:8765/CPP/index.html')
print('Compiler:', shutil.which('gcc') or 'NOT FOUND')
os.chdir(PARENT_ROOT)
Handler.directory = str(PARENT_ROOT)
port=int(os.environ.get('PORT','8765')); ThreadingHTTPServer(('127.0.0.1', port), Handler).serve_forever()
