/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'hw-orange': '#FF6B00',
        'hw-yellow': '#FFD60A',
        'hw-dark': '#0D0D0D',
        'hw-surface': '#1A1A1A',
      },
      boxShadow: {
        'glow-orange': '0 0 20px rgba(255, 107, 0, 0.6)',
        'glow-yellow': '0 0 20px rgba(255, 214, 10, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}
