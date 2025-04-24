import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgo from 'vite-plugin-svgo'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Si se despliega en raíz. Ej: 'https://tu-sitio.com/'
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip', // Opciones: 'gzip' | 'brotliCompress' | 'deflate' | 'deflateRaw'
      ext: '.gz', // Extensión del archivo comprimido
      threshold: 10240, // Solo comprime archivos > 10KB
    }),
    // Para Brotli (opcional, mejor compresión pero más lento):
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
    }),
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
