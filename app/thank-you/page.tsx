import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Thanks for reaching out.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            We received your inquiry. The Hiriq team aims to reply within one business day, and urgent demo requests are prioritized.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/hiring-platform"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 px-6 font-semibold text-white transition hover:bg-slate-800"
            >
              Explore the platform
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="mailto:contact@hiriq.com"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 px-6 font-semibold text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
