const puppeteer = require('puppeteer')
const QRCode = require('qrcode')
const http = require('http')
const fs = require('fs')
const path = require('path')

const PUBLIC = path.resolve(__dirname, '..', 'public')

function startServer(port) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const filePath = path.join(PUBLIC, req.url.split('?')[0])
      const ext = path.extname(filePath)
      const mime = { '.html': 'text/html', '.png': 'image/png', '.jpg': 'image/jpeg' }
      fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end(); return }
        res.writeHead(200, { 'Content-Type': mime[ext] || 'text/plain' })
        res.end(data)
      })
    })
    server.listen(port, () => resolve(server))
  })
}

async function makeQR(url, dark = '#000000', light = '#FFFFFF') {
  return QRCode.toDataURL(url, {
    width: 200,
    margin: 1,
    errorCorrectionLevel: 'M',
    color: { dark, light },
  })
}

async function capture(browser, pageUrl, outFile, qrSelector, qrDataUrl) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1240, height: 874, deviceScaleFactor: 1 })
  await page.goto(pageUrl, { waitUntil: 'networkidle0', timeout: 30000 })
  await page.evaluate(() => document.fonts.ready)
  // Inject real QR code
  await page.evaluate((sel, dataUrl) => {
    const el = document.querySelector(sel)
    if (el) { el.src = dataUrl; el.style.display = 'block' }
  }, qrSelector, qrDataUrl)
  await new Promise(r => setTimeout(r, 600))
  await page.screenshot({
    path: path.join(PUBLIC, outFile),
    type: 'png',
    clip: { x: 0, y: 0, width: 1240, height: 874 },
  })
  await page.close()
  console.log(`✓  ${outFile}`)
}

;(async () => {
  const server = await startServer(4321)

  const [qrBusiness, qrPersonal] = await Promise.all([
    makeQR('https://business.klaxo.app', '#000000', '#ffffff'),
    makeQR('https://klaxo.app', '#000000', '#ffffff'),
  ])

  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    await capture(browser, 'http://localhost:4321/flyer-business.html', 'klaxo-flyer-business.png', '#qr-img', qrBusiness)
    await capture(browser, 'http://localhost:4321/flyer-personal.html',  'klaxo-flyer-personal.png',  '#qr-img', qrPersonal)
    console.log('\nFlyers prontos em public/')
  } finally {
    await browser.close()
    server.close()
  }
})()
