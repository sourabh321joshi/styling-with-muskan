import React from 'react';
import { motion } from 'framer-motion';

const CategoryList = ({ categories }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.05, ease: 'easeOut' },
    }),
  };

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-4">
            Beauty Services
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
            Explore Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="group cursor-pointer"
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Image Container */}
              <div className="relative w-full mb-4" style={{ paddingBottom: '100%' }}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Category Name */}
              <h3 className="text-sm text-black text-center font-light tracking-wide">
                {category.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;

