# Deploy iot_portfolio_AtulSharma to GitHub + Vercel
# Run after: gh auth login

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "Checking GitHub authentication..." -ForegroundColor Cyan
gh auth status
if ($LASTEXITCODE -ne 0) {
    Write-Host "Not logged in. Run: gh auth login" -ForegroundColor Red
    exit 1
}

Write-Host "Creating GitHub repo Atulsharma2004/iot_portfolio_AtulSharma..." -ForegroundColor Cyan
$remoteExists = git remote 2>$null | Select-String -Pattern '^origin$' -Quiet
if (-not $remoteExists) {
    gh repo create Atulsharma2004/iot_portfolio_AtulSharma --public --source=. --remote=origin --description "Embedded Systems & IoT Firmware Engineer portfolio - Atul Sharma"
    git push -u origin main
} else {
    Write-Host "Remote already configured: $remoteExists"
    git push -u origin main
}

Write-Host "Deploying to Vercel..." -ForegroundColor Cyan
npx vercel --prod --yes

Write-Host "Done! Repo: https://github.com/Atulsharma2004/iot_portfolio_AtulSharma" -ForegroundColor Green
