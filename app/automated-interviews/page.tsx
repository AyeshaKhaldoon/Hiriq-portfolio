'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getStoredUtmParams } from '@/components/SiteUtilities';
import { useInView } from '@/hooks/useInView';
import {
  ArrowRight,
  Mic2,
  Layers,
  ShieldCheck,
  BarChart3,
  Building2,
  Scale,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const FEATURES = [
  {
    step: '1',
    title: 'Structured Interview Delivery',
    icon: Mic2,
    items: [
      'Timed question modules',
      'Industry-specific question banks',
      'Technical, behavioral, and assignment-based interviews',
      'Multi-round support',
      'Integrated with ATS stages',
    ],
    note: 'Each interview adapts to the role and industry.',
  },
  {
    step: '2',
    title: 'Multi-Layer Evaluation',
    icon: Layers,
    items: [
      'Technical accuracy',
      'Depth of reasoning',
      'Communication clarity',
      'Confidence patterns',
      'Response consistency',
      'Behavioral tendencies under pressure',
    ],
    note: 'All results feed directly into your hiring dashboard.',
  },
  {
    step: '3',
    title: 'Interview Integrity Monitoring',
    icon: ShieldCheck,
    items: [
      'Multi-face detection',
      'Focus monitoring',
      'Audio anomaly detection',
      'Background voice detection',
      'Session integrity scoring',
    ],
    note: 'Recruiters receive transparency reports — not just a final score.',
  },
  {
    step: '4',
    title: 'Unified Candidate Intelligence Score',
    icon: BarChart3,
    items: [
      'Interview results integrate with resume intelligence score',
      'Pre-screening results',
      'Assignment performance',
      'Recruiter ratings',
    ],
    note: 'One composite hiring intelligence score. Recruiters remain in control with full override capability. Human-in-the-loop is always preserved.',
  },
  {
    step: '5',
    title: 'Built for Every Industry',
    icon: Building2,
    items: [
      'Technology',
      'Healthcare',
      'BFSI',
      'Operations',
      'Retail & Hospitality',
      'Sales & BPO',
    ],
    note: 'Each industry has different evaluation logic and scoring weight.',
  },
];

const ETHICS = [
  'Candidate consent',
  'Transparent scoring signals',
  'Recruiter override',
  'No black-box decisions',
  'Privacy-first architecture',
];

export default function AutomatedInterviewsPage() {
  const whatInView = useInView();
  const featuresInView = useInView();
  const ethicsInView = useInView();
  const bannerInView = useInView();

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    if (!email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email.');
      return;
    }
    try {
      const res = await fetch('/api/newsletter/waitlist', {
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
        setMessage(data.error || 'Something went wrong. Try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Try again.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navigation />

      {/* Hero - futuristic */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8 opacity-0 animate-slide-up [animation-fill-mode:forwards] animate-stagger-1">
            <Sparkles className="w-4 h-4" />
            Coming Soon
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6 opacity-0 animate-slide-up [animation-fill-mode:forwards] animate-stagger-2">
            Fully Automated AI Interviews
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              Coming Soon
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-slide-up [animation-fill-mode:forwards] animate-stagger-3">
            An end-to-end interview intelligence system that evaluates technical ability, behavioral
            strength, and response integrity — all in one seamless experience.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center h-14 rounded-full px-8 text-lg font-semibold bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 hover:scale-[1.02] opacity-0 animate-slide-up [animation-fill-mode:forwards] animate-stagger-4"
          >
            Join Early Access
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* What This Means */}
      <section ref={whatInView.ref} className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 ${whatInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'}`}>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              What This Means
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Hiriq is introducing a fully integrated AI Interview Engine designed to replicate
              structured, real-world interviews while maintaining fairness, consistency, and human
              oversight.
            </p>
            <p className="text-xl font-semibold text-slate-900 mb-10">
              This is not just recorded interviews.
              <br />
              <span className="text-cyan-600">This is complete interview intelligence.</span>
            </p>
          </div>
          {/* Visual: Recorded vs Intelligence */}
          <div className={`grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto ${whatInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
            <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-5 text-center">
              <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center mx-auto mb-3">
                <Mic2 className="w-6 h-6 text-slate-500" />
              </div>
              <p className="text-sm font-semibold text-slate-600">Recorded interviews</p>
              <p className="text-xs text-slate-500 mt-1">One-way, passive</p>
            </div>
            <div className="rounded-2xl border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-white p-5 text-center shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center mx-auto mb-3">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-semibold text-cyan-800">Interview intelligence</p>
              <p className="text-xs text-cyan-600 mt-1">Structured · Scored · Actionable</p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span className="w-8 h-0.5 bg-slate-300 rounded" />
              <ArrowRight className="w-4 h-4" />
              <span className="w-8 h-0.5 bg-cyan-300 rounded" />
            </div>
          </div>

          {/* Mini stats */}
          <div className={`mt-12 flex flex-wrap justify-center gap-6 sm:gap-10 ${whatInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'}`} style={{ animationDelay: '280ms' }}>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-cyan-600">5</p>
              <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-wide">Pillars</p>
            </div>
            <div className="w-px bg-slate-200 hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-slate-900">100%</p>
              <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-wide">Human oversight</p>
            </div>
            <div className="w-px bg-slate-200 hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-slate-900">6+</p>
              <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-wide">Industries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbered feature cards + timeline */}
      <section ref={featuresInView.ref} className="py-20 lg:py-28 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-slate-200 rounded-full hidden sm:block overflow-hidden">
              <div
                className="absolute inset-0 w-full bg-gradient-to-b from-cyan-500 to-blue-500 origin-top rounded-full"
                style={{
                  transform: featuresInView.inView ? 'scaleY(1)' : 'scaleY(0)',
                  transition: 'transform 1s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              />
            </div>

            <div className="space-y-8">
              {FEATURES.map((f, idx) => (
                <div
                  key={f.step}
                  className={`relative group rounded-3xl bg-white border border-slate-200 p-8 lg:p-10 shadow-lg hover:shadow-xl hover:border-cyan-200 transition-all duration-300 ${
                    featuresInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${180 + idx * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0 flex items-center gap-4">
                      {/* Timeline node */}
                      <span className="absolute left-5 sm:left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white shadow-lg ring-2 ring-cyan-200 hidden sm:block" />
                      <span className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg">
                        {f.step}
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                        <f.icon className="w-7 h-7 text-cyan-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 sm:pl-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{f.title}</h3>
                      <ul className="space-y-2 mb-4">
                        {f.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-slate-500 text-sm italic">{f.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ethical & Transparent */}
      <section ref={ethicsInView.ref} className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 ${ethicsInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 text-white mb-6">
              <Scale className="w-8 h-8" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Ethical & Transparent by Design
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {ETHICS.map((item, i) => (
              <div
                key={i}
                className={`px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 font-medium transition-all duration-300 hover:border-cyan-200 hover:shadow-md ${
                  ethicsInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'
                }`}
                style={{ animationDelay: `${100 + i * 80}ms` }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final banner - Launching Soon */}
      <section id="waitlist" ref={bannerInView.ref} className="relative py-24 lg:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/30 via-slate-900 to-slate-900" />
        <div className={`relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 ${bannerInView.inView ? 'in-view animate-on-in-view' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            Launching Soon.
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Join the waitlist to get early access to AI-powered hiring intelligence.
          </p>
          <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3.5 rounded-full text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center h-14 rounded-full px-8 text-lg font-semibold bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 whitespace-nowrap"
              >
                {status === 'loading' ? 'Subscribing...' : 'Join Early Access'}
              </button>
            </div>
            {message && (
              <p className={`mt-4 rounded-xl border px-4 py-3 text-sm font-medium ${status === 'success' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' : 'border-red-500/30 bg-red-500/10 text-red-300'}`} role="status">
                {message}
              </p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
