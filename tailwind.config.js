/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      colors: {
        "customgray-1": "#D9D9D9",
        "customgray-2": "#FAFAFA",
        primary: "#1C1F4A",
        secondary: "#1C1F4A",
      },
 
    },
  },
  plugins: [],
}
