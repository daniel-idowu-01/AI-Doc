/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#60B7FF',
        'secondary': '#0B63E5',
        'background': '#ECF6FF'
      }
    },
  },
  plugins: [],
}