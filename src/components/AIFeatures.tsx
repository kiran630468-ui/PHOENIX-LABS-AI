import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from 'motion/react';
import { Brain, Sparkles, Binary, Gauge, Layers } from 'lucide-react';

// 3D Tilt Feature Card Component
function FeatureCard({ title, desc, icon, index }: { title: string; desc: string; icon: React.ReactNode; index: number; key?: any }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // useSpring for buttery smooth responsive movement
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized coordinate from -0.5 to 0.5
    const normX = (e.clientX - rect.left) / width - 0.5;
    const normY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(normX);
    y.set(normY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 800 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        className="p-10 rounded-[40px] glass-panel border-white/5 hover:bg-brand-text/[0.04] transition-all group cursor-pointer"
      >
        <div 
          className="mb-8 p-4 rounded-2xl bg-brand-text/5 w-fit group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.02)]"
          style={{ transform: "translateZ(20px)" }}
        >
          {icon}
        </div>
        <h3 
          className="text-2xl font-display font-bold text-brand-text mb-4 leading-tight"
          style={{ transform: "translateZ(10px)" }}
        >
          {title}
        </h3>
        <p 
          className="text-brand-slate leading-relaxed text-sm"
          style={{ transform: "translateZ(5px)" }}
        >
          {desc}
        </p>
      </motion.div>
    </div>
  );
}

