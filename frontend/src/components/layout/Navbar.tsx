import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Sun, Moon, Zap, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import clsx from 'clsx'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const navLinks = [
    { label: 'Features', to: '/features' },
    { label: 'How it works', to: '/how-it-works' },
    { label: 'Pricing', to: '/pricing' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 dark:border-dark-500 bg-white/80 dark:bg-dark-900/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center group-hover:bg-brand-500 transition-colors shadow-sm">
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">AdAI</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={clsx(
                  'text-sm font-medium transition-colors',
                  location.pathname === link.to
                    ? 'text-brand-600 dark:text-brand-400 font-semibold'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => navigate('/login')}
              className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              Log in
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="hidden md:block btn-primary text-sm"
            >
              Get started
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-600"
              aria-label="Open menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 dark:border-dark-500 py-4 space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={clsx(
                  'block text-sm px-2 py-1.5 transition-colors',
                  location.pathname === link.to
                    ? 'text-brand-600 dark:text-brand-400 font-semibold'
                    : 'text-gray-600 dark:text-gray-400'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => { setMenuOpen(false); navigate('/login'); }}
                className="btn-secondary text-sm flex-1"
              >
                Log in
              </button>
              <button
                onClick={() => { setMenuOpen(false); navigate('/signup'); }}
                className="btn-primary text-sm flex-1"
              >
                Get started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
