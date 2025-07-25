# PowerShell script to serve the Budget & Time Tracker locally
Write-Host "Budget & Time Tracker - Local Server" -ForegroundColor Green
Write-Host "====================================" -ForegroundColor Green
Write-Host ""

# Check if Python is available
try {
    $pythonVersion = python --version 2>&1
    Write-Host "Found Python: $pythonVersion" -ForegroundColor Cyan
} catch {
    Write-Host "Python not found. Please install Python 3.x from https://python.org" -ForegroundColor Red
    Write-Host "Press any key to exit..." -ForegroundColor White
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit
}

# Set the port
$port = 8080

Write-Host "Starting HTTP server on port $port..." -ForegroundColor Yellow
Write-Host "Server will be available at: http://localhost:$port" -ForegroundColor Cyan
Write-Host ""
Write-Host "Files served from: $(Get-Location)" -ForegroundColor Gray
Write-Host ""
Write-Host "Application URL:" -ForegroundColor Yellow
Write-Host "- Budget Tracker: http://localhost:$port/index.html" -ForegroundColor Cyan
Write-Host "- Direct access: http://localhost:$port" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor White
Write-Host ""

# Start the server
try {
    python -m http.server $port
} catch {
    Write-Host "Failed to start server. Error: $_" -ForegroundColor Red
    Write-Host "Press any key to exit..." -ForegroundColor White
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}
