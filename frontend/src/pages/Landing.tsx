import Navbar from '../components/layout/Navbar'
import { useNavigate, Link } from 'react-router-dom'
import {
  Zap, Brain, Target, ArrowRight, CheckCircle2,
  Sliders, Star
} from 'lucide-react'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden section-glow">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600/5 via-transparent to-purple-600/5" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(69,72,162,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(69,72,162,0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-600/10 border border-brand-200 dark:border-brand-600/30 text-brand-600 dark:text-brand-400 text-sm font-medium mb-8 animate-fade-in">
            <Zap size={14} />
            AI-Powered Ad Management for Meta & TikTok
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
            Supercharge your ads <span className="gradient-text">with AI</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 animate-slide-up leading-relaxed">
            The smartest way for small businesses to create, run, and optimize campaigns across Meta & TikTok. AI handles the heavy lifting — you just grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button
              onClick={() => navigate('/signup')}
              className="btn-primary flex items-center gap-2 justify-center text-base px-8 py-3.5"
            >
              Get started free <ArrowRight size={16} />
            </button>
            <Link
              to="/how-it-works"
              className="btn-secondary flex items-center gap-2 justify-center text-base px-8 py-3.5"
            >
              See how it works
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-gray-100 dark:border-dark-600 pt-10">
            {[
              ['3.2x', 'Average ROAS boost'],
              ['40%', 'Lower cost per acquisition'],
              ['10k+', 'Campaigns optimized']
            ].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold gradient-text">{val}</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Logos Bar */}
      <section className="py-12 border-y border-gray-100 dark:border-dark-600 bg-gray-50/50 dark:bg-dark-800/30">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">Supported Ad Networks</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Direct authorized API connections with zero middlemen</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-500 shadow-sm">
              <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs">M</div>
              <span className="font-semibold text-sm">Meta Ads</span>
              <span className="text-xs text-gray-400">(Facebook & IG)</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-500 shadow-sm">
              <div className="w-6 h-6 rounded-md bg-pink-600 text-white flex items-center justify-center font-bold text-xs">T</div>
              <span className="font-semibold text-sm">TikTok Ads</span>
              <span className="text-xs text-gray-400">(FYP & Stories)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Teaser */}
      <section className="py-24 px-4 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">Core Capabilities</p>
              <h2 className="text-3xl sm:text-4xl font-bold">Built for business owners who want results</h2>
            </div>
            <Link
              to="/features"
              className="text-brand-600 dark:text-brand-400 font-semibold text-sm flex items-center gap-1.5 hover:underline"
            >
              Explore all features <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 border border-gray-100 dark:border-dark-500 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-brand-600/10 text-brand-600 flex items-center justify-center mb-6">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Copy & Hook Generator</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                Generate high-converting headlines, body copy, and CTA variants trained on millions of winning ad creatives.
              </p>
              <span className="text-xs font-semibold text-brand-600 bg-brand-50 dark:bg-brand-600/10 px-3 py-1.5 rounded-lg">
                Instant variations
              </span>
            </div>

            <div className="card p-8 border border-gray-100 dark:border-dark-500 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">One Dashboard for Meta & TikTok</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                Launch, monitor, and adjust campaigns across Facebook, Instagram, and TikTok without jumping between disjointed tabs.
              </p>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-600/10 px-3 py-1.5 rounded-lg">
                Unified cockpit
              </span>
            </div>

            <div className="card p-8 border border-gray-100 dark:border-dark-500 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/10 text-purple-600 flex items-center justify-center mb-6">
                <Sliders size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Smart ROAS Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                AI continuously monitors conversion trends and auto-reallocates budget to your top performers while pausing fatigue ads.
              </p>
              <span className="text-xs font-semibold text-purple-600 bg-purple-50 dark:bg-purple-600/10 px-3 py-1.5 rounded-lg">
                Autonomous protection
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Teaser */}
      <section className="py-24 px-4 bg-gray-50/50 dark:bg-dark-800/40 border-y border-gray-100 dark:border-dark-600">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">Simplicity First</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Launch profitable ads in 3 steps</h2>
          <p className="text-gray-600 dark:text-gray-400 text-base max-w-xl mx-auto mb-16">
            You don't need agency retainers or technical marketing knowledge. Here is how simple AdAI makes it:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
            <div className="card p-6 border border-gray-100 dark:border-dark-500">
              <span className="text-3xl font-black gradient-text">01</span>
              <h4 className="font-bold text-lg mt-3 mb-2">Connect Accounts</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Link your Meta and TikTok accounts with 1-click OAuth.
              </p>
            </div>
            <div className="card p-6 border border-gray-100 dark:border-dark-500">
              <span className="text-3xl font-black gradient-text">02</span>
              <h4 className="font-bold text-lg mt-3 mb-2">AI Builds The Ad</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Describe what you sell; AI generates audience targeting & high-converting copy.
              </p>
            </div>
            <div className="card p-6 border border-gray-100 dark:border-dark-500">
              <span className="text-3xl font-black gradient-text">03</span>
              <h4 className="font-bold text-lg mt-3 mb-2">Auto-Optimize</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                AI rebalances bids 24/7 to boost ROAS and prevent budget waste.
              </p>
            </div>
          </div>

          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 btn-secondary px-6 py-3 font-medium text-sm"
          >
            Read the full workflow & watch interactive preview <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Social Proof / Testimonial */}
      <section className="py-20 px-4 bg-white dark:bg-dark-900">
        <div className="max-w-4xl mx-auto card p-10 sm:p-12 border border-brand-200 dark:border-brand-600/30 bg-gradient-to-br from-white dark:from-dark-700 to-brand-50/30 dark:to-brand-900/10 text-center relative overflow-hidden">
          <div className="flex justify-center gap-1 text-amber-400 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed mb-6 text-gray-800 dark:text-gray-100">
            "Before AdAI, running Facebook and TikTok ads felt like gambling. Now, the AI drafts the copy, suggests the targeting, and monitors the budget 24/7. Our ROAS went from 1.6x to 3.8x in 30 days."
          </blockquote>
          <div>
            <p className="font-bold text-base text-gray-900 dark:text-white">Marcus Vance</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Founder, Kinetic Apparel Co.</p>
          </div>
        </div>
      </section>

      {/* Pricing Teaser Banner */}
      <section className="py-20 px-4 bg-gray-50/50 dark:bg-dark-800/40 border-t border-gray-100 dark:border-dark-600">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Predictable plans for every business size</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Free forever tier included. Upgrade only when you want autonomous multi-campaign scaling.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/pricing"
              className="btn-primary flex items-center gap-2 px-8 py-3.5 text-base"
            >
              View Pricing & Compare Plans <ArrowRight size={16} />
            </Link>
            <button
              onClick={() => navigate('/signup')}
              className="btn-secondary px-8 py-3.5 text-base"
            >
              Sign up free
            </button>
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="py-16 px-4 bg-brand-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <h2 className="text-3xl font-bold">Ready to turn ad spend into profitable growth?</h2>
          <p className="text-brand-100 text-base max-w-lg mx-auto">
            Join thousands of small business owners scaling Meta and TikTok with AdAI today.
          </p>
          <button
            onClick={() => navigate('/signup')}
            className="bg-white text-brand-700 hover:bg-gray-100 px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg hover:-translate-y-0.5"
          >
            Create Your Free Account
          </button>
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
            <Link to="/login" className="hover:text-gray-900 dark:hover:text-white">Login</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
