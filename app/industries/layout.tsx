import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Serve | Hiriq - AI Hiring by Industry',
  description:
    'From tech to healthcare, BFSI to retail — Hiriq adapts screening, evaluation, and interview intelligence to your industry. Explore industry-specific hiring.',
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
