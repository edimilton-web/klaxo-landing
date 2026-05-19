'use client'

import { useState } from 'react'

const WORKER_URL = 'https://klaxo-waitlist-api.edimilton.workers.dev'

export default function OpenBankingModal() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle') // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setState('loading')
    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, type: 'open-banking' }),
      })
      if (!res.ok) throw new Error('Request failed')
      setState('success')
    } catch {
      setState('error')
    }
  }

  function handleClose() {
    setOpen(false)
    setTimeout(() => {
      setState('idle')
      setEmail('')
    }, 300)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '13px 26px',
          borderRadius: 12,
          background: 'rgba(124,92,252,0.15)',
          border: '1px solid rgba(124,92,252,0.4)',
          color: '#C4B5FD',
          fontSize: 15,
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(124,92,252,0.25)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(124,92,252,0.15)'}
      >
        Join the waitlist to be first →
      </button>

      {open && (
        <div
          onClick={handleClose}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#13111A',
              border: '1px solid rgba(124,92,252,0.3)',
              borderRadius: 20,
              padding: 'clamp(28px, 5vw, 44px)',
              maxWidth: 440,
              width: '100%',
              position: 'relative',
            }}
          >
            <button
              onClick={handleClose}
              aria-label="Close"
              style={{
                position: 'absolute', top: 16, right: 16,
                background: 'none', border: 'none',
                color: 'rgba(240,240,245,0.4)', fontSize: 20,
                cursor: 'pointer', lineHeight: 1, padding: 4,
              }}
            >
              ✕
            </button>

            {state === 'success' ? (
              <div style={{ textAlign: 'center', padding: '8px 0' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>🎉</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#F0F0F5', marginBottom: 12 }}>
                  You&apos;re on the list.
                </h3>
                <p style={{ fontSize: 15, color: 'rgba(240,240,245,0.65)', lineHeight: 1.7 }}>
                  We&apos;ll notify you when Open Banking launches.
                </p>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: 8 }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: 999,
                    background: 'rgba(124,92,252,0.18)',
                    border: '1px solid rgba(124,92,252,0.4)',
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: '#A78BFA',
                  }}>
                    Open Banking · Coming Soon
                  </span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#F0F0F5', marginBottom: 8, marginTop: 16 }}>
                  Be the first to know.
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(240,240,245,0.55)', marginBottom: 24, lineHeight: 1.6 }}>
                  Enter your email and we&apos;ll notify you as soon as Open Banking via PSD2 is live on Klaxo.
                </p>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 10,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(124,92,252,0.3)',
                      color: '#F0F0F5',
                      fontSize: 15,
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                  {state === 'error' && (
                    <p style={{ fontSize: 13, color: '#F87171', margin: 0 }}>
                      Something went wrong. Please try again.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={state === 'loading'}
                    style={{
                      padding: '12px 24px',
                      borderRadius: 10,
                      background: state === 'loading' ? 'rgba(124,92,252,0.3)' : 'rgba(124,92,252,0.85)',
                      border: 'none',
                      color: '#fff',
                      fontSize: 15,
                      fontWeight: 600,
                      cursor: state === 'loading' ? 'default' : 'pointer',
                      transition: 'background 0.2s',
                    }}
                  >
                    {state === 'loading' ? 'Joining…' : 'Notify me →'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
