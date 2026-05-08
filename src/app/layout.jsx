import './globals.css'

export const metadata = {
  title: 'Klaxo — The subscription tracker built for Europe.',
  description: "See every subscription. Cancel what you don't need. Stop losing money every month.",
  openGraph: {
    title: 'Klaxo — The subscription tracker built for Europe.',
    description: 'Track every subscription, get notified before renewals, and take back control of your monthly budget.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Analytics placeholder — replace with your Plausible or GA4 snippet */}
        {/* <script defer data-domain="klaxo.app" src="https://plausible.io/js/script.js"></script> */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script> */}
      </head>
      <body>{children}</body>
    </html>
  )
}
