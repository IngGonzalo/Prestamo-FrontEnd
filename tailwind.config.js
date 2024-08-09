import { nextui } from '@nextui-org/react';
import { darkTheme } from './src/config/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#65a30d",
        secondary:"#bef264",
      }      
    },
  },
  
  darkMode: "class",

  plugins: [nextui({
    defaultTheme: "light",
    themes: {
      ...darkTheme     
    }
  })],
}

