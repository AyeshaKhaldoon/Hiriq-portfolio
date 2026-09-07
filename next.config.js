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
      {
        source: '/ai-recruitment-software',
        destination: '/solutions/ai-recruiting-software',
        permanent: true,
      },
      {
        source: '/ai-recruiting-software',
        destination: '/solutions/ai-recruiting-software',
        permanent: true,
      },
      {
        source: '/ai-interview-platform',
        destination: '/solutions/ai-interview-platform',
        permanent: true,
      },
      {
        source: '/ai-interviews',
        destination: '/automated-interviews',
        permanent: true,
      },
      {
        source: '/resume-screening',
        destination: '/solutions/ai-resume-screening',
        permanent: true,
      },
      {
        source: '/candidate-screening',
        destination: '/solutions/candidate-screening-software',
        permanent: true,
      },
      {
        source: '/candidate-pre-screening',
        destination: '/solutions/candidate-pre-screening-software',
        permanent: true,
      },
      {
        source: '/recruitment-automation',
        destination: '/solutions/recruiting-automation-software',
        permanent: true,
      },
      {
        source: '/recruiting-automation',
        destination: '/solutions/recruiting-automation-software',
        permanent: true,
      },
      {
        source: '/high-volume-hiring',
        destination: '/solutions/high-volume-hiring',
        permanent: true,
      },
      {
        source: '/staffing-agency-software',
        destination: '/solutions/staffing-agencies',
        permanent: true,
      },
      {
        source: '/recruitment-agency-software',
        destination: '/solutions/staffing-agencies',
        permanent: true,
      },
      {
        source: '/healthcare-recruitment-software',
        destination: '/solutions/healthcare-staffing-agencies',
        permanent: true,
      },
      {
        source: '/healthcare-staffing-software',
        destination: '/solutions/healthcare-staffing-agencies',
        permanent: true,
      },
      {
        source: '/nurse-staffing-software',
        destination: '/solutions/healthcare-staffing-agencies',
        permanent: true,
      },
      {
        source: '/hirevue-alternatives',
        destination: '/compare/hirevue-alternatives',
        permanent: true,
      },
      {
        source: '/paradox-alternatives',
        destination: '/compare/paradox-ai-alternatives',
        permanent: true,
      },
      {
        source: '/best-ai-interview-software',
        destination: '/compare/best-ai-interview-software',
        permanent: true,
      },
      {
        source: '/alternatives',
        destination: '/compare',
        permanent: true,
      },
      {
        source: '/comparisons',
        destination: '/compare',
        permanent: true,
      },
      {
        source: '/news',
        destination: '/press',
        permanent: true,
      },
      {
        source: '/media',
        destination: '/press',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
