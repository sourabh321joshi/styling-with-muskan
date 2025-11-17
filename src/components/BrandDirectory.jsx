import React from 'react';
import { motion } from 'framer-motion';

const BrandDirectory = () => {
  const directories = [
    {
      title: 'Hair Studio Services',
      items: [
        'Trim',
        'Haircut with Blow Dry',
        'Straightening/Curls',
        'Blow Dryer',
        'Loreal Inoa Root Touch-Up',
        'Global Hair Color',
        'Keratin Treatment',
        'Botox Treatment',
        'Hair Cut Only',
        'Hair Cut Plus Dryer',
      ],
    },
    {
      title: 'Makeup Services',
      items: [
        'Party Makeup',
        'Pre-Wedding Makeup',
        'Bridal Makeup',
        'Engagement Makeup',
        'Reception Look',
        'Baby Shower Makeup',
      ],
    },
    {
      title: 'Facial Services',
      items: [
        'Lotus Facial',
        'Hydration Facial',
        'O3 Facial',
        'Detan Clean-Up',
        'Brightening Mask',
      ],
    },
    {
      title: 'Hair Care Services',
      items: [
        'Loreal Hair Spa',
        'Matrix Hair Spa',
        'Keratin Mask',
        'Nano Plastia',
        'Straightening/Smoothing',
      ],
    },
    {
      title: 'Coloring Services',
      items: [
        'Signature Highlights',
        'Balayage Highlights',
        'Majirel Root Application',
        'Schwarzkopf Global Color',
      ],
    },
    {
      title: 'Wedding Makeup Packages',
      items: ['Budget Bridal', 'Standard Bridal', 'Premium Bridal', 'Luxury Bridal'],
    },
    {
      title: 'Nail Art',
      items: ['Gel Polish', 'Temporary Extension', 'Acrylic Extension', 'Custom Nail Art'],
    },
    {
      title: 'Waxing',
      items: ['Full Body (Honey Wax)', 'Full Body (Rica Wax)', 'Half Body Honey Combo', 'Half Body Oil Combo'],
    },
  ];

  return (
    <section className="bg-gray-50 border-t border-gray-200 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.07 },
            },
          }}
        >
          {directories.map((directory) => (
            <motion.div
              key={directory.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
            >
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                {directory.title}
              </h3>
              <div className="text-sm text-gray-800 space-y-2">
                {directory.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandDirectory;

