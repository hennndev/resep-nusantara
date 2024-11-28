/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ]
      },
      gridTemplateColumns: {
        card: "repeat(auto-fill, minmax(300px, 1fr))"
      }
    },
  },
  plugins: [],
}