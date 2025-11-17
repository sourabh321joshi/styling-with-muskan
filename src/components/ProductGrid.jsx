import React from 'react';
import { motion } from 'framer-motion';

const ProductGrid = ({ products, title = "Featured Products" }) => {

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-4">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Product Image */}
              <div className="relative w-full mb-4" style={{ paddingBottom: '100%' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover bg-gray-50 transition duration-500 group-hover:scale-105"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

