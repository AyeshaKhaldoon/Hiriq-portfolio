// FILE: src/app/terms/page.tsx
import Link from 'next/link';
import { Shield, Lock, Eye } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function Terms() {
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
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
            <p className="text-slate-600">Last updated: January 14, 2026</p>
          </div>

          {/* Security Promise Banner */}
          <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 rounded-2xl p-8 mb-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-12 h-12" />
              <div>
                <h2 className="text-2xl font-bold">Our Commitment to You</h2>
                <p className="text-blue-100">Security, Privacy, and Confidentiality First</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <Lock className="w-6 h-6 mb-2" />
                <p className="font-semibold">Bank-Level Encryption</p>
                <p className="text-sm text-blue-100">All data encrypted at rest and in transit</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <Eye className="w-6 h-6 mb-2" />
                <p className="font-semibold">Zero Data Sharing</p>
                <p className="text-sm text-blue-100">We never sell or share your data</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <Shield className="w-6 h-6 mb-2" />
                <p className="font-semibold">SOC 2 Compliant</p>
                <p className="text-sm text-blue-100">Industry-leading security standards</p>
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-slate-600 mb-4">
                Welcome to Hiriq, an AI-powered recruitment platform designed to revolutionize how companies find and hire talent. By accessing or using Hiriq's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Important:</strong> If you do not agree with any part of these terms, you must not use our service. Your use of Hiriq constitutes your acceptance of these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Service Description</h2>
              <p className="text-slate-600 mb-4">
                Hiriq provides AI-powered recruitment solutions including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Automated resume screening and candidate matching</li>
                <li>AI-powered pre-screening interviews</li>
                <li>Candidate assessment and ranking tools</li>
                <li>Recruitment analytics and insights</li>
                <li>Applicant tracking system (ATS) integration</li>
                <li>Interview scheduling and management</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Security & Confidentiality</h2>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
                <p className="text-slate-700 font-semibold mb-2">
                  <Shield className="inline w-5 h-5 mr-2" />
                  Hiriq's Data Protection Guarantee
                </p>
                <p className="text-slate-600 mb-0">
                  Your data security is our top priority. We implement enterprise-grade security measures to ensure all candidate and company information remains completely confidential and secure.
                </p>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">We Guarantee:</h3>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li><strong>Zero Data Leakage:</strong> Your candidate data, job postings, and company information are never shared, sold, or exposed to third parties</li>
                <li><strong>End-to-End Encryption:</strong> All data is encrypted using AES-256 encryption at rest and TLS 1.3 in transit</li>
                <li><strong>Isolated Data Storage:</strong> Each company's data is stored in isolated, secure environments with strict access controls</li>
                <li><strong>SOC 2 Type II Compliance:</strong> We maintain the highest industry security standards</li>
                <li><strong>GDPR & CCPA Compliant:</strong> Full compliance with international data protection regulations</li>
                <li><strong>Regular Security Audits:</strong> Third-party penetration testing and security assessments conducted quarterly</li>
                <li><strong>24/7 Monitoring:</strong> Continuous threat detection and incident response capabilities</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mb-3">Confidentiality Commitment:</h3>
              <p className="text-slate-600 mb-4">
                Hiriq employees and systems are bound by strict confidentiality agreements. Access to your data is limited to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Authorized personnel only, on a need-to-know basis</li>
                <li>Automated AI systems operating within secure, isolated environments</li>
                <li>No human review of candidate data unless explicitly requested for support purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Account Responsibilities</h2>
              <p className="text-slate-600 mb-4">
                When you create a Hiriq account, you agree to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Provide accurate, complete, and current information</li>
                <li>Maintain the security and confidentiality of your account credentials</li>
                <li>Immediately notify us of any unauthorized access or security breaches</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Use strong passwords and enable two-factor authentication (2FA) when available</li>
                <li>Not share your account credentials with unauthorized individuals</li>
              </ul>
              <p className="text-slate-600 mb-4">
                <strong>Security Breach Notification:</strong> If you suspect unauthorized access to your account, contact us immediately at contact@hiriq.com. We will investigate and take appropriate action within 24 hours.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Acceptable Use Policy</h2>
              <p className="text-slate-600 mb-4">You agree not to use Hiriq to:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Discriminate against candidates based on protected characteristics (race, gender, age, religion, disability, etc.)</li>
                <li>Upload false, misleading, or fraudulent job postings</li>
                <li>Harvest or scrape candidate data for unauthorized purposes</li>
                <li>Violate any applicable employment laws or regulations</li>
                <li>Share or resell access to the platform without authorization</li>
                <li>Attempt to reverse-engineer or compromise our AI algorithms</li>
                <li>Upload malware, viruses, or malicious code</li>
                <li>Spam or harass candidates through our platform</li>
              </ul>
              <p className="text-slate-600 mb-4">
                <strong>Violation Consequences:</strong> Breach of this policy may result in immediate account suspension or termination without refund.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Subscription & Payment Terms</h2>

              <h3 className="text-xl font-bold text-slate-900 mb-3">Billing</h3>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Subscriptions are billed monthly or annually in advance</li>
                <li>All fees are in USD unless otherwise specified</li>
                <li>Payment must be made via valid credit card, debit card, or approved payment method</li>
                <li>Failed payments may result in service suspension after 7-day grace period</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mb-3">Free Trial</h3>
              <p className="text-slate-600 mb-4">
                Hiriq offers a 14-day free trial for new users. At the end of your trial:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>You will not be automatically charged</li>
                <li>You must explicitly choose a paid plan to continue</li>
                <li>Trial data is retained for 30 days to allow plan selection</li>
                <li>After 30 days, trial accounts and data are permanently deleted</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mb-3">Refund Policy</h3>
              <p className="text-slate-600 mb-4">
                We offer a <strong>30-day money-back guarantee</strong> for first-time subscribers:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Full refund available within 30 days of initial purchase</li>
                <li>No questions asked for first-time customers</li>
                <li>Refunds processed within 5-7 business days</li>
                <li>Annual subscriptions: Full refund if canceled within 30 days</li>
                <li>Renewal subscriptions are non-refundable (cancel before renewal date)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Cancellation Policy</h2>
              <p className="text-slate-600 mb-4">
                You may cancel your subscription at any time:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Cancel through your account settings or by contacting support</li>
                <li>Cancellation takes effect at the end of current billing period</li>
                <li>You retain full access until the end of paid period</li>
                <li>Data export available for 90 days after cancellation</li>
                <li>After 90 days, all data is securely and permanently deleted</li>
              </ul>
              <p className="text-slate-600 mb-4">
                <strong>Data Deletion:</strong> Upon account closure, we permanently delete all your data in accordance with our data retention policy. This process is irreversible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Intellectual Property Rights</h2>

              <h3 className="text-xl font-bold text-slate-900 mb-3">Hiriq's IP</h3>
              <p className="text-slate-600 mb-4">
                The Hiriq platform, including all AI algorithms, software code, designs, logos, and content, is the exclusive property of Hiriq and protected by copyright, trademark, and intellectual property laws.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-3">Your Data Ownership</h3>
              <p className="text-slate-600 mb-4">
                <strong>You retain 100% ownership of your data:</strong>
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>All candidate resumes, job descriptions, and company information remain your property</li>
                <li>We never claim ownership of your content</li>
                <li>You grant us a limited license to process your data solely to provide the service</li>
                <li>This license terminates immediately upon account cancellation</li>
                <li>You can export your data at any time in standard formats (CSV, JSON)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. AI Usage & Limitations</h2>

              <h3 className="text-xl font-bold text-slate-900 mb-3">How Our AI Works</h3>
              <p className="text-slate-600 mb-4">
                Hiriq uses advanced AI to screen candidates, conduct interviews, and match talent. However:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>AI recommendations are assistive tools, not final decisions</li>
                <li>Final hiring decisions remain with human recruiters</li>
                <li>Our AI is regularly audited for bias and fairness</li>
                <li>We comply with all AI ethics guidelines and employment laws</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mb-3">Bias Prevention</h3>
              <p className="text-slate-600 mb-4">
                Hiriq actively works to eliminate bias:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>AI trained on diverse, representative datasets</li>
                <li>Regular bias audits by third-party experts</li>
                <li>Option to anonymize candidate information during screening</li>
                <li>Transparent scoring criteria available to users</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Service Level Agreement (SLA)</h2>
              <p className="text-slate-600 mb-4">
                Hiriq commits to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li><strong>99.9% uptime:</strong> Monthly uptime guarantee (excludes scheduled maintenance)</li>
                <li><strong>24/7 Support:</strong> Enterprise plans include priority support with &lt;2 hour response time</li>
                <li><strong>Data Backup:</strong> Automated daily backups with 30-day retention</li>
                <li><strong>Disaster Recovery:</strong> Complete system recovery within 4 hours</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Limitation of Liability</h2>
              <p className="text-slate-600 mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Hiriq provides the service "as is" without warranties of any kind</li>
                <li>We are not liable for hiring decisions made using our platform</li>
                <li>Our total liability is limited to fees paid in the 12 months prior to the claim</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>You agree to indemnify Hiriq against claims arising from your use of the service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Compliance & Legal</h2>
              <p className="text-slate-600 mb-4">
                Hiriq complies with:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Equal Employment Opportunity (EEO) laws</li>
                <li>Fair Credit Reporting Act (FCRA) requirements</li>
                <li>Americans with Disabilities Act (ADA)</li>
                <li>General Data Protection Regulation (GDPR)</li>
                <li>California Consumer Privacy Act (CCPA)</li>
                <li>SOC 2 Type II security standards</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Changes to Terms</h2>
              <p className="text-slate-600 mb-4">
                We reserve the right to modify these Terms at any time:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Material changes will be notified 30 days in advance via email</li>
                <li>Continued use after changes constitutes acceptance</li>
                <li>You may cancel within 30 days of notification to avoid new terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Governing Law</h2>
              <p className="text-slate-600 mb-4">
                These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law provisions. Any disputes shall be resolved through binding arbitration in Delaware.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Contact Information</h2>
              <p className="text-slate-600 mb-4">
                For questions about these Terms or to report security concerns:
              </p>
              <div className="bg-slate-50 rounded-lg p-6 mt-4">
                <ul className="list-none text-slate-600 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold min-w-[140px]">General Inquiries:</span>
                    <span>contact@hiriq.com</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold min-w-[140px]">Security Issues:</span>
                    <span>contact@hiriq.com (24/7 monitored)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold min-w-[140px]">Privacy Requests:</span>
                    <span>contact@hiriq.com</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold min-w-[140px]">Phone:</span>
                    <span>+1 (888) HIRIQ-AI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold min-w-[140px]">Mail:</span>
                    <span>Hiriq, Inc.<br />100 Innovation Drive<br />San Francisco, CA 94105</span>
                  </li>
                </ul>
              </div>
            </section>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 mt-8">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Security Commitment</p>
                  <p className="text-slate-600 text-sm">
                    At Hiriq, we treat your data with the same care as our own. Every feature, every line of code, and every security measure is designed with your privacy and security as the top priority. If you ever have concerns about data security, our team is available 24/7 to assist you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}