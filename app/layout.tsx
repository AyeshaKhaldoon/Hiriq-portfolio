import type { Metadata } from 'next';
import Script from 'next/script';
import Breadcrumbs from '@/components/Breadcrumbs';
import LinkedInInsightTag from '@/components/LinkedInInsightTag';
import SiteUtilities from '@/components/SiteUtilities';
import { siteSearchItems } from './siteSearch';
import './globals.css';

const siteUrl = 'https://hiriq.co';
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const linkedInPartnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Hiriq - AI Recruiting Software for Screening and Interviews',
  description:
    'Hiriq automates resume screening, candidate pre-screening, and live AI interviews, then hands recruiters scored evidence for every shortlist decision.',
  keywords:
    'AI recruiting software, AI recruitment software, AI ATS, applicant tracking system, AI resume screening, AI interview platform, candidate screening software, healthcare staffing software, staffing agency software, high-volume hiring software, recruitment automation',
  authors: [{ name: 'Hiriq Team' }],
  alternates: {
    canonical: '/',
  },
  category: 'AI recruiting software',
  openGraph: {
    title: 'Hiriq - AI Recruiting Software for Screening and Interviews',
    description:
      'AI recruiting workflows for resume screening, candidate pre-screening, live AI interviews, and recruiter-reviewed shortlists.',
    url: siteUrl,
    siteName: 'Hiriq',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/123.png',
        width: 1200,
        height: 630,
        alt: 'Hiriq recruiter dashboard and candidate pipeline interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hiriq - AI Recruiting Software',
    description: 'Automate early-funnel screening and interviews while keeping recruiters in control.',
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
  const primaryNavigation = siteSearchItems.slice(0, 12);
  const siteSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'Hiriq',
        legalName: 'Hiriq',
        alternateName: ['Hiriq AI', 'Hiriq Recruiting Platform'],
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/Logo.png`,
        },
        email: 'contact@hiriq.co',
        telephone: '+1-540-664-8490',
        image: `${siteUrl}/123.png`,
        description:
          'Hiriq is an AI-powered recruitment platform for applicant tracking workflows, resume screening, automated pre-screening, AI interviews, and evidence-backed hiring shortlists.',
        slogan: 'Hire smarter. Hire faster.',
        areaServed: ['United States', 'United Kingdom', 'Middle East', 'Pakistan', 'Qatar', 'United Arab Emirates'],
        sameAs: [
          'https://www.linkedin.com/company/hiriq',
          'https://www.instagram.com/hiriq.ai',
          'https://theorg.com/org/hiriq',
        ],
        founder: [
          { '@id': `${siteUrl}/#ayesha-khaldoon` },
          { '@id': `${siteUrl}/#muhammad-ahmad` },
        ],
        subjectOf: [
          {
            '@type': 'Article',
            url: 'https://staffinghub.com/guest-posts/why-adding-more-recruiters-is-making-your-firm-fall-behind/',
            name: 'Why Adding More Recruiters Is Making Your Firm Fall Behind',
            datePublished: '2026-08-28',
            publisher: { '@type': 'Organization', name: 'Staffing Hub', url: 'https://staffinghub.com' },
          },
          {
            '@type': 'Article',
            url: 'https://boardroompk.com/site/startups/intelligent-human-centered-hiring-ayesha-khaldoon-founder-of-hiriq',
            name: 'Intelligent. Human-Centered. Hiring. | Ayesha Khaldoon | Founder of Hiriq',
            publisher: { '@type': 'Organization', name: 'Boardroom', url: 'https://boardroompk.com' },
          },
        ],
        knowsAbout: [
          'AI recruiting software',
          'Applicant tracking systems',
          'AI resume screening',
          'Candidate screening software',
          'AI interview platforms',
          'Recruiting automation',
          'Healthcare staffing software',
          'Staffing agency software',
          'High-volume hiring software',
          'Candidate pre-screening software',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'contact@hiriq.co',
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
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': softwareId,
        name: 'Hiriq',
        url: siteUrl,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description:
          'AI-powered recruitment platform for applicant tracking workflows, resume screening, automated pre-screening, live conversational AI interviews, and candidate shortlisting.',
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
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#ayesha-khaldoon`,
        name: 'Ayesha Khaldoon',
        jobTitle: 'Co-Founder CEO',
        worksFor: { '@id': organizationId },
        image: `${siteUrl}/team/ayesha-khaldoon.jpg`,
        sameAs: ['https://pk.linkedin.com/in/ayesha-khaldoon', 'https://theorg.com/org/hiriq'],
        knowsAbout: ['Staffing operations', 'Recruiter productivity', 'Time-to-qualify', 'AI candidate screening'],
        subjectOf: [
          {
            '@type': 'Article',
            url: 'https://boardroompk.com/site/startups/intelligent-human-centered-hiring-ayesha-khaldoon-founder-of-hiriq',
            name: 'Intelligent. Human-Centered. Hiring. | Ayesha Khaldoon | Founder of Hiriq',
          },
        ],
        // Bylined commentary published by third-party outlets.
        workExample: [
          {
            '@type': 'Article',
            url: 'https://staffinghub.com/guest-posts/why-adding-more-recruiters-is-making-your-firm-fall-behind/',
            name: 'Why Adding More Recruiters Is Making Your Firm Fall Behind',
            datePublished: '2026-08-28',
            publisher: { '@type': 'Organization', name: 'Staffing Hub', url: 'https://staffinghub.com' },
          },
        ],
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#muhammad-ahmad`,
        name: 'Muhammad Ahmad',
        jobTitle: 'Co-Founder CTO',
        worksFor: { '@id': organizationId },
        image: `${siteUrl}/team/muhammad-ahmad.jpg`,
      },
      {
        '@type': 'SiteNavigationElement',
        '@id': `${siteUrl}/#primary-navigation`,
        name: primaryNavigation.map((item) => item.title),
        url: primaryNavigation.map((item) => `${siteUrl}${item.href}`),
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
        {/* Plain <script> so the JSON-LD is present in the server-rendered HTML.
            next/script defaults to afterInteractive, which injects it only after
            hydration and leaves crawlers with no entity markup in the raw source. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <LinkedInInsightTag partnerId={linkedInPartnerId} />
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
