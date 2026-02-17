'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Zap, Users, CheckCircle, Brain, Calendar, TrendingUp, Shield, CheckSquare, Sparkles, Star, Target, Volume2, VolumeX } from 'lucide-react';

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Load Vimeo Player API
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    
    script.onload = () => {
      // @ts-ignore
      const Player = window.Vimeo?.Player;
      if (Player) {
        const iframe = document.getElementById('vimeo-player');
        if (iframe) {
          playerRef.current = new Player(iframe);
          playerRef.current.setVolume(0); // Start muted
        }
      }
    };
    
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.setVolume(1);
      } else {
        playerRef.current.setVolume(0);
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Video Hero Section - Full Screen Below Header */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Vimeo Video */}
        <div className="absolute inset-0 w-full h-full">
          <div style={{position: 'relative', width: '100%', height: '100%'}}>
            <iframe 
              id="vimeo-player"
              src="https://player.vimeo.com/video/1165777395?autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&badge=0&autopause=0&controls=0&player_id=0&app_id=58479" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
                  style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100vw',
      height: '56.25vw',
      minHeight: '100vh',
      minWidth: '177.78vh',
      transform: 'translate(-50%, -50%)'
    }} 
              title="slideshow"
            />
          </div>
          
          {/* Unmute Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-8 right-8 z-20 p-4 bg-white/90 backdrop-blur-md border-2 border-cyan-300 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6 text-slate-700 group-hover:text-cyan-600 transition-colors" />
            ) : (
              <Volume2 className="w-6 h-6 text-cyan-600 group-hover:text-cyan-700 transition-colors" />
            )}
          </button>
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900/30"></div>
        </div>
      </section>

      {/* Hero Content Section - Below Slider */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-5 py-2 bg-white/90 backdrop-blur-md border border-cyan-200 rounded-full mb-8 shadow-lg">
              <Zap className="w-4 h-4 text-cyan-600 mr-2 animate-pulse" />
              <span className="text-sm font-semibold text-slate-800">AI-Powered Recruitment Platform</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Hire Smarter, Not Harder with{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                AI-Powered ATS
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-700 mb-12 leading-relaxed">
              From automated candidate screening to AI-driven pre-screening calls,
              <br className="hidden md:block" />
              Hiriq transforms your recruitment process with intelligent automation.
            </p>

            {/* CTA Card - Hiring Platform */}
            <div className="max-w-2xl mx-auto">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <Link href="/hiring-platform" className="block">
                  <div className="relative bg-white/95 backdrop-blur-xl p-10 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4 text-center">Hiring Platform</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed text-center text-lg">
                      Enterprise-grade ATS with AI-powered screening, automated pre-screening calls, and intelligent candidate matching for modern recruitment teams.
                    </p>
                    <div className="flex items-center justify-center text-blue-600 font-semibold text-lg group-hover:translate-x-2 transition-transform">
                      Explore Our Platform
                      <ArrowRight className="w-6 h-6 ml-2" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border-2 border-blue-200 p-8 rounded-2xl transform hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-blue-300">
                <div className="flex items-center justify-center mb-4">
                  <Zap className="w-12 h-12 text-blue-600 mr-3 animate-pulse" />
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    90%
                  </div>
                </div>
                <div className="text-slate-900 font-semibold mb-2 text-lg text-center">
                  Potential Time Savings per Hire
                </div>
                <div className="text-sm text-slate-600 text-center">
                  Automate screening and initial interviews
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border-2 border-cyan-200 p-8 rounded-2xl transform hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-cyan-300">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-12 h-12 text-cyan-600 mr-3 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="text-6xl font-bold bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent">
                    100%
                  </div>
                </div>
                <div className="text-slate-900 font-semibold mb-2 text-lg text-center">
                  Customizable Flows
                </div>
                <div className="text-sm text-slate-600 text-center">
                  Tailor every step to your needs
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border-2 border-green-200 p-8 rounded-2xl transform hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-green-300">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="w-12 h-12 text-green-600 mr-3 animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Enterprise
                  </div>
                </div>
                <div className="text-slate-900 font-semibold mb-2 text-lg text-center">
                  Enterprise-Ready
                </div>
                <div className="text-sm text-slate-600 text-center">
                  Secure & Scalable Architecture
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Everything You Need to Revolutionize Hiring
            </h2>
            <p className="text-xl text-slate-600">
              Powerful features designed for modern recruitment teams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Automated Job Distribution',
                description: 'Create jobs and instantly generate branded resume upload pages. Share LinkedIn-ready posts and automatically collect resumes into your ATS.',
                gradient: 'from-blue-500 to-cyan-500',
                border: 'border-blue-200',
                hoverBorder: 'hover:border-cyan-400'
              },
              {
                icon: Brain,
                title: 'AI Criteria Matching',
                description: 'Intelligent algorithms match candidates to job requirements, surfacing the best fits instantly with advanced scoring.',
                gradient: 'from-cyan-500 to-sky-500',
                border: 'border-cyan-200',
                hoverBorder: 'hover:border-cyan-400'
              },
              {
                icon: Calendar,
                title: 'Automated Pre-Screening',
                description: 'AI conducts initial screening calls on your behalf. No scheduling conflicts, available 24/7 with detailed transcripts.',
                gradient: 'from-green-500 to-emerald-500',
                border: 'border-green-200',
                hoverBorder: 'hover:border-green-400'
              },
              {
                icon: Target,
                title: 'Multi-Industry Hiring',
                description: 'Hire across technology, healthcare, logistics, sales, finance, marketing, insurance, and management roles with tailored workflows.',
                gradient: 'from-purple-500 to-pink-500',
                border: 'border-purple-200',
                hoverBorder: 'hover:border-purple-400'
              },
              {
                icon: Zap,
                title: 'Instant Shortlisting',
                description: 'Reduce time-to-hire by 60% with automated candidate ranking, knockout questions, and intelligent recommendations.',
                gradient: 'from-yellow-500 to-orange-500',
                border: 'border-yellow-200',
                hoverBorder: 'hover:border-yellow-400'
              },
              {
                icon: Users,
                title: 'Collaboration Tools',
                description: 'Built-in feedback loops, shared evaluations, and seamless team collaboration.',
                gradient: 'from-blue-500 to-cyan-500',
                border: 'border-blue-200',
                hoverBorder: 'hover:border-cyan-400'
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className={`relative bg-white/80 backdrop-blur-xl border-2 ${feature.border} ${feature.hoverBorder} p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 h-full shadow-lg hover:shadow-xl`}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-md`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Infinite Slider */}
      <section className="relative py-20 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-slate-600 text-lg">Trusted by innovative companies across the globe</p>
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          
          /* Mobile: faster scrolling */
          @media (max-width: 768px) {
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
          }
          
          .testimonial-track:hover .animate-scroll {
            animation-play-state: paused;
          }
        `}</style>

        <div className="testimonial-track relative">
          <div className="flex animate-scroll">
            {[
              {
                quote: "Hiriq reduced our time-to-hire by 75%. The AI screening is incredibly accurate and saves us countless hours every week.",
                author: "Sarah Mitchell",
                role: "Head of Talent Acquisition",
                company: "TechVentures Inc."
              },
              {
                quote: "The automated pre-screening calls saved us hundreds of hours. Game changer for our recruitment process!",
                author: "Ahmed Al-Kuwari",
                role: "HR Director",
                company: "Doha Digital Solutions"
              },
              {
                quote: "Best ATS we've used. The candidate matching is spot-on every time. Highly recommend to all recruiters.",
                author: "Maria Santos",
                role: "VP of People Operations",
                company: "Global Tech Partners"
              },
              {
                quote: "Implementation was smooth and the ROI was immediate. Our hiring process is now 3x faster than before.",
                author: "Khalid Rahman",
                role: "Recruitment Manager",
                company: "Pearl Innovations Qatar"
              },
              {
                quote: "The AI interviews are incredibly natural. Candidates actually enjoy the experience and we get better insights.",
                author: "Jennifer Park",
                role: "Talent Director",
                company: "NextGen Solutions"
              },
              {
                quote: "We've scaled from 10 to 100 employees in 6 months, all thanks to Hiriq's automation. Absolutely essential tool!",
                author: "Omar Hassan",
                role: "Co-Founder & CEO",
                company: "Crescent Technologies"
              },
              {
                quote: "The analytics dashboard gives us insights we never had before. Data-driven hiring has improved our quality by 40%.",
                author: "Lisa Chen",
                role: "People Analytics Lead",
                company: "DataFlow Systems"
              },
              {
                quote: "Outstanding support team. They helped us customize workflows perfectly for our industry-specific needs.",
                author: "Fatima Al-Thani",
                role: "HR Manager",
                company: "Gulf Star Enterprises"
              },
              // Duplicate set for infinite scroll
              {
                quote: "Hiriq reduced our time-to-hire by 75%. The AI screening is incredibly accurate and saves us countless hours every week.",
                author: "Sarah Mitchell",
                role: "Head of Talent Acquisition",
                company: "TechVentures Inc."
              },
              {
                quote: "The automated pre-screening calls saved us hundreds of hours. Game changer for our recruitment process!",
                author: "Ahmed Al-Kuwari",
                role: "HR Director",
                company: "Doha Digital Solutions"
              },
              {
                quote: "Best ATS we've used. The candidate matching is spot-on every time. Highly recommend to all recruiters.",
                author: "Maria Santos",
                role: "VP of People Operations",
                company: "Global Tech Partners"
              },
              {
                quote: "Implementation was smooth and the ROI was immediate. Our hiring process is now 3x faster than before.",
                author: "Khalid Rahman",
                role: "Recruitment Manager",
                company: "Pearl Innovations Qatar"
              },
              {
                quote: "The AI interviews are incredibly natural. Candidates actually enjoy the experience and we get better insights.",
                author: "Jennifer Park",
                role: "Talent Director",
                company: "NextGen Solutions"
              },
              {
                quote: "We've scaled from 10 to 100 employees in 6 months, all thanks to Hiriq's automation. Absolutely essential tool!",
                author: "Omar Hassan",
                role: "Co-Founder & CEO",
                company: "Crescent Technologies"
              },
              {
                quote: "The analytics dashboard gives us insights we never had before. Data-driven hiring has improved our quality by 40%.",
                author: "Lisa Chen",
                role: "People Analytics Lead",
                company: "DataFlow Systems"
              },
              {
                quote: "Outstanding support team. They helped us customize workflows perfectly for our industry-specific needs.",
                author: "Fatima Al-Thani",
                role: "HR Manager",
                company: "Gulf Star Enterprises"
              }
            ].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-96 mx-4">
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-xl border-2 border-cyan-200 hover:border-cyan-300 p-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl h-full flex flex-col">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-4 italic leading-relaxed text-sm flex-grow">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{testimonial.author}</p>
                      <p className="text-xs text-slate-600">{testimonial.role}</p>
                      <p className="text-xs text-cyan-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-sky-600/10 backdrop-blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Start your 14-day free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.hiriq.co"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 text-white rounded-xl font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="mailto:contact@hiriq.com?subject=Demo%20Request%20-%20Hiriq%20AI%20Recruitment%20Platform&body=Dear%20Hiriq%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20personalized%20demo%20of%20your%20AI-powered%20recruitment%20platform.%0A%0AOrganization%20Details%3A%0A%E2%80%A2%20Company%20Name%3A%20%0A%E2%80%A2%20Industry%3A%20%0A%E2%80%A2%20Team%20Size%3A%20%0A%0AContact%20Information%3A%0A%E2%80%A2%20Full%20Name%3A%20%0A%E2%80%A2%20Job%20Title%3A%20%0A%E2%80%A2%20Phone%20Number%3A%20%0A%E2%80%A2%20Preferred%20Contact%20Method%3A%20%0A%0ASpecific%20Interests%3A%0A%E2%80%A2%20Primary%20Use%20Case%3A%20%0A%E2%80%A2%20Current%20Hiring%20Volume%3A%20%0A%E2%80%A2%20Timeline%20for%20Implementation%3A%20%0A%0APlease%20share%20your%20available%20time%20slots%20for%20a%2030-minute%20demo%20session.%0A%0ABest%20regards"
              className="px-8 py-4 bg-white/80 backdrop-blur-xl border-2 border-cyan-300 text-slate-900 rounded-xl font-semibold hover:bg-white hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer with Social Icons */}
      <Footer showSocialIcons={true} />

    </div>
  );
}