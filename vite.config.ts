import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/shibao',
  plugins: [react()],
  build: {
    outDir: './docs'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
});
