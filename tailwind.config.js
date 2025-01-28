/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       Bona: ['Bona Nova', 'serif'],
       Rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        // Paleta de colores = Innovation and Professional
        primary: '#FF6F00',
        secondary: '#2F2F2F',
        background: '#F4F4F4',
        interactions: '#00B0FF', // por verse 
        text: '#FFFFFF',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },

      },
      animation: {
        float: 'float 3s ease-in-out infinite',

      }
    },
  },
  plugins: [],
}

