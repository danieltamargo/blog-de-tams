import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  output: 'server',
  
  // https://docs.astro.build/en/guides/prefetch/
  prefetch: {
    defaultStrategy: 'viewport', // Debemos indicar data-astro-prefetch="tipo" en los enlaces a precargar
    prefetchAll: true, // Precarga todas las páginas (habilitado en Astro por defecto con las ViewTransitions)
  },

  integrations: [
    mdx(), 
    tailwind(), 
    icon()
  ],
  markdown: {
    shikiConfig: {
      themes: {
        dark: 'github-light',
        light: 'github-dark'
      },
      wrap: true
    }
  },
  transitions: {
    animate: 'slide'
  }
});