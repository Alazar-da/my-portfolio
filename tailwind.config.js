/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#d4e1f7',
          200: '#a8c3ef',
          300: '#7ca5e8',
          400: '#5087e0',
          500: '#2569d9',
          600: '#0047ab', // base color
          700: '#003a8d',
          800: '#002c6f',
          900: '#001f51',
        },
        secondary: {
          100: '#fbe8b8',
          200: '#f8d072',
          300: '#f6b92b',
          400: '#d6a017',
          500: '#b58712',
          600: '#efbf04', // base color
          700: '#a57500',
          800: '#8b5f00',
          900: '#734b00',
        },
        third: {
          100: '#e5e5e5',
          200: '#bfbfbf',
          300: '#999999',
          400: '#737373',
          500: '#4c4c4c',
          600: '#252525', // base color
          700: '#1f1f1f',
          800: '#191919',
          900: '#121212',
        },
      },
    },
  },
  plugins: [require('daisyui'),],
}

