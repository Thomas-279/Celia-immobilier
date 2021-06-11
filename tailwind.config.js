module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        'desktop': '956px',
        // => @media (min-width: 1280px) { ... }
      },
    },
    colors: {
      'myLightRed': '#CC0202',
      'myDarkRed': '#B40403',
      'myDark': '#000000',
      'myWhite': '#FFFFFF',
      'myLightGrey': '#F6F9FA',
      'myLessLightGrey': '#EFEFEF',
      transparent: 'transparent',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
