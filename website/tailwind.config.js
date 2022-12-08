const plugin = require('tailwindcss/plugin')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    fontFamily: {
      'aeonik': ['"Aeonik"', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#1e4848',
        'primary-a10': '#1e484810',
        'primary-a60': '#1e484860',
        'primary-a80': '#1e484880',
        gray: { 100: '#f0eeea' },
        'gray-a10': '#f0eeea10',
        'gray-a60': '#f0eeea60',
        'gray-a80': '#f0eeea80',
      },
      spacing: {
        col: '1.2rem',
      },
    },
  },
  plugins: [
    require('postcss-import'),
    require('postcss-color-function'),
    require('tailwindcss'),
    require('autoprefixer'),
    plugin(function({ addBase }) {
      addBase({
        '@font-face': [
          {
            fontFamily: 'Aeonik',
            fontDisplay: 'swap',
            fontWeight: 300,
            src: 'url("/fonts/Aeonik-Thin.woff2") format("woff2");',
          },
          {
            fontFamily: 'Aeonik',
            fontDisplay: 'swap',
            fontWeight: 400,
            src: 'url("/fonts/Aeonik-Regular.woff2") format("woff2");',
          },
          {
            fontFamily: 'Aeonik',
            fontDisplay: 'swap',
            fontWeight: 500,
            src: 'url("/fonts/Aeonik-Medium.woff2") format("woff2");',
          },
          {
            fontFamily: 'Aeonik',
            fontDisplay: 'swap',
            fontWeight: 700,
            src: 'url("/fonts/Aeonik-Bold.woff2") format("woff2");',
          },
        ],
      })
    }),
  ],
}
