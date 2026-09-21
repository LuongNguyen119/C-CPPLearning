@echo off
chcp 65001 >nul
title Dev-C Launcher
echo ==========================================
echo    Dev-C  --  Môi trường C/C++ kiểu Dev-C++
echo ==========================================
echo.
echo Dang khoi dong 2 compiler server...
echo.

:: Start C++ server (port 8766)
start "CPP Server" /min python CPP/cpp_server.py

:: Start C server (port 8765)
start "C Server" /min python C/c_server.py

echo Dang cho server khoi dong (3s)...
timeout /t 3 /nobreak >nul

echo.
echo Mo Dev-C editor...
start "" "Dev-C/index.html"

echo.
echo Da san sang!
echo - Editor: Dev-C/index.html
echo - C++ API : http://127.0.0.1:8766/api
echo - C API   : http://127.0.0.1:8765/api
echo.
echo Nhan phim bat ky de dong cua so nay (server van chay ngam).
pause >nul