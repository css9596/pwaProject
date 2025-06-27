// copy_cloudporte_images.js
// public/images/cloudporte/의 모든 파일을 src/images/cloudporte/로 복사

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../public/images/cloudporte');
const destDir = path.join(__dirname, '../src/images/cloudporte');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.readdirSync(srcDir).forEach(file => {
  const srcFile = path.join(srcDir, file);
  const destFile = path.join(destDir, file);
  if (fs.statSync(srcFile).isFile()) {
    fs.copyFileSync(srcFile, destFile);
    console.log(`Copied: ${file}`);
  }
});

console.log('이미지 복사 완료!');
