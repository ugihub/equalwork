// EqualWork Modern Dashboard Engine

// 1. Data Store
const REGULATIONS_DB = [
  {
    id: "uu-13-2003",
    title: "Undang-Undang No. 13 Tahun 2003",
    type: "ketenagakerjaan",
    tag: "Ketenagakerjaan",
    desc: "Undang-undang payung hukum ketenagakerjaan di Indonesia, mengatur hak, kewajiban, upah, jam kerja, cuti, PHK, dan perlindungan pekerja.",
    number: "UU Nomor 13 Tahun 2003",
    content: `
      <p><strong>Fokus Utama:</strong> Menjamin perlindungan hak dasar pekerja dan mewujudkan iklim industri yang harmonis, dinamis, dan berkeadilan.</p>
      <p><strong>Poin Kunci Kesetaraan & Hak:</strong></p>
      <ul>
        <li><strong>Pasal 5:</strong> Setiap tenaga kerja memiliki kesempatan yang sama tanpa diskriminasi untuk memperoleh pekerjaan.</li>
        <li><strong>Pasal 6:</strong> Setiap pekerja/buruh berhak memperoleh perlakuan yang sama tanpa diskriminasi dari pengusaha.</li>
        <li><strong>Pasal 76:</strong> Mengatur pembatasan mempekerjakan perempuan hamil atau menyusui pada malam hari (23.00 - 05.00) demi keselamatan kesehatan reproduksi, wajib disediakan angkutan jemputan dan makanan bergizi.</li>
        <li><strong>Pasal 81:</strong> Hak cuti haid selama 2 hari bagi buruh perempuan yang merasakan sakit saat masa haid dengan upah tetap dibayar penuh.</li>
        <li><strong>Pasal 82:</strong> Hak cuti melahirkan selama 3 bulan (1.5 bulan sebelum dan 1.5 bulan setelah melahirkan) serta cuti keguguran selama 1.5 bulan dengan upah penuh.</li>
        <li><strong>Pasal 83:</strong> Kesempatan menyusui dan memerah ASI di tempat kerja pada waktu kerja.</li>
      </ul>
      <p><strong>Sanksi Pelanggaran:</strong> Pelanggaran terhadap hak-hak dasar (termasuk diskriminasi dan upah di bawah standar minimum) dapat dikenakan sanksi administratif hingga sanksi pidana kurungan maupun denda finansial berat.</p>
    `
  },
  {
    id: "uu-11-2020",
    title: "Undang-Undang No. 11 Tahun 2020 / UU Cipta Kerja",
    type: "ketenagakerjaan",
    tag: "Ketenagakerjaan",
    desc: "Regulasi omnibus law yang merombak sebagian ketentuan UU 13/2003 guna mendorong penciptaan lapangan kerja dan investasi.",
    number: "UU Nomor 11 Tahun 2020 jo. Perpu No 2 Tahun 2022",
    content: `
      <p><strong>Fokus Utama:</strong> Penyederhanaan birokrasi, kemudahan investasi, dan fleksibilitas perjanjian kerja (PKWT/PKWTT) serta mekanisme pesangon.</p>
      <p><strong>Perubahan Penting Ketenagakerjaan:</strong></p>
      <ul>
        <li>Penyesuaian tata cara penghitungan upah minimum dengan memperhatikan inflasi atau pertumbuhan ekonomi daerah secara berkala.</li>
        <li>Pembatasan jam lembur ditingkatkan dari maksimal 3 jam menjadi 4 jam sehari (total maksimal 18 jam seminggu), wajib dibayar sesuai aturan.</li>
        <li>Penyesuaian skema PHK dan besaran kompensasi pesangon, dengan penambahan jaminan sosial baru berupa Jaminan Kehilangan Pekerjaan (JKP).</li>
      </ul>
      <p><strong>Implikasi Kesetaraan Gender:</strong> Meskipun terdapat deregulasi, perlindungan hak reproduksi wanita (cuti haid dan melahirkan) secara eksplisit dinyatakan tidak dihapus dan tetap mengacu pada UU 13/2003.</p>
    `
  },
  {
    id: "pp-35-2021",
    title: "Peraturan Pemerintah No. 35 Tahun 2021",
    type: "jam-kerja",
    tag: "Jam Kerja & Kontrak",
    desc: "Mengatur teknis Hubungan Kerja, Perjanjian Kerja Waktu Tertentu (PKWT), Alih Daya (Outsourcing), Waktu Kerja, dan PHK.",
    number: "Peraturan Pemerintah Nomor 35 Tahun 2021",
    content: `
      <p><strong>Fokus Utama:</strong> Aturan turunan dari UU Cipta Kerja mengenai syarat kerja kontrak, jam lembur, dan pesangon.</p>
      <p><strong>Ketentuan Detail:</strong></p>
      <ul>
        <li><strong>Kontrak Kerja (PKWT):</strong> Jangka waktu kontrak maksimal keseluruhan mencapai 5 tahun. Apabila selesai kontrak, pekerja berhak atas uang kompensasi PKWT secara proporsional masa kerja.</li>
        <li><strong>Waktu Kerja:</strong> Standar 7 jam sehari & 40 jam seminggu (untuk 6 hari kerja) atau 8 jam sehari & 40 jam seminggu (untuk 5 hari kerja).</li>
        <li><strong>Lembur:</strong> Pekerjaan lembur harus didasari persetujuan pekerja tertulis/digital. Upah lembur dihitung per jam dengan tarif progresif (1.5x upah sejam di jam pertama, 2x upah sejam di jam berikutnya).</li>
      </ul>
    `
  },
  {
    id: "permenaker-5-2018",
    title: "Permenaker No. 5 Tahun 2018",
    type: "kesetaraan-gender",
    tag: "Kesetaraan Gender",
    desc: "Pedoman keselamatan dan kesehatan kerja (K3) lingkungan kerja, termasuk perlindungan psikologis dari pelecehan seksual.",
    number: "Peraturan Menteri Ketenagakerjaan Nomor 5 Tahun 2018",
    content: `
      <p><strong>Fokus Utama:</strong> Mewujudkan lingkungan kerja yang aman secara fisik, kimia, biologi, ergonomi, dan psikologi bagi semua pekerja tanpa terkecuali.</p>
      <p><strong>Aspek Psikososial & Anti-Diskriminasi:</strong></p>
      <ul>
        <li>Mengharuskan perusahaan mengidentifikasi dan meminimalkan stresor psikologis di tempat kerja, termasuk intimidasi dan pelecehan verbal.</li>
        <li>Perlindungan terhadap martabat pekerja agar terhindar dari pelecehan seksual di lingkungan operasional kantor maupun lapangan.</li>
        <li>Penyediaan fasilitas kebersihan (toilet terpisah yang higienis antara laki-laki dan perempuan) serta sarana laktasi yang memadai untuk pekerja menyusui.</li>
      </ul>
    `
  },
  {
    id: "uu-12-2022",
    title: "Undang-Undang No. 12 Tahun 2022 (UU TPKS)",
    type: "kesetaraan-gender",
    tag: "Kesetaraan Gender",
    desc: "Undang-Undang Tindak Pidana Kekerasan Seksual yang memberi perlindungan hukum komprehensif bagi korban kekerasan seksual di tempat kerja.",
    number: "UU Nomor 12 Tahun 2022",
    content: `
      <p><strong>Fokus Utama:</strong> Mencegah segala bentuk kekerasan seksual, menangani, mengadili, memulihkan korban, dan menindak pelaku kekerasan seksual.</p>
      <p><strong>Implikasi di Dunia Kerja:</strong></p>
      <ul>
        <li><strong>Pelecehan Seksual Non-Fisik & Fisik:</strong> Segala ucapan, candaan, atau sentuhan fisik yang melecehkan martabat pekerja secara seksual di lingkungan kantor sah menjadi tindak pidana.</li>
        <li><strong>Kewajiban Pengusaha:</strong> Manajemen perusahaan wajib merespons aduan pelecehan dengan perlindungan korban, dan dilarang melakukan intimidasi atau mutasi/PHK sepihak kepada pelapor.</li>
        <li>Sanksi hukum pidana penjara langsung bagi pelaku kekerasan seksual di tempat kerja, tanpa pengecualian jabatan.</li>
      </ul>
    `
  },
  {
    id: "uu-4-2024",
    title: "Undang-Undang No. 4 Tahun 2024 (UU KIA)",
    type: "kesetaraan-gender",
    tag: "Kesetaraan Gender",
    desc: "Regulasi terbaru penjamin kesejahteraan ibu dan anak, hak cuti melahirkan hingga 6 bulan, dan larangan PHK bagi ibu hamil & bersalin.",
    number: "UU Nomor 4 Tahun 2024 tentang Kesejahteraan Ibu dan Anak",
    content: `
      <p><strong>Fokus Utama:</strong> Menjamin hak dasar ibu hamil, melahirkan, dan menyusui untuk tumbuh kembang anak optimal pada 1000 Hari Pertama Kehidupan (HPK).</p>
      <p><strong>Poin Kunci Hak Kesejahteraan Ibu & Anak:</strong></p>
      <ul>
        <li><strong>Pasal 4 & 5:</strong> Hak cuti melahirkan bagi ibu bekerja paling singkat 3 bulan, dan dapat diperpanjang hingga 6 bulan apabila terdapat kondisi medis khusus yang dibuktikan surat dokter. Selama cuti, upah dibayar penuh untuk 3 bulan pertama, dan 75% untuk bulan ke-4 s.d ke-6.</li>
        <li><strong>Pasal 6:</strong> Hak cuti bagi suami untuk mendampingi istri melahirkan (2 hari wajib, dan dapat ditambah 3 hari sesuai kesepakatan) atau cuti keguguran bagi suami (2 hari).</li>
        <li><strong>Pasal 5 ayat (2):</strong> Larangan pemutusan hubungan kerja (PHK) bagi ibu hamil, melahirkan, dan menyusui yang melaksanakan hak cuti melahirkan.</li>
      </ul>
      <p><strong>Sanksi Pelanggaran:</strong> Setiap pengusaha yang menghalangi hak cuti melahirkan atau melakukan PHK sepihak dapat dikenakan sanksi administratif berat hingga pencabutan izin operasional usaha.</p>
    `
  },
  {
    id: "uu-39-1999",
    title: "Undang-Undang No. 39 Tahun 1999 tentang HAM",
    type: "kesetaraan-gender",
    tag: "Kesetaraan Gender",
    desc: "Mengatur hak dasar wanita untuk memperoleh pekerjaan yang setara, lingkungan kerja aman, dan pemenuhan hak reproduksi wanita secara hukum.",
    number: "UU Nomor 39 Tahun 1999 tentang Hak Asasi Manusia",
    content: `
      <p><strong>Fokus Utama:</strong> Mengatur hak-hak sipil, politik, ekonomi, sosial, dan budaya seluruh rakyat Indonesia, termasuk perlindungan hak khusus wanita.</p>
      <p><strong>Poin Kunci Hak Kesetaraan Kerja Wanita:</strong></p>
      <ul>
        <li><strong>Pasal 48:</strong> Wanita berhak memperoleh pendidikan dan pengajaran di semua jenis, jenjang, dan jalur pendidikan sesuai dengan persyaratan.</li>
        <li><strong>Pasal 49 ayat (1):</strong> Wanita berhak memilih, dipilih, menduduki jabatan publik, serta memperoleh kesempatan kerja setara dengan pria pada semua tingkatan karir.</li>
        <li><strong>Pasal 49 ayat (2):</strong> Wanita berhak atas perlindungan khusus dalam melaksanakan pekerjaan demi kesehatan reproduksinya (hak hamil, melahirkan, menyusui).</li>
      </ul>
    `
  },
  {
    id: "ilo-100",
    title: "Konvensi ILO No. 100 (Upah Setara)",
    type: "upah",
    tag: "Upah & Kesetaraan",
    desc: "Standar internasional menjamin kesamaan nominal upah dan hak tunjangan keluarga antara buruh laki-laki dan perempuan untuk bobot kerja yang sama.",
    number: "Ratifikasi UU No. 80 Tahun 1957",
    content: `
      <p><strong>Fokus Utama:</strong> Menghapus diskriminasi pengupahan berbasis gender untuk mewujudkan keadilan upah di dunia industri.</p>
      <p><strong>Aspek Hukum Internasional & Nasional:</strong></p>
      <ul>
        <li><strong>Pasal 2:</strong> Tiap negara wajib mengusahakan dan menjamin penerapan asas pengupahan yang sama bagi pekerja laki-laki dan wanita untuk pekerjaan yang sama nilainya.</li>
        <li><strong>Evaluasi Pekerjaan Objektif:</strong> Pengukuran nilai pekerjaan didasarkan pada bobot tugas objektif, keahlian, dan tanggung jawab kerja, bukan didasarkan atas prasangka gender pekerja.</li>
      </ul>
    `
  },
  {
    id: "ilo-111",
    title: "Konvensi ILO No. 111 (Anti-Diskriminasi Kerja)",
    type: "kesetaraan-gender",
    tag: "Anti-Diskriminasi",
    desc: "Konvensi internasional melarang segala bentuk diskriminasi kerja berbasis ras, warna kulit, jenis kelamin, agama, suku, atau asal-usul sosial.",
    number: "Ratifikasi UU No. 21 Tahun 1999",
    content: `
      <p><strong>Fokus Utama:</strong> Mendorong kesetaraan kesempatan dan perlakuan dalam pekerjaan dan jabatan secara inklusif.</p>
      <p><strong>Definisi & Aspek Diskriminasi:</strong></p>
      <ul>
        <li><strong>Definisi Diskriminasi (Pasal 1):</strong> Setiap perbedaan, pengecualian atau pengutamaan atas dasar ras, warna kulit, jenis kelamin, agama, keyakinan politik, kebangsaan, atau asal-usul sosial yang meniadakan atau mengurangi kesamaan kesempatan atau perlakuan dalam pekerjaan atau jabatan.</li>
        <li>Kewajiban perusahaan untuk mempromosikan rekrutmen yang inklusif, objektif, ramah gender, serta menghapus persyaratan diskriminatif dalam info lowongan kerja.</li>
      </ul>
    `
  }
];

