import WaitlistForm from './WaitlistForm'

export const metadata = {
  title: 'Klaxo Business — Team subscription tracking, finally simple',
  description: "Track your team's software subscriptions. Renewal alerts, CSV export for accounting. From €9/month.",
  alternates: {
    canonical: 'https://business.klaxo.app',
  },
  openGraph: {
    title: 'Klaxo Business — Team subscription tracking, finally simple',
    description: "Track your team's software subscriptions. Renewal alerts, CSV export for accounting. From €9/month.",
    url: 'https://business.klaxo.app',
    type: 'website',
  },
}

export default function BusinessPage() {
  return (
    <>
      <section className="hero" style={{ minHeight: '100vh', paddingTop: 80 }}>
        <div className="hero-glow" />

        <div className="badge">
          <span className="badge-dot" />
          Coming Soon · Klaxo Business
        </div>

        <h1 className="hero-headline">
          Your team&apos;s software spend,<br />
          <span className="hl">under control.</span>
        </h1>

        <p className="hero-sub" style={{ maxWidth: 560 }}>
          Finally know what your team is paying for software —<br />
          without spreadsheets or €100/month enterprise tools.<br />
          <strong>From €9/month.</strong>
        </p>

        <WaitlistForm />

        <div className="trust-badges" style={{ justifyContent: 'center', padding: '0 24px 80px' }}>
          {[
            { icon: '🇪🇺', label: 'Built for Europe' },
            { icon: '💶', label: 'From €9/month' },
            { icon: '✅', label: 'No enterprise complexity' },
            { icon: '📄', label: 'CSV export for accounting' },
          ].map((b) => (
            <div key={b.label} className="trust-badge">
              <span className="trust-badge-icon">{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </section>

      <footer style={{
        padding: '28px 40px',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="footer-brand">
          klaxo <span>Business subscription tracking, built for Europe.</span>
        </div>
        <div className="footer-links">
          <a href="https://www.klaxo.app">klaxo.app</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
        <div className="footer-eu">Made in Europe 🇪🇺</div>
      </footer>
    </>
  )
}
