module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          violet: '#E2C2FD',
          'yellow': '#FFEDAE',
          'pink': '#FF9ED9',
          'green': '#8EE6D0'
        }
      },
      spacing: {
        '4.5': '18px',
        17: '77px'
      },
      fontFamily: {
        'body': ['Poppins', 'sans-serif']
      },
      borderRadius: {
        5: '5px',
        10: '10px',
        20: '20px',
        30: '30px',
        50: '50px',
        70: '70px',
        100: '100px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
