# -*- coding: utf-8 -*-
import json, urllib.request, urllib.error, time, sys

def post(port, path, obj):
    req = urllib.request.Request('http://127.0.0.1:%d%s' % (port, path),
        data=json.dumps(obj).encode('utf-8'), headers={'Content-Type': 'application/json'})
    try:
        r = urllib.request.urlopen(req, timeout=10)
        return json.loads(r.read().decode('utf-8', 'replace'))
    except urllib.error.HTTPError as e:
        return {'http_err': e.code, 'body': e.read().decode('utf-8', 'replace')[:200]}
    except Exception as e:
        return {'exc': str(e)}

def get(port, path):
    try:
        r = urllib.request.urlopen('http://127.0.0.1:%d%s' % (port, path), timeout=8)
        return json.loads(r.read().decode('utf-8', 'replace'))
    except Exception as e:
        return {'exc': str(e), 'type': 'GET'}

code = '#include <stdio.h>\nint main(){int a,b,c; scanf("%d %d %d",&a,&b,&c); printf("SUM=%d\\n",a+b+c); return 0;}'

print('1) start session')
r = post(8765, '/api/run/session', {'code': code})
print('   ', json.dumps(r, ensure_ascii=False)[:120])
if not r.get('ok'):
    print('   compile out:', (r.get('output') or '')[:300]); sys.exit(0)
sid = r['sessionId']

print('2) poll (no input yet)')
print('   ', json.dumps(get(8765, '/api/run/session/%s/poll' % sid), ensure_ascii=False)[:140])

print('3) input each line + poll after each')
for d in ['10', '20', '30']:
    print('   input:', d, '->', json.dumps(post(8765, '/api/run/session/%s/input' % sid, {'text': d}), ensure_ascii=False)[:80])
    time.sleep(0.3)
    p = get(8765, '/api/run/session/%s/poll' % sid)
    print('   poll :', json.dumps(p, ensure_ascii=False)[:160])

print('4) final drain')
for i in range(8):
    p = get(8765, '/api/run/session/%s/poll' % sid)
    print('   poll', i, json.dumps(p, ensure_ascii=False)[:160])
    if 'exc' in p or not p.get('alive'):
        break
    time.sleep(0.3)