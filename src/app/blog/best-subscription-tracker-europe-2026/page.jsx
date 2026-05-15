import BlogPostPage from '../[slug]/page'
import { getPostBySlug } from '../../../lib/posts'
import { notFound } from 'next/navigation'

const SLUG = 'best-subscription-tracker-europe-2026'

export function generateMetadata() {
  const post = getPostBySlug(SLUG)
  if (!post) return {}
  return {
    title: 'Best Subscription Tracker App for Europe in 2026 | Klaxo',
    description: "We compared Bobby, Rocket Money, ReSubs and more. Here's what actually works for European users.",
    openGraph: {
      title: 'Best Subscription Tracker App for Europe in 2026 | Klaxo',
      description: "We compared every major subscription tracker. Here's what actually works for European users.",
      url: 'https://www.klaxo.app/blog/best-subscription-tracker-europe-2026',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Best Subscription Tracker App for Europe in 2026 | Klaxo',
      description: "We compared every major subscription tracker. Here's what actually works for European users.",
    },
    alternates: { canonical: 'https://www.klaxo.app/blog/best-subscription-tracker-europe-2026' },
  }
}

export default function Page() {
  const post = getPostBySlug(SLUG)
  if (!post) notFound()
  return <BlogPostPage params={{ slug: SLUG }} />
}
