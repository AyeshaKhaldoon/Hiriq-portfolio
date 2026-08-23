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
  Volume2,
  VolumeX,
} from 'lucide-react';

const DEMO_URL = 'https://calendly.com/ayesha786khaldoon/discovery-call-hiriq';

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
                Our AI speaks with candidates, scores responses, and gives recruiters evidence for the next step.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-2">
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center h-16 rounded-full px-10 text-xl font-semibold bg-slate-900 text-white shadow-xl hover:shadow-2xl hover:bg-slate-800 transition-all duration-300 hover:scale-[1.02]"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/pricing"
                  className="group inline-flex items-center justify-center h-16 rounded-full px-10 text-xl font-semibold border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
                >
                  View Pricing
                </a>
              </div>

              <p className="text-base text-slate-500">
                See the workflow, scoring, and interview evidence before rollout.
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

          <div className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-xl md:grid-cols-[0.85fr_1.15fr]">
            <a
              href="https://boardroompk.com/site/startups/intelligent-human-centered-hiring-ayesha-khaldoon-founder-of-hiriq"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative min-h-[320px] overflow-hidden bg-slate-900"
              aria-label="Read Ayesha Khaldoon's BoardroomPK interview"
            >
              <Image
                src="/team/ayesha-khaldoon.jpg"
                alt="Ayesha Khaldoon, Co-Founder CEO of Hiriq"
                fill
                className="object-cover object-center transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 380px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-5 text-white">
                <p className="text-sm font-semibold">Ayesha Khaldoon</p>
                <p className="text-xs text-slate-300">Co-Founder CEO, Hiriq</p>
              </div>
            </a>
            <div className="flex flex-col justify-center p-8 text-white sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">Founder Interview</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The story behind Hiriq&apos;s human-centered AI hiring platform.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                In BoardroomPK, Ayesha shares how Hiriq connects job requirements, CV analysis,
                candidate matching, pre-screening, AI interviews, and recruiter decisioning into one workflow.
              </p>
              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm leading-6 text-slate-300">
                  Sneak peek: the interview explains why Hiriq keeps automation focused on structured
                  evidence while the final hiring decision stays with people.
                </p>
              </div>
              <a
                href="https://boardroompk.com/site/startups/intelligent-human-centered-hiring-ayesha-khaldoon-founder-of-hiriq"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex h-12 w-fit items-center justify-center rounded-xl bg-white px-6 font-semibold text-slate-950 transition hover:bg-cyan-50"
              >
                Read the interview
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
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
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 rounded-full px-8 text-lg font-semibold bg-white text-slate-900 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/automated-interviews"
              className="inline-flex items-center justify-center h-14 rounded-full px-8 text-lg font-semibold border-2 border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 transition-all duration-300"
            >
              Explore AI Interviews
            </a>
          </div>
          
          <p className="mt-8 text-sm text-slate-500">
            See how Hiriq maps to your hiring workflow before implementation.
          </p>
        </div>
      </section>

      <Footer showSocialIcons />
    </div>
  );
}
