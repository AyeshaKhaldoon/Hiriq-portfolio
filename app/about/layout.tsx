import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Hiriq | AI Recruitment Infrastructure',
  description: 'Learn how Hiriq helps recruiting teams automate screening, structure interviews, and make faster hiring decisions.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
