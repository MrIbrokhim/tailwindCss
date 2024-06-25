/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
         a:'1100px',
         b:'550px',
         c:'700px',
         d:'1065px',
         e:'150px',
         f:'400px'

      },
      borderRadius:{
        a:'40px'

      },
      height:{
        a:'600px',
        b:'1000px',
        c:'550px',
        e:'150px'
      },
      spacing:{
        a:'100px',
        b:'20px',
        c:'200px',
        d:'815px',
        e:'150px',
        f:'1520px',
        k:'257px',
        l:'140px',
        m:'920px',
        p:'95px',
        a1:'900px'
      },
      backgroundColor:{
         a:'#F3FFB0',
         b:'#DFF755',
         c:'#090948'
      }
    },
  },
  plugins: [],
}

