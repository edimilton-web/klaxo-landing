import sharp from 'sharp'
import { writeFileSync, readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

// ─── LOGO 240×240 ──────────────────────────────────────────────────────────

const nunitoB64 = readFileSync(join(__dirname, 'nunito-900.ttf')).toString('base64')

// ── klaxo-logo.png — ícone 240×240 com gradiente exacto do componente KlaxoLogo
const logoSvg = `<svg width="240" height="240" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#A78BFA"/>
      <stop offset="52%"  stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#3B0764"/>
    </linearGradient>
    <style>
      @font-face {
        font-family: 'Nunito';
        font-weight: 900;
        src: url('data:font/truetype;base64,${nunitoB64}') format('truetype');
      }
    </style>
  </defs>
  <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#g)"/>
  <text
    x="50" y="70"
    text-anchor="middle"
    font-family="Nunito, sans-serif"
    font-size="62"
    font-weight="900"
    fill="white"
  >K</text>
</svg>`

await sharp(Buffer.from(logoSvg))
  .png()
  .toFile(join(publicDir, 'klaxo-logo.png'))
console.log('✓ klaxo-logo.png')

// ─── DASHBOARD SCREENSHOT 1270×760 ─────────────────────────────────────────

const dash = `<svg width="1270" height="760" viewBox="0 0 1270 760" xmlns="http://www.w3.org/2000/svg">

  <!-- Background -->
  <rect width="1270" height="760" fill="#0A0F1E"/>

  <!-- Sidebar -->
  <rect x="0" y="0" width="228" height="760" fill="#070C18"/>
  <rect x="227" y="0" width="1" height="760" fill="rgba(255,255,255,0.06)"/>

  <!-- Sidebar logo -->
  <text x="28" y="54" font-family="Arial Black, Arial" font-size="24" font-weight="900" fill="#8B5CF6">K</text>
  <text x="50" y="54" font-family="Arial Black, Arial" font-size="19" font-weight="700" fill="#FFFFFF">laxo</text>

  <!-- Sidebar nav: Overview (active) -->
  <rect x="12" y="80" width="204" height="42" rx="10" fill="#7C3AED" fill-opacity="0.18"/>
  <rect x="12" y="80" width="4" height="42" rx="2" fill="#7C3AED"/>
  <rect x="36" y="95" width="14" height="12" rx="3" fill="#A78BFA"/>
  <text x="58" y="106" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">Overview</text>

  <!-- Sidebar nav: Subscriptions -->
  <rect x="36" y="138" width="12" height="12" rx="2" fill="rgba(255,255,255,0.2)"/>
  <text x="58" y="149" font-family="Arial, sans-serif" font-size="14" fill="rgba(255,255,255,0.38)">Subscriptions</text>

  <!-- Sidebar nav: Analytics -->
  <rect x="36" y="178" width="12" height="12" rx="2" fill="rgba(255,255,255,0.2)"/>
  <text x="58" y="189" font-family="Arial, sans-serif" font-size="14" fill="rgba(255,255,255,0.38)">Analytics</text>

  <!-- Sidebar nav: Settings -->
  <rect x="36" y="218" width="12" height="12" rx="2" fill="rgba(255,255,255,0.2)"/>
  <text x="58" y="229" font-family="Arial, sans-serif" font-size="14" fill="rgba(255,255,255,0.38)">Settings</text>

  <!-- Sidebar Pro badge -->
  <rect x="14" y="706" width="200" height="38" rx="9" fill="#7C3AED" fill-opacity="0.14" stroke="#7C3AED" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="36" cy="725" r="7" fill="#7C3AED"/>
  <text x="50" y="730" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#A78BFA">Pro Plan · Active</text>

  <!-- ── MAIN CONTENT ──────────────────── -->

  <!-- Page header -->
  <text x="264" y="52" font-family="Arial Black, Arial" font-size="26" font-weight="900" fill="#FFFFFF">Overview</text>
  <text x="264" y="74" font-family="Arial, sans-serif" font-size="13" fill="rgba(255,255,255,0.35)">May 2026</text>

  <!-- Add button -->
  <rect x="1144" y="26" width="102" height="36" rx="9" fill="#7C3AED"/>
  <text x="1195" y="49" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">+ Add</text>

  <!-- ── STAT CARDS ── -->

  <!-- Card: Monthly Total -->
  <rect x="264" y="98" width="280" height="118" rx="14" fill="#0D1528" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <text x="288" y="126" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.38)">MONTHLY TOTAL</text>
  <text x="288" y="170" font-family="Arial Black, Arial" font-size="40" font-weight="900" fill="#FFFFFF">€127.50</text>
  <text x="288" y="198" font-family="Arial, sans-serif" font-size="12" fill="#34D399">▲ 12 subscriptions tracked</text>

  <!-- Card: Active -->
  <rect x="560" y="98" width="194" height="118" rx="14" fill="#0D1528" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <text x="584" y="126" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.38)">ACTIVE SUBS</text>
  <text x="584" y="170" font-family="Arial Black, Arial" font-size="40" font-weight="900" fill="#FFFFFF">12</text>
  <text x="584" y="198" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.35)">services</text>

  <!-- Card: Next Renewal -->
  <rect x="770" y="98" width="230" height="118" rx="14" fill="#0D1528" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <text x="794" y="126" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.38)">NEXT RENEWAL</text>
  <text x="794" y="170" font-family="Arial Black, Arial" font-size="40" font-weight="900" fill="#F59E0B">3</text>
  <text x="840" y="170" font-family="Arial, sans-serif" font-size="18" fill="rgba(255,255,255,0.5)">days</text>
  <text x="794" y="198" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.35)">Netflix · Jun 3</text>

  <!-- Card: Annual -->
  <rect x="1016" y="98" width="230" height="118" rx="14" fill="#7C3AED" fill-opacity="0.12" stroke="#7C3AED" stroke-opacity="0.28" stroke-width="1"/>
  <text x="1040" y="126" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.45)">ANNUAL TOTAL</text>
  <text x="1040" y="170" font-family="Arial Black, Arial" font-size="36" font-weight="900" fill="#A78BFA">€1,530</text>
  <text x="1040" y="198" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.35)">per year</text>

  <!-- ── SECTION TITLE ── -->
  <text x="264" y="258" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF">Your Subscriptions</text>
  <text x="264" y="276" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.3)">Sorted by next renewal</text>

  <!-- ── SUBSCRIPTION ROWS ── -->

  <!-- Netflix -->
  <rect x="264" y="290" width="748" height="62" rx="12" fill="#0D1528" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <circle cx="300" cy="321" r="18" fill="#E50914"/>
  <text x="300" y="327" text-anchor="middle" font-family="Arial Black, Arial" font-size="14" font-weight="900" fill="#FFFFFF">N</text>
  <text x="332" y="315" font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF">Netflix</text>
  <text x="332" y="334" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.32)">Streaming · Standard with Ads</text>
  <rect x="730" y="305" width="66" height="22" rx="6" fill="#F59E0B" fill-opacity="0.16"/>
  <text x="763" y="320" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#F59E0B">3 days</text>
  <text x="968" y="315" text-anchor="end" font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF">€15.99</text>
  <text x="968" y="334" text-anchor="end" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.32)">Jun 3</text>

  <!-- Spotify -->
  <rect x="264" y="362" width="748" height="62" rx="12" fill="#0D1528" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <circle cx="300" cy="393" r="18" fill="#1DB954"/>
  <text x="300" y="399" text-anchor="middle" font-family="Arial Black, Arial" font-size="14" font-weight="900" fill="#FFFFFF">S</text>
  <text x="332" y="387" font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF">Spotify</text>
  <text x="332" y="406" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.32)">Music · Premium Individual</text>
  <text x="968" y="387" text-anchor="end" font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF">€9.99</text>
  <text x="968" y="406" text-anchor="end" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.32)">Jun 7</text>

  <!-- Adobe Creative Cloud -->
  <rect x="264" y="434" width="748" height="62" rx="12" fill="#0D1528" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <circle cx="300" cy="465" r="18" fill="#DA1F26"/>
  <text x="300" y="471" text-anchor="middle" font-family="Arial Black, Arial" font-size="10" font-weight="900" fill="#FFFFFF">Ai</text>
  <text x="332" y="459" font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF">Adobe Creative Cloud</text>
  <text x="332" y="478" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.32)">Software · All Apps</text>
  <text x="968" y="459" text-anchor="end" font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF">€54.99</text>
  <text x="968" y="478" text-anchor="end" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.32)">Jun 12</text>

  <!-- iCloud+ -->
  <rect x="264" y="506" width="748" height="62" rx="12" fill="#0D1528" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <circle cx="300" cy="537" r="18" fill="#147EFB"/>
  <text x="300" y="543" text-anchor="middle" font-family="Arial Black, Arial" font-size="10" font-weight="900" fill="#FFFFFF">iC</text>
  <text x="332" y="531" font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF">iCloud+</text>
  <text x="332" y="550" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.32)">Storage · 200GB Plan</text>
  <text x="968" y="531" text-anchor="end" font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF">€2.99</text>
  <text x="968" y="550" text-anchor="end" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.32)">Jun 15</text>

  <!-- YouTube Premium -->
  <rect x="264" y="578" width="748" height="62" rx="12" fill="#0D1528" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <circle cx="300" cy="609" r="18" fill="#FF0000"/>
  <text x="300" y="615" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#FFFFFF">▶</text>
  <text x="332" y="603" font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF">YouTube Premium</text>
  <text x="332" y="622" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.32)">Streaming · Individual</text>
  <text x="968" y="603" text-anchor="end" font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF">€11.99</text>
  <text x="968" y="622" text-anchor="end" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.32)">Jun 22</text>

  <!-- ── UPCOMING RENEWALS PANEL (right) ── -->
  <rect x="1030" y="240" width="216" height="490" rx="14" fill="#0D1528" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
  <text x="1054" y="270" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">Upcoming Renewals</text>

  <!-- Netflix renewal -->
  <rect x="1044" y="284" width="188" height="56" rx="10" fill="#F59E0B" fill-opacity="0.09" stroke="#F59E0B" stroke-opacity="0.22" stroke-width="1"/>
  <circle cx="1064" cy="312" r="13" fill="#E50914"/>
  <text x="1064" y="317" text-anchor="middle" font-family="Arial Black, Arial" font-size="10" fill="#FFFFFF">N</text>
  <text x="1086" y="306" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Netflix</text>
  <text x="1086" y="322" font-family="Arial, sans-serif" font-size="11" fill="rgba(255,255,255,0.38)">Jun 3 · €15.99</text>
  <text x="1224" y="310" text-anchor="end" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="#F59E0B">3d</text>

  <!-- Spotify renewal -->
  <rect x="1044" y="350" width="188" height="56" rx="10" fill="rgba(255,255,255,0.03)"/>
  <circle cx="1064" cy="378" r="13" fill="#1DB954"/>
  <text x="1064" y="383" text-anchor="middle" font-family="Arial Black, Arial" font-size="10" fill="#FFFFFF">S</text>
  <text x="1086" y="372" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Spotify</text>
  <text x="1086" y="388" font-family="Arial, sans-serif" font-size="11" fill="rgba(255,255,255,0.38)">Jun 7 · €9.99</text>
  <text x="1224" y="376" text-anchor="end" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.28)">7d</text>

  <!-- Adobe renewal -->
  <rect x="1044" y="416" width="188" height="56" rx="10" fill="rgba(255,255,255,0.03)"/>
  <circle cx="1064" cy="444" r="13" fill="#DA1F26"/>
  <text x="1064" y="449" text-anchor="middle" font-family="Arial Black, Arial" font-size="8" fill="#FFFFFF">Ai</text>
  <text x="1086" y="438" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Adobe CC</text>
  <text x="1086" y="454" font-family="Arial, sans-serif" font-size="11" fill="rgba(255,255,255,0.38)">Jun 12 · €54.99</text>
  <text x="1224" y="442" text-anchor="end" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.28)">12d</text>

  <!-- iCloud renewal -->
  <rect x="1044" y="482" width="188" height="56" rx="10" fill="rgba(255,255,255,0.03)"/>
  <circle cx="1064" cy="510" r="13" fill="#147EFB"/>
  <text x="1086" y="504" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">iCloud+</text>
  <text x="1086" y="520" font-family="Arial, sans-serif" font-size="11" fill="rgba(255,255,255,0.38)">Jun 15 · €2.99</text>
  <text x="1224" y="508" text-anchor="end" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.28)">15d</text>

  <!-- YouTube renewal -->
  <rect x="1044" y="548" width="188" height="56" rx="10" fill="rgba(255,255,255,0.03)"/>
  <circle cx="1064" cy="576" r="13" fill="#FF0000"/>
  <text x="1086" y="570" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">YouTube Prem.</text>
  <text x="1086" y="586" font-family="Arial, sans-serif" font-size="11" fill="rgba(255,255,255,0.38)">Jun 22 · €11.99</text>
  <text x="1224" y="574" text-anchor="end" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.28)">22d</text>

  <!-- Total line at bottom of panel -->
  <rect x="1044" y="618" width="188" height="1" fill="rgba(255,255,255,0.08)"/>
  <text x="1054" y="638" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.35)">Monthly total</text>
  <text x="1224" y="638" text-anchor="end" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#A78BFA">€127.50</text>

  <!-- Bottom bar separator -->
  <rect x="228" y="736" width="1042" height="1" fill="rgba(255,255,255,0.05)"/>
  <text x="264" y="752" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.18)">klaxo.app · Subscription tracker for Europe</text>

</svg>`

await sharp(Buffer.from(dash))
  .png()
  .toFile(join(publicDir, 'klaxo-screenshot-1.png'))
console.log('✓ klaxo-screenshot-1.png')

// ─── SCREENSHOT 2 — "€180" impact card 1270×760 ────────────────────────────

const s2 = `<svg width="1270" height="760" viewBox="0 0 1270 760" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face { font-family:'Nunito'; font-weight:900; src:url('data:font/truetype;base64,${nunitoB64}') format('truetype'); }
    </style>
    <linearGradient id="gv" x1="0" y1="0" x2="635" y2="760" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#A78BFA"/>
      <stop offset="52%"  stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#3B0764"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%"   stop-color="#7C3AED" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#7C3AED" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1270" height="760" fill="#0A0F1E"/>

  <!-- Subtle dot grid -->
  <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.045)"/>
  </pattern>
  <rect width="1270" height="760" fill="url(#dots)"/>

  <!-- Centre glow -->
  <ellipse cx="635" cy="380" rx="480" ry="320" fill="url(#glow)"/>

  <!-- Top label -->
  <text x="635" y="198"
    text-anchor="middle"
    font-family="Arial, sans-serif"
    font-size="28"
    font-weight="400"
    letter-spacing="1"
    fill="rgba(255,255,255,0.52)"
  >The average European spends</text>

  <!-- €180 — hero number -->
  <text x="635" y="390"
    text-anchor="middle"
    font-family="Nunito, 'Arial Black', sans-serif"
    font-size="260"
    font-weight="900"
    fill="url(#gv)"
  >€180</text>

  <!-- per month -->
  <text x="635" y="460"
    text-anchor="middle"
    font-family="Arial, sans-serif"
    font-size="30"
    font-weight="400"
    letter-spacing="0.5"
    fill="rgba(255,255,255,0.52)"
  >per month on subscriptions</text>

  <!-- Divider line -->
  <line x1="510" y1="504" x2="760" y2="504" stroke="rgba(124,58,237,0.35)" stroke-width="1"/>

  <!-- Secondary line -->
  <text x="635" y="548"
    text-anchor="middle"
    font-family="Arial, sans-serif"
    font-size="22"
    font-weight="600"
    fill="rgba(255,255,255,0.36)"
    font-style="italic"
  >Most can't name half of them.</text>

  <!-- Logo bottom-right -->
  <rect x="1098" y="694" width="32" height="32" rx="8" fill="url(#gv)"/>
  <text x="1114" y="719" text-anchor="middle" font-family="Nunito, sans-serif" font-size="20" font-weight="900" fill="white">K</text>
  <text x="1140" y="719" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="rgba(255,255,255,0.85)">Klaxo</text>
</svg>`

await sharp(Buffer.from(s2))
  .png()
  .toFile(join(publicDir, 'klaxo-screenshot-2.png'))
console.log('✓ klaxo-screenshot-2.png')

// ─── SCREENSHOT 3 — 3-cards feature overview 1270×760 ──────────────────────

const s3 = `<svg width="1270" height="760" viewBox="0 0 1270 760" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face { font-family:'Nunito'; font-weight:900; src:url('data:font/truetype;base64,${nunitoB64}') format('truetype'); }
    </style>
    <linearGradient id="gv3" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#A78BFA"/>
      <stop offset="52%"  stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#3B0764"/>
    </linearGradient>
    <radialGradient id="glow3" cx="50%" cy="30%" r="55%">
      <stop offset="0%"   stop-color="#7C3AED" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#7C3AED" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1270" height="760" fill="#0A0F1E"/>
  <pattern id="dots3" width="32" height="32" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.04)"/>
  </pattern>
  <rect width="1270" height="760" fill="url(#dots3)"/>
  <ellipse cx="635" cy="200" rx="600" ry="260" fill="url(#glow3)"/>

  <!-- Top title -->
  <text x="635" y="118"
    text-anchor="middle"
    font-family="Arial Black, Arial, sans-serif"
    font-size="42"
    font-weight="900"
    fill="#FFFFFF"
    letter-spacing="-1"
  >Everything you need to take control</text>

  <!-- Subtitle -->
  <text x="635" y="158"
    text-anchor="middle"
    font-family="Arial, sans-serif"
    font-size="19"
    fill="rgba(255,255,255,0.42)"
  >One app. All your subscriptions. Zero surprises.</text>

  <!-- ── CARD 1 — Renewal Alerts ── -->
  <!-- card bg -->
  <rect x="80" y="200" width="336" height="430" rx="20"
    fill="#0D1528" stroke="#7C3AED" stroke-opacity="0.35" stroke-width="1.5"/>
  <!-- violet top accent -->
  <rect x="80" y="200" width="336" height="4" rx="2" fill="url(#gv3)"/>
  <!-- icon circle -->
  <circle cx="248" cy="290" r="40" fill="rgba(124,58,237,0.16)"/>
  <text x="248" y="306" text-anchor="middle" font-family="Arial, sans-serif" font-size="36">🔔</text>
  <!-- title -->
  <text x="248" y="368"
    text-anchor="middle"
    font-family="Arial Black, Arial, sans-serif"
    font-size="24"
    font-weight="900"
    fill="#FFFFFF"
  >Renewal Alerts</text>
  <!-- body -->
  <text x="248" y="408"
    text-anchor="middle"
    font-family="Arial, sans-serif"
    font-size="16"
    fill="rgba(255,255,255,0.50)"
  >Get notified 5 days before</text>
  <text x="248" y="432"
    text-anchor="middle"
    font-family="Arial, sans-serif"
    font-size="16"
    fill="rgba(255,255,255,0.50)"
  >every charge. No more</text>
  <text x="248" y="456"
    text-anchor="middle"
    font-family="Arial, sans-serif"
    font-size="16"
    fill="rgba(255,255,255,0.50)"
  >surprises.</text>
  <!-- pill -->
  <rect x="168" y="574" width="160" height="30" rx="15" fill="rgba(124,58,237,0.18)" stroke="rgba(124,58,237,0.4)" stroke-width="1"/>
  <text x="248" y="594" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#A78BFA">Email &amp; Push</text>

  <!-- ── CARD 2 — Full Dashboard ── -->
  <rect x="467" y="200" width="336" height="430" rx="20"
    fill="#0D1528" stroke="#7C3AED" stroke-opacity="0.35" stroke-width="1.5"/>
  <rect x="467" y="200" width="336" height="4" rx="2" fill="url(#gv3)"/>
  <circle cx="635" cy="290" r="40" fill="rgba(124,58,237,0.16)"/>
  <text x="635" y="306" text-anchor="middle" font-family="Arial, sans-serif" font-size="36">📊</text>
  <text x="635" y="368"
    text-anchor="middle"
    font-family="Arial Black, Arial, sans-serif"
    font-size="24"
    font-weight="900"
    fill="#FFFFFF"
  >Full Dashboard</text>
  <text x="635" y="408"
    text-anchor="middle"
    font-family="Arial, sans-serif"
    font-size="16"
    fill="rgba(255,255,255,0.50)"
  >See your real monthly and</text>
  <text x="635" y="432"
    text-anchor="middle"
    font-family="Arial, sans-serif"
    font-size="16"
    fill="rgba(255,255,255,0.50)"
  >annual subscription cost</text>
  <text x="635" y="456"
    text-anchor="middle"
    font-family="Arial, sans-serif"
    font-size="16"
    fill="rgba(255,255,255,0.50)"
  >at a glance.</text>
  <rect x="551" y="574" width="168" height="30" rx="15" fill="rgba(124,58,237,0.18)" stroke="rgba(124,58,237,0.4)" stroke-width="1"/>
  <text x="635" y="594" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#A78BFA">Free forever</text>

  <!-- ── CARD 3 — Built for Europe ── -->
  <rect x="854" y="200" width="336" height="430" rx="20"
    fill="#0D1528" stroke="#7C3AED" stroke-opacity="0.35" stroke-width="1.5"/>
  <rect x="854" y="200" width="336" height="4" rx="2" fill="url(#gv3)"/>
  <circle cx="1022" cy="290" r="40" fill="rgba(124,58,237,0.16)"/>
  <text x="1022" y="306" text-anchor="middle" font-family="Arial, sans-serif" font-size="36">🇪🇺</text>
  <text x="1022" y="368"
    text-anchor="middle"
    font-family="Arial Black, Arial, sans-serif"
    font-size="24"
    font-weight="900"
    fill="#FFFFFF"
  >Built for Europe</text>
  <text x="1022" y="408"
    text-anchor="middle"
    font-family="Arial, sans-serif"
    font-size="16"
    fill="rgba(255,255,255,0.50)"
  >Euro support, GDPR</text>
  <text x="1022" y="432"
    text-anchor="middle"
    font-family="Arial, sans-serif"
    font-size="16"
    fill="rgba(255,255,255,0.50)"
  >compliant, Open Banking</text>
  <text x="1022" y="456"
    text-anchor="middle"
    font-family="Arial, sans-serif"
    font-size="16"
    fill="rgba(255,255,255,0.50)"
  >coming soon.</text>
  <rect x="942" y="574" width="160" height="30" rx="15" fill="rgba(124,58,237,0.18)" stroke="rgba(124,58,237,0.4)" stroke-width="1"/>
  <text x="1022" y="594" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#A78BFA">GDPR compliant</text>

  <!-- Logo bottom-right -->
  <rect x="1098" y="694" width="32" height="32" rx="8" fill="url(#gv3)"/>
  <text x="1114" y="719" text-anchor="middle" font-family="Nunito, sans-serif" font-size="20" font-weight="900" fill="white">K</text>
  <text x="1140" y="719" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="rgba(255,255,255,0.85)">Klaxo</text>
</svg>`

await sharp(Buffer.from(s3))
  .png()
  .toFile(join(publicDir, 'klaxo-screenshot-3.png'))
console.log('✓ klaxo-screenshot-3.png')
