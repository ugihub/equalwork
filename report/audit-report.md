# Laporan Audit Proyek EqualWork

**Tanggal Audit:** 17 Juni 2026
**Auditor:** Tim Engineer & Quality Assurance Senior
**Tujuan:** Evaluasi UI/UX, Kode, dan Keamanan proyek EqualWork (Dashboard Ketenagakerjaan & Gender)
**Bahasa:** Sederhana & Mudah Dipahami (Non-Technical)

---

## 1. Ringkasan Eksekutif (Intisari)

EqualWork adalah website/dashboard yang bertujuan memberikan informasi mengenai upah minimum, hak pekerja wanita, dan transparansi ketenagakerjaan Indonesia. Secara tampilan, desainnya sudah cukup **modern dan enak dipandang** (tidak kuno). Namun, ada beberapa **masalah teknis penting** yang membuat website ini sulit digunakan oleh visitors, terutama terkait **scroll (menggulir halaman)** dan **struktur kode** yang sangat besar.

**Simpulan Utama:**
- ✅ **Desain visual bagus** (warna, font, animasi).
- ⚠️ **Masalah scroll kritis** yang membuat pengguna tidak bisa membaca seluruh isi halaman.
- ⚠️ **Kode program sangat panjang** (ribuan baris), sehingga sulit diperbaiki atau ditambahkan fitur baru.
- ⚠️ **Keamanan standar rendah** untuk sebuah platform yang mengelola data sensitif.

---

## 2. Evaluasi Desain & Tampilan (UI/UX)

**Target penilaian:** Seberapa jelas informasi disajikan dan seringkah tampilan di mata?

### 2.1 Hal yang Sudah Bagus
- **Warna & Tema:** Penggunaan warna biru dan putih memberikan kesan profesional, resmi, dan bersih.
- **Tipografi:**使用了 font 'Inter' dan 'Outfit' yang modern dan mudah dibaca di layar.
- **Navigasi:** Menu di bagian atas (Navbar) cukup jelas. Pengguna bisa dengan mudah menemukan menu "Peraturan", "Upah Minimum", dll.
- **Ikon:**使用了 FontAwesome yang menyediakan ikon-ikon jelas untuk setiap informasi (seperti ikon peta, ikon grafik, dll).
- **Responsiveness:** Untuk ukuran layar komputer (desktop), tampilan sudah teratur. Namun perlu pengecekan khusus untuk layar HP (mobile).

### 2.2 Hal yang Perlu Diperbaiki
1.  **Masalah Scroll (Gulir Halaman):**
    *   **Dampak:** Pengguna **tidak bisa scroll ke bawah** untuk melihat seluruh isi panel "Beranda" atau "Peraturan". Ini adalah bug #1 yang harus diperbaiki.
    *   **Kenapa terjadi:** Kode CSS memaksa tinggi halaman menjadi 100% layar dan menyembunyikan overflow, padahal isi konten jauh lebih panjang dari tinggi layar.

2.  **Footer (Bagian Bawah Website):**
    *   **Dampak:** Jika dibuka di HP atau tablet, kolom-kolom informasi di footer (bawah) akan berantakan atau saling tindih.
    *   **Kenapa terjadi:** Layout footer menggunakan sistem grid 5 kolom yang tidak menyesuaikan diri dengan ukuran layar kecil.

3.  **Konsistensi Informasi:**
    *   Beberapa bagian masih menggunakan *hardcoded text* (tulisan yang tidak bisa diubah secara dinamis oleh sistem). Idealnya, data seperti "Jumlah Provinsi" bisa berubah sendiri berdasarkan database.

---

## 3. Evaluasi Kode & Performa (Technical)

**Target penilaian:** Apakah website ini lambat? Apakah kode programmerannya rapi?

### 3.1 Hal yang Sudah Bagus
- **Variabel CSS:** Programmer menggunakan variabel untuk warna dan ukuran font (misalnya `--primary: #1E40AF`). Ini memudahkan jika ingin mengganti warna主题 di kemudian hari.
- **Modularitas File:** Pemisahan file HTML, CSS, dan JS sudah benar, sehingga tidak tercampur jadi satu.

