# -*- coding: utf-8 -*-
"""End-to-end test of the session terminal engine via HTTP API for both C and C++."""
import json, urllib.request, time, sys

def post(port, path, obj):
    req = urllib.request.Request('http://127.0.0.1:%d%s' % (port, path),
        data=json.dumps(obj).encode('utf-8'), headers={'Content-Type': 'application/json'})
    return json.load(urllib.request.urlopen(req, timeout=15))

def get(port, path):
    return json.load(urllib.request.urlopen('http://127.0.0.1:%d%s' % (port, path), timeout=15))

def run_session(port, code, lines, wait=0.35):
    """Create session, feed each line (kept open), drain stdout, return final output."""
    r = post(port, '/api/run/session', {'code': code})
    if not r.get('ok'):
        return {'phase': r.get('phase'), 'output': r.get('output','')}
    sid = r['sessionId']
    for ln in lines:
        post(port, '/api/run/session/%s/input' % sid, {'text': ln})
        time.sleep(wait)
    collected = []
    t0 = time.time()
    while time.time() - t0 < 8:
        s = get(port, '/api/run/session/%s/poll' % sid)
        for it in s.get('items', []):
            collected.append(it['text'] if it['type']=='out' else '')
        if not s.get('alive'):
            break
        time.sleep(0.2)
    return {'phase': 'run', 'final': ''.join(collected)}

def show(name, result):
    out = result.get('final','')
    out = out.replace('\r','')
    print('\n==== %s ====' % name)
    print('phase:', result.get('phase'))
    print('final:')
    print(out[-600:] if out else '(empty)')
    return out

# 1. C: scanf ba lần + in tổng
c_scanf = '#include <stdio.h>\nint main(){int a,b,c; scanf("%d %d %d",&a,&b,&c); printf("SUM=%d\\n",a+b+c); return 0;}'
show('C scanf(3 số cùng dòng)', run_session(8765, c_scanf, ['10 20 30']))

# 2. C: scanf nhiều dòng
show('C scanf(3 dòng)', run_session(8765, c_scanf, ['10','20','30']))

# 3. C: fgets + sscanf
c_fgets = '#include <stdio.h>\n#include <string.h>\nint main(){char line[100]; int n; fgets(line,100,stdin); sscanf(line,"%d",&n); printf("N=%d\\n",n); return 0;}'
show('C fgets+sscanf', run_session(8765, c_fgets, ['42']))

# 4. C: scanf rồi fgets (getchar)
c_mix = '#include <stdio.h>\nint main(){char name[100]; int n; scanf("%d",&n); getchar(); fgets(name,100,stdin); name[strcspn(name,"\\r\\n")]=0; printf("n=%d name=%s\\n",n,name); return 0;}'
show('C scanf+getchar+fgets', run_session(8765, c_mix, ['7','Nguyen Van A']))

# 5. C++: cin loop sum
cpp_loop = '#include <iostream>\nusing namespace std;\nint main(){int n; cin>>n; int s=0; for(int i=0;i<n;i++){int x; cin>>x; s+=x;} cout<<"Tong = "<<s<<endl; return 0;}'
show('C++ cin loop sum', run_session(8766, cpp_loop, ['5','10','20','30','40','50']))

# 6. C++: getline
cpp_get = '#include <iostream>\n#include <string>\nusing namespace std;\nint main(){string name; getline(cin,name); cout<<"Hello "<<name<<endl; return 0;}'
show('C++ getline name', run_session(8766, cpp_get, ['Nguyen Van A']))

# 7. C++: cin rồi getline
cpp_mix = '#include <iostream>\n#include <string>\nusing namespace std;\nint main(){int n; string name; cin>>n; cin.ignore(); getline(cin,name); cout<<n<<"|"<<name<<endl; return 0;}'
show('C++ cin+ignore+getline', run_session(8766, cpp_mix, ['2','Nguyen Van A']))

# 8. Chương trình SinhVien (fgets+sscanf trong vòng lặp)
sv = '''#include <stdio.h>
#include <string.h>
typedef struct { char ten[50]; float diem; } SinhVien;
int main() {
    int n = 0; SinhVien sv[100]; char line[100];
    printf("Nhap so luong sinh vien: ");
    if (fgets(line, sizeof(line), stdin) == NULL || sscanf(line, "%d", &n) != 1 || n <= 0) { return 1; }
    for (int i = 0; i < n; i++) {
        printf("\\n--- Sinh vien thu %d ---\\n", i + 1);
        printf("Nhap ho ten: ");
        if (fgets(sv[i].ten, sizeof(sv[i].ten), stdin) != NULL) sv[i].ten[strcspn(sv[i].ten, "\\r\\n")] = '\\0';
        printf("Nhap diem: ");
        if (fgets(line, sizeof(line), stdin) != NULL) sscanf(line, "%f", &sv[i].diem);
    }
    printf("\\n==== DANH SACH ====\\n");
    for (int i = 0; i < n; i++) printf("%d | %s | %.2f\\n", i + 1, sv[i].ten, sv[i].diem);
    return 0;
}'''
show('C SinhVien (fgets+sscanf loop)', run_session(8765, sv, ['2','b','4','f','4']))

print('\nDONE')