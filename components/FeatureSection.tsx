'use client';

import React from 'react';
import Link from 'next/link';
import {
  Mic,
  LayoutTemplate,
  FileSearch,
  ShieldCheck,
  Zap,
  ArrowUpRight,
} from 'lucide-react';

const FeatureSection = () => {
  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-indigo-50/50 to-purple-50/70" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/25 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-4">Platform</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 md:whitespace-nowrap text-center">
            Everything You Need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Hire at Scale
            </span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            One platform for screening, interviews, and decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Feature Card - AI Interviews */}
          <Link
            href="/hiring-platform"
            className="group relative md:col-span-2 rounded-3xl overflow-hidden bg-white border-2 border-blue-100 hover:border-blue-300 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-200/30 transition-all duration-500"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-l-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-10 lg:p-12 flex flex-col h-full justify-between min-h-[380px]">
              <div>
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-8 shadow-xl shadow-blue-500/30 p-4">
                  <Mic className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4">
                  AI Voice Interviews
                </h3>
                <p className="text-slate-600 text-lg max-w-xl leading-relaxed font-medium">
                  Our AI conducts structured, adaptive conversations with candidates—evaluates responses and schedules your top picks. You get transcripts and scores.
                </p>
              </div>
              <div className="mt-8 inline-flex items-center text-blue-600 font-bold group-hover:gap-3 gap-2 transition-all">
                Explore the Platform <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-64 h-64 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity pointer-events-none">
              <Mic className="w-full h-full text-blue-600" />
            </div>
          </Link>

          {/* Smart Distribution - purple accent */}
          <div className="group rounded-3xl bg-white border-2 border-purple-100 p-8 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">Smart Distribution</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Auto-post to job boards. One-click shortlists and automated rejection emails.
            </p>
          </div>

          {/* Branded Pages - blue */}
          <div className="group rounded-3xl bg-white border-2 border-blue-100 p-8 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25">
              <LayoutTemplate className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">Branded Pages</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Role-specific application flows. Candidates apply directly—no manual resume chasing.
            </p>
          </div>

          {/* Resume Intelligence - cyan */}
          <div className="group rounded-3xl bg-white border-2 border-cyan-100 p-8 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-100/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-500" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/25">
              <FileSearch className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">Resume Intelligence</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Industry-aware parsing and extraction so you see what matters.
            </p>
          </div>

          {/* Integrity & Fairness - emerald */}
          <div className="group rounded-3xl bg-white border-2 border-emerald-100 p-8 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/25">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">Integrity & Fairness</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Proctoring and transparency so every candidate is evaluated fairly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
