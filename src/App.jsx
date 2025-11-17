import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategoryList from './components/CategoryList';
import ProductGrid from './components/ProductGrid';
import ExperienceSection from './components/ExperienceSection';
import BrandDirectory from './components/BrandDirectory';
import BestSeller from './components/BestSeller';
import Footer from './components/Footer';
import { heroSlides, categories, products, bestSellers } from './data/dummyData';
import './index.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Navbar />
      <main>
        <HeroBanner slides={heroSlides} />
        <CategoryList categories={categories} />
        <ProductGrid products={products} title="Popular Services" />
        <ExperienceSection />
        <BrandDirectory />
        {/* <BestSeller bestSellers={bestSellers} /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

