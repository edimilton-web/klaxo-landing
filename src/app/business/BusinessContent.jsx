'use client'

import { useEffect, useState } from 'react'
import WaitlistForm from './WaitlistForm'

const LOGOS = [
  { name: 'Notion',        domain: 'notion.so' },
  { name: 'Slack',         domain: 'slack.com' },
  { name: 'Adobe',         domain: 'adobe.com' },
  { name: 'Zoom',          domain: 'zoom.us' },
  { name: 'ChatGPT',       domain: 'openai.com' },
  { name: 'Figma',         domain: 'figma.com' },
  { name: 'Microsoft 365', domain: 'microsoft.com' },
  { name: 'Spotify',       domain: 'spotify.com' },
]

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5"/>
      </svg>
    ),
    title: 'See everything',
    desc: 'One dashboard for every subscription your team pays for — in euros, updated automatically.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        <circle cx="18" cy="5" r="3" fill="currentColor" opacity=".3" stroke="none"/>
        <circle cx="18" cy="5" r="3" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Never miss a renewal',
    desc: "Get alerts before you're charged for tools nobody uses anymore.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="8" y1="13" x2="16" y2="13"/>
        <line x1="8" y1="17" x2="13" y2="17"/>
      </svg>
    ),
    title: 'Monthly report ready',
    desc: 'Export a clean CSV every month for your accountant. No manual work.',
  },
]

function LogoItem({ name, domain }) {
  const [imgError, setImgError] = useState(false)
  return (
    <div className="biz-logo-item">
      {imgError ? (
        <div className="biz-logo-fallback">{name[0]}</div>
      ) : (
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={name}
          width={32}
          height={32}
          onError={() => setImgError(true)}
          className="biz-logo-img"
        />
      )}
      <span className="biz-logo-name">{name}</span>
    </div>
  )
}

export default function BusinessContent() {
  useEffect(() => {
    document.body.classList.add('biz-theme')

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => {
      document.body.classList.remove('biz-theme')
      observer.disconnect()
    }
  }, [])

  return (
    <main className="biz-main">
      {/* Aurora background blobs */}
      <div className="biz-aurora biz-aurora-1" />
      <div className="biz-aurora biz-aurora-2" />
      <div className="biz-aurora biz-aurora-3" />

      {/* BADGE */}
      <div className="badge" style={{ marginBottom: 32 }}>
        <span className="badge-dot" />
        Coming Soon · Klaxo Business
      </div>

      {/* HEADLINE */}
      <h1 className="hero-headline" style={{ marginBottom: 24 }}>
        Your team&apos;s software spend,<br />
        <span className="hl">under control.</span>
      </h1>

      {/* SUBHEADLINE */}
      <p className="hero-sub" style={{ marginBottom: 40 }}>
        Finally know what your team pays for software —<br />
        without spreadsheets or <strong>€100/month enterprise tools.</strong><br />
        From €9/month. 14-day free trial.
      </p>

      {/* WAITLIST FORM — inline */}
      <div className="biz-form-wrap" style={{ marginBottom: 48 }}>
        <WaitlistForm />
      </div>

      {/* TRUST BADGES */}
      <div className="trust-badges" style={{ marginBottom: 80 }}>
        <div className="trust-badge"><span className="trust-badge-icon">🇪🇺</span>Built for Europe</div>
        <div className="trust-badge"><span className="trust-badge-icon">💶</span>From €9/month</div>
        <div className="trust-badge"><span className="trust-badge-icon">📊</span>CSV export for accounting</div>
        <div className="trust-badge"><span className="trust-badge-icon">⚡</span>Zero setup required</div>
      </div>

      {/* LOGOS */}
      <section className="biz-logos reveal">
        <p className="biz-logos-label">Teams using tools like these — finally tracked.</p>
        <div className="biz-logos-row">
          {LOGOS.map((l) => <LogoItem key={l.name} {...l} />)}
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="biz-features reveal">
        {FEATURES.map((f) => (
          <div key={f.title} className="biz-feat-card">
            <div className="biz-feat-icon">{f.icon}</div>
            <div>
              <h3 className="biz-feat-title">{f.title}</h3>
              <p className="biz-feat-desc">{f.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* SOCIAL PROOF */}
      <p className="biz-social-proof reveal">
        Join <strong>47 teams</strong> already on the waitlist.
      </p>

      {/* FOOTER */}
      <footer className="biz-footer">
        <span>Klaxo Business · business.klaxo.app · Made in Europe 🇪🇺</span>
        <a href="https://klaxo.app" className="biz-footer-link">klaxo.app →</a>
      </footer>
    </main>
  )
}
