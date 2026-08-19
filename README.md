# crosline.github.io

Personal site for İ. Çağkan Çağlayanel. Svelte 5 + Vite + Tailwind, prerendered to static HTML,
served by GitHub Pages at <https://crosline.github.io/>.

This is the **user site**, so it serves from `/`. Every other repo of mine is a project site at
`/<repo-name>/` and needs its own `base`; this one does not.

## Run it

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # → dist/
npm run preview    # serve dist/ exactly as Pages will
```

`npm run build` is three steps, and the third is the one that matters:

1. `vite build` — client bundle.
2. `vite build --ssr` — the same components into `dist-ssr/`.
3. `node scripts/prerender.js` — renders `App.svelte` into `dist/index.html` and deletes
   `dist-ssr/`. **This is why the page is complete with JavaScript disabled.** Skip it and you ship
   an empty `<div id="app">`.

## Editing content

Every fact on the page — roles, dates, figures, project links — lives in
[`src/lib/content.js`](src/lib/content.js). Nothing is hardcoded in the markup. Change it there.

`public/images/` holds screenshots from the previous site. They are kept but deliberately unused;
see `DESIGN.md` §11.8 for why.

## The share card

`public/og.png` is generated from [`scripts/og.html`](scripts/og.html), using the site's own fonts
and tokens so it cannot drift from the page. It is committed, not built in CI. To regenerate:

```sh
npm run build
npm run preview -- --port 4321 &   # og.js needs /fonts/* served
PORT=4321 node scripts/og.js       # → public/og.png
cp public/og.png dist/og.png
```

`scripts/og.js` drives headless Chrome over CDP and hardcodes the macOS Chrome path. Edit it if you
are not on a Mac.

## Deploying

Push to `master`. [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes
via `upload-pages-artifact` + `deploy-pages` (Settings → Pages → Source = **GitHub Actions**, not a
branch).

Two greps run as build steps and will **fail the deploy** rather than ship a bad page:

- `grep -q 3469abde dist/index.html` — the design direction contract, an HTML comment that is the
  first child of `<body>`. If a refactor strips it, nobody can audit what the page was supposed to
  be, so the build stops.
- `grep -q 'AmberNet' dist/index.html` — proof the prerender step actually ran and put the work list
  into the HTML.

## Design

The visual system is **ATTRACT MODE**: tokens, type scale, the bezel-arc geometry, the silkscreen
offset, the motion budget, and a record of every place the build overrode the original draft. Read
it before changing anything visual.

It lives in `DESIGN.md`, alongside `PRODUCT.md`, **one directory above this repo** — not inside it,
and not on GitHub. `crosline.github.io` and `algorithm-visualizer` share both files, and neither
repo owns them. Locally that is `~/workspace/portfolio/`.

The direction contract at the top of [`index.html`](index.html) is the short version, and it is the
part CI protects.
