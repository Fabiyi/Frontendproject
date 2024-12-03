// const { transform } = require('next/dist/build/swc');
// const { Blinker } = require('next/font/google');
const { Fade, Slide } = require('react-slideshow-image');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      backgroundImage:{
        section1:"url('/public/Images/Doctor10.jpg')",
        section2:"url('/public/Images/Doctor2.jpg')",
        section3: "url('/public/Images/Doctor4.jpg')",
      },
      keyframes:{
        
        },
        },
      },
      
  plugins: [],
};
