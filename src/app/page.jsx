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

const SUBS = [
  { name: 'Netflix',  color: '#E50914', letter: 'N',  price: '€17.99', due: 'May 4'  },
  { name: 'Spotify',  color: '#1DB954', letter: 'S',  price: '€10.99', due: 'May 7'  },
  { name: 'Adobe',    color: '#FF0000', letter: 'Ae', price: '€59.99', due: 'May 12' },
  { name: 'ChatGPT',  color: '#10A37F', letter: 'G',  price: '€20.00', due: 'May 15' },
  { name: 'YouTube',  color: '#FF0000', letter: 'Y',  price: '€13.99', due: 'May 18' },
]

/* ─── Country dropdown ────────────────────────────────────────────────────── */
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
          background: '#111118', border: '1px solid rgba(255,255,255,0.1)',
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
                background: value === c.code ? 'rgba(124,92,252,0.15)' : 'transparent',
                color: value === c.code ? '#A78BFA' : 'rgba(255,255,255,0.75)',
                fontFamily: 'DM Sans', fontSize: 14, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 10,
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
              onMouseLeave={e => e.currentTarget.style.background = value === c.code ? 'rgba(124,92,252,0.15)' : 'transparent'}
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

/* ─── Icons ───────────────────────────────────────────────────────────────── */
function IconCalendar() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      <circle cx="16" cy="16" r="3" fill="rgba(239,68,68,0.2)" stroke="#EF4444"/>
    </svg>
  )
}
function IconTrend() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  )
}
function IconWindows() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="8" height="7" rx="1"/><rect x="14" y="3" width="8" height="7" rx="1"/>
      <rect x="2" y="14" width="8" height="7" rx="1"/><rect x="14" y="14" width="8" height="7" rx="1"/>
    </svg>
  )
}
function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C5CFC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

/* ─── Subscription row (shared between mobile/desktop showcase) ───────────── */
function SubRow({ s, i, total }) {
  return (
    <div style={{
      padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      borderBottom: i < total - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 7, display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 10, fontWeight: 700, flexShrink: 0,
          background: s.color === '#ffffff' ? '#1a1a2e' : `${s.color}1A`,
          color: s.color === '#ffffff' ? '#aaa' : s.color,
          border: `1px solid ${s.color}33`,
        }}>
          {s.letter}
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>{s.name}</p>
          <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>Renews {s.due}</p>
        </div>
      </div>
      <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.65)', flexShrink: 0 }}>{s.price}</span>
    </div>
  )
}

