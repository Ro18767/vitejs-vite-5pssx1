import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [],
  build: {
    //minify: 'terser',
    rollupOptions: {
      input: {
        main: new URL('./src/index.html', import.meta.url).pathname,
      },
    },
    emptyOutDir: true,
    outDir: new URL('./dist/', import.meta.url).pathname,
  },
  root: new URL('./src/', import.meta.url).pathname,
  publicDir: new URL('./public/', import.meta.url).pathname,
});
