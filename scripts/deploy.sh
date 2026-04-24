#!/usr/bin/env bash
set -euo pipefail

FTP_SERVER="bgfest.sk"
FTP_USERNAME="ghdeploy@bgfest.sk"
FTP_REMOTE_DIR="/"
LOCAL_DIR="./out/"

cd "$(dirname "$0")/.."

if ! command -v lftp >/dev/null 2>&1; then
  echo "lftp is not installed. Install it with: brew install lftp"
  exit 1
fi

if [[ -z "${FTP_PASSWORD:-}" ]]; then
  read -rsp "FTP password for ${FTP_USERNAME}: " FTP_PASSWORD
  echo
fi

echo "==> Building static site"
npm run build

echo "==> Uploading to ${FTP_SERVER} via FTPS"
lftp -c "
set ftp:ssl-force true;
set ftp:ssl-protect-data true;
set ssl:verify-certificate no;
set ftp:passive-mode true;
set net:max-retries 5;
set net:reconnect-interval-base 3;
set net:timeout 20;
open -u '${FTP_USERNAME}','${FTP_PASSWORD}' ftp://${FTP_SERVER};
mirror --reverse --verbose --delete --parallel=2 ${LOCAL_DIR} ${FTP_REMOTE_DIR};
bye
"

echo "==> Done. Verify at https://${FTP_SERVER}/"
