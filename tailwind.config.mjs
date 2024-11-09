/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            'code': {
              backgroundColor: 'rgb(243 244 246 / 0.8)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400'
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0',
              fontWeight: '400'
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}