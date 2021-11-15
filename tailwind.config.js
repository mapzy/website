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
        'mapzy-red': '#E74D67',
        'mapzy-red-light': '#EB7085',
        'mapzy-blue': '#62CFFF'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
