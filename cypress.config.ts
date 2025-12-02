import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://piscinesmanresa.poliwincloud.com/cat/usuari/login',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
  },
});
