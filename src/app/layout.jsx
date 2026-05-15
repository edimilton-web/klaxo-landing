import './globals.css'

export const metadata = {
  metadataBase: new URL('https://www.klaxo.app'),
  title: 'Klaxo — Track Your Subscriptions | Built for Europe',
  description: 'See every subscription, get notified before renewals, and stop losing money. The subscription tracker built for Europeans. Free to start.',
  openGraph: {
    title: 'Klaxo — Track Your Subscriptions | Built for Europe',
    description: 'See every subscription, get notified before renewals, and stop losing money. The subscription tracker built for Europeans. Free to start.',
    url: 'https://www.klaxo.app',
    siteName: 'Klaxo',
    type: 'website',
    locale: 'en_EU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Klaxo — Track Your Subscriptions | Built for Europe',
    description: 'See every subscription, get notified before renewals, and stop losing money. The subscription tracker built for Europeans. Free to start.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.klaxo.app',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <script defer data-domain="klaxo.app" src="https://plausible.io/js/script.js"></script> */}
      </head>
      <body>{children}</body>
    </html>
  )
}
