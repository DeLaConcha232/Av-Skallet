/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // Paleta de colores = Innovation and Professional
        primary: '#FF6F00',
        secondary: '#00B0FF',
        background: '#2F2F2F',
        interactions: '#00000', // por verse 
        text: '#F4F4F4',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

