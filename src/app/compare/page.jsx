import RevealObserver from "../RevealObserver"

export const metadata = {
  title: "Klaxo vs Bobby vs Rocket Money — Which Subscription Tracker Is Best for Europe?",
  description: "Comparing subscription trackers for European users. Bobby, Rocket Money, ReSubs, and Klaxo — what actually works and what doesn't.",
  alternates: {
    canonical: "https://www.klaxo.app/compare",
  },
}

const TABLE_ROWS = [
  { feature: "Works in Europe",         klaxo: "✅",                bobby: "✅",          rocket: "❌ US only",      resubs: "✅" },
  { feature: "Web version",             klaxo: "✅",                bobby: "❌",          rocket: "✅",              resubs: "✅" },
  { feature: "iOS",                     klaxo: "✅",                bobby: "✅",          rocket: "✅",              resubs: "✅" },
  { feature: "Android",                 klaxo: "✅",                bobby: "❌",          rocket: "✅",              resubs: "✅" },
  { feature: "Manual tracking",         klaxo: "✅",                bobby: "✅",          rocket: "✅",              resubs: "✅" },
  { feature: "Automatic detection",     klaxo: "🔜 PSD2",          bobby: "❌",          rocket: "✅ US banks",     resubs: "❌" },
  { feature: "Open Banking (EU)",       klaxo: "🔜",               bobby: "❌",          rocket: "❌",              resubs: "❌" },
  { feature: "Renewal alerts",          klaxo: "✅",                bobby: "✅",          rocket: "✅",              resubs: "✅" },
  { feature: "Monthly summary email",   klaxo: "✅",                bobby: "❌",          rocket: "✅",              resubs: "❌" },
  { feature: "Euro support",            klaxo: "✅",                bobby: "✅",          rocket: "❌",              resubs: "✅" },
  { feature: "GDPR compliant",          klaxo: "✅",                bobby: "N/A",         rocket: "❌",              resubs: "✅" },
  { feature: "No ads / no data selling",klaxo: "✅",                bobby: "✅",          rocket: "❌",              resubs: "✅" },
  { feature: "Active development",      klaxo: "✅",                bobby: "❌",          rocket: "✅",              resubs: "✅" },
  { feature: "Built for Europe",        klaxo: "✅",                bobby: "❌",          rocket: "❌",              resubs: "❌" },
  { feature: "Free tier",               klaxo: "✅ Up to 5 subs",  bobby: "✅ Limited",  rocket: "✅ Limited",      resubs: "✅ Limited" },
  { feature: "Paid plan",               klaxo: "€3,99/mo · €29/yr",bobby: "~$3 one-time",rocket: "$8–14/mo",        resubs: "Varies" },
]

function CellValue({ v }) {
  if (typeof v !== "string") return <span>{v}</span>
  if (v.startsWith("✅")) return <span style={{ color: "#4ADE80", fontWeight: 600 }}>{v}</span>
  if (v.startsWith("❌")) return <span style={{ color: "#F87171", fontWeight: 600 }}>{v}</span>
  if (v.startsWith("🔜")) return <span style={{ color: "#A78BFA", fontWeight: 600 }}>{v}</span>
  if (v === "N/A") return <span style={{ color: "rgba(240,240,245,0.3)" }}>N/A</span>
  return <span>{v}</span>
}

