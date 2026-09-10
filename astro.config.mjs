// @ts-check
import { defineConfig } from 'astro/config';

/**
 * RNR 2026 - Escuela Politecnica Nacional, Quito.
 *
 * Sitio 100% estatico (sin servidor, sin base de datos, sin API).
 * Vercel detecta Astro automaticamente y publica la carpeta `dist/`.
 *
 * Si compras un dominio propio, cambia `site` por la URL definitiva:
 * eso corrige el canonical, el sitemap y las etiquetas Open Graph.
 */
export default defineConfig({
  site: 'https://rnr2026.vercel.app',
  output: 'static',
  trailingSlash: 'ignore',
  compressHTML: true,
  build: {
    // CSS critico en linea, el resto en archivos con hash.
    inlineStylesheets: 'auto',
    format: 'directory',
  },
  vite: {
    build: {
      // Sin sourcemaps en produccion: no exponemos el codigo fuente original.
      sourcemap: false,
      // Nada de <script> en linea: la CSP usa `script-src 'self'` (sin
      // 'unsafe-inline'), asi que todo el JS debe salir como archivo propio.
      assetsInlineLimit: 0,
    },
  },
  devToolbar: { enabled: false },
});
