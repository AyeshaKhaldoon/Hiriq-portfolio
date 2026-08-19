import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Hiriq',
  description: 'Read Hiriq terms covering account responsibilities, acceptable use, service access, data ownership, and legal information.',
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
