import { useState } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Eye, MousePointerClick, TrendingUp, DollarSign, ShoppingCart, BarChart2 } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts'

const timeRanges = ['7d', '30d', '90d']

const lineData = [
  { date: 'Oct 1', Meta: 12000, TikTok: 8000 },
  { date: 'Oct 2', Meta: 15000, TikTok: 11000 },
  { date: 'Oct 3', Meta: 13000, TikTok: 9500 },
  { date: 'Oct 4', Meta: 18000, TikTok: 14000 },
  { date: 'Oct 5', Meta: 21000, TikTok: 16000 },
  { date: 'Oct 6', Meta: 19000, TikTok: 13000 },
  { date: 'Oct 7', Meta: 24000, TikTok: 18000 },
]

const barData = [
  { metric: 'Impressions', Meta: 84000, TikTok: 62000 },
  { metric: 'Clicks', Meta: 3800, TikTok: 2900 },
  { metric: 'Conversions', Meta: 420, TikTok: 280 },
]

const campaigns = [
  { name: 'Summer Sale - Shoes', platform: 'Meta', impressions: '48,200', clicks: '2,100', ctr: '4.36%', cpc: '$0.42', conversions: '210', roas: '3.8x' },
  { name: 'Brand Awareness Q4', platform: 'TikTok', impressions: '36,000', clicks: '1,800', ctr: '5.0%', cpc: '$0.38', conversions: '140', roas: '2.4x' },
  { name: 'Retargeting - Cart', platform: 'Meta', impressions: '12,400', clicks: '980', ctr: '7.9%', cpc: '$0.28', conversions: '210', roas: '5.1x' },
]

const kpis = [
  { label: 'Impressions', value: '284K', icon: Eye },
  { label: 'Clicks', value: '12.4K', icon: MousePointerClick },
  { label: 'Avg CTR', value: '4.7%', icon: TrendingUp },
  { label: 'Avg CPC', value: '$0.36', icon: DollarSign },
  { label: 'Conversions', value: '980', icon: ShoppingCart },
  { label: 'Avg ROAS', value: '3.2x', icon: BarChart2 },
]

export default function Analytics() {
  const [range, setRange] = useState('7d')

  return (
    <AppLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Track performance across all your campaigns</p>
        </div>
        <div className="flex gap-1 bg-gray-100 dark:bg-dark-700 rounded-xl p-1">
          {timeRanges.map(r => (
            <button key={r} onClick={() => setRange(r)} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
              range === r ? 'bg-white dark:bg-dark-500 shadow text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
            }`}>{r}</button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {kpis.map(({ label, value, icon: Icon }) => (
          <div key={label} className="card p-4 text-center">
            <Icon size={18} className="text-brand-600 mx-auto mb-2" />
            <div className="text-xl font-bold">{value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="card p-6">
          <h2 className="font-semibold mb-4">Impressions Over Time</h2>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(156,163,175,0.2)" />
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} />
              <Tooltip contentStyle={{ backgroundColor: '#1e1e1e', border: 'none', borderRadius: '12px', fontSize: '12px' }} />
              <Legend />
              <Line type="monotone" dataKey="Meta" stroke="#4548a2" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="TikTok" stroke="#ec4899" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold mb-4">Meta vs TikTok</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(156,163,175,0.2)" />
              <XAxis dataKey="metric" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} />
              <Tooltip contentStyle={{ backgroundColor: '#1e1e1e', border: 'none', borderRadius: '12px', fontSize: '12px' }} />
              <Legend />
              <Bar dataKey="Meta" fill="#4548a2" radius={[4, 4, 0, 0]} />
              <Bar dataKey="TikTok" fill="#ec4899" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="font-semibold mb-4">Campaign Breakdown</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-dark-500">
                {['Campaign', 'Platform', 'Impressions', 'Clicks', 'CTR', 'CPC', 'Conversions', 'ROAS'].map(h => (
                  <th key={h} className="pb-3 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-dark-600">
              {campaigns.map(c => (
                <tr key={c.name} className="hover:bg-gray-50 dark:hover:bg-dark-600/50">
                  <td className="py-3 font-medium">{c.name}</td>
                  <td className="py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${ c.platform === 'Meta' ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400' : 'bg-pink-100 dark:bg-pink-500/20 text-pink-700 dark:text-pink-400'}`}>{c.platform}</span></td>
                  <td className="py-3">{c.impressions}</td>
                  <td className="py-3">{c.clicks}</td>
                  <td className="py-3">{c.ctr}</td>
                  <td className="py-3">{c.cpc}</td>
                  <td className="py-3">{c.conversions}</td>
                  <td className="py-3 font-medium text-brand-600">{c.roas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  )
}
