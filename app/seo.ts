import type { Metadata } from 'next';

export const siteUrl = 'https://hiriq.co';
export const defaultOgImage = '/123.png';

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
};

export function buildSeoMetadata({
  title,
  description,
  path,
  keywords,
  image = defaultOgImage,
  imageAlt = 'Hiriq AI recruiting platform dashboard',
  noIndex = false,
}: SeoConfig): Metadata {
  const canonical = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Hiriq',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 783,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}

export const pageKeywords = {
  about: [
    'Hiriq AI recruitment company',
    'AI recruitment infrastructure',
    'AI hiring team',
    'recruiting automation company',
    'candidate screening platform',
  ],
  automatedInterviews: [
    'fully automated AI interviews',
    'AI interview automation',
    'automated pre-screening calls',
    'AI candidate interviews',
    'structured interview evaluation',
  ],
  blog: [
    'AI recruiting blog',
    'recruitment automation insights',
    'candidate screening best practices',
    'time to hire strategies',
    'AI hiring guides',
  ],
  contact: [
    'contact Hiriq',
    'Hiriq demo',
    'AI recruiting software demo',
    'recruiting automation consultation',
    'Hiriq sales support',
  ],
  demoRecruiters: [
    'recruiter demo',
    'AI recruiting platform demo',
    'candidate screening demo',
    'AI ATS demo',
    'recruitment workflow demo',
  ],
  candidates: [
    'AI interview practice',
    'candidate interview prep',
    'resume feedback AI',
    'job interview preparation',
    'Hiriq for candidates',
  ],
  recruiters: [
    'AI hiring platform for recruiters',
    'AI recruiting software for recruiters',
    'automated candidate screening',
    'recruiter workflow automation',
    'AI ATS for hiring teams',
  ],
  hiringPlatform: [
    'hiring platform',
    'AI recruiting ATS',
    'applicant tracking workflow',
    'resume intelligence',
    'candidate reporting software',
  ],
  industries: [
    'AI hiring by industry',
    'healthcare recruiting software',
    'technology recruiting software',
    'finance recruiting automation',
    'retail hiring automation',
  ],
  pricing: [
    'AI recruiting software pricing',
    'ATS pricing',
    'candidate screening software cost',
    'Hiriq pricing',
    'recruiting automation plans',
  ],
  privacy: [
    'Hiriq privacy policy',
    'candidate data privacy',
    'AI recruiting data security',
    'recruitment software privacy',
    'hiring platform cookies',
  ],
  terms: [
    'Hiriq terms of service',
    'AI recruiting software terms',
    'hiring platform legal terms',
    'candidate data terms',
    'ATS acceptable use',
  ],
  thankYou: [
    'Hiriq thank you',
    'demo request received',
    'recruiting inquiry confirmation',
  ],
  solutions: [
    'AI recruiting solutions',
    'AI ATS solutions',
    'AI resume screening solutions',
    'candidate screening software',
    'AI interview platform',
  ],
  linkToHiriq: [
    'link to Hiriq',
    'Hiriq citation resources',
    'AI recruiting software directory listing',
    'Hiriq backlink resources',
    'Hiriq media kit',
  ],
};
