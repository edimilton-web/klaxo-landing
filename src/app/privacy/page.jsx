export const metadata = {
  title: 'Privacy Policy — Klaxo',
  description: 'How Klaxo collects, uses and protects your personal data.',
}

export default function PrivacyPolicy() {
  return (
    <div style={{ background: '#0A0F1E', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif', color: '#fff' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '80px 24px' }}>

        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.4)', fontSize: 14, textDecoration: 'none', marginBottom: 48 }}>
          ← Back to Klaxo
        </a>

        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginBottom: 48 }}>Last updated: May 2025</p>

        {[
          {
            title: '1. Who we are',
            body: 'Klaxo is a subscription tracking service built for European users. We are committed to protecting your personal data and complying with the General Data Protection Regulation (GDPR).',
          },
          {
            title: '2. What data we collect',
            body: 'We collect your email address and country when you join our waitlist. When you use the app, we collect subscription data you manually enter (service name, price, renewal date). We do not sell your data to third parties.',
          },
          {
            title: '3. How we use your data',
            body: 'We use your email to send you product updates, renewal alerts, and information about the Klaxo launch. You can unsubscribe at any time via the link in any email we send.',
          },
          {
            title: '4. Data storage',
            body: 'Your data is stored securely on servers located within the European Union. We use industry-standard encryption in transit and at rest.',
          },
          {
            title: '5. Your rights (GDPR)',
            body: 'Under GDPR you have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at privacy@klaxo.app and we will respond within 30 days.',
          },
          {
            title: '6. Cookies',
            body: 'We use only essential cookies required for the site to function. We do not use tracking or advertising cookies.',
          },
          {
            title: '7. Changes to this policy',
            body: 'We may update this policy from time to time. We will notify you by email if there are significant changes.',
          },
          {
            title: '8. Contact',
            body: 'If you have any questions about this policy, email us at privacy@klaxo.app.',
          },
        ].map((s) => (
          <div key={s.title} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, color: '#fff' }}>{s.title}</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.55)' }}>{s.body}</p>
          </div>
        ))}

      </div>
    </div>
  )
}
