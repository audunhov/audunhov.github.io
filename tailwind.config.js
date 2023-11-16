/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono Variable', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        primary: {
          50: '#fbf4f7',
          100: '#f8ebf0',
          200: '#f3d7e3',
          300: '#eab7cc',
          400: '#dc8aaa',
          500: '#ce668b',
          600: '#ba486c',
          700: '#a33856',
          default: '#a33856',
          800: '#843047',
          900: '#6f2c3e',
          950: '#421521'
        },
        secondary: {
          50: '#f9f7f7',
          100: '#f4efef',
          200: '#eae1e2',
          300: '#d9c8ca',
          400: '#c3a9ad',
          500: '#ab888e',
          default: '#ab888e',
          600: '#926c74',
          700: '#79575f',
          800: '#664b52',
          900: '#594249',
          950: '#2f2226'
        },
        tertiary: {
          50: '#f7f4ef',
          100: '#ebe3d6',
          200: '#d9c8af',
          300: '#c3a581',
          400: '#b1895f',
          default: '#b1895f',
          500: '#a27650',
          600: '#8b5f43',
          700: '#704938',
          800: '#5f3f34',
          900: '#533730',
          950: '#2f1d19'
        },
        error: {
          50: '#fff2f1',
          100: '#ffe1df',
          200: '#ffc9c5',
          300: '#ffa39d',
          400: '#ff6d64',
          500: '#ff5449',
          default: '#ff5449',
          600: '#ed2215',
          700: '#c8180d',
          800: '#a5180f',
          900: '#881b14',
          950: '#4b0804'
        },
        neutral: {
          50: '#f8f8f8',
          100: '#f1efef',
          200: '#e5e3e3',
          300: '#d3cecf',
          400: '#b8b1b2',
          500: '#988e8f',
          default: '#988e8f',
          600: '#867c7d',
          700: '#6f6667',
          800: '#5d5758',
          900: '#514b4c',
          950: '#292626'
        },
        'neutral-variant': {
          50: '#f9f7f7',
          100: '#f1efef',
          200: '#e7e1e2',
          300: '#d5cccd',
          400: '#bcadaf',
          500: '#9f8c8f',
          default: '#9f8c8f',
          600: '#8b777a',
          700: '#736265',
          800: '#615355',
          900: '#53494b',
          950: '#2b2425'
        }
      }
    }
  },
  plugins: []
}
