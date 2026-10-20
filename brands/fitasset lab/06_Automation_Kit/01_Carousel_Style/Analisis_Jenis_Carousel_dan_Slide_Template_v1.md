# Analisis jenis carousel & slide template — fitasset lab (v1)

20 Okt 2026 · tahap analisis & spesifikasi, belum desain/HTML.

**Bahan:** `Knowledge_YouTube_FIX/02_Bank_Ide_Konten_dan_Produk.md` (84 hook), `01_Sintesis_Tema.md`, `00_INDEX.md`, brand context, `carousel-studio/library/knowledge/` (jenis-carousel, prinsip-slide, cta), `library/visual/layouts.md` + `diagrams.md` (masih kosong), `formats/FORMATS.md` + resep R01–R27, riset selera visual + opsi style, `aturan-slide-cta-carousel.md`, mockup `Mockup_Feed_fitasset_v3` (belum ACC).

**Batas analisis ini**
- Knowledge base hanya bahan **ide**. Jenis visual/style tetap ditentukan riset style & benchmark. Status style saat ini: teks polos tanpa foto TERBUKTI (20 konten, 2 akun). Foto + kartu tweet Hormozi masih KANDIDAT (14 konten, 1 akun), tetapi dipakai sebagai style utama atas arahan owner. Skema/diagram **belum punya bukti winner** di benchmark (lihat `05_Analysis/Bedah_Konten_Benchmark_fitasset_lab/`).
- Library pola studio (`layouts.md`, `diagrams.md`, `copy/_jenis.md`) **masih kosong**, jadi belum ada layout L-### / D-### yang bisa dirujuk. Rujukan "sudah ada" di bawah adalah resep lintas style `formats/recipes.html` (R01–R27) dan tipe slide di mockup v3 (eksplorasi, belum ACC).
- Pemetaan adalah penilaian AI dari hook + inti isi, belum dicek ke detail tiap video. Kolom bank "R" = disarankan reels. Ide R tetap dipetakan, tapi versi carousel-nya opsional.
- Semua angka di hook adalah **klaim narasumber**. Wajib berlabel "menurut Gym Launch / Hormozi / …" atau "ilustrasi", dan dolar dikonversi ke Rupiah sebagai ilustrasi.

---

## 1. Pemetaan hook → jenis carousel

Kode slide (Sxx) dijelaskan di bagian 3. Label jenis persis dari `jenis-carousel.md`. Kalkulasi tidak punya label jenis sendiri, jadi masuk `data-stats` kalau angka jadi bintangnya, atau tetap di jenis lain dengan slide S05.

