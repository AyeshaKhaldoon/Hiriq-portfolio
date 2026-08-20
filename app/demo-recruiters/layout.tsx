import { buildSeoMetadata, pageKeywords } from '../seo';

export const metadata = buildSeoMetadata({
  title: 'Recruiter Demo | See Hiriq in Action',
  description:
    'Explore a recruiter-focused demo of Hiriq workflows for AI screening, candidate evaluation, applicant tracking, and hiring automation.',
  path: '/demo-recruiters',
  keywords: pageKeywords.demoRecruiters,
});

export default function DemoRecruitersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
