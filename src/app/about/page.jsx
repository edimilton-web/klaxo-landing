import KlaxoNav from '../components/KlaxoNav'

export const metadata = {
  title: "About — Klaxo",
  description: "I'm Eddie, a developer based in Setúbal, Portugal. I built Klaxo because I kept finding subscription charges I didn't recognise.",
  alternates: {
    canonical: "https://www.klaxo.app/about",
  },
}

export default function About() {
  return (
    <>
      <KlaxoNav />

      <main style={{ paddingTop: 100, minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <article style={{ maxWidth: 640, margin: '0 auto', padding: '64px 24px 100px' }}>

          <p style={{
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '.15em',
            color: '#7C5CFC',
            marginBottom: 20,
          }}>
            Our story
          </p>

          <h1 style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(28px,4vw,44px)',
            letterSpacing: '-.03em',
            color: '#F0F0F5',
            marginBottom: 40,
            lineHeight: 1.1,
          }}>
            Built by someone who had<br />the same problem.
          </h1>

          <p style={{
            fontSize: 17,
            color: 'rgba(240,240,245,0.75)',
            lineHeight: 1.8,
            marginBottom: 48,
          }}>
            I&apos;m Eddie, a developer based in Setúbal, Portugal. I built Klaxo because I kept
            finding subscription charges I didn&apos;t recognise. Every tracker I tried was American,
            charged in dollars, and didn&apos;t work with my bank. So I built one that does — for
            Europeans, by a European.
          </p>

          <p style={{
            fontSize: 17,
            color: 'rgba(240,240,245,0.75)',
            lineHeight: 1.8,
            marginBottom: 48,
          }}>
            Klaxo is also building Open Banking integration via PSD2 — so you&apos;ll be able to connect your European bank account and detect every subscription automatically. No manual entry. No forgotten charges. Early Pro members get access when it launches.
          </p>

          <a
            href="https://app.klaxo.app/register"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 28px',
              borderRadius: 12,
              background: '#7C5CFC',
              color: '#fff',
              fontSize: 15,
              fontWeight: 600,
              fontFamily: 'DM Sans, sans-serif',
              textDecoration: 'none',
              boxShadow: '0 0 40px rgba(124,92,252,0.4)',
            }}
          >
            Try Klaxo for free →
          </a>

        </article>
      </main>

      <footer style={{
        padding: '40px',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
        position: 'relative',
        zIndex: 1,
      }}>
        <div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 800, fontSize: 16, color: '#F0F0F5' }}>
            klaxo{' '}
            <span style={{ color: 'rgba(240,240,245,0.45)', fontWeight: 400, fontSize: 13, marginLeft: 8 }}>
              The subscription tracker built for Europe.
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          {[
            { href: '/blog', label: 'Blog' },
            { href: '/about', label: 'About' },
            { href: '/privacy', label: 'Privacy Policy' },
            { href: '/terms', label: 'Terms' },
            { href: '/contact', label: 'Contact' },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontSize: 13, color: 'rgba(240,240,245,0.45)', textDecoration: 'none' }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div style={{ fontSize: 13, color: 'rgba(240,240,245,0.45)' }}>Made in Europe 🇪🇺</div>
      </footer>
    </>
  )
}
