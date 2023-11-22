/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm': '320px',
      'md': '640px',
      'lg': '1024px',
      'xl': '1280px',
    },
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