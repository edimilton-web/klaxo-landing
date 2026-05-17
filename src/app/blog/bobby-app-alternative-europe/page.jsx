import KlaxoNav from '../../components/KlaxoNav'

export function generateMetadata() {
  return {
    title: "Bobby App Alternative: What Europeans Should Use Instead | Klaxo",
    description: "Bobby is the most popular subscription tracker for iPhone — but it hasn't been updated in years and doesn't work with European banks.",
    openGraph: {
      title: "Bobby App Alternative: What Europeans Should Use Instead | Klaxo",
      description: "Bobby is the most popular subscription tracker for iPhone — but it hasn't been updated in years and doesn't work with European banks.",
      url: 'https://www.klaxo.app/blog/bobby-app-alternative-europe',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Bobby App Alternative: What Europeans Should Use Instead | Klaxo",
      description: "Bobby is the most popular subscription tracker for iPhone — but it hasn't been updated in years and doesn't work with European banks.",
    },
    alternates: { canonical: 'https://www.klaxo.app/blog/bobby-app-alternative-europe' },
  }
}

const h2 = (text) => (
  <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginTop: 52, marginBottom: 16, letterSpacing: '-0.02em' }}>
    {text}
  </h2>
)

const h3 = (text) => (
  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginTop: 32, marginBottom: 10 }}>
    {text}
  </h3>
)

const p = (children) => (
  <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', marginBottom: 20 }}>
    {children}
  </p>
)

const b = (text) => <strong style={{ color: '#fff', fontWeight: 600 }}>{text}</strong>

const li = (text) => (
  <li style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', marginBottom: 8 }}>
    {text}
  </li>
)

const ul = (children) => (
  <ul style={{ paddingLeft: 24, marginBottom: 24, marginTop: 4 }}>{children}</ul>
)

const divider = () => (
  <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)', margin: '40px 0' }} />
)

