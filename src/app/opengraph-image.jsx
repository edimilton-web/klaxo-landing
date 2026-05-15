import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Klaxo — Subscription Tracker for Europe'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A0F1E 0%, #0D1530 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -80,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 900,
            height: 500,
            background: 'radial-gradient(ellipse at center, rgba(124,92,252,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
          <span style={{ fontSize: 44, fontWeight: 800, color: '#fff', letterSpacing: '-0.04em' }}>klax</span>
          <span style={{ fontSize: 44, fontWeight: 800, color: '#7C5CFC', letterSpacing: '-0.04em' }}>o</span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: 62,
            fontWeight: 800,
            color: '#fff',
            textAlign: 'center',
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            maxWidth: 900,
            marginBottom: 28,
          }}
        >
          <span>Stop losing money to</span>
          <span style={{ color: '#7C5CFC' }}>forgotten subscriptions.</span>
        </div>

        <div style={{ display: 'flex', fontSize: 26, color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>
          Track · Get alerts · Built for Europeans
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 48,
            right: 60,
            display: 'flex',
            background: '#7C5CFC',
            color: '#fff',
            padding: '12px 28px',
            borderRadius: 10,
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          Free to start
        </div>
      </div>
    ),
    { ...size }
  )
}
