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
          width: 32,
          height: 32,
          borderRadius: '22%',
          background: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 50%, #3B0764 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          fontWeight: 900,
          fontFamily: 'Nunito, system-ui, sans-serif',
          color: '#fff',
          flexShrink: 0,
          lineHeight: 1,
        }} aria-label="Klaxo">K</span>
        <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 600,
          fontSize: 18,
          color: '#F0F0F5',
          letterSpacing: '-0.3px',
        }}>Klaxo</span>
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <a href="https://app.klaxo.app/login" style={{ padding: '8px 16px', borderRadius: 8, fontSize: 13.5, fontWeight: 500, color: 'rgba(240,240,245,0.45)', textDecoration: 'none' }}>Sign in</a>
        <a href="https://app.klaxo.app/register" style={{ padding: '8px 18px', borderRadius: 8, background: '#7C3AED', color: '#fff', fontSize: 13.5, fontWeight: 600, textDecoration: 'none', display: 'inline-block', boxShadow: '0 0 20px rgba(124,58,237,0.35)' }}>Start for free</a>
      </div>
    </nav>
  )
}
