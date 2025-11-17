import React from 'react';

const CategoryList = ({ categories }) => {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-4">
            Beauty Services
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
            Explore Our Services
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full mb-4" style={{ paddingBottom: '100%' }}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              {/* Category Name */}
              <h3 className="text-sm text-black text-center font-light tracking-wide">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;

