import BlogPostPage from '../[slug]/page'
import { getPostBySlug } from '../../../lib/posts'
import { notFound } from 'next/navigation'

const SLUG = 'how-much-europeans-spend-on-subscriptions-2026'

export function generateMetadata() {
  const post = getPostBySlug(SLUG)
  if (!post) return {}
  return {
    title: 'How Much Are Europeans Really Spending on Subscriptions? (2026 Data) | Klaxo',
    description: "Most Europeans guess they spend around €50/month on subscriptions. The real number is closer to €180. Here's where the gap comes from.",
    openGraph: {
      title: 'How Much Are Europeans Really Spending on Subscriptions? (2026 Data) | Klaxo',
      description: "Most Europeans guess they spend around €50/month on subscriptions. The real number is closer to €180. Here's where the gap comes from.",
      url: 'https://www.klaxo.app/blog/how-much-europeans-spend-on-subscriptions-2026',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'How Much Are Europeans Really Spending on Subscriptions? (2026 Data) | Klaxo',
      description: "Most Europeans guess they spend around €50/month on subscriptions. The real number is closer to €180. Here's where the gap comes from.",
    },
    alternates: { canonical: 'https://www.klaxo.app/blog/how-much-europeans-spend-on-subscriptions-2026' },
  }
}

export default function Page() {
  const post = getPostBySlug(SLUG)
  if (!post) notFound()
  return <BlogPostPage params={{ slug: SLUG }} />
}
