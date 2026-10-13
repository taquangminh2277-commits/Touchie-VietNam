import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✔ [PASS] ${testName}`);
  } else {
    failedTests++;
    console.error(`  ✖ [FAIL] ${testName}`);
    if (details) console.error(`     ↳ ${details}`);
  }
}

async function runVerification() {
  console.log('\n========================================');
  console.log('  TOUCHIE VIETNAM - CI/CD AUTOMATED TESTS');
  console.log('========================================\n');

  // --- SUITE 1: Core File & Structure Checks ---
  console.log('▶ [1/5] Core Files & Structure Verification');
  const indexPath = path.join(rootDir, 'index.html');
  const serverPath = path.join(rootDir, 'server.mjs');

  assert(fs.existsSync(indexPath), 'index.html exists');
  assert(fs.existsSync(serverPath), 'server.mjs exists');

  const htmlContent = fs.readFileSync(indexPath, 'utf-8');
  assert(htmlContent.length > 5000, `index.html is non-empty (${htmlContent.length} bytes)`);
  assert(htmlContent.includes('<!DOCTYPE html>') || htmlContent.includes('<!doctype html>'), 'Valid HTML5 doctype declaration');
  assert(htmlContent.includes('<title>Touchie Vietnam'), 'Page title mentions Touchie Vietnam');
  assert(htmlContent.includes('viewport'), 'Responsive viewport meta tag present');
  assert(htmlContent.includes('charset="UTF-8"') || htmlContent.includes('charset="utf-8"'), 'UTF-8 charset specified');

  // --- SUITE 2: Static Asset Integrity ---
  console.log('\n▶ [2/5] Static Asset Verification');
  const imageRegex = /src=["'](src\/assets\/images\/[^"']+)["']/g;
  const matches = [...htmlContent.matchAll(imageRegex)];
  const assetPaths = [...new Set(matches.map(m => m[1]))];

  assert(assetPaths.length > 0, `Found ${assetPaths.length} local asset references in index.html`);
  for (const assetRelPath of assetPaths) {
    const fullPath = path.join(rootDir, assetRelPath);
    const exists = fs.existsSync(fullPath);
    let size = 0;
    if (exists) {
      size = fs.statSync(fullPath).size;
    }
    assert(exists && size > 100, `Asset file exists and valid: ${assetRelPath}`, `File missing or 0-byte at: ${fullPath}`);
  }

  // --- SUITE 3: Interactive Sections & Anchor Links ---
  console.log('\n▶ [3/5] Section Anchors & Navigation Targets');
  const requiredSections = [
    'collections',
    'fragrance-pyramid',
    'scent-matcher',
    'giftsets',
    'care-guide',
    'philosophy'
  ];
  for (const secId of requiredSections) {
    assert(htmlContent.includes(`id="${secId}"`), `Section anchor target id="${secId}" exists`);
  }

  // --- SUITE 4: E-Commerce Logic & Pricing Integrity ---
  console.log('\n▶ [4/5] E-Commerce Logic & Pricing Sanity');
  assert(htmlContent.includes('id="cart-drawer"'), 'Cart drawer container (#cart-drawer) present');
  assert(htmlContent.includes('id="cart-items"'), 'Cart items list container (#cart-items) present');
  assert(htmlContent.includes('id="cart-total"'), 'Cart total display (#cart-total) present');
  assert(htmlContent.includes('id="quickview-modal"'), 'Quick view modal (#quickview-modal) present');
  assert(htmlContent.includes('id="qr-popup"'), 'VietQR payment modal (#qr-popup) present');

  // Pricing sanity
  assert(htmlContent.includes('149.000₫'), 'Single candle jar price (149.000₫) present in markup');
  assert(htmlContent.includes('399.000₫'), 'Giftset / Freeship price (399.000₫) present in markup');
  assert(!htmlContent.includes('240.000₫'), 'Stale 240.000₫ price completely removed');

  // Key JS functions
  assert(htmlContent.includes('function addToCart('), 'JS function addToCart() declared');
  assert(htmlContent.includes('function renderCart('), 'JS function renderCart() declared');
  assert(htmlContent.includes('function submitOrder('), 'JS function submitOrder() declared');
  assert(htmlContent.includes('function selectMood('), 'JS function selectMood() declared');

  // --- SUITE 5: HTTP Local Server Smoke Test ---
  console.log('\n▶ [5/5] HTTP Server Integration Smoke Test');
  const testPort = 3399;
  const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.mjs': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.json': 'application/json'
  };

  const testServer = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath === '/') reqPath = '/index.html';
    const filePath = path.join(rootDir, reqPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 
        'Content-Type': mimeTypes[ext] || 'application/octet-stream',
        'Connection': 'close'
      });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain', 'Connection': 'close' });
      res.end('Not Found');
    }
  });

  await new Promise((resolve) => testServer.listen(testPort, resolve));
  console.log(`  [INFO] Temporary test server spawned on port ${testPort}`);

  try {
    const res = await fetch(`http://localhost:${testPort}/`, { headers: { Connection: 'close' } });
    assert(res.status === 200, 'HTTP GET / returns 200 OK');
    assert(res.headers.get('content-type')?.includes('text/html'), 'Content-Type is text/html');
    const body = await res.text();
    assert(body.includes('Touchie Vietnam'), 'Response body contains Touchie Vietnam');

    // Test static image serve
    const imgRes = await fetch(`http://localhost:${testPort}/src/assets/images/warm-orange.png`, { headers: { Connection: 'close' } });
    assert(imgRes.status === 200, 'HTTP GET /src/assets/images/warm-orange.png returns 200 OK');
    assert(imgRes.headers.get('content-type') === 'image/png', 'Static image Content-Type is image/png');
  } catch (err) {
    assert(false, 'HTTP Server request failed', err.message);
  } finally {
    if (typeof testServer.closeAllConnections === 'function') {
      testServer.closeAllConnections();
    }
    await new Promise((resolve) => testServer.close(resolve));
  }

  // --- REPORT SUMMARY ---
  console.log('\n----------------------------------------');
  console.log(`Total Checks: ${totalTests} | Passed: ${passedTests} | Failed: ${failedTests}`);
  console.log('----------------------------------------');

  if (failedTests > 0) {
    console.error('\n✖ [FAIL] Verification failed. Please resolve the errors above.\n');
    process.exit(1);
  } else {
    console.log('\n✔ [SUCCESS] All CI/CD verifications passed successfully!\n');
    process.exit(0);
  }
}

runVerification().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
