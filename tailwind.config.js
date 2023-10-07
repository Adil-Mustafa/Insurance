/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: "'Plus Jakarta Sans', sans-serif",
        OutFit: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}