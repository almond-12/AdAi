import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Zap, Eye, EyeOff, ArrowRight, Check } from 'lucide-react'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) { setError('Passwords do not match'); return }
    if (!agreed) { setError('Please accept the terms'); return }
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      navigate('/dashboard')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex flex-col justify-between w-[45%] bg-gradient-to-br from-brand-700 to-brand-500 p-12 text-white">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center"><Zap size={16} /></div>
          <span className="font-bold text-xl">AdAI</span>
        </Link>
        <div>
          <h1 className="text-4xl font-bold mb-4">Start growing with AI today</h1>
          <p className="text-white/70 text-lg">No credit card required. Set up in under 2 minutes.</p>
          <div className="mt-10 space-y-4">
            {['Connect Meta & TikTok accounts', 'AI creates your first ad in seconds', 'Track results in real-time'].map(item => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0"><Check size={12} /></div>
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-white/40 text-sm">© 2026 AdAI</p>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 bg-white dark:bg-dark-900">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center"><Zap size={16} className="text-white" /></div>
            <span className="font-bold text-xl">AdAI</span>
          </div>
          <h2 className="text-2xl font-bold mb-1">Create your account</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Free forever. No credit card needed.</p>

          {error && (
            <div className="mb-4 p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-xl text-red-600 dark:text-red-400 text-sm">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Full name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} className="input" placeholder="Jane Smith" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Email address</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="input" placeholder="you@example.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Password</label>
              <div className="relative">
                <input type={showPass ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} className="input pr-10" placeholder="Min 8 characters" required />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" aria-label="Toggle password visibility">{showPass ? <EyeOff size={16} /> : <Eye size={16} />}</button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Confirm password</label>
              <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="input" placeholder="••••••••" required />
            </div>
            <label className="flex items-start gap-2 cursor-pointer text-sm">
              <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-0.5 rounded" />
              <span className="text-gray-600 dark:text-gray-400">I agree to the <a href="#" className="text-brand-600">Terms of Service</a> and <a href="#" className="text-brand-600">Privacy Policy</a></span>
            </label>
            <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2 py-3">
              {loading ? 'Creating account...' : (<>Create account <ArrowRight size={16} /></>)}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-brand-600 hover:text-brand-500 font-medium">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
