// =====================================================================
// CAROUSEL STUDIO — LIB BERSAMA (Node.js, Mac + Windows + Linux)
// Dipakai script engine/*.mjs. Tidak ada dependensi selain bawaan Node.
// =====================================================================
import { existsSync, mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

// Opsi gaya PowerShell (-Html x) maupun gaya Node (--html x), huruf besar/kecil bebas.
// spec: { html: 'string', scale: 'int', dir: 'list', revise: 'switch', ... }
export function parseArgs(argv, spec, required = []) {
  const out = {};
  const keys = Object.keys(spec);
  for (let i = 0; i < argv.length; i++) {
    const m = /^--?([A-Za-z][\w-]*)$/.exec(argv[i]);
    if (!m) throw new Error(`Argumen tidak dikenal: ${argv[i]}`);
    const key = keys.find((k) => k.toLowerCase() === m[1].toLowerCase());
    if (!key) throw new Error(`Opsi tidak dikenal: ${argv[i]} (yang ada: ${keys.map((k) => '-' + k).join(', ')})`);
    const type = spec[key];
    if (type === 'switch') { out[key] = true; continue; }
    if (type === 'list') {
      const vals = [];
      while (i + 1 < argv.length && !/^--?[A-Za-z]/.test(argv[i + 1])) vals.push(...argv[++i].split(',').map((s) => s.trim()).filter(Boolean));
      out[key] = (out[key] || []).concat(vals);
      continue;
    }
    if (i + 1 >= argv.length) throw new Error(`Opsi -${key} butuh nilai`);
    const v = argv[++i];
    out[key] = type === 'int' ? parseInt(v, 10) : type === 'float' ? parseFloat(v) : v;
  }
  for (const r of required) if (out[r] === undefined) throw new Error(`Opsi wajib: -${r}`);
  return out;
}

// Chrome / Edge / Chromium. Bisa dipaksa lewat env CS_BROWSER=<path>.
export function findBrowser() {
  const env = process.env.CS_BROWSER;
  if (env && existsSync(env)) return env;
  const L = process.env.LOCALAPPDATA || '';
  const cands = {
    win32: [
      'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
      'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      join(L, 'Google\\Chrome\\Application\\chrome.exe'),
    ],
    darwin: [
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
      '/Applications/Chromium.app/Contents/MacOS/Chromium',
    ],
  }[process.platform] || ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/microsoft-edge'];
  const hit = cands.find((p) => p && existsSync(p));
  if (!hit) throw new Error('Chrome / Edge tidak ditemukan. Instal salah satu, atau set env CS_BROWSER ke path browser.');
  return hit;
}

// Jalankan browser headless. capture=true -> kembalikan stdout (untuk --dump-dom).
export function headless(args, { capture = false } = {}) {
  const r = spawnSync(findBrowser(), ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', '--no-default-browser-check', ...args], {
    encoding: capture ? 'utf8' : undefined,
    maxBuffer: 512 * 1024 * 1024,
    stdio: capture ? ['ignore', 'pipe', 'ignore'] : 'ignore',
  });
  if (r.error) throw r.error;
  return capture ? r.stdout : '';
}

export const fileUrl = (p) => pathToFileURL(p).href;

export function tmpWork() {
  const d = join(tmpdir(), 'carousel-studio');
  mkdirSync(d, { recursive: true });
  return d;
}

export const rid = () => Math.random().toString(16).slice(2, 10);

export function fail(e) {
  console.error('ERROR: ' + (e && e.message ? e.message : e));
  process.exit(2);
}
