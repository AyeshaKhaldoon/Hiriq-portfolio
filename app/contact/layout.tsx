import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Hiriq | Sales, Support, and Demos',
  description: 'Contact the Hiriq team for product demos, sales questions, support, partnerships, and recruiting workflow advice.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
