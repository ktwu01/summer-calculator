#!/bin/bash
# Script to test GitHub Pages deployment locally
# This simulates how GitHub Pages will serve your site

echo "Testing GitHub Pages deployment locally..."
echo ""
echo "Creating temporary directory structure that matches GitHub Pages..."

# Create a temp directory to simulate GitHub Pages structure
TEMP_DIR=$(mktemp -d)
mkdir -p "$TEMP_DIR/summer-calculator"

# Copy the built files to simulate GitHub Pages structure
echo "Copying built files..."
cp -r dist/* "$TEMP_DIR/summer-calculator/"

echo ""
echo "✅ Test setup complete!"
echo ""
echo "Starting server at http://localhost:8081"
echo "Your site will be available at: http://localhost:8081/summer-calculator/"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start server from temp directory (simulating GitHub's root)
cd "$TEMP_DIR"
python3 -m http.server 8081

# Cleanup on exit
trap "rm -rf $TEMP_DIR" EXIT