export default function AIFeatures() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  // Coordinate arrays for the neural network layers
  const inputY = [40, 95, 150, 205];
  const hiddenY = [25, 65, 105, 145, 185, 225];
  const outputY = [60, 120, 180];

  // Memoize the network nodes
  const nodes = useMemo(() => {
    const list: Array<{ x: number; y: number; id: string; delay: number }> = [];
    inputY.forEach((y, i) => list.push({ x: 60, y, id: `in-${i}`, delay: i * 0.1 }));
    hiddenY.forEach((y, i) => list.push({ x: 200, y, id: `hid-${i}`, delay: i * 0.08 }));
    outputY.forEach((y, i) => list.push({ x: 340, y, id: `out-${i}`, delay: i * 0.12 }));
    return list;
  }, []);

  // Memoize the network connections
  const connections = useMemo(() => {
    const list: Array<{ id: string; x1: number; y1: number; x2: number; y2: number; path: string }> = [];
    
    // Connect Input to Hidden
    inputY.forEach((y1, i) => {
      hiddenY.forEach((y2, j) => {
        list.push({
          id: `c-in-hid-${i}-${j}`,
          x1: 60, y1,
          x2: 200, y2,
          path: `M 60 ${y1} L 200 ${y2}`
        });
      });
    });

    // Connect Hidden to Output
    hiddenY.forEach((y1, i) => {
      outputY.forEach((y2, j) => {
        list.push({
          id: `c-hid-out-${i}-${j}`,
          x1: 200, y1,
          x2: 340, y2,
          path: `M 200 ${y1} L 340 ${y2}`
        });
      });
    });

    return list;
  }, []);

  // Active connection state for 800ms brighten loop
  const [activeConnId, setActiveConnId] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomConn = connections[Math.floor(Math.random() * connections.length)];
      if (randomConn) {
        setActiveConnId(randomConn.id);
        const timeout = setTimeout(() => {
          setActiveConnId(null);
        }, 300);
        return () => clearTimeout(timeout);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [connections]);

  // Create subset of connection paths for signal dots
  const signalPaths = useMemo(() => {
    const subset: string[] = [];
    const numSignals = 8;
    for (let i = 0; i < numSignals; i++) {
      const randomConn = connections[Math.floor(Math.random() * connections.length)];
      if (randomConn) {
        subset.push(randomConn.path);
      }
    }
    return subset;
  }, [connections]);

  const features = [
    {
      title: "Intelligent UX Adaptation",
      desc: "Websites that learn from visitor behavior to optimize conversion paths automatically.",
      icon: <Brain className="text-brand-orange-static" />
    },
    {
      title: "Automated Growth Insights",
      desc: "Real-time business intelligence dashboards showing you exactly where your profit is leaking.",
      icon: <Binary className="text-brand-blue" />
    },
    {
      title: "AI-Powered SEO",
      desc: "Dynamic content signals that keep you ahead of Google's evolving AI-first search algorithms.",
      icon: <Layers className="text-brand-amber" />
    }
  ];

  const line1 = "NOT JUST WEBSITES.".split(" ");
  const line2 = "INTELLIGENT SYSTEMS.".split(" ");

  return (
    <section ref={containerRef} className="py-32 bg-transparent relative overflow-hidden transition-colors duration-500">
      {/* Parallax Background tech pattern */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] scale-150" />
      </motion.div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="h-[1px] w-12 bg-brand-text/10" />
            <Sparkles className="text-brand-primary" size={20} />
            <span className="text-xs font-mono uppercase tracking-[0.4em] text-brand-slate">AI-Enhanced Infrastructure</span>
            <div className="h-[1px] w-12 bg-brand-text/10" />
          </motion.div>
          
          <h2 className="text-4xl md:text-7xl font-display font-black gradient-text leading-[0.95] mb-8">
            <span className="block mb-2">
              {line1.map((word, i) => (
                <motion.span
                  key={`l1-${i}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span 
              className="block text-brand-primary italic underline decoration-brand-primary/20" 
              style={{ textShadow: "0 0 25px var(--color-primary-glow)" }}
            >
              {line2.map((word, i) => (
                <motion.span
                  key={`l2-${i}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (line1.length + i) * 0.08, ease: "easeOut" }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-brand-slate max-w-2xl mx-auto leading-relaxed"
          >
            Phoenix Labs integrates the latest AI primitives directly into your business infrastructure, 
            ensuring you don't just participate in 2026—you dominate it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <FeatureCard 
              key={i}
              index={i}
              title={feat.title}
              desc={feat.desc}
              icon={feat.icon}
            />
          ))}
        </div>

        {/* Dynamic Visualization */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-1 bg-gradient-to-r from-brand-primary/20 via-brand-blue/20 to-brand-primary/20 rounded-[40px]"
        >
          <div className="bg-brand-bg rounded-[39px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h4 className="text-2xl font-display font-bold text-brand-text mb-4 flex items-center gap-2">
                <Gauge className="text-brand-primary" /> Real-time Efficiency Matrix
              </h4>
              <p className="text-brand-slate text-sm mb-8 leading-relaxed">
                Our proprietary AI integration layer benchmarks your site against local competitors 
                every 24 hours, adjusting SEO and caching headers to maintain top ranking and speed.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Search Authority", val: 98 },
                  { label: "Lead Response Time", val: 100 },
                  { label: "UX Fluidity", val: 92 }
                ].map((bar, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-brand-slate">
                      <span>{bar.label}</span>
                      <span>{bar.val}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-brand-text/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: bar.val / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="h-full bg-brand-primary origin-left w-full" 
                        style={{ transformOrigin: 'left' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Real 3D-feeling AI Neural Network */}
            <div className="flex-1 w-full relative">
              <div className="aspect-video glass-panel rounded-2xl flex items-center justify-center relative overflow-hidden p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent pointer-events-none" />
                
                <svg 
                  viewBox="0 0 400 240" 
                  className="w-full h-full relative z-10"
                >
                  {/* Connection Lines */}
                  {connections.map((conn) => {
                    const isActive = conn.id === activeConnId;
                    return (
                      <motion.line
                        key={conn.id}
                        x1={conn.x1}
                        y1={conn.y1}
                        x2={conn.x2}
                        y2={conn.y2}
                        stroke="var(--color-primary)"
                        strokeWidth={isActive ? 2 : 1}
                        animate={{
                          opacity: isActive ? 0.8 : 0.12,
                          stroke: isActive ? "var(--color-primary)" : "var(--color-primary)"
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    );
                  })}

                  {/* Travelling Signal Dots */}
                  {signalPaths.map((path, idx) => (
                    <circle key={idx} r="3" fill="var(--color-primary)">
                      <animateMotion
                        path={path}
                        dur={`${1.8 + Math.random() * 2.2}s`}
                        begin={`${Math.random() * 2.5}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  ))}

                  {/* Neural Network Nodes */}
                  {nodes.map((node) => (
                    <motion.circle
                      key={node.id}
                      cx={node.x}
                      cy={node.y}
                      r="6"
                      stroke="var(--color-primary)"
                      strokeWidth="1.5"
                      fill="var(--color-bg)"
                      animate={{
                        scale: [1, 1.25, 1]
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        delay: node.delay,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
