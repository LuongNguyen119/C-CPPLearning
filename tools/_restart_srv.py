# -*- coding: utf-8 -*-
import subprocess, time, os, json, socket

def port_pid(p):
    r = subprocess.run(['powershell','-NoProfile','-Command',
        'Get-NetTCPConnection -State Listen -LocalPort %d -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess' % p],
        capture_output=True, text=True, timeout=15).stdout.strip()
    for line in r.splitlines():
        if line.strip().isdigit():
            return int(line.strip())
    return None

for port in (8765, 8766):
    pid = port_pid(port)
    if pid:
        subprocess.run(['powershell','-NoProfile','-Command','Stop-Process -Id %d -Force' % pid], capture_output=True, timeout=15)
        print('killed', pid, 'on', port)
time.sleep(1)
PY = r'C:\Users\Admin\AppData\Local\Python\pythoncore-3.14-64\python.exe'
subprocess.Popen([PY, '-u', 'CPP/cpp_server.py'], cwd=os.getcwd(), stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, creationflags=0x8)
subprocess.Popen([PY, '-u', 'C/c_server.py'], cwd=os.getcwd(), stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, creationflags=0x8)
time.sleep(3)
for port in (8765, 8766):
    print(port, 'pid', port_pid(port))