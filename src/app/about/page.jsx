import KlaxoNav from '../components/KlaxoNav'

export const metadata = {
  title: "About — Klaxo",
  description: "Klaxo was built by Eddie, from Setúbal, Portugal, who got tired of forgotten subscriptions silently draining his bank account.",
  alternates: {
    canonical: "https://www.klaxo.app/about",
  },
}

export default function About() {
  return (
    <>
      <KlaxoNav />

      <main style={{ paddingTop: 100, minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <article style={{ maxWidth: 680, margin: '0 auto', padding: '60px 24px 100px' }}>

          <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.15em', color: '#7C5CFC', marginBottom: 16 }}>
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, fontSize: 16, color: 'rgba(240,240,245,0.75)', lineHeight: 1.8 }}>
            <p>
              My name is Eddie. I&apos;m from Setúbal, a small city on the coast of Portugal, and I built
              Klaxo because I got tired of the same thing happening to me every few months: checking
              my bank statement and finding charges I had completely forgotten about.
            </p>
            <p>
              It wasn&apos;t one big subscription. It was three euros here, eight euros there, a yearly
              plan I signed up for during a free trial and never cancelled. It adds up — quietly,
              invisibly.
            </p>
            <p>
              I looked for something to help me track it all. Most tools I found were built for the
              US market: dollar-first, filled with services I&apos;d never heard of, and missing the
              European platforms I actually used. Some felt like they were designed to monetise my
              data rather than help me manage my money.
            </p>
            <p>
              So I built my own.
            </p>
            <p>
              Klaxo is a subscription tracker built specifically for Europeans. It supports euro
              pricing, recognises the services popular in Portugal, Spain, France, and across the EU,
              and it was designed from day one to be honest about privacy: no ads, no data selling,
              GDPR-compliant by default.
            </p>
            <p>
              It&apos;s a small tool with one job: help you see exactly what you&apos;re paying for, and
              warn you before you&apos;re charged for something you forgot you had.
            </p>
            <p style={{ color: 'rgba(240,240,245,0.45)', fontStyle: 'italic', marginTop: 8 }}>
              — Eddie, Setúbal, Portugal
            </p>
          </div>

          <div style={{
            marginTop: 64,
            paddingTop: 40,
            borderTop: '1px solid rgba(255,255,255,0.07)',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}>
            <p style={{ fontSize: 14, color: 'rgba(240,240,245,0.45)' }}>Questions or feedback?</p>
            <a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 24px',
                borderRadius: 10,
                background: '#7C5CFC',
                color: '#fff',
                fontSize: 14,
                fontWeight: 600,
                textDecoration: 'none',
                width: 'fit-content',
                boxShadow: '0 4px 20px rgba(124,92,252,0.4)',
              }}
            >
              Get in touch →
            </a>
          </div>
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
