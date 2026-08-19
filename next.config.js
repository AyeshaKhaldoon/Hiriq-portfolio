/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.hiriq.co' }],
        destination: 'https://hiriq.co/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'hiriq.com' }],
        destination: 'https://hiriq.co/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.hiriq.com' }],
        destination: 'https://hiriq.co/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
