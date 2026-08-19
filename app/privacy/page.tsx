// FILE: src/app/privacy/page.tsx
import Link from 'next/link';
import { Shield, Lock, Eye, Database, UserCheck, FileCheck } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Content */}
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-600">Last updated: January 19, 2026</p>
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
            {/* 1. Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
              <p className="text-slate-600 mb-4">
                We may collect personal information including name, email, resume, job history, and other profile data. We also collect non-personal information such as usage statistics and device data.
              </p>
            </section>

            {/* 2. How We Use Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Information</h2>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>To provide and improve our AI recruitment platform</li>
                <li>To personalize your experience</li>
                <li>To communicate important updates or changes</li>
                <li>For analytics, reporting, and feature improvement</li>
              </ul>
            </section>

            {/* 3. Cookies & Tracking */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Cookies & Tracking</h2>
              <p className="text-slate-600 mb-4">
                Hiriq uses cookies and similar technologies to improve the user experience. You can control cookie settings in your browser.
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Functional Cookies (Optional)</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Save language preferences</li>
                    <li>• Keep theme settings</li>
                    <li>• Remember accessibility choices</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Analytics & Performance Cookies</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Track usage trends anonymously</li>
                    <li>• Monitor page load times</li>
                    <li>• Detect errors or crashes</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Marketing Cookies (Optional)</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Newsletter tracking</li>
                    <li>• Feedback collection for improvements</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. Data Sharing */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Sharing</h2>
              <p className="text-slate-600 mb-4">
                Hiriq does not sell or share your personal data with third parties except for:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Service providers necessary to operate the platform</li>
                <li>Legal compliance in Pakistan, USA, UAE, Saudi Arabia, and Qatar</li>
                <li>With your consent</li>
              </ul>
            </section>

            {/* 5. User Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. User Rights</h2>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Access, correct, or delete your personal data</li>
                <li>Export your data in standard formats (CSV, JSON)</li>
                <li>Withdraw consent for data processing at any time</li>
              </ul>
            </section>

            {/* 6. Security Measures */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Security Measures</h2>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Encryption in transit and at rest</li>
                <li>Strict access controls and isolated storage</li>
                <li>Regular security audits and monitoring</li>
                <li>Compliance with GDPR, CCPA, Pakistan Privacy Laws, and Gulf data regulations</li>
              </ul>
            </section>

            {/* 7. Retention & Deletion */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Retention & Deletion</h2>
              <p className="text-slate-600 mb-4">
                Data is retained as long as necessary for service operation, legal compliance, or as agreed with users. Users can request deletion at any time.
              </p>
            </section>

            {/* 8. Contact & Questions */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
              <p className="text-slate-600 mb-4">
                For privacy inquiries or to exercise your rights:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Email: <a href="mailto:contact@hiriq.com" className="text-blue-600 hover:underline">contact@hiriq.com</a></li>
                <li>Phone (US): <a href="tel:+15406648490" className="text-blue-600 hover:underline">+1 (540) 664-8490</a></li>
                <li>Gulf Contact: <a href="mailto:contact@hiriq.com" className="text-blue-600 hover:underline">contact@hiriq.com</a> | <a href="tel:+923334057776" className="text-blue-600 hover:underline">+92 333 405 7776</a></li>
              </ul>
            </section>

            {/* 9. Last Note */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-6 rounded-xl">
                <p className="text-slate-700">
                  <strong>Note:</strong> We may update this Privacy Policy periodically. The updated version will be posted here, with the new "Last Updated" date.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
