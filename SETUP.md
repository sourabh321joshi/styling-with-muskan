# Quick Setup Guide

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open Browser**
   - The app will automatically open at `http://localhost:3000`

## Project Structure

```
CLIENT/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── TopBar.jsx     # Top bar with social icons
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── HeroBanner.jsx # Hero carousel
│   │   ├── CategoryList.jsx # Service categories
│   │   ├── ProductGrid.jsx  # Product listings
│   │   ├── BestSeller.jsx   # Best sellers section
│   │   └── Footer.jsx       # Footer
│   ├── data/
│   │   └── dummyData.js     # Sample data
│   ├── App.jsx              # Main app component
│   ├── index.js             # React entry point
│   └── index.css            # Tailwind CSS
├── package.json
├── tailwind.config.js       # Tailwind configuration
└── postcss.config.js        # PostCSS configuration
```

## Features Implemented

✅ Top Bar with social icons and tagline
✅ Responsive Navbar with search bar
✅ Hero Banner carousel (Swiper.js)
✅ Category cards with hover effects
✅ Product grid with wishlist functionality
✅ Best sellers section
✅ Professional footer
✅ Mobile responsive design
✅ Premium pink/gold/white theme
✅ Star ratings and discount badges

## Customization

- **Colors**: Edit `tailwind.config.js` to change theme colors
- **Products**: Update `src/data/dummyData.js` with your data
- **Images**: Replace Unsplash URLs with your own images
- **Content**: Edit component files to update text/content

## Build for Production

```bash
npm run build
```

The optimized build will be in the `build/` folder.

