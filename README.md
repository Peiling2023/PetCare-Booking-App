# PetCare-Booking-App 🐶🐾
## Overview
# iCarePets - Responsive Pet Care SPA 🐶🐾

A fully responsive **React + Vite Single Page Application (SPA)** built as my Final Project for INFO6150 Web Design at Northeastern University.  
The project simulates a professional pet care booking platform where users can explore services, view information, and book appointments.  
It showcases **enterprise-level project structure**, **accessibility compliance (WCAG)**, and **modern UI/UX best practices**.

---

## ✨ Features
- **Multi-page SPA navigation**: Home, About, Services, Booking, Contact, Privacy  
- **Responsive design**: Works across mobile, tablet, desktop (360px → 1200px)  
- **Accessibility**: Semantic HTML, ARIA attributes, skip links, alt text for images  
- **Forms with validation**: Booking form includes input limitations and required fields  
- **Theme switcher**: Light/Dark mode support via custom hook (`useThemes.js`)  
- **Reusable components**: Cards, modal dialogs, testimonial carousel, dynamic updates  
- **Organized architecture**: `components/`, `pages/`, `layout/`, `hooks/`, `styles/`, `assets/`

---

## 🛠️ Tech Stack
- **React 18 + Vite** – SPA framework & build tool  
- **JavaScript (ES6+)** – Component logic & form handling  
- **CSS (multi-file, semantic, BEM-style)** – Responsive, maintainable styling  
- **Accessibility (WCAG 2.1 AA)** – Semantic HTML, ARIA attributes, skip links  
- **Unsplash + Google Fonts Icons** – Licensed visuals  

---
## 📂 Project Structure
src/  
├── assets/ # fonts, images  
├── components/  
│ ├── common/ # Card, Modal, ThemeSwitcher, TestimonialsCarousel  
│ ├── features/ # DynamicUpdates, Subscribe, TestimonialsCarousel  
│ └── layout/ # Header, Footer  
├── hooks/ # useThemes.js  
├── pages/ # Home, About, Services, Booking, Contact, Privacy  
├── styles/ # base, themes, utils  
├── App.jsx # App entry  
└── main.jsx # React entry point  

---
## 🚀 Getting Started
```bash
npm install
npm run dev
```
---
🎯 Highlights
- Designed with scalability in mind (modular folder structure, reusable components)
- Demonstrates attention to detail in UI/UX (spacing, color palette, typography)  
- Fully responsive and accessible, suitable as a portfolio project to showcase front-end expertise  
