import { buildSeoMetadata, pageKeywords } from '../seo';

export const metadata = buildSeoMetadata({
  title: 'For Recruiters | AI Hiring Platform by Hiriq',
  description:
    'Use Hiriq as an AI hiring platform for recruiters to automate resume screening, run live conversational AI interviews, and review candidate evidence.',
  path: '/for-recruiters',
  keywords: pageKeywords.recruiters,
});

export default function ForRecruitersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
