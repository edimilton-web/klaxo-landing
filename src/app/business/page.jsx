import WaitlistForm from './WaitlistForm'

export const metadata = {
  title: 'Klaxo Business — Team subscription tracking, finally simple',
  description: 'Track your team\'s software spend. Renewal alerts, CSV export for accounting. From €9/month.',
  alternates: { canonical: 'https://business.klaxo.app' },
  openGraph: {
    title: 'Klaxo Business — Team subscription tracking, finally simple',
    description: 'Finally know what your team pays for software. No spreadsheets. No €100/month tools.',
    url: 'https://business.klaxo.app',
  },
}

export default function BusinessPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 24px 80px', textAlign: 'center' }}>

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

      {/* SUB */}
      <p className="hero-sub" style={{ marginBottom: 40 }}>
        Finally know what your team pays for software —<br />
        without spreadsheets or <strong>€100/month enterprise tools.</strong><br />
        From €9/month. 14-day free trial.
      </p>

      {/* WAITLIST FORM */}
      <div style={{ width: '100%', maxWidth: 420, marginBottom: 64 }}>
        <WaitlistForm />
      </div>

      {/* TRUST BADGES */}
      <div className="trust-badges">
        <div className="trust-badge">
          <span className="trust-badge-icon">🇪🇺</span>
          Built for Europe
        </div>
        <div className="trust-badge">
          <span className="trust-badge-icon">💶</span>
          From €9/month
        </div>
        <div className="trust-badge">
          <span className="trust-badge-icon">📊</span>
          CSV export for accounting
        </div>
        <div className="trust-badge">
          <span className="trust-badge-icon">⚡</span>
          Zero setup required
        </div>
      </div>

    </main>
  )
}
