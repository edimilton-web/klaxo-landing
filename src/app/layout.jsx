import Script from 'next/script'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://www.klaxo.app'),
  title: 'Klaxo — Track Your Subscriptions | Built for Europe',
  description: 'See every subscription, get notified before renewals, and stop losing money. The subscription tracker built for Europeans. Free to start.',
  icons: {
    icon: [
      { url: '/icons/klaxo-icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/klaxo-icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/icons/klaxo-icon-180.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'icon', url: '/icons/klaxo-icon-192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/icons/klaxo-icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Klaxo — Track Your Subscriptions | Built for Europe',
    description: 'See every subscription, get notified before renewals, and stop losing money. The subscription tracker built for Europeans. Free to start.',
    url: 'https://www.klaxo.app',
    siteName: 'Klaxo',
    type: 'website',
    locale: 'en_EU',
    images: [{ url: '/icons/klaxo-icon-512.png', width: 512, height: 512, alt: 'Klaxo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Klaxo — Track Your Subscriptions | Built for Europe',
    description: 'See every subscription, get notified before renewals, and stop losing money. The subscription tracker built for Europeans. Free to start.',
    images: ['/icons/klaxo-icon-512.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.klaxo.app',
  },
}

export const viewport = {
  themeColor: '#7C3AED',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <script defer data-domain="klaxo.app" src="https://plausible.io/js/script.js"></script> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6HPT9Q6QYP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-landing" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6HPT9Q6QYP');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
