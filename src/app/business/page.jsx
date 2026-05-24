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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 24px 80px', textAlign: 'center' }}>

      <div className="badge">
        <span className="badge-dot" />
        Coming Soon · Klaxo Business
      </div>

      <h1 className="hero-headline">
        Your team&apos;s software spend,<br />
        <span className="hl">under control.</span>
      </h1>

      <p className="hero-sub">
        Finally know what your team pays for software —<br />
        without spreadsheets or <strong>€100/month enterprise tools.</strong><br />
        From €9/month. 14-day free trial.
      </p>

      <WaitlistForm />

      <div className="trust-section" style={{ width: '100%', marginTop: 8 }}>
        <div className="trust-badges">
          {[
            { icon: '🇪🇺', label: 'Built for Europe' },
            { icon: '💶', label: 'From €9/month' },
            { icon: '📊', label: 'CSV export for accounting' },
            { icon: '⚡', label: 'Zero setup required' },
          ].map((b) => (
            <div key={b.label} className="trust-badge">
              <span className="trust-badge-icon">{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
