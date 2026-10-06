import Navbar from '../components/layout/Navbar'
import { useNavigate, Link } from 'react-router-dom'
import {
  Zap, ArrowRight, CheckCircle2, Sliders, Brain,
  Sparkles, BarChart3, RefreshCw, ChevronRight, HelpCircle
} from 'lucide-react'

const steps = [
  {
    number: '01',
    badge: 'Connect',
    title: 'Link Your Ad Accounts in 60 Seconds',
    description:
      'Connect your Meta (Facebook & Instagram) and TikTok Business accounts with secure OAuth 2.0 authorization. No API keys or technical setup required.',
    details: [
      'One-click OAuth authentication for Meta & TikTok',
      'Instant sync of ad historical performance & pixel data',
      'Bank-grade encrypted token storage',
      'Supports multiple ad accounts and client workspaces'
    ],
    highlight: 'Zero code required'
  },
  {
    number: '02',
    badge: 'AI Generation',
    title: 'AI Generates High-Converting Copy & Creative Prompts',
    description:
      'Tell AdAI about your product, your offer, and your target audience. Our advertising-tuned models generate high-performing headlines, body copy, and creative formats tailored specifically for Meta feeds and TikTok short-form video.',
    details: [
      'Tailored ad hooks tuned for short attention spans',
      'Audience-specific tone customization (Direct, Casual, Bold)',
      'Automated A/B copy variant generator',
      'Compliant with Meta & TikTok advertising guidelines'
    ],
    highlight: 'Over 50+ variations in seconds'
  },
  {
    number: '03',
    badge: 'One-Click Launch',
    title: 'Review, Customize, and Launch Directly',
    description:
      'Preview how your ads will appear live across Instagram Stories, Facebook Feeds, and TikTok FYP. Select your favorite variants, set your budget, and publish instantly without leaving AdAI.',
    details: [
      'Live responsive previews for Mobile Feed and Stories',
      'Flexible daily or lifetime budget allocation',
      'Smart demographic and interest targeting presets',
      'Schedule campaign launch dates or publish immediately'
    ],
    highlight: 'Unified cross-platform publish'
  },
  {
    number: '04',
    badge: 'Autonomous Optimization',
    title: '24/7 AI Monitoring & Smart ROAS Scaling',
    description:
      'AdAI does not sleep. It continuously monitors cost per click (CPC), click-through rate (CTR), and return on ad spend (ROAS). If an ad is underperforming, it recommends adjustments or pauses spend to preserve your budget.',
    details: [
      'Automated fatigue detection before ad performance dips',
      'Real-time budget reallocation to your winning ads',
      'Daily AI strategy tips and actionable recommendations',
      'Automated bid adjustments to capture highest intent buyers'
    ],
    highlight: 'Average 3.2x ROAS boost'
  }
]

const faqs = [
  {
    q: 'Do I need experience running Meta or TikTok ads?',
    a: 'Not at all. AdAI is built specifically for small business owners and creators who do not have dedicated marketing teams. The AI handles audience matching, copy creation, and budget pacing for you.'
  },
  {
    q: 'Can I edit the ad copy before it goes live?',
    a: 'Yes, 100%. AdAI provides generated options, but you retain full creative control to edit words, tweak calls-to-action, or regenerate variants at any time.'
  },
  {
    q: 'Does AdAI take a percentage of my ad spend?',
    a: 'No. You pay directly to Meta and TikTok for your ad spend. AdAI operates on a flat subscription with no hidden ad-spend percentage cuts.'
  },
  {
    q: 'Can I connect multiple accounts?',
    a: 'Yes! You can connect separate Meta and TikTok accounts and switch between them seamlessly in your dashboard.'
  }
]

