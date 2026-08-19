import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | Hiriq',
  description: 'Thank you for contacting Hiriq. Our team will follow up on your recruiting workflow inquiry soon.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
