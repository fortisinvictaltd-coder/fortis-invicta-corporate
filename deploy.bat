@echo off
echo ==========================================
echo FORTIS INVICTA LTD - Deployment Script
echo ==========================================
echo.

cd /d "C:\Users\GADGETS SOLUTION\Desktop\fortis-invicta-corporate"

echo [1/3] Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo [2/3] Building project...
call npm run build
if errorlevel 1 (
    echo ERROR: Build failed
    pause
    exit /b 1
)

echo [3/3] Deploying to Vercel...
call vercel --prod
if errorlevel 1 (
    echo ERROR: Deployment failed
    pause
    exit /b 1
)

echo.
echo ==========================================
echo Deployment Complete!
echo Website: https://fortisinvicta.com
echo Admin:    https://fortisinvicta.com/admin
echo Email: cadjatu@fortisinvicta.com
echo Pass: Cadjatu@2026
echo ==========================================
pause