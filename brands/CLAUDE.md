# Asendra — Multi-brand content automation (4 brand)

File ini dibaca otomatis oleh Claude Code setiap kali dibuka di folder `brands\` atau subfoldernya. Isinya konteks tetap project. Brief tugas yang sedang berjalan ada di file `Brief_*.md` di folder ini.

## Tujuan project
Menyiapkan automation konten organik Instagram (+ TikTok) untuk 4 brand: AI mengerjakan dari ide sampai produksi, manusia memberi ACC di titik tertentu.
Dua hal yang harus dipastikan sebelum produksi:
1. **Ide yang works**: topik/hook/struktur yang terbukti lintas akun benchmark.
2. **Style yang works**: tampilan visual yang terbukti di postingan benchmark yang angkanya tinggi.

## Brand
| Folder | Brand / produk | Pasar | Dokumen brand |
|---|---|---|---|
| `securewithaldo` | HERE: video typography untuk orang dengan kecemasan dalam hubungan (anxious attachment) | Perempuan muda ID | `_Brand_Docs\` (brand brief, product context, market landscape) |
| `auraneuro` | Psikologi persuasi & "aura" yang etis | Karyawan & pebisnis ID | `_Brand_Docs\` (brand brief, Voice DNA) |
| `evotitan` | God Mode: natural biohacking pria | Pria 25–40 ID | `_Brand_Docs\` (brand context, content strategy, product context; palet warna resmi ada di Brand Context §11) |
| `fitasset lab` | Produk digital white-label/PLR/MRR fitness + edukasi bisnis untuk coach | PT/coach, gym owner, digital marketer ID | `_Brand_Docs\fitasset_lab_brand-context.md` + `00_Market_Brief\Riset_Selera_Visual_fitasset_lab.md` |

Semua konten akhir berbahasa Indonesia, mengikuti voice di dokumen brand.

## Struktur folder per brand
```
<brand>\
  _Brand_Docs\            dokumen brand (baca dulu sebelum menulis/mendesain apa pun)
  00_Market_Brief\        riset pasar
  01_Benchmark_Accounts\  daftar akun benchmark + Kurasi_Benchmark_Style_vs_Ide_<brand>.xlsx (peran tiap akun: style / ide)
  02_Content_Bank\        Content_Bank_<brand>.csv: konten winner + angka + rasio vs median akun
  03_Viral_Topics\        topik terbukti/kandidat + link bukti
  04_Content_Examples\<akun>\   file hasil download, nama: <akun tanpa titik>_<shortcode>[_<nomor slide>].jpg|mp4
  05_Analysis\            input & output analisis (Data_Performa_Download_<brand>.csv, Benchmark_Guideline, dll)
  06_Automation_Kit\      SOP, style carousel, (nanti) reels spec, idea bank, script, prompt pack, aset
  07_Produksi\            hasil produksi per konten (CP-xx)
```

## Sumber pengetahuan tambahan
- **fitasset lab — transkrip YouTube** (bahan idea bank & script, bukan bahan style): `fitasset lab\04_Content_Examples\Youtube transcript\` subfolder A–F, file `.md`. Awalan `[w]` = wajib dibaca. Daftar link + alasan pilih ada di `fitasset lab\00_Market_Brief\YouTube_Knowledge_fitasset_lab_v2.xlsx`.
  - A: model bisnis & scaling coaching · B: dapat klien pertama · C: konsultasi & closing · D: pricing · E: produk digital · F: bisnis gym
- **TikTok**: konten TikTok tidak bisa di-download, jadi analisis style hanya dari Instagram. Akun yang TikTok-only tetap dipakai sebagai acuan **ide** dari angka & link di Content Bank, bukan acuan style.

## Aturan data (wajib)
- **Winner** = reels diukur dari views, feed/carousel dari likes, dibandingkan dengan **median akun itu sendiri**. Hanya konten **≥ 1.5x median** yang dipakai untuk menarik pola. Angka per file ada di `05_Analysis\Data_Performa_Download_<brand>.csv` (kolom `Masuk analisis`).
- **Pola TERBUKTI** = muncul di **≥ 3 konten dari ≥ 2 akun berbeda**. Di bawah itu = KANDIDAT. Selalu tulis jumlah konten, jumlah akun, dan link/nama file bukti.
- Jangan mengarang angka, testimoni, screenshot, atau data riset. Kalau datanya tidak ada, tulis "belum ada data".
- Rambu per brand ada di `05_Analysis\Panduan_Analisis_Claude_Code.md` dan kolom "Rambu" di file Kurasi.

## Alat yang dipakai
- Skill `carousel-style-cloner` untuk mengubah style carousel jadi template HTML/CSS. Perpustakaan template: `C:\Users\ASUS_M3400Q\Documents\Asendra\carousel-studio` (di luar folder `brands`, buka/izinkan aksesnya kalau perlu).
- Skill `organic-content-logger` → `organic-benchmark-builder` untuk analisis pola ide.
- Video: Higgsfield / Kling / Veo (generate), Remotion / HyperFrames (animasi teks).
- Approval: database Notion "Content Pipeline (4 brand)".

## Cara kerja
- Bahasa ke user: Indonesia, ringkas, tanpa jargon.
- Jangan menimpa file user; versi baru pakai akhiran `_v2`, `_v3`.
- File di `04_Content_Examples` hanya dibaca, jangan diubah/dipindah.
