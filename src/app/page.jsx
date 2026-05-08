'use client'

import { useState, useRef, useEffect } from 'react'

const COUNTRIES = [
  { code: 'Portugal',    label: 'Portugal',     flag: '🇵🇹' },
  { code: 'Spain',       label: 'Spain',        flag: '🇪🇸' },
  { code: 'France',      label: 'France',       flag: '🇫🇷' },
  { code: 'Germany',     label: 'Germany',      flag: '🇩🇪' },
  { code: 'Italy',       label: 'Italy',        flag: '🇮🇹' },
  { code: 'Netherlands', label: 'Netherlands',  flag: '🇳🇱' },
  { code: 'Belgium',     label: 'Belgium',      flag: '🇧🇪' },
  { code: 'Other',       label: 'Other',        flag: '🌍' },
]

function CountrySelect({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const selected = COUNTRIES.find(c => c.code === value)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', padding: '14px 16px', borderRadius: 12, textAlign: 'left',
          background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
          color: selected ? '#fff' : 'rgba(255,255,255,0.35)', fontFamily: 'DM Sans',
          fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>{selected ? `${selected.flag}  ${selected.label}` : 'Select your country'}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points={open ? '18 15 12 9 6 15' : '6 9 12 15 18 9'} />
        </svg>
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0, zIndex: 50,
          background: '#0F1629', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 12, overflow: 'hidden',
          boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
          maxHeight: 260, overflowY: 'auto',
        }}>
          {COUNTRIES.map(c => (
            <button
              key={c.code}
              type="button"
              onClick={() => { onChange(c.code); setOpen(false) }}
              style={{
                width: '100%', padding: '12px 16px', textAlign: 'left', border: 'none',
                background: value === c.code ? 'rgba(59,130,246,0.15)' : 'transparent',
                color: value === c.code ? '#60A5FA' : 'rgba(255,255,255,0.75)',
                fontFamily: 'DM Sans', fontSize: 14, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 10,
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
              onMouseLeave={e => e.currentTarget.style.background = value === c.code ? 'rgba(59,130,246,0.15)' : 'transparent'}
            >
              <span style={{ fontSize: 18 }}>{c.flag}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── Subscription logos (CSS-only icon blocks) ──────────────────────────── */
const SUBS = [
  { name: 'Netflix',  color: '#E50914', letter: 'N',  price: '€17.99', due: 'May 4'  },
  { name: 'Spotify',  color: '#1DB954', letter: 'S',  price: '€10.99', due: 'May 7'  },
  { name: 'Adobe',    color: '#FF0000', letter: 'Ae', price: '€59.99', due: 'May 12' },
  { name: 'ChatGPT',  color: '#10A37F', letter: 'G',  price: '€20.00', due: 'May 15' },
  { name: 'YouTube',  color: '#FF0000', letter: 'Y',  price: '€13.99', due: 'May 18' },
  { name: 'Notion',   color: '#ffffff', letter: 'N',  price: '€8.00',  due: 'May 22' },
]

/* ─── Icon components ─────────────────────────────────────────────────────── */
function IconCalendar() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      <circle cx="16" cy="16" r="3" fill="rgba(239,68,68,0.2)" stroke="#EF4444"/>
      <line x1="16" y1="15" x2="16" y2="16.5" stroke="#EF4444" strokeWidth="1.8"/>
    </svg>
  )
}

function IconTrend() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  )
}

function IconWindows() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="8" height="7" rx="1"/><rect x="14" y="3" width="8" height="7" rx="1"/>
      <rect x="2" y="14" width="8" height="7" rx="1"/><rect x="14" y="14" width="8" height="7" rx="1"/>
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

/* ─── Dashboard mockup ────────────────────────────────────────────────────── */
function DashboardMockup() {
  return (
    <div className="relative mx-auto" style={{ maxWidth: 480 }}>
      {/* Glow backdrop */}
      <div className="absolute inset-0 rounded-2xl" style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.18) 0%, transparent 70%)',
        transform: 'scale(1.1)',
        filter: 'blur(24px)',
      }} />

      <div className="relative glass rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(59,130,246,0.2)' }}>
        {/* Top bar */}
        <div className="px-5 py-4 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-2">
            <span className="font-display font-700 text-white text-sm tracking-wide">klaxo</span>
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(59,130,246,0.15)', color: '#60A5FA', fontSize: 10 }}>May 2025</span>
          </div>
          <div className="text-right">
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Monthly total</p>
            <p className="text-lg font-display font-bold gradient-text">€130.96</p>
          </div>
        </div>

        {/* Subscription rows */}
        <div className="px-5 py-3 space-y-2">
          {SUBS.map((s) => (
            <div key={s.name} className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white" style={{ background: s.color === '#ffffff' ? '#1a1a1a' : `${s.color}22`, border: `1px solid ${s.color}44`, color: s.color === '#ffffff' ? '#fff' : s.color, fontSize: 11 }}>
                  {s.letter}
                </div>
                <div>
                  <p className="text-sm font-medium text-white" style={{ fontFamily: 'DM Sans' }}>{s.name}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Renews {s.due}</p>
                </div>
              </div>
              <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>{s.price}</span>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="px-5 py-3 flex items-center justify-between" style={{ background: 'rgba(59,130,246,0.06)', borderTop: '1px solid rgba(59,130,246,0.12)' }}>
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>6 active subscriptions</span>
          <span className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(59,130,246,0.2)', color: '#60A5FA' }}>+ Add new</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Testimonial card ────────────────────────────────────────────────────── */
function Testimonial({ quote, name, city, initials, color }) {
  return (
    <div className="glass rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#3B82F6"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        ))}
      </div>
      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'DM Sans' }}>"{quote}"</p>
      <div className="flex items-center gap-3 mt-auto pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: color }}>{initials}</div>
        <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>{name}, {city}</span>
      </div>
    </div>
  )
}

