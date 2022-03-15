const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'aeonik': ['"Aeonik"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    require('postcss-color-function'),
    require('tailwindcss'),
    require('autoprefixer'),
    function ({addComponents}) {
      addComponents({
        '.container': {
          maxWidth: '94.45%',
        }
      })
    },
    plugin(function ({addBase}) {
      const fonts = {
        '@font-face': [
          {
            fontFamily: 'Aeonik',
            fontSwitch: 'swap',
            fontWeight: 300,
            src: 'url("/fonts/Aeonik-Thin.woff2") format("woff2");'
          },
          {
            fontFamily: 'Aeonik',
            fontSwitch: 'swap',
            fontWeight: 400,
            src: 'url("/fonts/Aeonik-Regular.woff2") format("woff2");'
          },
          {
            fontFamily: 'Aeonik',
            fontSwitch: 'swap',
            fontWeight: 500,
            src: 'url("/fonts/Aeonik-Medium.woff2") format("woff2");'
          },
          {
            fontFamily: 'Aeonik',
            fontSwitch: 'swap',
            fontWeight: 700,
            src: 'url("/fonts/Aeonik-Bold.woff2") format("woff2");'
          },
        ]
      };
      addBase(fonts);
    })
  ],
}