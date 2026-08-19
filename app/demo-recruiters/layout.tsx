import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recruiter Demo | See Hiriq in Action',
  description: 'Explore a recruiter-focused demo of Hiriq workflows for screening, candidate evaluation, and hiring automation.',
};

export default function DemoRecruitersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
