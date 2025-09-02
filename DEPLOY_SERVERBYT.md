# Deploy Script for Serverbyt.com (Node.js + Static Frontend)

npm run build

## 1. Build Frontend

```bash
npm run build
```

## 2. Upload hasil build (folder dist/) ke public_html (untuk static hosting)

Atau ke folder yang diinginkan jika pakai subdomain static.

## 3. Upload folder server/ dan file .env ke server (VPS atau Node.js hosting)

File `.env` harus berisi:

```env
EMAIL_PASSWORD=isi_password_email_admin_padin_disini
PING_MESSAGE=ping
```

## 4. Install dependencies backend

```bash
cd server
npm install
```

## 5. Jalankan backend (Express API)

```bash
node index.js
# atau gunakan PM2 agar auto-restart:
# pm2 start index.js --name "portfolio-api"
```

## 6. Pastikan backend bisa diakses dari frontend (CORS sudah diaktifkan di server/index.ts)

Jika frontend dan backend beda domain, sesuaikan endpoint di frontend, misal:

`https://api.padin.my.id/api/contact`

## 7. Test form kontak dari frontend, pastikan email terkirim ke <admin@padin.my.id>

Selesai
