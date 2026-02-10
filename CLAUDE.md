# PopDB Black and White Website

## App Overview
This is the marketing landing page for PopDB - a backend platform designed for vibe coders, indie hackers, and solopreneurs. The site showcases PopDB's features including databases, authentication, hosting, and REST APIs.

## Tech Stack
- **Static HTML** - Standalone HTML files with inline CSS and JavaScript
- **Tailwind CSS** - Via CDN for styling
- **Iconify** - Via CDN for icons
- **Canvas Confetti** - Via CDN for deployment animations

## Project Structure

```
popdb-black-and-white-website/
├── index.html                  # Main landing page
├── recipe-app.html             # Recipe app demo page
├── use-cases/
│   ├── indie-hackers.html
│   ├── solopreneur.html
│   └── vibe-coder.html
├── public/
│   ├── components/
│   │   └── nav.html           # Shared navigation component
│   ├── landing.html           # Alternative landing page
│   └── use-cases/             # Alternative use case pages
├── dist/                      # Build output (generated)
└── [image assets]             # Various PNG/JPG/GIF files
```

## Deployment

### PopDB Hosting
The site is deployed to PopDB hosting:
- **App ID:** popdbsite (8b1a9196-71b9-402e-a3e6-23e42caa5268)
- **Live URL:** https://popdbsite.bookis-production.apps.popdb.ai
- **Custom Domain:** www.popdb.ai

### Build & Deploy

Build the site by copying all static files to the `dist/` folder:

```bash
# Build the site
npm run build
# or
./build.sh

# Clean dist folder
npm run clean
```

The build script copies:
- HTML files (index.html, recipe-app.html)
- Directories (use-cases/, components/, public/)
- Image assets (*.png, *.jpg, *.gif and asset folders)

**Deploy to PopDB:**
```bash
# After building, deploy using MCP tools
mcp__popdb__deploy_app(app_id="popdbsite", dist_path="<path>/dist")
```

## Key Features
- Responsive landing page with black and white theme
- Use case pages for different user personas
- Recipe app demo page
- Interactive deployment animations
- Feature cards with hover effects
- Scroll reveal animations
- Canvas confetti effects
- Logo marquee with pause-on-hover

## Color Palette
- **Canvas:** #FAFAFA (background)
- **Surface:** #FFFFFF (cards)
- **Obsidian:** #171717 (dark text)
- **Subtle:** #737373 (muted text)
- **Border:** #E5E5E5 (dividers)
- **Accent:** #3B82F6 (highlights)

## Fonts
- **Sans:** Inter
- **Mono:** JetBrains Mono

## Recent Changes
- Removed React app and build tooling (Vite, TypeScript, etc.)
- Fixed integration card hover border clipping (overflow-y-visible)
- Removed "ROLE" label from Use Cases dropdown in navigation
- Simplified to static HTML only

## Updating This File
This CLAUDE.md file should be updated whenever:
- New pages are added
- The deployment process changes
- New integrations or major features are added
- The project structure changes significantly
