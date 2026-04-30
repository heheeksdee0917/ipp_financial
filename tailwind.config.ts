import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          light: '#1A2F45',
        },
        slate: {
          DEFAULT: '#4A5568',
          light: '#9AA5B4',
        },
        red: {
          DEFAULT: '#C41E3A',
          hover: '#A01830',
        },
        cream: {
          DEFAULT: '#F8F7F4',
          white: '#FFFFFF',
        },
        border: '#E2E8F0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-hero': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1.2s ease-out forwards',
        'fade-in-hero': 'fade-in-hero 1s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
