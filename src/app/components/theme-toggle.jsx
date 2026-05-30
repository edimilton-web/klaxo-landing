'use client'

import { useTheme } from './theme-provider'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
      style={{
        width: 32, height: 32,
        background: 'var(--surface-2)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--muted)',
        fontSize: 15,
        transition: 'all 0.2s',
        flexShrink: 0,
      }}
    >
      {theme === 'dark' ? '☀' : '☽'}
    </button>
  )
}
