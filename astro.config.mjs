import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  integrations: [mdx(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  transitions: {
    animate: 'slide'
  }
});