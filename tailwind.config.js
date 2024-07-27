/** @type {import('tailwindcss').Config} */

export default {
  mode:"jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      backgroundColor:{
  
      },

      gridTemplateColumns: {
        'custom': 'repeat(12, minmax(0, 1fr))', // Change 16 to the desired number of columns
      },
      gridTemplateRows: {
        'custom': 'repeat(20, minmax(0, 1fr))', // Change 6 to the desired number of rows
      },
      backgroundImage:{
'darkLight': 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)'
      }
    },
  },
  plugins: [],
}


