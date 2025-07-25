@echo off
echo Budget ^& Time Tracker - Local Server
echo ====================================
echo.

:: Check if Python is available
python --version >nul 2>&1
if errorlevel 1 (
    echo Python not found. Please install Python 3.x from https://python.org
    pause
    exit /b 1
)

:: Get Python version
for /f "tokens=*" %%a in ('python --version 2^>^&1') do set pythonVersion=%%a
echo Found Python: %pythonVersion%

:: Set the port
set port=8080

echo.
echo Starting HTTP server on port %port%...
echo Server will be available at: http://localhost:%port%
echo.
echo Files served from: %cd%
echo.
echo Application URL:
echo - Budget Tracker: http://localhost:%port%/index.html
echo - Direct access: http://localhost:%port%
echo.
echo Press Ctrl+C to stop the server
echo.

:: Start the server
python -m http.server %port%

if errorlevel 1 (
    echo Failed to start server.
    pause
)
