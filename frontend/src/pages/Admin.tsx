import AppLayout from '../components/layout/AppLayout'
import { Users, DollarSign, BarChart3, Activity, Shield, CheckCircle, AlertCircle } from 'lucide-react'

const users = [
  { name: 'Sarah K.', email: 'sarah@growfast.com', plan: 'Pro', campaigns: 8, status: 'Active' },
  { name: 'James L.', email: 'james@techstartup.io', plan: 'Starter', campaigns: 3, status: 'Active' },
  { name: 'Maria R.', email: 'maria@boutique.co', plan: 'Pro', campaigns: 12, status: 'Active' },
  { name: 'David C.', email: 'david@shop.com', plan: 'Starter', campaigns: 1, status: 'Suspended' },
  { name: 'Emma W.', email: 'emma@brand.co', plan: 'Enterprise', campaigns: 34, status: 'Active' },
]

const activity = [
  { text: 'Sarah K. launched a new Meta campaign', time: '2 min ago' },
  { text: 'New user signup: james@techstartup.io', time: '18 min ago' },
  { text: 'Maria R. upgraded to Pro plan', time: '1 hr ago' },
  { text: 'AI optimized 4 campaigns automatically', time: '2 hr ago' },
  { text: 'TikTok API sync completed successfully', time: '3 hr ago' },
]

export default function Admin() {
  return (
    <AppLayout>
      <div className="flex items-center gap-3 mb-8">
        <Shield size={22} className="text-brand-600" />
        <div>
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Platform overview and user management</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Users', value: '1,284', icon: Users },
          { label: 'Pro Plans', value: '342', icon: DollarSign },
          { label: 'Monthly Revenue', value: '$16.7K', icon: BarChart3 },
          { label: 'Active Campaigns', value: '4,821', icon: Activity }
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="card p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">{label}</span>
              <Icon size={16} className="text-brand-600" />
            </div>
            <div className="text-2xl font-bold">{value}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card p-6">
          <h2 className="font-semibold mb-4">User Management</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-dark-500">
                  {['User', 'Plan', 'Campaigns', 'Status', 'Action'].map(h => <th key={h} className="pb-3 font-medium">{h}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-dark-600">
                {users.map(u => (
                  <tr key={u.email} className="hover:bg-gray-50 dark:hover:bg-dark-600/50">
                    <td className="py-3">
                      <div className="font-medium">{u.name}</div>
                      <div className="text-xs text-gray-400">{u.email}</div>
                    </td>
                    <td className="py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        u.plan === 'Enterprise' ? 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400' :
                        u.plan === 'Pro' ? 'bg-brand-100 dark:bg-brand-600/20 text-brand-700 dark:text-brand-400' :
                        'bg-gray-100 dark:bg-dark-500 text-gray-600'
                      }`}>{u.plan}</span>
                    </td>
                    <td className="py-3">{u.campaigns}</td>
                    <td className="py-3">
                      <span className={`flex items-center gap-1 text-xs font-medium ${ u.status === 'Active' ? 'text-green-600' : 'text-red-500'}`}>
                        {u.status === 'Active' ? <CheckCircle size={12} /> : <AlertCircle size={12} />}{u.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="text-xs text-red-500 hover:text-red-600 font-medium">{u.status === 'Active' ? 'Suspend' : 'Activate'}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="font-semibold mb-4">Platform Health</h2>
            <div className="space-y-3">
              {[
                { name: 'Meta API', ok: true },
                { name: 'TikTok API', ok: true },
                { name: 'AI Service', ok: true },
                { name: 'Database', ok: true },
                { name: 'Email Service', ok: false }
              ].map(s => (
                <div key={s.name} className="flex items-center justify-between">
                  <span className="text-sm">{s.name}</span>
                  <span className={`flex items-center gap-1 text-xs font-medium ${s.ok ? 'text-green-600' : 'text-red-500'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${s.ok ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
                    {s.ok ? 'Operational' : 'Degraded'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h2 className="font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {activity.map((a, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2 shrink-0" />
                  <div>
                    <p className="text-sm leading-snug">{a.text}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
