import React from 'react';

const ProductGrid = ({ products, title = "Featured Products" }) => {

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-4">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="relative group">
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

export default ProductGrid;

