# 🖼️ Image CRUD App (React + TypeScript + Vite)

This is a React single-page application (SPA) built to match a provided mockup and fulfill all CRUD functionality for image management.

---

## ✅ Features

- **Upload Images**  
  Accepts image files only, with preview support. Uploaded images are stored in memory via a mock API.

- **Search Images by Name**  
  Filter displayed images in real-time using a search input.

- **List All Uploaded Images**  
  Images are displayed in a responsive 2x2 grid with their filenames shown.

- **Delete Individual Images**  
  Each image includes a delete button that removes it from the mock API and UI.

---

## 🛠️ Tech Stack

- React with Vite (scaffolded using `vite@latest`)
- TypeScript
- CSS (centralized in `/src/styles/global.css`)
- Mock API (in-memory image storage in `/src/api/mockApi.ts`)
- No external state libraries or backend setup required

---

## ⚙️ Getting Started

You can run this project with just two commands:

```bash
npm install
npm start
