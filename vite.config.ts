import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    target: 'es2022',
    rollupOptions: {
      input: { main: resolve(__dirname, 'index.html') },
    },
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
    host: true,
  },
  preview: { port: 8080 },
  resolve: {
    alias: { '@': resolve(__dirname, './src') },
  },
  envPrefix: 'VITE_',
});
