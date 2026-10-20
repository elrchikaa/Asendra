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
 {k:'tweet',x:'Klien tidak membayar untuk jam latihannya.\nKlien membayar supaya tidak bingung lagi harus mulai dari mana.'},
 {k:'tweet',d:1,x:'Jam bisa ditawar.\nKejelasan tidak.'},
 {k:'tweet',x:'Berhenti jualan "sesi".\nJualan jalan yang jelas dari kondisi sekarang ke target.'}]),
alur:C('alur','Konten → klien','Foto + kartu · corong · chat','Langkah yang hilang di antara konten dan klien.',[
 {k:'corong',p:'laptop-gym',h:'DM sepi? Ada <em>satu langkah</em> yang kamu lewati',L:['Konten edukasi','DM / komentar','Konsultasi 15 menit','Paket dengan sistem'],hi:2,c:'Lebar corong hanya ilustrasi, bukan data konversi.'},
 {k:'kartu',p:'rekam',x:'Kontenmu ramai yang like, tapi DM tetap sepi. Ada satu langkah yang sering hilang.'},
 {k:'chat',p:'checkin-hp',h:'Ajakan bicara <em>satu kalimat</em>',M:['Kak, programnya cocok buat pemula?','Cocok. Biar pas, boleh aku tanya 3 hal dulu? 15 menit lewat call.','Boleh, kapan?']},
 {k:'kartu',p:'consultation',x:'Orang jarang membeli paket tanpa diajak bicara dulu. Tambahkan satu kalimat ajakan di setiap konten edukasi.'}]),
paket:C('paket','Jual sesi vs paket','Belah dua · tumpukan · matriks','Perbandingan dengan foto, lalu isi paket dan cara memilih apa yang distandarkan.',[
 {k:'belah',a:['dampingi','Jual per sesi','Bayar per datang. Hilang kalau tidak datang.'],b:['nulis-program','Jual paket + sistem','Program, tracker, evaluasi.']},
 {k:'kartu',p:'coaching',x:'Klien tidak membeli jam. Klien membeli hasil yang jelas prosesnya.'},
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
simulasi:C('simulasi','Omzet ≠ laba','Foto + kartu · grafik batang','Hitungan simulasi, label wajib.',[
 {k:'batang',p:'laptop-gym',h:'Rp3 juta omzet, <em>berapa yang tersisa?</em>',B:[['Omzet','Rp3 jt',100],['Biaya','Rp1,2 jt',40],['Laba','Rp1,8 jt',60]],hi:2,f:'Angka simulasi. Bukan janji penghasilan.'},
 {k:'kartu',p:'tunjuk-layar',x:'10 klien × Rp300 ribu kelihatan besar. Belum tentu itu yang masuk ke kantongmu.'},
 {k:'tweet',d:1,x:'Omzet menunjukkan penjualan.\nLaba menunjukkan bisnismu sehat atau tidak.'}]),
'r-kapasitas':RL('r-kapasitas','Kalender = plafon gaji','V1 B-roll coach mendampingi latihan, 6–8 dtk','Tiga cara menaikkan plafon tanpa menambah jam:\n1) Naikkan harga dengan paket yang isinya jelas.\n2) Pindahkan sebagian klien ke kelas grup.\n3) Jadikan program, meal plan, dan checklist sebagai aset yang dipakai ulang.\nTulis di komentar mau mulai dari nomor berapa.',[{k:'kartu',p:'dampingi',x:'Kalendermu adalah plafon gajimu.'},{k:'kartu',p:'lelah',x:'Ada 3 cara menaikkan plafon itu tanpa menambah jam. Yang ketiga paling jarang dipakai coach.'},{k:'kartu',p:'dampingi',x:'Jawabannya di caption ↓'}]),
'r-pricing':RL('r-pricing','Klien beli hasil','V1 B-roll konsultasi di meja gym','Ganti "sesi 60 menit" dengan tiga hal:\n1) Target 8 minggu.\n2) Isi: program, tracker, evaluasi.\n3) Batas: berapa kali check-in, lewat apa.',[{k:'kartu',p:'consultation',x:'Klien tidak beli jam. Klien beli hasil.'},{k:'kartu',p:'ngobrol',x:'Kalau offer-mu masih "sesi 60 menit", kamu sedang bersaing di harga.'},{k:'kartu',p:'consultation',x:'Jawabannya di caption ↓'}]),
'r-produk':RL('r-produk','Program yang terbuang','V2 POV tangan menulis program, bisa direkam sendiri','Tulis program sekali dalam format template, lalu pakai berkali-kali: bonus paket, produk mandiri, materi kelas. Cek hak pakai kalau memakai template orang lain.',[{k:'kartu',p:'rencana',x:'Program yang kamu tulis ulang untuk tiap klien adalah aset yang kamu buang.'},{k:'kartu',p:'nulis-program',x:'Coach yang penghasilannya naik tanpa tambah jam biasanya melakukan satu hal ini dulu.'},{k:'kartu',p:'rencana',x:'Jawabannya di caption ↓'}]),
'r-checkin':RL('r-checkin','Klien berhenti','V2 POV scroll chat di HP','Pesan minggu kedua: "Apa yang paling susah dari program minggu ini?" Satu pertanyaan ini membuka ruang menyesuaikan program sebelum klien diam-diam berhenti.',[{k:'kartu',p:'checkin-hp',x:'Klien berhenti bukan karena programnya jelek.'},{k:'kartu',p:'checkin-hp',x:'Biasanya karena satu pesan yang tidak pernah dikirim coach di minggu kedua.'},{k:'kartu',p:'checkin-hp',x:'Jawabannya di caption ↓'}]),
'r-konten':RL('r-konten','Konten tidak jadi klien','V1 B-roll merekam konten dengan HP + tripod','Langkah yang dilewati: ajakan bicara. Konten → DM → konsultasi 15 menit → paket.',[{k:'kartu',p:'rekam',x:'Coach paling pintar jarang yang paling laku.'},{k:'kartu',p:'rekam',x:'Bukan soal algoritma. Ada satu langkah antara konten dan klien yang sering dilewati.'},{k:'kartu',p:'rekam',x:'Jawabannya di caption ↓'}]),
'r-lisensi':RL('r-lisensi','Beli template ≠ boleh jual','V4 screen recording produk Fitasset (sementara foto laptop)','Personal: dipakai sendiri. MRR: boleh dijual ulang. PLR: boleh diubah dan diberi merek. Detail mengikuti lisensi final tiap produk.',[{k:'kartu',p:'laptop-gym',x:'Beli template bukan berarti boleh menjualnya lagi.'},{k:'kartu',p:'tunjuk-layar',x:'Ada 3 jenis hak pakai. Salah pilih bisa membuat produkmu ditarik.'},{k:'kartu',p:'laptop-gym',x:'Jawabannya di caption ↓'}]),
};
const POSTS=['kapasitas','r-kapasitas','opini','alur','paket','r-pricing','bedah','r-produk','listicle','tangga','r-checkin','retensi','simulasi','r-konten','r-lisensi'].map(k=>P[k]);
