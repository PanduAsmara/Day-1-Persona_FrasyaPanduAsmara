# 📝 Catatan Pembelajaran Day 1 Proyek Workshop EXPECTIK 2026

**Topik:** Building with AI, Managing Change with GitHub  
**Pemateri:** Nugi Farhan (*Senior Product Designer*)  
**Peserta:** Frasya Pandu Asmara (TMJ 1B)

---

## 1. Catatan Prompt Engineering
- **Definisi Prompt:** Instruksi atau masukan yang diberikan kepada model AI untuk mendapatkan hasil tertentu.
- **Definisi Prompt Engineering:** Cara merancang instruksi agar AI memberikan jawaban yang tepat, relevan, dan layak digunakan.
- **Komponen Struktur Prompt yang Baik:**
  1. **Role:** Peran yang dijalankan oleh AI.
  2. **Task (Goal):** Tujuan pembuatan aplikasi/keluaran.
  3. **Context (Requirements & Constraints):** Spesifikasi fitur dan batasan teknologi yang digunakan.
  4. **Format (Output):** Bentuk hasil akhir yang diharapkan beserta panduan cara menjalankan dan menguji.

---

## 2. Catatan Perintah Git & GitHub (Cheat Sheet)

### A. Konfigurasi Awal
| Perintah | Fungsi |
| :--- | :--- |
| `git --version` | Mengecek versi Git yang terpasang |
| `git config --global user.name "Nama"` | Mengatur nama identitas pengguna Git |
| `git config --global user.email "email@domain.com"` | Mengatur email identitas pengguna Git |
| `git config --global --list` | Melihat daftar konfigurasi global Git |
| `code --version` | Mengecek integrasi perintah VS Code pada PATH terminal |

### B. Alur Kerja Repository Lokal & Remote
| Perintah | Fungsi |
| :--- | :--- |
| `git init` | Memulai/menginisialisasi repository baru di direktori lokal |
| `git clone "url"` | Menyalin repository dari GitHub ke perangkat lokal |
| `git add .` / `git add -A` / `git add --all` | Memindahkan semua perubahan file ke *Staging Area* |
| `git add *` | Menambahkan semua file baru atau dimodifikasi (kecuali file yang dihapus) ke *Staging Area* |
| `git commit -m "pesan"` | Menyimpan perubahan dari *Staging Area* ke dalam `.git Repository` |
| `git remote add origin <url>` | Menghubungkan repository lokal ke remote repository di GitHub |
| `git push origin main` | Mengunggah commit pada branch `main` ke GitHub |
| `git pull origin main` | Mengambil dan menggabungkan perubahan terbaru dari GitHub ke branch lokal |

### C. Autentikasi SSH Key (Ed25519)
```bash
# 1. Generate SSH Key baru dengan algoritma Ed25519
ssh-keygen -t ed25519 -C "email@domain.com"

# 2. Jalankan SSH Agent
eval "$(ssh-agent -s)"

# 3. Uji koneksi SSH ke GitHub setelah menambahkan public key ke akun GitHub
ssh -T git@github.com
```
