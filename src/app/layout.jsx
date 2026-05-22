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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '968536769219649');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=968536769219649&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  )
}