// Helper to format regulation HTML content dynamically into a premium structured layout
function formatRegulationContent(content) {
  if (!content) return "";
  let formatted = content;
  
  // 1. Format Fokus Utama Callout Box
  formatted = formatted.replace(
    /<p>\s*<strong>Fokus Utama:<\/strong>\s*([\s\S]*?)<\/p>/i,
    `<div class="modal-callout-box accent-box">
       <div class="callout-icon-wrapper">
         <i class="fas fa-bullseye"></i>
       </div>
       <div class="callout-content">
         <span class="callout-title">Fokus Utama</span>
         <p>$1</p>
       </div>
     </div>`
  );
  
  // 2. Format Sanksi Pelanggaran Callout Box
  formatted = formatted.replace(
    /<p>\s*<strong>Sanksi Pelanggaran:<\/strong>\s*([\s\S]*?)<\/p>/i,
    `<div class="modal-callout-box danger-box">
       <div class="callout-icon-wrapper">
         <i class="fas fa-exclamation-triangle"></i>
       </div>
       <div class="callout-content">
         <span class="callout-title">Sanksi Pelanggaran</span>
         <p>$1</p>
       </div>
     </div>`
  );

  // 3. Format Implikasi Kesetaraan Gender Callout Box
  formatted = formatted.replace(
    /<p>\s*<strong>Implikasi Kesetaraan Gender:<\/strong>\s*([\s\S]*?)<\/p>/i,
    `<div class="modal-callout-box purple-box">
       <div class="callout-icon-wrapper">
         <i class="fas fa-venus-mars"></i>
       </div>
       <div class="callout-content">
         <span class="callout-title">Implikasi Kesetaraan Gender</span>
         <p>$1</p>
       </div>
     </div>`
  );
  
  // 4. Format Section Title headers
  formatted = formatted.replace(
    /<p>\s*<strong>(Poin Kunci[^:]*|Perubahan Penting[^:]*|Ketentuan Detail|Aspek Psikososial[^:]*|Implikasi di Dunia Kerja|Definisi & Aspek[^:]*|Aspek Hukum[^:]*):<\/strong>\s*<\/p>/gi,
    `<h4 class="modal-section-title"><i class="fas fa-star section-title-icon"></i> $1</h4>`
  );

  return formatted;
}

const UMP_2024_DB = [
  // Sumatera
  { prov: "Aceh", region: "sumatra", wage: 3460672, percent: 1.38 },
  { prov: "Sumatera Utara", region: "sumatra", wage: 2809915, percent: 3.67 },
  { prov: "Sumatera Barat", region: "sumatra", wage: 2811500, percent: 2.52 },
  { prov: "Riau", region: "sumatra", wage: 3294625, percent: 3.20 },
  { prov: "Kepulauan Riau", region: "sumatra", wage: 3402492, percent: 3.12 },
  { prov: "Jambi", region: "sumatra", wage: 3037121, percent: 3.29 },
  { prov: "Sumatera Selatan", region: "sumatra", wage: 3456874, percent: 1.55 },
  { prov: "Bangka Belitung", region: "sumatra", wage: 3640000, percent: 4.04 },
  { prov: "Bengkulu", region: "sumatra", wage: 2507079, percent: 3.87 },
  { prov: "Lampung", region: "sumatra", wage: 2716166, percent: 3.16 },
  
  // Jawa
  { prov: "DKI Jakarta", region: "java", wage: 5067381, percent: 3.38 },
  { prov: "Jawa Barat", region: "java", wage: 2057495, percent: 3.57 },
  { prov: "Jawa Tengah", region: "java", wage: 2036947, percent: 4.02 },
  { prov: "DI Yogyakarta", region: "java", wage: 2125897, percent: 7.27 },
  { prov: "Jawa Timur", region: "java", wage: 2165244, percent: 4.10 },
  { prov: "Banten", region: "java", wage: 2727812, percent: 2.50 },
  
  // Kalimantan
  { prov: "Kalimantan Barat", region: "kalimantan", wage: 2702616, percent: 3.60 },
  { prov: "Kalimantan Tengah", region: "kalimantan", wage: 3228337, percent: 3.10 },
  { prov: "Kalimantan Selatan", region: "kalimantan", wage: 3282651, percent: 4.22 },
  { prov: "Kalimantan Timur", region: "kalimantan", wage: 3360858, percent: 4.78 },
  { prov: "Kalimantan Utara", region: "kalimantan", wage: 3361653, percent: 3.38 },
  
  // Nusa Tenggara & Bali
  { prov: "Bali", region: "nusatenggara", wage: 2813672, percent: 3.68 },
  { prov: "Nusa Tenggara Barat", region: "nusatenggara", wage: 2444067, percent: 3.06 },
  { prov: "Nusa Tenggara Timur", region: "nusatenggara", wage: 2186826, percent: 2.96 },
  
  // Sulawesi
  { prov: "Sulawesi Utara", region: "sulawesi", wage: 3545000, percent: 1.67 },
  { prov: "Sulawesi Tengah", region: "sulawesi", wage: 2736698, percent: 5.28 },
  { prov: "Sulawesi Selatan", region: "sulawesi", wage: 3434298, percent: 1.45 },
  { prov: "Sulawesi Tenggara", region: "sulawesi", wage: 2885964, percent: 4.60 },
  { prov: "Gorontalo", region: "sulawesi", wage: 3025100, percent: 1.19 },
  { prov: "Sulawesi Barat", region: "sulawesi", wage: 2914958, percent: 1.50 },
  
  // Maluku
  { prov: "Maluku", region: "maluku", wage: 2949953, percent: 4.88 },
  { prov: "Maluku Utara", region: "maluku", wage: 3200000, percent: 7.50 },
  
  // Papua
  { prov: "Papua", region: "papua", wage: 4024270, percent: 4.13 },
  { prov: "Papua Barat", region: "papua", wage: 3393000, percent: 2.44 },
  { prov: "Papua Tengah", region: "papua", wage: 4024270, percent: 4.13 },
  { prov: "Papua Pegunungan", region: "papua", wage: 4024270, percent: 4.13 },
  { prov: "Papua Selatan", region: "papua", wage: 4024270, percent: 4.13 },
  { prov: "Papua Barat Daya", region: "papua", wage: 4024270, percent: 4.13 }
];

// Expanded real-world UMK (City Minimum Wage) Data for selected major provinces
const UMK_2024_DB = {
  "DKI Jakarta": [
    { city: "Kota Jakarta Pusat", wage: 5067381 },
    { city: "Kota Jakarta Selatan", wage: 5067381 },
    { city: "Kota Jakarta Barat", wage: 5067381 },
    { city: "Kota Jakarta Utara", wage: 5067381 },
    { city: "Kota Jakarta Timur", wage: 5067381 }
  ],
  "Jawa Barat": [
    { city: "Kab. Karawang", wage: 5257534 },
    { city: "Kota Bekasi", wage: 5219263 },
    { city: "Kab. Bekasi", wage: 5219263 },
    { city: "Kota Depok", wage: 4878612 },
    { city: "Kota Bogor", wage: 4813988 },
    { city: "Kota Bandung", wage: 4209309 },
    { city: "Kab. Garut", wage: 2186437 },
    { city: "Kab. Ciamis", wage: 2089464 },
    { city: "Kab. Banjar", wage: 2070192 }
  ],
  "Jawa Tengah": [
    { city: "Kota Semarang", wage: 3243969 },
    { city: "Kab. Demak", wage: 3091300 },
    { city: "Kab. Kendal", wage: 2613573 },
    { city: "Kab. Kudus", wage: 2516888 },
    { city: "Kota Surakarta (Solo)", wage: 2269368 },
    { city: "Kab. Banjarnegara", wage: 2030000 }
  ],
  "Jawa Timur": [
    { city: "Kota Surabaya", wage: 4725479 },
    { city: "Kab. Gresik", wage: 4642031 },
    { city: "Kab. Sidoarjo", wage: 4638582 },
    { city: "Kab. Pasuruan", wage: 4635133 },
    { city: "Kota Malang", wage: 3301397 },
    { city: "Kab. Sampang", wage: 2182861 }
  ],
  "Banten": [
    { city: "Kota Cilegon", wage: 4815102 },
    { city: "Kota Tangerang", wage: 4760289 },
    { city: "Kab. Tangerang", wage: 4702000 },
    { city: "Kota Serang", wage: 4142269 },
    { city: "Kab. Pandeglang", wage: 3010950 },
    { city: "Kab. Lebak", wage: 2978764 }
  ],
  "DI Yogyakarta": [
    { city: "Kota Yogyakarta", wage: 2492997 },
    { city: "Kab. Sleman", wage: 2315976 },
    { city: "Kab. Bantul", wage: 2216463 },
    { city: "Kab. Kulon Progo", wage: 2207398 },
    { city: "Kab. Gunungkidul", wage: 2188042 }
  ]
};

// ASEAN Country Minimum Wage Comparisons (in IDR Equivalents for visualization)
const ASEAN_WAGES_DB = [
  { country: "Singapura", wage: 45000000, valStr: "Rp 45,000,000 (Rata-rata)", barWidth: 100, highlight: false },
  { country: "Malaysia", wage: 5120000, valStr: "RM 1,500 (~Rp 5.1 Juta)", barWidth: 35, highlight: false },
  { country: "Thailand", wage: 4680000, valStr: "฿ 10,500 (~Rp 4.6 Juta)", barWidth: 32, highlight: false },
  { country: "Indonesia", wage: 3115000, valStr: "Rp 3,115,000 (Rerata Nas.)", barWidth: 26, highlight: true },
  { country: "Vietnam", wage: 3050000, valStr: "₫ 4,680,000 (~Rp 3.0 Juta)", barWidth: 24, highlight: false },
  { country: "Filipina", wage: 2940000, valStr: "₱ 10,200 (~Rp 2.9 Juta)", barWidth: 23, highlight: false }
];

