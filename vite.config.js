import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgo from 'vite-plugin-svgo'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         vendor: ['react', 'react-dom'], // Divide las dependencias principales en un archivo separado
  //         swiper: ['swiper'], // Divide Swiper si es grande
  //       },
  //     },
  //   },
  //   // chunkSizeWarningLimit: 1000, // Opcional: aumenta el límite de advertencia
  // },
  plugins: [
    react(),
    svgo({
      svgoConfig: {
        plugins: [
          { removeViewBox: false }, // Mantiene el atributo viewBox
          { removeDimensions: true }, // Elimina ancho y alto para hacerlo responsivo
        ],
      },
    }),
    viteCompression(),
  ],
})
