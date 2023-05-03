/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens:{
      'bgSquig': '1400px',
      'xxs': '200px',
      'xs': '400px',
      ...defaultTheme.screens,
    },
    colors: {
      ...defaultTheme.colors,
      'primary': '#000',
      'secondary': '#fff',
      'light-text': '#fff',
      'secondary-text': '#202020',
      'primary-text': '#000',
      'logo': '#ca6702',
      'red': '#D00000',
      'yellow': '#FFBA08',
      'light-blue': '#3F88C5',
      'blue': '#032B43',
      'green': '#136F63'
    },
    extend: {
      backgroundImage: {
        'squiggly': "url('/src/assets/Squiggly.png')",
        'dots': "url('/src/assets/Dots.png')",
        'shapes': "url('/src/assets/Shapes.png')",
      }
    },
  },
  plugins: [],
}

// #005f73