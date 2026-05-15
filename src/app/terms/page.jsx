export const metadata = {
  title: "Terms of Service | Klaxo",
  description: "Terms and conditions for using Klaxo.",
  openGraph: {
    title: "Terms of Service | Klaxo",
    description: "Terms and conditions for using Klaxo.",
    url: "https://www.klaxo.app/terms",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Klaxo",
    description: "Terms and conditions for using Klaxo.",
  },
  alternates: { canonical: "https://www.klaxo.app/terms" },
}

export default function Terms() {
  return (
    <div style={{ background: '#0A0F1E', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif', color: '#fff' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '80px 24px' }}>

        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.4)', fontSize: 14, textDecoration: 'none', marginBottom: 48 }}>
          ← Back to Klaxo
        </a>

        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginBottom: 48 }}>Last updated: May 2025</p>

        {[
          {
            title: '1. Acceptance of terms',
            body: 'By accessing or using Klaxo, you agree to be bound by these Terms of Service. If you do not agree, please do not use the service.',
          },
          {
            title: '2. Description of service',
            body: 'Klaxo is a subscription tracking tool that helps users monitor their recurring payments and receive renewal alerts. The service is currently in early access and features may change.',
          },
          {
            title: '3. User accounts',
            body: 'You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorised use of your account at hello@klaxo.app.',
          },
          {
            title: '4. Acceptable use',
            body: 'You agree not to misuse the service, attempt to access it by unauthorised means, or use it for any unlawful purpose. We reserve the right to suspend accounts that violate these terms.',
          },
          {
            title: '5. Free and paid plans',
            body: 'Klaxo offers a free plan with limited features and a paid Pro plan. Paid subscriptions are billed monthly or annually. You may cancel at any time and will retain access until the end of the billing period.',
          },
          {
            title: '6. Limitation of liability',
            body: 'Klaxo is provided "as is" without warranties of any kind. We are not liable for any financial decisions made based on data shown in the app. Always verify subscription information with your bank or service provider.',
          },
          {
            title: '7. Termination',
            body: 'We reserve the right to terminate or suspend access to the service at any time, with or without notice, for conduct that we believe violates these terms.',
          },
          {
            title: '8. Governing law',
            body: 'These terms are governed by the laws of the European Union and the jurisdiction in which Klaxo operates. Any disputes shall be resolved in the competent courts of that jurisdiction.',
          },
          {
            title: '9. Contact',
            body: 'For any questions regarding these terms, contact us at hello@klaxo.app.',
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
