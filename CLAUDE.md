# PopDB Marketing Website

## Overview
Marketing landing page for PopDB - a backend platform for vibe coders, indie hackers, and solopreneurs.

## Tech Stack
- **Static HTML** - Single page with inline CSS and JavaScript
- **Tailwind CSS** - Via CDN
- **Iconify** - Via CDN for icons
- **Canvas Confetti** - Via CDN for animations

## Project Structure

```
marketing-site/
├── index.html                          # Landing page
├── public/
│   └── favicon.png
├── Background Breakpoint image/        # Hero section image
├── Black and White Marketing gifs/     # Animated GIFs
├── Black and White Website photos/     # Photo assets
├── Dark backgrounds Carousel/          # Carousel images
├── .github/workflows/deploy.yml        # GitHub Pages deployment
├── build.sh                            # Build script
├── CNAME                               # Custom domain (www.popdb.ai)
└── dist/                               # Build output (gitignored)
```

## Deployment

Deployed via GitHub Pages with GitHub Actions. Pushes to `main` trigger automatic deployment.

```bash
./build.sh    # Copies static files to dist/
```

**Custom Domain:** www.popdb.ai
**GitHub Repo:** Pop-DB/marketing-site

## Design

### Color Palette
- **Canvas:** #FAFAFA (background)
- **Surface:** #FFFFFF (cards)
- **Obsidian:** #171717 (dark text)
- **Subtle:** #737373 (muted text)
- **Border:** #E5E5E5 (dividers)
- **Accent:** #3B82F6 (highlights)

### Fonts
- **Sans:** Inter
- **Mono:** JetBrains Mono
