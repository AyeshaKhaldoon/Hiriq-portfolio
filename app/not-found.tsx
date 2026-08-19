import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-cyan-600">
            404
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            This page is not available.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
            The link may have moved, or the page may no longer exist. Head back home or browse the main product pages.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 px-6 font-semibold text-white transition hover:bg-slate-800"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go home
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 px-6 font-semibold text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
            >
              <Search className="mr-2 h-4 w-4" />
              Contact support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
