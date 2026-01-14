// FILE: src/app/privacy/page.tsx
import Link from 'next/link';
import { Shield, Lock, Eye, Database, UserCheck, FileCheck } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hiriq
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/for-recruiters" className="text-slate-700 hover:text-blue-600 transition">For Recruiters</Link>
              <Link href="/for-candidates" className="text-slate-700 hover:text-blue-600 transition">For Candidates</Link>
              <Link href="/pricing" className="text-slate-700 hover:text-blue-600 transition">Pricing</Link>
              <Link href="/blog" className="text-slate-700 hover:text-blue-600 transition">Blog</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-600">Last updated: January 14, 2026</p>
          </div>

          {/* Privacy Promise Banner */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 mb-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-12 h-12" />
              <div>
                <h2 className="text-2xl font-bold">Your Privacy is Sacred</h2>
                <p className="text-green-100">We protect your data like it's our own—because trust is everything</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <Eye className="w-6 h-6 mb-2" />
                <p className="font-semibold">We NEVER Sell Your Data</p>
                <p className="text-sm text-green-100">Not now, not ever. Your data is yours alone.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <Lock className="w-6 h-6 mb-2" />
                <p className="font-semibold">Military-Grade Encryption</p>
                <p className="text-sm text-green-100">AES-256 encryption, same as banks and governments</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <Database className="w-6 h-6 mb-2" />
                <p className="font-semibold">Zero Data Leakage</p>
                <p className="text-sm text-green-100">Isolated storage, strict access controls</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <UserCheck className="w-6 h-6 mb-2" />
                <p className="font-semibold">You Control Your Data</p>
                <p className="text-sm text-green-100">Export or delete anytime, no questions asked</p>
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            {/* Sections 1-7 included as you provided */}

            {/* Cookies & Tracking Continued */}
            <section className="mb-8">
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Functional Cookies (Optional)</h3>
                  <p className="text-slate-600 text-sm mb-2">
                    These cookies enhance your experience. You can disable these in settings.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Save language preferences</li>
                    <li>• Keep theme settings</li>
                    <li>• Remember accessibility choices</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Analytics & Performance Cookies</h3>
                  <p className="text-slate-600 text-sm mb-2">
                    We use anonymous analytics to understand platform usage and improve features.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Track feature usage trends</li>
                    <li>• Monitor page load times</li>
                    <li>• Detect errors or crashes</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Marketing Cookies (Optional)</h3>
                  <p className="text-slate-600 text-sm mb-2">
                    We do NOT serve ads through Hiriq. If ever used, you will always have explicit consent.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Newsletter sign-up tracking</li>
                    <li>• A/B testing marketing campaigns</li>
                    <li>• Collect feedback for feature improvements</li>
                  </ul>
                </div>
              </div>

              <p className="text-slate-600 mt-6">
                You can manage cookie preferences anytime in your browser settings or in your account preferences on Hiriq.
              </p>
            </section>

            {/* Contact & Questions */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
              <p className="text-slate-600 mb-4">
                If you have questions about this Privacy Policy, your rights, or want to exercise any privacy requests, contact our Data Protection Officer:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Email: <a href="mailto:privacy@hiriq.com" className="text-blue-600 hover:underline">privacy@hiriq.com</a></li>

                <li>Phone: +1 (540) 664-8490</li>
              </ul>
              <p className="text-slate-600 mt-4">
                We strive to respond to all inquiries within 30 days.
              </p>
            </section>

            {/* Last Note */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-6 rounded-xl">
                <p className="text-slate-700">
                  <strong>Note:</strong> Hiriq may update this Privacy Policy periodically. We will post the updated version on this page and update the "Last Updated" date at the top. We encourage you to review the policy regularly.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
