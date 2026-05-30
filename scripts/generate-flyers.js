const puppeteer = require('puppeteer')
const path = require('path')

async function generateFlyer(browser, htmlFile, outFile) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1240, height: 874, deviceScaleFactor: 1 })
  const url = `file://${path.resolve(__dirname, '..', 'public', htmlFile)}`
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready)
  await new Promise(r => setTimeout(r, 800))
  await page.screenshot({
    path: path.resolve(__dirname, '..', 'public', outFile),
    type: 'png',
    clip: { x: 0, y: 0, width: 1240, height: 874 },
  })
  await page.close()
  console.log(`✓  ${outFile}`)
}

;(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    await generateFlyer(browser, 'flyer-business.html', 'klaxo-flyer-business.png')
    await generateFlyer(browser, 'flyer-personal.html', 'klaxo-flyer-personal.png')
    console.log('\nFlyers gerados em public/')
  } finally {
    await browser.close()
  }
})()
