import AppLayout from '../components/layout/AppLayout'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { TrendingUp, TrendingDown, DollarSign, Eye, MousePointerClick, Zap, ArrowRight, Brain, AlertCircle } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const spendData = [
  { day: 'Mon', spend: 240, roas: 2.8 }, { day: 'Tue', spend: 380, roas: 3.1 },
  { day: 'Wed', spend: 310, roas: 2.9 }, { day: 'Thu', spend: 490, roas: 3.4 },
  { day: 'Fri', spend: 520, roas: 3.6 }, { day: 'Sat', spend: 410, roas: 3.2 },
  { day: 'Sun', spend: 460, roas: 3.5 },
]

const campaigns = [
  { name: 'Summer Sale - Shoes', platform: 'Meta', status: 'Active', spend: '$1,240', roas: '3.8x' },
  { name: 'Brand Awareness Q4', platform: 'TikTok', status: 'Active', spend: '$860', roas: '2.4x' },
  { name: 'Retargeting - Cart', platform: 'Meta', status: 'Paused', spend: '$320', roas: '5.1x' },
  { name: 'New Product Launch', platform: 'TikTok', status: 'Draft', spend: '$0', roas: '-' },
]

const insights = [
  { type: 'tip', text: 'Increase budget on "Summer Sale - Shoes" — ROAS is 3.8x, above your 3x target.' },
  { type: 'warning', text: '"Brand Awareness Q4" CPM is 22% above benchmark. Consider refreshing creatives.' },
  { type: 'tip', text: 'Best time to publish TikTok ads: 6–9pm based on your audience data.' },
  { type: 'tip', text: 'Retargeting campaign has highest ROAS. Consider scaling the budget by 20%.' },
]

const kpis = [
  { label: 'Total Spend', value: '$4,280', change: '+12%', up: true, icon: DollarSign },
  { label: 'Impressions', value: '284K', change: '+8%', up: true, icon: Eye },
  { label: 'Clicks', value: '12.4K', change: '-3%', up: false, icon: MousePointerClick },
  { label: 'Avg. ROAS', value: '3.2x', change: '+0.4x', up: true, icon: TrendingUp },
]

export default function Dashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()

  return (
    <AppLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Good morning, {user?.name?.split(' ')[0] || 'User'} 👋</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <button onClick={() => navigate('/create')} className="btn-primary flex items-center gap-2">
          <Zap size={16} /> Create new ad
        </button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpis.map(({ label, value, change, up, icon: Icon }) => (
          <div key={label} className="card p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
              <div className="w-8 h-8 bg-brand-600/10 rounded-lg flex items-center justify-center">
                <Icon size={16} className="text-brand-600" />
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">{value}</div>
            <div className={`flex items-center gap-1 text-xs font-medium ${up ? 'text-green-600' : 'text-red-500'}`}>
              {up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {change} vs last week
            </div>
          </div>
        ))}
      </div>

      {/* Chart + Insights */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 card p-6">
          <h2 className="font-semibold mb-4">Spend Overview</h2>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={spendData}>
              <defs>
                <linearGradient id="spendGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4548a2" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#4548a2" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
              <Tooltip contentStyle={{ backgroundColor: '#1e1e1e', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '12px' }} />
              <Area type="monotone" dataKey="spend" stroke="#4548a2" strokeWidth={2} fill="url(#spendGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Brain size={18} className="text-brand-600" />
            <h2 className="font-semibold">AI Insights</h2>
          </div>
          <div className="space-y-3">
            {insights.map((insight, i) => (
              <div key={i} className={`p-3 rounded-xl text-sm leading-relaxed ${
                insight.type === 'warning'
                  ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400'
                  : 'bg-brand-50 dark:bg-brand-600/10 text-brand-700 dark:text-brand-400'
              }`}>
                <div className="flex items-start gap-2">
                  {insight.type === 'warning' ? <AlertCircle size={14} className="shrink-0 mt-0.5" /> : <Zap size={14} className="shrink-0 mt-0.5" />}
                  {insight.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campaigns Table */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">Recent Campaigns</h2>
          <button onClick={() => navigate('/analytics')} className="text-sm text-brand-600 hover:text-brand-500 flex items-center gap-1">View all <ArrowRight size={14} /></button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-dark-500">
                <th className="pb-3 font-medium">Campaign</th>
                <th className="pb-3 font-medium">Platform</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Spend</th>
                <th className="pb-3 font-medium text-right">ROAS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-dark-600">
              {campaigns.map(c => (
                <tr key={c.name} className="hover:bg-gray-50 dark:hover:bg-dark-600/50 transition-colors">
                  <td className="py-3 font-medium">{c.name}</td>
                  <td className="py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      c.platform === 'Meta' ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400' : 'bg-pink-100 dark:bg-pink-500/20 text-pink-700 dark:text-pink-400'
                    }`}>{c.platform}</span>
                  </td>
                  <td className="py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      c.status === 'Active' ? 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400' :
                      c.status === 'Paused' ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400' :
                      'bg-gray-100 dark:bg-dark-500 text-gray-600 dark:text-gray-400'
                    }`}>{c.status}</span>
                  </td>
                  <td className="py-3 text-right font-medium">{c.spend}</td>
                  <td className="py-3 text-right font-medium text-brand-600">{c.roas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  )
}
