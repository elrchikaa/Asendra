# Analisis tone visual kallawaymarketing — untuk auraneuro

Dibuat 14 Okt 2026. Sumber: semua file kallaway di `04_Content_Examples\kallawaymarketing\`, yaitu 21 carousel (14 winner + 7 non-winner, total 164 slide) dan 18 reels (216 frame sampel). Non-winner hanya dipakai untuk melihat konsistensi sistem, bukan sebagai bukti performa. Script dan angka mentah: `_kerja_style_auraneuro\kallaway_tone.py`, `kallaway_tone\tone.json`.

## Carousel (terukur)
| Aspek | Temuan |
|---|---|
| Latar | 0 dari 164 slide berlatar terang. Luminans latar median 19/255 (≈ `#131313`), warnanya netral (merah − biru ≈ +1). |
| Grain | Simpangan residu frekuensi tinggi di area datar ±6.8 level, jadi grain terlihat jelas, bukan halus. |
| Gradasi latar | Hampir rata. Kolom tengah 21 vs tepi 17; bawah 20 vs atas 17 (selisih ±4 level). Cahaya utama datang dari ilustrasi, bukan dari latar. |
| Cahaya cover | Grid luminans cover: tengah 112, pojok 30–60. Sosok di tengah bercahaya, pojok gelap (vinyet). |
| Ilustrasi cover (dilihat) | 21/21 memakai sosok atau objek hitam-putih bertekstur stipple/halftone yang menyala putih (efek negatif/x-ray). Wajah sering kosong atau diganti objek (mikrofon, TV, layar). Satu aksen warna, merah; 2 cover memakai oranye TV. |
| Cover bergerak | 21/21 slide 1 berupa video 2.3–8.7 detik (median 5). Judul diam: perubahan di pita atas cuma 2–4 level, setara grain yang beranimasi. Gerak ada di pita tengah-bawah (perubahan 6–49), yaitu ilustrasinya. |
| Teks (dilihat) | Judul di atas: sans bold CAPS putih + 1–3 kata serif italic condensed merah yang bercahaya. Subjudul kecil dalam pill gelap. Monogram tanda tangan di tengah bawah. |
| Aksen merah | Median 2.3% piksel slide berwarna merah jenuh, jadi aksennya hemat. |

## Varian terang (hanya di reels)
- 21 dari 216 frame (7 dari 18 reels) memakai layar terang di area grafis.
- Latar `#E2E2E2` abu terang dengan pola grid titik/kotak tipis seperti kertas grafik. Grain ±2.2, lebih halus dari versi gelap.
- Judul sans bold hitam + serif italic abu. Aksen merah dipakai sebagai garis bawah atau kotak merah berisi teks putih.
- Di carousel kallaway tidak ada versi terang. Kalau auraneuro memakai cover terang, itu variasi baru yang belum ada buktinya.

## Yang diambil untuk auraneuro
- **Selalu ada:** grain beranimasi, vinyet tipis, satu sumber cahaya dari sosok di tengah, satu warna aksen, judul di sepertiga atas.
- **Cover:** ilustrasi stipple/halftone menyala + judul dua gaya (sans tebal + serif italic beraksen). Kalau dibuat video 3–5 detik, judul tetap diam dan hanya sosok/grain yang bergerak.
- **Slide isi:** latar gelap bergrain yang sama. Slide teks polos boleh, tapi tetap dengan grain + gradasi tipis, tidak rata.
- **Varian terang:** pakai sistem reels kallaway, yaitu abu terang + grid tipis + grain halus. Cocok untuk slide contoh kalimat, chat, atau skrip.
