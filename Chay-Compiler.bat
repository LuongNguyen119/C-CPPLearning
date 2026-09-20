@echo off
REM === Chay 2 compiler server local (C va C++) roi mo trang hoc ===
cd /d "%~dp0"

echo Dang kiem tra g++ / gcc...
where g++ >nul 2>nul || echo [CANH BAO] Khong tim thay g++ trong PATH. Cai MinGW/g++ roi thu lai.
where gcc >nul 2>nul || echo [CANH BAO] Khong tim thay gcc trong PATH.

echo Dang khoi dong server C++ (cong 8766)...
start "C++ Server :8766" cmd /k "python CPP\cpp_server.py"

echo Dang khoi dong server C (cong 8765)...
start "C Server :8765" cmd /k "python C\c_server.py"

timeout /t 3 >nul
echo Mo trang C++ trong trinh duyet...
start "" http://127.0.0.1:8766/CPP.html

echo.
echo Server dang chay o 2 cua so terminal moi. DON DONG CUA SO DO de dung server.
echo Neu muon chay lai sau khi tat, chi can mo file nay lan nua.
pause
