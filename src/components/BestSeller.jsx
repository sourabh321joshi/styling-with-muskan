import React from 'react';
import { FaHeart } from 'react-icons/fa';

const BestSeller = ({ bestSellers }) => {

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-4">
            Best ssssssss
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
            Popular Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="relative group"
            >
              {/* Wishlist Button */}
              <button className="absolute top-2 right-2 z-10 text-black hover:text-gray-600 transition-colors">
                <FaHeart className="text-lg text-gray-400" />
              </button>

              {/* Product Image */}
              <div className="relative w-full mb-4" style={{ paddingBottom: '100%' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover bg-gray-50"
                />
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="text-sm text-black font-light mb-2 tracking-wide">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600">
                  Rs. {product.discountedPrice.toFixed(1)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;