export default function Page() {
  return (
    <div style={{ background: '#0A0F1E', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif', color: '#fff' }}>
      <KlaxoNav />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '108px 24px 80px' }}>

        <a href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.4)', fontSize: 14, textDecoration: 'none', marginBottom: 48 }}>
          ← Back to blog
        </a>

        <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>May 17, 2026</span>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>7 min read</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: 48 }}>
          Bobby App Alternative: What Europeans Should Use Instead
        </h1>

        {p(<>Bobby has been around since 2015. For a while, it was the best option for tracking personal subscriptions on iPhone — clean design, simple concept, no unnecessary features. You added your subscriptions manually, set the billing dates, and Bobby reminded you before they renewed.</>)}
        {p(<>That was the pitch. It still works, more or less. The problem is that very little has changed since then.</>)}

        {divider()}
        {h2("What Bobby does well")}
        {p(<>To be fair: Bobby is genuinely good at what it does. The interface is clean. Adding a subscription takes about 30 seconds. It supports multiple currencies, which matters if you&apos;re in Europe. The notifications work.</>)}
        {p(<>For someone who wants a basic list of their subscriptions with renewal reminders, Bobby is fine.</>)}
        {p(<>The issue isn&apos;t what Bobby does. It&apos;s what Bobby doesn&apos;t do — and what it hasn&apos;t added in years.</>)}

        {divider()}
        {h2("Why Bobby falls short for European users in 2026")}

        {h3("No automatic detection.")}
        {p(<>Every subscription in Bobby is manual. That&apos;s not inherently bad — some people prefer it. But when you forget you even have a subscription (which is the whole point of tracking them), manual entry doesn&apos;t help. You can only add what you remember.</>)}

        {h3("iOS only.")}
        {p(<>If you use Android, Bobby doesn&apos;t exist for you. There&apos;s no web version either. Your subscriptions live on one device, in one app, with no way to access them from a browser or share them with a partner.</>)}

        {h3("No bank connection.")}
        {p(<>Bobby has no Open Banking integration, no ability to scan your bank statements, no way to detect subscriptions you&apos;ve missed. In the US, apps like Rocket Money can do this automatically. In Europe, PSD2 makes it technically possible — but Bobby hasn&apos;t built it.</>)}

        {h3("Stagnant development.")}
        {p(<>The app&apos;s last significant update was years ago. The core feature set hasn&apos;t changed. In a space where European banking infrastructure (PSD2, Open Banking) is becoming more capable, Bobby is standing still.</>)}

        {h3("One-time payment model.")}
        {p(<>Bobby charges a one-time fee to unlock full functionality. That sounds like a good deal — and it was, in 2018. The problem is that a one-time payment model doesn&apos;t fund ongoing development. There&apos;s no recurring revenue incentive to add features, fix bugs, or integrate with new banking APIs.</>)}

        {divider()}
        {h2("Who actually needs a Bobby alternative")}
        {p(<>Not everyone. If you&apos;re on iPhone, you only have a handful of subscriptions, and you&apos;re happy entering them manually, Bobby works fine.</>)}
        {p(<>You probably need something different if:</>)}
        {ul(<>
          {li("You're on Android and Bobby isn't an option")}
          {li("You want to access your subscriptions from a browser, not just your phone")}
          {li("You want automatic detection of recurring charges (or at least a clearer path to it)")}
          {li("You want a product that's still being actively developed")}
          {li("You need something that works correctly with European banks, currencies, and data protection requirements")}
        </>)}

        {divider()}
        {h2("The alternatives — what's actually available")}

        {h3("Subtrack (iOS and macOS)")}
        {p(<>Subtrack is the closest thing to Bobby on Apple devices — simple, manual, focused on subscription tracking. It looks good, supports multiple currencies, and handles the basics.</>)}
        {p(<>The limitations are similar: no bank connection, no Android, no web version. If you&apos;re in the Apple ecosystem and Bobby doesn&apos;t work for you, Subtrack is worth trying. Outside the Apple ecosystem, it&apos;s not an option.</>)}

        {h3("ReSubs (iOS, Android, Web)")}
        {p(<>ReSubs is the most complete dedicated subscription tracker available right now. It works across platforms, supports multiple currencies, has trial reminders and cancel guides, and gives you a proper breakdown of your spending.</>)}
        {p(<>The downsides: it&apos;s not free. The premium tier is required for full functionality, and it&apos;s priced higher than most alternatives. There&apos;s also no bank connection — everything is still manual.</>)}
        {p(<>For someone who wants the most capable manual tracker and doesn&apos;t mind paying more, ReSubs is the best option currently available.</>)}

        {h3("Rocket Money (US only)")}
        {p(<>Rocket Money is what the European market is missing. It automatically detects subscriptions by connecting to your bank account, can negotiate bills on your behalf, and has a genuinely powerful feature set.</>)}
        {p(<>It also requires a US bank account. For European users, it&apos;s completely unusable. It&apos;s listed here because it represents what&apos;s possible — and what European users don&apos;t currently have access to.</>)}

        {h3("Klaxo (Web, iOS, Android — built for Europe)")}
        {p(<>Klaxo was built to fill the gap that Rocket Money left in Europe. The starting point is similar to Bobby — add your subscriptions manually, get notified before renewals, see your real monthly cost. But the roadmap and infrastructure are different.</>)}

        {p(<>{b("What Klaxo does now:")}</>)}
        {ul(<>
          {li("Manual subscription tracking across all platforms (web, iOS, Android)")}
          {li("Renewal alerts via email, 5 days before every charge")}
          {li("Monthly spending summaries")}
          {li("Dashboard showing total monthly and annual cost by category")}
          {li("Euro support with full GDPR compliance")}
          {li("Free plan for up to 5 subscriptions")}
        </>)}

        {p(<>{b("What's coming:")}</>)}
        {ul(<>
          {li("Open Banking integration via PSD2 — automatic detection of subscriptions from European bank accounts")}
          {li("Price increase alerts when a service raises its rates")}
          {li("Shared subscription tracking for couples and households")}
        </>)}

        {p(<>The key difference from Bobby isn&apos;t just the feature set — it&apos;s the development trajectory. Klaxo is a product being actively built for the European market, with bank integration as a planned feature rather than something that was never considered.</>)}
        {p(<>{b("Pricing:")} Free for up to 5 subscriptions. Pro is €3,99/month or €29/year.</>)}

        {divider()}
        {h2("Side-by-side comparison")}

        <div style={{ overflowX: 'auto', marginBottom: 32 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr>
                {['Feature', 'Bobby', 'Subtrack', 'ReSubs', 'Klaxo'].map((col) => (
                  <th key={col} style={{
                    padding: '12px 16px',
                    textAlign: col === 'Feature' ? 'left' : 'center',
                    color: 'rgba(255,255,255,0.5)',
                    fontWeight: 600,
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    whiteSpace: 'nowrap',
                  }}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['iOS', '✅', '✅', '✅', '✅'],
                ['Android', '❌', '❌', '✅', '✅'],
                ['Web version', '❌', '❌', '✅', '✅'],
                ['Manual tracking', '✅', '✅', '✅', '✅'],
                ['Bank connection (EU)', '❌', '❌', '❌', '🔜'],
                ['Multi-currency', '✅', '✅', '✅', '✅'],
                ['Renewal alerts', '✅', '✅', '✅', '✅'],
                ['GDPR compliant', 'N/A', 'N/A', '✅', '✅'],
                ['Free tier', 'Limited', 'Limited', 'Limited', '✅ (5 subs)'],
                ['Active development', '❌', '✅', '✅', '✅'],
                ['Built for Europe', '❌', '❌', '❌', '✅'],
              ].map(([feature, ...vals], i) => (
                <tr key={feature} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,0.65)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{feature}</td>
                  {vals.map((val, j) => (
                    <td key={j} style={{
                      padding: '12px 16px',
                      textAlign: 'center',
                      color: j === 3 ? '#A78BFA' : 'rgba(255,255,255,0.55)',
                      fontWeight: j === 3 ? 600 : 400,
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {divider()}
        {h2("Which one to choose")}
        {p(<>{b("If you're on iPhone only and want something simple and free:")} Bobby still works. It&apos;s not being developed, but it functions.</>)}
        {p(<>{b("If you're on Android or want a web version:")} Bobby isn&apos;t an option. Try ReSubs if you&apos;re willing to pay, or Klaxo if you want a free starting point.</>)}
        {p(<>{b("If you want the most complete manual tracker available:")} ReSubs is currently the most capable option, though it costs more.</>)}
        {p(<>{b("If you want something built specifically for Europe — with a path to automatic bank detection:")} Klaxo is the only option building toward that. The manual tracking works today, and Open Banking integration is in development.</>)}
        {p(<>{b("If you need automatic detection right now:")} Honest answer — there&apos;s no European solution that does this reliably yet. Rocket Money works brilliantly, but only in the US. Klaxo&apos;s Open Banking integration will change this when it launches, but it&apos;s not live yet.</>)}

        {divider()}
        {h2("The real problem with subscription tracking in Europe")}
        {p(<>The apps exist. The problem is that the best technology — automatic bank-connected detection — was built for the US market and doesn&apos;t transfer to Europe cleanly.</>)}
        {p(<>US apps use Plaid, which connects to American banks. European banks operate under PSD2, which is a different (and in some ways more privacy-protective) framework. Building a subscription tracker that works with European banks requires building integrations with European banking infrastructure — something no major subscription tracker has done well yet.</>)}
        {p(<>Bobby never tried. ReSubs doesn&apos;t either. Rocket Money can&apos;t because it&apos;s US-only by design.</>)}
        {p(<>That&apos;s the gap Klaxo is building toward — a subscription tracker that works the way Rocket Money works in the US, but built for European banks, European currencies, and European data protection standards.</>)}

        {divider()}
        {h2("Frequently Asked Questions")}

        {h3("Is Bobby still being updated in 2026?")}
        {p(<>Bobby has seen minimal development in recent years. The core functionality works, but no significant new features have been added. For users who need more than basic manual tracking, it&apos;s worth considering alternatives.</>)}

        {h3("Does Bobby work with European banks?")}
        {p(<>No. Bobby has no bank connection at all — everything is entered manually. There&apos;s no integration with European banking APIs or Open Banking.</>)}

        {h3("What's the best free subscription tracker for Europe?")}
        {p(<>Klaxo offers a free plan for up to 5 subscriptions with renewal alerts and a dashboard. For more subscriptions, the Pro plan is €3,99/month.</>)}

        {h3("When will Klaxo add automatic subscription detection?")}
        {p(<>Open Banking integration via PSD2 is in active development. It will allow Klaxo to automatically detect subscriptions from European bank accounts — similar to how Rocket Money works in the US.</>)}

        <div style={{
          marginTop: 64,
          padding: '32px',
          background: 'rgba(124,58,237,0.1)',
          border: '1px solid rgba(124,58,237,0.25)',
          borderRadius: 16,
          textAlign: 'center',
        }}>
          <p style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 8 }}>
            Try Klaxo for free
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>
            Track every subscription. Get notified before renewals. Free forever for up to 5 subscriptions.
          </p>
          <a
            href="https://app.klaxo.app/register"
            style={{
              display: 'inline-block',
              padding: '12px 28px',
              background: '#7C3AED',
              color: '#fff',
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none',
            }}
          >
            Start for free →
          </a>
        </div>

        <p style={{ marginTop: 48, fontSize: 13, color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
          Last updated: May 2026 · Klaxo Team
        </p>

      </div>
    </div>
  )
}