const ARTICLES_DB = [
  {
    id: "art-1",
    title: "Motherhood Penalty: Menilik Mengapa Ibu Bekerja Sering Tersisih dari Promosi Jabatan",
    category: "Kesetaraan",
    date: "04 Juni 2026",
    author: "Rania Wardani",
    time: "5 min baca",
    desc: "Menelaah stigma sosial 'Motherhood Penalty' di perkantoran Indonesia, di mana ibu bekerja dinilai kurang berkomitmen dibandingkan pekerja pria, berdampak langsung pada terhambatnya kenaikan upah.",
    body: `
      <p>Fenomena <em>Motherhood Penalty</em> (penalti keibuan) merupakan bentuk ketimpangan gender tersembunyi yang sangat nyata di dunia profesional korporasi Indonesia. Data menunjukkan bahwa setelah memiliki anak, wanita mengalami penurunan peluang promosi karir secara signifikan, sementara pria yang memiliki anak justru sering mendapatkan "fatherhood bonus" (peningkatan reputasi sebagai kepala keluarga).</p>
      <p>Mengapa bias gender ini terus mengakar?</p>
      <ul>
        <li><strong>Asumsi Komitmen yang Rendah:</strong> Banyak manajer perusahaan berasumsi bahwa ibu bekerja akan lebih mementingkan urusan domestik keluarga, sehingga jarang diberikan proyek-proyek strategis bertekanan tinggi.</li>
        <li><strong>Kesenjangan Evaluasi Kinerja:</strong> Ketidakhadiran karena mengurus anak sakit sering kali langsung dinilai buruk, tanpa mempertimbangkan kualitas kerja objektif.</li>
        <li><strong>Motherhood Wage Gap:</strong> Secara akumulatif, kesenjangan upah ibu bekerja dibanding rekan kerja pria dengan kompetensi setara melebar hingga 28% pasca memiliki anak pertama.</li>
      </ul>
      <p><strong>Langkah Perbaikan:</strong> Perusahaan perlu merumuskan indikator performa kerja (KPI) yang murni objektif hasil, menumbuhkan budaya kerja fleksibel (FWA), serta menerapkan kebijakan cuti melahirkan yang adil bagi ibu maupun ayah (*paternity leave*).</p>
    `
  },
  {
    id: "art-2",
    title: "Sanksi Hukum Pidana bagi Perusahaan yang Mengabaikan Hak Cuti Haid Karyawati",
    category: "Tips Hukum",
    date: "29 Mei 2026",
    author: "Dimas Saputra, SH",
    time: "4 min baca",
    desc: "Banyak buruh perempuan takut mengambil cuti haid karena ancaman pemotongan upah. Simak tinjauan hukum UU Ketenagakerjaan No.13/2003 yang menjamin cuti haid dibayar penuh.",
    body: `
      <p>Hak cuti haid diatur jelas dalam **Undang-Undang Nomor 13 Tahun 2003 tentang Ketenagakerjaan Pasal 81 ayat (1)**: <em>'Pekerja/buruh perempuan yang dalam masa haid merasakan sakit dan memberitahukan kepada pengusaha, tidak wajib bekerja pada hari pertama dan kedua pada waktu haid.'</em></p>
      <p>Namun dalam praktiknya, hak ini sangat jarang diterapkan secara sukarela oleh manajemen pabrik atau kantor. Banyak perusahaan mensyaratkan surat dokter yang rumit atau memotong upah harian secara sepihak.</p>
      <p><strong>Sanksi bagi Pelanggar Hukum:</strong></p>
      <p>Menurut Pasal 186 UU 13/2003, pengusaha yang melanggar hak cuti haid dibayar penuh dapat dikenakan sanksi pidana penjara paling singkat 1 bulan dan paling lama 4 tahun, and/or denda administratif paling sedikit Rp10.000.000 dan paling banyak Rp400.000.000.</p>
      <p><strong>Bagaimana Cara Melaporkannya?</strong> Kumpulkan bukti penolakan cuti atau slip gaji yang terpotong, ajukan klaim tertulis secara Bipartit. Jika menemui jalan buntu, laporkan melalui fitur Pengaduan Resmi EqualWork agar tim advokasi kami membantu meneruskan ke Pengawas Ketenagakerjaan Disnaker setempat.</p>
    `
  },
  {
    id: "art-3",
    title: "Analisis Kesenjangan Upah Gender di Sektor Manufaktur & Tekstil Indonesia",
    category: "Karir",
    date: "18 Mei 2026",
    author: "Siti Rahmawati",
    time: "6 min baca",
    desc: "Mengapa buruh perempuan di pabrik tekstil mendominasi lini produksi terbawah namun menerima upah lembur yang lebih rendah dari pengawas pria? Simak ulasan datanya.",
    body: `
      <p>Sektor industri garmen, tekstil, dan sepatu (alas kaki) di Indonesia merupakan sektor padat karya yang mempekerjakan lebih dari 70% tenaga kerja perempuan. Ironisnya, sektor ini mencatatkan tingkat kesenjangan upah gender (*gender pay gap*) yang cukup tinggi.</p>
      <p><strong>Fakta Ketimpangan di Lapangan:</strong></p>
      <ul>
        <li>**Dominasi Lini Bawah:** Perempuan mengisi hampir 90% posisi operator jahit dan pengepakan. Namun posisi pengawas (*supervisor*) atau kepala regu yang bergaji lebih tinggi didominasi oleh pria (sekitar 82%).</li>
        <li>**Manipulasi Status Kontrak:** Banyak buruh perempuan berstatus pekerja harian lepas atau PKWT berulang yang membuat mereka kehilangan hak tunjangan keluarga, sementara buruh pria lebih cepat diangkat sebagai pekerja tetap dengan alasan 'pencari nafkah utama'.</li>
        <li>**Lembur Tanpa Upah:** Eksploitasi jam kerja lembur yang tidak tercatat resmi sering menyasar buruh perempuan karena ketakutan di-PHK kontraknya.</li>
      </ul>
      <p><strong>Pencegahan:</strong> Dibutuhkan audit upah transparan secara periodik di internal serikat pekerja pabrik dan pengawasan ketat dari Disnaker daerah terhadap kesetaraan status kepegawaian.</p>
    `
  },
  {
    id: "art-4",
    title: "Paternity Leave: Pentingnya Cuti Melahirkan Suami untuk Karir Perempuan",
    category: "Kesetaraan",
    date: "15 Mei 2026",
    author: "Ahmad Hidayat",
    time: "5 min baca",
    desc: "Membahas keterlibatan ayah dalam mengasuh bayi baru lahir untuk mengurangi beban domestik ibu bekerja dan mempercepat kembalinya karir perempuan pasca bersalin.",
    body: `
      <p>Cuti melahirkan bagi suami (*paternity leave*) masih sering dianggap sebagai sekadar liburan tambahan. Namun secara empiris, keterlibatan ayah di minggu-minggu pertama kelahiran bayi sangat berpengaruh terhadap masa depan karir ibu bekerja.</p>
      <p><strong>Keuntungan Kesetaraan Karir:</strong></p>
      <ul>
        <li>**Berbagi Beban Kerja Domestik:** Ketika suami mengambil cuti melahirkan, pembagian kerja domestik seperti merawat bayi dan pekerjaan rumah tangga menjadi lebih seimbang sejak awal.</li>
        <li>**Mencegah Postpartum Depression:** Ibu yang didampingi suami memiliki tingkat stres yang lebih rendah, sehingga mempercepat pemulihan mental dan fisik pasca bersalin.</li>
        <li>**Memperkecil Kesenjangan Karir:** Dengan beban domestik yang terbagi, perempuan dapat kembali ke dunia profesional dengan kesiapan kerja yang optimal tanpa harus mengorbankan prospek promosi jangka panjang.</li>
      </ul>
      <p>Di Indonesia, UU Kesejahteraan Ibu dan Anak (UU KIA) 2024 yang baru disahkan telah mengatur hak cuti melahirkan pendampingan bagi suami, yang diharapkan menjadi langkah awal reformasi budaya kerja patriarki.</p>
    `
  },
  {
    id: "art-5",
    title: "Mengapa Skala Upah Transparan (SUSU) Wajib Diterapkan demi Kesetaraan Gaji",
    category: "Tips Hukum",
    date: "10 Mei 2026",
    author: "Budi Santoso, MBA",
    time: "7 min baca",
    desc: "Banyak perusahaan menentukan gaji berdasarkan negosiasi individual yang subjektif dan bias gender. Pelajari pentingnya penerapan Struktur dan Skala Upah wajib.",
    body: `
      <p>Struktur dan Skala Upah (SUSU) merupakan susunan tingkat upah dari yang terendah sampai dengan yang tertinggi, yang memuat kisaran nominal upah untuk setiap golongan jabatan.</p>
      <p><strong>Solusi Mengikis Gender Pay Gap:</strong></p>
      <p>Tanpa adanya SUSU yang transparan, penentuan gaji di perusahaan cenderung didasarkan pada subjektivitas HRD dan hasil negosiasi lisan saat rekrutmen. Hal ini merugikan perempuan yang secara psikologis sering kali melakukan negosiasi upah secara kurang asertif dibanding laki-laki.</p>
      <p><strong>Ketentuan Hukum:</strong> Berdasarkan Peraturan Menteri Ketenagakerjaan No. 1 Tahun 2017, setiap perusahaan wajib menyusun dan menerapkan Struktur dan Skala Upah dengan memperhatikan golongan, jabatan, masa kerja, pendidikan, dan kompetensi. Perusahaan yang melanggar dapat dikenakan sanksi administratif berupa teguran tertulis hingga pembekuan kegiatan usaha.</p>
    `
  },
  {
    id: "art-6",
    title: "Quiet Promotion: Eksploitasi Tanggung Jawab Tanpa Kenaikan Jabatan & Gaji",
    category: "Karir",
    date: "02 Mei 2026",
    author: "Larasati Putri",
    time: "6 min baca",
    desc: "Mengenal tren bias gender 'Quiet Promotion' di perkantoran, di mana pekerja perempuan sering kali diberi beban tambahan manajerial tanpa kompensasi upah setara.",
    body: `
      <p>Fenomena <em>Quiet Promotion</em> (promosi senyap) terjadi ketika seorang karyawan diberikan tanggung jawab atau beban kerja tambahan yang setara dengan tingkatan jabatan di atasnya, namun tidak disertai dengan kenaikan gelar jabatan (*title*) maupun kenaikan upah bulanan.</p>
      <p><strong>Kerentanan Gender terhadap Quiet Promotion:</strong></p>
      <p>Survei industri menunjukkan bahwa karyawan perempuan lebih rentan mengalami *quiet promotion*. Hal ini dipengaruhi oleh ekspektasi bias gender yang menuntut perempuan untuk lebih bersikap penurut, kooperatif, dan sungkan dalam menanyakan kompensasi finansial tambahan kepada atasan.</p>
      <p><strong>Bagaimana Cara Mengatasinya?</strong></p>
      <ul>
        <li>**Dokumentasikan Pekerjaan:** Catat setiap tugas tambahan di luar job description asli Anda secara terperinci.</li>
        <li>**Ajukan Diskusi Evaluasi:** Minta sesi meeting formal dengan atasan untuk mendiskusikan penyesuaian beban kerja dan upah secara objektif berdasarkan kontribusi baru Anda.</li>
        <li>**Pahami Batasan Kontrak Kerja:** Jika tugas tambahan telah berlangsung lama tanpa kompensasi, Anda berhak merujuk kembali pada perjanjian kerja awal atau menyuarakan kesetaraan hak kerja.</li>
      </ul>
    `
  },
  {
    id: "art-7",
    title: "Urgensi Penyediaan Ruang Laktasi Layak bagi Ibu Menyusui di Tempat Kerja",
    category: "Kesetaraan",
    date: "25 April 2026",
    author: "dr. Amelia Lestari",
    time: "5 min baca",
    desc: "Memahami hak laktasi pekerja perempuan sesuai UU Kesehatan No. 36/2009. Perusahaan wajib menyediakan fasilitas menyusui yang layak, higienis, dan aman.",
    body: `
      <p>Kewajiban menyediakan ruang laktasi atau fasilitas menyusui di tempat kerja bukanlah sekadar fasilitas pelengkap atau opsional. Ini adalah hak hukum dasar yang dijamin secara kuat oleh hukum Indonesia.</p>
      <p><strong>Landasan Hukum Kuat:</strong></p>
      <p>Berdasarkan <strong>Undang-Undang Nomor 36 Tahun 2009 tentang Kesehatan Pasal 128 ayat (2) dan (3)</strong>, setiap tempat kerja harus memberikan kesempatan kepada ibu untuk memberikan air susu ibu (ASI) eksklusif selama waktu kerja, dan wajib menyediakan fasilitas khusus untuk menyusui atau memerah ASI.</p>
      <p><strong>Standard Ruang Laktasi yang Layak:</strong></p>
      <ul>
        <li>**Privasi Penuh:** Ruangan tertutup dengan kunci yang aman, bebas dari pandangan orang lain (bukan toilet atau gudang).</li>
        <li>**Fasilitas Higienis:** Dilengkapi dengan wastafel untuk cuci tangan, kursi yang nyaman dengan sandaran, meja, serta stopkontak untuk pompa ASI elektrik.</li>
        <li>**Pendingin Ruang & Kulkas:** Pendingin ruangan (AC) yang sejuk serta lemari es (kulkas) khusus untuk menyimpan botol ASI perah secara steril sebelum dibawa pulang.</li>
      </ul>
      <p><strong>Manfaat bagi Perusahaan:</strong> Penyediaan fasilitas laktasi yang memadai terbukti menurunkan angka absensi karyawan perempuan karena anak sakit (berkat ASI eksklusif), meningkatkan produktivitas, serta menjaga tingkat loyalitas/retensi pekerja berkinerja tinggi pasca melahirkan.</p>
    `
  },
  {
    id: "art-8",
    title: "Hak Kendaraan Jemputan bagi Karyawati Shift Malam: Siapa yang Wajib Menyediakan?",
    category: "Tips Hukum",
    date: "18 April 2026",
    author: "Rendra Prawira, SH",
    time: "5 min baca",
    desc: "Perusahaan yang mempekerjakan perempuan antara pukul 23.00 hingga 05.00 wajib menyediakan angkutan jemput antar dan makanan bergizi. Simak rincian hukumnya.",
    body: `
      <p>Bekerja pada shift malam menghadapkan pekerja perempuan pada risiko keamanan dan kesehatan yang lebih tinggi. Oleh karena itu, hukum ketenagakerjaan Indonesia mengatur perlindungan khusus yang ketat terkait hal ini.</p>
      <p><strong>Ketentuan Pasal 76 UU No. 13 Tahun 2003:</strong></p>
      <p>Pengusaha dilarang mempekerjakan pekerja perempuan hamil yang menurut keterangan dokter berbahaya bagi kesehatan dan keselamatan kandungannya jika bekerja antara pukul 23.00 s.d. 05.00.</p>
      <p>Bagi pekerja perempuan yang diperbolehkan bekerja pada jam tersebut, pengusaha **wajib**:</p>
      <ul>
        <li>**Menyediakan Makanan Bergizi:** Menyediakan makanan dan minuman bergizi yang memenuhi kebutuhan kalori pekerja selama bekerja malam.</li>
        <li>**Menjaga Keamanan:** Menjaga kesusilaan dan keamanan selama di tempat kerja melalui penyediaan petugas keamanan dan penerangan yang cukup.</li>
        <li>**Penyediaan Angkutan Jemput Antar:** Menyediakan angkutan jemput antar dari rumah ke tempat kerja dan sebaliknya. Penjemputan harus dilakukan pada titik penjemputan yang aman dan terjangkau dekat rumah pekerja.</li>
      </ul>
      <p><strong>Pelanggaran Hukum:</strong> Kelalaian penyediaan jemputan malam bagi karyawati shift malam merupakan pelanggaran administratif serius yang dapat dilaporkan ke Dinas Tenaga Kerja setempat dan dikenakan sanksi pencabutan izin usaha atau denda keuangan.</p>
    `
  },
  {
    id: "art-9",
    title: "Glass Ceiling: Hambatan Tak Kasat Mata Perempuan Menuju Kepemimpinan Puncak",
    category: "Karir",
    date: "10 April 2026",
    author: "Nadia Utami, M.Psi",
    time: "6 min baca",
    desc: "Menganalisis fenomena psikologis dan struktural 'Glass Ceiling' yang membatasi kenaikan jabatan profesional perempuan ke posisi direksi dan eksekutif.",
    body: `
      <p>Istilah <em>Glass Ceiling</em> (atap kaca) menggambarkan hambatan buatan yang tidak terlihat, didasarkan pada prasangka perilaku atau organisasi, yang mencegah perempuan berkualifikasi untuk naik ke posisi kepemimpinan tingkat atas dalam organisasi mereka.</p>
      <p><strong>Mengapa Glass Ceiling Terjadi?</strong></p>
      <ul>
        <li>**Bias Seleksi Unconscious:** Anggota direksi pria cenderung memilih penerus yang memiliki karakteristik serupa dengan mereka ('Homosocial Reproduction').</li>
        <li>**Stigma Budaya Maskulin:** Gaya kepemimpinan yang asertif dan dominan sering dinilai positif pada pria, namun dinilai agresif atau 'emosional' jika ditunjukkan oleh perempuan.</li>
        <li>**Kurangnya Mentor Eksekutif:** Hubungan mentorship di tingkat eksekutif lebih sering terjadi antar sesama pria, membuat perempuan kekurangan sponsor internal untuk promosi strategis.</li>
      </ul>
      <p><strong>Strategi Mendobrak Atap Kaca:</strong></p>
      <p>Perusahaan perlu menerapkan kuota representasi perempuan di jajaran manajerial, komite promosi independen yang objektif, serta program mentorship formal untuk talenta perempuan potensial guna memastikan jenjang karir yang setara tanpa diskriminasi terselubung.</p>
    `
  },
  {
    id: "art-10",
    title: "Mengajukan Perlindungan Pelecehan Seksual di Kantor: Panduan UU TPKS 2022",
    category: "Tips Hukum",
    date: "02 April 2026",
    author: "Farida Indriati, SH",
    time: "7 min baca",
    desc: "Langkah hukum konkrit menghadapi pelecehan seksual non-fisik maupun fisik di tempat kerja menggunakan perlindungan Undang-Undang TPKS No. 12/2022.",
    body: `
      <p>Pelecehan seksual di lingkungan kerja sering kali didiamkan karena korban takut mengalami pembalasan karir, PHK sepihak, atau stigma buruk dari rekan kerja. Kehadiran **UU No. 12 Tahun 2022 tentang Tindak Pidana Kekerasan Seksual (TPKS)** memberikan babak baru perlindungan hukum bagi korban.</p>
      <p><strong>Klasifikasi Pelecehan di Kantor Menurut UU TPKS:</strong></p>
      <ul>
        <li>**Pelecehan Seksual Non-Fisik (Pasal 5):** Pernyataan, gerak tubuh, atau tulisan yang bernuansa seksual yang merendahkan atau menghina kehormatan seksual korban. Sanksinya pidana penjara hingga 9 bulan atau denda Rp10 juta.</li>
        <li>**Pelecehan Seksual Fisik (Pasal 6):** Sentuhan fisik seksual yang merendahkan harkat dan martabat korban. Sanksi pidana penjara hingga 4 tahun atau denda Rp50 juta.</li>
        <li>**Penyalahgunaan Wewenang (Pasal 15):** Pelecehan yang dilakukan oleh atasan, majikan, atau pengawas kerja terhadap bawahan. Sanksi pidana diperberat sepertiga dari ancaman umum karena faktor relasi kuasa.</li>
      </ul>
      <p><strong>Langkah Penanganan Mandiri:</strong></p>
      <ol>
        <li>**Kumpulkan Bukti:** Screenshot pesan chat bernada pelecehan, rekaman suara/video, atau catat waktu kejadian beserta saksi mata jika ada.</li>
        <li>**Gunakan Kanal Pengaduan Internal:** Laporkan ke komite etik atau HRD perusahaan. Berdasarkan hukum, perusahaan wajib menindaklanjuti laporan pelecehan.</li>
        <li>**Laporan Hukum Resmi:** Jika HRD abai, laporkan ke polisi dengan pendampingan hukum. EqualWork menyediakan menu Pengaduan & Bantuan yang terhubung langsung dengan LBH mitra untuk mendampingi kasus Anda hingga tuntas tanpa biaya.</li>
      </ol>
    `
  }
];

// State Manager
let currentActiveRegion = null;
let currentActiveRegTab = "semua";
let currentReportStep = 1;
const totalReportSteps = 3;

