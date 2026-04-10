# 🔥 Hot Wheels Fan Zone

Community fan site for Hot Wheels collectors — browse backgrounds, artworks, and dioramas, or upload your own.

**Repo:** https://github.com/remopunk/Hotwhales

> Fan-made website. Hot Wheels is a registered trademark of Mattel, Inc.

---

## 🚀 Upload to GitHub from Android

### Option A — GitHub Website (no app needed)

1. Open Chrome on Android and go to:
   `https://github.com/remopunk/Hotwhales`
2. Tap **Add file → Upload files**
3. Tap **choose your files** and select all the files from this zip
4. Scroll down, write a commit message like `initial upload`
5. Tap **Commit changes** ✅

> ⚠️ GitHub web upload does **not** support folders. Upload root files first, then repeat for each subfolder (`src/`, `src/pages/`, `.github/workflows/`, etc.)

---

### Option B — Termux (Android terminal, recommended)

1. Install **Termux** from F-Droid: https://f-droid.org/packages/com.termux/
2. Open Termux and run:

```bash
# One-time setup
pkg update && pkg install git nodejs-lts unzip -y

# Configure git with your GitHub credentials
git config --global user.name "remopunk"
git config --global user.email "your@email.com"

# Unzip the project (adjust path to where you saved the zip)
cd ~
unzip /sdcard/Download/hotwhales_fixed.zip
cd hw_fixed

# Connect to your repo and push
git init
git remote add origin https://github.com/remopunk/Hotwhales.git
git add .
git commit -m "initial commit"
git branch -M main
git push -u origin main
```

3. When prompted for password, use a **GitHub Personal Access Token** (not your password):
   - Go to GitHub → Settings → Developer settings → Personal access tokens → Generate new token
   - Select scope: `repo`
   - Copy the token and paste it as your password in Termux

---

## 🌐 Deploy to Vercel (after GitHub push)

1. Go to https://vercel.com → **New Project**
2. Import `remopunk/Hotwhales`
3. Leave all settings as default (Vite is auto-detected)
4. Click **Deploy** ✅

Every future push to `main` auto-deploys via the GitHub Action.

---

## 💻 Local Development

```bash
npm install
npm run dev      # dev server at localhost:5173
npm run build    # production build
npm run preview  # preview production build
```

---

## Project Structure

```
.github/
  workflows/
    deploy.yml       # Auto-deploy to Vercel on push
src/
  pages/
    HomePage.tsx
    BackgroundsPage.tsx
    ArtworksPage.tsx
    DioramasPage.tsx
    UploadPage.tsx
  components/ui/     # shadcn components
  App.tsx            # Layout, nav, footer, routing
  index.css          # Global Tailwind + glow utilities
  main.tsx           # React entry point
index.html           # HTML shell with SEO meta tags
vite.config.ts       # Vite + path aliases
tailwind.config.js   # Tailwind + custom HW theme
tsconfig.json        # TypeScript project references
tsconfig.app.json    # TS config for React source
tsconfig.node.json   # TS config for vite.config.ts
vercel.json          # SPA routing rewrites
```
