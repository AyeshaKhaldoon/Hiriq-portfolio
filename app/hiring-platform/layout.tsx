import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hiring Platform | Hiriq AI Recruiting ATS',
  description: 'Hiriq brings resume intelligence, branded application pages, pre-screening, AI interviews, and candidate reporting into one hiring workflow.',
};

export default function HiringPlatformLayout({ children }: { children: React.ReactNode }) {
  return children;
}
