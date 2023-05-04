const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Albert Sans', ...fontFamily.sans],
      },
      gridTemplateRows: {
        fluid: "repeat(auto-fill, 40px)"
      }
    },
  },
  plugins: [],
}
