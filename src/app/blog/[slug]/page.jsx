import { businessPosts, getBusinessPostBySlug } from '../../../lib/business-posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export function generateStaticParams() {
  return businessPosts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const post = getBusinessPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Klaxo Business Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://business.klaxo.app/blog/${post.slug}`,
      type: 'article',
    },
    alternates: { canonical: `https://business.klaxo.app/blog/${post.slug}` },
  }
}

function renderInline(text) {
  const result = []
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g
  let last = 0
  let m
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) result.push(text.slice(last, m.index))
    if (m[2] !== undefined) {
      result.push(
        <a key={m.index} href={m[2]} style={{ color: '#5856D6', textDecoration: 'underline' }}>
          {m[1]}
        </a>
      )
    } else {
      result.push(
        <strong key={m.index} style={{ color: 'var(--text)', fontWeight: 600 }}>
          {m[3]}
        </strong>
      )
    }
    last = m.index + m[0].length
  }
  if (last < text.length) result.push(text.slice(last))
  return result.length === 0 ? text : result.length === 1 && typeof result[0] === 'string' ? result[0] : result
}

function renderContent(content) {
  const lines = content.trim().split('\n')
  const out = []
  let k = 0
  let i = 0

  while (i < lines.length) {
    const t = lines[i].trim()

    if (!t) { i++; continue }

    if (t === '---') {
      out.push(<hr key={k++} style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '40px 0' }} />)
      i++; continue
    }

    if (t.startsWith('## ')) {
      out.push(
        <h2 key={k++} style={{ fontSize: 24, fontWeight: 700, color: 'var(--text)', marginTop: 52, marginBottom: 16, letterSpacing: '-0.02em' }}>
          {t.slice(3)}
        </h2>
      )
      i++; continue
    }

    if (t.startsWith('### ')) {
      out.push(
        <h3 key={k++} style={{ fontSize: 18, fontWeight: 600, color: 'var(--text)', marginTop: 32, marginBottom: 10 }}>
          {t.slice(4)}
        </h3>
      )
      i++; continue
    }

    if (t.startsWith('- ')) {
      const items = []
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2))
        i++
      }
      out.push(
        <ul key={k++} style={{ paddingLeft: 24, marginBottom: 20, marginTop: 4 }}>
          {items.map((item, j) => (
            <li key={j} style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--muted)', marginBottom: 8 }}>
              {renderInline(item)}
            </li>
          ))}
        </ul>
      )
      continue
    }

    if (t.startsWith('**') && t.endsWith('**') && t.length > 4 && !t.slice(2, -2).includes('**')) {
      out.push(
        <h3 key={k++} style={{ fontSize: 18, fontWeight: 600, color: 'var(--text)', marginTop: 36, marginBottom: 12 }}>
          {t.slice(2, -2)}
        </h3>
      )
      i++; continue
    }

    const paraLines = []
    while (i < lines.length) {
      const pt = lines[i].trim()
      if (!pt) break
      if (pt === '---' || pt.startsWith('## ') || pt.startsWith('### ') || pt.startsWith('- ')) break
      if (pt.startsWith('**') && pt.endsWith('**') && pt.length > 4 && !pt.slice(2, -2).includes('**')) break
      paraLines.push(pt)
      i++
    }
    if (paraLines.length > 0) {
      out.push(
        <p key={k++} style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--muted)', marginBottom: 20 }}>
          {renderInline(paraLines.join(' '))}
        </p>
      )
    }
  }
  return out
}

export default function BusinessBlogPost({ params }) {
  const post = getBusinessPostBySlug(params.slug)
  if (!post) notFound()

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

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '100px 24px 80px' }}>
        <Link href="/blog" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          color: 'var(--muted)', fontSize: 14, textDecoration: 'none', marginBottom: 48,
        }}>
          ← Blog
        </Link>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
          marginBottom: 24, fontSize: 13, color: 'var(--muted)',
        }}>
          <span>{post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600,
          letterSpacing: '-0.03em', lineHeight: 1.15,
          marginBottom: 16, color: 'var(--text)',
        }}>
          {post.title}
        </h1>

        <p style={{
          fontSize: 17, color: 'var(--muted)',
          lineHeight: 1.6, marginBottom: 48, fontWeight: 300,
          borderBottom: '1px solid var(--border)', paddingBottom: 32,
        }}>
          {post.description}
        </p>

        <div>{renderContent(post.content)}</div>

        <div style={{
          marginTop: 64, padding: '32px',
          background: 'rgba(88,86,214,0.08)',
          border: '1px solid rgba(88,86,214,0.20)',
          borderRadius: 16, textAlign: 'center',
        }}>
          <p style={{ fontSize: 18, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>
            Experimenta o Klaxo Business gratuitamente
          </p>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 20 }}>
            Gere todas as subscrições de software da tua empresa num só lugar.
          </p>
          <a
            href="https://app.business.klaxo.app/register"
            style={{
              display: 'inline-block',
              padding: '12px 28px',
              background: '#5856D6', color: '#fff',
              borderRadius: 10, fontWeight: 600, fontSize: 15,
              textDecoration: 'none',
            }}
          >
            Começar grátis →
          </a>
        </div>
      </div>
    </div>
  )
}
