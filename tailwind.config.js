module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        chgbg: 'change background',
      },
      keyframes:{
        chgbg: {
          '50%':{background: 'linear-gradient(45deg, blue, red)'}
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
