import { buildSeoMetadata, pageKeywords } from '../seo';

export const metadata = buildSeoMetadata({
  title: 'Hiring Platform | Hiriq AI Recruiting ATS',
  description:
    'Hiriq brings resume intelligence, branded application pages, applicant tracking, pre-screening, AI interviews, and candidate reporting into one hiring workflow.',
  path: '/hiring-platform',
  keywords: pageKeywords.hiringPlatform,
});

export default function HiringPlatformLayout({ children }: { children: React.ReactNode }) {
  return children;
}
