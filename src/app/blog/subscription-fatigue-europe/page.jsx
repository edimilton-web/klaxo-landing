import BlogPostPage from '../[slug]/page'
import { getPostBySlug } from '../../../lib/posts'
import { notFound } from 'next/navigation'

const SLUG = 'subscription-fatigue-europe'

export function generateMetadata() {
  const post = getPostBySlug(SLUG)
  if (!post) return {}
  return {
    title: 'Subscription Fatigue: Why Europeans Are Spending More Than Ever (Without Noticing) | Klaxo',
    description: "The average European pays for 8-12 subscriptions but guesses four. Here's why the math is invisible — and how to fix it.",
    openGraph: {
      title: 'Subscription Fatigue: Why Europeans Are Spending More Than Ever (Without Noticing) | Klaxo',
      description: "The average European pays for 8-12 subscriptions but guesses four. Here's why the math is invisible — and how to fix it.",
      url: 'https://www.klaxo.app/blog/subscription-fatigue-europe',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Subscription Fatigue: Why Europeans Are Spending More Than Ever (Without Noticing) | Klaxo',
      description: "The average European pays for 8-12 subscriptions but guesses four. Here's why the math is invisible — and how to fix it.",
    },
    alternates: { canonical: 'https://www.klaxo.app/blog/subscription-fatigue-europe' },
  }
}

export default function Page() {
  const post = getPostBySlug(SLUG)
  if (!post) notFound()
  return <BlogPostPage params={{ slug: SLUG }} />
}
