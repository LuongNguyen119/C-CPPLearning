# -*- coding: utf-8 -*-
import json, urllib.request, time

code = '#include <stdio.h>\n#include <string.h>\ntypedef struct { char ten[50]; float diem; } SinhVien;\nint main() {\n    int n = 0; SinhVien sv[100]; char line[100];\n    printf("Nhap so luong: ");\n    if (fgets(line, sizeof(line), stdin) == NULL || sscanf(line, "%d", &n) != 1 || n <= 0) { printf("bad\\n"); return 1; }\n    for (int i = 0; i < n; i++) {\n        printf("\\n--- SV %d ---\\n", i + 1);\n        printf("Ten: ");\n        if (fgets(sv[i].ten, sizeof(sv[i].ten), stdin) != NULL) sv[i].ten[strcspn(sv[i].ten, "\\r\\n")] = 0;\n        printf("Diem: ");\n        if (fgets(line, sizeof(line), stdin) != NULL) sscanf(line, "%f", &sv[i].diem);\n    }\n    printf("\\n==== DANH SACH ====\\n");\n    for (int i = 0; i < n; i++) printf("%d | %s | %.2f\\n", i + 1, sv[i].ten, sv[i].diem);\n    return 0;\n}'

# one-shot
req = urllib.request.Request("http://127.0.0.1:8765/api/run", data=json.dumps({"code": code, "input": "2\nb\n4\nf\n4\n"}).encode(), headers={"Content-Type": "application/json"})
r = json.load(urllib.request.urlopen(req, timeout=20))
print("ONCE:", r.get("ok"), r.get("phase"), repr((r.get("output") or "")[:200]))

# session
req = urllib.request.Request("http://127.0.0.1:8765/api/run/session", data=json.dumps({"code": code}).encode(), headers={"Content-Type": "application/json"})
res = json.load(urllib.request.urlopen(req, timeout=20))
print("SESS:", res)
sid = res.get("sessionId")
if sid:
    for d in ["2", "b", "4", "f", "4"]:
        urllib.request.urlopen(urllib.request.Request("http://127.0.0.1:8765/api/run/session/%s/input" % sid, data=json.dumps({"text": d}).encode(), headers={"Content-Type": "application/json"}), timeout=10).read()
    time.sleep(1.0)
    poll = json.load(urllib.request.urlopen("http://127.0.0.1:8765/api/run/session/%s/poll" % sid, timeout=10))
    print("POLL1:", json.dumps(poll, ensure_ascii=False)[:300])
    time.sleep(0.6)
    poll2 = json.load(urllib.request.urlopen("http://127.0.0.1:8765/api/run/session/%s/poll" % sid, timeout=10))
    print("POLL2:", json.dumps(poll2, ensure_ascii=False)[:300])