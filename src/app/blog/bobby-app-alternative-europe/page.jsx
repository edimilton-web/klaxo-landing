import BlogPostPage from '../[slug]/page'
import { getPostBySlug } from '../../../lib/posts'
import { notFound } from 'next/navigation'

const SLUG = 'bobby-app-alternative-europe'

export function generateMetadata() {
  const post = getPostBySlug(SLUG)
  if (!post) return {}
  return {
    title: 'Bobby App Alternative: What Europeans Should Use Instead | Klaxo',
    description: "Bobby is the most popular subscription tracker for iPhone — but it hasn't been updated in years and doesn't work with European banks.",
    openGraph: {
      title: 'Bobby App Alternative: What Europeans Should Use Instead | Klaxo',
      description: "Bobby is the most popular subscription tracker for iPhone — but it hasn't been updated in years and doesn't work with European banks.",
      url: 'https://www.klaxo.app/blog/bobby-app-alternative-europe',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Bobby App Alternative: What Europeans Should Use Instead | Klaxo',
      description: "Bobby is the most popular subscription tracker for iPhone — but it hasn't been updated in years and doesn't work with European banks.",
    },
    alternates: { canonical: 'https://www.klaxo.app/blog/bobby-app-alternative-europe' },
  }
}

export default function Page() {
  const post = getPostBySlug(SLUG)
  if (!post) notFound()
  return <BlogPostPage params={{ slug: SLUG }} />
}
