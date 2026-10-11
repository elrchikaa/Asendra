# Workflow konten end-to-end (4 brand)

AI mengerjakan dari ide sampai file jadi. Kamu cukup memberi keputusan di **3 titik ACC** lewat database Notion **Content Pipeline (4 brand)**. Posting tetap kamu yang menekan tombol.

## Alur

| # | Tahap (kolom "Tahap") | Dikerjakan | Alat | Hasil di Notion |
|---|---|---|---|---|
| 1 | **1 Ide** | Claude | Idea bank + Benchmark Guideline | Judul, Brand, Format, Topik / pilar, Hook, Pola proven, Referensi |
| ✅ | **ACC 1 — ide** | Kamu | Notion | Status ACC → ACC / Revisi / Ditolak |
| 2 | **2 Script & brief** | Claude | Script template + prompt pack | Script / teks slide, Brief visual & prompt, Style |
| ✅ | **ACC 2 — script** | Kamu | Notion | Status ACC → ACC / Revisi / Ditolak |
| 3 | **3 Produksi** | Claude Code di laptop (+ kamu untuk generator) | carousel-style-cloner · Remotion / HyperFrames · Higgsfield / Kling / Veo | File di `07_Produksi\<ID>_<judul>\`, link di "Link hasil" |
| ✅ | **ACC 3 — final** | Kamu | Notion | Status ACC → ACC / Revisi |
| 4 | **4 Siap posting** | Kamu | IG / TikTok | Isi "Tanggal posting" |
| 5 | **5 Posted** | Kamu / Claude | Notion | Link postingan di "Catatan revisi" atau "Link hasil" |

**Reels (tahap 3):** template di `Documents\Asendra\video-studio\templates\<prefix>-<kode>\`, brand kit di `video-studio\brand-kits\<brand>\`. Salin template ke `07_Produksi\CP-xx_<judul>\video\`, isi CONFIG dari script yang di-ACC, `npx hyperframes check` (0 error), `npx hyperframes render --output ..\final\CP-xx_<judul>.mp4`, lihat contact sheet sebelum ACC 3. Panduan lengkap: `video-studio\PANDUAN_PRODUKSI_REELS.md`.

## Cara memberi ACC
- Buka view **Menunggu ACC kamu**. Isinya hanya baris yang sedang menunggu keputusanmu, dari semua tahap.
- **ACC** = lanjut ke tahap berikutnya. **Revisi** = tulis alasannya di "Catatan revisi", Claude perbaiki di tahap yang sama. **Ditolak** = berhenti, tidak diproduksi.
- Setelah selesai mengisi, bilang ke Claude: **"cek pipeline"**. Claude membaca semua baris ACC/Revisi lalu menggerakkan masing-masing ke langkah berikutnya, dan statusnya kembali ke "Menunggu ACC".

## Aturan
1. **Tiap ide wajib punya "Pola proven"** (kode pola dari `05_Analysis\Benchmark_Guideline_<brand>.md`) dan **link referensi** yang ditiru. Tanpa itu, ide tidak masuk pipeline.
2. **Format & style hanya dari kit.** Carousel memakai style yang sudah di-approve di carousel-studio, reels memakai spec di `06_Automation_Kit\02_Reels_Style\`.
3. **Yang dikerjakan AI:** teks, layout carousel, animasi typography (Remotion / HyperFrames), b-roll & explainer (prompt Higgsfield / Kling / Veo), caption.
   **Yang tetap dari kamu:** menjalankan generator video kalau butuh login akunmu, wajah / talking head asli, logo, foto produk, dan menekan posting.
4. **Tidak boleh dikarang:** testimoni, angka hasil klien, screenshot, data riset. Kalau butuh, isi "Aset" dengan kebutuhan dan tunggu bahannya.
5. **Rambu tiap brand** (lihat Panduan Analisis per brand) berlaku di semua tahap.
6. **Revisi tidak menimpa:** file revisi disimpan sebagai `_v2`, `_v3` di folder produksi yang sama.

## Folder produksi
```
Documents\Asendra\brands\<brand>\07_Produksi\
   CP-12_<judul-singkat>\
      script.md        ← sama dengan isi di Notion
      assets\          ← hasil generator, foto, aset
      final\           ← file siap posting (PNG carousel / MP4 reels)
```
ID **CP-xx** diambil dari kolom ID di Notion supaya file dan baris selalu cocok.

## Status setup (8 Okt)
- Database Notion + 3 view (Board pipeline, Menunggu ACC kamu, Kalender posting): **sudah jadi**.
- Analisis pola 2.1–2.2: **kamu jalankan di Claude Code** setelah download (lihat `05_Analysis\Panduan_Analisis_Claude_Code.md`).
- Kit 2.4–2.9 (spec reels, idea bank, script, prompt pack, aset): **disusun Claude dari hasil analisis itu**.
