/* =====================================================================
   CAROUSEL STUDIO — ENGINE JS  (v1.1)
   Dimuat PALING AKHIR (setelah style.js), pakai <script defer>.
   - Panorama / seamless: isi .p-pano-src disebar ke beberapa slide .p-pano-part
   - Gambar: <img> yang gagal dimuat diganti placeholder berlabel nama file
   - Mode tampil: galeri / satu slide (?s=N)
   - ?check=1 : tandai teks yang keluar canvas atau masuk zona aman bawah (merah)
   - window.CS_REPORT : hasil cek (termasuk gambar yang hilang)
   ===================================================================== */
(function () {
  const p = new URLSearchParams(location.search);
  const s = p.get('s');
  const check = p.get('check') === '1';
  const slides = [...document.querySelectorAll('.slide')];
  const W = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--w')) || 1080;

  /* ---------- PANORAMA ----------
     <div class="p-pano-src" data-pano="trip" hidden> ...konten selebar N slide... </div>
     <section class="slide p-pano-part" data-pano="trip" data-name="pano-1"> (konten slide sendiri opsional) </section>  x N
     Urutan .p-pano-part dengan data-pano sama = urutan potongan. */
  document.querySelectorAll('.p-pano-src').forEach(src => {
    const key = src.dataset.pano;
    const parts = slides.filter(sl => sl.classList.contains('p-pano-part') && sl.dataset.pano === key);
    const n = parts.length || 1;
    parts.forEach((sl, i) => {
      const layer = document.createElement('div');
      layer.className = 'p-pano-layer';
      layer.style.setProperty('--pano-n', n);
      layer.style.setProperty('--pano-i', i);
      layer.innerHTML = src.innerHTML;
      layer.querySelectorAll('[id]').forEach(e => e.removeAttribute('id'));
      sl.prepend(layer);
    });
    src.remove();
  });

  /* ---------- GAMBAR HILANG -> placeholder ---------- */
  const missing = [];
  function markMissing(img) {
    if (img.dataset.csMissing) return;
    img.dataset.csMissing = '1';
    const name = (img.getAttribute('src') || '(tanpa src)').split('/').pop();
    missing.push(name);
    img.classList.add('p-missing');
    img.removeAttribute('src');
    img.setAttribute('alt', 'GAMBAR: ' + name);
    img.style.setProperty('--missing-label', `"GAMBAR: ${name.replace(/"/g, '')}"`);
  }
  document.querySelectorAll('img').forEach(img => {
    if (!img.getAttribute('src')) return markMissing(img);
    if (img.complete && img.naturalWidth === 0) markMissing(img);
    img.addEventListener('error', () => markMissing(img));
  });

  /* ---------- MODE TAMPIL ---------- */
  document.body.classList.add(s ? 'single' : 'gallery');
  if (s) slides[s - 1]?.classList.add('on');
  if (!s) slides.forEach((el, i) => {
    const l = document.createElement('div');
    l.className = 'eng-label';
    l.textContent = `${String(i + 1).padStart(2, '0')} · ${el.dataset.name || ''}`;
    el.appendChild(l);
  });

  /* ---------- CEK ---------- */
  function runCheck() {
    const css = getComputedStyle(document.documentElement);
    const safe = parseFloat(css.getPropertyValue('--safe-bottom')) || 0;
    const report = [];
    slides.forEach((el, i) => {
      const zoom = parseFloat(getComputedStyle(el).zoom) || 1;
      const box = el.getBoundingClientRect();
      const issues = [];
      el.querySelectorAll('h1,h2,h3,h4,p,li,span,b,em,strong,small,div,figcaption,blockquote').forEach(n => {
        if (n.closest('.p-pano-layer,.eng-label,[data-check-skip]')) return;
        const hasText = [...n.childNodes].some(c => c.nodeType === 3 && c.textContent.trim());
        if (!hasText) return;
        const r = n.getBoundingClientRect();
        if (!r.width || !r.height) return;
        const out = r.left < box.left - 1 || r.right > box.right + 1 || r.top < box.top - 1 || r.bottom > box.bottom + 1;
        const inSafe = safe && r.bottom > box.bottom - safe * zoom + 1 && !n.closest('.ftr,[data-safe-ok]');
        const clipped = n.scrollWidth > n.clientWidth + 2 && getComputedStyle(n).overflow !== 'visible';
        if (out || inSafe || clipped) {
          issues.push({ text: n.textContent.trim().slice(0, 60), out, inSafe, clipped });
          if (check) n.classList.add('eng-bad');
        }
      });
      el.querySelectorAll('img.p-missing').forEach(img => issues.push({ text: img.alt, missingImage: true }));
      if (check && safe) { const z = document.createElement('div'); z.className = 'eng-safe'; z.style.height = safe + 'px'; el.appendChild(z); }
      report.push({ slide: i + 1, name: el.dataset.name || '', ok: !issues.length, issues });
    });
    window.CS_REPORT = report;
    window.CS_MISSING = missing;
    /* v1.2: salinan laporan di DOM supaya bisa dibaca check.ps1 (Edge --dump-dom) */
    if (check) {
      const pre = document.createElement('script');
      pre.type = 'application/json'; pre.id = 'cs-report';
      pre.textContent = JSON.stringify({ report, missing });
      document.body.appendChild(pre);
    }
    document.documentElement.dataset.ready = '1';
  }

  const imgs = [...document.images].filter(i => !i.complete);
  const imgReady = Promise.all(imgs.map(i => new Promise(r => { i.addEventListener('load', r, { once: true }); i.addEventListener('error', r, { once: true }); })));
  Promise.all([document.fonts ? document.fonts.ready : Promise.resolve(), imgReady]).then(runCheck);
})();
