/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#854d3d",
        primaryDark:"#4a1e1b",
        secondary:"#4a1e1b",
        dark:"#1e1e1e",
      },
      fontFamily:{
        inter:["Inter","sans-serif"],
        cursive:["Ephesis","cursive"],
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
          lg:"3rem",
          xl:"4rem",
        },
      },
    },
  },
  plugins: [],
}