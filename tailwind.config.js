import flowbite from "flowbite-react/tailwind";


/** @type {import('tailwindcss').Config} */
export default ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-backwhite': 'linear-gradient(112.5deg, rgb(214, 214, 214) 0%, rgb(214, 214, 214) 10%,rgb(195, 195, 195) 10%, rgb(195, 195, 195) 53%,rgb(176, 176, 176) 53%, rgb(176, 176, 176) 55%,rgb(157, 157, 157) 55%, rgb(157, 157, 157) 60%,rgb(137, 137, 137) 60%, rgb(137, 137, 137) 88%,rgb(118, 118, 118) 88%, rgb(118, 118, 118) 91%,rgb(99, 99, 99) 91%, rgb(99, 99, 99) 100%),linear-gradient(157.5deg, rgb(214, 214, 214) 0%, rgb(214, 214, 214) 10%,rgb(195, 195, 195) 10%, rgb(195, 195, 195) 53%,rgb(176, 176, 176) 53%, rgb(176, 176, 176) 55%,rgb(157, 157, 157) 55%, rgb(157, 157, 157) 60%,rgb(137, 137, 137) 60%, rgb(137, 137, 137) 88%,rgb(118, 118, 118) 88%, rgb(118, 118, 118) 91%,rgb(99, 99, 99) 91%, rgb(99, 99, 99) 100%),linear-gradient(135deg, rgb(214, 214, 214) 0%, rgb(214, 214, 214) 10%,rgb(195, 195, 195) 10%, rgb(195, 195, 195) 53%,rgb(176, 176, 176) 53%, rgb(176, 176, 176) 55%,rgb(157, 157, 157) 55%, rgb(157, 157, 157) 60%,rgb(137, 137, 137) 60%, rgb(137, 137, 137) 88%,rgb(118, 118, 118) 88%, rgb(118, 118, 118) 91%,rgb(99, 99, 99) 91%, rgb(99, 99, 99) 100%),linear-gradient(90deg, rgb(195, 195, 195),rgb(228, 228, 228))',
        'custom-backdashboard': 'linear-gradient(148deg, rgba(15, 15, 15,0.04) 0%, rgba(15, 15, 15,0.04) 35%,rgba(113, 113, 113,0.04) 35%, rgba(113, 113, 113,0.04) 42%,rgba(210, 210, 210,0.04) 42%, rgba(210, 210, 210,0.04) 100%),linear-gradient(70deg, rgba(15, 15, 15,0.04) 0%, rgba(15, 15, 15,0.04) 25%,rgba(113, 113, 113,0.04) 25%, rgba(113, 113, 113,0.04) 30%,rgba(210, 210, 210,0.04) 30%, rgba(210, 210, 210,0.04) 100%),linear-gradient(65deg, rgba(15, 15, 15,0.04) 0%, rgba(15, 15, 15,0.04) 13%,rgba(113, 113, 113,0.04) 13%, rgba(113, 113, 113,0.04) 27%,rgba(210, 210, 210,0.04) 27%, rgba(210, 210, 210,0.04) 100%),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0))',
      },
      fontFamily: {
        Bona: ['Bona Nova', 'serif'],
        Rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        // Paleta de colores = Innovation and Professional
        naranja: '#FF6F00',
        grisoscuro: '#2F2F2F',
        blancobege: '#F4F4F4',
        azulelectrico: '#00B0FF', // por verse 
        blanco: '#FFFFFF',
        negro: '#0D0D0D',
        verdeWhatsapp: '#24D366',
        rojogmail: '#D1382E',
        colorGithub: '#5C6BC0',
        
        
        background: '#FFFFFF', // blanco
        primary: '#020202', // negro
        buttons: '#E1213A', // rojo
        second: '#737373', // gris Medio
        backgroundSecond: '#2E2E2E', // gris oscuro


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
  plugins: [
    flowbite.plugin(),
  ],
})


