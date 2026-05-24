'use client'

import { useState } from 'react'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setState('loading')
    try {
      const res = await fetch('/api/business-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('Request failed')
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '8px 0' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
        <h3 style={{ fontSize: 22, fontWeight: 700, color: '#F0F0F5', marginBottom: 12 }}>
          You&apos;re on the list!
        </h3>
        <p style={{ fontSize: 15, color: 'rgba(240,240,245,0.65)', lineHeight: 1.7 }}>
          We&apos;ll be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
      <div className="wf-inline-row">
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="wf-input wf-input-flex"
        />
        <button
          type="submit"
          disabled={state === 'loading'}
          className="wf-btn wf-btn-inline"
        >
          {state === 'loading' ? 'Joining…' : 'Join the waitlist →'}
        </button>
      </div>
      {state === 'error' && (
        <p style={{ fontSize: 13, color: '#F87171', margin: 0 }}>
          Something went wrong. Please try again.
        </p>
      )}
      <p className="wf-hint">Free · No credit card · Cancel anytime</p>
    </form>
  )
}
