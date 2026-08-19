import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Hiriq Plans for Hiring Teams',
  description: 'Compare Hiriq Starter, Teams, and Enterprise options for AI resume screening, pre-screening, interviews, and recruiter workflows.',
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
