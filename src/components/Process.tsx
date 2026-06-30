import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Search, Compass, Palette, Code2, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    title: "Market Intelligence",
    desc: "We research your local competitors and analyze search intent to build a data-driven strategy.",
    icon: <Search className="text-brand-orange" />
  },
  {
    title: "Conversion Architecture",
    desc: "Strategy-first UX planning focused on psychological trust and automated booking flows.",
    icon: <Compass className="text-brand-blue" />
  },
  {
    title: "Premium Identity Design",
    desc: "Cinematic visual design crafted to position you as the premium choice in your market.",
    icon: <Palette className="text-brand-amber" />
  },
  {
    title: "AI-Powered Development",
    desc: "High-performance code integrated with AI growth primitives for 2026 readiness.",
    icon: <Code2 className="text-brand-gold" />
  },
  {
    title: "Performance Deployment",
    desc: "Global edge delivery ensure 100/100 speed and perfect SEO indexing from day one.",
    icon: <Rocket className="text-brand-orange" />
  },
  {
    title: "Growth Optimization",
    desc: "Continuous refinement based on real user data and AI-generated heatmaps.",
    icon: <TrendingUp className="text-brand-blue" />
  }
];

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="process" ref={containerRef} className="py-32 bg-transparent md:bg-transparent transition-colors duration-500 overflow-hidden relative">
      {/* Background Cinematic Text Parallax */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 opacity-[0.02] flex items-center justify-center font-display font-black text-[30vw] whitespace-nowrap pointer-events-none select-none"
      >
        EVOLUTION
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            Tactical Execution
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-display font-black text-brand-text leading-[0.9]"
          >
            A SYSTEMATIC <br />
            PATH TO <br />
            <span className="text-brand-primary italic font-light italic text-glow-primary">DOMINANCE.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-brand-text/5">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-12 border-b border-r border-brand-text/5 hover:bg-brand-text/[0.02] transition-colors relative group font-sans"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
              
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 rounded-2xl bg-brand-text/5 w-fit group-hover:scale-110 group-hover:bg-brand-primary/10 transition-all">
                  {step.icon}
                </div>
                <span className="text-[40px] font-display font-black text-brand-text/5 italic">0{i + 1}</span>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-brand-text mb-4 group-hover:text-brand-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-brand-slate leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
