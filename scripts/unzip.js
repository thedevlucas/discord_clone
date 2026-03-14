import { execSync } from 'child_process';
import fs from 'fs';
import https from 'https';
import http from 'http';

const zipUrl = 'https://v0chat-agent-data-prod.s3.us-east-1.amazonaws.com/vm-binary/HMt9lyC5Jym/44cc95e0dd2aa80616d402ef26877fd777171655373776e94df0d01c267f5e46.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA52KF4VHQDTZ5RDMT%2F20260314%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260314T042657Z&X-Amz-Expires=3600&X-Amz-Signature=e0031ee0fe767e615ae65c4653039959829d3e52c984ec940559e2c8ca6861ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject';
const zipPath = '/tmp/dm_chat.zip';
const destPath = '/tmp/page_content_dm';

async function downloadAndExtract() {
  // Create destination dir
  fs.mkdirSync(destPath, { recursive: true });
  
  // Download zip
  const file = fs.createWriteStream(zipPath);
  await new Promise((resolve, reject) => {
    https.get(zipUrl, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
  
  console.log('Downloaded zip file');
  
  // Extract
  execSync(`unzip -o "${zipPath}" -d "${destPath}"`, { stdio: 'inherit' });
  console.log('Unzipped successfully to:', destPath);
}

downloadAndExtract();
