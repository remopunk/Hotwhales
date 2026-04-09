# 🔥 Hot Wheels Fan Zone

A community fan site for Hot Wheels collectors — browse and download free backgrounds, artworks, and dioramas, or upload your own creations.

**GitHub:** https://github.com/remopunk/Hotwhales

> **Disclaimer:** This is a fan-made website. Hot Wheels is a registered trademark of Mattel, Inc.

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** (build tool)
- **React Router v7** (client-side routing)
- **Tailwind CSS v3** (styling)
- **shadcn/ui** (UI components)
- **Lucide React** (icons)

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deploy to Vercel

1. Push this repo to GitHub: https://github.com/remopunk/Hotwhales
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Vercel auto-detects Vite — leave settings as default
4. Click **Deploy** ✅

The `vercel.json` file handles SPA routing so all routes work correctly.

---

## Project Structure

```
src/
├── pages/
│   ├── HomePage.tsx
│   ├── BackgroundsPage.tsx
│   ├── ArtworksPage.tsx
│   ├── DioramasPage.tsx
│   └── UploadPage.tsx
├── components/
│   └── ui/          # shadcn components
├── App.tsx           # Root layout, nav, footer, routing
├── App.css           # App-level styles
├── index.css         # Global Tailwind styles + utilities
└── main.tsx          # React entry point
```
