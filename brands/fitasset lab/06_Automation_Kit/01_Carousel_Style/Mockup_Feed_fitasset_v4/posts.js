// Isi mockup v3. k = jenis slide. Teks masih contoh, angka berlabel simulasi.
const C=(id,t,f,n,s)=>({id,t,f,n,s,r:false});
const RL=(id,t,v,c,s)=>({id,t,f:'Bold claim + open loop',n:'Footage: '+v,v,c,s,r:true});
const P={
kapasitas:C('kapasitas','Kalender = plafon','Foto + kartu · angka besar · kalender · hub','Pain jadwal penuh → bukti di kalender → jalan keluar aset.',[
 {k:'kartu',p:'lelah',sw:1,x:'Jadwalmu penuh dari pagi sampai malam, tapi penghasilanmu tetap segitu-segitu saja.'},
 {k:'angka',p:'dampingi',n:'22',u:'/25',x:'Slot seminggu sudah terjual. Mau naik penghasilan? <em>Sisa slotnya tinggal 3.</em>'},
 {k:'kalender',p:'gym-kosong',h:'Kalender coach 1-on-1 <em>tidak bisa melar</em>',e:[3,9,17]},
 {k:'hub',p:'nulis-program',h:'Yang bisa dijual <em>tanpa jam tambahan</em>',c:'Program yang sudah kamu tulis',L:['Bonus paket','Produk mandiri','Materi kelas']},
 {k:'kartu',p:'nulis-program',x:'Jadikan kerja yang berulang sebagai aset. Program, checklist, tracker. Tulis sekali, pakai berkali-kali.'}]),
opini:C('opini','Kejelasan tidak bisa ditawar','Tweet polos','Tiga slide teks, tanpa foto.',[
 {k:'tweet',x:'Kebanyakan klien gak bayar buat jam latihannya.\nMereka bayar supaya gak bingung lagi harus mulai dari mana.'},
 {k:'tweet',d:1,x:'Harga per jam gampang ditawar klien.\nProgram yang jelas arahnya jauh lebih jarang ditawar.'},
 {k:'tweet',x:'Berhenti jualan "sesi".\nJualan jalan yang jelas dari kondisi sekarang ke target.'}]),
alur:C('alur','Konten → klien','Foto + kartu · corong · chat','Langkah yang hilang di antara konten dan klien.',[
 {k:'corong',p:'laptop-gym',h:'DM sepi? Ada <em>satu langkah</em> yang kamu lewati',L:['Konten edukasi','DM / komentar','Konsultasi 15 menit','Paket dengan sistem'],hi:2},
 {k:'kartu',p:'rekam',x:'Kontenmu ramai yang like, tapi DM tetap sepi. Ada satu langkah yang sering hilang.'},
 {k:'chat',p:'checkin-hp',h:'Ajakan bicara <em>satu kalimat</em>',M:['Kak, programnya cocok buat pemula?','Cocok. Biar pas, boleh aku tanya 3 hal dulu? 15 menit lewat call.','Boleh, kapan?']},
 {k:'kartu',p:'consultation',x:'Orang jarang membeli paket tanpa diajak bicara dulu. Tambahkan satu kalimat ajakan di setiap konten edukasi.'}]),
paket:C('paket','Jual sesi vs paket','Belah dua · tumpukan · matriks','Perbandingan dengan foto, lalu isi paket dan cara memilih apa yang distandarkan.',[
 {k:'belah',a:['dampingi','Jual per sesi','Bayar per datang. Hilang kalau tidak datang.'],b:['nulis-program','Jual paket + sistem','Program, tracker, evaluasi.']},
 {k:'kartu',p:'coaching',x:'Klien jarang benar-benar membeli jam latihan. Biasanya yang mereka beli adalah hasil yang jelas prosesnya.'},
 {k:'tumpuk',p:'tunjuk-layar',h:'Isi paket yang <em>bisa dijelaskan</em>',L:[['Program 8 minggu','arah latihan'],['Tracker','mencatat progres'],['Panduan','cara pakai program'],['Check-in','evaluasi tiap minggu']]},
 {k:'matriks',p:'catat',h:'Mana yang distandarkan, <em>mana yang tetap personal</em>',ax:['Bisa dipakai ulang','Butuh interaksi'],Q:[['Konsultasi awal','tetap personal'],['Check-in','personal + template'],['Pemanasan & teknik','video sekali rekam'],['Program dasar','template']],hi:3}]),
bedah:C('bedah','Bedah kalimat offer','Bedah kalimat · foto beranotasi · checklist','Sebelum/sesudah, lalu bagian offer ditunjuk di foto.',[
 {k:'bedah',p:'consultation',h:'Offer-mu <em>kedengaran sama</em> dengan 10 coach lain?',a:'"Program latihan personal."',b:'"Program 8 minggu, tracker mingguan, dan evaluasi tiap Minggu malam."'},
 {k:'kartu',p:'ngobrol',x:'Offer-mu kedengaran sama dengan 10 coach lain? Coba bedah kalimatnya.'},
 {k:'anotasi',p:'ngobrol',h:'Yang sebenarnya <em>dibeli klien</em>',A:[[10,44,'Target yang jelas'],[44,60,'Program tertulis'],[16,76,'Ada yang mengecek']]},
 {k:'cek',p:'catat',h:'Cek sebelum <em>posting offer</em>',t:'Offer-ku sudah menyebut:',L:['Isi layanan nyata','Durasi program','Bentuk pendampingan','Batas layanan','Langkah berikutnya'],ok:3}]),
listicle:C('listicle','5 hal sebelum konsultasi','Tweet polos · listicle bernomor','Ritme 1 poin per slide.',[
 {k:'tweet',d:1,x:'5 hal yang harus kamu tahu sebelum konsultasi pertama dengan calon klien.'},
 {k:'list',n:'1',h:'Targetnya, dalam kalimat dia sendiri.',b:'Tulis persis kata-katanya. Kamu akan memakainya lagi saat menjelaskan paket.'},
 {k:'list',n:'2',h:'Apa yang sudah pernah dia coba.',b:'Supaya kamu tidak menawarkan hal yang sudah gagal untuknya.'},
 {k:'list',n:'3',h:'Jam berapa dia benar-benar bisa latihan.',b:'Program bagus yang tidak muat di jadwalnya akan ditinggal.'}]),
tangga:C('tangga','Tangga offer','Foto + kartu · tangga · foto beranotasi','Satu keahlian, tiga tingkat bantuan.',[
 {k:'tangga',p:'kelas',h:'1 keahlian, <em>3 cara menjualnya</em>',L:[['Program mandiri','tanpa pendampingan','Rp'],['Kelas grup','1 coach, banyak klien','Rp Rp'],['Coaching 1-on-1','pendampingan penuh','Rp Rp Rp']]},
 {k:'kartu',p:'kelas',x:'Satu keahlian yang sama bisa dijual dengan tiga tingkat bantuan.'},
 {k:'anotasi',p:'kelas',h:'Kelas grup: <em>1 jam, banyak klien</em>',A:[[52,44,'1 coach'],[8,60,'5 klien sekaligus'],[28,76,'1 program yang sama']]},
 {k:'kartu',p:'consultation',x:'Tangga ini membuat calon klien yang belum siap bayar 1-on-1 tetap punya pilihan.'}]),
retensi:C('retensi','Minggu kedua','Foto + kartu · garis waktu · lembar kerja','Retensi: alur check-in dan contoh lembarnya.',[
 {k:'kartu',p:'checkin-hp',sw:1,x:'Klien jarang berhenti di minggu pertama. Mereka berhenti diam-diam di minggu kedua.'},
 {k:'waktu',p:'dampingi',h:'Alur bantuan <em>4 minggu pertama</em>',L:[['Hari 0','Bayar + form','tujuan dan jadwal dicatat'],['Minggu 1','Program dikirim','cara pakai dijelaskan'],['Minggu 2','Check-in pertama','titik rawan berhenti'],['Minggu 4','Evaluasi','program disesuaikan']],hi:2},
 {k:'lembar',p:'nulis-program',h:'Check-in yang <em>bisa ditindaklanjuti</em>',L:[['Latihan minggu ini','3 dari 4 sesi'],['Bagian paling susah','bangun pagi hari Rabu'],['Penyesuaian','pindah ke sore']],n:'Pertanyaan ini yang paling penting'},
 {k:'tweet',x:'Check-in punya nilai kalau jawabannya dipakai untuk mengubah sesuatu.'}]),
simulasi:C('simulasi','Omzet ≠ laba','Foto + kartu · grafik batang','Hitungan omzet, biaya, dan laba.',[
 {k:'batang',p:'laptop-gym',h:'Rp3 juta omzet, <em>berapa yang tersisa?</em>',B:[['Omzet','Rp3 jt',100],['Biaya','Rp1,2 jt',40],['Laba','Rp1,8 jt',60]],hi:2},
 {k:'kartu',p:'tunjuk-layar',x:'10 klien × Rp300 ribu kelihatan besar. Belum tentu itu yang masuk ke kantongmu.'},
 {k:'tweet',d:1,x:'Omzet menunjukkan penjualan.\nLaba menunjukkan bisnismu sehat atau tidak.'}]),
'r-kapasitas':RL('r-kapasitas','Kalender = plafon gaji','V1 B-roll coach mendampingi latihan, 6–8 dtk','Tiga cara menaikkan plafon tanpa menambah jam:\n1) Naikkan harga dengan paket yang isinya jelas.\n2) Pindahkan sebagian klien ke kelas grup.\n3) Jadikan program, meal plan, dan checklist sebagai aset yang dipakai ulang.\nTulis di komentar mau mulai dari nomor berapa.',[{k:'kartu',p:'dampingi',x:'Kalendermu adalah plafon gajimu.'},{k:'kartu',p:'lelah',x:'Ada 3 cara menaikkan plafon itu tanpa menambah jam. Yang ketiga paling jarang dipakai coach.'},{k:'kartu',p:'dampingi',x:'Jawabannya di caption ↓'}]),
'r-pricing':RL('r-pricing','Klien beli hasil','V1 B-roll konsultasi di meja gym','Ganti "sesi 60 menit" dengan tiga hal:\n1) Target 8 minggu.\n2) Isi: program, tracker, evaluasi.\n3) Batas: berapa kali check-in, lewat apa.',[{k:'kartu',p:'consultation',x:'Klienmu sebenarnya gak beli jam latihan. Yang mereka beli itu hasilnya.'},{k:'kartu',p:'ngobrol',x:'Kalau offer-mu masih "sesi 60 menit", kamu sedang bersaing di harga.'},{k:'kartu',p:'consultation',x:'Jawabannya di caption ↓'}]),
'r-produk':RL('r-produk','Program yang terbuang','V2 POV tangan menulis program, bisa direkam sendiri','Tulis program sekali dalam format template, lalu pakai berkali-kali: bonus paket, produk mandiri, materi kelas. Cek hak pakai kalau memakai template orang lain.',[{k:'kartu',p:'rencana',x:'Program yang kamu tulis ulang untuk tiap klien adalah aset yang kamu buang.'},{k:'kartu',p:'nulis-program',x:'Coach yang penghasilannya naik tanpa tambah jam biasanya melakukan satu hal ini dulu.'},{k:'kartu',p:'rencana',x:'Jawabannya di caption ↓'}]),
'r-checkin':RL('r-checkin','Klien berhenti','V2 POV scroll chat di HP','Pesan minggu kedua: "Apa yang paling susah dari program minggu ini?" Satu pertanyaan ini membuka ruang menyesuaikan program sebelum klien diam-diam berhenti.',[{k:'kartu',p:'checkin-hp',x:'Klien berhenti bukan karena programnya jelek.'},{k:'kartu',p:'checkin-hp',x:'Biasanya karena satu pesan yang tidak pernah dikirim coach di minggu kedua.'},{k:'kartu',p:'checkin-hp',x:'Jawabannya di caption ↓'}]),
'r-konten':RL('r-konten','Konten tidak jadi klien','V1 B-roll merekam konten dengan HP + tripod','Langkah yang dilewati: ajakan bicara. Konten → DM → konsultasi 15 menit → paket.',[{k:'kartu',p:'rekam',x:'Coach paling pintar jarang yang paling laku.'},{k:'kartu',p:'rekam',x:'Masalahnya seringkali bukan di algoritma. Ada satu langkah antara konten dan klien yang sering dilewati.'},{k:'kartu',p:'rekam',x:'Jawabannya di caption ↓'}]),
'r-lisensi':RL('r-lisensi','Beli template ≠ boleh jual','V4 screen recording produk Fitasset (sementara foto laptop)','Personal: dipakai sendiri. MRR: boleh dijual ulang. PLR: boleh diubah dan diberi merek. Detail mengikuti lisensi final tiap produk.',[{k:'kartu',p:'laptop-gym',x:'Beli template bukan berarti boleh menjualnya lagi.'},{k:'kartu',p:'tunjuk-layar',x:'Ada 3 jenis hak pakai. Salah pilih bisa membuat produkmu ditarik.'},{k:'kartu',p:'laptop-gym',x:'Jawabannya di caption ↓'}]),
};

