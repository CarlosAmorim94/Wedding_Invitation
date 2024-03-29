/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "serif",
        wedding: "Great Vibes, sans-serif",
        alex: "Alex Brush, sans-serif",
      },
      width: {
        logo: "15%",
      },
      colors: {
        transparent: {
          mobile: "rgba(0,0,0, .5)",
        },
        gold: "#f7bb54",
      },
    },
  },
  plugins: [],
};
