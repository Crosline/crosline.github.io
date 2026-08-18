// Renders scripts/og.html to public/og.png at 1200x630 with the site's own
// fonts. Needs the built site served (npm run preview) so /fonts/* resolve.
import { spawn } from 'node:child_process';
import { writeFileSync, copyFileSync } from 'node:fs';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9455;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

copyFileSync('scripts/og.html', 'dist/__og.html');
const chrome = spawn(CHROME, ['--headless', '--disable-gpu', `--remote-debugging-port=${PORT}`,
  '--hide-scrollbars', '--no-first-run', `--user-data-dir=/tmp/og-profile`, 'about:blank']);
try {
  let list;
  for (let i = 0; i < 40; i++) {
    try { list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      if (list.some((t) => t.type === 'page')) break; } catch {}
    await wait(250);
  }
  const ws = new WebSocket(list.find((t) => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));
  let id = 0; const pending = new Map();
  ws.onmessage = (e) => { const m = JSON.parse(e.data); pending.get(m.id)?.(m); pending.delete(m.id); };
  const send = (method, params = {}) =>
    new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });

  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: `http://localhost:${process.env.PORT || 4321}/__og.html` });
  await wait(2500);
  const shot = await send('Page.captureScreenshot', { format: 'png', fromSurface: true });
  writeFileSync('public/og.png', Buffer.from(shot.result.data, 'base64'));
  console.log('wrote public/og.png');
} finally { chrome.kill(); }
