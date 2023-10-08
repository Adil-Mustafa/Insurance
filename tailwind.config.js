/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: "'Plus Jakarta Sans', sans-serif",
        OutFit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.90rem",
        xl: "2.2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "4xl": "5rem",
        "5xl": "6rem",
      },
    },
  },
  plugins: [],
};
