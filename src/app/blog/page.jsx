import { posts } from '../../lib/posts'

export const metadata = {
  title: 'Blog — Klaxo',
  description: 'Thoughts on subscriptions, personal finance, and building Klaxo.',
}

export default function Blog() {
  return (
    <div style={{ background: '#0A0F1E', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif', color: '#fff' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '80px 24px' }}>

        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.4)', fontSize: 14, textDecoration: 'none', marginBottom: 48 }}>
          ← Back to Klaxo
        </a>

        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 8 }}>Blog</h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 15, marginBottom: 56 }}>
          Thoughts on subscriptions, personal finance, and building Klaxo.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {posts.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}/`} style={{ textDecoration: 'none' }}>
              <div className="blog-card" style={{
                background: 'rgba(255,255,255,0.04)',
                borderRadius: 16,
                padding: '28px 32px',
              }}>
                <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>{post.date}</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>{post.readTime}</span>
                </div>
                <h2 style={{ fontSize: 20, fontWeight: 600, color: '#fff', marginBottom: 10, letterSpacing: '-0.02em' }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>
                  {post.description}
                </p>
                <p style={{ marginTop: 16, fontSize: 14, color: '#60A5FA' }}>Read article →</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}
