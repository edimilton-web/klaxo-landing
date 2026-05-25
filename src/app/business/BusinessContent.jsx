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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>
      </svg>
    ),
    title: 'See everything',
    desc: 'One dashboard for every subscription your team pays for — in euros, updated automatically.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
    title: 'Never miss a renewal',
    desc: "Get alerts before you're charged for tools nobody uses anymore.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/>
      </svg>
    ),
    title: 'Monthly report ready',
    desc: 'Export a clean CSV every month for your accountant. No manual work.',
  },
]

const MOCK_SUBS = [
  { name: 'Slack',     team: 'All teams', price: '€87',  initial: 'S', color: '#4A154B' },
  { name: 'Adobe CC',  team: 'Design',    price: '€124', initial: 'A', color: '#FF0000', alert: true },
  { name: 'Notion',    team: 'Product',   price: '€32',  initial: 'N', color: '#000' },
  { name: 'Figma',     team: 'Design',    price: '€45',  initial: 'F', color: '#0ACF83' },
]

// Fix 1: image in a white-bg circle wrapper; on error hide image entirely, show name only
function LogoItem({ name, domain }) {
  const [imgError, setImgError] = useState(false)
  return (
    <div className="biz-logo-item">
      {!imgError && (
        <div className="biz-logo-img-wrap">
          <img
            src={`https://logo.clearbit.com/${domain}`}
            alt={name}
            width={22}
            height={22}
            onError={() => setImgError(true)}
            className="biz-logo-img"
          />
        </div>
      )}
      <span className="biz-logo-name">{name}</span>
    </div>
  )
}

function AppMockup() {
  return (
    <div className="biz-mockup">
      <div className="biz-mock-bar">
        <div className="biz-mock-dots"><span/><span/><span/></div>
        <span className="biz-mock-url">business.klaxo.app</span>
      </div>
      <div className="biz-mock-body">
        <div className="biz-mock-stats">
          <div className="biz-mock-stat">
            <span className="biz-mock-stat-label">Monthly spend</span>
            <span className="biz-mock-stat-val">€1,247</span>
            <span className="biz-mock-stat-badge biz-mock-up">↑ 8%</span>
          </div>
          <div className="biz-mock-stat">
            <span className="biz-mock-stat-label">Active tools</span>
            <span className="biz-mock-stat-val">12</span>
            <span className="biz-mock-stat-badge biz-mock-warn">2 renewing</span>
          </div>
        </div>
        <div className="biz-mock-list-header">Subscriptions</div>
        <div className="biz-mock-list">
          {MOCK_SUBS.map(s => (
            <div key={s.name} className={`biz-mock-row${s.alert ? ' biz-mock-row-alert' : ''}`}>
              <div className="biz-mock-initial" style={{ background: s.color }}>{s.initial}</div>
              <div className="biz-mock-info">
                <span className="biz-mock-name">{s.name}</span>
                <span className="biz-mock-team">{s.team}</span>
              </div>
              <div className="biz-mock-right">
                <span className="biz-mock-price">{s.price}/mo</span>
                {s.alert && <span className="biz-mock-alert-chip">3 days</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function BusinessContent() {
  useEffect(() => {
    document.body.classList.add('biz-theme')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => {
      document.body.classList.remove('biz-theme')
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* NAV */}
      <nav className="biz-nav">
        <div className="biz-nav-brand">
          <div className="biz-nav-icon">K</div>
          <span className="biz-nav-name">Klaxo <strong>Business</strong></span>
        </div>
        <a href="#waitlist" className="biz-nav-cta">Join waitlist →</a>
      </nav>

      <main className="biz-main">
        <div className="biz-aurora biz-aurora-1" />
        <div className="biz-aurora biz-aurora-2" />
        <div className="biz-aurora biz-aurora-3" />

        {/* HERO — two column */}
        <section className="biz-hero">
          <div className="biz-hero-left">
            <div className="badge" style={{ marginBottom: 20, alignSelf: 'flex-start' }}>
              <span className="badge-dot" />
              Coming Soon
            </div>
            <div className="biz-product-name" style={{ marginBottom: 20 }}>
              <span className="biz-product-k">K</span> Klaxo <strong>Business</strong>
            </div>
            <h1 className="biz-title">
              Your team&apos;s software spend,{' '}
              <span className="hl">under control.</span>
            </h1>

            {/* Fix 2: updated subheadline */}
            <p className="biz-sub">
              Built for teams of 3–15 people. Track every subscription your team
              pays for — in euros, with renewal alerts and monthly reports for
              your accountant. From €19/month.
            </p>

            <div id="waitlist" className="biz-form-wrap" style={{ marginBottom: 28 }}>
              <WaitlistForm />
            </div>

            {/* Fix 5: added 4th badge "For teams of 3-15" */}
            <div className="biz-trust-row">
              <span className="biz-trust-item">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                Built for Europe
              </span>
              <span className="biz-trust-item">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                Zero setup
              </span>
              <span className="biz-trust-item">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                No credit card
              </span>
              <span className="biz-trust-item">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                Teams of 3–15
              </span>
            </div>
          </div>
          <div className="biz-hero-right">
            <AppMockup />
          </div>
        </section>

        {/* Fix 3: reduced padding — biz-logos now has less top space */}
        <section className="biz-logos reveal">
          <p className="biz-logos-label">Teams using tools like these — finally tracked.</p>
          <div className="biz-logos-row">
            {LOGOS.map((l) => <LogoItem key={l.name} {...l} />)}
          </div>
        </section>

        {/* FEATURE STRIP */}
        <section className="biz-feat-strip reveal">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="biz-feat-col">
              <div className="biz-feat-icon">{f.icon}</div>
              <h3 className="biz-feat-title">{f.title}</h3>
              <p className="biz-feat-desc">{f.desc}</p>
              {i < FEATURES.length - 1 && <div className="biz-feat-divider" />}
            </div>
          ))}
        </section>

        {/* Fix 4: secondary CTA */}
        <section className="biz-cta-section reveal">
          <p className="biz-cta-text">
            Ready to take control of your team&apos;s software spend?
          </p>
          <a href="#waitlist" className="biz-cta-btn">Join the waitlist →</a>
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
    </>
  )
}
