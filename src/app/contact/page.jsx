export const metadata = {
  title: "Contact | Klaxo",
  description: "Get in touch with the Klaxo team. We respond within 1-2 business days.",
  openGraph: {
    title: "Contact | Klaxo",
    description: "Get in touch with the Klaxo team.",
    url: "https://www.klaxo.app/contact",
  },
  twitter: {
    card: "summary",
    title: "Contact | Klaxo",
    description: "Get in touch with the Klaxo team.",
  },
  alternates: { canonical: "https://www.klaxo.app/contact" },
}

import KlaxoNav from '../components/KlaxoNav'

export default function Contact() {
  return (
    <div style={{ background: '#0A0F1E', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif', color: '#fff' }}>
      <KlaxoNav />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '108px 24px 80px' }}>

        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 8 }}>Contact</h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 56 }}>
          Have a question, suggestion, or just want to say hello? We'd love to hear from you.
        </p>

        <div style={{ display: 'grid', gap: 16 }}>
          {[
            {
              label: 'General enquiries',
              email: 'hello@klaxo.app',
              description: 'Product questions, feedback, partnerships.',
            },
            {
              label: 'Privacy & data',
              email: 'privacy@klaxo.app',
              description: 'GDPR requests, data deletion, privacy concerns.',
            },
            {
              label: 'Support',
              email: 'support@klaxo.app',
              description: 'Technical issues, account problems.',
            },
          ].map((c) => (
            <div
              key={c.label}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16,
                padding: '24px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              <p style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)' }}>{c.label}</p>
              <a
                href={`mailto:${c.email}`}
                style={{ fontSize: 18, fontWeight: 600, color: '#60A5FA', textDecoration: 'none' }}
              >
                {c.email}
              </a>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>{c.description}</p>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 48, fontSize: 14, color: 'rgba(255,255,255,0.3)' }}>
          We typically respond within 1–2 business days. Made in Europe 🇪🇺
        </p>

      </div>
    </div>
  )
}
