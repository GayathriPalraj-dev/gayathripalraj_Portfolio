import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor'
          }

          if (id.includes('node_modules/framer-motion')) {
            return 'animation-vendor'
          }

          if (id.includes('node_modules/lucide-react')) {
            return 'icon-vendor'
          }

          return undefined
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
})
