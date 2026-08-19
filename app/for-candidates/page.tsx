'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AlertCircle, Brain, CheckCircle, CheckCircle2, Mic, Video, Target, TrendingUp, Award, ArrowRight, Bell, FileText, Sparkles, Download, Edit } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { getStoredUtmParams } from '@/components/SiteUtilities';

const candidateFaqs = [
  { q: 'When will Hiriq for candidates launch?', a: "We're targeting Q1 2026 for our official launch. Waitlist members will get early access 2 weeks before the public launch." },
  { q: 'How is this different from other interview prep tools?', a: "Our AI doesn't just ask static questions. It adapts to your answers, asks follow-ups, and provides detailed feedback on both content and delivery just like a real interviewer." },
  { q: 'What types of interviews can I practice?', a: 'Technical interviews, behavioral interviews, and role-specific scenarios. We support common job functions and major programming workflows.' },
  { q: 'Can I practice for specific companies?', a: 'Yes. Pro members get access to company-specific interview prep based on real interview patterns for that company.' },
  { q: 'Is my practice data private?', a: 'Absolutely. Your practice sessions are private and never shared. We use the data only to improve your personal feedback.' },
];

export default function ForCandidates() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    if (!email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email.');
      return;
    }

    try {
      const res = await fetch('/api/newsletter/candidates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, utm: getStoredUtmParams() }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage("You're subscribed! Check your inbox for a confirmation email.");
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Subscription failed. Try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Subscription failed. Try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white rounded-full mb-6 animate-pulse">
              <Bell className="w-5 h-5 mr-2" />
              <span className="font-bold">COMING SOON</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Ace Every Interview with{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                AI-Powered Practice
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Practice technical and behavioral interviews with our AI interviewer.
              Get instant feedback, identify weak spots, and walk into your next interview with confidence.
            </p>

            {/* Waitlist Form */}
            <div className="max-w-xl mx-auto mb-8">
              <form
                onSubmit={handleSubscribe}
                className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-200 flex flex-col gap-3"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                  Be the First to Know When We Launch
                </h3>
                <p className="text-slate-600 mb-4 text-center">
                  Join our waitlist and get exclusive early access + free interviews when we launch.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition font-semibold whitespace-nowrap"
                  >
                    {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                  </button>
                </div>

                {message && (
                  <div
                    className={`mt-3 flex items-start gap-3 rounded-xl border p-3 text-left text-sm ${
                      status === 'success'
                        ? 'border-green-200 bg-green-50 text-green-800'
                        : 'border-red-200 bg-red-50 text-red-800'
                    }`}
                    role="status"
                  >
                    {status === 'success' ? (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    )}
                    <p className="font-medium">{message}</p>
                  </div>
                )}

                <p className="text-sm text-slate-500 mt-3 text-center">
                  🎁 Early access members get free trial interviews (worth $$$)
                </p>
              </form>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-slate-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                Launching Q2 2026
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                No credit card needed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Interview Prep Is Too Expensive & Inconvenient
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Getting real interview practice shouldn't cost thousands or depend on someone's availability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { problem: "Professional mock interviews are extremely expensive", reality: "You pay per session, often with limited feedback" },
              { problem: "Scheduling with experts is slow and unreliable", reality: "Interviews don't wait for calendars to align" },
              { problem: "Practice rarely feels like a real interview", reality: "You're unprepared for pressure, follow-ups, and evaluation" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition">
                <div className="text-red-400 font-semibold mb-3">❌ The Problem</div>
                <p className="text-lg text-slate-300 mb-4">{item.problem}</p>
                <div className="text-purple-400 font-semibold mb-2">💡 The Reality</div>
                <p className="text-white">{item.reality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Builder Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full mb-6 shadow-lg">
              <Sparkles className="w-5 h-5 mr-2" />
              <span className="font-bold">FREE RESUME BUILDER</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Build Your Perfect Resume in{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 bg-clip-text text-transparent">
                Minutes
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Create professional, ATS-friendly resumes with our easy-to-use builder. Stand out from the crowd with beautiful templates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: '🎨', title: 'Beautiful Templates', description: 'Choose from professionally designed templates that make you stand out' },
              { icon: '⚡', title: 'ATS-Optimized', description: 'Pass through Applicant Tracking Systems with optimized formatting' },
              { icon: '📥', title: 'Instant Download', description: 'Download your resume as PDF instantly, completely free' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-300">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-purple-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Everything You Need to Create a Winning Resume
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: FileText, title: 'Smart Sections', description: 'Personal info, work experience, education, skills - all organized perfectly', color: 'blue' },
                { icon: Edit, title: 'Easy Editing', description: 'Simple, intuitive interface to add, edit, and remove sections effortlessly', color: 'purple' },
                { icon: Sparkles, title: 'AI Suggestions', description: 'Get smart suggestions for improving your resume content and formatting', color: 'pink' },
                { icon: Download, title: 'Multiple Formats', description: 'Download in PDF, Word, or plain text - whatever you need', color: 'green' },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-lg transition">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${feature.color === 'blue' ? 'from-blue-500 to-blue-600' :
                    feature.color === 'purple' ? 'from-cyan-500 to-cyan-600' :
                      feature.color === 'pink' ? 'from-pink-500 to-pink-600' :
                        'from-green-500 to-emerald-600'}`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/for-candidates">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all text-lg inline-flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Start Building Your Resume
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <p className="text-slate-600 mt-4">No signup required • 100% Free Forever</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <FAQAccordion items={candidateFaqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Be Ready When Opportunity Knocks
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join the waitlist and get free when we launch
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-lg focus:outline-none text-slate-900"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition whitespace-nowrap"
            >
              {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>

          {message && (
            <div
              className={`mx-auto mt-4 flex max-w-md items-start gap-3 rounded-xl border p-3 text-left text-sm ${
                status === 'success'
                  ? 'border-green-200 bg-green-50 text-green-800'
                  : 'border-red-200 bg-red-50 text-red-800'
              }`}
              role="status"
            >
              {status === 'success' ? (
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
              ) : (
                <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
              )}
              <p className="font-medium">{message}</p>
            </div>
          )}

          <p className="text-purple-100 mt-4">5,000+ job seekers already on the list</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