// ===== v4: contoh susunan A–C dari Analisis_Jenis_Carousel_dan_Slide_Template_v1 §5 (layout P1) =====
P['c-pricing']=C('c-pricing','33 vs 250 klien','Comparison + kalkulasi · S03 S01 S07 S05 S13 S19','Contoh A (#52, YT14). Angka klaim narasumber, dolar dikonversi kasar ±Rp18.000.',[
 {k:'angka',p:'lelah',n:'33',u:'vs 250',x:'klien untuk penghasilan yang sama. Bedanya cuma <em>harga paket</em>.',src:'Yuri Elkaim, Healthpreneur (YT14)'},
 {k:'kartu',p:'checkin-hp',x:'Kamu merasa kurang klien. Padahal seringkali harga paketmu yang bikin kamu butuh terlalu banyak klien.'},
 {k:'tabel',p:'laptop-gym',h:'Low ticket vs <em>high ticket</em>',x:'Membership murah',y:'Program 3 bulan',rows:[['Harga','±Rp3,6 jt / bulan','±Rp72 jt / 3 bulan'],['Klien','250 orang','33 orang'],['Cara jual','Halaman beli','Sales call'],['Butuh','±25.000 pengunjung','±100 call']],src:'Angka YT14 (US$200 & US$4.000), kurs ±Rp18.000'},
 {k:'hitung',p:'tunjuk-layar',h:'Hitungan <em>low ticket</em>',rows:[['Target per bulan','±Rp900 jt'],['÷ harga membership','Rp3,6 jt']],res:['Klien dibutuhkan','250'],a:'Target US$50.000/bulan versi YT14, dikonversi kasar.',src:'Angka YT14, kurs ±Rp18.000/US$'},
 {k:'hitung',p:'rekam',h:'Dari mana <em>250 pembeli</em>?',rows:[['Pembeli yang dibutuhkan','250'],['÷ konversi halaman beli','1%']],res:['Pengunjung / bulan','25.000'],src:'Asumsi konversi 1% dari YT14'},
 {k:'hitung',p:'consultation',h:'Hitungan <em>high ticket</em>',rows:[['Sales call','±100'],['× tingkat closing','±33%']],res:['Klien','33'],src:'Klaim YT14, bukan data fitasset lab'},
 {k:'cek',p:'catat',h:'Sebelum naik ke <em>high ticket</em>',t:'Pastikan kamu sudah punya:',L:['Bukti hasil klien asli','Proses program yang jelas','Waktu untuk sales call','Kapasitas melayani'],ok:0},
 {k:'cta',p:'gym-kosong',h:'Harga paket menentukan <em>berapa klien</em> yang harus kamu kejar.',sub:'Pricing & Packaging Guide: cara menyusun paket, tiering, dan menaikkan harga tanpa kehilangan klien.',btn:'Ambil guide-nya di link bio!'}]);