export default function HowItWorks() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 section-glow overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-600/10 border border-brand-200 dark:border-brand-600/30 text-brand-600 dark:text-brand-400 text-sm font-medium mb-6 animate-fade-in">
            <Sliders size={14} />
            The Step-by-Step Workflow
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            How AdAI turns ad spend into <span className="gradient-text">predictable revenue</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            From connecting your first social profile to automated campaign scaling. Here is exactly how our AI engine powers your growth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button onClick={() => navigate('/signup')} className="btn-primary flex items-center gap-2 px-8 py-3.5 text-base">
              Start Free Trial <ArrowRight size={16} />
            </button>
            <Link to="/pricing" className="btn-secondary px-8 py-3.5 text-base">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Step by Step Breakdown */}
      <section className="py-20 px-4 bg-gray-50/50 dark:bg-dark-800/40">
        <div className="max-w-6xl mx-auto space-y-20">
          {steps.map((s, index) => (
            <div
              key={s.number}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Left Column: Text Info */}
              <div className="flex-1 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-extrabold gradient-text tracking-wider">{s.number}</span>
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-brand-100 dark:bg-brand-600/20 text-brand-700 dark:text-brand-300">
                    {s.badge}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                  {s.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {s.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {s.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 size={16} className="text-brand-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10 px-3 py-1.5 rounded-lg border border-brand-200 dark:border-brand-500/20">
                    <Sparkles size={13} /> {s.highlight}
                  </span>
                </div>
              </div>

              {/* Right Column: Interactive Visual Showcase */}
              <div className="flex-1 w-full">
                <div className="card p-6 sm:p-8 bg-gradient-to-br from-white dark:from-dark-700 to-gray-50 dark:to-dark-800 shadow-xl border border-gray-100 dark:border-dark-500 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 dark:border-dark-600">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                      <span className="text-xs text-gray-400 ml-2 font-mono">AdAI Workflow // Stage {s.number}</span>
                    </div>
                    <span className="text-xs text-brand-600 dark:text-brand-400 font-semibold">{s.badge}</span>
                  </div>

                  {index === 0 && (
                    <div className="space-y-4 py-4">
                      <div className="flex items-center justify-between p-4 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">M</div>
                          <div>
                            <p className="font-semibold text-sm">Meta Business Suite</p>
                            <p className="text-xs text-gray-500">Facebook & Instagram Ads</p>
                          </div>
                        </div>
                        <span className="text-xs font-medium px-2.5 py-1 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300 rounded-full flex items-center gap-1">
                          <CheckCircle2 size={12} /> Connected
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-xl bg-pink-50 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/20">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-pink-600 text-white flex items-center justify-center font-bold">T</div>
                          <div>
                            <p className="font-semibold text-sm">TikTok For Business</p>
                            <p className="text-xs text-gray-500">TikTok FYP Campaigns</p>
                          </div>
                        </div>
                        <span className="text-xs font-medium px-2.5 py-1 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300 rounded-full flex items-center gap-1">
                          <CheckCircle2 size={12} /> Connected
                        </span>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="space-y-3 py-2">
                      <div className="p-4 rounded-xl bg-gray-50 dark:bg-dark-600 border border-gray-100 dark:border-dark-500">
                        <div className="flex items-center gap-2 text-xs font-semibold text-brand-600 dark:text-brand-400 mb-1">
                          <Brain size={14} /> AI Analysis Result
                        </div>
                        <p className="text-sm font-semibold mb-1">"Stop scrolling, start growing today."</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Targeted towards: e-Commerce founders seeking higher conversion.</p>
                      </div>
                      <div className="p-3 rounded-lg bg-brand-50 dark:bg-brand-600/10 text-xs text-brand-700 dark:text-brand-300 flex items-center gap-2">
                        <Sparkles size={14} /> 3 variations generated based on customer psychographics
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="space-y-3 py-2">
                      <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                        <span>Campaign Budget: $50/day</span>
                        <span className="text-brand-600 font-semibold">Dual Platform Active</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-600 rounded-full w-4/5" />
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-300 text-xs rounded-xl flex items-center gap-2">
                        <CheckCircle2 size={14} /> Ready to launch across Meta & TikTok in 1 click
                      </div>
                    </div>
                  )}

                  {index === 3 && (
                    <div className="space-y-3 py-2">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-gray-50 dark:bg-dark-600 rounded-xl">
                          <p className="text-xs text-gray-400">Current ROAS</p>
                          <p className="text-xl font-bold text-brand-600">3.8x</p>
                        </div>
                        <div className="p-3 bg-gray-50 dark:bg-dark-600 rounded-xl">
                          <p className="text-xs text-gray-400">Cost per Lead</p>
                          <p className="text-xl font-bold text-green-600">-34%</p>
                        </div>
                      </div>
                      <div className="p-3 bg-brand-50 dark:bg-brand-600/10 text-brand-700 dark:text-brand-300 text-xs rounded-xl flex items-center gap-2">
                        <RefreshCw size={14} className="animate-spin" /> Autonomous bid re-balancing running 24/7
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400 text-base">Everything you need to know about how AdAI operates</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="card p-6 border border-gray-100 dark:border-dark-500">
                <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                  <HelpCircle size={18} className="text-brand-600 shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 px-4 bg-brand-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to see it in action?</h2>
          <p className="text-brand-100 text-lg max-w-xl mx-auto">
            Set up your account in under 2 minutes and let AI start optimizing your ads today.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => navigate('/signup')}
              className="bg-white text-brand-700 hover:bg-gray-100 px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg hover:-translate-y-0.5"
            >
              Get Started Free
            </button>
            <Link
              to="/pricing"
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-3.5 rounded-xl font-semibold transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-100 dark:border-dark-500 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-brand-600 rounded-lg flex items-center justify-center">
              <Zap size={14} className="text-white" />
            </div>
            <span className="font-bold text-gray-900 dark:text-white">AdAI</span>
          </Link>
          <p className="text-sm text-gray-500">© 2026 AdAI. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/features" className="hover:text-gray-900 dark:hover:text-white">Features</Link>
            <Link to="/how-it-works" className="hover:text-gray-900 dark:hover:text-white">How it works</Link>
            <Link to="/pricing" className="hover:text-gray-900 dark:hover:text-white">Pricing</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
