// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // ... other configuration like integrations, etc.

  // 1. Rename your real index.astro to something like src/pages/home.astro 
  //    so the redirect below takes precedence.
  // 2. Add the redirects object to catch ALL traffic and send it to your page.
  redirects: {
    // This is the key: redirect ALL possible paths (/*) to your page.
    '/*': '/in-progress',
    
    // Optional: You can explicitly keep the root domain clean
    '/': '/in-progress',
  },
});