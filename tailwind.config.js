module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.html',
    './*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mapzy-orange': '#F99B46',
        'mapzy-violet': '#704DCC',
        'mapzy-violet-tint': '#7c5cd0',
        'mapzy-red': '#E74D67',
        'mapzy-blue': '#62CFFF'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
