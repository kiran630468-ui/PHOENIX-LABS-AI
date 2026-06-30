import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Zap, Smartphone, Search, DollarSign } from 'lucide-react';

const reasons = [
  {
    title: "Fast Delivery",
    description: "Websites up and running in days, not months. Speed without compromise.",
    icon: <Zap size={24} />,
  },
  {
    title: "Mobile Optimized",
    description: "Flawless experience across all devices including phones and tablets.",
    icon: <Smartphone size={24} />,
  },
  {
    title: "SEO Focused",
    description: "Built with SEO best practices to ensure you rank higher on Google.",
    icon: <Search size={24} />,
  },
  {
    title: "Affordable Pricing",
    description: "Agency-quality premium websites at highly competitive freelance rates.",
    icon: <DollarSign size={24} />,
  }
];

function FloatingBrandsBadge() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(badgeRef, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2.0; // seconds
    const start = 0;
    const end = 50;
    let startTime: number | null = null;

    const animateVal = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentVal = progress * (end - start) + start;
      setCount(currentVal);
      if (progress < 1) {
        requestAnimationFrame(animateVal);
      }
    };

    requestAnimationFrame(animateVal);
  }, [isInView]);

  return (
    <div 
      ref={badgeRef} 
      className="absolute top-8 left-8 bg-brand-bg/85 backdrop-blur-md border border-brand-text/10 px-4 py-2.5 rounded-2xl shadow-lg z-20 flex items-center gap-2.5"
    >
      <div className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse" />
      <div className="text-sm font-medium text-brand-text">
        <span className="font-display font-black text-brand-primary text-lg">
          {Math.round(count)}+
        </span>{" "}
        Brands Transformed
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax background movement
  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  
  // 0.3x Parallax speed for "GROWTH ENGINE" text to create a depth illusion
  const yGrowthEngine = useTransform(scrollYProgress, [0, 1], ["-30px", "30px"]);

  return (
    <motion.section 
      ref={ref}
      id="about" 
      className="relative py-24 px-6 md:px-12 bg-transparent text-brand-text overflow-hidden transition-colors duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.03] mix-blend-multiply dark:mix-blend-overlay"></div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl md:text-7xl font-black uppercase text-brand-primary mb-8 leading-[0.9]"
            >
              Why <br/> Phoenix Labs?
            </motion.h2>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.2
                  }
                }
              }}
              className="space-y-6 text-lg md:text-xl font-medium text-brand-slate transition-colors duration-500"
            >
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                It's not just a service; it's an experience rooted in strategy, precision, and personalized attention. 
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                Founded by Kiran Kumar, Phoenix Labs was built on the idea that every business deserves a digital rebirth. We go beyond the standard template, treating your business website as a canvas. We take the time to understand your local market, your goals, and your vision.
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                We offer premium, agency-level quality without the massive agency overhead. Expect fast delivery, mobile-optimized designs, and ongoing support that actually helps you grow.
              </motion.p>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-[32px]"
            >
              {/* Floating Stat Badge */}
              <FloatingBrandsBadge />

              {/* Scalloped Image Container */}
              <div className="bg-brand-bg glass-panel p-4 pb-24 border-brand-text/5 relative">
                <motion.img 
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, ease: "easeOut" }}
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" 
                  alt="Phoenix Labs Workspace" 
                  className="w-full h-[500px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 z-10"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Overlay Text with Parallax */}
              <motion.div 
                style={{ y: yGrowthEngine }}
                className="absolute bottom-4 left-0 w-full p-8 text-center bg-gradient-to-t from-brand-bg/90 to-transparent pt-12 z-20"
              >
                <h3 className="font-display text-4xl md:text-5xl font-black text-brand-text leading-none">
                  More than just a <br/> website — it's a <br/>
                  <span className="text-brand-primary italic font-light">GROWTH ENGINE.</span>
                </h3>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Minimal Reason Cards / Horizontal Stat Items */}
        <div className="w-full mt-24 border-t border-brand-text/5 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex items-start gap-4 ${
                  i > 0 ? "lg:border-l lg:border-brand-text/5 lg:pl-8" : ""
                }`}
              >
                <div className="text-brand-primary mt-1 p-2 rounded-xl bg-brand-primary/5 flex-shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-brand-text mb-1">
                    {reason.title}
                  </h4>
                  <p className="text-brand-slate text-sm font-medium leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}