const COMPARISONS = [
  {
    slug: "bobby",
    vs: "Klaxo vs Bobby",
    body: [
      "Bobby has been around since 2015. For iPhone users who want something simple and free, it still works. The interface is clean, adding a subscription takes 30 seconds, and the renewal notifications do their job.",
      "The limitations are real though. Bobby is iOS only — Android users don't have an option. There's no web version. The app hasn't seen significant development in years, which means no bank connection and no path toward automatic detection.",
      "For European users specifically, Bobby's biggest gap isn't what it does — it's what it doesn't do and what it's unlikely to ever add. Open Banking integration requires active investment in European banking infrastructure. Bobby isn't building that.",
    ],
    ifA: { label: "Bobby", text: "You're on iPhone, you have a small number of subscriptions, and you want something completely free and simple." },
    ifB: { label: "Klaxo", text: "You're on Android or want a web version, you want a product being actively developed, or you want Open Banking integration when it launches." },
  },
  {
    slug: "rocket",
    vs: "Klaxo vs Rocket Money",
    body: [
      "Rocket Money (formerly Truebill) is the benchmark for what a subscription tracker can be. It automatically detects subscriptions by connecting to your bank account, can negotiate bills on your behalf, and has a genuinely polished interface.",
      "It also doesn't work in Europe. Rocket Money requires a US bank account. It uses Plaid for bank connectivity, which works with American financial institutions. European banks operate under PSD2 — a different regulatory framework that Rocket Money hasn't integrated with.",
      "This isn't a minor limitation — it's a fundamental one. The core feature that makes Rocket Money valuable (automatic subscription detection) simply doesn't function outside the US. For European users, Klaxo is building toward the European equivalent — manual tracking today, PSD2-based automatic detection in development.",
    ],
    ifA: { label: "Rocket Money", text: "You have a US bank account." },
    ifB: { label: "Klaxo", text: "You're based in Europe and want something that works with your bank." },
  },
  {
    slug: "resubs",
    vs: "Klaxo vs ReSubs",
    body: [
      "ReSubs is the most complete dedicated subscription tracker available today. It works across iOS, Android, and web. It has trial reminders, cancel guides, multi-currency support, and a clean interface. Of the manual trackers, it's the most capable.",
      "The tradeoffs: it costs more than alternatives. The premium plan is required for full functionality, and the pricing is higher than Klaxo Pro. There's no bank connection — everything is manual. And like Bobby, it wasn't built with the European market specifically in mind.",
      "For someone who wants the most feature-complete manual tracker right now and doesn't mind paying more, ReSubs is worth considering. For someone who wants to start free, pay less, and have a path to automatic bank detection, Klaxo makes more sense.",
    ],
    ifA: { label: "ReSubs", text: "You want the most capable manual tracker available today and price isn't a concern." },
    ifB: { label: "Klaxo", text: "You want a free starting point, lower Pro pricing, or you're waiting for Open Banking integration." },
  },
]

const FAQS = [
  {
    q: "Is there a subscription tracker that works with European banks?",
    a: "Not yet with automatic detection. Klaxo is building PSD2/Open Banking integration — when it launches, it will detect subscriptions automatically from European bank accounts. Manual tracking works today.",
  },
  {
    q: "Does Bobby work in Europe?",
    a: "Bobby works in Europe for manual tracking — it supports multiple currencies. But it has no bank connection, it's iOS only, and it's not being actively developed. For Android users or anyone wanting automatic detection, it's not a viable option.",
  },
  {
    q: "Is Rocket Money available in Europe?",
    a: "No. Rocket Money requires a US bank account and doesn't support European banking infrastructure. It's not available to European users.",
  },
  {
    q: "What's the best free subscription tracker for Europe?",
    a: "Klaxo offers a free plan for up to 5 subscriptions with a full dashboard and monthly summaries. Bobby also has a free tier for iPhone users. For unlimited subscriptions, Klaxo Pro is €3,99/month.",
  },
  {
    q: "Which subscription tracker has the best value in Europe?",
    a: "Klaxo Pro at €3,99/month or €29/year is the best value for European users who want unlimited tracking, renewal alerts, and a product with active development and a bank integration roadmap.",
  },
]

