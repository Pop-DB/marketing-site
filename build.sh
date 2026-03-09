#!/bin/bash

echo "Building PopDB website..."

rm -rf dist
mkdir -p dist

cp index.html dist/
cp -r public dist/
cp CNAME dist/ 2>/dev/null || true

echo "Build complete! Output in dist/"
echo "Files: $(find dist -type f | wc -l | tr -d ' ')"
echo "Size: $(du -sh dist | cut -f1)"
