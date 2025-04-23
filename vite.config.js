import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgo from 'vite-plugin-svgo'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Si se despliega en raíz. Ej: 'https://tu-sitio.com/'
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
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets'
    },
  },
})
