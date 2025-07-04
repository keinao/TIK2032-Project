-- Buat database baru khusus blog pribadi
CREATE DATABASE blog_personal;

USE blog_personal;

-- Tabel untuk menyimpan cerita blog pribadi
CREATE TABLE blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    status ENUM('published', 'draft') DEFAULT 'published'
);

-- Isi data cerita blog (3 artikel blog pribadi)
INSERT INTO blog_posts (title, content) VALUES
('Life of a Tech Geek: Antara Kode dan Hiburan', 
'Halo semua! Di sini anak Informatika Unsrat yang lagi berjuang di tengah lautan kode dan algoritma. Tapi jangan salah, di balik laptop yang selalu nyala sampai dini hari, aku punya kehidupan lain yang gak kalah seru! 
Komik dan novel? OBSESI BANGET! Bisa begadang cuma buat nyelesaiin volume terbaru manga favorit atau novel yang bikin penasaran. Rasanya tuh kayak punya portal ajaib yang bisa teleport ke dunia lain tiap kali buka halaman baru.
Soal film? Jangan ditanya! Weekend adalah waktu sakral buat marathon film. Dari blockbuster Hollywood sampai film indie yang bikin mikir, semua masuk playlist. Kadang temen-temen pada heran, "Kok bisa hapal dialog film sampe detail gitu?" Ya iyalah, udah ratusan kali nonton!
Dan anime... oh man, ini udah level addiction tersendiri! Dari yang mainstream sampai yang obscure, semua dilahap. Kadang sampe lupa waktu kalau udah nonton anime, apalagi kalau lagi seru-serunya. "One more episode" yang berujung subuh, siapa yang relate?
Di tengah jadwal kuliah yang padat dan deadline coding yang mencekik, hobi-hobi ini jadi pelarian yang bikin tetap waras. Plus, siapa bilang dunia IT dan dunia entertainment gak nyambung? Banyak ide project coding yang terinspirasi dari anime dan film yang ditonton!
So, that\'s me! Mahasiswa Informatika yang kadang bisa lebih semangat bahas episode terbaru anime daripada bahas struktur data. But hey, balance is key, right? 🤘'),
('Goals 2025: Misi Mahasiswa Informatika!', 
'Hai semuanya! Tahun ini aku lagi full throttle dengan misi-misi penting sebagai mahasiswa Informatika di Unsrat. Pengen tau apa aja targetku tahun ini? Cekidot!
Pertama, LULUS SEMUA MATA KULIAH adalah goal utama! 🎯 Ini artinya, bakal ada banyak begadang bareng kode, debugging sampe mata merah, dan tentunya battle royale dengan deadline. Tapi hey, challenge accepted! Gak ada yang namanya "menyerah" dalam kamusku.
Kedua, TETAP SEHAT adalah prioritas absolute! Karena apa gunanya IP sempurna kalau badan sakit-sakitan, kan? Jadi di antara submission tugas dan praktikum, aku bakal pastiin ada waktu buat istirahat, makan teratur, dan mungkin sedikit olahraga (atau minimal jalan kaki ke warung buat beli mie instan... hehe).
Yang bikin tahun ini makin seru, aku lagi dipercaya jadi KETUA PANITIA event kampus! 🔥 Ini tantangan level boss yang bikin dag-dig-dug tapi juga super exciting. Targetnya jelas: bikin semua event sukses besar, sampai orang-orang bakal ngomong "Wah, eventnya keren banget!" Gak cuma sukses buat aku, tapi juga bikin semua anggota tim dan peserta puas!
Memang kadang rasanya seperti karakter anime yang harus menghadapi final boss dengan level yang masih kurang. Tapi bukankah itu yang bikin cerita jadi seru? Aku yakin dengan semangat dan kerja keras (plus sedikit asupan komik dan anime untuk refreshing), semua goals ini bakal bisa aku taklukkan satu per satu!
So, doakan aku ya! Dan buat yang lagi berjuang juga, let\'s crush our goals together! 💪✨'),
('Kompilasi Kehidupan: Persahabatan Enam Cewek Programmer', 
'Namanya kami panggil "APU: Achievers\' Productive Union" - enam mahasiswi informatika yang bersatu menghadapi tantangan dunia coding. Perkenalkan: si periang yang selalu menjadi debugger masalah kami, si perfeksionis seperti clean code, si teliti yang melebihi compiler, si kreatif yang berpikir out of the box, si sistematis seperti algoritma terstruktur, dan si pendiam tapi solutif seperti function yang efektif.
**Awal Mula Terbentuknya "APU"**
Hari pertama masuk jurusan Informatika, kami berenam adalah seperti variable yang belum terdefinisi. Gugup dan merasa asing di tengah lautan mahasiswa yang didominasi laki-laki. Satu pertanyaan tentang tugas algoritma dari salah satu di antara kami menjadi awal terciptanya persahabatan yang tak terduga.
**Bug dan Debug dalam Persahabatan**
Seperti halnya coding, persahabatan kami juga tidak luput dari bug. Ketika deadline menghantui, dua dari kami berselisih tentang metode coding. Si debugger handal selalu punya solusi brilian yang menyatukan kami kembali.
**Momen Kemenangan**
Hacksaweb, kompetisi programming tingkat nasional, menjadi panggung kami membuktikan diri. Dengan keahlian masing-masing, kami memenangkan juara kedua! Momen itu menguatkan ikatan kami sebagai sebuah tim yang solid.
**Kopi dan Curhat**
Kopi Kenangan menjadi markas kami untuk berdiskusi, berbagi cerita, dan saling mendukung. Di sinilah kami belajar bahwa persahabatan adalah framework terbaik untuk bertahan di dunia perkuliahan yang penuh tantangan. 😆🤟');