/* ─── Pricing card ────────────────────────────────────────────────────────── */
function PricingCard({ title, price, period, badge, features, cta, featured, annual }) {
  return (
    <div className={`relative rounded-2xl p-7 flex flex-col gap-5 ${featured ? 'card-featured' : 'glass'}`}>
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap" style={{ background: '#3B82F6', color: '#fff', fontFamily: 'DM Sans' }}>
          {badge}
        </div>
      )}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em' }}>{title}</p>
        <div className="flex items-end gap-1.5">
          <span className="font-display font-bold text-white" style={{ fontSize: 36 }}>{price}</span>
          {period && <span className="text-sm mb-1.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{period}</span>}
        </div>
        {annual && <p className="text-xs mt-1" style={{ color: '#60A5FA' }}>{annual}</p>}
      </div>
      <ul className="space-y-3 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'DM Sans' }}>
            <span className="mt-0.5 shrink-0"><IconCheck /></span>
            {f}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-150 ${featured ? 'btn-glow' : ''}`}
        style={{
          background: featured ? '#3B82F6' : 'rgba(255,255,255,0.06)',
          color: featured ? '#fff' : 'rgba(255,255,255,0.8)',
          border: featured ? 'none' : '1px solid rgba(255,255,255,0.1)',
          fontFamily: 'DM Sans',
        }}
      >
        {cta}
      </button>
    </div>
  )
}

/* ─── Main page ───────────────────────────────────────────────────────────── */
export default function KlaxoLanding() {
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleWaitlist(e) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      const res = await fetch('https://klaxo-waitlist-api.edimilton.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, country }),
      })
      if (res.ok || res.status === 201) {
        setSubmitted(true)
      } else {
        alert('Algo correu mal. Tenta novamente.')
      }
    } catch {
      alert('Erro de rede. Tenta novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen" style={{ background: '#0A0F1E', fontFamily: 'DM Sans, sans-serif' }}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4" style={{ background: 'rgba(10,15,30,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <span className="font-display font-bold text-white text-lg tracking-tight">klaxo</span>
        <a href="#waitlist" className="text-sm font-medium px-4 py-2 rounded-lg transition-all" style={{ background: 'rgba(59,130,246,0.15)', color: '#60A5FA', border: '1px solid rgba(59,130,246,0.25)' }}>
          Join waitlist
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden dot-grid">
        {/* Blue orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', color: '#60A5FA' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse inline-block" />
              Now in early access · Europe only
            </div>

            <h1 className="font-display font-bold text-white leading-tight mb-6" style={{ fontSize: 'clamp(36px, 6vw, 72px)', letterSpacing: '-0.03em' }}>
              You're paying for things<br />
              <span className="gradient-text">you forgot exist.</span>
            </h1>

            <p className="text-lg max-w-lg mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontFamily: 'DM Sans' }}>
              The average European spends <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>€180/month</span> on subscriptions. Most can't name half of them.
            </p>

            <div className="flex flex-col items-center gap-3">
              <a href="#waitlist" className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white" style={{ background: '#3B82F6', fontSize: 16, fontFamily: 'DM Sans' }}>
                Join the waitlist — it's free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Already 2,400+ people tracking their subscriptions</p>
            </div>
          </div>

          <DashboardMockup />
        </div>
      </section>

      {/* ── PAIN ── */}
      <section className="py-20 px-6" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-widest mb-12" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em' }}>
            Sound familiar?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: <IconCalendar />,
                iconColor: '#EF4444',
                title: 'Forgotten subscriptions',
                body: 'That gym app you stopped using in January is still charging you. Every month.',
              },
              {
                icon: <IconTrend />,
                iconColor: '#F59E0B',
                title: 'Price increases you missed',
                body: "Services raise prices quietly. You never notice until it's too late.",
              },
              {
                icon: <IconWindows />,
                iconColor: '#3B82F6',
                title: 'No single view',
                body: 'Your subscriptions are scattered across 6 different emails and 3 bank accounts.',
              },
            ].map((c) => (
              <div key={c.title} className="glass rounded-2xl p-7">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${c.iconColor}15`, color: c.iconColor }}>
                  {c.icon}
                </div>
                <h3 className="font-display font-semibold text-white mb-2" style={{ fontSize: 17 }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-6" id="how">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#60A5FA', letterSpacing: '0.15em' }}>How it works</p>
          <h2 className="font-display font-bold text-white mb-16" style={{ fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.025em' }}>
            Simple by design.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Add your subscriptions', body: 'Manually in 30 seconds, or via bank connection — coming soon.' },
              { step: '02', title: 'Get notified before renewals', body: '5-day advance alerts via email or push. Never be surprised again.' },
              { step: '03', title: 'See your real monthly cost', body: 'Dashboard with total spend, by category, and upcoming bills.' },
            ].map((s) => (
              <div key={s.step} className="relative text-left">
                <div className="font-display font-bold mb-4 gradient-text" style={{ fontSize: 13, letterSpacing: '0.1em' }}>{s.step}</div>
                <div className="glass rounded-2xl p-6">
                  <h3 className="font-display font-semibold text-white mb-2" style={{ fontSize: 16 }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="py-20 px-6" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-white text-center mb-14" style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', letterSpacing: '-0.02em' }}>
            Join people taking back control<br />of their budget.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Testimonial quote="I found €43/month I was wasting on apps I never use." name="Ana M." city="Lisbon" initials="AM" color="#8B5CF6" />
            <Testimonial quote="Finally something built for Europe, not the US." name="Carlos R." city="Madrid" initials="CR" color="#3B82F6" />
            <Testimonial quote="The renewal alerts alone are worth it." name="Sophie D." city="Paris" initials="SD" color="#10B981" />
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-24 px-6" id="pricing">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#60A5FA', letterSpacing: '0.15em' }}>Pricing</p>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.025em' }}>
            Honest pricing.
          </h2>
          <p className="text-sm mb-14" style={{ color: 'rgba(255,255,255,0.4)' }}>Start free — upgrade anytime.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
            <PricingCard
              title="Free"
              price="€0"
              features={[
                'Up to 5 subscriptions',
                'Basic dashboard',
                'Manual entry',
                'Monthly summary',
              ]}
              cta="Get started free"
              featured={false}
            />
            <PricingCard
              title="Pro"
              price="€3.99"
              period="/ month"
              badge="Most popular · save 39%"
              annual="or €29/year — billed annually"
              features={[
                'Unlimited subscriptions',
                'Renewal alerts (5 days before)',
                'Categories & tags',
                'CSV export',
                'Bank connection (coming soon)',
              ]}
              cta="Start free · upgrade anytime"
              featured
            />
          </div>
        </div>
      </section>

      {/* ── WAITLIST CTA ── */}
      <section className="py-20 px-6" id="waitlist">
        <div className="max-w-xl mx-auto">
          <div className="glass rounded-3xl p-10 text-center relative" style={{ border: '1px solid rgba(59,130,246,0.25)' }}>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#60A5FA', letterSpacing: '0.15em' }}>Early access</p>
              <h2 className="font-display font-bold text-white mb-3" style={{ fontSize: 'clamp(26px, 4vw, 38px)', letterSpacing: '-0.025em' }}>
                Be first when we launch.
              </h2>
              <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Early users get <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>3 months of Pro for free</span>.
              </p>

              {submitted ? (
                <div className="py-6">
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <p className="font-display font-semibold text-white mb-1">You're on the list.</p>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>We'll reach out when Klaxo launches.</p>
                </div>
              ) : (
                <form onSubmit={handleWaitlist} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-gray-500"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'DM Sans' }}
                  />
                  <CountrySelect value={country} onChange={setCountry} />
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-glow w-full py-4 rounded-xl font-semibold text-white transition-all"
                    style={{ background: '#3B82F6', fontFamily: 'DM Sans', fontSize: 15, opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? 'Reserving…' : 'Reserve my spot'}
                  </button>
                  <p className="text-xs pt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    No spam. No credit card. Just early access.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-white text-lg mb-1">klaxo</p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>The subscription tracker built for Europe.</p>
          </div>
          <div className="flex items-center gap-6">
            {[
              { label: 'Blog', href: '/blog' },
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
              { label: 'Contact', href: '/contact' },
            ].map((l) => (
              <a key={l.label} href={l.href} className="text-xs transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>{l.label}</a>
            ))}
          </div>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Made in Europe &#127466;&#127482;</p>
        </div>
      </footer>

    </div>
  )
}
