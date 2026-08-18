// Renders App.svelte to real HTML at build time, so the shipped page is
// complete with JavaScript disabled. The client then hydrates the same tree.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { renderApp } from '../dist-ssr/entry-server.js';

const { head, body } = renderApp();
const file = 'dist/index.html';
let html = readFileSync(file, 'utf8');

if (!html.includes('<div id="app"></div>')) throw new Error('prerender: mount point not found');
html = html.replace('<div id="app"></div>', `<div id="app">${body}</div>`);
if (head) html = html.replace('</head>', `${head}\n  </head>`);

writeFileSync(file, html);
rmSync('dist-ssr', { recursive: true, force: true });
console.log(`prerendered ${body.length} bytes of markup into ${file}`);
