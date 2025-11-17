import React from 'react';

const ExperienceSection = () => {
  const serviceHighlights = [
    'Home Service in 60 Minutes across Indore City',
    'Advance Booking Slots Available Anytime',
    'Live Support 8AM – 11PM, All Days',
    'Easy Reschedule & Cancellation within 1 hour',
    '5% Extra Discount on bookings above ₹1500',
  ];

  return (
    <section className="bg-white border-t border-gray-200 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Testimonial */}
          <div className="border border-gray-200 p-8">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">
              Testimonial
            </p>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&h=200&fit=crop&q=90"
                alt="Muskan Poswal"
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <h3 className="text-sm font-semibold tracking-wide mb-1">
                MUSKAN POSWAL
              </h3>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Founder & CEO · StylingWithMuskan
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                “Every woman deserves the luxury of salon services at home —
                with comfort, care, and confidence.”
              </p>
            </div>
          </div>

          {/* Offer card */}
          <div className="relative border border-gray-200">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&h=1200&fit=crop&q=90)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="relative bg-white/80 backdrop-blur-sm m-10 p-10 text-center">
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-3">
                20% Discount
              </p>
              <h3 className="text-2xl font-light text-black mb-2">
                Monsoon Glow Offer
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Book any facial @ ₹499
              </p>
              <button className="text-sm tracking-wide underline hover:no-underline">
                Book Now
              </button>
            </div>
          </div>

          {/* Service highlights */}
          <div className="border border-gray-200 p-8">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">
              Our Services
            </p>
            <ul className="space-y-4 text-sm text-gray-700">
              {serviceHighlights.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

