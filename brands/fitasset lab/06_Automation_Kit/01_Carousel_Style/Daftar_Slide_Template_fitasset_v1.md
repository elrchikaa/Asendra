# Daftar slide yang perlu dibuat — fitasset lab (v1)

21 Okt 2026 · diturunkan dari mockup `Mockup_Feed_fitasset_v4` (artifact https://claude.ai/artifact/LPtSg8MgccTkkXtipTaCiT) + katalog di `Analisis_Jenis_Carousel_dan_Slide_Template_v1.md`.

Ini daftar layout produksi untuk dibuat di `carousel-studio/styles/_draft/fitasset-lab/` (kontrak studio: `tokens.css`, `components.css`, `layouts.html`, `starter.html`, `style.md`). Mockup = acuan bentuk, bukan engine produksi.

**Style dasar (ACC owner 20 Okt):** font Arimo · aksen lime #c9ef67 · kartu tweet mulai 52% tinggi · tweet polos campur putih/hitam. Lainnya belum dikunci.

**Aturan yang berlaku di semua slide:** safe zone `_operating-system/standards/aturan-layout-safe-zone.md` (kanan 120px, bawah 180px; reels atas 220 / bawah 450) · huruf judul ≥96px, isi ≥48px, label ≥32px · teks ≥15px dari tepi kotak · cover tanpa @username, slide 2+ pakai @fitasset.lab kecil di kiri atas · angka dari video wajib sitasi kecil.

Kolom **Dipakai di mockup** = ID postingan#slide di `posts.js`.

---

## A. Cover (slide 1)

| # | Layout | Variasi wajib | Data yang diisi | Dipakai di mockup | Prio |
|---|---|---|---|---|---|
| A1 | **Cover kartu foto** (Hormozi) | posisi kartu atas/tengah/bawah · dengan panah geser | foto · teks kartu (≤30 kata) | kapasitas#1, retensi#1 | P1 |
| A2 | **Cover tweet polos** | putih · hitam · dengan baris kutipan | teks (≤35 kata) | c-aid#1, opini#1, listicle#1 | P1 |
| A3 | **Cover angka besar** | angka + satuan kecil (33 *vs 250*) · tanda < / > lebih kecil dari angka · dengan sitasi | foto · angka · satuan · 1 kalimat · sumber | c-pricing#1, c-retensi#1 | P2 |
| A4 | **Cover belah dua** | foto atas redup / bawah berwarna · label + keterangan · lingkaran "vs" | 2 foto · 2 label · 2 keterangan | paket#1 | P2 |
| A5 | **Cover skema** (judul hook + skema) | corong · tangga · grafik batang · bedah kalimat | judul hook + data skema (lihat B) | alur#1, tangga#1, simulasi#1, bedah#1 | P2 |

## B. Isi (slide tengah)

| # | Layout | Variasi wajib | Data yang diisi | Dipakai di mockup | Prio |
|---|---|---|---|---|---|
| B1 | **Kartu foto** | dengan / tanpa sitasi | foto · teks kartu | c-pricing#2, c-aid#2, c-retensi#2, kapasitas#5 … (11 slide) | P1 |
| B2 | **Tweet polos** | putih · hitam · 1–2 paragraf · dengan sitasi | teks · sumber | opini#2–3, c-retensi#8, retensi#4 | P1 |
| B3 | **Poin bernomor di foto** | angka (1–N) · huruf (A/I/D) + mini-peta framework dengan bagian aktif | foto · nomor/huruf · judul ≤8 kata · isi ≤30 kata · daftar peta + indeks aktif | c-aid#4–6, c-retensi#3–7 | P1 |
| B4 | **Poin bernomor polos** (listicle teks) | latar hitam/putih | nomor · judul · isi | listicle#2–4 | P1 |
| B5 | **Kalkulasi** | 2–4 baris hitung · hasil disorot · baris asumsi · sitasi | judul · baris [label, angka] · hasil [label, angka] · asumsi · sumber | c-pricing#4–6 | P1 (uji dulu) |
| B6 | **Tabel 2 kolom** | header X vs Y · kolom anjuran beraksen · 2–4 baris | judul · nama X & Y · baris [aspek, X, Y] · sumber | c-pricing#3 | P1 |
| B7 | **Framework akronim** | 3–5 huruf · kotak huruf + nama + 1 kalimat | judul · daftar [huruf, nama, arti] · sumber | c-aid#3 | P1 |
| B8 | **Framework tangga** | 3 tingkat naik · tingkat teratas beraksen | judul · [nama, keterangan, label harga] ×3 | tangga#1 | P1 |
| B9 | **Framework hub** | 1 pusat + 3 cabang (busur) | judul · pusat · 3 label | kapasitas#4 | P1 |
| B10 | **Framework matriks 2×2** | label sumbu X & Y · 1 kotak disorot | judul · 2 sumbu · 4 kotak [judul, keterangan] | paket#4 | P1 |
| B11 | **Tumpukan komponen** | 4 kartu bertingkat · kartu terakhir beraksen | judul · [nama, fungsi] ×4 | paket#3 | P1 |
| B12 | **Corong / alur 4 tahap** | lebar menyempit · 1 tahap disorot · catatan "ilustrasi" | judul · 4 label · catatan | alur#1 | P2 |
| B13 | **Garis waktu** | 3–5 titik · label waktu · 1 titik disorot | judul · [waktu, aksi, keterangan] | retensi#2 | P2 |
| B14 | **Kalender slot** | grid hari × jam · terisi/kosong · legenda | judul · daftar slot kosong | kapasitas#3 | P2 |
| B15 | **Script chat** | bubble masuk/keluar · bar "simulasi" · maks 3–4 bubble | judul · daftar pesan | c-aid#7, alur#3 | P1 |
| B16 | **Script naskah 2 peran** | label peran · baris "Kamu" beraksen · label "contoh script" | judul · nama peran · daftar giliran · sumber | c-aid#8 | P1 |
| B17 | **Bedah kalimat** (sebelum → sesudah) | coretan merah · label "Terlalu umum / Lebih jelas" · varian **mitos vs fakta** | judul · kalimat lama · kalimat baru (mitos-fakta: label Mitos/Fakta, mitos redup, fakta beraksen) | bedah#1 · mitos: c-valley#3 | P2 |
| B18 | **Checklist di kertas** | kotak centang (sebagian tercentang) · varian **scorecard 1–10** | judul · subjudul · daftar item · jumlah tercentang · (scorecard: daftar [fungsi, skor 1–5], skor terendah disorot otomatis) | c-pricing#7, bedah#4 · scorecard: c-skor#2 | P2 |
| B19 | **Lembar kerja** | kertas miring · isian tulisan tangan · catatan tempel beraksen | judul · [label, isian] · catatan | retensi#3 | P2 |
| B20 | **Angka besar (isi)** | sama dengan A3, dengan @username | angka · satuan · kalimat · sumber | kapasitas#2 | P2 |
| B21 | **Grafik batang** | ≤5 batang · 1 disorot · varian **kurva** (garis + area, 1–2 label titik, label sumbu) | judul · [label, nilai, tinggi %] · kurva: [x%, y%, label, sorot] + 2 label sumbu | simulasi#1 · kurva: c-valley#2 | P3 |
| B22 | **Foto beranotasi** | 3–5 titik label di foto | foto · judul · [x%, y%, label] | bedah#3, tangga#3 | P3 |

## C. Penutup (CTA)

Mengikuti `_operating-system/standards/aturan-slide-cta-carousel.md`: headline klaim + subheadline + CTA, teks CTA tidak sama terus, 3 keluarga varian.

| # | Layout | Variasi wajib | Data yang diisi | Dipakai di mockup | Prio |
|---|---|---|---|---|---|
| C1 | **CTA tanpa preview: tombol** | tombol aksen · teks tombol bervariasi | foto · headline · sub · teks tombol | c-pricing#8 | P1 |
| C2 | **CTA tanpa preview: keyword komen** | kalimat ajakan kecil + keyword besar dalam kutip | foto · headline · sub · ajakan · keyword | c-retensi#9 | P1 |
| C3 | **CTA preview produk** | tablet/perangkat dengan sampul produk · teks link bio bergaris bawah | foto · headline · sub · teks CTA · nama produk · gambar perangkat | c-aid#9 | P1 |
| C4 | **CTA bukti** | foto owner / testimoni asli | — | belum ada | **Belum ada data** |

Catatan: preview di C3 masih foto tablet Pexels + sampul buatan, berlabel "PREVIEW SEMENTARA". Ganti dengan halaman produk asli kalau sudah ada.

## D. Reels (frame 1080×1920)

| # | Layout | Variasi wajib | Data yang diisi | Dipakai di mockup | Prio |
|---|---|---|---|---|---|
| D1 | **Frame reels kartu** | bold claim · open loop · penutup "Jawabannya di caption ↓" · bar progres | footage latar · teks kartu per frame · caption lengkap | r-kapasitas, r-pricing, r-produk, r-checkin, r-konten, r-lisensi (18 frame) | Spec untuk sesi video (HyperFrames) |

## E. Komponen lintas slide

| # | Komponen | Aturan | Prio |
|---|---|---|---|
| E1 | Kartu tweet (avatar, nama, handle, panah geser) | dipakai A1, B1, D1 | P1 |
| E2 | Header tweet polos | dipakai A2, B2, B4 | P1 |
| E3 | @username kecil kiri atas | slide 2+, tidak di cover | P1 |
| E4 | Sitasi sumber | hanya kalau ada sumbernya (video/narasumber). Kecil (32px), redup, di atas batas bawah 180px | P1 |
| E5 | ~~Label "ilustrasi / simulasi / contoh script"~~ | **Dihapus** (keputusan owner 21 Okt: tidak penting). Yang tetap ada hanya sitasi bersumber (E4) | — |
| E6 | Lapisan gelap di atas foto (gradasi bawah, redup penuh, redup atas) | semua slide foto | P1 |
| E7 | Bar progres reels | D1 | Spec video |

---

## Ringkasan jumlah

- **32 layout**: 5 cover, 22 isi, 4 CTA (1 menunggu data), 1 frame reels, ditambah 7 komponen.
- **P1 (buat dulu): 18 layout + 5 komponen** → A1, A2, B1–B11, B15, B16, C1–C3 (B5 kalkulasi berstatus uji).
- **P2: 10 layout** → A3–A5, B12–B14, B17–B20.
- **P3: 2 layout** → B21, B22.
- Layout B8–B11 (tangga, hub, matriks, tumpukan) adalah bentuk-bentuk dari S08 "Framework utuh" di analisis, jadi semuanya ikut P1.
- Belum dibuat: C4 bukti (belum ada data asli).

## Urutan kerja yang disarankan
1. Komponen E1–E6 + token style dasar.
2. P1: A1, A2, B1, B2, B3, B4 → B5, B6, B7 → B8–B11 → B15, B16 → C1–C3.
3. Render 3 carousel contoh (A, B, C di mockup) pakai layout studio, cek `check.mjs` + QC spacing, lalu minta ACC style.
4. P2, lalu P3.

---

## F. Catatan koreksi owner (wajib dipatuhi saat membuat layout di studio)

Dikumpulkan dari review mockup v2–v4, 20–21 Okt 2026.

**Format halaman review**
1. Mockup feed ditampilkan sebagai artifact dengan format seperti mockup AuraNeuro: latar gelap, panel pilihan, ponsel IG, semua slide per postingan, centang + tombol salin. Jangan pakai localhost.
2. Grid feed tanpa label format (Reels / Foto + skema / dll.). Cukup ikon kecil carousel/reels.

**Isi & variasi**
3. Isi carousel jangan cuma kartu Hormozi + tweet. Wajib ada variasi skema yang jelas berbeda (corong, kalender, angka besar, belah dua, tangga, chat, lembar kerja, dll.).
4. Cover juga bervariasi: slide tengah yang kuat boleh naik jadi cover dengan judul hook.
5. Carousel latarnya gambar. Reels latarnya video, dengan kartu tweet yang sama persis.

**Identitas di slide**
6. Tidak ada watermark/logo brand di kiri atas. Cover tanpa apa pun. Slide 2+ cukup @username kecil di kiri atas.
7. Sitasi hanya kalau ada sumber nyata. Ukurannya kecil dan redup, tidak lebih menonjol dari isi.
8. Label penjelas seperti "ilustrasi", "simulasi", "bukan janji penghasilan", "contoh script" **tidak dipakai**.

**Spacing & komposisi**
9. Ikuti safe zone `aturan-layout-safe-zone.md` di semua slide, termasuk label kecil dan elemen grafik.
10. Judul + grafik jadi satu blok yang seimbang di tengah area aman. Judul tidak menempel ke atas, dan grafik tidak mepet ke batas bawah.
11. Teks tidak boleh tabrakan dengan frame atau kotak lain (kasus: keterangan belah dua).
12. Teks di dalam kotak tidak mepet ke tepi (kasus: "Paket dengan sistem" di corong). Kotak boleh memanjang supaya teks jadi 2 baris.
13. Glyph yang berdampingan diberi jarak (kasus: "22/25").
14. Simbol pendamping angka dibuat lebih kecil dari angkanya, tapi tidak terlalu kecil: ±70% tinggi angka (kasus: "<3%" yang terbaca seperti emoji hati).
15. Jarak atas dan bawah di dalam kotak harus seimbang. Tinggi kertas/kotak mengikuti isi (kasus: notes checklist).
16. Subjudul dan isi di dalam kotak rapat, lalu dirata tengah vertikal. Isi jangan turun ke bawah kotak (kasus: tumpukan Program/Tracker/Panduan/Check-in).
17. Hub/grafik bulat: cabang dekat dengan lingkaran, tanpa ruang kosong aneh di tengah.
17b. Label di grafik garis/kurva: jarak terdekat ke garis **±2–4,5cqw (±22–50px)**. Tidak boleh menabrak, tapi juga **jangan dijauhkan berlebihan** (kasus: label dinaikkan terlalu tinggi lalu dikoreksi owner). Jarak itu sama dengan jarak antarteks lain. Dicek otomatis lewat `QCKURVA()` di `qc.js`, yang menandai jarak terlalu dekat maupun terlalu jauh.
17c. Prinsip umum untuk semua koreksi jarak: perbaiki ke jarak yang **proporsional** (±2–4cqw antarelemen yang saling terkait), bukan memindahkan elemen sejauh mungkin.

**Proses**
18. Cek **seluruh** mockup (semua slide, cover, tile grid) sebelum bilang selesai: QC otomatis `Mockup_Feed_fitasset_v4/qc.js` (`QC()` safe zone, ukuran huruf, tabrakan, jarak tepi · `QCBAL()` keseimbangan kotak · `QCKURVA()` label vs garis kurva) + lihat screenshot semua slide.
19. Teks layar ikut `writing-rules-v2.md`: tanpa tanda pisah panjang, tanpa pola gema pendek ("X. Klien beli Y.").
