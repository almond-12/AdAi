/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef0ff',
          100: '#e0e3ff',
          200: '#c7cbff',
          300: '#a5a9ff',
          400: '#817dff',
          500: '#6357fa',
          600: '#4548a2',
          700: '#3a3d8a',
          800: '#303370',
          900: '#2a2d5e',
        },
        dark: {
          900: '#030303',
          800: '#0d0d0d',
          700: '#161616',
          600: '#1e1e1e',
          500: '#282828',
          400: '#3a3a3a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
