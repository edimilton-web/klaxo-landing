import { posts, getPostBySlug } from '../../../lib/posts'
import { notFound } from 'next/navigation'

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

function renderContent(content) {
  const paragraphs = content.trim().split('\n\n')
  return paragraphs.map((block, i) => {
    if (block.startsWith('**') && block.endsWith('**')) {
      const text = block.slice(2, -2)
      return <h3 key={i} style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginTop: 36, marginBottom: 12 }}>{text}</h3>
    }
    if (block.startsWith('**')) {
      const parts = block.split(/\*\*(.*?)\*\*/g)
      return (
        <p key={i} style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', marginBottom: 20 }}>
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j} style={{ color: '#fff', fontWeight: 600 }}>{part}</strong> : part
          )}
        </p>
      )
    }
    const parts = block.split(/\*\*(.*?)\*\*/g)
    const hasLink = block.includes('[') && block.includes('](')
    if (hasLink) {
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
      let lastIndex = 0
      const elements = []
      let match
      let source = block
      while ((match = linkRegex.exec(source)) !== null) {
        if (match.index > lastIndex) {
          elements.push(source.slice(lastIndex, match.index))
        }
        elements.push(
          <a key={match.index} href={match[2]} style={{ color: '#60A5FA', textDecoration: 'underline' }}>
            {match[1]}
          </a>
        )
        lastIndex = match.index + match[0].length
      }
      if (lastIndex < source.length) elements.push(source.slice(lastIndex))
      return (
        <p key={i} style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', marginBottom: 20 }}>
          {elements}
        </p>
      )
    }
    return (
      <p key={i} style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', marginBottom: 20 }}>
        {parts.map((part, j) =>
          j % 2 === 1 ? <strong key={j} style={{ color: '#fff', fontWeight: 600 }}>{part}</strong> : part
        )}
      </p>
    )
  })
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div style={{ background: '#0A0F1E', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif', color: '#fff' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '80px 24px' }}>

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
          background: 'rgba(59,130,246,0.08)',
          border: '1px solid rgba(59,130,246,0.2)',
          borderRadius: 16,
          textAlign: 'center',
        }}>
          <p style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 8 }}>
            Try Klaxo for free
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>
            Early users get 3 months of Pro free when we launch.
          </p>
          <a
            href="/#waitlist"
            style={{
              display: 'inline-block',
              padding: '12px 28px',
              background: '#3B82F6',
              color: '#fff',
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none',
            }}
          >
            Join the waitlist
          </a>
        </div>

      </div>
    </div>
  )
}
