import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves the site from /signal_hill/; Vercel/Netlify serve from the root.
  base: process.env.GITHUB_PAGES ? '/signal_hill/' : '/',
});
