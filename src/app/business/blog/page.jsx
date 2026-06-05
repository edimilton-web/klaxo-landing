import { businessPosts } from '../../../lib/business-posts'
import Link from 'next/link'

export const metadata = {
  title: 'Blog — Gestão de Software para PMEs | Klaxo Business',
  description: 'Artigos sobre controlo de custos em software, ferramentas para PMEs portuguesas, gestão de equipas e o mercado SaaS europeu.',
  openGraph: {
    title: 'Blog — Gestão de Software para PMEs | Klaxo Business',
    description: 'Artigos sobre controlo de custos em software, ferramentas para PMEs portuguesas, gestão de equipas e o mercado SaaS europeu.',
    url: 'https://business.klaxo.app/blog',
    type: 'website',
  },
  alternates: { canonical: 'https://business.klaxo.app/blog' },
}

const CATEGORY_COLORS = {
  'Controlo de Custos': '#5856D6',
  'Ferramentas & Comparativos': '#3B82F6',
  'Gestão de Equipas': '#10B981',
  'Mercado SaaS Europeu': '#F59E0B',
}

export default function BusinessBlogPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 32px',
        background: 'rgba(9,9,11,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 32, height: 32, borderRadius: '22%',
            background: 'linear-gradient(135deg,#7C6FCD 0%,#5856D6 50%,#3B39A8 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, fontWeight: 900, fontFamily: "'Nunito', sans-serif", color: '#fff',
          }}>K</div>
          <span style={{ fontWeight: 600, fontSize: 16, color: 'var(--text)', letterSpacing: '-0.3px' }}>
            Klaxo <span style={{ color: '#5856D6' }}>Business</span>
          </span>
        </Link>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <Link href="/blog" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none', fontWeight: 500 }}>
            Blog
          </Link>
          <a
            href="https://app.business.klaxo.app/login"
            style={{
              fontSize: 13, fontWeight: 500,
              padding: '7px 16px', borderRadius: 8,
              background: '#5856D6', color: '#fff',
              textDecoration: 'none',
            }}
          >
            Entrar
          </a>
        </div>
      </nav>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '120px 24px 80px' }}>
        <div style={{ marginBottom: 56 }}>
          <div style={{
            display: 'inline-block',
            fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase',
            color: '#5856D6', background: 'rgba(88,86,214,0.12)',
            border: '1px solid rgba(88,86,214,0.25)',
            borderRadius: 100, padding: '4px 12px', marginBottom: 20,
          }}>
            Blog
          </div>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600,
            letterSpacing: '-0.03em', lineHeight: 1.1,
            marginBottom: 16, color: 'var(--text)',
          }}>
            Gestão de Software<br />para PMEs
          </h1>
          <p style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 560, lineHeight: 1.65, fontWeight: 300 }}>
            Artigos práticos sobre controlo de custos, ferramentas e tendências do mercado SaaS europeu — escritos para gestores de PMEs portuguesas.
          </p>
        </div>

        {businessPosts.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '80px 24px',
            border: '1px dashed var(--border)', borderRadius: 16,
          }}>
            <p style={{ fontSize: 15, color: 'var(--muted)' }}>
              Em breve — os primeiros artigos estão a ser preparados.
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
            gap: 24,
          }}>
            {businessPosts.map((post) => {
              const color = CATEGORY_COLORS[post.category] || '#5856D6'
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <article style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 16,
                    padding: '28px 32px',
                    height: '100%',
                    cursor: 'pointer',
                  }}>
                    <div style={{ marginBottom: 16 }}>
                      <span style={{
                        display: 'inline-block',
                        fontSize: 11, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase',
                        color: color,
                        background: `${color}18`,
                        border: `1px solid ${color}30`,
                        borderRadius: 100, padding: '3px 10px',
                      }}>
                        {post.category}
                      </span>
                    </div>
                    <h2 style={{
                      fontSize: 19, fontWeight: 600, letterSpacing: '-0.02em',
                      lineHeight: 1.3, marginBottom: 12, color: 'var(--text)',
                    }}>
                      {post.title}
                    </h2>
                    <p style={{
                      fontSize: 14, color: 'var(--muted)',
                      lineHeight: 1.6, marginBottom: 20, fontWeight: 300,
                    }}>
                      {post.description}
                    </p>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 16,
                      fontSize: 12, color: 'var(--muted-2)',
                    }}>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
