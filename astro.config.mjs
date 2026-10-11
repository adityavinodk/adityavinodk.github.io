import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adityavinodk.github.io',
  output: 'static',
  // Preserve the original index and article filenames for GitHub Pages.
  build: { format: 'preserve' },
  devToolbar: { enabled: false },
});
