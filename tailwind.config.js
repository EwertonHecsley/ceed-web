/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {

        'primary-dark': '#002855', // Deep dark blue
        'secondary-light': '#00a8e8', // Light blue
        'accent-yellow': '#FFD700', // Yellow/Gold
        'neutral-white': '#FFFFFF',
      },
      backgroundImage: {
        'body-stars': "url('/public/bg/body-stars.svg')",
        'about': "url('/src/assets/images/bg-about.png')",
      },
    },
  },
  plugins: [],
}