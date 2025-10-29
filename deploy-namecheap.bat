@echo off
echo Building electrical works website for Namecheap hosting...
echo.

echo Installing dependencies...
call npm install

echo.
echo Building static site...
call npm run build

echo.
echo Creating deployment package...
if exist "deploy-package" rmdir /s /q "deploy-package"
mkdir "deploy-package"

echo Copying files to deployment package...
xcopy "out\*" "deploy-package\" /e /i /h /y

echo.
echo Creating upload instructions...
echo # Namecheap Hosting Upload Instructions > deploy-package\UPLOAD_INSTRUCTIONS.txt
echo. >> deploy-package\UPLOAD_INSTRUCTIONS.txt
echo 1. Log into your Namecheap hosting control panel >> deploy-package\UPLOAD_INSTRUCTIONS.txt
echo 2. Go to File Manager >> deploy-package\UPLOAD_INSTRUCTIONS.txt
echo 3. Navigate to public_html folder >> deploy-package\UPLOAD_INSTRUCTIONS.txt
echo 4. Upload ALL files from this deploy-package folder >> deploy-package\UPLOAD_INSTRUCTIONS.txt
echo 5. Make sure index.html is in the root of public_html >> deploy-package\UPLOAD_INSTRUCTIONS.txt
echo 6. Your site will be live at electricalworksingapore.com >> deploy-package\UPLOAD_INSTRUCTIONS.txt

echo.
echo ✅ Deployment package created in 'deploy-package' folder
echo 📁 Upload all files from 'deploy-package' to your Namecheap public_html directory
echo 🌐 Your site will be live at electricalworksingapore.com
echo.
pause