P['c-aid']=C('c-aid','"Nanti aku tanya suami dulu"','Framework + script · S02 S01 S08 S04 S11 S19','Contoh B (#31, YT11). Script diadaptasi, berlabel contoh.',[
 {k:'tweet',x:'"Nanti aku tanya suami dulu ya."\nKalimat ini sering bikin closing berhenti. Padahal bisa jadi pintu masuk kalau kamu tahu cara menjawabnya.'},
 {k:'kartu',p:'consultation',x:'Yang bikin calon member ragu sering kali bukan suaminya. Biasanya ada keberatan lain yang belum keluar.'},
 {k:'akronim',p:'ngobrol',h:'3 langkah <em>AID</em>',L:[['A','Agree','Setujui dulu. Jangan dilawan.'],['I','Isolate','Pastikan cuma itu keberatannya.'],['D','Diffuse','Selesaikan keberatan yang asli.']],src:'Framework AID, Gym Launch (YT11)'},
 {k:'poin',p:'consultation',map:['A','I','D'],on:0,n:'A',t:'Agree: setujui dulu',b:'"Wajar banget mau diobrolin sama suami." Calon member merasa didengar, bukan didesak.'},
 {k:'poin',p:'catat',map:['A','I','D'],on:1,n:'I',t:'Isolate: cari yang asli',b:'"Kalau suami setuju, kamu sendiri yakin program ini cocok?" Lalu tanya apa yang kira-kira dia tanyakan.'},
 {k:'poin',p:'ngobrol',map:['A','I','D'],on:2,n:'D',t:'Diffuse: selesaikan',b:'Kalau ternyata soal harga, bahas cara bayarnya. Misalnya DP hari ini, sisanya dicicil.',src:'Contoh dari YT11'},
 {k:'chat',p:'checkin-hp',h:'Versi <em>chat WA</em>',M:['Aku tanya suami dulu ya kak.','Siap, wajar. Kalau suami oke, kamu sendiri yakin mau ikut?','Yakin sih, cuma takut kemahalan.']},
 {k:'naskah',p:'consultation',h:'Versi <em>tatap muka</em>',t:'',who:'Calon member',M:['Nanti aku tanya suami dulu.','Wajar. Sebelum ngobrol sama suami, menurutmu program ini bisa kasih hasil yang kamu mau?','Bisa sih.','Berarti tinggal bahas cara bikin ini jalan buat kalian berdua, ya?'],src:'Diadaptasi dari script YT11'},
 {k:'ctapv',p:'gym-kosong',dev:'tablet-meja',h:'Jawab keberatan <em>tanpa terdengar jualan</em>.',sub:'Framing harga, handling objection, dan urgensi yang natural.',btn:'Pelajari lengkapnya di link bio',cat:'PREVIEW SEMENTARA',prod:'Psychology of Selling',prod2:'for Fitness Coaches'}]);
