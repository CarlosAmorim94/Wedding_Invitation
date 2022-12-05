/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
        wedding: "Great Vibes, sans-serif",
      },
      width: {
        logo: "15%",
      },
    },
  },
  plugins: [],
};
