# SEA Catering – Technical Challenge COMPFEST 17

Web aplikasi subscription healthy meals untuk challenge Software Engineering Academy COMPFEST 17.  
**Fitur lengkap hingga Level 3: landing page, interaktif, subscription, testimonial.**

---

## 🚀 Demo & Preview

> **Deploy:**  
> [https://sea-catering.vercel.app/](https://sea-catering.vercel.app/)  
> *(Ganti dengan link deploy kamu jika sudah deploy, atau hapus section ini.)*

---

## 📦 Project Overview

SEA Catering adalah aplikasi landing page subscription meal sehat dengan:
- Informasi bisnis SEA Catering & slogan
- Menu meal plan yang interaktif
- Testimonial carousel (user bisa tambah review)
- Form subscription interaktif & auto kalkulasi harga
- Kontak/FAQ, serta info admin

Aplikasi ini mengerjakan challenge hingga **Level 3**.

---

## 🧩 Features

### Level 1: Landing Page
- **Homepage** dengan logo, slogan, penjelasan layanan
- Section globe delivery area
- Kontak admin (Manager: Brian, 08123456789)

### Level 2: Interaktif
- **Navbar** responsif (link: Home, Menu, Subscribe, Contact)
- **Menu meal plan:**  
  - Kartu meal plan  
  - Modal/detail plan
- **Testimonial carousel:**  
  - Swipe atau tombol prev-next  
  - User bisa submit testimonial baru (nama, review, rating)

### Level 3: Subscription System
- **Form subscription:**  
  - Pilihan meal plan, tipe meal, hari, alergi  
  - Kalkulasi total harga otomatis  
  - Validasi field  
- Submit data hanya simulasi (belum tersambung backend)

---

## 🛠️ Cara Instalasi & Menjalankan

1. **Clone repo**
   ```bash
   git clone https://github.com/nafhansa/SEA-Catering.git
   cd SEA-Catering
   npm install
   npm start

## Project Structure
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── GlobeSection.jsx
│   ├── TestimonialCarousel.jsx
│   ├── FaqContactButton.jsx
│   └── ...
├── pages/
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── Subscription.jsx
│   └── ...
├── image/
│   └── ... (assets)
├── App.js
└── index.js