P['c-retensi']=C('c-retensi','5 kebiasaan churn <3%','Listicle · S03 S01 S04×5 S02 S19','Contoh C (#38, YT01). Angka churn = klaim Gym Launch.',[
 {k:'angka',p:'kelas',n:'<span class="lt">&lt;</span>3',u:'%',x:'churn bulanan di gym yang rutin melakukan <em>5 kebiasaan ini</em>.',src:'Klaim Gym Launch, studi gym large group (YT01)'},
 {k:'kartu',p:'gym-kosong',x:'Member jarang pamit. Mereka berhenti datang dulu, baru berhenti bayar.'},
 {k:'poin',p:'tunjuk-layar',n:'1',t:'Lacak kehadiran tiap minggu',b:'Tiap Rabu, cek siapa yang tidak booking atau tidak datang. Hubungi untuk jadwal ulang.'},
 {k:'poin',p:'checkin-hp',n:'2',t:'Sapa rutin',b:'Pesan atau telepon tiap 1–2 minggu, bukan cuma saat tagihan.'},
 {k:'poin',p:'rencana',n:'3',t:'Kartu tulisan tangan',b:'Minimal sekali per kuartal. Murah dan cepat ditulis.'},
 {k:'poin',p:'kelas',n:'4',t:'Event di luar gym',b:'Event bulanan paling efektif di luar gym. Bawa komunitas ke hidup member.'},
 {k:'poin',p:'ngobrol',n:'5',t:'Exit interview',b:'Telepon begitu ada permintaan berhenti. Tawarkan program yang lebih cocok.',src:'5 kebiasaan dari YT01'},
 {k:'tweet',d:1,x:'Churn bisa naik dulu di bulan pertama saat kamu mulai menghubungi member.\nMenurut Gym Launch, setelah itu biasanya turun.',src:'Pola naik lalu turun menurut YT01'},
 {k:'cta',p:'dampingi',h:'Member bertahan karena <em>merasa diperhatikan</em>.',sub:'Template check-in, follow-up member yang menghilang, dan script exit interview siap pakai.',kw:['Komen kata ini (contoh keyword):','RETENSI']}]);