// Mock databases for Admin Portal Demo
const REPORTS_DB = [
  {
    ticket: "EQ-482019-ID",
    date: "2026-06-04 14:32",
    category: "Upah & Lembur",
    company: "PT Garment Jaya Mandiri",
    chronology: "Gaji pokok buruh jahit dikurangi 15% secara sepihak selama 3 bulan terakhir dengan alasan efisiensi energi pabrik. Lembur hari Sabtu juga tidak dibayarkan sesuai tarif permen.",
    reporter: "Rini Kartika",
    contact: "0812-3456-7890",
    anon: false,
    status: "proses"
  },
  {
    ticket: "EQ-908124-ID",
    date: "2026-06-03 09:15",
    category: "Diskriminasi Gender",
    company: "PT Finansial Sejahtera",
    chronology: "Karyawati hamil di bagian akuntansi dipaksa menandatangani surat pengunduran diri sukarela dengan dalih perusahaan tidak sanggup membiayai backup karyawan selama cuti bersalin 3 bulan.",
    reporter: "Anonim",
    contact: "0855-9012-3456",
    anon: true,
    status: "advokasi"
  }
];

const REGISTERED_USERS = [
  { name: "Admin EqualWork", email: "admin@equalwork.id", role: "Administrator", password: "admin" },
  { name: "Admin", email: "admin", role: "Administrator", password: "admin" },
  { name: "Siti Rahmawati", email: "pekerja.hebat@gmail.com", role: "Pekerja", password: "password123" }
];

const LOGIN_SESSIONS = [
  {
    user: "admin@equalwork.id",
    role: "Administrator",
    time: "2026-06-05 00:01",
    ip: "192.168.1.10"
  },
  {
    user: "pekerja.hebat@gmail.com",
    role: "Pekerja",
    time: "2026-06-04 23:45",
    ip: "114.79.12.84"
  },
  {
    user: "advokat.kesetaraan@lbh.or.id",
    role: "Staf Advokasi",
    time: "2026-06-04 22:12",
    ip: "103.41.205.17"
  },
  {
    user: "rini.kartika@yahoo.com",
    role: "Pekerja",
    time: "2026-06-04 14:28",
    ip: "182.253.94.120"
  }
];

// Formatting Helper
function formatRupiah(amount) {
  return "Rp " + amount.toLocaleString("id-ID");
}

// 2. Initial Setup
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initStatsCounter();
  initRegulations();
  initWagesSection();
  initInsights();
  // initHelpDesk();
  initArticles();
  initToastSystem();
  initScrollTop();
  initRightsAssessment();
  initPDFExporter();
  initAllRegulationsArchive();
  initAdminPortal();
  // Fitur publikasi referensi dihapus — semua referensi dikurasi oleh penulis
  initRegister();
  initLoaderScreen();
});

// Dashboard SPA Link Switching & Mobile Toggle
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");
  
  // Make the navbar always show background style (scrolled style) since page is fixed
  if (navbar) {
    navbar.classList.add("scrolled");
  }

  // Mobile Menu Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = mobileToggle.querySelector("i");
      if (navMenu.classList.contains("active")) {
        icon.className = "fas fa-times";
      } else {
        icon.className = "fas fa-bars";
      }
    });
  }

  // Global Click Listener to catch any link targeting panels (#beranda, etc.)
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
      const href = link.getAttribute("href");
      if (href === "#") return;
      
      const targetPanelId = "panel-" + href.substring(1);
      const panel = document.getElementById(targetPanelId);
      
      if (panel) {
        e.preventDefault();
        
        // Deactivate all panels & links
        document.querySelectorAll(".dashboard-panel").forEach(p => p.classList.remove("active"));
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        
        // Activate target panel & highlight active menu
        panel.classList.add("active");
        
        const matchingNavLink = document.querySelector(`.nav-link[href="${href}"]`);
        if (matchingNavLink) {
          matchingNavLink.classList.add("active");
        }
        
        // Scroll panel to top
        panel.scrollTop = 0;
        
        // Close mobile toggle menu if open
        if (navMenu && navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
          if (mobileToggle) mobileToggle.querySelector("i").className = "fas fa-bars";
        }
      }
    }
  });
}

// Stats Counter
function initStatsCounter() {
  const statsSection = document.querySelector(".stats-bar");
  if (!statsSection) return;

  const countUp = (el) => {
    const target = parseInt(el.getAttribute("data-target"));
    const suffix = el.getAttribute("data-suffix") || "";
    let count = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const updateCount = () => {
      count += increment;
      if (count < target) {
        el.innerText = Math.ceil(count) + suffix;
        requestAnimationFrame(updateCount);
      } else {
        el.innerText = target + suffix;
      }
    };
    updateCount();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const nums = entry.target.querySelectorAll(".stats-num");
        nums.forEach(num => countUp(num));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(statsSection);
}

// 3. Peraturan & Hukum
function initRegulations() {
  const tabs = document.querySelectorAll("#peraturan .tab-btn");
  const grid = document.querySelector("#regulationsGrid");
  const searchInput = document.querySelector("#regSearch");
  const emptyState = document.querySelector("#regEmptyState");

  if (!grid || !tabs || !searchInput) return;

  const renderRegulations = (filter = "semua", searchQuery = "") => {
    grid.innerHTML = "";
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filtered = REGULATIONS_DB.filter(item => {
      const matchCategory = filter === "semua" || item.type === filter;
      const matchSearch = item.title.toLowerCase().includes(normalizedQuery) ||
                          item.desc.toLowerCase().includes(normalizedQuery);
      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      emptyState.style.display = "block";
    } else {
      emptyState.style.display = "none";
      filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "regulation-card";
        card.setAttribute("data-id", item.id);
        
        let iconColor = "purple";
        let iconClass = "fa-balance-scale";
        if (item.type === "kesetaraan-gender") {
          iconColor = "pink";
          iconClass = "fa-venus-mars";
        } else if (item.type === "upah") {
          iconColor = "blue";
          iconClass = "fa-wallet";
        } else if (item.type === "jam-kerja") {
          iconColor = "indigo";
          iconClass = "fa-clock";
        }

        card.innerHTML = `
          <div class="reg-card-icon ${iconColor}">
            <i class="fas ${iconClass}"></i>
          </div>
          <div class="reg-card-content">
            <span class="reg-card-tag badge badge-primary">${item.tag}</span>
            <h3 class="reg-card-title">${item.title}</h3>
            <p class="reg-card-desc">${item.desc}</p>
          </div>
          <div class="reg-card-arrow">
            <i class="fas fa-arrow-right"></i>
          </div>
        `;

        card.addEventListener("click", () => openRegulationModal(item.id));
        grid.appendChild(card);
      });
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentActiveRegTab = tab.getAttribute("data-tab");
      renderRegulations(currentActiveRegTab, searchInput.value);
    });
  });

  searchInput.addEventListener("input", (e) => {
    renderRegulations(currentActiveRegTab, e.target.value);
  });

  renderRegulations();
}

function openRegulationModal(id) {
  const item = REGULATIONS_DB.find(r => r.id === id);
  if (!item) return;

  const modalBody = document.querySelector("#regModalBody");
  const modalTitle = document.querySelector("#regModalTitle");
  if (!modalBody || !modalTitle) return;

  modalTitle.innerText = "Detail Peraturan";
  modalBody.innerHTML = `
    <span class="reg-modal-tag">${item.tag}</span>
    <p class="reg-modal-number"><strong>No. Regulasi:</strong> ${item.number}</p>
    <h3 style="font-size:1.35rem; margin-bottom:1rem; color:var(--text-dark); font-family:var(--font-title);">${item.title}</h3>
    <div class="reg-modal-text-content">
      ${formatRegulationContent(item.content)}
    </div>
  `;

  openModal("regulationModal");
}

