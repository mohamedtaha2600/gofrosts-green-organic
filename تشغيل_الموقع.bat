@echo off
chcp 65001 > nul
title GoFrosts Green Organic - Dev Server
color 0A

echo.
echo ============================================================
echo   GoFrosts Green Organic - تشغيل سيرفر التطوير
echo ============================================================
echo.

cd /d "%~dp0"

echo [1/2] جاري التحقق من الحزم...
call npm install --legacy-peer-deps

echo.
echo [2/2] تشغيل الموقع على المنفذ 3000...
echo.
echo الموقع سيكون متاح على: http://localhost:3000
echo اضغط Ctrl+C للإيقاف
echo.

call npm run dev

pause
