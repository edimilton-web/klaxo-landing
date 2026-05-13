"use client"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible")
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-logo">klax<span>o</span></div>
        <div className="nav-right">
          <a href="https://app.klaxo.app/login" className="nav-signin">Sign in</a>
          <a href="https://app.klaxo.app/register" className="nav-cta">Start for free</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />

        <div className="badge">
          <span className="badge-dot" />
          Free forever · No credit card required
        </div>

        <h1 className="hero-headline">
          You&apos;re paying for things<br />
          <span className="hl">you forgot exist.</span>
        </h1>

        <p className="hero-sub">
          The average European spends <strong>€180/month</strong> on subscriptions.<br />
          Most can&apos;t name half of them.
        </p>

        <div className="hero-ctas">
          <a href="https://app.klaxo.app/register" className="cta-primary">
            Start for free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#how" className="cta-ghost">See how it works →</a>
        </div>

        <p className="hero-social">
          Free forever · No credit card required · Upgrade anytime
        </p>

        {/* APP SHOWCASE */}
        <div className="showcase-wrap">
          <div className="showcase-glow" />

          <div className="float-card">
            <div className="float-card-label">This month</div>
            <div className="float-card-value">€130.96</div>
            <div className="float-card-sub">↑ 7 active subscriptions</div>
          </div>

          <div className="float-alert">
            <div className="float-alert-icon">⚡</div>
            <div>
              <div className="float-alert-text">Netflix renews in 3 days</div>
              <div className="float-alert-sub">€15.99 · 06 Jun 2026</div>
            </div>
          </div>

          <div className="showcase-float">
            <div className="browser">
              <div className="browser-bar">
                <div className="browser-dots">
                  <div className="dot dot-r" />
                  <div className="dot dot-y" />
                  <div className="dot dot-g" />
                </div>
                <div className="browser-url">app.klaxo.app/dashboard</div>
              </div>
              <div className="app-inner">
                <div className="app-sidebar">
                  <div className="app-logo-row">
                    <div className="app-logo-k">K</div>
                    Klaxo
                  </div>
                  <div className="app-nav-item active">
                    <span className="app-nav-dot" />
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                    Dashboard
                  </div>
                  <div className="app-nav-item">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                    Subscriptions
                  </div>
                  <div className="app-nav-item">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                    Billing
                  </div>
                  <div className="app-nav-item">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
                    </svg>
                    Settings
                  </div>
                </div>
                <div className="app-main">
                  <div className="app-greeting">Bom dia, Edimilton 👋</div>
                  <div className="app-stats">
                    <div className="app-stat">
                      <div className="app-stat-label">Monthly</div>
                      <div className="app-stat-val">€89</div>
                      <div className="app-stat-badge badge-amber">↑ +€12</div>
                    </div>
                    <div className="app-stat">
                      <div className="app-stat-label">Next bill</div>
                      <div className="app-stat-val" style={{ fontSize: "13px", paddingTop: "3px" }}>Netflix</div>
                      <div className="app-stat-badge badge-amber">⚡ 3 days</div>
                    </div>
                    <div className="app-stat">
                      <div className="app-stat-label">Active</div>
                      <div className="app-stat-val">7</div>
                      <div className="app-stat-badge badge-green">✓ OK</div>
                    </div>
                  </div>
                  <div className="app-subs-title">Upcoming Renewals</div>
                  <div className="app-sub-row">
                    <div className="app-sub-logo">N</div>
                    <div className="app-sub-info">
                      <div className="app-sub-name">Netflix</div>
                      <div className="app-sub-date">06 Jun · Monthly</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div className="app-sub-price">€15.99</div>
                      <div className="app-sub-urgent">in 3 days</div>
                    </div>
                  </div>
                  <div className="app-sub-row">
                    <div className="app-sub-logo">S</div>
                    <div className="app-sub-info">
                      <div className="app-sub-name">Spotify</div>
                      <div className="app-sub-date">10 Jun · Monthly</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div className="app-sub-price">€9.99</div>
                      <div className="app-sub-date">in 7 days</div>
                    </div>
                  </div>
                  <div className="app-sub-row">
                    <div className="app-sub-logo">A</div>
                    <div className="app-sub-info">
                      <div className="app-sub-name">Adobe CC</div>
                      <div className="app-sub-date">18 Jun · Monthly</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div className="app-sub-price">€54.99</div>
                      <div className="app-sub-date">in 15 days</div>
                    </div>
                  </div>
                  <div className="app-sub-row">
                    <div className="app-sub-logo">G</div>
                    <div className="app-sub-info">
                      <div className="app-sub-name">GitHub</div>
                      <div className="app-sub-date">01 Jul · Monthly</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div className="app-sub-price">€4.00</div>
                      <div className="app-sub-date">in 28 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE PILLS */}
      <div style={{ padding: "48px 24px 32px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <p className="logos-row-label">Track any service, automatically recognised</p>
        <div className="logos-row" style={{ padding: 0 }}>
          {[
            { name: "Netflix", color: "#E50914" },
            { name: "Spotify", color: "#1DB954" },
            { name: "Adobe CC", color: "#FF0000" },
            { name: "GitHub", color: "#fff" },
            { name: "Notion", color: "#fff" },
            { name: "ChatGPT", color: "#10A37F" },
            { name: "YouTube", color: "#FF0000" },
            { name: "+50 more", color: "#7C5CFC" },
          ].map((s) => (
            <div key={s.name} className="service-pill">
              <span className="service-pill-dot" style={{ background: s.color }} />
              {s.name}
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider" />

      {/* PAIN POINTS */}
      <section className="section-pad reveal">
        <p className="section-label">Sound familiar?</p>
        <h2 className="section-title">The subscription problem<br />nobody talks about.</h2>
        <div className="pain-grid">
          <div className="pain-card">
            <div className="pain-icon" style={{ background: "rgba(239,68,68,.1)" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                <circle cx="16" cy="16" r="2.5" fill="rgba(239,68,68,.2)" stroke="#EF4444" />
              </svg>
            </div>
            <div className="pain-title">Forgotten subscriptions</div>
            <div className="pain-desc">That gym app you stopped using in January is still charging you every month. It adds up faster than you think.</div>
          </div>
          <div className="pain-card">
            <div className="pain-icon" style={{ background: "rgba(245,158,11,.1)" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.8">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <div className="pain-title">Price increases you missed</div>
            <div className="pain-desc">Services raise prices quietly. You never notice until it&apos;s too late and you&apos;ve already been charged the new amount.</div>
          </div>
          <div className="pain-card">
            <div className="pain-icon" style={{ background: "rgba(124,92,252,.1)" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="1.8">
                <rect x="2" y="3" width="8" height="7" rx="1" /><rect x="14" y="3" width="8" height="7" rx="1" />
                <rect x="2" y="14" width="8" height="7" rx="1" /><rect x="14" y="14" width="8" height="7" rx="1" />
              </svg>
            </div>
            <div className="pain-title">No single view</div>
            <div className="pain-desc">Your subscriptions are scattered across 6 different emails and 3 bank accounts. There&apos;s no single place to see everything.</div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* HOW IT WORKS */}
      <section className="section-pad reveal" id="how">
        <p className="section-label">How it works</p>
        <h2 className="section-title">Simple by design.</h2>
        <div className="steps-wrap">
          <div className="steps-line" />
          <div className="step">
            <div className="step-content-left">
              <div className="step-title">Add your subscriptions</div>
              <div className="step-desc">Manually in 30 seconds, or via bank connection — coming soon. We recognise 50+ services automatically.</div>
            </div>
            <div className="step-num">01</div>
            <div className="step-empty" />
          </div>
          <div className="step">
            <div className="step-empty" />
            <div className="step-num">02</div>
            <div className="step-content-right">
              <div className="step-title">Get notified before renewals</div>
              <div className="step-desc">5-day advance alerts via email. Never be surprised by an unexpected charge again.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-content-left">
              <div className="step-title">See your real monthly cost</div>
              <div className="step-desc">Dashboard with total spend by category, upcoming bills, and trends over time. Finally, clarity.</div>
            </div>
            <div className="step-num">03</div>
            <div className="step-empty" />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* TESTIMONIALS */}
      <section className="section-pad reveal">
        <p className="section-label">Early users</p>
        <h2 className="section-title">Taking back control<br />of their budget.</h2>
        <div className="testi-grid">
          {[
            { quote: "I found €43/month I was wasting on apps I never use. Klaxo paid for itself in the first week.", name: "Ana M. · Lisbon", initials: "AM", bg: "#8B5CF6" },
            { quote: "Finally something built for Europe, not the US. The euro support and EU-based services are exactly what I needed.", name: "Carlos R. · Madrid", initials: "CR", bg: "var(--violet)" },
            { quote: "The renewal alerts alone are worth it. I cancelled three subscriptions I didn't even know I had.", name: "Sophie D. · Paris", initials: "SD", bg: "#10B981" },
          ].map((t) => (
            <div key={t.name} className="testi-card">
              <div className="stars">★★★★★</div>
              <div className="testi-quote">&quot;{t.quote}&quot;</div>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: t.bg }}>{t.initials}</div>
                <div className="testi-name">{t.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* PRICING */}
      <section className="section-pad reveal" id="pricing">
        <p className="section-label">Pricing</p>
        <h2 className="section-title">Honest pricing.<br />Start free.</h2>
        <div className="pricing-grid">
          <div className="price-card">
            <div className="price-tier">Free</div>
            <div className="price-amount">
              <div className="price-num">€0</div>
            </div>
            <div className="price-note" style={{ height: "20px" }} />
            <ul className="price-features">
              <li className="price-feature"><span className="price-check">✓</span>Up to 5 subscriptions</li>
              <li className="price-feature"><span className="price-check">✓</span>Basic dashboard</li>
              <li className="price-feature"><span className="price-check">✓</span>Manual entry</li>
              <li className="price-feature"><span className="price-check">✓</span>Monthly summary email</li>
            </ul>
            <a href="https://app.klaxo.app/register" className="price-btn price-btn-ghost" style={{ display: "block", textAlign: "center", textDecoration: "none" }}>
              Get started free
            </a>
          </div>
          <div className="price-card featured">
            <div className="price-popular">Most popular · save 39%</div>
            <div className="price-tier">Pro</div>
            <div className="price-amount">
              <div className="price-num">€3.99</div>
              <div className="price-period">/ month</div>
            </div>
            <div className="price-note">or €29/year — billed annually</div>
            <ul className="price-features">
              <li className="price-feature"><span className="price-check">✓</span>Unlimited subscriptions</li>
              <li className="price-feature"><span className="price-check">✓</span>Renewal alerts (5 days before)</li>
              <li className="price-feature"><span className="price-check">✓</span>Categories &amp; tags</li>
              <li className="price-feature"><span className="price-check">✓</span>CSV export</li>
              <li className="price-feature">
                <span className="price-check">✓</span>Bank connection{" "}
                <span style={{ color: "var(--muted)", fontSize: "12px" }}>(coming soon)</span>
              </li>
            </ul>
            <a href="https://app.klaxo.app/checkout?plan=pro-monthly" className="price-btn price-btn-violet" style={{ display: "block", textAlign: "center", textDecoration: "none" }}>
              Get Pro — €3,99/month
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="waitlist-section reveal">
        <div className="waitlist-bg" />
        <div className="waitlist-inner">
          <h2 className="waitlist-title">Ready to take<br />control?</h2>
          <p className="waitlist-sub">
            Start tracking your subscriptions in minutes.<br />
            No credit card required.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", marginTop: "8px" }}>
            <a href="https://app.klaxo.app/register" className="wf-btn" style={{ textDecoration: "none", display: "inline-block" }}>
              Start for free →
            </a>
            <p className="wf-hint">Free forever · No credit card required · Upgrade anytime</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <div className="footer-brand">klaxo <span>The subscription tracker built for Europe.</span></div>
        </div>
        <div className="footer-links">
          <a href="/blog">Blog</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-eu">Made in Europe 🇪🇺</div>
      </footer>
    </>
  )
}
