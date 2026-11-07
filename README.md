# 📚 Dokumentasi Kegiatan Workshop EXPECTIK 2026 — Day 1

Selamat datang di repositori dokumentasi kegiatan, rangkuman materi, dan catatan pembelajaran **Day 1 Proyek Workshop EXPECTIK 2026**.

---

## 👤 1. Nama Lengkap Peserta
- **Nama Lengkap:** Frasya Pandu Asmara
- **Kelompok:** 08_Persona
- **Program Studi / Kelas:** Teknik Multimedia dan Jaringan (TMJ 1B)
- **GitHub Profile:** [@PanduAsmara](https://github.com/PanduAsmara)
- **Website Portofolio:** [frasyapanduasmara.my.id](https://frasyapanduasmara.my.id)

---

## 📖 2. Deskripsi Singkat Mengenai Repository
Repository ini merupakan media penyimpanan dan dokumentasi daring (*online documentation*) berstatus **Public** yang dibuat untuk mendokumentasikan rangkaian kegiatan **Day 1 Proyek Workshop EXPECTIK 2026**. Di dalam repository ini tersimpan materi yang disampaikan oleh pemateri, catatan pembelajaran, poin-poin pengetahuan baru, pendapat pribadi mengenai jalannya workshop, serta arsip hasil praktik pembuatan aplikasi web sederhana menggunakan bantuan AI dan Git.

---

## 🎯 3. Tujuan dan Kegunaan Repository
Repository ini dibuat dengan tujuan dan kegunaan sebagai berikut:
1. **Sarana Penyimpanan & Pengelolaan Dokumentasi Daring:** Menyimpan seluruh materi, catatan pembelajaran, dan dokumentasi kegiatan selama mengikuti workshop di platform GitHub.
2. **Publikasi Dokumentasi Terbuka (*Public*):** Memudahkan panitia maupun pembaca umum untuk mengakses hasil dokumentasi kegiatan workshop tanpa memerlukan izin khusus.
3. **Pengelolaan File Secara Terstruktur:** Membiasakan penyusunan catatan pembelajaran, salinan materi, dan file proyek secara rapi di dalam satu repository.
4. **Implementasi Dokumentasi Utama dengan `README.md`:** Memanfaatkan format Markdown pada `README.md` sebagai halaman dokumentasi utama yang informatif, terstruktur, dan mudah dibaca.

---

## 📅 4. Informasi Mengenai Kegiatan Workshop yang Didokumentasikan
- **Nama Kegiatan:** Day 1 Proyek Workshop EXPECTIK 2026
- **Penyelenggara:** Himpunan Mahasiswa Teknik Informatika dan Komputer (HIMATIK) PNJ
- **Topik Materi:** *Building with AI, Managing Change with GitHub*
- **Pemateri:** Nugi Farhan (*Senior Product Designer* — 6 tahun pengalaman industri, pernah berkarier di Grab serta menjadi *UX Advisor* untuk program Bangkit, DBS CodingCamp, dan BI Hackathon)
- **Hari, Tanggal:** Sabtu, 7 November 2026
- **Fokus Pembelajaran:** Merancang instruksi AI yang efektif (*Prompt Engineering*) untuk membangun aplikasi serta mengelola perubahan versi dan kolaborasi menggunakan Git & GitHub.

---

## 📝 5. Dokumentasi Kegiatan Workshop

### A. Rangkuman Materi yang Disampaikan Selama Workshop

#### 1) Building with AI: Prompt Engineering
- **Pengertian Prompt & Prompt Engineering:**
  - **Prompt** adalah instruksi atau masukan yang diberikan kepada model AI untuk menghasilkan keluaran tertentu, baik berupa pertanyaan sederhana, kata kunci, instruksi terperinci, maupun potongan kode.
  - **Prompt Engineering** adalah cara merancang instruksi tersebut agar AI memberikan jawaban yang tepat, relevan, dan layak digunakan.
- **Pentingnya Konteks (*Context is Key*):**
  - Memberikan instruksi tanpa konteks (misalnya hanya mengetik `"Create student task planner"`) membuat hasil AI menjadi terlalu umum. Sebaliknya, menambahkan konteks yang jelas (tujuan aplikasi, target pengguna, fitur, serta batasan teknis) akan menghasilkan keluaran yang jauh lebih akurat.
- **Struktur Prompt yang Baik (*Good Prompt Structure*):**
  1. **Role (Peran):** Menentukan peran AI (contoh: *You are helping me build a beginner-friendly student task planner as a simple web application*).
  2. **Task (Tugas / Goal):** Menjelaskan sasaran utama yang ingin dicapai (contoh: membuat *task planner* yang membantu mahasiswa tahun pertama melacak tugas kuliah dan tenggat waktu).
  3. **Context (Requirements & Constraints):** Merinci kebutuhan fitur (daftar sampel tugas, judul, tenggat waktu, status penyelesaian, fitur tandai selesai, filter *all/pending/completed*, antarmuka bersih dan responsif) serta batasan teknis (menggunakan HTML, CSS, dan vanilla JavaScript tanpa *library* eksternal agar mudah dipahami pemula).
  4. **Format (Output):** Menentukan bentuk hasil keluaran (menyertakan kode lengkap tiap file, cara menjalankan aplikasi, dan cara menguji interaksi utama).
- **Taktik Menyusun Prompt & Keuntungannya:**
  - Taktik yang dapat diterapkan meliputi penggunaan kata kerja aksi (*action verbs*), penentuan panjang dan format output, penentuan target audiens, penyertaan data relevan, perujukan dokumen spesifik, serta pendefinisian istilah kunci.
  - Penerapan *Prompt Engineering* bermanfaat untuk meningkatkan performa model AI, mengurangi bias maupun respons ofensif, meningkatkan kontrol serta prediktabilitas hasil, dan memberikan pengalaman pengguna yang lebih baik.

#### 2) Managing Change: Konsep Dasar Git & GitHub
- **Pengertian Git:**
  - Git adalah *Version Control System* (VCS) yang diciptakan oleh **Linus Torvalds** pada tahun **2005** untuk melacak dan mencatat siapa, kapan, dan apa saja perubahan yang dilakukan pada suatu file proyek.
- **Perbedaan Git dan GitHub:**
  | Aspek | Git | GitHub |
  | :--- | :--- | :--- |
  | **Definisi** | Sistem *version control* terdistribusi (*Distributed Version Control System* / DVCS) | Platform berbasis web untuk menyimpan repository Git secara *online* |
  | **Fungsi Utama** | Melacak dan mengelola perubahan kode secara lokal di komputer | Menyimpan repository secara daring dan mendukung kolaborasi tim |
- **Alur Kerja Git (*Git Workflow* — 3 Komponen Utama):**
  1. **Working Directory / Tree:** Salinan satu versi proyek di komputer lokal tempat file sedang dikerjakan atau dimodifikasi.
  2. **Staging Area (*Index*):** Area penampungan sementara di dalam direktori Git yang menyimpan informasi perubahan apa saja yang akan dimasukkan ke dalam *commit* berikutnya (*Stage Fixes*).
  3. **.git Directory (*Repository*):** Tempat penyimpanan *metadata* dan *object database* proyek. Bagian ini merupakan komponen terpenting dalam Git yang akan disalin ketika melakukan proses `git clone`.

#### 3) Setup Lingkungan Kerja, Perintah Esensial Git, & SSH Key
- **Setup Awal Git & VS Code:**
  - Mengecek instalasi Git dengan `git --version`.
  - Mengatur identitas pengguna secara global dengan `git config --global user.name "Nama"` dan `git config --global user.email "email@example.com"`, serta mengeceknya menggunakan `git config --global --list`.
  - Mengaktifkan perintah `code` pada terminal melalui VS Code (*Command Palette* `Ctrl+Shift+P` / `Cmd+Shift+P` -> *Shell Command: Install 'code' command in PATH*) dan memastikannya dengan `code --version`.
- **Perintah Esensial Git & GitHub:**
  ```bash
  # Inisialisasi repository baru atau menyalin repository dari GitHub
  git init
  git clone "url-repository"

  # Memindahkan file dari Working Directory ke Staging Area
  git add .          # Menambahkan seluruh perubahan file di dalam repository
  git add --all      # Sama dengan git add -A, menambahkan semua perubahan ke staging area
  git add *          # Menambahkan file baru/dimodifikasi, kecuali file yang dihapus (deleted)

  # Menyimpan perubahan ke dalam Repository lokal
  git commit -m "pesan commit"

  # Menghubungkan ke GitHub dan melakukan sinkronisasi (Push & Pull)
  git remote add origin <url-repository>
  git push origin main
  git pull origin main
  ```
- **Konfigurasi Autentikasi SSH Key (Ed25519):**
  - Membuat kunci SSH baru dengan perintah `ssh-keygen -t ed25519 -C "email@domain.com"` yang menggunakan skema tanda tangan kurva eliptik **Ed25519** (*Edwards-curve Digital Signature Algorithm* berbasis *Curve25519* oleh Daniel J. Bernstein) untuk keamanan dan performa tinggi.
  - Menjalankan *SSH agent* (`eval "$(ssh-agent -s)"`), mendaftarkan kunci ke *agent*, menempelkan kunci publik (`~/.ssh/id_ed25519.pub`) ke menu **SSH and GPG keys** di GitHub, lalu menguji autentikasi dengan perintah `ssh -T git@github.com`.
- **Alur Praktik Pembuatan Proyek (*Student Task Planner*):**
  1. Menyiapkan platform AI (*Claude / Antigravity / ChatGPT*).
  2. Menuliskan *prompt* terstruktur untuk membuat aplikasi web **Student Task Planner**.
  3. Menginisialisasi Git pada folder proyek (`git init`).
  4. Melakukan *commit* dan *push* ke GitHub.
  5. Melakukan perubahan/pembaruan fitur, lalu kembali melakukan *commit* dan *push* ke GitHub.

---

### B. 💡 Poin-Poin Penting & Pengetahuan Baru yang Dipelajari
1. **Kerangka *Role – Task – Context – Format* pada Prompt AI:** Saya mempelajari bahwa kualitas kode yang dihasilkan AI sangat bergantung pada kejelasan konteks, rincian *requirements*, serta batasan teknis (*constraints*) yang kita berikan di dalam *prompt*.
2. **Perbedaan Mendasar antara Git dan GitHub:** Memahami secara jelas bahwa **Git** bekerja sebagai alat *version control* lokal di perangkat, sedangkan **GitHub** adalah layanan *cloud* berbasis web untuk menyimpan repositori Git dan berkolaborasi.
3. **Konsep 3 Area dalam Git Workflow:** Memahami alur perpindahan file dari *Working Directory* ke *Staging Area (Index)* menggunakan `git add`, hingga tercatat secara permanen di `.git Directory (Repository)` melalui `git commit`.
4. **Perbedaan Detail Variasi Perintah `git add`:** Mengetahui perbedaan teknis antara `git add .` / `git add -A` / `git add --all` (yang menyertakan seluruh perubahan termasuk penghapusan file) dibandingkan `git add *` (yang tidak menyertakan file yang dihapus).
5. **Penggunaan Kriptografi Ed25519 pada SSH GitHub:** Mendapatkan pengetahuan baru mengenai cara kerja dan keunggulan algoritma kurva eliptik **Ed25519** untuk autentikasi SSH yang aman dan efisien antara terminal lokal dengan akun GitHub.

---

### C. 💬 Pendapat Pribadi tentang Day 1 Proyek Workshop
Menurut saya, kegiatan **Day 1 Proyek Workshop EXPECTIK 2026** dengan topik *"Building with AI, Managing Change with GitHub"* yang dibawakan oleh Kak Nugi Farhan sangat relevan dengan kebutuhan mahasiswa IT saat ini. Materi yang disampaikan tidak hanya membahas teori, tetapi langsung menjembatani cara memanfaatkan AI secara cerdas melalui *Prompt Engineering* yang terstruktur dengan praktik rekayasa perangkat lunak yang rapi menggunakan Git dan GitHub.

Hal yang paling berkesan bagi saya adalah bagaimana pemateri menunjukkan bahwa AI bukanlah pengganti pemahaman teknis, melainkan *partner* kerja yang membutuhkan arahan kontekstual (*Role, Task, Context, Format*) agar menghasilkan produk yang baik. Selain itu, penjelasan mengenai alur kerja Git hingga konfigurasi *SSH Key* sangat membantu membangun kebiasaan mendokumentasikan kode dan mengelola perubahan proyek secara profesional sejak tahun pertama perkuliahan.

---

## 📂 6. Struktur File di Dalam Repository
Seluruh dokumentasi, materi, dan catatan kegiatan pada repository ini disusun secara terstruktur sebagai berikut:

```text
📦 Day-1-(Nama_Kelompok)_Frasya-Pandu-Asmara
 ┣ 📂 assets/
 ┃ ┗ 📜 README.md                          # Tempat penyimpanan dokumentasi visual / screenshot
 ┣ 📂 catatan/
 ┃ ┗ 📜 rangkuman-materi-lengkap.md        # Catatan pembelajaran & cheat sheet perintah Git
 ┣ 📂 materi/
 ┃ ┗ 📄 Git & Github.pdf                   # File materi presentasi Day 1 Proyek Workshop
 ┣ 📂 praktik/
 ┃ ┣ 📜 PROMPT.md                          # Dokumentasi prompt AI yang digunakan saat praktik
 ┃ ┣ 📜 index.html                         # Kode HTML aplikasi Student Task Planner
 ┃ ┣ 📜 style.css                          # Kode CSS aplikasi Student Task Planner
 ┃ ┗ 📜 script.js                          # Kode JavaScript aplikasi Student Task Planner
 ┗ 📜 README.md                            # Dokumentasi utama repository (halaman ini)
```
## 🚀 7. Proyek Praktik Tambahan (PastelType)
Sebagai bentuk eksplorasi mandiri dalam menerapkan materi workshop, saya juga mengembangkan proyek aplikasi web typing test interaktif bernama PastelType:

- Repository GitHub PastelType: https://github.com/PanduAsmara/PastelType/
- Live web page Demo : https://panduasmara.github.io/PastelType/

  Teknologi: HTML, CSS, dan JavaScript murni.