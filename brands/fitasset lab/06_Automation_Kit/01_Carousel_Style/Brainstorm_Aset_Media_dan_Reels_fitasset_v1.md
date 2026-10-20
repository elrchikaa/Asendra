# Fitasset Lab: aset media carousel + konsep reels (brainstorm v1)

20 Okt 2026. Lanjutan dari `05_Analysis/2026-10-19_carousel-exploration/Analisis_dan_Brainstorm_Carousel_fitasset_lab_v1.md` (daftar A01–A12 dan D01–D12 tetap berlaku) dan `05_Analysis/Bedah_Konten_Benchmark_fitasset_lab/index.html`. Mockup visualnya ada di `Mockup_Feed_fitasset_v2/index.html`. Belum ada yang di-ACC.

## 1. Sistem yang dipakai (arahan owner 20 Okt)

| Format | Latar | Kartu | Isi |
|---|---|---|---|
| Carousel utama (Hormozi) | **Gambar**: foto stok/founder, gradasi gelap ke bawah | Kartu tweet putih, posisi tetap | 1–3 kalimat per slide |
| Carousel + skema | Gambar (foto diperkecil ke atas) | Kartu tweet **membesar**, diagram ada di dalam kartu | 1 hubungan per slide |
| Tweet polos | Putih / hitam polos | Header tweet tanpa kotak | Opini, listicle bernomor |
| Reels | **Video** stok/B-roll, gelap ke bawah | Kartu tweet **sama persis** dengan carousel | Hook + open loop. Jawaban lengkap di caption |

Prinsip: satu kartu, tiga latar (foto, polos, video). Template yang dibuat cukup satu komponen kartu + tiga mode latar, jadi murah diautomasi.

## 2. Bank foto stok (carousel)

Sudah diunduh 15 foto untuk mockup (lihat `Mockup_Feed_fitasset_v2/assets/KREDIT.md`). Kategori yang disarankan untuk bank produksi, ±3 foto per kategori:

| Kategori | Kenapa cocok | Topik yang memakainya | Contoh di mockup |
|---|---|---|---|
| Coach + klien bicara (konsultasi) | Inti pekerjaan coach, netral | Closing, keberatan harga, kebutuhan klien | consultation, ngobrol |
| Coach mendampingi latihan | Menunjukkan jasa yang dijual per jam | Jual sesi vs paket, kapasitas | coaching, dampingi |
| Coach lelah / kerja malam | Pain point jadwal penuh | Burnout, kapasitas, leverage | lelah |
| Tangan menulis program / laptop | Keahlian jadi aset | Programming, template, produk digital | nulis-program, laptop-gym, rencana |
| HP di tangan (chat/check-in) | Komunikasi klien | Check-in, follow-up DM, retensi | checkin-hp |
| Merekam konten pakai HP | Akuisisi lewat konten | Content marketing coach | rekam |
| Kelas grup | Model 1-ke-banyak | Group coaching, tangga offer | kelas |
| Coach menjelaskan data/layar | Sistem, tracking | Progress report, tracker | tunjuk-layar, catat |
| Gym kosong / atmosfer | Latar netral untuk tweet panjang | Opini, reframe | gym-kosong |
| Produk fitness (meal prep, program cetak) | Isi produk Lini 1–3 | Meal plan, bonus paket | mealprep |
| Founder asli (nanti) | Paling kuat untuk gaya Hormozi | Semua opini | belum ada |

Aturan pilih: vertikal; ruang kosong di bawah untuk kartu; tanpa logo gym besar; hindari mobil mewah/uang/selebritas. Foto stok tidak pernah dipakai sebagai bukti hasil.

## 3. Skema visual di dalam kartu

Skema tidak jadi gaya ketiga. Skema ditaruh **di dalam kartu tweet** yang membesar, dan foto tetap terlihat di atas. Ada 8 bentuk yang dipakai di mockup v2, semuanya dirakit dari data (label + urutan):

| Bentuk | Data yang diisi | Contoh topik |
|---|---|---|
| Alur 4 langkah (flow) | 4 label | Konten → DM → konsultasi → paket |
| Sebelum / sesudah (bedah kalimat) | 2 kalimat | Offer umum vs offer jelas |
| Dua kolom (perbandingan) | 3 pasang baris | Jual sesi vs jual paket |
| Tangga (ladder) | 3 tingkat + keterangan | Program mandiri → grup → 1-on-1 |
| Tumpukan komponen (stack) | 4 komponen + fungsi | Isi paket coaching |
| Hub 1 → 3 | 1 pusat + 3 cabang | Satu program, tiga pemakaian |
| Slot kalender (kapasitas) | jumlah slot terisi | Batas jam kerja |
| Hitungan simulasi | angka × angka = hasil | Omzet ≠ laba (label simulasi) |
| Checklist | 3–5 butir | Persiapan konsultasi |

