#!/bin/bash
# Setup script to help with first-time installation
# This script checks and installs all necessary dependencies

echo "🚀 Portfolio Website Setup"
echo "==========================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed."
    echo "Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js is installed: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✅ npm is installed: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! Next steps:"
    echo ""
    echo "1. Start the development server:"
    echo "   npm run dev"
    echo ""
    echo "2. Open http://localhost:3000 in your browser"
    echo ""
    echo "3. Edit src/app/page.tsx to customize your portfolio"
    echo ""
    echo "4. Read QUICKSTART.md for quick customization tips"
    echo ""
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