// ===== variasi P2/P3: mitos-fakta, scorecard, kurva =====
P['c-valley']=C('c-valley','9 dari 10 coach online','Explainer · angka · kurva · mitos-fakta · kartu','Ide #50 (YT17) + mitos YT01. Varian kurva (P3) dan mitos vs fakta (P2).',[
 {k:'angka',p:'lelah',n:'9',u:'dari 10',x:'coach online nyaris tidak dapat uang. Uangnya menumpuk di <em>10% teratas</em>.',src:'Klaim James Smith (YT17)'},
 {k:'kurva',p:'laptop-gym',h:'Penghasilan coach online <em>tidak merata</em>',L:[[6,71,'90% coach: hampir nol'],[60,24,'10% teratas',1]],ax:['Coach dengan penghasilan terendah','Tertinggi'],src:'Distribusi menurut James Smith (YT17)'},
 {k:'mitos',p:'rekam',h:'Kenapa banyak yang <em>tertahan di bawah</em>',a:'Begitu jualan online, klien akan datang sendiri.',b:'Klien datang dari konten yang konsisten, bukti, dan penawaran yang jelas.',src:'Mitos "build it and they will come" (YT01)'},
 {k:'kartu',p:'consultation',x:'Urutan yang lebih aman: kuatkan klien offline dulu, lalu hybrid, baru online penuh.',src:'Saran James Smith (YT17)'}]);
P['c-skor']=C('c-skor','Nilai 7 fungsi bisnismu','Checklist · scorecard','Ide #80 (YT01). Varian scorecard 1–5 (P2).',[
 {k:'kartu',p:'catat',sw:1,x:'Nilai bisnismu di 7 fungsi inti. Yang nilainya paling rendah itu prioritasmu bulan ini.'},
 {k:'skor',p:'tunjuk-layar',h:'Nilai dirimu <em>1–5</em>',rows:[['Lead generation',3],['Lead nurture',2],['Sales',4],['Fulfillment',5],['Retensi',1],['Tim',3],['Keuangan',2]],src:'7 fungsi inti, Gym Launch (YT01)'},
 {k:'tweet',x:'Lead dan sales itu dua skill yang berbeda.\nBereskan yang nilainya paling rendah dulu, atau cari orang untuk itu.',src:'Pelajaran ke-4, YT01'}]);
const POSTS=['c-pricing','c-aid','c-retensi','c-valley','c-skor','kapasitas','r-kapasitas','opini','alur','paket','r-pricing','bedah','r-produk','listicle','tangga','r-checkin','retensi','simulasi','r-konten','r-lisensi'].map(k=>P[k]);
