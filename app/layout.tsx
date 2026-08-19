import type { Metadata } from 'next';
import SiteUtilities from '@/components/SiteUtilities';
import './globals.css';

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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased font-sans">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
        <SiteUtilities />
      </body>
    </html>
  );
}
