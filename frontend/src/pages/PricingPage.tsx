import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import { useNavigate, Link } from 'react-router-dom'
import {
  Check, Star, HelpCircle, ArrowRight, ShieldCheck, Zap
} from 'lucide-react'

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)
  const navigate = useNavigate()

  const plans = [
    {
      name: 'Starter',
      badge: 'Free Forever',
      price: '$0',
      period: 'forever',
      description: 'Ideal for early-stage entrepreneurs testing paid social campaigns for the first time.',
      features: [
        'Up to 3 active ad campaigns',
        'Meta (Facebook & Instagram) integration',
        'Basic AI copy generator (50 gens/mo)',
        'Weekly campaign performance digest',
        'Community & email support',
        'Standard conversion metrics'
      ],
      notIncluded: [
        'TikTok Ads integration',
        '24/7 autonomous ROAS optimizer',
        'Custom AI audience persona builder',
        'Dedicated account manager'
      ],
      cta: 'Get Started Free',
      highlight: false
    },
    {
      name: 'Pro',
      badge: 'Most Popular',
      price: annual ? '$39' : '$49',
      period: '/month',
      billedNote: annual ? 'Billed annually ($468/yr)' : 'Billed monthly',
      description: 'For growing e-commerce and local businesses looking to scale return on ad spend automatically.',
      features: [
        'Unlimited active ad campaigns',
        'Both Meta & TikTok ad integrations',
        'Unlimited AI ad copy & headline generation',
        'Autonomous 24/7 ROAS bid optimizer',
        'Real-time live analytics & timeseries charts',
        'Creative fatigue & CPM anomaly alerts',
        'A/B split testing generator',
        'Priority customer support (sub-1hr response)'
      ],
      notIncluded: [
        'Custom fine-tuned brand models',
        'Custom webhook & API integrations'
      ],
      cta: 'Start 14-Day Free Trial',
      highlight: true
    },
    {
      name: 'Enterprise',
      badge: 'Custom Scale',
      price: 'Custom',
      period: '',
      billedNote: 'Tailored to your volume',
      description: 'For high-growth brands and marketing agencies managing multiple high-spend client accounts.',
      features: [
        'Everything in Pro included',
        'Multiple client workspaces & sub-accounts',
        'Custom fine-tuned AI models on your brand voice',
        'Full REST API & webhook webhooks access',
        'Dedicated growth strategist & ad manager',
        'Custom SLA & 99.99% uptime guarantee',
        'White-label dashboard option',
        'Invoice & wire payment terms'
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      highlight: false
    }
  ]

  const faqs = [
    {
      q: 'Do I get charged during the 14-day Pro trial?',
      a: 'No. You get complete access to all Pro features for 14 days without any charge. You can cancel at any time with a single click in your settings.'
    },
    {
      q: 'Does the subscription fee cover my advertising spend on Meta or TikTok?',
      a: 'No. AdAI is the intelligence and campaign management software. You pay your ad budget directly to Meta and TikTok without any middleman markup or percentage fees from us.'
    },
    {
      q: 'Can I switch between monthly and annual billing?',
      a: 'Yes. You can switch plans or billing cycles whenever you like from your Settings > Billing panel.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit and debit cards (Visa, Mastercard, American Express) and Apple Pay via Stripe.'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 section-glow text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-600/10 border border-brand-200 dark:border-brand-600/30 text-brand-600 dark:text-brand-400 text-sm font-medium mb-6">
            <Zap size={14} />
            Predictable Pricing
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Transparent plans for <span className="gradient-text">every stage of growth</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Start completely free or unlock autonomous AI optimization with our Pro plan. No hidden fees or ad spend percentages.
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center gap-4 bg-gray-100 dark:bg-dark-700 p-1.5 rounded-2xl mb-8 border border-gray-200 dark:border-dark-600">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                !annual ? 'bg-white dark:bg-dark-600 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-all ${
                annual ? 'bg-white dark:bg-dark-600 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-brand-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`card p-8 flex flex-col justify-between relative transition-all duration-300 ${
                p.highlight
                  ? 'border-2 border-brand-500 dark:border-brand-500 shadow-2xl shadow-brand-600/15 lg:-translate-y-2'
                  : 'border border-gray-100 dark:border-dark-500'
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-600 text-white text-xs font-semibold rounded-full flex items-center gap-1.5 shadow-md">
                  <Star size={12} /> {p.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  {!p.highlight && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-300 font-medium">
                      {p.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {p.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black tracking-tight">{p.price}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{p.period}</span>
                  </div>
                  {p.billedNote && (
                    <p className="text-xs text-brand-600 dark:text-brand-400 mt-1 font-medium">{p.billedNote}</p>
                  )}
                </div>

                <hr className="border-gray-100 dark:border-dark-600 mb-6" />

                <div className="space-y-3.5 mb-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Included features:</p>
                  {p.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-sm">
                      <Check size={16} className="text-brand-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{feat}</span>
                    </div>
                  ))}

                  {p.notIncluded.length > 0 && (
                    <div className="pt-2 space-y-2.5 opacity-40">
                      {p.notIncluded.map((nFeat) => (
                        <div key={nFeat} className="flex items-start gap-2.5 text-sm line-through">
                          <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0">✕</span>
                          <span>{nFeat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <button
                  onClick={() => navigate('/signup')}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                    p.highlight ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  {p.cta} <ArrowRight size={15} />
                </button>
                <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
                  <ShieldCheck size={12} /> No contract • Cancel anytime
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-gray-50/50 dark:bg-dark-800/40 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">Frequently Asked Pricing Questions</h2>
            <p className="text-gray-600 dark:text-gray-400 text-base">Have questions? We have answers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((f, i) => (
              <div key={i} className="card p-6 border border-gray-100 dark:border-dark-500">
                <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                  <HelpCircle size={18} className="text-brand-600 shrink-0" />
                  {f.q}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-6">
                  {f.a}
                </p>
              </div>
            ))}
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
