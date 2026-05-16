import BlogPostPage from '../[slug]/page'
import { getPostBySlug } from '../../../lib/posts'
import { notFound } from 'next/navigation'

const SLUG = 'how-to-cancel-forgotten-subscriptions'

export function generateMetadata() {
  const post = getPostBySlug(SLUG)
  if (!post) return {}
  return {
    title: 'How to Cancel Subscriptions You Forgot You Had | Klaxo',
    description: "Most people have at least 2-3 subscriptions they've completely forgotten about. Here's how to find them all and actually cancel them.",
    openGraph: {
      title: 'How to Cancel Subscriptions You Forgot You Had | Klaxo',
      description: "Most people have at least 2-3 subscriptions they've completely forgotten about. Here's how to find them all and actually cancel them.",
      url: 'https://www.klaxo.app/blog/how-to-cancel-forgotten-subscriptions',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'How to Cancel Subscriptions You Forgot You Had | Klaxo',
      description: "Most people have at least 2-3 subscriptions they've completely forgotten about. Here's how to find them all and actually cancel them.",
    },
    alternates: { canonical: 'https://www.klaxo.app/blog/how-to-cancel-forgotten-subscriptions' },
  }
}

export default function Page() {
  const post = getPostBySlug(SLUG)
  if (!post) notFound()
  return <BlogPostPage params={{ slug: SLUG }} />
}
