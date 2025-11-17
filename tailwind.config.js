/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'beauty-pink': '#FFB6C1',
        'beauty-pink-dark': '#FF91A4',
        'beauty-pink-light': '#FFE4E1',
        'beauty-gold': '#D4AF37',
        'beauty-gold-light': '#F5E6D3',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

