import BusinessContent from './BusinessContent'

export const metadata = {
  title: 'Klaxo Business — Team subscription tracking, finally simple',
  description: 'Track your team\'s software spend. Renewal alerts, CSV export for accounting. From €9/month.',
  alternates: { canonical: 'https://business.klaxo.app' },
  openGraph: {
    title: 'Klaxo Business — Team subscription tracking, finally simple',
    description: 'Finally know what your team pays for software. No spreadsheets. No €100/month tools.',
    url: 'https://business.klaxo.app',
  },
}

export default function BusinessPage() {
  return <BusinessContent />
}
