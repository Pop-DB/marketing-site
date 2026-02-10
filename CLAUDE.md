# PopDB Black and White Website

## App Overview
This is the marketing landing page for PopDB - a backend platform designed for vibe coders, indie hackers, and solopreneurs. The site showcases PopDB's features including databases, authentication, hosting, and REST APIs.

**Current Status**: The site is built as a static HTML landing page (`index.html`) with ~3000 lines of interactive JavaScript. This HTML site is the **main product** and primary focus for all development work.

**Note**: There is also a React/TypeScript/Vite setup in the `src/` directory from an earlier conversion attempt, but this is **secondary/deprecated**. All active development should focus on the HTML site.

## Key Features
- Responsive landing page with black and white theme
- Use case pages for different user personas (Indie Hackers, Solopreneurs, Vibe Coders)
- Recipe app demo page
- Interactive deployment animations
- Feature cards with hover effects
- Scroll reveal animations
- Canvas confetti effects

## Tech Stack

### Main Site (HTML)
- **HTML5** - Static landing page structure
- **Vanilla JavaScript** - Interactive features and animations
- **Tailwind CSS** - Utility-first styling with CDN
- **Iconify** - Icon system via CDN
- **canvas-confetti** - Deployment celebration effects

### Styling
- Custom color palette: canvas (#FAFAFA), surface (#FFFFFF), obsidian (#171717), subtle (#737373), border (#E5E5E5), accent (#3B82F6)
- Custom fonts: Inter (sans), JetBrains Mono (mono)
- Custom animations: marquee scrolling, fade-in-up reveals, scroll reveals
- Glassmorphism effects

### React Setup (Secondary/Deprecated)
- React 19, TypeScript, Vite, React Router DOM
- **Note**: This is from an earlier conversion attempt and is not actively maintained

### Backend (Future)
- **PopDB** - PostgreSQL database with Auth and REST API (when database is created)

## Project Structure

```
popdb-black-and-white-website/
├── index.html                        # ⭐ MAIN LANDING PAGE (~3000 lines)
├── use-cases/
│   ├── indie-hackers.html           # Use case page for indie hackers
│   ├── solopreneur.html             # Use case page for solopreneurs
│   └── vibe-coder.html              # Use case page for vibe coders
├── recipe-app.html                   # Recipe app demo page
├── public/
│   ├── Black and White Marketing gifs/
│   ├── Black and White Website photos/
│   ├── Dark backgrounds Carousel/
│   ├── Background Breakpoint image/
│   └── *.png (various image assets)
├── src/                              # (React code - secondary/deprecated)
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js                # (For React build)
├── postcss.config.js                 # (For React build)
├── vite.config.ts                    # (For React build)
├── package.json
└── tsconfig.json
```

## Development Commands

### HTML Site (Main Product)
The HTML site can be opened directly in a browser:
- Open `index.html` in your browser, or
- Use a local server: `python3 -m http.server 8000` then visit `http://localhost:8000`

### React Build (Secondary/Deprecated)
If you need to work with the React version:

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Deployment

### Deploy HTML Site to PopDB Hosting
Deploy the HTML site directly:
```bash
# Use PopDB MCP tools to deploy the root directory containing index.html
# The app will be hosted at: popdb-black-and-white-website.bryan-1.apps.popdb.click
```

Alternatively, if using the React build:
```bash
npm run build
# Then use PopDB MCP tools to deploy the dist/ folder
```

## Original Source
The original static HTML site was located at:
`/Users/bryanoki/Code/Builder App Focused - Black and White PopDB copy/`

The current `index.html` is based on that original HTML site.

## HTML Site Architecture

The main `index.html` file (~3000 lines) contains:
- ✅ Responsive navigation with dropdown menus
- ✅ Hero section with interactive demo (tabbed chat interface)
- ✅ Feature cards with hover effects
- ✅ Marquee scrolling sections
- ✅ Scroll reveal animations
- ✅ Canvas confetti effects on deployment
- ✅ Footer (currently minimal - logo only)
- ✅ Tailwind CSS styling via CDN
- ✅ Iconify icons via CDN

### Working with the HTML Site

All JavaScript is inline in `index.html`. Key interactive features:
- Hero demo with tabbed sequences (schema, integrations, teammates)
- Deployment button with confetti animation
- Scroll-triggered reveal animations
- Marquee hover pause/resume effects

When making changes:
1. Edit `index.html` directly
2. Test in browser (open file or use local server)
3. Check responsive behavior (mobile, tablet, desktop)

## Troubleshooting

### HTML Site Issues

**Images Not Loading:**
- Images in public/ are accessible via relative paths: `public/filename.png`
- For subdirectories: `public/Black and White Marketing gifs/filename.gif`
- Check browser console for 404 errors

**Tailwind Classes Not Working:**
- The HTML site uses Tailwind CSS via CDN (check `<script>` tags in `<head>`)
- Ensure the Tailwind CDN script is loaded
- Custom colors are defined in the inline config

**JavaScript Errors:**
- Open browser console to see errors
- Most JavaScript is inline in `<script>` tags at the bottom of `index.html`

### React Build Issues (if needed)

**Tailwind Classes Not Working:**
- Make sure `npm run dev` is running
- Check that `tailwind.config.js` content paths include your components
- Verify `@import 'tailwindcss';` is at the top of `src/index.css`

**Routing 404 Errors:**
- Use `<Link>` from react-router-dom instead of `<a>` tags
- Ensure all routes are defined in `src/App.tsx`

## Updating This File

**This CLAUDE.md file should be updated whenever:**
- New major features are added to the app
- The project structure changes significantly
- New dependencies are added that affect the architecture
- Deployment procedures change
- New pages or major components are added

When updating, maintain the same structure and keep it concise but comprehensive. Future Claude sessions rely on this file to quickly understand the project.
