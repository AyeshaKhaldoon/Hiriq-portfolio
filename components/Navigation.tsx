'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hiriq
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/for-recruiters" className="text-slate-700 hover:text-blue-600 transition">
              For Recruiters
            </Link>
            <Link href="/for-candidates" className="text-slate-700 hover:text-blue-600 transition">
              For Candidates
            </Link>
            <Link href="/pricing" className="text-slate-700 hover:text-blue-600 transition">
              Pricing
            </Link>
            <Link href="/blog" className="text-slate-700 hover:text-blue-600 transition">
              Blog
            </Link>
            <button className="px-4 py-2 text-slate-700 hover:text-blue-600 transition">
              Sign In
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/for-recruiters" 
                className="text-slate-700 hover:text-blue-600 transition px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Recruiters
              </Link>
              <Link 
                href="/for-candidates" 
                className="text-slate-700 hover:text-blue-600 transition px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Candidates
              </Link>
              <Link 
                href="/pricing" 
                className="text-slate-700 hover:text-blue-600 transition px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/blog" 
                className="text-slate-700 hover:text-blue-600 transition px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <button className="mx-4 px-4 py-2 text-slate-700 hover:text-blue-600 transition text-left">
                Sign In
              </button>
              <button className="mx-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}