# -*- coding: utf-8 -*-
import json, urllib.request, time

def post(path, obj, port=8765):
    req = urllib.request.Request('http://127.0.0.1:%d%s' % (port, path),
        data=json.dumps(obj).encode('utf-8'), headers={'Content-Type':'application/json'})
    return json.load(urllib.request.urlopen(req, timeout=15))

def get(path, port=8765):
    return json.load(urllib.request.urlopen('http://127.0.0.1:%d%s' % (port, path), timeout=15))

code = ('#include <stdio.h>\n#include <string.h>\nint main(){ int n=0; char line[100];\n'
        '  printf("Nhap so luong sinh vien: ");\n'
        '  if (fgets(line, sizeof(line), stdin) == NULL || sscanf(line, "%d", &n) != 1 || n <= 0) { '
        'printf("invalid\\n"); return 1; }\n'
        '  for (int i = 0; i < n; i++) { printf("ten: "); fgets(line, sizeof(line), stdin); '
        'printf("diem: "); fgets(line, sizeof(line), stdin); }\n'
        '  printf("DONE %d\\n", n); return 0; }')

r = post('/api/run/session', {'code': code})
print('session:', r.get('ok'), r.get('sessionId'))
sid = r['sessionId']

for v in ['2', 'b', '4', 'f', '4']:
    post('/api/run/session/%s/input' % sid, {'text': v})

all_out = ''
for i in range(20):
    st = get('/api/run/session/%s/poll' % sid)
    for it in st.get('items', []):
        if it['type'] == 'out':
            all_out += it['text']
    if not st.get('alive'):
        print('exit=%s' % st.get('exitCode'))
        break
    time.sleep(0.15)
print('final output:', repr(all_out))