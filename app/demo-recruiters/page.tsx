"use client";
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, Zap, Clock, Target, Users, TrendingUp, Calendar, Shield, ArrowRight, FileText, CheckSquare, MessageSquare, Play } from 'lucide-react';
import { useState } from 'react';

const DEMO_URL = 'https://calendly.com/ayesha786khaldoon/discovery-call-hiriq';

export default function DemoRecruiters() {
    const [candidates, setCandidates] = useState(200);
    const [minutesPerResume, setMinutesPerResume] = useState(5);
    const [activeDemo, setActiveDemo] = useState<number | null>(null);

    const totalMinutes = candidates * minutesPerResume;
    const manualReviewHours = totalMinutes / 60;
    const hourlyCost = 50; // Average recruiter hourly rate
    const manualReviewCost = manualReviewHours * hourlyCost;

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

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
                                AI-powered ATS that screens resumes, runs live conversational AI interviews,
                                and gives recruiters scorecards, transcripts, and shortlist evidence.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link href={DEMO_URL} className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-lg flex items-center justify-center">
                                    Book a Demo
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link href={DEMO_URL} className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition font-semibold text-lg text-center">
                                    Schedule Live Demo
                                </Link>
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
                                    src="/product/product-dashboard.webp"
                                    alt="Hiriq recruiter dashboard showing active jobs, candidate pipeline, and AI contribution metrics"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
                                    Recruiter dashboard for active jobs, screening volume, shortlist movement, and AI contribution metrics
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
                                    src="/product/product-dashboard.webp"
                                    alt="Hiriq recruiter dashboard with create job action and live hiring metrics"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 text-center text-sm text-slate-600">
                                    Create jobs from the dashboard and track the full candidate pipeline as applications move
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
                                    src="/product/product-pipeline.webp"
                                    alt="Hiriq candidate pipeline showing resume scores, rejected candidates, shortlisted candidates, and pre-screening stages"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 text-center text-sm text-slate-600">
                                    Pipeline view with uploaded, shortlisted, pre-screening, AI interview, and offer stages
                                </div>
                            </div>
                        </div>

                        {/* Feature 4 - Candidate pre-screening */}
                        <div
                            className={`grid md:grid-cols-2 gap-12 items-center p-8 rounded-2xl transition-all duration-300 ${activeDemo === 4 ? 'bg-yellow-50 shadow-xl' : 'hover:bg-slate-50'
                                }`}
                            onClick={() => setActiveDemo(activeDemo === 4 ? null : 4)}
                        >
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-amber-200 cursor-pointer hover:scale-105 transition-transform">
                                <img
                                    src="/product/product-prescreening-result.webp"
                                    alt="Hiriq pre-screening results modal with pass status, follow-up flag, requirements, and verified responses"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-gradient-to-r from-amber-50 to-cyan-50 text-center text-sm text-slate-600">
                                    Pre-screening results show pass status, follow-up needs, role requirements, and verified responses
                                </div>
                            </div>
                            <div>
                                <div className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                                    Step 4 - Click to Explore
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                    Candidate Pre-Screening Before the Full Interview
                                </h3>
                                <p className="text-lg text-slate-600 mb-6">
                                    Pre-screening handles the practical qualification layer before a deeper AI interview.
                                    Hiriq can collect availability, compensation fit, work setup, must-have requirements,
                                    and knockout-question context so recruiters do not spend interview time on basic mismatches.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Short role-fit questions before the full interview',
                                        'Availability, salary, location, work setup, and must-have requirement checks',
                                        'Clear separation between quick qualification and deeper interview evaluation',
                                        'Recruiter review before candidates move forward',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center text-slate-700">
                                            <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                {activeDemo === 4 && (
                                    <div className="mt-6 p-4 bg-yellow-100 rounded-lg border-2 border-yellow-600">
                                        <p className="text-yellow-900 font-semibold">
                                            Try it: adjust qualification questions before routing candidates into a deeper AI interview.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Feature 5 - Live AI interview engine */}
                        <div
                            className={`grid md:grid-cols-2 gap-12 items-center p-8 rounded-2xl transition-all duration-300 ${activeDemo === 5 ? 'bg-cyan-50 shadow-xl' : 'hover:bg-slate-50'
                                }`}
                            onClick={() => setActiveDemo(activeDemo === 5 ? null : 5)}
                        >
                            <div className="order-2 md:order-1 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 cursor-pointer hover:scale-105 transition-transform">
                                <img
                                    src="/product/product-ai-scorecard.webp"
                                    alt="Hiriq AI interview scorecard with competency breakdown, observed score, and recruiter decision actions"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 text-center text-sm text-slate-600">
                                    AI interview scorecards show competency coverage, evidence quality, and recruiter decision actions
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
                                    Step 5 - Click to Explore
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                    Live Conversational AI Interviews
                                </h3>
                                <p className="text-lg text-slate-600 mb-6">
                                    Hiriq runs structured, 30-minute AI interviews that adapt question by question.
                                    The interview engine probes technical, scenario, behavioral, and industry-specific
                                    depth, then gives recruiters transcripts, subtopic scores, per-turn ratings,
                                    recommendations, and integrity flags for review.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Adaptive follow-up questions based on candidate answers',
                                        'Technical, behavioral, scenario, and industry-specific evaluation',
                                        'Transcript, scorecard, per-turn ratings, and recruiter recommendation',
                                        'Integrity flags for tab switching, copy-paste, focus changes, voices, and multi-face signals',
                                        'Final hiring decisions stay with recruiters and hiring managers'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center text-slate-700">
                                            <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                {activeDemo === 5 && (
                                    <div className="mt-6 p-4 bg-cyan-100 rounded-lg border-2 border-cyan-600">
                                        <p className="text-cyan-900 font-semibold">
                                            Try it: watch the interview evidence build from candidate answers in real time.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Evidence Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            What this demo helps you inspect
                        </h2>
                        <p className="text-xl text-slate-600">
                            Review the core workflow areas before connecting Hiriq to your hiring process.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow">
                            <FileText className="mx-auto mb-4 h-10 w-10 text-blue-600" />
                            <div className="text-slate-900 font-semibold text-lg">Job setup</div>
                            <p className="mt-3 text-sm leading-6 text-slate-600">See how requirements, criteria, and screening focus areas are structured.</p>
                        </div>

                        <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:shadow-xl transition-shadow">
                            <MessageSquare className="mx-auto mb-4 h-10 w-10 text-cyan-600" />
                            <div className="text-slate-900 font-semibold text-lg">Candidate evidence</div>
                            <p className="mt-3 text-sm leading-6 text-slate-600">Review how resumes, pre-screening responses, and interviews become recruiter context.</p>
                        </div>

                        <div className="text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 hover:shadow-xl transition-shadow">
                            <CheckSquare className="mx-auto mb-4 h-10 w-10 text-green-600" />
                            <div className="text-slate-900 font-semibold text-lg">Review workflow</div>
                            <p className="mt-3 text-sm leading-6 text-slate-600">Understand how structured notes and candidate comparisons support human decisions.</p>
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
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                                />
                            </div>
                        </div>

                        {candidates > 0 && minutesPerResume > 0 && (
                            <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 rounded-xl p-8">
                                <div className="grid md:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <div className="text-3xl font-bold text-white mb-2">
                                            {manualReviewHours.toFixed(1)}hrs
                                        </div>
                                        <div className="text-blue-100">Manual review load</div>
                                    </div>

                                    <div>
                                        <div className="text-3xl font-bold text-white mb-2">
                                            ${manualReviewCost.toLocaleString()}
                                        </div>
                                        <div className="text-blue-100">Estimated labor value</div>
                                    </div>

                                    <div>
                                        <div className="text-3xl font-bold text-white mb-2">
                                            {candidates.toLocaleString()}
                                        </div>
                                        <div className="text-blue-100">Candidates entered</div>
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
                        See how Hiriq fits your hiring workflow.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={DEMO_URL} className="px-12 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition text-lg inline-flex items-center justify-center">
                            Book a Demo
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link href="/hiring-platform" className="px-12 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition text-lg">
                            View Full Details
                        </Link>
                    </div>
                    <p className="text-blue-100 mt-6">• Setup in 5 minutes</p>
                </div>
            </section>
            <Footer />
        </div>
    );
}
