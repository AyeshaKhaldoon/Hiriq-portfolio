import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Recruiters | AI Hiring Platform by Hiriq',
  description: 'Use Hiriq to automate resume screening, pre-screening calls, AI interviews, and recruiter candidate review.',
};

export default function ForRecruitersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
