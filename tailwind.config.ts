import { type Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#d4e1f7', 200: '#a8c3ef', 300: '#7ca5e8', 400: '#5087e0',
          500: '#2569d9', 600: '#0047ab', 700: '#003a8d', 800: '#002c6f', 900: '#001f51',
        },
        secondary: {
          100: '#fbe8b8', 200: '#f8d072', 300: '#f6b92b', 400: '#d6a017',
          500: '#b58712', 600: '#efbf04', 700: '#a57500', 800: '#8b5f00', 900: '#734b00',
        },
        third: {
          100: '#e5e5e5', 200: '#bfbfbf', 300: '#999999', 400: '#737373',
          500: '#4c4c4c', 600: '#252525', 700: '#1f1f1f', 800: '#191919', 900: '#121212',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'grid-pattern-light':
          'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
      },
      backgroundSize: { grid: '40px 40px' },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        portfolio: {
          primary: '#0047ab',
          secondary: '#efbf04',
          accent: '#2569d9',
          neutral: '#252525',
          'base-100': '#121212',
          'base-200': '#191919',
          'base-300': '#1f1f1f',
          'base-content': '#e5e5e5',
        },
      },
      {
        portfoliolight: {
          primary: '#0047ab',
          secondary: '#b58712',
          accent: '#2569d9',
          neutral: '#e5e5e5',
          'base-100': '#fafafa',
          'base-200': '#f1f1f1',
          'base-300': '#e5e5e5',
          'base-content': '#121212',
        },
      },
    ],
    darkTheme: 'portfolio',
    logs: false,
  },
};

export default config;