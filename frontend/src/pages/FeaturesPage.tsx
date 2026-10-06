import Navbar from '../components/layout/Navbar'
import { useNavigate, Link } from 'react-router-dom'
import {
  Brain, Target, Zap, BarChart3, TrendingUp, Globe,
  ArrowRight, Sparkles, Layers, Sliders, Shield
} from 'lucide-react'

const featureList = [
  {
    icon: Brain,
    title: 'AI Copy & Creative Engine',
    tagline: 'High-converting ad copy in seconds',
    description: 'Trained on tens of thousands of top-performing ad campaigns across Meta and TikTok. AdAI drafts compelling hooks, problem-agitation angles, and punchy calls-to-action tailored to your exact industry.',
    highlights: ['Multi-variant copy generation', 'Tones for B2B, DTC, and local businesses', 'Automated character count & emoji balance']
  },
  {
    icon: Target,
    title: 'Native Meta Ads Integration',
    tagline: 'Direct Facebook & Instagram control',
    description: 'Launch and supervise campaigns across Facebook Feeds, Instagram Reels, and Stories without logging into Ads Manager. Monitor campaign delivery with instant budget controls.',
    highlights: ['Pixel & conversion API support', 'Custom & Lookalike audience synchronization', 'Automated ad fatigue warnings']
  },
  {
    icon: Zap,
    title: 'TikTok For Business Suite',
    tagline: 'Short-form video advertising made simple',
    description: 'Tap into high-intent TikTok shoppers with AI-optimized video hooks, sound suggestions, and trending hashtag insights specifically tuned for the FYP (For You Page).',
    highlights: ['Hashtag & trending audio recommendations', 'TikTok Shop & website conversion tracking', 'Direct creative format testing']
  },
  {
    icon: TrendingUp,
    title: 'Autonomous ROAS Optimizer',
    tagline: '24/7 algorithmic bid & budget reallocation',
    description: 'AdAI constantly checks performance metrics. If an ad starts winning with high ROAS, AdAI automatically shifts budget to capitalize on the momentum while throttling decaying ads.',
    highlights: ['Fatigue detection before CPA spikes', 'Target ROAS bidding algorithms', 'Auto-pause low conversion creatives']
  },
  {
    icon: BarChart3,
    title: 'Cross-Platform Analytics',
    tagline: 'All your numbers in one unified cockpit',
    description: 'Stop opening multiple browser tabs. View your consolidated ad spend, blended ROAS, cost per acquisition (CPA), and click metrics across Meta and TikTok on one clean screen.',
    highlights: ['Blended vs platform-specific ROAS', 'Customizable date ranges & exportable data', 'Interactive visual breakdown charts']
  },
  {
    icon: Shield,
    title: 'Small Business Safeguards',
    tagline: 'Never overspend or waste budget',
    description: 'Built-in circuit breakers prevent accidental spend spikes. Set hard daily spending caps and let our anomaly detection engine ensure every dollar is accounted for.',
    highlights: ['Hard budget stop-loss limits', 'Spike protection alerts', 'Weekly executive summaries via email']
  }
]

export default function FeaturesPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 section-glow text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-600/10 border border-brand-200 dark:border-brand-600/30 text-brand-600 dark:text-brand-400 text-sm font-medium mb-6">
            <Layers size={14} />
            Platform Capabilities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Engineered to make ad management <span className="gradient-text">effortless</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Explore the tools and intelligence built into AdAI that help small businesses compete with enterprise marketing teams.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button onClick={() => navigate('/signup')} className="btn-primary flex items-center gap-2 px-8 py-3.5 text-base">
              Try It Free <ArrowRight size={16} />
            </button>
            <Link to="/how-it-works" className="btn-secondary px-8 py-3.5 text-base">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="card p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-dark-500 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-600/10 dark:bg-brand-600/20 text-brand-600 flex items-center justify-center mb-5">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{f.title}</h3>
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-3">{f.tagline}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{f.description}</p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-dark-600 space-y-2">
                  {f.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300 font-medium">
                      <Sparkles size={12} className="text-brand-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-brand-600 text-white mt-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Start optimizing your campaigns today</h2>
          <p className="text-brand-100 text-lg max-w-xl mx-auto">
            Get started in 2 minutes. Free forever plan available.
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
