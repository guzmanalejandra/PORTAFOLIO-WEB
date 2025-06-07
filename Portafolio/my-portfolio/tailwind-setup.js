// Tailwind config generator
const fs = require('fs')

const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`

fs.writeFileSync('tailwind.config.js', tailwindConfig)

const postcssConfig = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`

fs.writeFileSync('postcss.config.js', postcssConfig)

console.log('Tailwind config files created manually.')