| ID | Hook (dipotong) | Fmt bank | Jenis utama | Campuran per slide | Sumber |
|---|---|---|---|---|---|
| 1 | Gym-mu penuh tapi gak untung? Hitung kapasitas maksimalmu dulu. | C | `data-stats` | hook angka (S03) → kalkulasi kapasitas (S05) → arti (S01) → CTA | YT21 |
| 2 | Rumus yang menunjukkan batas maksimal member gym-mu. | C | `framework` | hook rumus (S01) → rumus utuh (S05) → contoh hitung (S05) → cara pakai (S13) → CTA | YT05, YT01 |
| 3 | 240 member bisa lebih untung daripada 1.000 member. | C | `framework` | hook angka data-stats (S03) → wedding cake utuh (S08) → bedah 5 lapis (S04 varian huruf/lapis) → comparison 240 vs 1.000 (S07) → CTA | YT21 |
| 4 | Member kamu belanja suplemen & baju olahraga tiap bulan. Bukan di gym  | C/R | `explainer` | hook (S01) → konsep dompet terpisah (S08) → build ×2 (S01) → payoff (S02) → CTA | YT21, YT03 |
| 5 | Member kamu punya 'perut dessert' yang masih kosong. | R | `explainer` | hook analogi (S02) → penjelasan (S01) → payoff (S02) | YT03 |
| 6 | Naikkan harga sedikit, profit bisa 2x. Ini hitungannya. | C | `data-stats` | hook (S01) → kalkulasi margin klaim (S05) → comparison sebelum/sesudah naik harga (S07) → CTA | YT07 |
| 7 | Tagih tiap 4 minggu, bukan tiap bulan: dapat 1 bulan ekstra per tahun. | C | `data-stats` | hook (S03) → 13 vs 12 siklus (S07) → kalkulasi selisih (S05) → CTA | YT01, YT07 |
| 8 | Jangan jual 'unlimited'. Jual 3x seminggu. | C/R | `comparison` | hook (S02) → unlimited vs 3x seminggu (S07) → kalkulasi kapasitas (S05) → CTA | YT07 |
| 9 | Satu tali skipping bisa memotong kapasitas kelasmu setengah. | R | `explainer` | hook (S01) → hitung ruang per alat (S05) → payoff (S02) | YT07 |
| 10 | Margin sesi gym harus minimal 80%. Cara hitungnya. | C | `tutorial` | hook (S01) → rumus (S05) → langkah hitung ×3 (S04) → checklist (S13) → CTA | YT01 |
| 11 | Mau beli franchise gym? Hitung payback period-nya dulu. | C | `comparison` | hook (S01) → franchise vs independen (S07) → kalkulasi payback klaim (S05) → checklist sebelum beli (S13) → CTA | YT12 |
| 12 | Gym baru jangan buka kelas dulu. Jual ini 90 hari. | C/R | `tutorial` | hook (S01) → alur pre-sale 90 hari (S10) → langkah ×3 (S04) → CTA | YT12 |
| 13 | Cuma ada 2 cara bikin bisnis fitness yang 'menggulung'. | R | `explainer` | hook (S02) → 2 cara (S07) → payoff (S02) | YT06 |
| 14 | Gym kamu tempat latihan atau tempat transformasi? | C/R | `comparison` | hook (S01) → tempat latihan vs transformasi (S07) → bundle akuntabilitas (S08) → CTA | YT07 |
| 15 | Kasih nasihat nutrisi gratis ke member? Ada yang mau bayar untuk itu. | R | `explainer` | hook (S01) → lapis hybrid (S08) → payoff (S02) | YT21 |
| 16 | Kenapa gym-mu sepi padahal iklan jalan? Kamu cuma buka 'toko' 2 jam se | R | `explainer` | hook (S01) → analogi jam buka (S06 batang jam) → build (S01) → payoff (S02) → CTA | YT02, YT05 |
| 17 | Boost post itu bukan iklan. | R | `myth-fact` | hook (S02) → mitos vs fakta (S12) → payoff (S02) | YT05 |
| 18 | Anatomi iklan gym yang menang: 5 elemen. | C | `framework` | hook (S01) → anatomi iklan contoh buatan sendiri (S16) → 5 elemen (S04) → checklist (S13) → CTA | YT05 |
| 19 | Ganti 'lebih berenergi' dengan kalimat ini. | C | `comparison` | hook (S02) → kalimat lama vs baru ×3 (S12) → rumus benefit of the benefit (S05 varian rumus kata) → CTA | YT05 |
| 20 | 7 jenis P.S. yang bikin iklan lebih laku. | C | `listicle` | hook (S02) → 7 jenis P.S. (S04 ×7) → CTA | YT05 |
| 21 | Akui kelemahan gym-mu di iklan. Ini rumusnya. | C/R | `framework` | hook (S01) → rumus buruk-buruk-tapi baik (S08) → contoh copy (S12) → CTA | YT10, YT05 |
| 22 | Challenge gratis vs berbayar: data 10 tahun Gym Launch bilang begini. | C | `data-stats` | hook klaim GL (S03) → gratis vs berbayar (S07) → sumber klaim (S02 varian kutipan) → CTA | YT06, YT07 |
| 23 | Lead masuk? Telepon dalam 5 menit. | R | `explainer` | hook (S03) → alasan (S01) → payoff (S02) | YT02, YT05 |
| 24 | Kalau takut mengganggu calon member, mereka gak akan 'mengganggumu' de | C | `tutorial` | hook (S02) → kalender follow-up 30 hari (S10) → contoh pesan (S11) → CTA | YT05 |
| 25 | Kontak lama di HP-mu = uang yang diam. | C | `tutorial` | hook (S01) → drip 3 hari (S10) → script pesan (S11) → CTA | YT13 |
| 26 | Jangan pernah blast promo ke semua kontak sekaligus. | R | `myth-fact` | hook (S02) → blast vs drip (S12) → payoff (S02) | YT13 |
| 27 | Kenapa trial class gratis bikin gym-mu jadi komoditas. | R | `comparison` | hook (S01) → trial gratis vs konsultasi (S07) → payoff (S02) | YT09, YT11 |
| 28 | Ruang konsultasi gym harus terasa seperti ruang dokter. | C | `checklist` | hook (S01) → checklist ruang konsultasi (S13) → foto beranotasi ruang (S16) → CTA | YT09 |
| 29 | Kirim 3 before/after ke calon member SEBELUM mereka datang. | R | `tutorial` | hook (S01) → langkah ×3 (S04) → contoh pesan (S11) | YT09 |
| 30 | Kursi konsultasi jangan berhadapan. Ini alasannya. | R | `explainer` | hook (S01) → alasan (S16 posisi duduk) → payoff (S02) | YT09 |
| 31 | Calon member: 'nanti aku tanya suami dulu.' Jawab dengan 3 langkah ini | C/R | `framework` | hook keberatan (S02) → AID utuh (S08) → bedah A-I-D (S04 varian huruf) → script dialog (S11) → CTA | YT11 |
| 32 | 'Aku pikir-pikir dulu' itu bukan keberatan. | C | `framework` | hook (S02) → isolasi + 3 pertanyaan (S04) → script dialog (S11) → CTA | YT11, YT18 |
| 33 | 'Di gym sebelah cuma Rp 150 ribu.' Jawab begini. | R | `post-screenshot` | hook keberatan (S02) → script jawaban (S11) → prinsip (S02) | YT11 |
| 34 | Jangan tunggu challenge selesai buat nawarin membership. | C | `framework` | hook (S01) → CONVERT utuh (S08) → timeline halfway meeting (S10) → CTA | YT02 |
| 35 | Kenapa calon member gagal di program sebelumnya: mereka gak pernah pun | C | `framework` | hook (S01) → peta Fitness/Nutrisi/Akuntabilitas (S08) → bedah 3 pilar (S04) → CTA | YT05, YT18 |
| 36 | Sebelum sales call, baca 10 testimoni keras-keras. | R | `explainer` | hook (S01) → alasan (S01) → payoff (S02) | YT18 |
| 37 | Program latihanmu bukan alasan member bertahan. Ini alasannya. | R | `myth-fact` | hook (S02) → mitos vs fakta (S12) → 2 alasan (S04) | YT24 |
| 38 | 5 kebiasaan gym dengan churn di bawah 3%. | C | `listicle` | hook angka klaim (S03) → 5 kebiasaan (S04 ×5) → ringkasan (S13) → CTA | YT01, YT07 |
| 39 | Exit interview: 1 percakapan yang mengubah pembatalan jadi upgrade. | R | `tutorial` | hook (S01) → alur exit interview (S10) → script (S11) → CTA | YT04, YT01 |
| 40 | Event komunitas paling efektif justru di luar gym. | R | `explainer` | hook (S01) → alasan (S01) → payoff (S02) | YT01 |
| 41 | Churn naik dulu saat kamu mulai peduli member. Itu tanda bagus. | C | `data-stats` | hook (S02) → grafik churn naik lalu turun, ilustrasi (S06) → arti (S01) → CTA | YT07, YT01 |
| 42 | 90 hari pertama member menentukan segalanya. | C | `framework` | hook (S01) → 90-day journey (S10) → checkpoint ×3 (S04) → checklist (S13) → CTA | YT01 |
| 43 | Tiket emas: cara meluncurkan program premium tanpa iklan. | C/R | `tutorial` | hook (S01) → langkah golden ticket (S04) → script (S11) → CTA | YT01, YT21 |
| 44 | Klien gak mau bayar hargamu? Jangan diskon. Potong durasinya. | R | `explainer` | hook (S02) → potong durasi bukan diskon (S12) → script negosiasi (S11) | YT16 |
| 45 | Bersih-bersih gym buat potong sewa = gaji UMR. | R | `data-stats` | hook (S01) → hitungan per jam (S05) → payoff (S02) | YT16 |
| 46 | Kamu cuma kerja IN bisnis, bukan ON bisnis. | C | `comparison` | hook (S02) → in vs on (S07) → checklist on the business (S13) → CTA | YT16 |
| 47 | Curhat klien di sesi ke-5 = hook konten terbaikmu. | R | `explainer` | hook (S01) → alasan (S01) → payoff (S02) | YT16 |
| 48 | Jangan langsung online. Urutan yang benar: offline → hybrid → online. | C | `framework` | hook (S01) → urutan offline→hybrid→online (S08 tangga) → bedah tahap (S04) → CTA | YT17 |
| 49 | 49 klien × Rp X/minggu = ±2 jam kerja sehari. | C | `data-stats` | hook angka (S03) → kalkulasi klien × harga × jam (S05) → rotasi 2 mingguan (S10) → CTA | YT17 |
| 50 | 9 dari 10 online coach nyaris gak dapat uang. Ini kenapa. | C/R | `explainer` | hook angka klaim (S03) → grafik valley of death (S06) → cara lewat (S04) → CTA | YT17 |
| 51 | Jual membership murah per bulan? Ini hitungan yang bikin kaget. | C | `data-stats` | hook (S01) → kalkulasi traffic 1% konversi (S05) → arti (S02) → CTA | YT14 |
| 52 | 33 klien vs 250 klien untuk penghasilan yang sama. | C | `comparison` | hook angka (S03) → low vs high ticket (S07) → kalkulasi dua sisi (S05) → syarat high ticket (S13) → CTA | YT14 |
| 53 | Jangan pasang iklan kalau kamu belum punya ini. | R | `checklist` | hook (S01) → 3–4 syarat (S13) → payoff (S02) | YT14 |
| 54 | 'Saya wellness coach' = kalimat yang bikin kamu gak laku. | R | `myth-fact` | hook (S02) → kalimat niche lama vs baru (S12) → payoff (S02) | YT23 |
| 55 | Masalah yang bisa dijual mahal punya 2 syarat. | C | `framework` | hook (S01) → matriks parah × terus-menerus (S08 matriks) → contoh (S04) → CTA | YT23 |
| 56 | Grafik yang menjelaskan kenapa coach 1-on-1 pasti mentok. | C | `explainer` | hook (S01) → grafik capacity ceiling (S06) → jalan keluar (S08) → CTA | YT23 |
| 57 | 3C: rumus program grup biar gak ngulang penjelasan ke tiap klien. | C | `framework` | hook (S01) → 3C utuh (S08) → bedah C-C-C (S04 varian huruf) → CTA | YT20, YT23 |
| 58 | Kamu bukan kurang klien. Kamu kebanyakan kustomisasi. | R | `explainer` | hook (S02) → 80/20 delivery (S06) → payoff (S02) | YT20 |
| 59 | Orang gak bayar coach buat informasi. Mereka bayar buat ini. | R | `explainer` | hook (S02) → informasi vs implementasi (S07) → payoff (S02) | YT20, YT18 |
| 60 | Program dengan tanggal akhir bisa dijual 2–3x lebih mahal. | C | `comparison` | hook (S01) → dengan vs tanpa tanggal akhir (S07) → payoff (S02) → CTA | YT04, YT18 |
| 61 | Meal plan + program latihan cuma menyelesaikan sebagian masalah klienm | C | `framework` | hook (S01) → peta penyebab gagal klien (S08 hub) → bedah (S04) → CTA | YT04 |
| 62 | Follower 500 bisa ngalahin akun jutaan. Ini bedanya. | R | `myth-fact` | hook angka (S03) → follower vs income (S12) → payoff (S02) | YT22, YT08 |
| 63 | Coach gak perlu badan bodybuilder buat laku. | R | `myth-fact` | hook (S02) → mitos vs fakta (S12) → payoff (S02) | YT22 |
| 64 | Kontenmu sepi karena kamu belum posting cukup banyak. | R | `explainer` | hook (S02) → volume (S06 grafik ilustrasi) → payoff (S02) | YT22, YT17 |
| 65 | Tulis 5 klien favoritmu. Itu 5 konten minggu ini. | C | `tutorial` | hook (S01) → langkah ×3 (S04) → worksheet 5 klien (S13 varian isi) → CTA | YT17 |
| 66 | 3 jenis konten wajib: Connection, Value, Proof. | C | `framework` | hook (S01) → C-V-P utuh (S08) → bedah 3 jenis + contoh (S04) → CTA | YT15, YT08 |
| 67 | Bio IG coach yang menghasilkan klien: 7 elemen. | C | `checklist` | hook (S01) → bio contoh beranotasi (S16) → 7 elemen (S13) → CTA | YT15 |
| 68 | 3 highlight & 3 pinned post yang bikin orang DM. | C | `checklist` | hook (S01) → 3 highlight + 3 pinned (S04) → checklist (S13) → CTA | YT08 |
| 69 | Jangan pelit ilmu. Ini alasan klien justru beli. | R | `explainer` | hook (S02) → alasan (S01) → payoff (S02) | YT08, YT10 |
| 70 | Lead terhangatmu ada di daftar viewer story. | R | `tutorial` | hook (S01) → langkah (S04) → contoh pesan (S11) | YT08 |
| 71 | 5 pertanyaan DM yang bikin calon klien minta di-call. | C | `listicle` | hook (S02) → 5 pertanyaan DM (S11 ×5 atau S04) → CTA | YT15, YT08 |
| 72 | 2 pesan konfirmasi yang menaikkan kehadiran call. | R | `tutorial` | hook (S01) → 2 pesan konfirmasi (S11) → payoff (S02) | YT08 |
| 73 | Pesan untuk calon klien yang menghilang: 'Udah nyerah soal…?' | R | `post-screenshot` | hook (S02) → script reaktivasi (S11) → payoff (S02) | YT08 |
| 74 | Jangan bikin program dulu. Jual dulu, bikin setelah dibayar. | R | `explainer` | hook (S02) → urutan jual dulu (S10) → payoff (S02) | YT15 |
| 75 | Sudah berapa persen follower-mu masuk list kontak? | C | `data-stats` | hook (S02) → kalkulasi 20% list (S05) → cara mulai (S04) → CTA | YT17 |
| 76 | Cara bikin lead magnet 'komen kata X'. | R | `tutorial` | hook (S01) → alur komen → lead (S10) → CTA | YT22 |
| 77 | Saat ekonomi lesu, yang tutup duluan bukan gym kecil, tapi yang ini. | R | `explainer` | hook (S01) → 30% terbawah (S06) → payoff (S02) | YT06 |
| 78 | Bikin daftar 'harusnya aku kerjain tapi enggak'. Itu rencana bisnismu. | C | `tutorial` | hook (S02) → langkah (S04) → worksheet daftar (S13 varian isi) → CTA | YT06 |
| 79 | 5 tahap shiny object: kamu lagi di tahap mana? | C | `framework` | hook (S02) → kurva 5 tahap (S06 kurva) → bedah tahap (S04) → CTA | YT06 |
| 80 | Nilai bisnismu di 7 fungsi inti. Yang paling rendah = prioritas bulan  | C | `checklist` | hook (S01) → scorecard 7 fungsi (S13 varian skor) → cara baca skor (S02) → CTA | YT01 |
| 81 | Urutan rekrut yang benar untuk gym kecil. | C | `framework` | hook (S01) → urutan rekrut (S08 tangga) → bedah peran (S04) → CTA | YT01 |
| 82 | Hari kerja ideal gym owner: 3 blok. | C | `framework` | hook (S01) → 3 blok hari (S10 jadwal) → bedah blok (S04) → CTA | YT01 |
| 83 | Rumus brand: Produk − Janji. | R | `quote` | hook rumus (S02) → arti (S02) → contoh (S01) | YT06 |
| 84 | Kasih gratis apa yang kompetitor jual. | R | `explainer` | hook (S02) → contoh lead magnet (S04) → payoff (S02) | YT10 |

