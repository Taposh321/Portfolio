/** @type {import('tailwindcss').Config} */

export default {
  mode:"jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      backgroundColor:{
        'light-dark':"rgb(37,37,37)",
        "linearBlack": "rgb(0,0,0)",
"linearBlack":" -moz-linear-gradient(90deg, rgba(0,0,0,1) 13%, rgba(252,252,252,0.48495372270001746) 100%)",
"linearBlack":" -webkit-linear-gradient(90deg, rgba(0,0,0,1) 13%, rgba(252,252,252,0.48495372270001746) 100%)",


"linearBlack": "linear-gradient(90deg, rgba(0,0,0,1) 13%, rgba(252,252,252,0.48495372270001746) 100%)",

      },
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


