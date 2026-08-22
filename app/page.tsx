'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FeatureSection from '@/components/FeatureSection';
import FAQAccordion from '@/components/FAQAccordion';
import {
  ArrowRight,
  ClipboardCheck,
  FileText,
  MessageSquare,
  ShieldCheck,
  Volume2,
  VolumeX,
} from 'lucide-react';

const DEMO_MAILTO =
  'mailto:contact@hiriq.com?subject=Book%20a%20Demo&body=Hi%2C%20I%27d%20like%20to%20book%20a%20demo.%0A%0AThanks';

const homeFaqs = [
  {
    q: 'How quickly can a team start using Hiriq?',
    a: 'Most teams can set up a role, define screening criteria, and begin collecting candidates the same day.',
  },
  {
    q: 'Does Hiriq replace recruiters?',
    a: 'No. Hiriq automates repetitive screening and interview coordination so recruiters can spend more time reviewing evidence and making decisions.',
  },
  {
    q: 'Can Hiriq support different industries?',
    a: 'Yes. Hiriq supports industry-specific criteria, job forms, resume parsing, and interview workflows across common hiring categories.',
  },
  {
    q: 'What happens after an AI interview?',
    a: 'Recruiters receive structured interview evidence, transcripts, scores, and summaries to support faster candidate review.',
  },
  {
    q: 'How fast does the team respond to inquiries?',
    a: 'Hiriq aims to respond within one business day, with demo requests prioritized.',
  },
];

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const playerRef = useRef<{ setVolume: (n: number) => void } | null>(null);
  const iframeLoadedRef = useRef(false);
  const minTimeDoneRef = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => {
      minTimeDoneRef.current = true;
      if (iframeLoadedRef.current) setVideoLoaded(true);
    }, 2800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let script: HTMLScriptElement | null = null;
    const frameId = requestAnimationFrame(() => {
      script = document.createElement('script');
      script.src = 'https://player.vimeo.com/api/player.js';
      script.async = true;
      script.onload = () => {
        const iframe = document.getElementById('vimeo-player');
        const Win = window as unknown as { Vimeo?: { Player: new (el: HTMLIFrameElement) => { setVolume: (n: number) => void } } };
        if (iframe && Win.Vimeo && iframe instanceof HTMLIFrameElement) {
          playerRef.current = new Win.Vimeo.Player(iframe);
          playerRef.current.setVolume(0);
        }
      };
      document.body.appendChild(script);
    });
    return () => {
      cancelAnimationFrame(frameId);
      if (script && document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const toggleMute = () => {
    if (playerRef.current) {
      const nextMuted = !isMuted;
      playerRef.current.setVolume(nextMuted ? 0 : 1);
      setIsMuted(nextMuted);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      <Navigation />

      {/* 
        HERO SECTION 
        Clean white with subtle gradients and floating elements
      */}
      <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-36 overflow-hidden lg:min-h-[92vh]">
        {/* Subtle Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50/30 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full overflow-x-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-center min-h-0 lg:min-h-[78vh]">
            
            {/* Left Content - Bold & Clean */}
            <div className="max-w-2xl space-y-10 min-w-0">
              <h1 className="text-6xl xs:text-7xl sm:text-8xl lg:text-8xl xl:text-[7.5rem] 2xl:text-[8.5rem] font-bold tracking-tight leading-[0.95] text-slate-900">
                Hire Smarter.
                <br />
                <span className="relative inline-block">
                  Hire Faster.
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C50 2 150 2 298 10" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-lg pl-1">
                The first recruitment platform that conducts interviews for you.
                Our AI speaks with candidates, evaluates responses, and schedules your top picks.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-2">
                <a
                  href="https://app.hiriq.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center h-16 rounded-full px-10 text-xl font-semibold bg-slate-900 text-white shadow-xl hover:shadow-2xl hover:bg-slate-800 transition-all duration-300 hover:scale-[1.02]"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={DEMO_MAILTO}
                  className="group inline-flex items-center justify-center h-16 rounded-full px-10 text-xl font-semibold border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
                >
                  Book a Demo
                </a>
              </div>

              <p className="text-base text-slate-500">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>

            {/* Right Content - Video fills right side, 16:9 no black bars */}
            <div className="relative lg:ml-0 w-full min-w-0 order-2 flex items-center justify-center self-stretch">
              <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-200/60 aspect-video min-h-[260px]">
                {/* Placeholder on top until video is ready */}
                <Image
                  src="/123.png"
                  alt="Hiriq AI recruitment platform dashboard preview"
                  fill
                  className={`object-cover transition-opacity duration-500 z-10 ${videoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <iframe
                  id="vimeo-player"
                  src="https://player.vimeo.com/video/1179662121?autoplay=1&loop=1&muted=1&byline=0&title=0&autopause=0&controls=0"
                  frameBorder="0"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; muted"
                  title="Hiriq platform demo"
                  onLoad={() => {
                    iframeLoadedRef.current = true;
                    if (minTimeDoneRef.current) setVideoLoaded(true);
                  }}
                />
                <button
                  type="button"
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 z-10 p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/20 hover:bg-black/70 transition-colors flex items-center justify-center"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-white" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection />

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-600">
              Workflow
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">
              From job criteria to recruiter-ready evidence.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Hiriq is built around the early hiring steps that usually create delay:
              role criteria, resume review, candidate pre-screening, AI interviews,
              and structured summaries for recruiter review.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/hiring-platform" className="inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 px-6 font-semibold text-white transition hover:bg-slate-800">
                View platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/pricing" className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 px-6 font-semibold text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700">
                Compare plans
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: FileText, title: 'Resume context', copy: 'Extract role-relevant experience, skills, and candidate background before review.' },
              { icon: MessageSquare, title: 'Interview evidence', copy: 'Use structured pre-screening and interview responses instead of scattered notes.' },
              { icon: ClipboardCheck, title: 'Shortlist clarity', copy: 'Compare candidates against the same criteria before moving them forward.' },
              { icon: ShieldCheck, title: 'Human decisioning', copy: 'Keep final decisions with recruiters and hiring managers, not automation alone.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Product Intelligence</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Built for structured candidate evaluation</h2>
            <p className="text-slate-600">
              Hiriq focuses on evidence recruiters can review: resume signals, role criteria,
              candidate responses, interview integrity indicators, and summarized next steps.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Role-specific setup',
                copy: 'Recruiters define requirements, focus areas, difficulty, and question types so screening follows the actual job.',
                color: 'border-blue-200 bg-blue-50/50',
              },
              {
                title: 'Dynamic interviews',
                copy: 'AI interviews can ask technical, behavioral, situational, and role-specific questions with follow-ups.',
                color: 'border-cyan-200 bg-cyan-50/50',
              },
              {
                title: 'Recruiter control',
                copy: 'Hiriq gives structured evidence and recommendations, while final hiring decisions remain with the team.',
                color: 'border-emerald-200 bg-emerald-50/50',
              },
            ].map((item) => (
              <div 
                key={item.title}
                className={`p-8 rounded-2xl border ${item.color} transition hover:-translate-y-1 hover:shadow-xl`}
              >
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-700">{item.copy}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Founder Interview</p>
            <p className="mt-3 text-lg leading-8 text-slate-700">
              Read Ayesha Khaldoon&apos;s BoardroomPK interview on Hiriq&apos;s approach to intelligent,
              human-centered hiring.
            </p>
            <a
              href="https://boardroompk.com/site/startups/intelligent-human-centered-hiring-ayesha-khaldoon-founder-of-hiriq"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 px-6 font-semibold text-white transition hover:bg-slate-800"
            >
              Read the interview
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-600">FAQ</p>
            <h2 className="text-4xl font-bold text-slate-900">Questions before you start</h2>
          </div>
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      {/* CTA above footer */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Ready to Hire Smarter?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Replace resume screening with structured, AI-powered conversations tailored to your industry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.hiriq.co" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center h-14 rounded-full px-8 text-lg font-semibold bg-white text-slate-900 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href={DEMO_MAILTO} 
              className="inline-flex items-center justify-center h-14 rounded-full px-8 text-lg font-semibold border-2 border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 transition-all duration-300"
            >
              Book a Demo
            </a>
          </div>
          
          <p className="mt-8 text-sm text-slate-500">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      <Footer showSocialIcons />
    </div>
  );
}