// 4. Upah Minimum Indonesia (Wage Hub - UMP, UMK, ASEAN, Simulator)
function initWagesSection() {
  const mapPaths = document.querySelectorAll(".map-region");
  const tableBody = document.querySelector("#wageTableBody");
  const searchInput = document.querySelector("#wageSearch");
  const umkSearchInput = document.querySelector("#umkSearch");
  const resetBtn = document.querySelector("#resetMapFilter");
  const tooltip = document.getElementById("mapTooltip");

  // Tab Hub Elements
  const tabButtons = document.querySelectorAll(".wage-hub-tab-btn");
  const contentBlocks = document.querySelectorAll(".wage-hub-content");

  if (!tableBody || !searchInput) return;

  // Pagination Builder Helper
  const setupPagination = (containerId, totalItems, itemsPerPage, currentPage, onPageChange) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = "";
    
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (totalPages <= 1) {
      container.style.display = "none";
      return;
    }
    container.style.display = "flex";
    
    const info = document.createElement("div");
    info.className = "pagination-info";
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    info.innerText = `Menampilkan ${startItem}-${endItem} dari ${totalItems}`;
    container.appendChild(info);
    
    const controls = document.createElement("div");
    controls.className = "pagination-controls";
    
    const prevBtn = document.createElement("button");
    prevBtn.className = "pagination-btn";
    prevBtn.innerHTML = `<i class="fas fa-chevron-left"></i>`;
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener("click", () => onPageChange(currentPage - 1));
    controls.appendChild(prevBtn);
    
    const maxVisiblePages = 3;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.className = `pagination-btn ${currentPage === i ? 'active' : ''}`;
      pageBtn.innerText = i;
      pageBtn.addEventListener("click", () => onPageChange(i));
      controls.appendChild(pageBtn);
    }
    
    const nextBtn = document.createElement("button");
    nextBtn.className = "pagination-btn";
    nextBtn.innerHTML = `<i class="fas fa-chevron-right"></i>`;
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener("click", () => onPageChange(currentPage + 1));
    controls.appendChild(nextBtn);
    
    container.appendChild(controls);
  };

  // Render UMP Table List
  const renderUMPTable = (regionFilter = null, searchQuery = "", page = 1) => {
    tableBody.innerHTML = "";
    const normalizedQuery = searchQuery.trim().toLowerCase();

    let data = UMP_2024_DB.filter(item => {
      const matchRegion = !regionFilter || item.region === regionFilter;
      const matchSearch = item.prov.toLowerCase().includes(normalizedQuery);
      return matchRegion && matchSearch;
    }).sort((a, b) => b.wage - a.wage);

    if (data.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="4" class="text-center" style="padding:2rem;">Provinsi tidak ditemukan</td></tr>`;
      const pagContainer = document.getElementById("umpPagination");
      if (pagContainer) pagContainer.style.display = "none";
      return;
    }

    // Paginate UMP data
    const totalItems = data.length;
    const itemsPerPage = 5;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let currentPage = Math.max(1, Math.min(page, totalPages));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

    paginatedData.forEach(item => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td style="font-weight: 600; color:var(--text-dark);">${item.prov}</td>
        <td>${formatRupiah(item.wage)}</td>
        <td class="growth-col up">${item.percent}%</td>
        <td><span class="badge badge-primary">${item.region.toUpperCase()}</span></td>
      `;
      tableBody.appendChild(tr);
    });

    // Render UMP Pagination
    setupPagination("umpPagination", totalItems, itemsPerPage, currentPage, (newPage) => {
      renderUMPTable(regionFilter, searchQuery, newPage);
    });

    if (regionFilter) {
      resetBtn.style.display = "inline-flex";
      resetBtn.innerHTML = `<i class="fas fa-times"></i> Wilayah: ${regionFilter.toUpperCase()}`;
    } else {
      resetBtn.style.display = "none";
    }
  };

  // Render UMK Table List (Cities)
  const renderUMKTable = (selectedProvince = null, searchQuery = "", page = 1) => {
    const umkTableBody = document.querySelector("#umkTableBody");
    if (!umkTableBody) return;

    umkTableBody.innerHTML = "";
    const query = searchQuery.trim().toLowerCase();

    let provincesToRender = selectedProvince ? [selectedProvince] : Object.keys(UMK_2024_DB);
    let matchedRows = [];

    provincesToRender.forEach(provName => {
      const cities = UMK_2024_DB[provName];
      if (cities) {
        cities.forEach(c => {
          if (c.city.toLowerCase().includes(query) || provName.toLowerCase().includes(query)) {
            matchedRows.push({ prov: provName, city: c.city, wage: c.wage });
          }
        });
      }
    });

    // Sort by wage descending
    matchedRows.sort((a, b) => b.wage - a.wage);

    if (matchedRows.length === 0) {
      umkTableBody.innerHTML = `<tr><td colspan="3" class="text-center" style="padding:2rem;">Data UMK kota tidak ditemukan</td></tr>`;
      const pagContainer = document.getElementById("umkPagination");
      if (pagContainer) pagContainer.style.display = "none";
      return;
    }

    // Paginate UMK data
    const totalItems = matchedRows.length;
    const itemsPerPage = 5;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let currentPage = Math.max(1, Math.min(page, totalPages));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = matchedRows.slice(startIndex, startIndex + itemsPerPage);

    paginatedData.forEach(item => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td style="font-weight:600; color:var(--text-dark);">${item.city}</td>
        <td>${item.prov}</td>
        <td style="font-weight:700; color:var(--primary-dark);">${formatRupiah(item.wage)}</td>
      `;
      umkTableBody.appendChild(tr);
    });

    // Render UMK Pagination
    setupPagination("umkPagination", totalItems, itemsPerPage, currentPage, (newPage) => {
      renderUMKTable(selectedProvince, searchQuery, newPage);
    });

    // Bind local UMK search keyup
    if (umkSearchInput && !umkSearchInput.dataset.bound) {
      umkSearchInput.addEventListener("input", (e) => {
        renderUMKTable(selectedProvince, e.target.value, 1);
      });
      umkSearchInput.dataset.bound = "true";
    }
  };

  // Render ASEAN Comparative Charts
  const renderASEANChart = () => {
    const chartWrapper = document.querySelector("#aseanCompChart");
    if (!chartWrapper) return;

    chartWrapper.innerHTML = "";
    ASEAN_WAGES_DB.forEach(item => {
      const barRow = document.createElement("div");
      barRow.className = "asean-bar-row";
      barRow.innerHTML = `
        <span class="asean-bar-name">${item.country}</span>
        <div class="asean-bar-container">
          <div class="asean-bar-fill ${item.highlight ? 'highlight' : ''}" style="width: 0%;" data-width="${item.barWidth}%"></div>
        </div>
        <span class="asean-bar-val">${item.valStr}</span>
      `;
      chartWrapper.appendChild(barRow);
    });

    // Trigger loading width animation
    setTimeout(() => {
      const bars = chartWrapper.querySelectorAll(".asean-bar-fill");
      bars.forEach(b => {
        b.style.width = b.getAttribute("data-width");
      });
    }, 100);
  };

  // Interactive Map Event Listeners
  mapPaths.forEach(path => {
    const regionId = path.getAttribute("id");
    const regionName = path.getAttribute("data-name");

    path.addEventListener("mouseenter", (e) => {
      // Calculate region average wage
      const regionData = UMP_2024_DB.filter(item => item.region === regionId);
      const avgWage = regionData.reduce((acc, curr) => acc + curr.wage, 0) / regionData.length;
      
      tooltip.innerHTML = `
        <strong>${regionName}</strong><br/>
        Rerata UMP: ${formatRupiah(Math.round(avgWage))}
      `;
      tooltip.style.opacity = 1;
    });

    path.addEventListener("mousemove", (e) => {
      const mapWrapper = document.querySelector(".map-wrapper");
      const wrapperRect = mapWrapper.getBoundingClientRect();
      const x = e.clientX - wrapperRect.left - (tooltip.offsetWidth / 2);
      const y = e.clientY - wrapperRect.top - tooltip.offsetHeight - 15;
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
    });

    path.addEventListener("mouseleave", () => {
      tooltip.style.opacity = 0;
    });

    path.addEventListener("click", () => {
      mapPaths.forEach(p => p.classList.remove("active"));
      
      if (currentActiveRegion === regionId) {
        currentActiveRegion = null;
      } else {
        currentActiveRegion = regionId;
        path.classList.add("active");
      }
      
      // Update tables depending on map selection
      renderUMPTable(currentActiveRegion, searchInput.value, 1);

      // If UMK tab is visible, filter UMK by province click if province is in UMK list
      const activeTabBtn = document.querySelector(".wage-hub-tab-btn.active");
      const activeTabId = activeTabBtn.getAttribute("data-tab");
      
      if (activeTabId === "hub-umk" && currentActiveRegion) {
        // Map region click to a representative province in that region for demonstration
        let demoProv = "Jawa Barat";
        if (currentActiveRegion === "sumatra") demoProv = "DKI Jakarta"; // default demo
        else if (currentActiveRegion === "java") demoProv = "Jawa Barat";
        renderUMKTable(demoProv, umkSearchInput ? umkSearchInput.value : "", 1);
      } else {
        renderUMKTable(null, umkSearchInput ? umkSearchInput.value : "", 1);
      }
    });
  });

  // Map warning markers hover and click bindings
  const markers = document.querySelectorAll(".map-marker");
  markers.forEach(marker => {
    const tipText = marker.getAttribute("data-tip");
    const regionId = marker.getAttribute("data-region");

    marker.addEventListener("mouseenter", (e) => {
      tooltip.innerHTML = `
        <div style="max-width:200px; line-height:1.4;">
          <strong style="color:#EF4444;"><i class="fas fa-exclamation-triangle"></i> Fokus Ketimpangan:</strong><br/>
          ${tipText}
        </div>
      `;
      tooltip.style.opacity = 1;
    });

    marker.addEventListener("mousemove", (e) => {
      const mapWrapper = document.querySelector(".map-wrapper");
      const wrapperRect = mapWrapper.getBoundingClientRect();
      const x = e.clientX - wrapperRect.left - (tooltip.offsetWidth / 2);
      const y = e.clientY - wrapperRect.top - tooltip.offsetHeight - 15;
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
    });

    marker.addEventListener("mouseleave", () => {
      tooltip.style.opacity = 0;
    });
    
    marker.addEventListener("click", (e) => {
      e.stopPropagation();
      const path = document.getElementById(regionId);
      if (path) {
        path.dispatchEvent(new Event("click"));
      }
    });
  });

  // Table UMP Search Input
  searchInput.addEventListener("input", (e) => {
    renderUMPTable(currentActiveRegion, e.target.value, 1);
  });

  // Reset Map Filter button
  resetBtn.addEventListener("click", () => {
    currentActiveRegion = null;
    mapPaths.forEach(p => p.classList.remove("active"));
    renderUMPTable(null, searchInput.value, 1);
    renderUMKTable(null, umkSearchInput ? umkSearchInput.value : "", 1);
  });

  // Tab Switcher Actions
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      contentBlocks.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      const targetId = btn.getAttribute("data-tab");
      document.getElementById(targetId).classList.add("active");

      // Load specific tab components
      if (targetId === "hub-umk") {
        renderUMKTable(null, umkSearchInput ? umkSearchInput.value : "", 1);
      } else if (targetId === "hub-asean") {
        renderASEANChart();
      } else if (targetId === "hub-simulator") {
        initSalarySimulator();
      }
    });
  });

  // UMP Wage Graph Launcher
  const chartBtn = document.querySelector("#showWageChartBtn");
  if (chartBtn) {
    chartBtn.addEventListener("click", () => renderWageChartModal());
  }

  // Initial renders
  renderUMPTable(null, "", 1);
}

// Factory Salary Simulator Calculation Core
function initSalarySimulator() {
  const selectProv = document.getElementById("simProvinsi");
  const simBtn = document.getElementById("runSimulatorBtn");
  const resultCard = document.getElementById("simResultCard");

  if (!selectProv || !simBtn) return;

  // Load provinces options dynamically in selection drop down
  if (selectProv.options.length <= 1) {
    // Sort provinces names
    const sortedProvs = [...UMP_2024_DB].sort((a, b) => a.prov.localeCompare(b.prov));
    sortedProvs.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.prov;
      opt.innerText = p.prov;
      selectProv.appendChild(opt);
    });
  }

  // Simulator Calculator Action
  if (!simBtn.dataset.bound) {
    simBtn.addEventListener("click", () => {
      const selectedProv = selectProv.value;
      const userSalaryInput = document.getElementById("simGajiUser").value;
      const userSalary = parseFloat(userSalaryInput);

      if (!selectedProv || isNaN(userSalary) || userSalary <= 0) {
        showToast("Harap pilih provinsi dan isi jumlah gaji bulanan Anda dengan benar!", "warning");
        return;
      }

      // Fetch minimum wage reference (UMP)
      const provData = UMP_2024_DB.find(p => p.prov === selectedProv);
      const minWageRef = provData ? provData.wage : 2500000; // fallback

      // Calculate ratios
      const salaryDiff = userSalary - minWageRef;
      const compliancePercent = Math.round((userSalary / minWageRef) * 100);

      // Render Results Card
      document.getElementById("simResMinWage").innerText = formatRupiah(minWageRef);
      document.getElementById("simResUserSalary").innerText = formatRupiah(userSalary);
      
      const resDiffEl = document.getElementById("simResDiff");
      const statusPill = document.getElementById("simStatusPill");
      const recText = document.getElementById("simResRecommendation");

      if (salaryDiff >= 0) {
        resDiffEl.innerHTML = `<span style="color:var(--success);"><i class="fas fa-plus-circle"></i> +${formatRupiah(salaryDiff)} (Di atas UMP)</span>`;
        statusPill.className = "sim-status-pill above";
        statusPill.innerHTML = `<i class="fas fa-check-circle"></i> Memenuhi Syarat Upah Minimum (${compliancePercent}%)`;
        recText.innerText = "Gaji Anda memenuhi standar UMP provinsi. Tetap kawankan Struktur dan Skala Upah (SUSU) di perusahaan Anda untuk memastikan penyesuaian gaji berkala bagi masa kerja di atas 1 tahun.";
      } else {
        resDiffEl.innerHTML = `<span style="color:var(--danger);"><i class="fas fa-minus-circle"></i> -${formatRupiah(Math.abs(salaryDiff))} (Kurang dari UMP)</span>`;
        statusPill.className = "sim-status-pill under";
        statusPill.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Di Bawah Minimum Standar (${compliancePercent}%)`;
        recText.innerText = "Peringatan! Gaji Anda di bawah ambang batas UMP provinsi. Tindakan membayar upah di bawah standar UMP/UMK merupakan pelanggaran pidana kejahatan ketenagakerjaan. Anda berhak mengajukan aduan aman melalui portal aduan EqualWork.";
      }

      resultCard.style.display = "block";
    });
    simBtn.dataset.bound = "true";
  }
}

// Programmatic dynamic SVG chart inside modal
function renderWageChartModal() {
  const chartBody = document.querySelector("#chartModalBody");
  if (!chartBody) return;

  const sorted = [...UMP_2024_DB].sort((a, b) => b.wage - a.wage);
  const highest = sorted.slice(0, 5);
  const lowest = sorted.slice(-5).reverse();
  const chartData = [...highest, ...lowest];

  const maxWage = 5200000;
  
  let chartRows = "";
  chartData.forEach(item => {
    const percentage = (item.wage / maxWage) * 100;
    const isTop = highest.includes(item);
    const barColor = isTop ? "var(--primary)" : "var(--accent)";

    chartRows += `
      <div style="margin-bottom:1rem; display:grid; grid-template-columns:120px 1fr 100px; align-items:center; gap:1rem;">
        <span style="font-size:0.875rem; font-weight:600; text-overflow:ellipsis; overflow:hidden; white-space:nowrap; color:var(--text-dark);">${item.prov}</span>
        <div style="height:1.25rem; background-color:var(--bg-main); border-radius:9999px; overflow:hidden; width:100%;">
          <div style="width:0%; height:100%; background:${barColor}; border-radius:9999px; transition: width 1s ease-out;" class="chart-bar" data-width="${percentage}%"></div>
        </div>
        <span style="font-size:0.8125rem; font-weight:700; color:var(--text-medium); font-family:var(--font-title); text-align:right;">${formatRupiah(item.wage)}</span>
      </div>
    `;
  });

  chartBody.innerHTML = `
    <h3 style="font-size:1.25rem; margin-bottom:0.5rem; font-family:var(--font-title); color:var(--text-dark);">
      Grafik Perbandingan UMP Indonesia 2024
    </h3>
    <p style="font-size:0.875rem; color:var(--text-light); margin-bottom:2rem;">
      Menampilkan 5 provinsi dengan UMP tertinggi (<span style="color:var(--primary); font-weight:700;">Ungu</span>) dan 5 terendah (<span style="color:var(--accent); font-weight:700;">Biru Pastel</span>)
    </p>
    <div style="padding:1rem 0;">
      ${chartRows}
    </div>
  `;

  openModal("chartModal");

  setTimeout(() => {
    const bars = chartBody.querySelectorAll(".chart-bar");
    bars.forEach(bar => {
      bar.style.width = bar.getAttribute("data-width");
    });
  }, 100);
}

// 5. Gender Equality Insights Section
function initInsights() {
  const detailButtons = document.querySelectorAll(".insight-card .btn-link");
  detailButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const title = btn.closest(".insight-card").querySelector("h3").innerText;
      const stat = btn.closest(".insight-card").querySelector(".insight-stat-box").innerText;
      const desc = btn.closest(".insight-card").querySelector("p").innerText;
      
      let iconHtml = "";
      let themeColor = "var(--primary)";
      let pastelBg = "var(--primary-pastel)";
      let textColor = "var(--primary-dark)";
      let bulletIcon = "fa-check-circle";
      
      if (title.includes("Pay Gap")) {
        iconHtml = `<div class="modal-stat-icon purple"><i class="fas fa-wallet"></i></div>`;
        themeColor = "var(--primary)";
        pastelBg = "var(--primary-pastel)";
        textColor = "var(--primary-dark)";
        bulletIcon = "fa-minus-circle";
      } else if (title.includes("Leadership")) {
        iconHtml = `<div class="modal-stat-icon pink"><i class="fas fa-crown"></i></div>`;
        themeColor = "#F43F5E";
        pastelBg = "#FFF1F2";
        textColor = "#E11D48";
        bulletIcon = "fa-arrow-trend-up";
      } else if (title.includes("Rekrutmen")) {
        iconHtml = `<div class="modal-stat-icon green"><i class="fas fa-user-tie"></i></div>`;
        themeColor = "var(--success)";
        pastelBg = "#E6F4EA";
        textColor = "#137333";
        bulletIcon = "fa-shield-halved";
      } else {
        iconHtml = `<div class="modal-stat-icon orange"><i class="fas fa-shield-alt"></i></div>`;
        themeColor = "var(--warning)";
        pastelBg = "#FEF3C7";
        textColor = "#b45309";
        bulletIcon = "fa-life-ring";
      }

      let extraInfo = "";
      if (title.includes("Pay Gap")) {
        extraInfo = `
          <div class="modal-desc-box">
            <p>Kesenjangan upah gender di Indonesia saat ini menduduki rata-rata 23%, yang berarti setiap Rp10.000 yang diperoleh pria, pekerja wanita hanya memperoleh Rp7.700 pada bidang kompetensi yang sama.</p>
          </div>
          <div class="modal-callout-card" style="border-left: 4px solid ${themeColor}; background-color: ${pastelBg};">
            <h4 style="color: ${textColor};"><i class="fas fa-exclamation-circle"></i> Faktor Penyebab Utama</h4>
            <ul class="modal-bullet-list">
              <li><i class="fas fa-home" style="color: ${themeColor}"></i> <span><strong>Beban Ganda (Double Burden):</strong> Tugas domestik dan keluarga masih menumpuk secara tidak proporsional pada pekerja wanita.</span></li>
              <li><i class="fas fa-comments-dollar" style="color: ${themeColor}"></i> <span><strong>Bias Wawancara Awal:</strong> Negosiasi gaji di awal karir cenderung kurang asertif dibanding pelamar pria karena tekanan sosial.</span></li>
              <li><i class="fas fa-sitemap" style="color: ${themeColor}"></i> <span><strong>Transparansi Upah:</strong> Kurangnya standardisasi struktur dan skala upah yang terbuka di tingkat manajemen internal.</span></li>
            </ul>
          </div>
        `;
      } else if (title.includes("Leadership")) {
        extraInfo = `
          <div class="modal-desc-box">
            <p>Meskipun jumlah pekerja wanita di level staf cukup merata, persentase perempuan yang memegang peranan kepemimpinan puncak seperti Manajer, Direktur, atau Komisaris hanya berkisar 27% secara nasional.</p>
          </div>
          <div class="modal-callout-card" style="border-left: 4px solid ${themeColor}; background-color: ${pastelBg};">
            <h4 style="color: ${textColor};"><i class="fas fa-lightbulb"></i> Langkah Aksi Rekomendasi</h4>
            <ul class="modal-bullet-list">
              <li><i class="fas fa-users-gear" style="color: ${themeColor}"></i> <span><strong>Sponsorship Program:</strong> Menyediakan mentorship berstruktur khusus bagi karyawati berpotensi tinggi ke jenjang eksekutif.</span></li>
              <li><i class="fas fa-business-time" style="color: ${themeColor}"></i> <span><strong>Fleksibilitas Kerja:</strong> Menerapkan opsi jam kerja fleksibel (FWA) untuk mengakomodasi keseimbangan karir dan domestik.</span></li>
              <li><i class="fas fa-chart-pie" style="color: ${themeColor}"></i> <span><strong>Kuota Representasi:</strong> Menetapkan target sukarela minimal 30% keterwakilan perempuan di level dewan direksi.</span></li>
            </ul>
          </div>
        `;
      } else if (title.includes("Rekrutmen")) {
        extraInfo = `
          <div class="modal-desc-box">
            <p>Bias gender dalam proses penapisan CV dan wawancara masih terjadi secara masif. Data menunjukkan 37% pelamar perempuan pernah ditanyai tentang status pernikahan, kehamilan, atau rencana memiliki anak selama wawancara rekrutmen.</p>
          </div>
          <div class="modal-callout-card" style="border-left: 4px solid ${themeColor}; background-color: ${pastelBg};">
            <h4 style="color: ${textColor};"><i class="fas fa-check-double"></i> Rekomendasi Praktik Baik</h4>
            <ul class="modal-bullet-list">
              <li><i class="fas fa-mask" style="color: ${themeColor}"></i> <span><strong>Blind Recruitment:</strong> Menghapus foto, nama lengkap, jenis kelamin, dan umur pada tahap awal kurasi CV.</span></li>
              <li><i class="fas fa-clipboard-question" style="color: ${themeColor}"></i> <span><strong>Standardisasi Wawancara:</strong> Menggunakan daftar pertanyaan wawancara baku yang sama bagi seluruh pelamar terlepas dari gender.</span></li>
              <li><i class="fas fa-user-group" style="color: ${themeColor}"></i> <span><strong>Panel Wawancara Beragam:</strong> Memastikan panel pewawancara terdiri dari kombinasi pria dan wanita untuk meminimalkan bias subjektif.</span></li>
            </ul>
          </div>
        `;
      } else {
        extraInfo = `
          <div class="modal-desc-box">
            <p>Berdasarkan data survei, sekitar 60% pekerja perempuan pernah berhadapan dengan salah satu bentuk kekerasan seksual atau verbal di wilayah kerja. Mayoritas korban enggan melapor karena takut ancaman pemecatan.</p>
          </div>
          <div class="modal-callout-card" style="border-left: 4px solid ${themeColor}; background-color: ${pastelBg};">
            <h4 style="color: ${textColor};"><i class="fas fa-shield-halved"></i> Protokol & Layanan Perlindungan</h4>
            <ul class="modal-bullet-list">
              <li><i class="fas fa-file-shield" style="color: ${themeColor}"></i> <span><strong>SOP Zero-Tolerance:</strong> Menyusun tata cara formal penanganan pengaduan pelecehan yang jelas dan tegas di lingkungan perusahaan.</span></li>
              <li><i class="fas fa-handshake-angle" style="color: ${themeColor}"></i> <span><strong>Kemitraan LBH:</strong> Menyediakan fasilitas pendampingan hukum dan psikologis gratis bekerja sama dengan lembaga independen.</span></li>
              <li><i class="fas fa-user-lock" style="color: ${themeColor}"></i> <span><strong>Anonimitas Pengaduan:</strong> Membuka kanal whistleblowing terproteksi yang menjamin perlindungan karir pelapor dari retaliasi.</span></li>
            </ul>
          </div>
        `;
      }

      const body = document.querySelector("#regModalBody");
      const modalTitle = document.querySelector("#regModalTitle");
      if (!body || !modalTitle) return;

      modalTitle.innerText = "Insight Deskripsi";
      body.innerHTML = `
        <div class="modal-insight-header">
          <div class="modal-insight-hero">
            ${iconHtml}
            <div>
              <span class="modal-insight-eyebrow">STATISTIK KUNCI</span>
              <h3 class="modal-insight-title">${title}</h3>
            </div>
          </div>
          <div class="modal-stat-value" style="color: ${textColor}; border-color: ${themeColor}; background-color: ${pastelBg};">
            ${stat}
          </div>
        </div>
        
        <div class="modal-insight-intro">
          <div class="quote-bar" style="background-color: ${themeColor};"></div>
          <p class="modal-insight-desc">${desc}</p>
        </div>
        
        ${extraInfo}
      `;

      openModal("regulationModal");
    });
  });
}

