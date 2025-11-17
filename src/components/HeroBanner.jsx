import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroBanner = ({ slides }) => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full" style={{ paddingBottom: '66.67%' }}>
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
              </div>

              {/* Minimal Text Overlay - Bottom Center */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 py-12">
                <div className="container mx-auto px-6 text-center">
                  <p className="text-xs uppercase tracking-widest text-gray-600 mb-2">
                    {slide.title}
                  </p>
                  <h2 className="text-4xl md:text-6xl font-light text-black mb-4 tracking-tight">
                    {slide.subtitle}
                  </h2>
                  <p className="text-sm text-gray-600 mb-6">
                    {slide.price}
                  </p>
                  <a href="#categories" className="text-black text-sm underline hover:no-underline transition-all">
                    {slide.cta}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;

