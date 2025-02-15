import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:6000',
  },
  // default username / password on init
  env: {
    umami_user: 'admin',
    umami_password: 'umami',
  },
});
