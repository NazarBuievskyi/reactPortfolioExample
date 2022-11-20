/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'twitter' : '#1DA1F2',
        'linkedIn' : '#0e76a8',
        'youtube' : '#FF0000',
      },
      fontFamily: {
        burtons: 'Burtons',
      }
    },
  },
  plugins: [],
}