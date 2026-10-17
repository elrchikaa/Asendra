/* =====================================================================
   STYLE <nama-style> — JS (opsional)
   Untuk elemen yang diisi otomatis: header, footer, nomor slide, badge, dll.
   Dimuat dengan <script defer> SEBELUM engine.js.
   ===================================================================== */
(function () {
  const slides = [...document.querySelectorAll('.slide')];
  // contoh: isi nomor halaman otomatis
  // slides.forEach((s, i) => { const pg = s.querySelector('.pg'); if (pg) pg.textContent = `${i + 1} / ${slides.length}`; });
})();
