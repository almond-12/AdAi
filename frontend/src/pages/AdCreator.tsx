import { useState } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Brain, Check, ChevronRight, ChevronLeft, Zap, RefreshCw } from 'lucide-react'
import clsx from 'clsx'

const steps = ['Product Info', 'Platform', 'AI Generate', 'Review & Launch']

const mockAds = [
  { headline: 'Transform Your Style Today', body: 'Discover our premium summer collection — crafted for comfort, built for confidence. Shop now and get 20% off your first order.', cta: 'Shop Now' },
  { headline: 'Summer\'s Hottest Deals Are Here', body: 'Don\'t miss out on our limited-time sale. Quality you can feel, prices you\'ll love. Free shipping on orders over $50.', cta: 'Claim Offer' },
  { headline: 'Elevate Every Outfit', body: 'From morning meetings to weekend adventures — our collection fits your life. Loved by 10,000+ happy customers.', cta: 'Explore Now' },
]

export default function AdCreator() {
  const [step, setStep] = useState(0)
  const [generating, setGenerating] = useState(false)
  const [generated, setGenerated] = useState(false)
  const [selectedAd, setSelectedAd] = useState(0)
  const [form, setForm] = useState({ name: '', description: '', url: '', audience: '' })
  const [platforms, setPlatforms] = useState<string[]>([])

  const togglePlatform = (p: string) => {
    setPlatforms(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p])
  }

  const generate = async () => {
    setGenerating(true)
    await new Promise(r => setTimeout(r, 2000))
    setGenerating(false)
    setGenerated(true)
  }

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Create New Ad</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Let AI build your perfect campaign in minutes</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={clsx(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 transition-all',
                i < step ? 'bg-brand-600 text-white' :
                i === step ? 'bg-brand-600 text-white ring-4 ring-brand-600/20' :
                'bg-gray-100 dark:bg-dark-500 text-gray-400'
              )}>
                {i < step ? <Check size={14} /> : i + 1}
              </div>
              <span className={clsx('text-xs font-medium hidden sm:block', i === step ? 'text-brand-600' : 'text-gray-400')}>{s}</span>
              {i < steps.length - 1 && <div className={clsx('flex-1 h-0.5 rounded', i < step ? 'bg-brand-600' : 'bg-gray-100 dark:bg-dark-500')} />}
            </div>
          ))}
        </div>

        <div className="card p-8">
          {/* Step 0: Product Info */}
          {step === 0 && (
            <div className="space-y-5 animate-fade-in">
              <h2 className="font-semibold text-lg">Tell us about your product</h2>
              <div>
                <label className="block text-sm font-medium mb-1.5">Product / Business name</label>
                <input className="input" placeholder="e.g. SummerThreads" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">What are you promoting?</label>
                <textarea className="input h-24 resize-none" placeholder="Describe your product, offer, or service..." value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Landing page URL</label>
                <input className="input" placeholder="https://yoursite.com/offer" value={form.url} onChange={e => setForm({...form, url: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Target audience</label>
                <input className="input" placeholder="e.g. Women 25-40 interested in fashion" value={form.audience} onChange={e => setForm({...form, audience: e.target.value})} />
              </div>
            </div>
          )}

          {/* Step 1: Platform */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="font-semibold text-lg mb-2">Choose platforms</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Select where you want to run your ads</p>
              <div className="grid grid-cols-2 gap-4">
                {[{ id: 'Meta', label: 'Meta Ads', sub: 'Facebook & Instagram', color: 'blue' }, { id: 'TikTok', label: 'TikTok Ads', sub: 'Short-form video', color: 'pink' }].map(p => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => togglePlatform(p.id)}
                    className={clsx(
                      'p-6 rounded-2xl border-2 text-left transition-all',
                      platforms.includes(p.id)
                        ? 'border-brand-500 bg-brand-50 dark:bg-brand-600/10'
                        : 'border-gray-200 dark:border-dark-500 hover:border-gray-300 dark:hover:border-dark-400'
                    )}
                  >
                    <div className={clsx('w-10 h-10 rounded-xl mb-3 flex items-center justify-center font-bold text-white', p.color === 'blue' ? 'bg-blue-500' : 'bg-pink-500')}>
                      {p.id[0]}
                    </div>
                    <div className="font-semibold">{p.label}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{p.sub}</div>
                    {platforms.includes(p.id) && (
                      <div className="mt-3 flex items-center gap-1 text-brand-600 text-xs font-medium">
                        <Check size={12} /> Selected
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: AI Generate */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="font-semibold text-lg mb-2">AI-Generated Ad Copy</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Select your favourite variant or regenerate</p>
              {!generated ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-brand-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Brain size={28} className="text-brand-600" />
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">Click below to generate AI-powered ad copy based on your product info</p>
                  <button onClick={generate} disabled={generating} className="btn-primary flex items-center gap-2 mx-auto">
                    {generating ? (<><RefreshCw size={16} className="animate-spin" /> Generating...</>) : (<><Zap size={16} /> Generate with AI</>)}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {mockAds.map((ad, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedAd(i)}
                      className={clsx(
                        'w-full text-left p-5 rounded-xl border-2 transition-all',
                        selectedAd === i ? 'border-brand-500 bg-brand-50 dark:bg-brand-600/10' : 'border-gray-200 dark:border-dark-500 hover:border-gray-300'
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="font-semibold mb-1">{ad.headline}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{ad.body}</div>
                          <span className="text-xs px-2 py-0.5 bg-brand-600/10 text-brand-600 rounded-full font-medium">{ad.cta}</span>
                        </div>
                        {selectedAd === i && <Check size={18} className="text-brand-600 shrink-0 mt-0.5" />}
                      </div>
                    </button>
                  ))}
                  <button onClick={generate} className="btn-secondary text-sm flex items-center gap-2 mx-auto">
                    <RefreshCw size={14} /> Regenerate
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="font-semibold text-lg mb-6">Review & Launch</h2>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 dark:bg-dark-600 rounded-xl p-4">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Product</p>
                  <p className="font-medium">{form.name || 'My Product'}</p>
                  <p className="text-sm text-gray-500 mt-1">{form.description || 'No description'}</p>
                </div>
                <div className="bg-gray-50 dark:bg-dark-600 rounded-xl p-4">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Platforms</p>
                  <div className="flex gap-2">
                    {platforms.length > 0 ? platforms.map(p => <span key={p} className="px-2 py-0.5 bg-brand-600/10 text-brand-600 text-sm rounded-full font-medium">{p}</span>) : <span className="text-gray-400 text-sm">None selected</span>}
                  </div>
                </div>
                {generated && (
                  <div className="bg-gray-50 dark:bg-dark-600 rounded-xl p-4">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Selected Ad Copy</p>
                    <p className="font-medium mb-1">{mockAds[selectedAd].headline}</p>
                    <p className="text-sm text-gray-500">{mockAds[selectedAd].body}</p>
                  </div>
                )}
              </div>
              <button className="btn-primary w-full py-3 flex items-center justify-center gap-2">
                <Zap size={16} /> Launch Campaign
              </button>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setStep(s => s - 1)}
            disabled={step === 0}
            className="btn-secondary flex items-center gap-2 disabled:opacity-40"
          >
            <ChevronLeft size={16} /> Previous
          </button>
          {step < steps.length - 1 && (
            <button onClick={() => setStep(s => s + 1)} className="btn-primary flex items-center gap-2">
              Next <ChevronRight size={16} />
            </button>
          )}
        </div>
      </div>
    </AppLayout>
  )
}
