// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

const locales = ['fr', 'en', 'de', 'es'];

export default defineConfig({
  site: 'https://pi-planning.ai',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr', en: 'en', de: 'de', es: 'es' },
      },
    }),
  ],

  i18n: {
    locales: locales,
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
