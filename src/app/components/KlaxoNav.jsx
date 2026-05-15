export default function KlaxoNav() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 40px',
      background: 'rgba(10,10,15,0.7)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
        <span style={{
          width: 28,
          height: 28,
          borderRadius: 7,
          background: '#7C5CFC',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 16,
          fontWeight: 900,
          fontFamily: 'Nunito, sans-serif',
          color: '#fff',
          boxShadow: '0 0 12px rgba(124,92,252,0.5)',
          flexShrink: 0,
          lineHeight: 1,
        }}>K</span>
        <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 800,
          fontSize: 20,
          color: '#F0F0F5',
          letterSpacing: '-0.3px',
        }}>Klaxo</span>
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <a href="https://app.klaxo.app/login" style={{ padding: '8px 16px', borderRadius: 8, fontSize: 13.5, fontWeight: 500, color: 'rgba(240,240,245,0.45)', textDecoration: 'none' }}>Sign in</a>
        <a href="https://app.klaxo.app/register" style={{ padding: '8px 18px', borderRadius: 8, background: '#7C5CFC', color: '#fff', fontSize: 13.5, fontWeight: 600, textDecoration: 'none', display: 'inline-block', boxShadow: '0 0 20px rgba(124,92,252,0.35)' }}>Start for free</a>
      </div>
    </nav>
  )
}
