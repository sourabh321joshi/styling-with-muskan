# Beauty Salon Landing Page

A modern, responsive React landing page for a beauty services website with a premium design.

## Features

- 🎨 Modern, clean UI with premium beauty salon aesthetics
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎠 Hero banner carousel with Swiper.js
- 🛍️ Product grid with wishlist functionality
- ⭐ Star ratings and discount badges
- 🎯 Category cards with hover effects
- 💖 Best sellers section
- 🔍 Search functionality
- 🛒 Shopping cart and wishlist icons

## Tech Stack

- React 18
- Tailwind CSS
- Swiper.js (for carousel)
- React Icons

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── TopBar.jsx          # Top bar with social icons and tagline
│   ├── Navbar.jsx          # Main navigation with search and icons
│   ├── HeroBanner.jsx      # Hero carousel section
│   ├── CategoryList.jsx    # Service categories grid
│   ├── ProductGrid.jsx     # Featured products grid
│   ├── BestSeller.jsx      # Best sellers section
│   └── Footer.jsx          # Footer component
├── data/
│   └── dummyData.js        # Dummy data for products and categories
├── App.jsx                 # Main app component
├── index.js                # React entry point
└── index.css               # Tailwind CSS and custom styles
```

## Design Theme

- **Colors**: Soft pink (#FFB6C1), Gold accents (#D4AF37), White
- **Typography**: Playfair Display (headings), Inter (body)
- **Style**: Premium, minimal, modern beauty salon aesthetic

## Customization

- Update product data in `src/data/dummyData.js`
- Modify colors in `tailwind.config.js`
- Adjust component styles in individual component files

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

