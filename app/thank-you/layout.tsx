import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | Hiriq',
  description: 'Thank you for contacting Hiriq. Our team will follow up on your recruiting workflow inquiry soon.',
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
