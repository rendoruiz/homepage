module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1897E0'
      },
      fontFamily: {
        primary: 'Mukta'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
