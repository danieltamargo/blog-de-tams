import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  
  // https://docs.astro.build/en/guides/prefetch/
  prefetch: {
    defaultStrategy: 'viewport', // Debemos indicar data-astro-prefetch="tipo" en los enlaces a precargar
    prefetchAll: true, // Precarga todas las páginas (habilitado en Astro por defecto con las ViewTransitions)
  },

  integrations: [mdx(), tailwind()],
  markdown: {
    shikiConfig: {
      themes: {
        dark: 'github-dark',
        light: 'github-light'
      },
      wrap: true
    }
  },
  transitions: {
    animate: 'slide'
  }
});