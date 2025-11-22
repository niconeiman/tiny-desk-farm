import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

const componentsPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  'app/components'
);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  alias: {
    '@components': componentsPath,
  },
  vite: {
    plugins: [tsconfigPaths()],
  },
});
