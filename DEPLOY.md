# Deploy Samaya Stars ke Hostinger via GitHub

Proyek ini siap di-deploy ke **Hostinger VPS** dengan trigger otomatis setiap push ke branch `main` di GitHub.

---

## 1. Persyaratan Hostinger

- Paket **VPS** (bukan shared hosting). Next.js butuh Node.js dan proses berjalan terus.
- OS disarankan: **Ubuntu** (22.04 atau 24.04).

---

## 2. Setup awal di Hostinger VPS

### 2.1 SSH ke VPS

Gunakan kredensial SSH dari panel Hostinger (IP, user, password atau SSH key).

```bash
ssh root@IP_VPS_ANDA
```

### 2.2 Install Node.js (pakai NVM)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
node -v
npm -v
```

### 2.3 Install PM2 (process manager)

```bash
npm install -g pm2
```

### 2.4 Clone repo ke folder deploy

Ganti `GITHUB_USER` dan `REPO` dengan nama repo Anda. Untuk repo privat, pakai deploy key (lihat bawah).

```bash
mkdir -p /var/www
cd /var/www
git clone https://github.com/GITHUB_USER/REPO.git samaya-stars
cd samaya-stars
```

### 2.5 Buat file `.env` di server

Isi sama seperti di lokal (Supabase URL dan Service Role Key). **Jangan** commit file ini.

```bash
nano .env
```

Isi:

```
SUPABASE_URL=https://kzkwgkihazrvdlkqpenr.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Simpan (Ctrl+O, Enter, Ctrl+X).

### 2.6 Install dependency dan jalankan pertama kali

```bash
npm ci --omit=dev
npm run build
PORT=3000 npx pm2 start npm --name "samaya-stars" -- start
pm2 save
pm2 startup
```

Aplikasi berjalan di port 3000. Untuk pakai port 80/443, nanti bisa pakai Nginx sebagai reverse proxy.

---

## 3. Koneksi GitHub ↔ VPS (deploy otomatis)

Agar setiap **push ke `main`** otomatis deploy ke VPS, pakai **GitHub Actions** dengan SSH.

### 3.1 Buat SSH key untuk deploy (di laptop atau di VPS)

**Opsi A – Generate di VPS (lebih gampang):**

```bash
ssh-keygen -t ed25519 -C "github-deploy" -f ~/.ssh/github_deploy -N ""
cat ~/.ssh/github_deploy.pub
```

- **Public key** (`github_deploy.pub`): tambah ke **GitHub → Repo → Settings → Deploy keys**. Centang “Allow write access” jika mau deploy key dipakai untuk pull.
- **Private key** (`github_deploy`): isi file ini (seluruh isi, termasuk `-----BEGIN ... END ...`) akan dipakai sebagai GitHub Secret `SSH_PRIVATE_KEY`.

**Opsi B – Generate di laptop:**

```bash
ssh-keygen -t ed25519 -C "github-deploy" -f ~/.ssh/hostinger_deploy -N ""
```

Lalu pasang **public key** ke VPS:

```bash
# Di VPS
mkdir -p ~/.ssh
nano ~/.ssh/authorized_keys
# Tempel isi hostinger_deploy.pub, simpan
```

Private key (`hostinger_deploy`) dipakai sebagai isi secret `SSH_PRIVATE_KEY` di GitHub.

### 3.2 GitHub Secrets

Di repo GitHub: **Settings → Secrets and variables → Actions** → New repository secret. Tambah:

| Secret name | Nilai | Keterangan |
|-------------|--------|------------|
| `SSH_HOST` | IP VPS Hostinger | Contoh: `123.45.67.89` |
| `SSH_USER` | User SSH | Biasanya `root` atau user yang dipakai untuk SSH |
| `SSH_PRIVATE_KEY` | Isi **private key** (seluruh file) | Dari langkah 3.1 |
| `SUPABASE_URL` | URL project Supabase | Sama dengan di `.env` |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key Supabase | Sama dengan di `.env` |
| `DEPLOY_PATH` | (opsional) Path folder repo di VPS | Default: `/var/www/samaya-stars` |

Setelah ini, setiap **push ke branch `main`** akan:

1. Build di GitHub (untuk cek tidak error).
2. SSH ke VPS, `git pull`, `npm ci --omit=dev`, `npm run build`, lalu `pm2 restart samaya-stars`.

---

## 4. Nginx (opsional, untuk domain dan HTTPS)

Jika sudah punya domain yang mengarah ke IP VPS:

```bash
sudo apt update
sudo apt install nginx -y
sudo nano /etc/nginx/sites-available/samaya-stars
```

Isi (ganti `yourdomain.com`):

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Aktifkan dan reload:

```bash
sudo ln -s /etc/nginx/sites-available/samaya-stars /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Untuk HTTPS, bisa pakai Certbot: `sudo apt install certbot python3-certbot-nginx -y` lalu `sudo certbot --nginx -d yourdomain.com`.

---

## 5. Ringkasan checklist

- [ ] VPS Hostinger dengan Ubuntu
- [ ] Node.js (NVM) + PM2 terpasang
- [ ] Repo di-clone di `/var/www/samaya-stars` (atau path yang Anda set di `DEPLOY_PATH`)
- [ ] File `.env` di server berisi `SUPABASE_URL` dan `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Deploy key / SSH key untuk GitHub sudah dipasang (Deploy keys + `authorized_keys` di VPS)
- [ ] Semua GitHub Secrets terisi (`SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY`, `SUPABASE_*`, dan opsional `DEPLOY_PATH`)
- [ ] Branch yang dipush untuk deploy: `main` (sesuai workflow)

Setelah itu, push ke `main` akan memicu workflow **Deploy to Hostinger** dan aplikasi ter-update di VPS.
