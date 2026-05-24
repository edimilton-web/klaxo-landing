'use client'

import { useState } from 'react'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle') // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    setState('loading')
    try {
      const res = await fetch('/api/business-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('Failed')
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div style={{
        maxWidth: 440,
        margin: '0 auto 40px',
        textAlign: 'center',
        padding: '28px 32px',
        background: 'rgba(34,197,94,0.08)',
        border: '1px solid rgba(34,197,94,0.25)',
        borderRadius: 16,
      }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>🎉</div>
        <p style={{ fontSize: 17, fontWeight: 700, color: '#F0F0F5', marginBottom: 6 }}>
          You&apos;re on the list.
        </p>
        <p style={{ fontSize: 14, color: 'rgba(240,240,245,0.6)', lineHeight: 1.6 }}>
          We&apos;ll reach out when Klaxo Business launches.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        width: '100%',
        maxWidth: 440,
        margin: '0 auto 40px',
      }}
    >
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@company.com"
          className="wf-input"
          style={{ flex: '1 1 200px' }}
        />
        <button
          type="submit"
          disabled={state === 'loading'}
          className="cta-primary"
          style={{ whiteSpace: 'nowrap', borderRadius: 10, padding: '14px 20px', fontSize: 14, flexShrink: 0 }}
        >
          {state === 'loading' ? 'Joining…' : 'Join the waitlist'}
        </button>
      </div>
      {state === 'error' && (
        <p style={{ fontSize: 13, color: '#F87171', margin: 0, textAlign: 'center' }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
