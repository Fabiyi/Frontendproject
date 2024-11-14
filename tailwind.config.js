const { transform } = require('next/dist/build/swc');
const { Blinker } = require('next/font/google');
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
        wiggle:{
          '0% , 100%':
          { transform: 'rotate(-3deg)'},
          '50%':{ transform: 'rotate(3deg)'},
        },
        fadeIn:{
          '0%': { opacity: '0'},
          '100%': { opacity: '1'},
        },
        typing:{
          '0%': { width: '0%'},
          '100%': {width: '100%'}
        },
        blink: {
          '50%': {borderColor: 'transparent'},
        },
          fadeIn: {
            '0%': {opacity: '0'},
            '100%': {opacity: '1'}
          },
          slideIn: {
            '0%': {transform: 'translateY(-100%)'},
            '100%': {transform: 'translateX(0)'},
          },
        },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in forwards',
        typing: 'typing 2s steps(20) forwards, blink 0.75s step-end infinites',
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideIn: 'slideIn 1s ease-out forwards'
      },
  plugins: [],
};
