const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    colors: {
      primary: '#f3f4f5',
      secondary: '#1a1a1a',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: {
        hover: '#f0f0f0',
        divider: '#2b2b2b'
      },
      red: colors.rose,
      green: {
        brand: '#e0fa52'
      },
    },
    textColor: {
      'primary': '#f3f4f5',
      'secondary': '#000',
      'placeholder': '#fff',
      'danger': '#e3342f',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
