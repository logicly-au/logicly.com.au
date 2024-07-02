/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans]
      },
      inset: {
        center: '-50%',
      },
      colors: {
      logiclylightgrey: '#F6F5F1',
      logiclygreytwo: '#E9E8E1',
      logiclygreythree: '#B0B1B1',
      logiclyorange: '#E94E1B',
      logiclybeige: '#F5E3D4',
      logiclytheme1: '#F7A823',
      logiclytheme2: '#E94E1B',
      logiclytheme3: '#AE1820',
      logiclytheme4: '#E6332A',
      logiclytextgrey: '#3c3c3b',
      logiclyhover: '#CF4619',
      },
      gridTemplateColumns: {
        // Simple 15 column grid
        '15': 'repeat(15, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-15': 'span 15 / span 15',
      },
      opacity: {
         '40': '0.4',
       }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'content/**/*.md',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
