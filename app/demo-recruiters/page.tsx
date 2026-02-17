"use client";
import Link from 'next/link';
import { CheckCircle, Zap, Clock, Target, Users, TrendingUp, Calendar, Shield, ArrowRight, FileText, CheckSquare, MessageSquare, Play } from 'lucide-react';
import { useState } from 'react';

export default function DemoRecruiters() {
    const [candidates, setCandidates] = useState(200);
    const [minutesPerResume, setMinutesPerResume] = useState(5);
    const [activeDemo, setActiveDemo] = useState<number | null>(null);

    // Calculations
    const totalMinutes = candidates * minutesPerResume;
    const hoursSaved = (totalMinutes * 0.85) / 60; // AI saves 85% of time
    const hourlyCost = 50; // Average recruiter hourly rate
    const monthlySavings = hoursSaved * hourlyCost;
    const timeSavedPercent = 85;

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                            Hiriq
                        </Link>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/hiring-platform" className="text-slate-700 hover:text-blue-600 transition">Hiring Platform</Link>
                            <Link href="/pricing" className="text-slate-700 hover:text-blue-600 transition">Pricing</Link>
                            <Link href="/demo-recruiters" className="text-blue-600 font-semibold">Demo</Link>
                            <a
                                href="mailto:contact@hiriq.com?subject=Demo%20Request%20-%20Hiriq%20AI%20Recruitment%20Platform&body=Dear%20Hiriq%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20personalized%20demo%20of%20your%20AI-powered%20recruitment%20platform.%0A%0AOrganization%20Details%3A%0A%E2%80%A2%20Company%20Name%3A%20%0A%E2%80%A2%20Industry%3A%20%0A%E2%80%A2%20Team%20Size%3A%20%0A%0AContact%20Information%3A%0A%E2%80%A2%20Full%20Name%3A%20%0A%E2%80%A2%20Job%20Title%3A%20%0A%E2%80%A2%20Phone%20Number%3A%20%0A%E2%80%A2%20Preferred%20Contact%20Method%3A%20%0A%0ASpecific%20Interests%3A%0A%E2%80%A2%20Primary%20Use%20Case%3A%20%0A%E2%80%A2%20Current%20Hiring%20Volume%3A%20%0A%E2%80%A2%20Timeline%20for%20Implementation%3A%20%0A%0APlease%20share%20your%20available%20time%20slots%20for%20a%2030-minute%20demo%20session.%0A%0ABest%20regards"
                                className="px-6 py-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 text-white rounded-lg hover:opacity-90 transition"
                            >
                                Contact for Demo
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section with Demo Badge */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-sky-600 text-white rounded-full mb-6 shadow-lg">
                            <Play className="w-5 h-5 mr-2" />
                            <span className="font-bold">Interactive Demo</span>
                        </div>
                        <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Experience Hiriq in Action
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                            Click on any feature below to see how Hiriq transforms your recruitment process
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Stop Drowning in Resumes. Start Hiring Smarter.
                            </h2>

                            <p className="text-xl text-slate-600 mb-8">
                                AI-powered ATS that automates screening, conducts pre-screening calls,
                                and delivers qualified candidates to your inbox—without the manual work.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-lg flex items-center justify-center">
                                    Start 14-Day Free Trial
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </button>
                                <button className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition font-semibold text-lg">
                                    Schedule Live Demo
                                </button>
                            </div>

                            <div className="flex items-center gap-6 text-sm text-slate-600">
                                <div className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                                    Setup in minutes
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                                <img
                                    src="https://i.imgur.com/YourImage3.png"
                                    alt="Real-time candidate pipeline showing stages from Upload to Offer"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
                                    ⚡ Track candidates through every stage: Upload → Email → Screening → Interview → Offer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-3">
                                <Zap className="w-8 h-8 text-blue-600 mr-2" />
                                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                                    90%
                                </div>
                            </div>
                            <div className="text-slate-900 font-semibold mb-1">Potential Time Savings per Hire</div>
                            <div className="text-sm text-slate-600">Automate screening and initial interviews</div>
                        </div>

                        <div className="text-center">
                            <div className="flex items-center justify-center mb-3">
                                <CheckSquare className="w-8 h-8 text-purple-600 mr-2" />
                                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent">
                                    100%
                                </div>
                            </div>
                            <div className="text-slate-900 font-semibold mb-1">Customizable Interview & Screening Flows</div>
                            <div className="text-sm text-slate-600">Tailor every step to your needs</div>
                        </div>

                        <div className="text-center">
                            <div className="flex items-center justify-center mb-3">
                                <Shield className="w-8 h-8 text-green-600 mr-2" />
                                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                    Enterprise
                                </div>
                            </div>
                            <div className="text-slate-900 font-semibold mb-1">Enterprise-Ready</div>
                            <div className="text-sm text-slate-600">Secure & Scalable Architecture</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Demo Features */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
                        Interactive Feature Showcase
                    </h2>

                    <div className="space-y-16">
                        {/* Feature 1 - Job Setup */}
                        <div
                            className={`grid md:grid-cols-2 gap-12 items-center p-8 rounded-2xl transition-all duration-300 ${activeDemo === 1 ? 'bg-blue-50 shadow-xl' : 'hover:bg-slate-50'
                                }`}
                            onClick={() => setActiveDemo(activeDemo === 1 ? null : 1)}
                        >
                            <div>
                                <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                                    Step 1 - Click to Explore
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                    Create Jobs in Minutes
                                </h3>
                                <p className="text-lg text-slate-600 mb-6">
                                    Our streamlined workflow gets you from idea to live job posting in seconds.
                                    Create your job, define screening criteria, add custom questions—and you're done.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Set job description',
                                        'Set custom screening criteria',
                                        'Add knockout & qualifying questions',
                                        'Choose automation tier (Basic to Premium)',
                                        'One-click multi-board distribution'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center text-slate-700">
                                            <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                {activeDemo === 1 && (
                                    <div className="mt-6 p-4 bg-blue-100 rounded-lg border-2 border-blue-600">
                                        <p className="text-blue-900 font-semibold">
                                            💡 Try it: Select your automation tier and watch how Hiriq adapts to your workflow
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 cursor-pointer hover:scale-105 transition-transform">
                                <img
                                    src="/job_setup_interface_1768142202904.png"
                                    alt="Job Role Setup Interface showing automation workflow tiers"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 text-center text-sm text-slate-600">
                                    ⚡ Choose from 4 automation levels: Basic ATS → Smart ATS → Pre-Screening → Full Automation
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 - Criteria Setup */}
                        <div
                            className={`grid md:grid-cols-2 gap-12 items-center p-8 rounded-2xl transition-all duration-300 ${activeDemo === 2 ? 'bg-purple-50 shadow-xl' : 'hover:bg-slate-50'
                                }`}
                            onClick={() => setActiveDemo(activeDemo === 2 ? null : 2)}
                        >
                            <div className="order-2 md:order-1 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 cursor-pointer hover:scale-105 transition-transform">
                                <img
                                    src="/criteria_setup_interface_1768142221868.png"
                                    alt="Candidate criteria setup showing minimum match percentage, experience, salary range, and custom questions"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 text-center text-sm text-slate-600">
                                    🎯 Set match threshold, experience, salary, skills & custom interview questions
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                                    Step 2 - Click to Explore
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                    AI Screens & Ranks Automatically
                                </h3>
                                <p className="text-lg text-slate-600 mb-6">
                                    Set your criteria once: minimum match percentage, years of experience, salary range,
                                    required skills, and custom questions. Our AI analyzes every resume and automatically
                                    shortlists candidates who meet your threshold.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Adjustable match threshold (60-90%)',
                                        'Years of experience & salary filters',
                                        'Required skills & education level',
                                        'Custom interview questions',
                                        'AI automatically asks & validates'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center text-slate-700">
                                            <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                {activeDemo === 2 && (
                                    <div className="mt-6 p-4 bg-purple-100 rounded-lg border-2 border-purple-600">
                                        <p className="text-purple-900 font-semibold">
                                            💡 Try it: Adjust the match percentage slider to see how it affects candidate filtering
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Feature 3 - Candidate Analysis */}
                        <div
                            className={`grid md:grid-cols-2 gap-12 items-center p-8 rounded-2xl transition-all duration-300 ${activeDemo === 3 ? 'bg-green-50 shadow-xl' : 'hover:bg-slate-50'
                                }`}
                            onClick={() => setActiveDemo(activeDemo === 3 ? null : 3)}
                        >
                            <div>
                                <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                                    Step 3 - Click to Explore
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                    Review AI-Matched Candidates
                                </h3>
                                <p className="text-lg text-slate-600 mb-6">
                                    See exactly why each candidate matched. Our AI provides detailed match analysis,
                                    showing skills, experience, projects, and criteria alignment.
                                    Know instantly if someone is worth interviewing.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Match score with detailed breakdown',
                                        'Automatic skill extraction & tagging',
                                        'Experience & project analysis',
                                        'Red flag detection (domain mismatches)',
                                        'One-click move through pipeline'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center text-slate-700">
                                            <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                {activeDemo === 3 && (
                                    <div className="mt-6 p-4 bg-green-100 rounded-lg border-2 border-green-600">
                                        <p className="text-green-900 font-semibold">
                                            💡 Try it: Click on skill tags to see how they match your job requirements
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 cursor-pointer hover:scale-105 transition-transform">
                                <img
                                    src="/candidate_match_analysis_1768142253998.png"
                                    alt="Candidate match analysis showing 84% score, skills, and experience breakdown"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 text-center text-sm text-slate-600">
                                    📊 Detailed match analysis: 84% score with 29 skills, 18 projects identified
                                </div>
                            </div>
                        </div>

                        {/* Feature 4 - Pre-Screening */}
                        <div
                            className={`grid md:grid-cols-2 gap-12 items-center p-8 rounded-2xl transition-all duration-300 ${activeDemo === 4 ? 'bg-yellow-50 shadow-xl' : 'hover:bg-slate-50'
                                }`}
                            onClick={() => setActiveDemo(activeDemo === 4 ? null : 4)}
                        >
                            <div className="order-2 md:order-1 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 cursor-pointer hover:scale-105 transition-transform">
                                <img
                                    src="/prescreening_interface_1768142278950.png"
                                    alt="AI-powered pre-screening interview interface with audio visualization and real-time scoring"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 text-center text-sm text-slate-600">
                                    🎙️ AI conducts live interviews with real-time scoring and transcript analysis
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="inline-block px-4 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
                                    Step 4 (Premium) - Click to Explore
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                    Automated Pre-Screening Calls
                                </h3>
                                <p className="text-lg text-slate-600 mb-6">
                                    Premium plan: AI conducts initial phone screens 24/7.
                                    No scheduling hassles. Candidates get instant feedback.
                                    You get transcripts, scores, and red flags highlighted.
                                </p>
                                <ul className="space-y-3">
                                    {['Available 24/7, any timezone', 'Full Call Summary', 'Automatic scoring'].map((item, i) => (
                                        <li key={i} className="flex items-center text-slate-700">
                                            <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                {activeDemo === 4 && (
                                    <div className="mt-6 p-4 bg-yellow-100 rounded-lg border-2 border-yellow-600">
                                        <p className="text-yellow-900 font-semibold">
                                            💡 Try it: Watch the audio visualization respond to candidate answers in real-time
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            Trusted by Forward-Thinking Companies
                        </h2>
                        <p className="text-xl text-slate-600">
                            Join hundreds of companies that have transformed their hiring process
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow">
                            <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent mb-3">
                                60%
                            </div>
                            <div className="text-slate-900 font-semibold text-lg">Reduction in Time-to-Hire</div>
                        </div>

                        <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:shadow-xl transition-shadow">
                            <div className="text-6xl font-bold bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent mb-3">
                                10,000+
                            </div>
                            <div className="text-slate-900 font-semibold text-lg">Candidates Screened Monthly</div>
                        </div>

                        <div className="text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 hover:shadow-xl transition-shadow">
                            <div className="text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3">
                                94%
                            </div>
                            <div className="text-slate-900 font-semibold text-lg">Customer Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI Calculator */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl p-12">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
                            Calculate Your Time Savings
                        </h2>

                        <div className="space-y-6 mb-8">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    How many candidates do you review monthly?
                                </label>
                                <input
                                    type="number"
                                    value={candidates}
                                    onChange={(e) => setCandidates(Number(e.target.value) || 0)}
                                    placeholder="e.g., 200"
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Average time spent per resume (minutes)
                                </label>
                                <input
                                    type="number"
                                    value={minutesPerResume}
                                    onChange={(e) => setMinutesPerResume(Number(e.target.value) || 0)}
                                    placeholder="e.g., 5"
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                                />
                            </div>
                        </div>

                        {candidates > 0 && minutesPerResume > 0 && (
                            <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 rounded-xl p-8">
                                <div className="grid md:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <div className="text-3xl font-bold text-white mb-2">
                                            {hoursSaved.toFixed(1)}hrs
                                        </div>
                                        <div className="text-blue-100">Saved per month</div>
                                    </div>

                                    <div>
                                        <div className="text-3xl font-bold text-white mb-2">
                                            ${monthlySavings.toLocaleString()}
                                        </div>
                                        <div className="text-blue-100">Cost savings</div>
                                    </div>

                                    <div>
                                        <div className="text-3xl font-bold text-white mb-2">
                                            {timeSavedPercent}%
                                        </div>
                                        <div className="text-blue-100">Time reduction</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {(candidates === 0 || minutesPerResume === 0) && (
                            <div className="bg-slate-100 rounded-xl p-8 text-center text-slate-600">
                                Enter your numbers above to see your potential savings
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Hiring?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Start your 14-day free trial today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-12 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition text-lg inline-flex items-center justify-center">
                            Start Your Free Trial
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                        <Link href="/hiring-platform">
                            <button className="px-12 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition text-lg">
                                View Full Details
                            </button>
                        </Link>
                    </div>
                    <p className="text-blue-100 mt-6">• Setup in 5 minutes</p>
                </div>
            </section>
        </div>
    );
}
