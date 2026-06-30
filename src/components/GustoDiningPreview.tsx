import React from 'react';
import { motion } from 'motion/react';

export default function GustoDiningPreview() {
  const screenshots = [
    '/images/gusto_dining/Screenshot_1.png',
    '/images/gusto_dining/Screenshot_2.png',
    '/images/gusto_dining/Screenshot_3.png',
    '/images/gusto_dining/Screenshot_4.png',
    '/images/gusto_dining/Screenshot_5.png',
    '/images/gusto_dining/Screenshot_6.png',
  ];

  return (
    <div className="bg-white flex flex-col items-center">
      <div className="w-full relative h-[40vh] md:h-[60vh] overflow-hidden">
        <img loading="lazy" src="/images/gusto_dining/cover.jpg" alt="Gusto Dining Cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
           <h2 className="text-4xl md:text-7xl font-display font-black text-white uppercase tracking-tighter">Gusto Dining</h2>
        </div>
      </div>

      {screenshots.map((src, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="w-full"
        >
          <img 
            src={src} 
            alt={`Gusto Dining Screenshot ${index + 1}`} 
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>
      ))}
      
      {/* Footer / CTA Simulation */}
      <div className="w-full py-12 sm:py-20 px-6 bg-zinc-950 text-white text-center">
        <h4 className="text-2xl xs:text-3xl md:text-5xl font-display font-black uppercase mb-4 sm:mb-8">
          Elevate Your <span className="text-brand-primary">Dining Experience</span>
        </h4>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10">
          We combine culinary excellence with a digital-first approach to reservations and customer engagement.
        </p>
        <button className="px-8 sm:px-10 py-3 sm:py-4 bg-brand-primary text-white font-bold rounded-full uppercase tracking-widest text-[10px] sm:text-sm hover:scale-105 transition-transform">
          View Live Project
        </button>
      </div>
    </div>
  );
}