// 6. Women's Workplace Rights Checkbox Assessment
function initRightsAssessment() {
  const cards = document.querySelectorAll(".right-interactive-card");
  const auditVal = document.getElementById("auditCircleVal");
  const auditStatus = document.getElementById("auditStatusTitle");
  const auditDesc = document.getElementById("auditStatusDesc");
  const auditCircleWrapper = document.querySelector(".audit-circle-wrapper");

  if (!cards || !auditVal) return;

  const calculateScore = () => {
    let checkedCount = 0;
    cards.forEach(card => {
      if (card.classList.contains("checked")) checkedCount++;
    });

    const total = cards.length;
    const score = Math.round((checkedCount / total) * 100);

    // Update Circle UI
    auditVal.innerText = `${score}%`;

    // Dynamic coloring and messaging based on compliance score
    auditCircleWrapper.style.borderColor = "var(--border-focus)";
    if (score === 100) {
      auditCircleWrapper.style.borderColor = "var(--success)";
      auditStatus.innerText = "Kepatuhan Sempurna";
      auditStatus.style.color = "var(--success)";
      auditDesc.innerText = "Luar biasa! Tempat kerja Anda mematuhi seluruh hak fundamental pekerja perempuan secara hukum.";
    } else if (score >= 60) {
      auditCircleWrapper.style.borderColor = "var(--warning)";
      auditStatus.innerText = "Kepatuhan Sedang";
      auditStatus.style.color = "var(--warning)";
      auditDesc.innerText = "Ada perbaikan. Beberapa hak krusial telah diterapkan, namun beberapa hak vital lainnya masih diabaikan.";
    } else {
      auditCircleWrapper.style.borderColor = "var(--danger)";
      auditStatus.innerText = "Kepatuhan Buruk";
      auditStatus.style.color = "var(--danger)";
      auditDesc.innerText = "Peringatan! Perusahaan Anda berpotensi besar melanggar undang-undang ketenagakerjaan secara sistemik.";
    }
  };

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("checked");
      calculateScore();
    });
  });

  // Calculate default state (initially 0 checked)
  calculateScore();
}

// 7. Pengaduan & Bantuan Wizard
function initHelpDesk() {
  const laporBtn = document.querySelector("#laporPelanggaranBtn");
  if (laporBtn) {
    laporBtn.addEventListener("click", () => openReportWizard());
  }

  const nextBtn = document.querySelector("#wizardNextBtn");
  const prevBtn = document.querySelector("#wizardPrevBtn");
  
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => handleWizardNext());
    prevBtn.addEventListener("click", () => handleWizardPrev());
  }

  const radioCards = document.querySelectorAll(".radio-card");
  radioCards.forEach(card => {
    card.addEventListener("click", () => {
      radioCards.forEach(c => {
        c.classList.remove("selected");
        c.querySelector("input").checked = false;
      });
      card.classList.add("selected");
      card.querySelector("input").checked = true;
    });
  });

  const instansiBtn = document.querySelector("#instansiTerkaitBtn");
  if (instansiBtn) {
    instansiBtn.addEventListener("click", () => openInstansiModal());
  }
}

function openReportWizard() {
  currentReportStep = 1;
  updateWizardUI();
  
  document.querySelector("#wizardForm").reset();
  const radioCards = document.querySelectorAll(".radio-card");
  radioCards.forEach(c => {
    c.classList.remove("selected");
    c.querySelector("input").checked = false;
  });

  const bodyContent = document.querySelector("#wizardFormBody");
  const successState = document.querySelector("#wizardSuccessState");
  bodyContent.style.display = "block";
  successState.style.display = "none";
  
  const modalFooter = document.querySelector("#wizardModalFooter");
  modalFooter.style.display = "flex";

  openModal("reportWizardModal");
}

function updateWizardUI() {
  const steps = document.querySelectorAll(".wizard-body-step");
  steps.forEach((s, idx) => {
    if (idx + 1 === currentReportStep) {
      s.classList.add("active");
    } else {
      s.classList.remove("active");
    }
  });

  const indicators = document.querySelectorAll(".wizard-step");
  indicators.forEach((ind, idx) => {
    ind.classList.remove("active", "completed");
    if (idx + 1 < currentReportStep) {
      ind.classList.add("completed");
    } else if (idx + 1 === currentReportStep) {
      ind.classList.add("active");
    }
  });

  const progressLine = document.querySelector(".wizard-step-progress-line");
  const progressWidth = ((currentReportStep - 1) / (totalReportSteps - 1)) * 90;
  progressLine.style.width = `${progressWidth}%`;

  const prevBtn = document.querySelector("#wizardPrevBtn");
  const nextBtn = document.querySelector("#wizardNextBtn");
  
  if (currentReportStep === 1) {
    prevBtn.style.visibility = "hidden";
  } else {
    prevBtn.style.visibility = "visible";
  }

  if (currentReportStep === totalReportSteps) {
    nextBtn.innerHTML = `Kirim Laporan <i class="fas fa-paper-plane"></i>`;
  } else {
    nextBtn.innerHTML = `Lanjut <i class="fas fa-arrow-right"></i>`;
  }
}

function handleWizardNext() {
  if (currentReportStep === 1) {
    const selectedRadio = document.querySelector('input[name="kategori_pelanggaran"]:checked');
    if (!selectedRadio) {
      showToast("Pilih kategori laporan terlebih dahulu!", "warning");
      return;
    }
  } else if (currentReportStep === 2) {
    const descInput = document.querySelector("#pelanggaranDesc");
    if (descInput.value.trim().length < 15) {
      showToast("Harap isi deskripsi kronologi minimal 15 karakter!", "warning");
      return;
    }
  }

  if (currentReportStep < totalReportSteps) {
    currentReportStep++;
    updateWizardUI();
  } else {
    submitReportForm();
  }
}

function handleWizardPrev() {
  if (currentReportStep > 1) {
    currentReportStep--;
    updateWizardUI();
  }
}

function submitReportForm() {
  const nextBtn = document.querySelector("#wizardNextBtn");
  nextBtn.disabled = true;
  nextBtn.innerText = "Mengirim...";

  setTimeout(() => {
    nextBtn.disabled = false;
    
    const bodyContent = document.querySelector("#wizardFormBody");
    const successState = document.querySelector("#wizardSuccessState");
    const modalFooter = document.querySelector("#wizardModalFooter");

    bodyContent.style.display = "none";
    modalFooter.style.display = "none";
    successState.style.display = "block";

    const ticketCode = "EQ-" + Math.floor(100000 + Math.random() * 900000) + "-ID";
    document.querySelector("#wizardTicketCode").innerText = ticketCode;

    // Capture values to add to REPORTS_DB
    const selectedRadio = document.querySelector('input[name="kategori_pelanggaran"]:checked');
    const category = selectedRadio ? selectedRadio.value : "Umum";
    const company = document.querySelector("#pelanggaranInstansi").value.trim() || "-";
    const chronology = document.querySelector("#pelanggaranDesc").value.trim();
    const isAnon = document.querySelector("#pelaporAnonim").checked;
    const nameInput = document.querySelector("#pelaporName").value.trim();
    const reporter = isAnon ? "Anonim" : (nameInput || "Umum");
    const contact = document.querySelector("#pelaporContact").value.trim() || "-";

    const now = new Date();
    const dateStr = now.getFullYear() + "-" + 
                    String(now.getMonth() + 1).padStart(2, '0') + "-" + 
                    String(now.getDate()).padStart(2, '0') + " " + 
                    String(now.getHours()).padStart(2, '0') + ":" + 
                    String(now.getMinutes()).padStart(2, '0');

    // Push to reports list
    REPORTS_DB.unshift({
      ticket: ticketCode,
      date: dateStr,
      category: category,
      company: company,
      chronology: chronology,
      reporter: reporter,
      contact: contact,
      anon: isAnon,
      status: "pending"
    });

    // Re-render admin tables if they are initialized
    if (typeof renderAdminTables === "function") {
      renderAdminTables();
    }

    showToast("Laporan berhasil terkirim!", "success");
  }, 1000);
}

function openInstansiModal() {
  const body = document.querySelector("#regModalBody");
  const modalTitle = document.querySelector("#regModalTitle");
  if (!body || !modalTitle) return;

  modalTitle.innerText = "Daftar Instansi Terkait";
  body.innerHTML = `
    <p style="color:var(--text-light); margin-bottom:1.5rem;">Hubungi instansi resmi pemerintah atau lembaga independen berikut untuk penanganan kasus secara hukum formal:</p>
    
    <div style="display:flex; flex-direction:column; gap:1.25rem;">
      <div style="border: 1px solid var(--border-focus); padding:1.25rem; border-radius:var(--radius-lg);">
        <h4 style="color:var(--primary-dark); font-family:var(--font-title); font-size:1.05rem; margin-bottom:0.25rem;">Kementerian Ketenagakerjaan (KEMNAKER)</h4>
        <p style="font-size:0.875rem; color:var(--text-light); margin-bottom:0.75rem;">Pusat Pelaporan Ketenagakerjaan Bipartit/Tripartit dan Pengawasan K3 Nasional.</p>
        <span style="font-size:0.8125rem; font-weight:700;"><i class="fas fa-phone-alt"></i> Call Center: 1500-630</span><br/>
        <span style="font-size:0.8125rem; font-weight:700;"><i class="fas fa-globe"></i> Website: <a href="https://kemnaker.go.id" target="_blank" style="color:var(--primary); text-decoration:underline;">kemnaker.go.id</a></span>
      </div>

      <div style="border: 1px solid var(--border-focus); padding:1.25rem; border-radius:var(--radius-lg);">
        <h4 style="color:var(--primary); font-family:var(--font-title); font-size:1.05rem; margin-bottom:0.25rem;">Komnas Perempuan</h4>
        <p style="font-size:0.875rem; color:var(--text-light); margin-bottom:0.75rem;">Lembaga negara independen untuk menegakkan hak asasi perempuan dan penanganan pelecehan seksual.</p>
        <span style="font-size:0.8125rem; font-weight:700;"><i class="fas fa-phone-alt"></i> Pengaduan: 021-3903963</span><br/>
        <span style="font-size:0.8125rem; font-weight:700;"><i class="fas fa-envelope"></i> Email: petisi@komnasperempuan.go.id</span>
      </div>
    </div>
  `;

  openModal("regulationModal");
}

