import { execSync } from 'child_process';
import path from 'path';

const zipPath = '/vercel/share/v0-project/b_EmwCenVAaRQ-1773451237740/page_content (4).zip';
const destPath = '/vercel/share/v0-project/b_EmwCenVAaRQ-1773451237740/page_content_dm';

execSync(`unzip -o "${zipPath}" -d "${destPath}"`, { stdio: 'inherit' });
console.log('Unzipped successfully to:', destPath);