export default function ComparePage() {
  return (
    <>
      <RevealObserver />

      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">
          <span className="nav-logo-icon">K</span>
          Klaxo
        </a>
        <div className="nav-right">
          <a href="/compare" className="nav-signin" style={{ color: "rgba(167,139,250,0.9)" }}>Compare</a>
          <a href="https://app.klaxo.app/login" className="nav-signin">Sign in</a>
          <a href="https://app.klaxo.app/register" className="nav-cta">Start for free</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: "52vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "140px 24px 64px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: 700, height: 350, background: "radial-gradient(ellipse at center, rgba(124,92,252,0.18) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} />

        <div className="badge" style={{ marginBottom: 28 }}>
          <span className="badge-dot" />
          Honest comparison · Updated May 2026
        </div>

        <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(36px,5.5vw,62px)", letterSpacing: "-0.04em", lineHeight: 1.08, color: "#F0F0F5", maxWidth: 820, marginBottom: 20, position: "relative" }}>
          We compared every subscription tracker.<br />
          <span style={{ background: "linear-gradient(135deg,#7C5CFC,#A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Here's what actually works in Europe.
          </span>
        </h1>

        <p style={{ fontSize: 17, color: "rgba(240,240,245,0.55)", maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.7 }}>
          Most of them were built for Americans. Here's an honest look at what's available — including Klaxo.
        </p>

        {/* Quick verdict pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {[
            { label: "Bobby", note: "iOS only · No bank" },
            { label: "Rocket Money", note: "US only · Won't work" },
            { label: "ReSubs", note: "Manual · Pricier" },
            { label: "Klaxo", note: "Built for Europe", active: true },
          ].map(({ label, note, active }) => (
            <div key={label} style={{
              padding: "10px 18px",
              borderRadius: 100,
              background: active ? "rgba(124,92,252,0.18)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${active ? "rgba(124,92,252,0.45)" : "rgba(255,255,255,0.08)"}`,
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: active ? "#C4B5FD" : "rgba(240,240,245,0.6)" }}>{label}</span>
              <span style={{ width: 1, height: 12, background: "rgba(255,255,255,0.1)" }} />
              <span style={{ fontSize: 12, color: active ? "rgba(196,181,253,0.7)" : "rgba(240,240,245,0.35)" }}>{note}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── SHORT VERSION ── */}
      <section className="section-pad reveal" style={{ maxWidth: 800, margin: "0 auto" }}>
        <p className="section-label">The short version</p>
        <h2 className="section-title" style={{ marginBottom: 32 }}>Four trackers. One honest verdict.</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {[
            {
              name: "Rocket Money",
              verdict: "Best-in-class. Doesn't work here.",
              color: "#F87171",
              bg: "rgba(248,113,113,0.06)",
              border: "rgba(248,113,113,0.2)",
              desc: "Automatic detection, bill negotiation, polished interface — and requires a US bank account. For European users, it doesn't work at all.",
            },
            {
              name: "Bobby",
              verdict: "Simple. iOS only. Stagnant.",
              color: "#FCD34D",
              bg: "rgba(252,211,77,0.06)",
              border: "rgba(252,211,77,0.2)",
              desc: "Most popular manual tracker for iPhone. Hasn't been updated in years, iOS only, no bank integration path.",
            },
            {
              name: "ReSubs",
              verdict: "Most capable manual tracker.",
              color: "#60A5FA",
              bg: "rgba(96,165,250,0.06)",
              border: "rgba(96,165,250,0.2)",
              desc: "Works on iOS, Android, and web. No bank connection, costs more than alternatives, not built for Europe specifically.",
            },
            {
              name: "Klaxo",
              verdict: "Built for Europe. Open Banking incoming.",
              color: "#A78BFA",
              bg: "rgba(124,92,252,0.08)",
              border: "rgba(124,92,252,0.35)",
              desc: "Manual tracking today, Open Banking via PSD2 in development. Free plan available, Pro at €3,99/month.",
            },
          ].map(({ name, verdict, color, bg, border, desc }) => (
            <div key={name} style={{ background: bg, border: `1px solid ${border}`, borderRadius: 16, padding: 24, transition: "transform 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
              <div style={{ fontSize: 13, fontWeight: 700, color, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>{name}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#F0F0F5", marginBottom: 10, lineHeight: 1.4 }}>{verdict}</div>
              <div style={{ fontSize: 13.5, color: "rgba(240,240,245,0.55)", lineHeight: 1.65 }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── COMPARISON TABLE ── */}
      <section className="section-pad reveal">
        <p className="section-label">Side-by-side comparison</p>
        <h2 className="section-title" style={{ marginBottom: 40 }}>Every feature. No spin.</h2>

        <div style={{ maxWidth: 900, margin: "0 auto", overflowX: "auto", borderRadius: 16, border: "1px solid rgba(124,92,252,0.2)", boxShadow: "0 0 60px rgba(124,92,252,0.06)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 580 }}>
            <thead>
              <tr style={{ background: "rgba(124,92,252,0.14)", borderBottom: "1px solid rgba(124,92,252,0.3)" }}>
                <th style={{ padding: "16px 20px", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#A78BFA", letterSpacing: "0.1em", textTransform: "uppercase", width: "32%" }}>Feature</th>
                {["Klaxo", "Bobby", "Rocket Money", "ReSubs"].map((h) => (
                  <th key={h} style={{ padding: "16px 16px", textAlign: "center", fontSize: 13, fontWeight: 700, color: h === "Klaxo" ? "#C4B5FD" : "rgba(240,240,245,0.6)", letterSpacing: "-0.01em" }}>
                    {h === "Klaxo" && <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#7C5CFC", marginRight: 6, verticalAlign: "middle", boxShadow: "0 0 6px #7C5CFC" }} />}
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row, i) => (
                <tr key={row.feature} style={{
                  background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.018)",
                  borderBottom: i < TABLE_ROWS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  transition: "background 0.15s",
                }}>
                  <td style={{ padding: "13px 20px", fontSize: 13.5, color: "rgba(240,240,245,0.7)", fontWeight: 500 }}>{row.feature}</td>
                  {(["klaxo", "bobby", "rocket", "resubs"]).map((key) => (
                    <td key={key} style={{ padding: "13px 16px", textAlign: "center", fontSize: 13.5 }}>
                      <CellValue v={row[key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── INDIVIDUAL COMPARISONS ── */}
      <section className="section-pad">
        <p className="section-label">Head to head</p>
        <h2 className="section-title" style={{ marginBottom: 48 }}>The full breakdown</h2>

        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>
          {COMPARISONS.map(({ slug, vs, body, ifA, ifB }) => (
            <div key={slug} className="reveal" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden" }}>
              {/* section header */}
              <div style={{ padding: "22px 32px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(124,92,252,0.06)", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 4, height: 20, borderRadius: 2, background: "var(--violet)", flexShrink: 0 }} />
                <h3 style={{ fontSize: 19, fontWeight: 800, color: "#F0F0F5", letterSpacing: "-0.025em", margin: 0 }}>{vs}</h3>
              </div>

              <div style={{ padding: "28px 32px" }}>
                {/* body paragraphs */}
                <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
                  {body.map((p, i) => (
                    <p key={i} style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(240,240,245,0.65)", margin: 0 }}>{p}</p>
                  ))}
                </div>

                {/* choose X if */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={{ padding: "16px 20px", borderRadius: 12, background: "rgba(248,113,113,0.06)", border: "1px solid rgba(248,113,113,0.15)" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#F87171", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Choose {ifA.label} if</div>
                    <div style={{ fontSize: 13, color: "rgba(240,240,245,0.6)", lineHeight: 1.6 }}>{ifA.text}</div>
                  </div>
                  <div style={{ padding: "16px 20px", borderRadius: 12, background: "rgba(124,92,252,0.08)", border: "1px solid rgba(124,92,252,0.25)" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#A78BFA", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Choose {ifB.label} if</div>
                    <div style={{ fontSize: 13, color: "rgba(240,240,245,0.6)", lineHeight: 1.6 }}>{ifB.text}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── WHY WE BUILT KLAXO ── */}
      <section className="section-pad reveal" style={{ maxWidth: 760, margin: "0 auto" }}>
        <p className="section-label">Our story</p>
        <h2 className="section-title" style={{ marginBottom: 32 }}>Why we built Klaxo</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            "Most of the apps above exist because someone in the US had the same problem European users have — too many subscriptions, no visibility, surprise charges. They built tools for their market.",
            "We built Klaxo because the European market is different. Different banks, different currencies, different data protection expectations. PSD2 makes automatic bank detection possible here — nobody had built a consumer subscription tracker around it.",
            "Klaxo starts where Bobby and ReSubs are: manual entry, renewal alerts, monthly summaries. The difference is where it's going. Open Banking integration is in active development. When it launches, Klaxo will be able to detect every recurring charge from your European bank account automatically — the way Rocket Money works in the US, but built for here.",
          ].map((p, i) => (
            <p key={i} style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(240,240,245,0.65)", margin: 0 }}>{p}</p>
          ))}
        </div>

        <div style={{ marginTop: 28, padding: "18px 24px", borderRadius: 14, background: "rgba(124,92,252,0.08)", border: "1px solid rgba(124,92,252,0.25)", display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 22, flexShrink: 0 }}>🔜</span>
          <p style={{ margin: 0, fontSize: 14, color: "rgba(196,181,253,0.85)", lineHeight: 1.6 }}>
            <strong style={{ color: "#C4B5FD" }}>Early Pro subscribers get access when Open Banking launches.</strong> Manual tracking is fully functional today — and Pro unlocks unlimited subscriptions, alerts, and monthly summaries.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── FAQ ── */}
      <section className="section-pad reveal" style={{ maxWidth: 760, margin: "0 auto" }}>
        <p className="section-label">FAQ</p>
        <h2 className="section-title" style={{ marginBottom: 40 }}>Common questions</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS.map(({ q, a }) => (
            <div key={q} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, padding: "20px 24px", transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(124,92,252,0.25)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#F0F0F5", marginBottom: 8, letterSpacing: "-0.015em" }}>{q}</div>
              <div style={{ fontSize: 14, color: "rgba(240,240,245,0.55)", lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── CTA ── */}
      <section className="waitlist-section reveal">
        <div className="waitlist-bg" />
        <div className="waitlist-inner">
          <h2 className="waitlist-title">Try Klaxo free.</h2>
          <p className="waitlist-sub">
            No credit card required. Free forever for up to 5 subscriptions.<br />
            <strong>Already using Bobby or ReSubs? Your data imports in minutes.</strong>
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <a href="https://app.klaxo.app/register" className="wf-btn" style={{ textDecoration: "none", display: "inline-block", maxWidth: 280 }}>
              Start for free →
            </a>
            <p className="wf-hint">Free forever · No credit card required · Upgrade anytime</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div>
          <div className="footer-brand">klaxo <span>The subscription tracker built for Europe.</span></div>
        </div>
        <div className="footer-links">
          <a href="/compare">Compare</a>
          <a href="/blog">Blog</a>
          <a href="/about">About</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms</a>
        </div>
        <div className="footer-eu">Made in Europe 🇪🇺</div>
      </footer>
    </>
  )
}
