import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hiriq Blog | AI Recruiting Insights',
  description: 'Read Hiriq guides on AI recruiting, time-to-hire, candidate screening, hiring automation, and recruitment best practices.',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
