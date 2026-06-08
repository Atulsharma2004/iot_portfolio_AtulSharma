# Portfolio setup script
$ErrorActionPreference = "Stop"
$root = $PSScriptRoot

# Copy resume PDF
$resumeSrc = "$env:USERPROFILE\Pictures\Extras\Atul_Sharma_Resume_ATS\Atul_Sharma_Embedded_IoT_Resume.pdf"
$resumeDst = "$root\public\assets\Atul_Sharma_Embedded_IoT_Resume.pdf"
if (Test-Path $resumeSrc) {
    Copy-Item $resumeSrc $resumeDst -Force
    Write-Host "Resume copied to public/assets/"
} else {
    Write-Warning "Resume not found at $resumeSrc — place PDF manually in public/assets/"
}

# Init git if needed
if (-not (Test-Path "$root\.git")) {
    git -C $root init
    Write-Host "Git repository initialized"
}

# Install & build
Set-Location $root
npm install
npm run build
Write-Host "Build complete. Run 'npm run dev' to preview locally."
