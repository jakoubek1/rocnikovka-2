import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 5173, 
    proxy: {
      '/auth': 'http://localhost:3000',
      '/item': 'http://localhost:3000',
      '/search': 'http://localhost:3000',
      '/reservation': 'http://localhost:3000',
      
    },
  },
});