// 8. Artikel & Edukasi (Equality Hot Topics)
function initArticles() {
  const grid = document.querySelector("#articlesGrid");
  const filterButtons = document.querySelectorAll(".artikel-filter-tabs .artikel-tab-btn");
  if (!grid) return;

  // Category config: gradient colors + icon
  const CATEGORY_CONFIG = {
    "Kesetaraan": {
      from: "#0284C7", to: "#1E40AF",
      icon: "fas fa-venus-mars",
      accent: "rgba(2, 132, 199, 0.15)"
    },
    "Tips Hukum": {
      from: "#1E3A8A", to: "#0369A1",
      icon: "fas fa-gavel",
      accent: "rgba(30, 58, 138, 0.15)"
    },
    "Karir": {
      from: "#1D4ED8", to: "#0284C7",
      icon: "fas fa-chart-line",
      accent: "rgba(29, 78, 216, 0.15)"
    }
  };

  const renderArticles = (categoryFilter = "semua") => {
    grid.innerHTML = "";

    const filtered = ARTICLES_DB.filter(art => {
      return categoryFilter === "semua" || art.category === categoryFilter;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: span 3; text-align:center; padding:4rem 2rem; color:var(--text-light); font-weight:500;">
        <i class="fas fa-newspaper" style="font-size:2.5rem; opacity:0.25; margin-bottom:1rem; display:block;"></i>
        Belum terdapat artikel dalam kategori ini.
      </div>`;
      return;
    }

    filtered.forEach(art => {
      const card = document.createElement("article");
      card.className = "article-card" + (art.isNew ? " new-article" : "");
      if (art.isNew) {
        setTimeout(() => {
          card.classList.remove("new-article");
          delete art.isNew;
        }, 6000);
      }

      const cfg = CATEGORY_CONFIG[art.category] || CATEGORY_CONFIG["Kesetaraan"];
      const from = cfg.from;
      const to = cfg.to;

      const abstractSvg = `
        <svg width="400" height="160" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-${art.id}" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="${from}"/>
              <stop offset="100%" stop-color="${to}"/>
            </linearGradient>
          </defs>
          <rect width="400" height="160" fill="url(#grad-${art.id})"/>
          <!-- Decorative circles -->
          <circle cx="340" cy="30" r="80" fill="rgba(255,255,255,0.07)"/>
          <circle cx="50" cy="140" r="60" fill="rgba(255,255,255,0.05)"/>
          <!-- Wave shape -->
          <path d="M0 100 Q100 60 200 90 Q300 120 400 80 L400 160 L0 160 Z" fill="rgba(255,255,255,0.06)"/>
          <!-- Grid dots -->
          <g opacity="0.12">
            ${[0,1,2,3,4].map(col => [0,1,2,3].map(row =>
              `<circle cx="${col*80+40}" cy="${row*40+20}" r="1.5" fill="white"/>`
            ).join('')).join('')}
          </g>
          <!-- Icon -->
          <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" 
                font-family="'Font Awesome 6 Free'" font-weight="900" font-size="36" 
                fill="rgba(255,255,255,0.18)">&#xf228;</text>
        </svg>
      `;

      card.innerHTML = `
        <div class="article-img-wrapper">
          ${abstractSvg}
          <span class="article-category-badge">${art.category}</span>
          <span class="article-time-pill"><i class="far fa-clock"></i> ${art.time}</span>
        </div>
        <div class="article-content">
          <div class="article-meta">
            <span><i class="far fa-user"></i> ${art.author}</span>
            <span><i class="far fa-calendar-alt"></i> ${art.date}</span>
          </div>
          <h3 class="article-title"><a href="#" class="art-link" data-id="${art.id}">${art.title}</a></h3>
          <p class="article-desc">${art.desc}</p>
          <div class="article-card-footer">
            <div class="article-card-footer-left">
              <button class="article-read-btn art-link" data-id="${art.id}">
                Baca Selengkapnya <i class="fas fa-arrow-right"></i>
              </button>
              ${art.link ? `<a href="${art.link}" target="_blank" rel="noopener" class="article-source-link"><i class="fas fa-external-link-alt"></i> Buka Sumber</a>` : ''}
            </div>
            <span class="article-date-badge">${art.date}</span>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    const links = grid.querySelectorAll(".art-link");
    links.forEach(l => {
      l.addEventListener("click", (e) => {
        e.preventDefault();
        openArticleModal(l.getAttribute("data-id"));
      });
    });
  };

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filterVal = btn.getAttribute("data-article-filter");
      renderArticles(filterVal);
    });
  });

  window.refreshArticleGrid = renderArticles;
  renderArticles();
}

function openArticleModal(id) {
  const art = ARTICLES_DB.find(a => a.id === id);
  if (!art) return;

  const body = document.querySelector("#regModalBody");
  const modalTitle = document.querySelector("#regModalTitle");
  if (!body || !modalTitle) return;

  modalTitle.innerText = "Artikel Edukasi";

  let sourceLinkHtml = '';
  if (art.link) {
    sourceLinkHtml = `
      <div style="display:flex; align-items:center; gap:0.75rem; background:rgba(2,132,199,0.06); border:1px solid rgba(2,132,199,0.15); border-radius:var(--radius-lg); padding:0.85rem 1.1rem; margin-bottom:1.25rem;">
        <i class="fas fa-external-link-alt" style="color:var(--primary); font-size:0.9rem;"></i>
        <span style="font-size:0.8rem; font-weight:600; color:var(--text-light);">Sumber:</span>
        <a href="${art.link}" target="_blank" rel="noopener" style="font-size:0.8125rem; font-weight:600; color:var(--primary); text-decoration:none; word-break:break-all;">
          ${art.link}
          <i class="fas fa-arrow-right" style="font-size:0.65rem; margin-left:0.25rem;"></i>
        </a>
      </div>
    `;
  }

  body.innerHTML = `
    <span class="badge badge-primary" style="margin-bottom:1rem;">${art.category}</span>
    <h3 style="font-size:1.6rem; line-height:1.3; margin-bottom:0.75rem; font-family:var(--font-title); color:var(--text-dark);">${art.title}</h3>
    <div style="display:flex; gap:1.5rem; font-size:0.875rem; color:var(--text-light); border-bottom:1px solid var(--border); padding-bottom:1rem; margin-bottom:1.5rem;">
      <span><i class="far fa-user"></i> Penulis: <strong>${art.author}</strong></span>
      <span><i class="far fa-calendar"></i> Tanggal: <strong>${art.date}</strong></span>
      <span><i class="far fa-clock"></i> Estimasi: <strong>${art.time}</strong></span>
    </div>
    <div class="reg-modal-text-content" style="font-size:1.05rem;">
      ${sourceLinkHtml}
      ${art.body}
    </div>
  `;

  openModal("regulationModal");
}

// 9. Real PDF Download Feature
function initPDFExporter() {
  const downloadBtn = document.getElementById("downloadWagePDF");
  if (!downloadBtn) return;

  downloadBtn.addEventListener("click", () => {
    showToast("Mempersiapkan dokumen cetak laporan UMP/UMK...", "info");

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = new Date().toLocaleDateString('id-ID', options);

    // Build UMP table rows (all data, no pagination)
    let umpRows = UMP_2024_DB.map(item => {
      const pct = item.percent >= 0 ? item.percent.toFixed(2) : '0';
      return `<tr>
        <td style="padding:0.35rem 0.6rem; border-bottom:1px solid #E2E8F0; font-size:8.5pt;">${item.prov}</td>
        <td style="padding:0.35rem 0.6rem; border-bottom:1px solid #E2E8F0; font-size:8.5pt; text-align:right;">${formatRupiah(item.wage)}</td>
        <td style="padding:0.35rem 0.6rem; border-bottom:1px solid #E2E8F0; font-size:8.5pt; text-align:right;">+${pct}%</td>
      </tr>`;
    }).join('');

    // Build UMK table rows (all cities across all provinces)
    let umkRows = '';
    Object.keys(UMK_2024_DB).forEach(prov => {
      UMK_2024_DB[prov].forEach(city => {
        umkRows += `<tr>
          <td style="padding:0.35rem 0.6rem; border-bottom:1px solid #E2E8F0; font-size:8.5pt;">${city.city}</td>
          <td style="padding:0.35rem 0.6rem; border-bottom:1px solid #E2E8F0; font-size:8.5pt;">${prov}</td>
          <td style="padding:0.35rem 0.6rem; border-bottom:1px solid #E2E8F0; font-size:8.5pt; text-align:right;">${formatRupiah(city.wage)}</td>
        </tr>`;
      });
    });

    // Build ASEAN comparison rows
    let aseanRows = ASEAN_WAGES_DB.map(item =>
      `<tr>
        <td style="padding:0.35rem 0.6rem; border-bottom:1px solid #E2E8F0; font-size:8.5pt; font-weight:${item.highlight ? '700' : '400'};">${item.country}</td>
        <td style="padding:0.35rem 0.6rem; border-bottom:1px solid #E2E8F0; font-size:8.5pt; text-align:right;">${item.valStr}</td>
      </tr>`
    ).join('');

    // Open a new window with the complete print document
    const printWin = window.open('', '_blank');
    printWin.document.write(`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Laporan Upah Minimum Indonesia</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Outfit', sans-serif; padding: 2.5rem; color: #1E293B; }
    h1 { text-align: center; font-size: 18pt; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 0.25rem; }
    .subtitle { text-align: center; font-size: 10pt; color: #64748B; margin-bottom: 0.25rem; }
    .date { text-align: center; font-size: 9pt; color: #94A3B8; margin-bottom: 2rem; border-bottom: 3px double #1E3A8A; padding-bottom: 0.75rem; }
    h2 { font-size: 13pt; font-weight: 700; color: #1E3A8A; margin-top: 2rem; margin-bottom: 0.75rem; border-left: 4px solid #2563EB; padding-left: 0.6rem; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 1rem; }
    thead th { background: #1E3A8A; color: #fff; padding: 0.45rem 0.6rem; font-size: 8pt; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; text-align: left; }
    thead th:last-child { text-align: right; }
    tbody tr:nth-child(even) { background: #F8FAFC; }
    .footer { text-align: center; font-size: 7.5pt; color: #94A3B8; margin-top: 2rem; border-top: 1px solid #E2E8F0; padding-top: 1rem; }
    .no-print { text-align: center; margin-top: 1.5rem; }
    .no-print button { padding: 0.7rem 2rem; font-size: 0.9rem; font-family: 'Outfit', sans-serif; cursor: pointer; border-radius: 0.5rem; border: none; }
    .btn-print { background: #1E3A8A; color: #fff; margin-right: 0.5rem; }
    .btn-close { background: #E2E8F0; color: #475569; }
    @media print {
      body { padding: 1.5rem; }
      .no-print { display: none; }
      @page { margin: 2cm; }
    }
  </style>
</head>
<body>
  <h1>LAPORAN UPAH MINIMUM INDONESIA</h1>
  <div class="subtitle">Data Resmi Peraturan Menteri Ketenagakerjaan Tahun 2024</div>
  <div class="date">EqualWork &mdash; Dicetak pada: ${dateStr}</div>

  <h2>A. Upah Minimum Provinsi (UMP) 2024</h2>
  <table>
    <thead>
      <tr>
        <th style="width:45%;">Provinsi</th>
        <th style="width:30%; text-align:right;">UMP 2024</th>
        <th style="width:25%; text-align:right;">Kenaikan</th>
      </tr>
    </thead>
    <tbody>${umpRows}</tbody>
  </table>

  <h2>B. Upah Minimum Kabupaten/Kota (UMK) 2024</h2>
  <table>
    <thead>
      <tr>
        <th style="width:40%;">Kabupaten / Kota</th>
        <th style="width:30%;">Provinsi</th>
        <th style="width:30%; text-align:right;">UMK 2024</th>
      </tr>
    </thead>
    <tbody>${umkRows}</tbody>
  </table>

  <h2>C. Perbandingan Upah Minimum ASEAN</h2>
  <table>
    <thead>
      <tr>
        <th style="width:40%;">Negara</th>
        <th style="width:60%; text-align:right;">Nilai Upah</th>
      </tr>
    </thead>
    <tbody>${aseanRows}</tbody>
  </table>

  <div class="footer">
    Data bersumber dari Peraturan Menteri Ketenagakerjaan RI dan Badan Pusat Statistik (BPS) Tahun 2024<br>
    Dihasilkan oleh EqualWork &mdash; Dashboard Transparansi Ketenagakerjaan & Kesetaraan Gender<br>
    Dicetak pada: ${dateStr}
  </div>

  <div class="no-print">
    <button class="btn-print" onclick="window.print()"><i class="fas fa-download"></i> Cetak / Simpan PDF</button>
    <button class="btn-close" onclick="window.close()">Tutup</button>
  </div>

  <script>
    setTimeout(function() { window.print(); }, 600);
    window.onafterprint = function() { setTimeout(function() { window.close(); }, 500); };
  <\/script>
</body>
</html>`);
    printWin.document.close();
  });
}

// 10. Toast Notification System
function initToastSystem() {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const newsletterForm = document.querySelector("#newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput.value.trim() !== "") {
        showToast("Terima kasih! Anda berhasil berlangganan update terbaru.", "success");
        emailInput.value = "";
      }
    });
  }

  const loginForm = document.querySelector("#loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = loginForm.querySelector("#loginUser").value.trim();
      const loginPass = loginForm.querySelector("#loginPass").value;
      if (username !== "") {
        const lowerUser = username.toLowerCase();
        const matchedUser = REGISTERED_USERS.find(u => u.email.toLowerCase() === lowerUser);
        const isAdmin = lowerUser === "admin" || lowerUser === "admin@equalwork.id";

        // Validate password if it is a registered user
        if (matchedUser) {
          if (matchedUser.password !== loginPass) {
            showToast("Masuk Gagal: Kata sandi yang Anda masukkan salah.", "danger");
            return;
          }
        }

        closeModal("loginModal");
        loginForm.reset();

        const role = matchedUser ? matchedUser.role : (isAdmin ? "Administrator" : "Pekerja");

        // Add to LOGIN_SESSIONS
        const now = new Date();
        const dateStr = now.getFullYear() + "-" + 
                        String(now.getMonth() + 1).padStart(2, '0') + "-" + 
                        String(now.getDate()).padStart(2, '0') + " " + 
                        String(now.getHours()).padStart(2, '0') + ":" + 
                        String(now.getMinutes()).padStart(2, '0');

        // Mock IP generator
        const ip = "182.253." + Math.floor(Math.random() * 255) + "." + Math.floor(Math.random() * 255);

        LOGIN_SESSIONS.unshift({
          user: username,
          role: role,
          time: dateStr,
          ip: ip
        });

        // Re-render admin tables if they are initialized
        if (typeof renderAdminTables === "function") {
          renderAdminTables();
        }

        if (isAdmin) {
          showToast(`Login berhasil sebagai Administrator! Portal Admin diaktifkan.`, "success");
          // Open the admin portal directly
          setTimeout(() => {
            openModal("adminPortalModal");
          }, 800);
        } else {
          showToast(`Selamat datang kembali, ${username}! Masuk berhasil sebagai "${role}".`, "success");
        }
      }
    });
  }
}

