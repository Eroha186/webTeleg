/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'menu-shadow': '0px -3px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
