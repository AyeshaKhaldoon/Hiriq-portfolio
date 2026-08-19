import type { Metadata } from 'next';
import Script from 'next/script';
import Breadcrumbs from '@/components/Breadcrumbs';
import SiteUtilities from '@/components/SiteUtilities';
import './globals.css';

const siteUrl = 'https://hiriq.com';
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Hiriq - AI-Powered Recruitment ATS & Interview Practice Platform',
  description: 'Transform your hiring process with Hiriq. Smart ATS with AI-powered candidate screening, automated pre-screening calls, and intelligent matching. Plus interview practice tools for job seekers.',
  keywords: 'AI recruiting software, AI ATS, applicant tracking system, AI resume screening, AI interview platform, candidate screening software, automated pre-screening, recruitment automation, hiring platform, job interview prep',
  authors: [{ name: 'Hiriq Team' }],
  openGraph: {
    title: 'Hiriq - AI-Powered Recruitment ATS',
    description: 'Hire smarter with AI-powered candidate screening and automated pre-screening calls',
    url: siteUrl,
    siteName: 'Hiriq',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/123.png',
        width: 1200,
        height: 783,
        alt: 'Hiriq AI recruitment platform interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hiriq - AI-Powered Recruitment ATS',
    description: 'Transform your hiring with AI automation',
    images: ['/123.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;
  const softwareId = `${siteUrl}/#software`;
  const siteSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness'],
        '@id': organizationId,
        name: 'Hiriq',
        url: siteUrl,
        logo: `${siteUrl}/Logo.png`,
        email: 'contact@hiriq.com',
        telephone: '+1-540-664-8490',
        image: `${siteUrl}/123.png`,
        priceRange: '$$',
        areaServed: ['United States', 'United Kingdom', 'Middle East', 'Pakistan', 'Qatar', 'United Arab Emirates'],
        sameAs: ['https://linkedin.com/company/hiriq', 'https://www.instagram.com/hiriq.ai'],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'contact@hiriq.com',
          telephone: '+1-540-664-8490',
          availableLanguage: ['English'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: 'Hiriq',
        url: siteUrl,
        publisher: { '@id': organizationId },
        inLanguage: 'en',
      },
      {
        '@type': 'SoftwareApplication',
        '@id': softwareId,
        name: 'Hiriq',
        url: siteUrl,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description:
          'AI-powered recruitment platform for applicant tracking workflows, resume screening, automated pre-screening, AI interviews, and candidate shortlisting.',
        publisher: { '@id': organizationId },
        image: `${siteUrl}/123.png`,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `${siteUrl}/pricing`,
        },
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Recruiters, hiring managers, founders, HR teams, staffing agencies',
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <Script
          id="site-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Breadcrumbs />
        {children}
        <SiteUtilities />
      </body>
    </html>
  );
}