function showToast(message, type = "info") {
  const container = document.querySelector(".toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let icon = "fa-info-circle";
  if (type === "success") icon = "fa-check-circle";
  else if (type === "warning") icon = "fa-exclamation-triangle";
  else if (type === "danger") icon = "fa-exclamation-circle";

  toast.innerHTML = `
    <i class="fas ${icon}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  
  setTimeout(() => toast.classList.add("show"), 50);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Scroll to Top
function initScrollTop() {
  const btn = document.querySelector("#scrollTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Generic Modal Helpers
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    const activeModal = document.querySelector(".modal-overlay.active");
    if (activeModal) closeModal(activeModal.getAttribute("id"));
  }
  
  if (e.target.closest(".modal-close-btn")) {
    const activeModal = document.querySelector(".modal-overlay.active");
    if (activeModal) closeModal(activeModal.getAttribute("id"));
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const activeModal = document.querySelector(".modal-overlay.active");
    if (activeModal) closeModal(activeModal.getAttribute("id"));
  }
});

// All Regulations Document Center Modal Logic
function initAllRegulationsArchive() {
  const archiveBtn = document.getElementById("lihatSemuaPeraturanBtn");
  const archiveModal = document.getElementById("allRegulationsModal");
  const archiveList = document.getElementById("archiveList");
  const searchInput = document.getElementById("archiveSearch");
  
  if (!archiveBtn || !archiveModal || !archiveList || !searchInput) return;

  let activeRegId = null;

  // Render the list of regulations in the sidebar
  const renderArchiveList = (searchQuery = "") => {
    archiveList.innerHTML = "";
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filtered = REGULATIONS_DB.filter(item => {
      return item.title.toLowerCase().includes(normalizedQuery) ||
             item.desc.toLowerCase().includes(normalizedQuery) ||
             item.tag.toLowerCase().includes(normalizedQuery);
    });

    if (filtered.length === 0) {
      archiveList.innerHTML = `<div style="padding:1rem; text-align:center; color:var(--text-light); font-size:0.875rem;">Tidak ditemukan</div>`;
      document.getElementById("archiveContentPlaceholder").style.display = "flex";
      document.getElementById("archiveContentArea").style.display = "none";
      return;
    }

    filtered.forEach((item, idx) => {
      const card = document.createElement("div");
      card.className = `archive-item-card ${item.id === activeRegId ? 'active' : ''}`;
      
      let badgeClass = "badge-primary";
      if (item.type === "kesetaraan-gender") badgeClass = "badge-accent";
      else if (item.type === "upah") badgeClass = "badge-success";

      card.innerHTML = `
        <div class="archive-item-title">${item.title}</div>
        <div class="archive-item-desc">${item.desc}</div>
        <span class="archive-item-tag badge ${badgeClass}">${item.tag}</span>
      `;

      card.addEventListener("click", () => {
        // Toggle active card
        document.querySelectorAll(".archive-item-card").forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        
        activeRegId = item.id;
        loadActiveRegulation(item);
      });

      archiveList.appendChild(card);
      
      // Auto-select first item on initial render or filter
      if (idx === 0) {
        card.classList.add("active");
        activeRegId = item.id;
        if (window.innerWidth > 768) {
          loadActiveRegulation(item);
        }
      }
    });
  };

  const loadActiveRegulation = (item) => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // Mobile: populate detail modal instead of inline panel
      const tagEl = document.getElementById("archiveDetailTag");
      tagEl.innerText = item.tag;

      let badgeClass = "badge-primary";
      if (item.type === "kesetaraan-gender") badgeClass = "badge-accent";
      else if (item.type === "upah") badgeClass = "badge-success";

      tagEl.className = `archive-item-tag badge ${badgeClass}`;
      document.getElementById("archiveDetailTitle").innerText = item.title;
      document.getElementById("archiveDetailNumber").innerText = item.number;
      document.getElementById("archiveDetailBody").innerHTML = formatRegulationContent(item.content);

      closeModal("allRegulationsModal");
      openModal("archiveDetailModal");
    } else {
      // Desktop: existing inline panel behavior
      document.getElementById("archiveContentPlaceholder").style.display = "none";
      document.getElementById("archiveContentArea").style.display = "block";

      const tagEl = document.getElementById("archiveActiveTag");
      tagEl.innerText = item.tag;

      let badgeClass = "badge-primary";
      if (item.type === "kesetaraan-gender") badgeClass = "badge-accent";
      else if (item.type === "upah") badgeClass = "badge-success";

      tagEl.className = `archive-item-tag badge ${badgeClass}`;
      document.getElementById("archiveActiveTitle").innerText = item.title;
      document.getElementById("archiveActiveNumber").innerText = item.number;
      document.getElementById("archiveActiveBody").innerHTML = formatRegulationContent(item.content);
    }
  };

  // Search filter keyup listener
  searchInput.addEventListener("input", (e) => {
    renderArchiveList(e.target.value);
  });

  // Mobile: close detail modal → reopen list modal
  const detailModal = document.getElementById("archiveDetailModal");
  if (detailModal) {
    detailModal.querySelectorAll(".modal-close-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeModal("archiveDetailModal");
        openModal("allRegulationsModal");
      });
    });
    detailModal.addEventListener("click", (e) => {
      if (e.target === detailModal) {
        closeModal("archiveDetailModal");
        openModal("allRegulationsModal");
      }
    });
  }

  // Open modal event trigger
  archiveBtn.addEventListener("click", () => {
    // Open the archive modal
    openModal("allRegulationsModal");
    
    // Reset state & render
    activeRegId = REGULATIONS_DB[0] ? REGULATIONS_DB[0].id : null;
    renderArchiveList("");
    searchInput.value = "";
    
    if (REGULATIONS_DB[0] && window.innerWidth > 768) {
      loadActiveRegulation(REGULATIONS_DB[0]);
    }
  });
}

// Admin Portal & Advocacy Monitoring Dashboard Logic
function initAdminPortal() {
  const footerLink = document.getElementById("footerAdminLink");
  const adminModal = document.getElementById("adminPortalModal");
  const tabButtons = document.querySelectorAll(".admin-tab-btn");
  const contents = document.querySelectorAll(".admin-tab-content");

  if (!footerLink || !adminModal) return;

  // Open Admin Portal from Footer
  footerLink.addEventListener("click", (e) => {
    e.preventDefault();
    openModal("adminPortalModal");
    renderAdminTables();
  });

  // Tab switching
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => {
        b.classList.remove("active");
        b.style.color = "var(--text-light)";
        b.style.borderBottom = "2px solid transparent";
      });
      contents.forEach(c => c.style.display = "none");

      btn.classList.add("active");
      btn.style.color = "var(--primary)";
      btn.style.borderBottom = "2px solid var(--primary)";
      
      const targetId = btn.getAttribute("data-admin-tab");
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.style.display = "block";
    });
  });

  // Initial render
  renderAdminTables();
}

function renderAdminTables() {
  const reportsBody = document.getElementById("adminReportsTableBody");
  const usersBody = document.getElementById("adminUsersTableBody");
  
  const reportsCount = document.getElementById("adminReportsCount");
  const usersCount = document.getElementById("adminUsersCount");

  if (!reportsBody || !usersBody) return;

  // Update counts
  if (reportsCount) reportsCount.innerText = REPORTS_DB.length;
  if (usersCount) usersCount.innerText = LOGIN_SESSIONS.length;

  // Render Submitted Reports
  reportsBody.innerHTML = "";
  REPORTS_DB.forEach(item => {
    const tr = document.createElement("tr");
    
    let identityHtml = "";
    if (item.anon) {
      identityHtml = `<span class="admin-badge-anon"><i class="fas fa-user-secret"></i> Anonim</span>`;
    } else {
      identityHtml = `<span class="admin-badge-real"><i class="fas fa-user"></i> ${item.reporter}</span><br/><small style="color:var(--text-light);">${item.contact}</small>`;
    }

    // Status classes mapping
    let statusClass = "pending";
    if (item.status === "proses") statusClass = "proses";
    else if (item.status === "advokasi") statusClass = "advokasi";
    else if (item.status === "selesai") statusClass = "selesai";

    tr.innerHTML = `
      <td>
        <strong style="color:var(--primary-dark); font-family:var(--font-title); font-size:0.875rem;">${item.ticket}</strong><br/>
        <small style="color:var(--text-light);"><i class="far fa-calendar-alt"></i> ${item.date}</small>
      </td>
      <td>
        <span style="font-weight:600; color:var(--text-dark);">${item.category}</span><br/>
        <small style="color:var(--text-light);"><i class="fas fa-building"></i> ${item.company}</small>
      </td>
      <td>${identityHtml}</td>
      <td>
        <select class="admin-status-select ${statusClass}" data-ticket="${item.ticket}">
          <option value="pending" ${item.status === 'pending' ? 'selected' : ''}>Pending Review</option>
          <option value="proses" ${item.status === 'proses' ? 'selected' : ''}>Proses Bipartit</option>
          <option value="advokasi" ${item.status === 'advokasi' ? 'selected' : ''}>Dalam Advokasi</option>
          <option value="selesai" ${item.status === 'selesai' ? 'selected' : ''}>Selesai Penanganan</option>
        </select>
      </td>
      <td>
        <button class="btn btn-secondary btn-detail-report" data-ticket="${item.ticket}" style="padding:0.375rem 0.75rem; font-size:0.75rem;">
          <i class="fas fa-eye"></i> Detail
        </button>
      </td>
    `;

    // Handle select element color change
    const selectEl = tr.querySelector(".admin-status-select");
    selectEl.addEventListener("change", (e) => {
      const newStatus = e.target.value;
      item.status = newStatus;
      
      // Update color class
      selectEl.className = `admin-status-select ${newStatus}`;
      showToast(`Status tiket ${item.ticket} diperbarui menjadi: ${newStatus.toUpperCase()}`, "success");
    });

    // Handle detail chronology modal show
    tr.querySelector(".btn-detail-report").addEventListener("click", () => {
      const regModal = document.getElementById("regulationModal");
      const body = document.querySelector("#regModalBody");
      const modalTitle = document.querySelector("#regModalTitle");
      
      if (!regModal || !body || !modalTitle) return;

      modalTitle.innerText = `Detail Pengaduan: ${item.ticket}`;
      
      let reporterDetails = "";
      if (item.anon) {
        reporterDetails = `<strong>Identitas Pelapor:</strong> Anonim (Disamarkan)`;
      } else {
        reporterDetails = `<strong>Identitas Pelapor:</strong> ${item.reporter} (${item.contact})`;
      }

      body.innerHTML = `
        <div style="margin-bottom:1.5rem; border-bottom:1px solid var(--border); padding-bottom:1rem;">
          <span class="badge badge-primary" style="margin-bottom:0.5rem;">${item.category}</span>
          <h3 style="font-size:1.25rem; font-family:var(--font-title); color:var(--text-dark); margin-bottom:0.25rem;">${item.company}</h3>
          <span style="font-size:0.8125rem; color:var(--text-light);"><i class="far fa-clock"></i> Masuk pada: ${item.date}</span>
        </div>
        <div class="reg-modal-text-content">
          <p><strong>Uraian Kronologis Kejadian:</strong></p>
          <p style="background-color:var(--bg-main); padding:1.25rem; border-radius:var(--radius-md); font-style:italic; border-left:4px solid var(--primary); margin-bottom:1.5rem;">
            "${item.chronology}"
          </p>
          <div style="background-color:var(--accent-pastel); padding:1rem; border-radius:var(--radius-md); font-size:0.875rem; color:var(--text-medium);">
            <i class="fas fa-info-circle"></i> ${reporterDetails}
          </div>
        </div>
      `;

      openModal("regulationModal");
    });

    reportsBody.appendChild(tr);
  });

  // Render Logged In Users
  usersBody.innerHTML = "";
  LOGIN_SESSIONS.forEach(item => {
    const tr = document.createElement("tr");
    
    let roleClass = "badge-primary";
    if (item.role === "Administrator") roleClass = "badge-success";
    else if (item.role === "Staf Advokasi") roleClass = "badge-accent";

    tr.innerHTML = `
      <td style="font-weight:600; color:var(--text-dark);">${item.user}</td>
      <td><span class="badge ${roleClass}">${item.role}</span></td>
      <td><small style="color:var(--text-medium); font-weight:500;"><i class="far fa-clock"></i> ${item.time}</small></td>
      <td><code style="background-color:var(--bg-main); padding:0.125rem 0.375rem; border-radius:var(--radius-sm); font-size:0.8125rem; font-family:monospace;">${item.ip}</code></td>
    `;
    usersBody.appendChild(tr);
  });
}

/* ================= LIVE ARTICLE SIMULATION (DINONAKTIFKAN) =================
 * Fitur ini telah dihapus. Artikel hanya dapat ditambahkan secara manual
 * oleh penulis melalui form "Tulis Artikel Baru", bukan disimulasikan otomatis.
 *
 * Data pool dan fungsi initLiveArticleFeed() di bawah ini diarsipkan (tidak berjalan).
 * ============================================================================ */

// CATATAN: SIMULATED_ARTICLES_POOL dihapus. Gunakan form "Tulis Artikel Baru"
// untuk menambahkan artikel baru secara manual berdasarkan referensi jurnal.

function initLiveArticleFeed() {
  // Fungsi ini dinonaktifkan. Simulasi otomatis dihapus.
  // Artikel hanya bisa ditambahkan melalui form manual oleh penulis.
  return;
}

function initRegister() {
  const registerForm = document.getElementById("registerForm");
  if (!registerForm) return;

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const role = document.getElementById("regRole").value;
    const password = document.getElementById("regPass").value;
    const confirmPassword = document.getElementById("regPassConfirm").value;

    if (password !== confirmPassword) {
      showToast("Pendaftaran gagal: Konfirmasi kata sandi tidak cocok!", "danger");
      return;
    }

    // Check if user already exists
    const userExists = REGISTERED_USERS.some(u => u.email.toLowerCase() === email.toLowerCase());
    if (userExists) {
      showToast("Pendaftaran gagal: Email atau Username sudah terdaftar!", "warning");
      return;
    }

    // Register user
    REGISTERED_USERS.push({
      name: name,
      email: email,
      role: role,
      password: password
    });

    closeModal("registerModal");
    registerForm.reset();
    showToast(`Pendaftaran berhasil! Akun Anda terdaftar sebagai "${role}". Silakan masuk.`, "success");

    // Open login modal and prefill email
    setTimeout(() => {
      const loginUserField = document.getElementById("loginUser");
      if (loginUserField) {
        loginUserField.value = email;
      }
      openModal("loginModal");
    }, 800);
  });
}

function initLoaderScreen() {
  const loader = document.getElementById("loaderOverlay");
  const barFill = document.getElementById("loaderBarFill");
  const barHead = document.getElementById("loaderBarHead");
  if (!loader) return;

  let progress = 0;
  const advance = () => {
    progress += Math.floor(Math.random() * 8) + 2;
    if (progress > 100) progress = 100;
    if (barFill) barFill.style.width = progress + "%";
    if (barHead) {
      barHead.style.left = progress + "%";
      if (progress > 0) barHead.classList.add("active");
    }
    if (progress < 100) {
      setTimeout(advance, Math.floor(Math.random() * 50) + 30);
    } else {
      setTimeout(done, 400);
    }
  };

  const done = () => {
    const GSAP = window.gsap;
    if (GSAP) {
      GSAP.to(loader, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          loader.style.display = "none";
          if (typeof window.triggerHeroEntrance === "function") {
            window.triggerHeroEntrance();
          }
        }
      });
    } else {
      loader.style.opacity = 0;
      setTimeout(() => {
        loader.style.display = "none";
        if (typeof window.triggerHeroEntrance === "function") {
          window.triggerHeroEntrance();
        }
      }, 500);
    }
  };

  setTimeout(advance, 200);
}

