import { useState } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { useAuth } from '../context/AuthContext'
import { User, Link2, Bell, CreditCard, Check, ExternalLink } from 'lucide-react'
import clsx from 'clsx'

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'integrations', label: 'Integrations', icon: Link2 },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'billing', label: 'Billing', icon: CreditCard },
]

export default function Settings() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('profile')
  const [notifications, setNotifications] = useState({ reports: true, alerts: true, billing: false })
  const [connections, setConnections] = useState<Record<string, boolean>>({ meta: false, tiktok: false, ga: false })

  return (
    <AppLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Manage your account and integrations</p>
      </div>

      <div className="flex gap-6 flex-col lg:flex-row">
        {/* Tab list */}
        <aside className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible w-full lg:w-48 shrink-0">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={clsx(
                'flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap',
                activeTab === id ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-600'
              )}
            >
              <Icon size={16} />{label}
            </button>
          ))}
        </aside>

        <div className="flex-1 card p-8 animate-fade-in">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="font-semibold text-lg">Profile Information</h2>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center text-white text-2xl font-bold">{user?.name?.charAt(0) || 'U'}</div>
                <div>
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                  <button className="text-xs text-brand-600 mt-1 hover:text-brand-500">Change avatar</button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1.5">Full name</label><input className="input" defaultValue={user?.name} /></div>
                <div><label className="block text-sm font-medium mb-1.5">Email</label><input className="input" defaultValue={user?.email} /></div>
                <div><label className="block text-sm font-medium mb-1.5">Company</label><input className="input" placeholder="Your company name" /></div>
                <div><label className="block text-sm font-medium mb-1.5">Website</label><input className="input" placeholder="https://yoursite.com" /></div>
              </div>
              <button className="btn-primary">Save changes</button>
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="space-y-6">
              <h2 className="font-semibold text-lg">Connected Platforms</h2>
              {[
                { id: 'meta', name: 'Meta Ads', sub: 'Facebook & Instagram campaigns', color: 'bg-blue-500' },
                { id: 'tiktok', name: 'TikTok Ads', sub: 'TikTok For Business', color: 'bg-pink-500' },
                { id: 'ga', name: 'Google Analytics', sub: 'Track website conversions', color: 'bg-orange-500' },
              ].map(p => (
                <div key={p.id} className="flex items-center justify-between p-5 bg-gray-50 dark:bg-dark-700 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 ${p.color} rounded-xl flex items-center justify-center text-white font-bold text-sm`}>{p.name[0]}</div>
                    <div>
                      <p className="font-medium">{p.name}</p>
                      <p className="text-sm text-gray-500">{p.sub}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {connections[p.id] && <span className="flex items-center gap-1 text-green-600 text-xs font-medium"><Check size={12} /> Connected</span>}
                    <button
                      type="button"
                      onClick={() => setConnections(c => ({...c, [p.id]: !c[p.id]}))}
                      className={connections[p.id] ? 'btn-secondary text-sm' : 'btn-primary text-sm flex items-center gap-1'}
                    >
                      {connections[p.id] ? 'Disconnect' : (<><ExternalLink size={14} /> Connect</>)}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h2 className="font-semibold text-lg">Notification Preferences</h2>
              {[
                { id: 'reports' as const, title: 'Campaign Reports', desc: 'Weekly summary of all your active campaigns' },
                { id: 'alerts' as const, title: 'AI Alerts', desc: 'Real-time alerts when AI detects optimization opportunities' },
                { id: 'billing' as const, title: 'Billing Updates', desc: 'Invoices, payment reminders, and plan changes' },
              ].map(n => (
                <div key={n.id} className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-dark-500 last:border-0">
                  <div>
                    <p className="font-medium">{n.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{n.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setNotifications(p => ({...p, [n.id]: !p[n.id]}))}
                    className={`relative w-11 h-6 rounded-full transition-all duration-200 ${notifications[n.id] ? 'bg-brand-600' : 'bg-gray-200 dark:bg-dark-500'}`}
                    aria-label={`Toggle ${n.title}`}
                  >
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${notifications[n.id] ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-6">
              <h2 className="font-semibold text-lg">Billing & Plan</h2>
              <div className="p-6 bg-gradient-to-br from-brand-600/10 to-purple-600/10 border border-brand-200 dark:border-brand-600/30 rounded-2xl">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium text-brand-600 uppercase tracking-wide">Current Plan</p>
                    <p className="text-2xl font-bold mt-1">Starter</p>
                    <p className="text-gray-500 text-sm mt-1">Free forever • 5 active campaigns</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">Active</span>
                </div>
                <button className="btn-primary mt-6 flex items-center gap-2">Upgrade to Pro — $39/mo</button>
              </div>
              <div>
                <h3 className="font-medium mb-3">Usage this month</h3>
                {[['Campaigns', '3 / 5'], ['AI generations', '12 / 50'], ['Platforms', '1 / 2']].map(([label, val]) => (
                  <div key={label} className="flex justify-between py-2 text-sm border-b border-gray-100 dark:border-dark-500 last:border-0">
                    <span className="text-gray-600 dark:text-gray-400">{label}</span>
                    <span className="font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}
