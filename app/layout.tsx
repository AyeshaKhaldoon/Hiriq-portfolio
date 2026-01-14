import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hiriq - AI-Powered Recruitment ATS & Interview Practice Platform',
  description: 'Transform your hiring process with Hiriq. Smart ATS with AI-powered candidate screening, automated pre-screening calls, and intelligent matching. Plus interview practice tools for job seekers.',
  keywords: 'ATS, recruitment software, AI recruiting, applicant tracking system, candidate screening, pre-screening calls, interview practice, job interview prep',
  authors: [{ name: 'Hiriq Team' }],
  openGraph: {
    title: 'Hiriq - AI-Powered Recruitment ATS',
    description: 'Hire smarter with AI-powered candidate screening and automated pre-screening calls',
    url: 'https://Hiriq.com',
    siteName: 'Hiriq',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hiriq - AI-Powered Recruitment ATS',
    description: 'Transform your hiring with AI automation',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}