Batas: maksimal 1 skema per slide, label pendek (≤ 4 kata), dan skema hanya dipakai kalau ada hubungan nyata. Menurut bedah benchmark, skema **belum punya bukti winner**. Jadi skema dipasang sebagai slide sisipan di tengah carousel, bukan di cover.

## 4. Reels: konsep visual

**Struktur (6–15 detik):**
1. 0–2 dtk: kartu tweet muncul dengan **bold claim** ("Coach yang jual per jam, gajinya dibatasi kalender.").
2. 2–8 dtk: 1–2 kartu lanjutan yang membuka loop ("Ada 3 cara keluar dari situ. Yang ketiga paling jarang dipakai.").
3. Akhir: kartu penutup "Jawabannya di caption ↓". Video tidak menjawab.
4. Caption: jawaban lengkap (poin 1–3, contoh, CTA). Caption jadi tempat isi yang biasanya ada di slide carousel.

**Visual:** kartu tweet sama dengan carousel (posisi ±56–60% dari atas di kanvas 1080×1920, lebar 74%). Video latar diberi gradasi gelap di bawah. Teks tidak animasi per kata, kartu cukup ganti (cut) per kalimat. Audio: musik/ambience stok atau trending audio, tanpa VO (paling murah). VO TTS opsional.

### Pilihan footage latar, dari yang paling murah

| Kode | Footage | Sumber | Biaya/usaha | Cocok untuk | Catatan |
|---|---|---|---|---|---|
| V1 | **B-roll kerja coach**: konsultasi, mendampingi latihan, menulis program | Pexels / Pixabay video | 0 kredit, cari sekali | Semua topik bisnis coach | Paling dekat dengan carousel foto |
| V2 | **Tangan / POV**: ketik laptop, scroll HP, menulis di clipboard | Pexels / Pixabay atau rekam sendiri pakai HP | 0 kredit, 10 menit rekam | Template, check-in, DM, produk digital | Tanpa wajah, mudah direkam sendiri |
| V3 | **Atmosfer loop**: gym kosong, lampu, barbell, slow motion | Pexels / Pixabay | 0 kredit, bisa dipakai berulang | Opini, reframe, bold claim | Paling reusable: 5 klip cukup untuk puluhan reels |
| V4 | **Screen recording produk Fitasset**: scroll template, tracker, dashboard | Rekam layar sendiri | 0 kredit | Demo produk, "isi paket" | Paling relevan untuk jualan. Pakai produk asli |
| V5 | **A-roll founder rekam HP** (talking head diam/tanpa suara, kartu tetap di bawah) | Rekam sendiri | 0 kredit, butuh waktu founder | Opini personal | Cocok kalau style talking head sudah ketemu |
| V6 | Avatar HeyGen | HeyGen | Kredit terbatas | Hanya kalau V1–V5 tidak cukup | Pilihan terakhir |

**Tidak dipakai:** potongan interview/podcast Hormozi atau YouTube orang lain (hak cipta, dan klipnya mahal untuk dikurasi). YouTube hanya boleh dari channel yang lisensinya jelas mengizinkan (Creative Commons), dicek per klip.

**Bank awal yang disarankan:** 6 klip V3 + 6 klip V1 + 4 klip V2 + 2 screen recording V4 = 18 klip. Ini cukup untuk ±30 reels dengan rotasi. Setiap klip dipotong 6–8 detik, 1080×1920, dan diberi grading gelap yang sama.

### Footage per topik

| Topik reels | Bold claim (contoh) | Footage |
|---|---|---|
| Kapasitas jam | "Kalendermu adalah plafon gajimu." | V1 coach mendampingi, V3 jam/gym kosong |
| Pricing | "Klien tidak beli jam. Klien beli hasil." | V1 konsultasi |
| Produk digital | "Program yang kamu tulis ulang tiap klien itu aset yang dibuang." | V2 tangan menulis/laptop |
| Check-in / retensi | "Klien berhenti bukan karena programnya." | V2 scroll chat HP |
| Konten | "Coach yang paling pintar jarang yang paling laku." | V1 merekam konten |
| Lisensi PLR/MRR | "Beli template bukan berarti boleh dijual ulang." | V4 screen recording |

## 5. Yang masih terbuka
- Font, warna, logo final (mockup v2 masih memakai identitas sementara v1).
- Founder mau tampil (foto/A-roll) atau tidak.
- Porsi feed carousel : reels.
- Produk/screen recording asli yang boleh ditampilkan.