### 3.2 Hal yang Perlu Diperbaiki
1.  **Ukuran File JavaScript (`app.js`):**
    *   **Dampak:** File JavaScript utama memiliki **lebih dari 2,000 baris kode**. Ini menyulitkan programmer lain untuk memahami alur logika atau menambahkan fitur baru.
    *   **Solusi:** Sebaiknya kode dipecah ke dalam beberapa file kecil berdasarkan fungsi (misal: `regulation-handler.js`, `auth-handler.js`, dll).

2.  **Kurangnya Validasi Input:**
    *   **Dampak:** Pengguna bisa memasukkan data yang tidak valid (misal: gaji diisi huruf) tanpa ada peringatan teknis yang jelas dari sistem. Sistem hanya bergantung pada atribut `required` pada HTML.
    *   **Solusi:** Tambahkan validasi di JavaScript untuk memastikan format data benar.

3.  **Tidak Ada Build System:**
    *   **Dampak:** Tidak ada process otomatis untuk memperkecil ukuran file CSS/JS sebelum di-upload ke server (minifikasi). Ini membuat website load sedikit lebih lambat.

---

## 4. Evaluasi Keamanan & Data

**Target penilaian:** Apakah data pengguna aman? Apakah informasi yang disajikan akurat?

### 4.1 Hal yang Perlu Diperbaiki
1.  **Data Mock/Simulasi:**
    *   Website ini menyimpan data sensitif (username, password) langsung di dalam kode JavaScript (di array `REGISTERED_USERS` dan `LOGIN_SESSIONS`). Ini adalah **praktik yang sangat tidak aman**.
    *   **Solusi:** Autentikasi dan data user harus dikelola oleh Backend/Database server yang terpisah, bukan di kode frontend.

2.  **Potensi XSS (Cross-Site Scripting):**
    *   Jika pengguna diperbolehkan menulis artikel atau komentar, sistem saat ini sangat rentan terhadap serangan XSS (tekhnik hacker untuk menyisipkan kode berbahaya).
    *   **Solusi:** Perlu implementasi *sanitasi input* sebelum konten user ditampilkan ke user lain.

3.  **Autentikasi Lemah:**
    *   Form login memiliki atribut `placeholder` yang terlihat jelas bahwa username/password default adalah `admin`. Ini membuka celah keamanan yang besar.

---

## 5. Daftar Koreksi & Action Items

Berikut adalah daftar prioritas perbaikan yang harus dilakukan:

| No | Prioritas | Area | Deskripsi Masalah | Solusi yang Dianjurkan |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **KRITIS** | CSS/UX | Scroll tidak berfungsi di panel utama karena `overflow: hidden` pada `body` dan container. | Ubah CSS `body` dan `.dashboard-main` agar `height: auto` dan `overflow-y: scroll` |
| 2 | **KRITIS** | JS Data | Password dan data user tersimpan di kode JS (tidak aman). | Pindahkan sistem autentikasi ke backend/database |
| 3 | **TINGGI** | CSS Layout | Footer 5 kolom tidak responsive di mobile. | Tambahkan media query untuk breakpoint mobile/tablet |
| 4 | **TINGGI** | JS Structure | File `app.js` terlalu besar (2000+ lines). | Pecah menjadi modul-modul terpisah |
| 5 | **SEDANG** | CSS/UX | Kurangnya kontras warna pada beberapa teks atau elemen disabled | Audit warna menggunakan tools Lighthouse/Contrast checker |
| 6 | **SEDANG** | SEO/Meta | Favicon tidak ditemukan | Buat dan masukkan file `favicon.ico` |
| 7 | **RENDAH** | UX | Toast notification overlay tidak bisa di-scroll jika muncul banyak | Tambahkan wrapper scroll pada container toast |

---

## 6. Kesimpulan

Proyek EqualWork memiliki fondasi visual yang solid dan misi sosial yang sangat penting. Namun, sebelum bisa digunakan secara luas oleh publik, **dua masalah kritis harus segera diperbaiki**:

1.  **Fungsionalitas:** Pengguna harus bisa scroll membaca seluruh informasi.
2.  **Keamanan:** Data user tidak boleh dikelola di sisi kode frontend.

Jika kedua hal ini diperbaiki, dan struktur kode dipecah menjadi lebih kecil, proyek ini memiliki potensi besar untuk berkembang menjadi platform edukasi dan advokasi ketenagakerjaan yang influential di Indonesia.

---

*Generated by Senior Software Engineering & QA Team*
*Date: 2026-06-17*