/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edefff',
          100: '#dee1ff',
          200: '#c4c7ff',
          300: '#a1a2ff',
          400: '#847bfe',
          500: '#725cf8',
          600: '#643eed',
          700: '#5631d1',
          800: '#472bab',
          900: '#3b2a85',
          950: '#24194d',
        },
      },
    },
  },
  plugins: [
    animations
  ],
}

