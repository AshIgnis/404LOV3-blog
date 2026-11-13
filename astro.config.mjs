import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://xianxi-suibi.pages.dev',
  integrations: [sitemap()],
});
