import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    fs: {
      strict: false
    },
    host: true, // Permite acceso desde cualquier IP (útil para hosting)
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Optimiza el build para producción
  }
});