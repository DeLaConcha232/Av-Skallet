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
        
      }
    },
  },
  plugins: [],
}

