#!/bin/bash

# Build script for PopDB website
# Copies all static files to dist/ directory for deployment

echo "Building PopDB website..."

# Remove old dist folder
rm -rf dist

# Create dist directory
mkdir -p dist

# Copy HTML files
echo "Copying HTML files..."
cp index.html dist/
cp recipe-app.html dist/

# Copy directories
echo "Copying directories..."
cp -r use-cases dist/
cp -r components dist/
cp -r public dist/

# Copy image assets
echo "Copying image assets..."
cp -r "Background Breakpoint image" dist/ 2>/dev/null || true
cp -r "Black and White Marketing gifs" dist/ 2>/dev/null || true
cp -r "Black and White Website photos" dist/ 2>/dev/null || true
cp -r "Dark backgrounds Carousel" dist/ 2>/dev/null || true
cp *.png dist/ 2>/dev/null || true
cp *.jpg dist/ 2>/dev/null || true
cp *.gif dist/ 2>/dev/null || true

echo "Build complete! Output in dist/"
echo "Files: $(find dist -type f | wc -l | tr -d ' ')"
echo "Size: $(du -sh dist | cut -f1)"
