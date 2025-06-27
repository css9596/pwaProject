// fetch_cloudporte_assets.js
// DB Inc. 포털 클론 SPA의 이미지/아이콘 리소스를 원본 서버에서 자동 다운로드하여 public/images/cloudporte/에 저장하는 스크립트

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

// 원본 서버 URL
const BASE_URL = 'https://ep.dbinc.co.kr';
// 리소스 저장 경로
const TARGET_DIR = path.join(__dirname, '../public/images/cloudporte');
// CSS/JS/컴포넌트 등에서 참조하는 파일 목록을 추출할 경로
const SRC_DIR = path.join(__dirname, '../src');
const CSS_FILES = [
  path.join(SRC_DIR, 'style.css'),
  path.join(SRC_DIR, 'portal.css'),
];

// CSS에서 url(...) 패턴 추출
function extractUrlsFromCss(css) {
  const regex = /url\((['"]?)(.*?)\1\)/g;
  const urls = [];
  let match;
  while ((match = regex.exec(css)) !== null) {
    let url = match[2];
    if (!url.startsWith('data:')) urls.push(url);
  }
  return urls;
}

// JS/JSX에서 require/import/static 참조 추출 (간단 버전)
function extractUrlsFromJs(js) {
  const regex = /(['"])(\/images\/cloudporte\/[^'"]+)\1/g;
  const urls = [];
  let match;
  while ((match = regex.exec(js)) !== null) {
    urls.push(match[2]);
  }
  return urls;
}

// 파일 다운로드 함수
function download(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, (res) => {
      if (res.statusCode === 200) {
        mkdir(path.dirname(dest), { recursive: true })
          .then(() => {
            const file = fs.createWriteStream(dest);
            res.pipe(file);
            file.on('finish', () => file.close(resolve));
          });
      } else if (res.statusCode === 302 && res.headers.location) {
        // 리다이렉트
        download(res.headers.location, dest).then(resolve).catch(reject);
      } else {
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function main() {
  // CSS에서 이미지 경로 추출
  let allUrls = [];
  for (const cssFile of CSS_FILES) {
    if (fs.existsSync(cssFile)) {
      const css = await readFile(cssFile, 'utf8');
      allUrls = allUrls.concat(extractUrlsFromCss(css));
    }
  }
  // src/components 등 JS/JSX에서 이미지 경로 추출
  const walk = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
        results = results.concat(walk(filePath));
      } else if (/\.(js|jsx)$/.test(file)) {
        const js = fs.readFileSync(filePath, 'utf8');
        results = results.concat(extractUrlsFromJs(js));
      }
    });
    return results;
  };
  allUrls = allUrls.concat(walk(SRC_DIR));

  // 중복 제거 및 정규화
  allUrls = Array.from(new Set(allUrls.map((u) => u.replace(/^[.\/]+/, '/'))));
  // /images/cloudporte/로 시작하는 경로만 필터링
  allUrls = allUrls.filter((u) => u.startsWith('/images/cloudporte/'));

  if (allUrls.length === 0) {
    console.log('다운로드할 이미지가 없습니다.');
    return;
  }

  // 다운로드
  for (const url of allUrls) {
    const srcUrl = BASE_URL + url;
    const destPath = path.join(TARGET_DIR, url.replace('/images/cloudporte/', ''));
    if (fs.existsSync(destPath)) {
      console.log(`[SKIP] ${destPath}`);
      continue;
    }
    try {
      console.log(`[DOWNLOAD] ${srcUrl} -> ${destPath}`);
      await download(srcUrl, destPath);
    } catch (e) {
      console.error(`[FAIL] ${srcUrl}: ${e.message}`);
    }
  }
  console.log('이미지 자동 다운로드 완료!');
}

if (require.main === module) {
  main();
}
