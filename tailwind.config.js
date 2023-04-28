/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens:{
      'xxs': '200px',
      'xs': '400px',
      ...defaultTheme.screens,
    },
    colors: {
      'primary': '#001219',
      'secondary': '#005f73',
      'light-blue': '#0a9396',
      'ash-gray': '#94d2bd',
      'beige': '#e9d8a6',
      'logo': '#ca6702',
    },
    extend: {},
  },
  plugins: [],
}

// #005f73