/* ─── Mobile showcase (sem sidebar, sem floating cards) ───────────────────── */
function MobileShowcase() {
  return (
    <div className="hero-showcase relative mx-auto mt-10 w-full" style={{ maxWidth: 480 }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', inset: '-20%', zIndex: 0,
        background: 'radial-gradient(ellipse at 50% 40%, rgba(124,92,252,0.2) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        borderRadius: 14, overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(124,92,252,0.08)',
      }}>
        {/* Browser chrome */}
        <div style={{
          background: '#1A1A26', padding: '10px 14px',
          display: 'flex', alignItems: 'center', gap: 10,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ display: 'flex', gap: 5, flexShrink: 0 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
          </div>
          <div style={{
            flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 6,
            padding: '4px 10px', fontSize: 11, color: 'rgba(255,255,255,0.25)',
            overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
          }}>
            app.klaxo.app/dashboard
          </div>
        </div>

        {/* App content */}
        <div style={{ background: '#0D0D14', padding: '16px' }}>
          {/* Header row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>Dashboard</p>
            <span style={{ fontSize: 11, color: '#7C5CFC', fontWeight: 600 }}>+ Add</span>
          </div>

          {/* Stat cards — 2 cols */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            {[
              { label: 'Monthly', value: '€130.96', color: '#7C5CFC' },
              { label: 'Active', value: '6 subs', color: '#10B981' },
            ].map(stat => (
              <div key={stat.label} style={{
                background: '#111118', borderRadius: 10, padding: '12px 14px',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: 9, marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{stat.label}</p>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em' }}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Subscription list */}
          <div style={{ background: '#111118', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
            <div style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>Subscriptions</span>
            </div>
            {SUBS.slice(0, 4).map((s, i) => (
              <SubRow key={s.name} s={s} i={i} total={4} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Desktop showcase (completo com sidebar e floating cards) ────────────── */
function DesktopShowcase() {
  return (
    <div className="hero-showcase relative mx-auto mt-16" style={{ maxWidth: 960 }}>
      {/* Ambient violet glow */}
      <div style={{
        position: 'absolute', inset: '-30%', zIndex: 0,
        background: 'radial-gradient(ellipse at 50% 40%, rgba(124,92,252,0.22) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      {/* Floating badge — top left */}
      <div className="float-card" style={{
        position: 'absolute', top: -20, left: -12, zIndex: 10,
        background: 'rgba(17,17,24,0.95)', border: '1px solid rgba(124,92,252,0.35)',
        borderRadius: 14, padding: '12px 16px',
        boxShadow: '0 8px 32px rgba(124,92,252,0.2), 0 2px 8px rgba(0,0,0,0.5)',
        backdropFilter: 'blur(12px)', minWidth: 160,
      }}>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 10, marginBottom: 4, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Monthly total</p>
        <p style={{ color: '#fff', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em' }}>€130.96</p>
        <p style={{ color: '#10B981', fontSize: 11, marginTop: 3 }}>↓ €12 vs last month</p>
      </div>

      {/* Floating alert — top right */}
      <div className="float-card-delayed" style={{
        position: 'absolute', top: 32, right: -16, zIndex: 10,
        background: 'rgba(17,17,24,0.95)', border: '1px solid rgba(239,68,68,0.25)',
        borderRadius: 14, padding: '10px 14px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: '#E5091422', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E50914', fontWeight: 700, fontSize: 11, border: '1px solid #E5091444' }}>N</div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>Netflix ↑ price</p>
          <p style={{ fontSize: 11, color: 'rgba(239,68,68,0.8)' }}>+€2 next renewal</p>
        </div>
      </div>

      {/* App window */}
      <div className="app-float" style={{
        position: 'relative', zIndex: 1,
        borderRadius: 14, overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: '0 50px 130px rgba(0,0,0,0.85), 0 0 0 1px rgba(124,92,252,0.1)',
        transformOrigin: 'center top',
      }}>
        {/* Browser chrome */}
        <div style={{
          background: '#1A1A26', padding: '11px 16px',
          display: 'flex', alignItems: 'center', gap: 12,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
          </div>
          <div style={{
            flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 7,
            padding: '5px 12px', fontSize: 12, color: 'rgba(255,255,255,0.28)',
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            app.klaxo.app/dashboard
          </div>
        </div>

        {/* App body */}
        <div style={{ background: '#0D0D14', display: 'flex' }}>
          {/* Sidebar */}
          <div style={{ width: 210, background: '#111118', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '18px 10px', flexShrink: 0 }}>
            <div style={{ padding: '4px 10px', marginBottom: 20 }}>
              <span style={{ fontWeight: 700, fontSize: 16, color: '#fff', letterSpacing: '-0.01em' }}>klaxo</span>
            </div>
            {['Dashboard', 'Subscriptions', 'Upcoming', 'Analytics', 'Settings'].map((label, i) => (
              <div key={label} style={{
                padding: '9px 10px', borderRadius: 8, marginBottom: 2,
                background: i === 0 ? 'rgba(124,92,252,0.15)' : 'transparent',
                color: i === 0 ? '#A78BFA' : 'rgba(255,255,255,0.38)',
                fontSize: 13, fontWeight: i === 0 ? 600 : 400,
              }}>
                {label}
              </div>
            ))}
            <div style={{ padding: '10px', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(124,92,252,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#A78BFA' }}>A</div>
                <div>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Ana M.</p>
                  <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>Pro plan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div style={{ flex: 1, padding: '22px 24px', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>Dashboard</p>
              <span style={{ fontSize: 11, color: '#7C5CFC', fontWeight: 600 }}>+ Add new</span>
            </div>

            {/* Stat cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 20 }}>
              {[
                { label: 'Monthly total', value: '€130.96', sub: 'May 2025', color: '#7C5CFC' },
                { label: 'Active', value: '6 subs', sub: '2 paused', color: '#10B981' },
                { label: 'Next renewal', value: 'May 4', sub: 'Netflix · €17.99', color: '#F59E0B' },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: '#111118', borderRadius: 10, padding: '14px 16px',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: 10, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{stat.label}</p>
                  <p style={{ color: '#fff', fontWeight: 700, fontSize: 20, letterSpacing: '-0.02em' }}>{stat.value}</p>
                  <p style={{ color: stat.color, fontSize: 10, marginTop: 3 }}>{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Subscription list */}
            <div style={{ background: '#111118', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
              <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.55)' }}>Your subscriptions</span>
                <span style={{ fontSize: 11, color: '#7C5CFC', fontWeight: 500 }}>+ Add new</span>
              </div>
              {SUBS.map((s, i) => <SubRow key={s.name} s={s} i={i} total={SUBS.length} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Responsive showcase wrapper ─────────────────────────────────────────── */
function CinematicShowcase() {
  return (
    <>
      <div className="md:hidden"><MobileShowcase /></div>
      <div className="hidden md:block"><DesktopShowcase /></div>
    </>
  )
}

/* ─── Testimonial ─────────────────────────────────────────────────────────── */
function Testimonial({ quote, name, city, initials, color }) {
  return (
    <div className="glass rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#7C5CFC"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        ))}
      </div>
      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>"{quote}"</p>
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
    <div
      className={`relative rounded-2xl p-6 md:p-7 flex flex-col gap-5 ${featured ? 'card-featured' : 'glass'}`}
      style={{ transition: 'transform 0.2s ease' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap" style={{ background: '#7C5CFC', color: '#fff' }}>
          {badge}
        </div>
      )}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em' }}>{title}</p>
        <div className="flex items-end gap-1.5">
          <span className="font-bold text-white" style={{ fontSize: 36, letterSpacing: '-0.02em' }}>{price}</span>
          {period && <span className="text-sm mb-1.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{period}</span>}
        </div>
        {annual && <p className="text-xs mt-1" style={{ color: '#A78BFA' }}>{annual}</p>}
      </div>
      <ul className="space-y-3 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <span className="mt-0.5 shrink-0"><IconCheck /></span>
            {f}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-150 ${featured ? 'btn-glow' : ''}`}
        style={{
          background: featured ? '#7C5CFC' : 'rgba(255,255,255,0.06)',
          color: featured ? '#fff' : 'rgba(255,255,255,0.8)',
          border: featured ? 'none' : '1px solid rgba(255,255,255,0.1)',
        }}
      >
        {cta}
      </button>
    </div>
  )
}

/* ─── Scroll reveal hook ──────────────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ─── Main page ───────────────────────────────────────────────────────────── */
export default function KlaxoLanding() {
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useScrollReveal()

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
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#0A0A0F', fontFamily: 'DM Sans, sans-serif' }}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-4" style={{ background: 'rgba(10,10,15,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <span className="font-bold text-white text-base md:text-lg" style={{ letterSpacing: '-0.02em' }}>klaxo</span>
        <div className="flex items-center gap-2 md:gap-3">
          <a href="https://app.klaxo.app" className="hidden sm:block text-sm font-medium transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
          >
            Sign in
          </a>
          <a href="#waitlist" className="text-sm font-semibold px-3 md:px-4 py-2 rounded-lg transition-all" style={{ background: '#7C5CFC', color: '#fff' }}
            onMouseEnter={e => e.currentTarget.style.background = '#6D4EE8'}
            onMouseLeave={e => e.currentTarget.style.background = '#7C5CFC'}
          >
            Join waitlist
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-28 md:pt-32 pb-10 px-4 md:px-6 overflow-hidden dot-grid">
        {/* Violet orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 pointer-events-none" style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(124,92,252,0.18) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }} />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center">

            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-xs font-semibold mb-6 md:mb-8" style={{ background: 'rgba(124,92,252,0.12)', border: '1px solid rgba(124,92,252,0.25)', color: '#A78BFA' }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#7C5CFC', boxShadow: '0 0 6px #7C5CFC' }} />
              Now in early access · Europe only
            </div>

            {/* Headline */}
            <h1 className="hero-headline font-bold text-white leading-tight mb-5 md:mb-6" style={{ fontSize: 'clamp(38px, 7vw, 88px)', letterSpacing: '-0.04em', lineHeight: 1.05 }}>
              You're paying for things<br />
              <span className="gradient-text">you forgot exist.</span>
            </h1>

            {/* Subheadline */}
            <p className="hero-sub text-base md:text-lg max-w-lg mx-auto mb-8 md:mb-10 px-2" style={{ color: 'rgba(255,255,255,0.48)', lineHeight: 1.7 }}>
              The average European spends <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>€180/month</span> on subscriptions. Most can't name half of them.
            </p>

            {/* CTAs */}
            <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <a href="#waitlist" className="btn-glow inline-flex items-center gap-2 px-6 md:px-7 py-3.5 md:py-4 rounded-xl font-semibold text-white w-full sm:w-auto justify-center" style={{ background: '#7C5CFC', fontSize: 15 }}>
                Join the waitlist — it's free
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="#how" className="inline-flex items-center gap-2 px-6 md:px-7 py-3.5 md:py-4 rounded-xl font-semibold transition-all w-full sm:w-auto justify-center" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.1)', fontSize: 15 }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
              >
                See how it works →
              </a>
            </div>

            <p className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>Already 2,400+ people tracking their subscriptions</p>
          </div>

          {/* Showcase */}
          <CinematicShowcase />
        </div>
      </section>

      {/* ── SERVICE PILLS ── */}
      <section className="py-10 md:py-14 px-4 md:px-6 reveal" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold mb-6 md:mb-8" style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Track everything you're subscribed to
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {['Netflix', 'Spotify', 'Adobe CC', 'GitHub', 'Notion', 'ChatGPT', 'YouTube', 'Figma', 'iCloud', 'Disney+'].map(s => (
              <span key={s} className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(255,255,255,0.55)' }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-widest mb-3 reveal" style={{ color: 'rgba(255,255,255,0.28)', letterSpacing: '0.15em' }}>
            Sound familiar?
          </p>
          <h2 className="text-center font-bold text-white mb-10 md:mb-14 reveal" style={{ fontSize: 'clamp(24px, 4vw, 44px)', letterSpacing: '-0.025em' }}>
            The subscription problem<br />is real.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {[
              { icon: <IconCalendar />, iconColor: '#EF4444', title: 'Forgotten subscriptions', body: 'That gym app you stopped using in January is still charging you. Every month.' },
              { icon: <IconTrend />,    iconColor: '#F59E0B', title: 'Price increases you missed', body: "Services raise prices quietly. You never notice until it's too late." },
              { icon: <IconWindows />,  iconColor: '#7C5CFC', title: 'No single view', body: 'Your subscriptions are scattered across 6 different emails and 3 bank accounts.' },
            ].map((c, i) => (
              <div key={c.title} className="glass rounded-2xl p-6 md:p-7 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 md:mb-5" style={{ background: `${c.iconColor}15`, color: c.iconColor }}>
                  {c.icon}
                </div>
                <h3 className="font-semibold text-white mb-2" style={{ fontSize: 16 }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.48)' }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 md:py-24 px-4 md:px-6" id="how" style={{ background: 'rgba(255,255,255,0.012)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 reveal" style={{ color: '#A78BFA', letterSpacing: '0.15em' }}>How it works</p>
          <h2 className="font-bold text-white mb-10 md:mb-16 reveal" style={{ fontSize: 'clamp(24px, 4vw, 44px)', letterSpacing: '-0.025em' }}>
            Simple by design.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { step: '01', title: 'Add your subscriptions', body: 'Manually in 30 seconds, or via bank connection — coming soon.' },
              { step: '02', title: 'Get notified before renewals', body: '5-day advance alerts via email or push. Never be surprised again.' },
              { step: '03', title: 'See your real monthly cost', body: 'Dashboard with total spend, by category, and upcoming bills.' },
            ].map((s, i) => (
              <div key={s.step} className="relative text-left reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="font-bold mb-3 gradient-text" style={{ fontSize: 13, letterSpacing: '0.1em' }}>{s.step}</div>
                <div className="glass rounded-2xl p-5 md:p-6">
                  <h3 className="font-semibold text-white mb-2" style={{ fontSize: 16 }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.48)' }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-white text-center mb-10 md:mb-14 reveal" style={{ fontSize: 'clamp(22px, 3.5vw, 38px)', letterSpacing: '-0.02em' }}>
            Join people taking back control<br />of their budget.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {[
              { quote: "I found €43/month I was wasting on apps I never use.", name: "Ana M.", city: "Lisbon",  initials: "AM", color: "#7C5CFC" },
              { quote: "Finally something built for Europe, not the US.",        name: "Carlos R.", city: "Madrid",  initials: "CR", color: "#3B82F6" },
              { quote: "The renewal alerts alone are worth it.",                 name: "Sophie D.", city: "Paris",   initials: "SD", color: "#10B981" },
            ].map((t, i) => (
              <div key={t.name} className="reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                <Testimonial {...t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-16 md:py-24 px-4 md:px-6" id="pricing" style={{ background: 'rgba(255,255,255,0.012)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 reveal" style={{ color: '#A78BFA', letterSpacing: '0.15em' }}>Pricing</p>
          <h2 className="font-bold text-white mb-3 reveal" style={{ fontSize: 'clamp(24px, 4vw, 44px)', letterSpacing: '-0.025em' }}>
            Honest pricing.
          </h2>
          <p className="text-sm mb-12 md:mb-14 reveal" style={{ color: 'rgba(255,255,255,0.38)' }}>Start free — upgrade anytime.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-4">
            <div className="reveal">
              <PricingCard
                title="Free"
                price="€0"
                features={['Up to 5 subscriptions', 'Basic dashboard', 'Manual entry', 'Monthly summary']}
                cta="Get started free"
                featured={false}
              />
            </div>
            <div className="reveal" style={{ transitionDelay: '0.12s' }}>
              <PricingCard
                title="Pro"
                price="€3.99"
                period="/ month"
                badge="Most popular · save 39%"
                annual="or €29/year — billed annually"
                features={['Unlimited subscriptions', 'Renewal alerts (5 days before)', 'Categories & tags', 'CSV export', 'Bank connection (coming soon)']}
                cta="Start free · upgrade anytime"
                featured
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WAITLIST ── */}
      <section className="py-16 md:py-24 px-4 md:px-6" id="waitlist" style={{ background: 'linear-gradient(180deg, rgba(124,92,252,0.07) 0%, rgba(10,10,15,0) 100%)' }}>
        <div className="max-w-xl mx-auto">
          <div className="relative rounded-2xl md:rounded-3xl p-7 md:p-10 text-center reveal" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(124,92,252,0.2)', boxShadow: '0 0 80px rgba(124,92,252,0.08)' }}>
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(124,92,252,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#A78BFA', letterSpacing: '0.15em' }}>Early access</p>
              <h2 className="font-bold text-white mb-3" style={{ fontSize: 'clamp(22px, 4vw, 38px)', letterSpacing: '-0.025em' }}>
                Be first when we launch.
              </h2>
              <p className="text-sm mb-7 md:mb-8" style={{ color: 'rgba(255,255,255,0.48)' }}>
                Early users get <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>3 months of Pro for free</span>.
              </p>

              {submitted ? (
                <div className="py-6">
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <p className="font-semibold text-white mb-1">You're on the list.</p>
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
                    style={{ background: '#7C5CFC', fontFamily: 'DM Sans', fontSize: 15, opacity: loading ? 0.7 : 1 }}
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
      <footer className="py-10 md:py-12 px-4 md:px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-white text-lg mb-1" style={{ letterSpacing: '-0.02em' }}>klaxo</p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>The subscription tracker built for Europe.</p>
          </div>
          <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
            {[
              { label: 'Blog', href: '/blog' },
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
              { label: 'Contact', href: '/contact' },
            ].map((l) => (
              <a key={l.label} href={l.href} className="text-xs transition-colors" style={{ color: 'rgba(255,255,255,0.38)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
              >{l.label}</a>
            ))}
          </div>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Made in Europe &#127466;&#127482;</p>
        </div>
      </footer>

    </div>
  )
}
