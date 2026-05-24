'use client'

import { useState } from 'react'

const WORKER_URL = 'https://klaxo-waitlist-api.edimilton.workers.dev'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setState('loading')
    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, type: 'klaxo-business' }),
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
          You&apos;re on the list.
        </h3>
        <p style={{ fontSize: 15, color: 'rgba(240,240,245,0.65)', lineHeight: 1.7 }}>
          We&apos;ll notify you when Klaxo Business launches.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 420, margin: '0 auto' }}>
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="wf-input"
      />
      {state === 'error' && (
        <p style={{ fontSize: 13, color: '#F87171', margin: 0 }}>
          Something went wrong. Please try again.
        </p>
      )}
      <button
        type="submit"
        disabled={state === 'loading'}
        className="wf-btn"
      >
        {state === 'loading' ? 'Joining\u2026' : 'Join the waitlist \u2192'}
      </button>
      <p className="wf-hint">Free · No credit card · Cancel anytime</p>
    </form>
  )
}
