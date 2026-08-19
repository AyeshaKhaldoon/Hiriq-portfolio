import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Hiriq',
  description: 'Review how Hiriq handles personal information, candidate data, cookies, analytics, privacy controls, and security practices.',
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
