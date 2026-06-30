import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, Sparkles, MessageCircle, Phone, Shield } from 'lucide-react';

export default function CTA() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="contact" ref={containerRef} className="py-32 bg-transparent relative overflow-hidden transition-colors duration-500">
      {/* Cinematic Parallax Background */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 opacity-[0.05] grayscale pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" 
          alt="" 
          className="w-full h-full object-cover scale-125"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Cinematic Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px] opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto rounded-[60px] glass-panel border-brand-primary/5 p-8 md:p-20 relative overflow-hidden group shadow-2xl">
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 p-[1px] rounded-[60px] bg-gradient-to-br from-brand-primary/50 via-transparent to-brand-blue/50 opacity-30 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-brand-primary/20"
            >
              <Sparkles size={16} className="text-brand-primary" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-slate">Limited Strategy Slots For Q2 2026</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-[80px] font-display font-black text-brand-text leading-[0.85] tracking-tighter mb-10 uppercase"
            >
              Your Competitors Are Already Online. <br />
              <span className="text-brand-primary italic font-light italic">ARE YOU?</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-lg md:text-xl text-brand-slate max-w-2xl mb-12 leading-relaxed"
            >
              Build a premium online presence that converts visitors into paying customers. 
              Our systems are specifically optimized for hospitals, clinics, salons, and local Indian businesses.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
              <a 
                href="https://wa.me/916304686019?text=Hi%20Kiran,%20I'm%20ready%20to%20get%20more%20customers%20online.%20Available%20for%20a%20free%20audit?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-12 py-6 rounded-3xl overflow-hidden bg-brand-primary text-white font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_var(--color-primary-glow)] flex items-center justify-center gap-3"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Free Website Audit <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>

              <a 
                href="tel:+916304686019"
                className="px-12 py-6 rounded-3xl glass-panel text-brand-text font-bold text-xl hover:bg-brand-primary/10 transition-all flex items-center gap-3 justify-center border-brand-text/10"
              >
                Talk to an Expert <Phone size={22} className="text-brand-blue" />
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-4 text-xs font-mono text-brand-slate/60 uppercase tracking-widest">
              <Shield size={14} className="text-brand-primary" />
              <span>Fast Response • Built for Results • Premium Design</span>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-10 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
              {['Healthcare', 'Hospitality', 'Fitness', 'Real Estate'].map((nic, i) => (
                <span key={i} className="text-xs font-mono tracking-[0.3em] uppercase text-brand-slate">{nic} GROWTH</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
