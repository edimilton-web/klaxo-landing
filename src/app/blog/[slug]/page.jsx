import { posts, getPostBySlug } from '../../../lib/posts'
import { notFound } from 'next/navigation'
import KlaxoNav from '../../components/KlaxoNav'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Klaxo`,
    description: post.description,
    openGraph: {
      title: `${post.title} | Klaxo`,
      description: post.description,
      url: `https://www.klaxo.app/blog/${params.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Klaxo`,
      description: post.description,
    },
    alternates: { canonical: `https://www.klaxo.app/blog/${params.slug}` },
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
      result.push(<a key={m.index} href={m[2]} style={{ color: '#60A5FA', textDecoration: 'underline' }}>{m[1]}</a>)
    } else {
      result.push(<strong key={m.index} style={{ color: '#fff', fontWeight: 600 }}>{m[3]}</strong>)
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

    // Horizontal rule
    if (t === '---') {
      out.push(<hr key={k++} style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)', margin: '40px 0' }} />)
      i++; continue
    }

    // H2: ## Header
    if (t.startsWith('## ')) {
      out.push(<h2 key={k++} style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginTop: 52, marginBottom: 16, letterSpacing: '-0.02em' }}>{t.slice(3)}</h2>)
      i++; continue
    }

    // H3: ### Header
    if (t.startsWith('### ')) {
      out.push(<h3 key={k++} style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginTop: 32, marginBottom: 10 }}>{t.slice(4)}</h3>)
      i++; continue
    }

    // Bullet list: collect consecutive "- item" lines
    if (t.startsWith('- ')) {
      const items = []
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2))
        i++
      }
      out.push(
        <ul key={k++} style={{ paddingLeft: 24, marginBottom: 20, marginTop: 4 }}>
          {items.map((item, j) => (
            <li key={j} style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', marginBottom: 8 }}>
              {renderInline(item)}
            </li>
          ))}
        </ul>
      )
      continue
    }

    // Table: collect consecutive "| ... |" lines
    if (t.startsWith('|')) {
      const rows = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        const cells = lines[i].trim().split('|').slice(1, -1).map(c => c.trim())
        rows.push(cells)
        i++
      }
      // Filter out separator rows like |---|---|
      const dataRows = rows.filter(r => !r.every(c => /^[-: ]+$/.test(c)))
      if (dataRows.length > 1) {
        const [header, ...body] = dataRows
        out.push(
          <div key={k++} style={{ overflowX: 'auto', marginBottom: 32 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr>
                  {header.map((cell, j) => (
                    <th key={j} style={{ padding: '12px 16px', textAlign: j === 0 ? 'left' : 'center', color: 'rgba(255,255,255,0.5)', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.1)', whiteSpace: 'nowrap' }}>{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, ri) => (
                  <tr key={ri} style={{ background: ri % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ padding: '12px 16px', textAlign: ci === 0 ? 'left' : 'center', color: ci === row.length - 1 ? '#A78BFA' : 'rgba(255,255,255,0.55)', fontWeight: ci === row.length - 1 ? 600 : 400, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
      continue
    }

    // Bold-only line → h3 (backward compat for existing posts using **Title** format)
    if (t.startsWith('**') && t.endsWith('**') && t.length > 4 && !t.slice(2, -2).includes('**')) {
      out.push(<h3 key={k++} style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginTop: 36, marginBottom: 12 }}>{t.slice(2, -2)}</h3>)
      i++; continue
    }

    // Paragraph: collect consecutive non-empty non-special lines
    const paraLines = []
    while (i < lines.length) {
      const pt = lines[i].trim()
      if (!pt) break
      if (pt === '---' || pt.startsWith('## ') || pt.startsWith('### ') || pt.startsWith('- ') || pt.startsWith('|')) break
      // Bold-only line also breaks paragraph collection
      if (pt.startsWith('**') && pt.endsWith('**') && pt.length > 4 && !pt.slice(2, -2).includes('**')) break
      paraLines.push(pt)
      i++
    }
    if (paraLines.length > 0) {
      const text = paraLines.join(' ')
      out.push(
        <p key={k++} style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', marginBottom: 20 }}>
          {renderInline(text)}
        </p>
      )
    }
  }
  return out
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div style={{ background: '#0A0F1E', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif', color: '#fff' }}>
      <KlaxoNav />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '108px 24px 80px' }}>

        <a href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.4)', fontSize: 14, textDecoration: 'none', marginBottom: 48 }}>
          ← Back to blog
        </a>

        <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>{post.date}</span>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>{post.readTime}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: 48 }}>
          {post.title}
        </h1>

        <div>{renderContent(post.content)}</div>

        <div style={{
          marginTop: 64,
          padding: '32px',
          background: 'rgba(124,58,237,0.1)',
          border: '1px solid rgba(124,58,237,0.25)',
          borderRadius: 16,
          textAlign: 'center',
        }}>
          <p style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 8 }}>
            Try Klaxo for free
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>
            Track every subscription. Get notified before renewals. Free forever for up to 5 subscriptions.
          </p>
          <a
            href="https://app.klaxo.app/register"
            style={{
              display: 'inline-block',
              padding: '12px 28px',
              background: '#7C3AED',
              color: '#fff',
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none',
            }}
          >
            Start for free →
          </a>
        </div>

      </div>
    </div>
  )
}
