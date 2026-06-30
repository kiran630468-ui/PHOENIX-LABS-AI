import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Stethoscope, Trophy, Sparkles, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GrowthSystems() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const systems = [
    {
      title: "Healthcare Growth System",
      category: "Hospitals & Clinics",
      description: "Build deep patient trust with premium digital presence and automated booking workflows.",
      features: ["Trust-Building Architecture", "Seamless Appointment Systems", "WhatsApp API Integration", "Localized Patient SEO"],
      icon: <Stethoscope className="text-brand-blue" />,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Fitness Growth System",
      category: "Gyms & Trainers",
      description: "Transform your facility into a high-ticket membership machine with elite funnels.",
      features: ["High-Conversion Funnels", "Member Transformation Portals", "Trainer Management UI", "Lead Capture Automation"],
      icon: <Trophy className="text-brand-orange" />,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Beauty & Clinic System",
      category: "Salons & Estheticians",
      description: "Luxury digital experiences for premium beauty brands and aesthetic clinics.",
      features: ["Visual-First Booking", "Social Media Integration", "Automated Review Cycles", "VIP Management Portal"],
      icon: <Sparkles className="text-brand-gold" />,
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      // Run once on load/resize
      checkScroll();
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const amount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - amount : scrollLeft + amount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="systems" ref={containerRef} className="py-24 bg-transparent transition-colors duration-500 relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:40px_40px]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
            >
              Strategic Architecture
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold text-brand-text leading-[0.9]"
            >
              WE DON'T BUILD <br />
              WEBSITES. WE BUILD <br />
              <span className="text-brand-blue">GROWTH SYSTEMS.</span>
            </motion.h2>
          </div>
          <div className="mt-8 md:mt-0 max-w-xs flex flex-col justify-end gap-6">
            <p className="text-brand-slate text-sm leading-relaxed">
              Ditch the generic digital templates. Phoenix Labs engineers industry-specific 
              powerhouses designed for the high-end 2026 market.
            </p>
            {/* Scroll Navigation Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                className={`w-12 h-12 rounded-full border border-brand-text/10 flex items-center justify-center transition-all ${
                  canScrollLeft 
                    ? 'hover:bg-brand-primary/10 hover:border-brand-primary text-brand-text cursor-pointer' 
                    : 'opacity-40 text-brand-slate cursor-not-allowed'
                }`}
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                className={`w-12 h-12 rounded-full border border-brand-text/10 flex items-center justify-center transition-all ${
                  canScrollRight 
                    ? 'hover:bg-brand-primary/10 hover:border-brand-primary text-brand-text cursor-pointer' 
                    : 'opacity-40 text-brand-slate cursor-not-allowed'
                }`}
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Wrapper */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 scrollbar-none scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {systems.map((system, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative flex-shrink-0 w-[88vw] sm:w-[480px] md:w-[520px] snap-center rounded-[36px] overflow-hidden glass-panel border-white/5 hover:border-brand-primary/20 transition-all flex flex-col"
            >
              {/* Image Section */}
              <div className="h-[180px] sm:h-[220px] relative overflow-hidden flex-shrink-0">
                <img 
                  src={system.image} 
                  alt={system.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-brand-bg/20 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-white/5">
                      {system.icon}
                    </div>
                    <span className="text-xs font-mono tracking-widest uppercase text-brand-slate">{system.category}</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-text mb-4 tracking-tight">
                    {system.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-brand-slate mb-6 leading-relaxed">
                    {system.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {system.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-brand-text/80 group-hover:text-brand-text transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_var(--color-primary-glow)]" />
                        <span className="text-xs sm:text-sm font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-white/5 mt-auto">
                  <button className="flex items-center gap-2 text-brand-text font-bold text-sm sm:text-base group/btn cursor-pointer">
                    Explore This System <Zap size={16} className="text-brand-primary group-hover/btn:scale-125 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
