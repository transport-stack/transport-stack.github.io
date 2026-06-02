const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1920 }
  });

  await page.goto('file://' + path.join(__dirname, '..', 'dist', 'poster.html'));

  // Wait for fonts to load
  await page.waitForTimeout(500);

  await page.screenshot({
    path: path.join(__dirname, '..', 'dist', 'poster-screenshot.png'),
    fullPage: false
  });

  console.log('✓ Screenshot saved to dist/poster-screenshot.png');
  await browser.close();
})();
