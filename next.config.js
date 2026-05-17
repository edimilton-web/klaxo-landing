/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/blog/how-much-europeans-spend-on-subscriptions',
        destination: '/blog/how-much-europeans-spend-on-subscriptions-2026',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
