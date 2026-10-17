// =====================================================================
// CAROUSEL STUDIO — EXPORT
// Render tiap <section class="slide" data-name="..."> jadi PNG pakai Chrome/Edge headless.
// Jalan di Mac & Windows. Butuh Node.js 18+.
//
// Pakai:
//   node export.mjs -Html "path/carousel.html"
// Opsi:
//   -Scale 2          2 = 2160x2700 (default), 1 = 1080x1350 (preview cepat)
//   -Only 3           hanya slide nomor 3
//   -Out "folder"     default: folder png/ di sebelah file HTML
//   -Size 1080x1350   ukuran canvas (ikuti --w/--h style)
//   -Prefix slide     nama file: <prefix>-NN-<data-name>.png
// =====================================================================
import { readFileSync, mkdirSync, existsSync, copyFileSync, rmSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { parseArgs, headless, fileUrl, tmpWork, rid, fail } from './lib.mjs';

try {
  const a = parseArgs(process.argv.slice(2), { html: 'string', scale: 'int', only: 'int', out: 'string', size: 'string', prefix: 'string' }, ['html']);
  const page = resolve(a.html);
  if (!existsSync(page)) throw new Error(`File tidak ada: ${page}`);
  const scale = a.scale ?? 2, only = a.only ?? 0, prefix = a.prefix ?? 'slide';
  const out = a.out ? resolve(a.out) : join(dirname(page), 'png');
  const [w, h] = (a.size ?? '1080x1350').split('x');

  const src = readFileSync(page, 'utf8');
  const tags = src.match(/<section\b[^>]*\bclass="[^"]*\bslide\b[^"]*"[^>]*>/g) || [];
  if (!tags.length) throw new Error('Tidak ada <section class="slide"> di file HTML.');
  const names = tags.map((t, i) => (/data-name="([^"]+)"/.exec(t) || [, `s${i + 1}`])[1]);

  mkdirSync(out, { recursive: true });
  const tmp = tmpWork(); // render ke temp dulu (aman untuk path berspasi), lalu dipindah
  const uri = fileUrl(page);
  for (let i = 1; i <= names.length; i++) {
    if (only > 0 && i !== only) continue;
    const name = `${prefix}-${String(i).padStart(2, '0')}-${names[i - 1]}.png`;
    const tmpFile = join(tmp, `${rid()}_${name}`);
    headless([`--window-size=${w},${h}`, `--force-device-scale-factor=${scale}`, '--virtual-time-budget=5000', '--allow-file-access-from-files', `--screenshot=${tmpFile}`, `${uri}?s=${i}`]);
    if (existsSync(tmpFile)) { copyFileSync(tmpFile, join(out, name)); rmSync(tmpFile, { force: true }); console.log(name); }
    else console.warn(`PERINGATAN: ${name} gagal dibuat`);
  }
  console.log(`Selesai: ${names.length} slide -> ${out}`);
} catch (e) { fail(e); }