---

## 2. Rekap jenis

| Jenis | Ide (semua) | Ide berformat C atau C/R | Contoh ID | Status untuk fitasset lab | Alasan |
|---|---:|---:|---|---|---|
| `framework` | 17 | 17 | 3 (wedding cake), 31 (AID), 57 (3C) | **Prioritas** | Paling banyak di ide C. Cocok "layak disimpan" + menjual produk Lini 4 (script, kit). Butuh diagram utuh → bedah per bagian. |
| `explainer` | 21 | 3 | 4, 50, 56 | **Prioritas** (kebanyakan versi reels) | Jumlah terbanyak, tapi 18 dari 21 disarankan reels. Untuk carousel: 1 konsep per slide + grafik. |
| `tutorial` | 12 | 7 | 12, 25, 39 | **Prioritas** | Langkah + script siap pakai, nyambung ke produk P11/P12/P14. |
| `data-stats` | 9 | 8 | 1, 6, 52* | **Prioritas, dengan syarat** | Sesuai Greed Engine (hitungan uang). Syarat: tiap angka berlabel sumber narasumber atau "ilustrasi". |
| `comparison` | 8 | 7 | 8, 11, 52 | **Prioritas** | X vs Y + hitungan dua sisi (low vs high ticket, franchise vs independen). |
| `myth-fact` | 6 | 0 | 17, 54, 62 | Pakai terbatas | Semua disarankan reels. Untuk carousel cukup jadi satu slide di dalam explainer. |
| `checklist` | 5 | 4 | 28, 67, 80 | **Prioritas** | Layak disimpan. Termasuk scorecard self-assessment (#80). |
| `listicle` | 3 | 3 | 20, 38, 71 | Prioritas | Sedikit sebagai jenis utama, tapi slide poin bernomor (S04) dipakai 29 ide. |
| `post-screenshot` | 2 | 0 | 33, 73 | Pakai terbatas | Hanya sebagai **script contoh** berlabel, bukan screenshot percakapan yang pura-pura terjadi. |
| `quote` | 1 | 0 | 83 | Pakai terbatas | Kutipan narasumber wajib sebut nama + video. |
| `storytelling` | 0 | 0 | — | Belum dibutuhkan | Bank tidak punya cerita founder/klien. Cerita narasumber (mis. YT08) bisa jadi `case-study` berlabel, belum dipetakan. |
| `case-study` | 0 | 0 | — | **Hindari dulu, belum ada data** | Butuh hasil klien fitasset yang nyata + periode. |
| `testimonial` | 0 | 0 | — | **Hindari dulu, belum ada data** | Harus asli & atas izin. Belum ada. |
| `transformation` | 0 | 0 | — | **Hindari dulu, belum ada data** | Before-after asli belum ada. Topik fitasset juga B2B. |
| `product-showcase` | 0 | 0 | — | Pakai terbatas (di slide CTA/bridge) | Produk Lini 1–4 ada, tapi preview halaman asli belum disiapkan. |
| `gallery`, `news` | 0 | 0 | — | Tidak dibutuhkan | Tidak ada di bank ide. |

\* #52 jenis utamanya `comparison` tapi isinya didominasi kalkulasi.

**Temuan utama**
- Dari 49 ide berformat C atau C/R, 17 adalah `framework`, 8 `data-stats`, 7 `comparison`, 7 `tutorial`. Template harus kuat di **diagram, hitungan, tabel 2 kolom, dan script**.
- Slide yang paling sering dipakai lintas ide: cover kartu foto (51 ide), tweet polos (48), poin bernomor (29), checklist (15), framework utuh (15), kalkulasi (14), tabel 2 kolom (13), script (13).

---

## 3. Katalog jenis slide template

Pola visual: `single` · `image-overlay` · `seamless-panorama` · `spread-diagram`. Batas teks dihitung untuk kanvas 1080×1440 dan safe zone `aturan-layout-safe-zone.md` (kanan 120px, bawah 180px; judul ≥96px, isi ≥48px, label ≥32px).

| Kode | Nama slide | Fungsi | Dipakai jenis | Elemen wajib | Batas teks | Pola visual | Status di studio/style |
|---|---|---|---|---|---|---|---|
| S01 | Kartu foto (gaya Hormozi) | Cover hook, opini, payoff | semua | Foto latar + gradasi, kartu tweet putih (avatar, nama, handle), 1–3 kalimat, panah geser di cover | ≤30 kata di kartu | `image-overlay` | Ada: resep R02/R20 + mockup v3 `kartu`. Style belum ACC |
| S02 | Tweet polos | Hook/opini tanpa foto, payoff, kutipan narasumber | explainer, myth-fact, quote, semua payoff | Latar putih/hitam, header tweet, teks besar. Varian **kutipan**: baris sumber "— Hormozi, YT06" | ≤35 kata | `single` | Ada: R20 + mockup v3 `tweet`. Varian kutipan + sumber **perlu dibuat** |
| S03 | Angka besar | Hook data / kejutan angka | data-stats, comparison, listicle | Angka raksasa + satuan, 1 kalimat arti, **label sumber atau "ilustrasi"** | Angka ≤6 karakter, kalimat ≤15 kata | `image-overlay` atau `single` | Ada: R17 + mockup v3 `angka`. Label sumber **perlu ditambah** |
| S04 | Poin bernomor | 1 poin per slide; varian **huruf/bagian** untuk bedah framework (A-I-D, C-C-C, lapis 1–5) | listicle, framework, tutorial, checklist | Nomor/huruf besar konsisten, judul poin, 1–2 kalimat, (opsional) penanda posisi di framework | Judul ≤8 kata, isi ≤30 kata | `single` | Ada: R15 + mockup v3 `list`. Varian huruf + mini-peta framework **perlu dibuat** |
| S05 | Kalkulasi / rumus | Tunjukkan hitungan langkah demi langkah (gym max, margin, siklus 4 minggu, low vs high ticket, payback) | data-stats, comparison, framework, tutorial | 2–4 baris hitung (input × input = hasil), hasil disorot, baris asumsi, **label sumber klaim + "ilustrasi Rupiah"**, beda omzet vs laba | ≤4 baris, angka ≤12 karakter per baris | `single` (latar polos/foto redup) | Sebagian: mockup v3 `batang` + simulasi v2. **Perlu dibuat baru** (komponen baris hitung) |
| S06 | Grafik sederhana | Pola naik-turun / batas (valley of death, capacity ceiling, churn naik dulu, shiny object) | explainer, data-stats, framework | Batang ≤5 kategori atau 1 kurva, label langsung, keterangan "ilustrasi" kalau tidak ada data | ≤5 label, ≤3 kata per label | `single` | Batang: mockup v3 `batang`. **Kurva perlu dibuat baru** |
| S07 | Tabel 2 kolom | X vs Y (unlimited vs 3x/minggu, franchise vs independen, in vs on, low vs high ticket) | comparison, data-stats, framework | Header 2 kolom (posisi X & Y tetap), 2–4 baris aspek, kolom yang dianjurkan diberi aksen | ≤4 baris, ≤6 kata per sel | `single`; varian foto = belah dua `image-overlay` | Belah dua foto: mockup v3 `belah`. **Versi tabel perlu dibuat** (v2 punya `compare`, belum dibawa ke v3) |
| S08 | Framework utuh | Tampilkan model bernama secara utuh sebelum dibedah (wedding cake, AID, CONVERT, 3C, 3 pilar F/N/A, C-V-P, tangga offline→online, urutan rekrut, peta penyebab gagal) | framework, explainer | Nama framework, diagram 3–7 bagian (bentuk: lapis/tangga, lingkaran/hub, kolom, matriks 2×2), label ≤3 kata | ≤7 bagian | `single`, atau `spread-diagram` untuk ≥5 bagian | Bentuk ada di mockup v3: `tangga`, `hub`, `matriks`, `tumpuk`, `corong`. Spread: resep R26–27. **Varian lapis/kue & kolom akronim perlu dibuat** |
| S10 | Alur / timeline | Urutan langkah/waktu (pre-sale 90 hari, drip 3 hari, follow-up 30 hari, 90-day journey, 3 blok hari) | tutorial, framework | 3–5 titik berurutan, label waktu (Hari/Minggu), 1 aksi per titik, satu titik disorot | ≤5 titik, ≤6 kata per aksi | `single`; `seamless-panorama` kalau >5 titik | Ada: mockup v3 `waktu`, `corong`, `kalender`. Panorama: R23–25 |
| S11 | Script / dialog | Contoh kata-kata (DM, telepon, keberatan AID, konfirmasi H-1, exit interview, negosiasi) | tutorial, framework, post-screenshot | Dua peran (Kamu / Calon member), bubble chat **atau** naskah bergaris, label **"contoh script"**, maks 4 giliran | ≤4 giliran, ≤20 kata per giliran | `single` (bisa di atas foto redup) | Chat: R13 + mockup v3 `chat`. **Varian naskah telepon/tatap muka perlu dibuat** |
| S12 | Sebelum → sesudah (kalimat) | Bedah copy/iklan/niche; varian **mitos vs fakta** (mitos redup, fakta menonjol) | myth-fact, comparison, framework | Label tetap ("Terlalu umum"/"Lebih jelas" atau "Mitos"/"Fakta"), coretan di versi lama, versi baru beraksen | 2 blok, ≤25 kata per blok | `single` / `image-overlay` | Ada: mockup v3 `bedah` + R18. Varian mitos-fakta **perlu disamakan** ke komponen ini |
| S13 | Checklist / scorecard | Cek sebelum, ringkasan/cheat sheet, worksheet isi sendiri, **skor 1–10 per fungsi** (#80) | checklist, tutorial, listicle | 3–7 item diawali kata kerja, kotak centang **atau** kolom skor, judul jelas | ≤7 item, ≤8 kata per item | `single` (kertas di atas foto redup) | Ada: R16 + mockup v3 `cek`, `lembar`. **Varian scorecard perlu dibuat** |
| S16 | Foto beranotasi | Tunjuk elemen di contoh (anatomi iklan, bio IG, ruang konsultasi, posisi duduk) | framework, checklist, explainer | Foto/mockup contoh **buatan sendiri** (bukan iklan/akun orang), 3–5 titik label | ≤5 label, ≤4 kata | `image-overlay` | Ada: mockup v3 `anotasi`. Mockup iklan/bio buatan sendiri **perlu dibuat** |
| S19 | CTA | Penutup sesuai `aturan-slide-cta-carousel.md` | semua | Headline klaim + subheadline + bentuk CTA bervariasi. 3 keluarga: tanpa preview · preview produk · bukti | Headline ≤10 kata, sub ≤20 kata | `single` / `image-overlay` | **Belum ada** di mockup. Keluarga "bukti" = **belum ada data** |

**Komponen lintas slide (bukan layout terpisah)**
- **Label sumber klaim**: baris kecil ≥32px "Menurut Gym Launch (YT21)" / "Klaim Hormozi, YT07" / "Ilustrasi, bukan data fitasset lab". Wajib di S03, S05, S06, dan S07 kalau berisi angka.
- **Label contoh/simulasi**: "contoh script", "ilustrasi" di S11, S05, S06.
- **@username kecil** di kiri atas, hanya di slide setelah cover (keputusan owner 20 Okt).

---

## 4. Set minimum + prioritas

**14 layout.** Menurut pemetaan di bagian 1, set ini menutup **84 dari 84 ide (100%)**. P1 saja menutup 37 ide (44%), P1 + P2 menutup 72 ide (86%). Sisa 12 ide butuh grafik kurva (S06) atau foto beranotasi (S16).

| Prioritas | Layout | Dipakai ide | Alasan |
|---|---|---:|---|
| **P1** | S01 Kartu foto | 51 | Style utama (arahan owner), cover default |
| P1 | S02 Tweet polos (+ varian kutipan) | 48 | Satu-satunya style TERBUKTI di benchmark. Paling murah |
| P1 | S04 Poin bernomor (+ varian huruf) | 29 | Tulang punggung listicle & bedah framework |
| P1 | S05 Kalkulasi / rumus | 14 | Inti Greed Engine (hitungan uang). Belum ada di studio |
| P1 | S07 Tabel 2 kolom | 13 | Comparison + hitungan dua sisi |
| P1 | S08 Framework utuh | 15 | Jenis terbanyak di ide carousel |
| P1 | S11 Script / dialog | 13 | Produk Lini 4 (playbook, script) |
| P1 | S19 CTA (2 keluarga dulu: tanpa preview + preview produk) | 84 | Wajib per aturan CTA. Keluarga bukti menunggu data |
| **P2** | S03 Angka besar | 10 | Variasi cover non-kartu |
| P2 | S10 Alur / timeline | 10 | Tutorial & journey |
| P2 | S13 Checklist / scorecard | 15 | Layak disimpan, ringkasan |
| P2 | S12 Sebelum → sesudah / mitos-fakta | 9 | Bedah copy, mitos |
| **P3** | S06 Grafik (batang + kurva) | 8 | Kebanyakan ide reels |
| P3 | S16 Foto beranotasi | 4 | Butuh mockup iklan/bio buatan sendiri |

Yang **sengaja tidak dibuat** dulu: slide testimoni, before-after, studi kasus (belum ada data asli), galeri.

---

## 5. Uji cepat: 3 contoh susunan

Teks masih ringkasan isi, belum copy final. Angka berlabel klaim.

**A. #52 "33 klien vs 250 klien untuk penghasilan yang sama" — `comparison` + kalkulasi (YT14, Healthpreneur)**

| # | Layout | Isi singkat |
|---|---|---|
| 1 | S03 Angka besar | "33 vs 250" · "Jumlah klien untuk penghasilan yang sama" · label: ilustrasi dari YT14 |
| 2 | S01 Kartu foto | Coach capek balas chat: "Kamu bukan kurang klien. Harganya yang bikin kamu butuh banyak klien." |
| 3 | S07 Tabel 2 kolom | Low ticket vs high ticket: harga, jumlah klien, jam layanan, traffic yang dibutuhkan |
| 4 | S05 Kalkulasi | Target Rp X/bulan ÷ harga low = 250 klien; ÷ harga high = 33 klien (ilustrasi Rupiah, sumber YT14) |
| 5 | S05 Kalkulasi | 250 klien ÷ konversi 1% = 25.000 orang yang harus melihat penawaran (hitungan ilustrasi, asumsi 1% dari YT14) |
| 6 | S13 Checklist | 3 syarat sebelum naik ke high ticket: bukti, proses jelas, kapasitas layanan |
| 7 | S02 Tweet polos | Payoff: "Harga menentukan berapa banyak orang yang harus kamu kejar." |
| 8 | S19 CTA | Tanpa preview: kalkulator coach (P19) / Pricing & Packaging Guide (Lini 4) |

**B. #31 "'Nanti aku tanya suami dulu.' Jawab dengan 3 langkah ini" — `framework` + script (YT11, Gym Launch)**

| # | Layout | Isi singkat |
|---|---|---|
| 1 | S02 Tweet polos | Kalimat keberatan sebagai hook |
| 2 | S01 Kartu foto | Konsultasi: "Keberatan pasangan biasanya bukan soal pasangan." |
| 3 | S08 Framework utuh | AID: Agree · Isolate · Diffuse (3 kolom akronim) · sumber YT11 |
| 4 | S04 Poin (huruf A) | Agree: setujui dulu, jangan debat |
| 5 | S04 Poin (huruf I) | Isolate: pastikan cuma itu keberatannya |
| 6 | S04 Poin (huruf D) | Diffuse: kembalikan ke tujuan calon member |
| 7 | S11 Script | 4 giliran Kamu / Calon member, label "contoh script" |
| 8 | S19 CTA | Preview produk: Objection Handling Playbook (P8) |

**C. #38 "5 kebiasaan gym dengan churn di bawah 3%" — `listicle` (YT01, YT07)**

| # | Layout | Isi singkat |
|---|---|---|
| 1 | S03 Angka besar | "<3%" churn · label: klaim Gym Launch (YT01, YT07) |
| 2 | S01 Kartu foto | Front desk sepi: "Member jarang pamit. Mereka menghilang." |
| 3–7 | S04 Poin bernomor ×5 | Pantau kehadiran · hubungi yang absen · kartu ucapan · event · exit interview |
| 8 | S13 Checklist | Ringkasan 5 kebiasaan untuk disimpan |
| 9 | S19 CTA | Preview produk: Kit retensi (P14) |

Ketiganya ≤10 slide dan hanya memakai layout dari set minimum.

---

## 6. Keputusan yang butuh ACC owner

1. **Set 14 layout + prioritas P1/P2/P3** di atas: setuju, atau ada yang dibuang/ditambah?
2. **Kalkulasi (S05)** jadi layout P1 walau belum ada contoh winner di benchmark. Setuju diuji dulu?
3. **Label sumber**: format "Menurut Gym Launch (YT21)" di layar, atau cukup di caption?
4. **Konversi dolar → Rupiah**: pakai kurs apa, dan dibulatkan sebagai ilustrasi?
5. **Script (S11)**: tampil sebagai bubble chat, naskah 2 peran, atau keduanya?
6. **Ide reels (35 ide "R")**: dibuat juga versi carousel, atau tetap reels saja?
7. **CTA**: produk/tujuan nyata per lini (link bio ke produk mana, ada keyword komen?) dan bahan preview produk asli yang boleh dipakai.
8. **Style dasar** (font, warna, bentuk kartu) dikunci dulu di mockup v3 sebelum layout ini dibuat di `carousel-studio/styles/_draft`.

---

## 7. Keputusan owner (20 Okt 2026)

| # | Pertanyaan | Keputusan |
|---|---|---|
| 1 | Set 14 layout + prioritas | **ACC** apa adanya |
| 2 | S05 kalkulasi di P1 | **Uji dulu** |
| 3 | Label sumber angka | **Di layar, sebagai sitasi kecil.** Ukuran dan kontrasnya selalu di bawah konten utama (tetap ≥32px sesuai aturan layout) |
| 4 | Kurs dolar → Rupiah | **Kurs yang berlaku saat produksi, angka dibulatkan.** Patokan 20 Okt 2026: JISDOR BI Rp18.006 per US$ (pakai ±Rp18.000). Cek ulang tiap batch |
| 5 | Bentuk script S11 | **Semuanya**: bubble chat dan naskah 2 peran |
| 6 | Ide berformat R | **Reels saja**, ikut kolom format bank. C/R diputuskan per ide nanti |
| 7 | CTA | **Pakai semua bentuk CTA** di `_operating-system/standards/aturan-slide-cta-carousel.md`. Preview produk asli belum ada → mockup memakai gambar free-to-use sebagai pengganti sementara (berlabel). Keluarga "bukti" tetap belum ada data |
| 8 | Style dasar | Font B (Arimo), aksen lime #c9ef67, kartu di 52%, tweet polos campur putih/hitam, tampilan IG gelap. **Sisanya belum dikunci** |

Dampak ke rekap: karena ide R tidak dibuat carousel, cakupan template dihitung dari **49 ide C dan C/R**. Set 14 layout tetap menutup semuanya.
