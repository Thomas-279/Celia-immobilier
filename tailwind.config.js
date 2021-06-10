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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
