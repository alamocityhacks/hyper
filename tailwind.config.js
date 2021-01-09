module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        blue: {
          DEFAULT: '#69709F',
          dark: '#272A3D',
        },
        black: '#000000',
        white: '#FFFFFF',
        red: '#E94957',
        orange: '#FF7E47',
        yellow: '#FFFD85',
        turquoise: '#2CDAC5',
      },
      fontFamily: {
        'rubik-mono': 'Rubik Mono One, sans-serif',
        'rubik': 'Rubik, sans-serif',
        'inter': 'Inter, ui-sans-serif, system-ui, sans-serif',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
