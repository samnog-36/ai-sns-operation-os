import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#06234A',
          700: '#123A68',
        },
        teal: {
          600: '#0C8B9A',
          500: '#16A3AF',
        },
        appbg: '#F6F8FB',
        border: '#E5EAF1',
        ink: '#10223E',
        muted: '#637083',
      },
      boxShadow: {
        soft: '0 4px 18px rgba(6,35,74,0.06)',
      },
    },
  },
  plugins: [],
}

export default config
