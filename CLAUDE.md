# PopDB Black and White Website

## App Overview
This is the marketing landing page for PopDB - a backend platform designed for vibe coders, indie hackers, and solopreneurs. The site showcases PopDB's features including databases, authentication, hosting, and REST APIs.

**Current Status**: The project has been initialized with React/TypeScript/Vite. The original HTML landing page (3000+ lines with complex JavaScript interactions) is being progressively converted to React components.

## Key Features
- Responsive landing page with black and white theme
- Use case pages for different user personas (Indie Hackers, Solopreneurs, Vibe Coders)
- Recipe app demo page
- Interactive deployment animations
- Feature cards with hover effects
- Scroll reveal animations
- Canvas confetti effects

## Tech Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS v4** - Utility-first styling with custom theme

### Styling
- Custom color palette: canvas (#FAFAFA), surface (#FFFFFF), obsidian (#171717), subtle (#737373), border (#E5E5E5), accent (#3B82F6)
- Custom fonts: Inter (sans), JetBrains Mono (mono)
- Custom animations: marquee scrolling, fade-in-up reveals
- Glassmorphism effects

### Backend
- **PopDB** - PostgreSQL database with Auth and REST API (when database is created)

## Project Structure

```
popdb-black-and-white-website/
├── public/
│   ├── Black and White Marketing gifs/
│   ├── Black and White Website photos/
│   ├── Dark backgrounds Carousel/
│   ├── Background Breakpoint image/
│   └── *.png (various image assets)
├── src/
│   ├── components/          # Reusable React components (to be created)
│   ├── pages/
│   │   ├── Home.tsx        # Main landing page
│   │   ├── RecipeApp.tsx   # Recipe app demo
│   │   └── use-cases/
│   │       ├── IndieHackers.tsx
│   │       ├── Solopreneur.tsx
│   │       └── VibeCoder.tsx
│   ├── App.tsx             # Main app with routing
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles and Tailwind imports
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.ts          # Vite configuration
├── package.json            # Dependencies
└── tsconfig.json           # TypeScript configuration
```

## Development Commands

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
The site will be available at http://localhost:5173

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## Deployment

### Deploy to PopDB Hosting
Once the PopDB database is created, deploy using:
```bash
npm run build
# Then use PopDB MCP tools to deploy the dist/ folder
```

The app will be hosted at: `popdb-black-and-white-website.bryan-1.apps.popdb.click` (or similar)

## Original Source
The original static HTML site is located at:
`/Users/bryanoki/Code/Builder App Focused - Black and White PopDB copy/`

This React version is a conversion of that HTML site.

## Next Steps (Progressive Enhancement)

The current implementation includes:
- ✅ React/TypeScript/Vite setup
- ✅ Tailwind CSS configuration with custom theme
- ✅ Image assets copied to public/
- ✅ Routing structure with React Router
- ✅ Basic page components (placeholders)

### To Complete the Conversion:

1. **Convert Hero Section** - Extract the hero/banner from index.html into a Hero component
2. **Convert Features** - Create feature card components with hover animations
3. **Convert Interactive Demo** - Port the deployment animation JavaScript to React state/effects
4. **Add Navigation** - Create Navbar component with dropdown menus
5. **Add Footer** - Extract footer from HTML
6. **Port Animations** - Convert scroll reveal and marquee animations to React
7. **Add Confetti Integration** - Set up canvas-confetti for deployment interactions
8. **Convert Use Case Pages** - Port the full content from the use-cases/*.html files
9. **Convert Recipe App Page** - Port recipe-app.html content

The HTML is extensive (~3000 lines) with complex JavaScript interactions. The conversion can be done incrementally, starting with the most important sections first.

## Troubleshooting

### Tailwind Classes Not Working
- Make sure `npm run dev` is running
- Check that `tailwind.config.js` content paths include your components
- Verify `@import 'tailwindcss';` is at the top of `src/index.css`

### Routing 404 Errors
- Use `<Link>` from react-router-dom instead of `<a>` tags
- Ensure all routes are defined in `src/App.tsx`

### Images Not Loading
- Images in public/ are accessible via `/filename.ext` in src code
- For images in subdirectories: `/Black and White Marketing gifs/filename.gif`

### PopDB Database Creation Error
If you get "Internal Server Error" when creating the database:
- Try a different database name (alphanumeric, underscores only)
- Check PopDB service status
- The app can still be developed locally without the database

## Updating This File

**This CLAUDE.md file should be updated whenever:**
- New major features are added to the app
- The project structure changes significantly
- New dependencies are added that affect the architecture
- Deployment procedures change
- New pages or major components are added

When updating, maintain the same structure and keep it concise but comprehensive. Future Claude sessions rely on this file to quickly understand the project.
