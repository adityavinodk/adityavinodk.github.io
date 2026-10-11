# adityavinodk.github.io

Personal website built with Astro and plain CSS. The migration preserves the existing content, minimalist design, and page filenames.

## Local development

Use Node 24 (see `.nvmrc`; Astro requires a supported even-numbered Node release).

```sh
nvm use
npm ci
npm run dev
```

The development server prints its local URL. Check and preview the production output:

```sh
npm run check
npm run build
npm run preview
```

## Structure

- `src/layouts/SiteLayout.astro`: shared document metadata, analytics, header, and footer.
- `src/layouts/ArticleLayout.astro`: article back link, title, and date.
- `src/components/`: navigation, footer, social icons, and video embeds.
- `src/pages/index.astro`: the homepage and its original biography.
- `src/pages/pages/`: the Pages index and original article HTML.
- `src/styles/main.css`: shared styling; no Bootstrap or browser UI framework runtime.
- `public/assets/`: unchanged photos, icon, and cycling video.

Font Awesome 5.7.1 supplies the original social icons, inlined as SVG at build time. It requires no external icon stylesheet or font download. The existing analytics snippet remains in the shared site layout.

## GitHub Pages

The project builds static HTML to `dist/`. `build.format: 'preserve'` retains `index.html`, `pages/index.html`, and `pages/{core,cycling,everyday}.html`. Existing extensionless article links remain supported by GitHub Pages. Public assets keep their `/assets/` URLs.

The deployment workflow builds on pull requests to `master` and deploys only from `master`. Before merging this migration, set repository **Settings → Pages → Source** to **GitHub Actions**. The workflow has not been activated or deployed from the migration branch.

Reference: https://docs.astro.build/en/guides/deploy/github/
