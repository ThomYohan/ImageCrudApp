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

## 🕒 Time Spent

It took roughly **3 hours** to build the full application.

---

## 📝 Notes

I tinkered with styling as well, but admittedly, that's what I would have spent more time on to improve the app. More specifically, building out animations when hovering and when images enter the viewport. If given additional time, I would focus on:

- Adding smooth hover and entrance animations
- Upload validation feedback (e.g., file size/type)
- Persisting image data via `localStorage` or a backend
- Responsive layout enhancements
- Accessibility improvements (keyboard nav, ARIA roles)
- Styling consistency using a UI library like Tailwind or MUI
- Basic test coverage for upload, search, and delete behaviors

---

## ⚙️ Getting Started

You can run this project with just two commands:

```bash
npm install
npm start
