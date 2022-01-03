module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1897E0'
      },
      fontFamily: {
        primary: 'Mukta'
      },
      screens: {
        'mobile-xl': '360px'
      }
    },
  },
  plugins: [],
}
