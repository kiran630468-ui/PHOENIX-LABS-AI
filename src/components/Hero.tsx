import { ArrowRight, Bot, Sparkles, Zap, Brain } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, animate, useReducedMotion } from 'motion/react';
import React, { useRef, useEffect, useState, useCallback } from 'react';

// ==========================================
// SUB-COMPONENT: ParticleCanvas (Layer 1)
// ==========================================
function ParticleCanvas({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  // Watch for class list changes on html to detect light/dark mode changes
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      targetVx: number;
      targetVy: number;
    }

    const particles: Particle[] = [];
    const count = 65;

    for (let i = 0; i < count; i++) {
      const vx = (Math.random() - 0.5) * 0.4;
      const vy = (Math.random() - 0.5) * 0.4;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx,
        vy,
        radius: 1 + Math.random() * 1.5,
        targetVx: vx,
        targetVy: vy
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const colorStr = isDark ? "255,90,31" : "16,185,129";
      ctx.fillStyle = `rgba(${colorStr}, 0.75)`;

      const mx = mouseX.get();
      const my = mouseY.get();

      // Update and draw particles
      particles.forEach((p) => {
        // Return slowly to target velocities
        p.vx += (p.targetVx - p.vx) * 0.05;
        p.vy += (p.targetVy - p.vy) * 0.05;

        // Repel from mouse within 130px
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130 && dist > 0.1) {
          const force = (130 - dist) / 130;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force * 5;
          p.vy += Math.sin(angle) * force * 5;
        }

        // Apply friction/damping and clamp speed
        p.vx *= 0.975;
        p.vy *= 0.975;
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = 1.4;
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Connection lines
      for (let i = 0; i < count; i++) {
        const pi = particles[i];
        for (let j = i + 1; j < count; j++) {
          const pj = particles[j];
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 105) {
            const alpha = ((105 - dist) / 105) * 0.14;
            ctx.strokeStyle = `rgba(${colorStr}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [shouldReduceMotion, isDark, mouseX, mouseY]);

  if (shouldReduceMotion) return null;

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-1 pointer-events-none w-full h-full" 
    />
  );
}

// ==========================================
// SUB-COMPONENT: GeometricRings (Layer 2)
// ==========================================
function GeometricRings() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
      <style>{`
        @keyframes spin-x-r0 {
          from { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          to { transform: rotateX(360deg) rotateY(0deg) rotateZ(0deg); }
        }
        @keyframes spin-y-r1 {
          from { transform: rotateX(62deg) rotateY(18deg) rotateZ(0deg); }
          to { transform: rotateX(62deg) rotateY(378deg) rotateZ(0deg); }
        }
        @keyframes spin-z-r2 {
          from { transform: rotateX(-48deg) rotateY(55deg) rotateZ(0deg); }
          to { transform: rotateX(-48deg) rotateY(55deg) rotateZ(360deg); }
        }
        @keyframes spin-y-r3 {
          from { transform: rotateX(78deg) rotateY(-32deg) rotateZ(25deg); }
          to { transform: rotateX(78deg) rotateY(328deg) rotateZ(25deg); }
        }
        @keyframes spin-x-r4 {
          from { transform: rotateX(22deg) rotateY(-65deg) rotateZ(40deg); }
          to { transform: rotateX(382deg) rotateY(-65deg) rotateZ(40deg); }
        }
        .ring-container {
          perspective: 1400px;
          transform-style: preserve-3d;
          width: 100%;
          height: 100%;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wire-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid var(--color-primary);
          transform-style: preserve-3d;
        }
      `}</style>

      <div className="ring-container">
        {/* Ring 0 */}
        <div 
          className="wire-ring" 
          style={{ 
            width: '320px', 
            height: '320px', 
            opacity: 0.07, 
            animation: 'spin-x-r0 28s linear infinite'
          }} 
        />
        {/* Ring 1 */}
        <div 
          className="wire-ring" 
          style={{ 
            width: '420px', 
            height: '420px', 
            opacity: 0.05, 
            animation: 'spin-y-r1 36s linear infinite'
          }} 
        />
        {/* Ring 2 */}
        <div 
          className="wire-ring" 
          style={{ 
            width: '500px', 
            height: '500px', 
            opacity: 0.04, 
            animation: 'spin-z-r2 44s linear infinite'
          }} 
        />
        {/* Ring 3 */}
        <div 
          className="wire-ring" 
          style={{ 
            width: '600px', 
            height: '600px', 
            opacity: 0.035, 
            animation: 'spin-y-r3 32s linear infinite'
          }} 
        />
        {/* Ring 4 */}
        <div 
          className="wire-ring" 
          style={{ 
            width: '700px', 
            height: '700px', 
            opacity: 0.025, 
            animation: 'spin-x-r4 52s linear infinite'
          }} 
        />

        {/* Central Glow Orb */}
        <div 
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '128px',
            height: '128px',
            background: 'radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%)',
            filter: 'blur(20px)',
            opacity: 0.6,
            zIndex: 1
          }}
        />
      </div>
    </div>
  );
}

// ==========================================
// SUB-COMPONENT: GradientOrbs (Layer 4)
// ==========================================
function GradientOrbs() {
  const shouldReduceMotion = useReducedMotion();
  
  const anim1 = shouldReduceMotion ? {} : {
    x: [0, 50, -30, 0],
    y: [0, -40, 60, 0],
    scale: [1, 1.2, 0.88, 1],
  };

  const anim2 = shouldReduceMotion ? {} : {
    x: [0, -55, 35, 0],
    y: [0, 45, -25, 0],
    scale: [1, 0.82, 1.25, 1],
  };

  const anim3 = shouldReduceMotion ? {} : {
    x: [0, 70, -45, 0],
    y: [0, -55, 35, 0],
    scale: [0.8, 1.25, 0.9, 0.8],
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Orb 1 */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] rounded-full"
        style={{
          width: '720px',
          height: '720px',
          background: 'radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%)',
          filter: 'blur(50px)',
          opacity: 0.75,
        }}
        animate={anim1}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Orb 2 */}
      <motion.div
        className="absolute bottom-[-150px] right-[-150px] rounded-full"
        style={{
          width: '640px',
          height: '640px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={anim2}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
      {/* Orb 3 */}
      <motion.div
        className="absolute top-[25%] left-[30%] rounded-full"
        style={{
          width: '440px',
          height: '440px',
          background: 'radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: 0.28,
        }}
        animate={anim3}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </div>
  );
}

// ==========================================
// SUB-COMPONENT: WordReveal (Headline Content)
// ==========================================
function WordReveal() {
  const shouldReduceMotion = useReducedMotion();
  const line1 = "WE DON'T BUILD".split(" ");
  const line2 = "WEBSITES.".split(" ");
  const line3 = "WE BUILD GROWTH ENGINES.".split(" ");

  let wordIndex = 0;

  const getTransition = (idx: number) => ({
    duration: 0.65,
    delay: shouldReduceMotion ? 0 : idx * 0.072,
    ease: [0.16, 1, 0.3, 1] // expo out
  });

  return (
    <div className="flex flex-col items-center">
      <h1 
        className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] md:leading-[0.9] tracking-tighter mb-8 text-center"
        style={{ perspective: '1100px', transformStyle: 'preserve-3d' }}
      >
        {/* Line 1 */}
        <span className="block gradient-text overflow-hidden py-1">
          {line1.map((word, i) => {
            const idx = wordIndex++;
            return (
              <span key={`l1-${i}`} className="inline-block overflow-hidden mr-[0.25em] last:mr-0 align-bottom">
                <motion.span
                  className="inline-block origin-bottom"
                  initial={shouldReduceMotion ? {} : { y: "105%", rotateX: -60, opacity: 0 }}
                  animate={shouldReduceMotion ? {} : { y: "0%", rotateX: 0, opacity: 1 }}
                  transition={getTransition(idx)}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </span>

        {/* Line 2 */}
        <span className="block text-brand-primary italic font-light font-display overflow-hidden py-1">
          {line2.map((word, i) => {
            const idx = wordIndex++;
            return (
              <span key={`l2-${i}`} className="inline-block overflow-hidden mr-[0.25em] last:mr-0 align-bottom">
                <motion.span
                  className="inline-block origin-bottom"
                  initial={shouldReduceMotion ? {} : { y: "105%", rotateX: -60, opacity: 0 }}
                  animate={shouldReduceMotion ? {} : { y: "0%", rotateX: 0, opacity: 1 }}
                  transition={getTransition(idx)}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </span>

        {/* Line 3 */}
        <span className="block gradient-text overflow-hidden py-1">
          {line3.map((word, i) => {
            const idx = wordIndex++;
            return (
              <span key={`l3-${i}`} className="inline-block overflow-hidden mr-[0.25em] last:mr-0 align-bottom">
                <motion.span
                  className="inline-block origin-bottom"
                  initial={shouldReduceMotion ? {} : { y: "105%", rotateX: -60, opacity: 0 }}
                  animate={shouldReduceMotion ? {} : { y: "0%", rotateX: 0, opacity: 1 }}
                  transition={getTransition(idx)}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </span>
      </h1>

      {/* Decorative scale-in line with primary glow */}
      <motion.div 
        initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
        animate={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 1 }}
        transition={{ duration: 1.0, delay: wordIndex * 0.072 + 0.3, ease: "easeOut" }}
        className="w-24 h-[1.5px] bg-brand-primary mb-12 origin-center"
        style={{
          boxShadow: '0 0 12px var(--color-primary)',
        }}
      />
    </div>
  );
}

// ==========================================
// SUB-COMPONENT: Count-Up Stat Items
// ==========================================
function StatCounterItem({ label, val, duration }: { label: string; val: string; duration: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayVal, setDisplayVal] = useState("0");
  const countMotion = useMotionValue(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (val === "2026") {
            setDisplayVal("2026");
            return;
          }

          let target = 0;
          let prefix = "";
          let suffix = "";

          if (val.includes("%")) {
            target = parseInt(val.replace("%", ""), 10) || 0;
            suffix = "%";
          } else if (val.startsWith("$")) {
            prefix = "$";
            const sansPrefix = val.substring(1);
            target = parseFloat(sansPrefix) || 0;
            suffix = sansPrefix.replace(/[0-9.]/g, "");
          } else if (val.includes("+")) {
            target = parseInt(val.replace("+", ""), 10) || 0;
            suffix = "+";
          } else {
            target = parseInt(val, 10) || 0;
          }

          const controls = animate(countMotion, target, {
            duration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (latest) => {
              const formatted = Number.isInteger(target) 
                ? Math.round(latest).toString()
                : latest.toFixed(1);
              setDisplayVal(`${prefix}${formatted}${suffix}`);
            }
          });

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [val, duration, countMotion]);

  return (
    <div ref={ref} className="flex flex-col items-center md:items-start text-center md:text-left min-w-[100px]">
      <span className="text-3xl md:text-4xl font-display font-bold text-brand-primary tabular-nums">
        {displayVal}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-slate mt-1">
        {label}
      </span>
    </div>
  );
}

// ==========================================
// SUB-COMPONENT: Magnetic CTA Button Wrapper
// ==========================================
function MagneticCTA({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  
  const springX = useSpring(btnX, { stiffness: 220, damping: 22 });
  const springY = useSpring(btnY, { stiffness: 220, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    btnX.set(x * 0.28);
    btnY.set(y * 0.28);
  };

  const handleMouseLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div style={{ x: springX, y: springY }}>
        {children}
      </motion.div>
    </div>
  );
}

// ==========================================
// SUB-COMPONENTS: Floating Panels (Layer 8)
// ==========================================
function FloatingPanel1({ x, y }: { x: any; y: any }) {
  const shouldReduceMotion = useReducedMotion();
  const floatAnim = shouldReduceMotion ? {} : {
    y: [0, -18, 0],
  };

  return (
    <motion.div
      style={{ x, y }}
      className="absolute top-[22%] right-[8%] z-8 hidden lg:block pointer-events-none"
    >
      <motion.div
        animate={floatAnim}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="glass-panel p-5 rounded-2xl w-[208px] shadow-2xl flex flex-col gap-3.5 border border-brand-text/5 bg-brand-panel/30 backdrop-blur-md"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
            <Bot size={15} />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-brand-slate">Agent active</span>
        </div>

        <div className="space-y-1.5">
          <div className="h-1.5 w-full bg-brand-text/5 rounded-full" />
          <div className="h-1.5 w-[85%] bg-brand-text/5 rounded-full" />
          <div className="h-1.5 w-[60%] bg-brand-text/5 rounded-full" />
        </div>

        <div className="flex items-center gap-2 pt-1 border-t border-brand-text/5">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-brand-primary"
                animate={shouldReduceMotion ? {} : {
                  scale: [1, 1.6, 1],
                  opacity: [0.35, 1, 0.35],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.22,
                }}
              />
            ))}
          </div>
          <span className="text-[9px] font-mono text-brand-slate tracking-wide">Processing…</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FloatingPanel2({ x, y }: { x: any; y: any }) {
  const shouldReduceMotion = useReducedMotion();
  const floatAnim = shouldReduceMotion ? {} : {
    y: [0, 18, 0],
  };

  const barHeights = [40, 75, 55, 95, 60, 85, 45];

  return (
    <motion.div
      style={{ x, y }}
      className="absolute bottom-[22%] left-[8%] z-8 hidden lg:block pointer-events-none"
    >
      <motion.div
        animate={floatAnim}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="glass-panel p-5 rounded-2xl w-[208px] shadow-2xl flex flex-col gap-3.5 border border-brand-text/5 bg-brand-panel/30 backdrop-blur-md"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
            <Zap size={15} />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-brand-slate">Real-time Optimization</span>
        </div>

        <div className="flex justify-between items-end h-10 gap-1.5 px-1">
          {barHeights.map((h, i) => (
            <motion.div
              key={i}
              className="w-2.5 bg-brand-primary/30 rounded-t-sm"
              initial={{ height: "20%" }}
              animate={shouldReduceMotion ? { height: `${h}%` } : {
                height: [`20%`, `${h}%`, `20%`],
              }}
              transition={{
                duration: 2.5 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="pt-2 border-t border-brand-text/5 flex items-center justify-between">
          <span className="text-[9px] font-mono text-brand-slate tracking-wide">Conversions</span>
          <span className="text-[10px] font-mono font-bold text-brand-primary">↑340%</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MicroBadgeTopLeft() {
  const shouldReduceMotion = useReducedMotion();
  const floatAnim = shouldReduceMotion ? {} : {
    y: [0, -10, 0],
    x: [0, 6, 0]
  };

  return (
    <motion.div
      animate={floatAnim}
      transition={{
        duration: 6.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute top-[28%] left-[12%] z-8 hidden lg:flex items-center gap-2 bg-brand-panel/20 backdrop-blur-md border border-brand-text/5 px-3 py-1.5 rounded-full pointer-events-none opacity-45 shadow-sm"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      <span className="text-[9px] font-mono tracking-wide text-brand-text font-medium">Booking confirmed — Dr. Sharma</span>
    </motion.div>
  );
}

function MicroBadgeBottomRight() {
  const shouldReduceMotion = useReducedMotion();
  const floatAnim = shouldReduceMotion ? {} : {
    y: [0, 10, 0],
    x: [0, -6, 0]
  };

  return (
    <motion.div
      animate={floatAnim}
      transition={{
        duration: 7.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute bottom-[28%] right-[12%] z-8 hidden lg:flex items-center gap-2 bg-brand-panel/20 backdrop-blur-md border border-brand-text/5 px-3 py-1.5 rounded-full pointer-events-none opacity-45 shadow-sm"
    >
      <Brain size={11} className="text-brand-primary" />
      <span className="text-[9px] font-mono tracking-wide text-brand-text font-medium">AI optimization active</span>
    </motion.div>
  );
}

// ==========================================
// CORE COMPONENT: Hero
// ==========================================
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for tracking mouse coordinates locally inside section
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const parallaxXMotion = useMotionValue(0);
  const parallaxYMotion = useMotionValue(0);
  
  const springParallaxX = useSpring(parallaxXMotion, { stiffness: 50, damping: 20 });
  const springParallaxY = useSpring(parallaxYMotion, { stiffness: 50, damping: 20 });
  
  // Transform mouse values for smooth floating panel opposite parallax panning
  const panel1X = useTransform(springParallaxX, [-800, 800], [14, -14]);
  const panel1Y = useTransform(springParallaxY, [-500, 500], [9, -9]);
  const panel2X = useTransform(springParallaxX, [-800, 800], [-14, 14]);
  const panel2Y = useTransform(springParallaxY, [-500, 500], [-9, 9]);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.55], [1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 0.55], [0, 90]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Global mouse tracker inside hero section
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      mouseX.set(x);
      mouseY.set(y);
      
      parallaxXMotion.set(e.clientX - window.innerWidth / 2);
      parallaxYMotion.set(e.clientY - window.innerHeight / 2);
    };
    
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [mouseX, mouseY, parallaxXMotion, parallaxYMotion]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-32 md:pb-40 overflow-hidden bg-transparent transition-colors duration-500"
    >
      
      {/* LAYER 1: Interactive Canvas Particle Network */}
      <ParticleCanvas mouseX={mouseX} mouseY={mouseY} />

      {/* LAYER 2: CSS 3D Rotating Wireframe Sphere */}
      <GeometricRings />

      {/* LAYER 3: Existing BG Image Parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000"
            alt="Dynamic Backdrop"
            className="w-full h-full object-cover opacity-[0.07] dark:opacity-[0.12] grayscale scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg" />
        </motion.div>
      </div>

      {/* LAYER 4: Morphing Gradient Orbs */}
      <GradientOrbs />

      {/* LAYER 5: Subtle Dot Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.022] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--color-text) 1px, transparent 1px)',
          backgroundSize: '38px 38px'
        }}
      />

      {/* LAYER 6: Radial Vignette */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 60% at 50% 0%, transparent 0%, var(--color-bg) 100%)'
        }}
      />

      {/* LAYER 7: Grain */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.022] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50"
      />

      {/* CONTENT (z-index 10): Main Hero Information */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* AI Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-brand-primary/20 bg-brand-panel/10 backdrop-blur-md"
          >
            <Sparkles size={16} className="text-brand-primary animate-pulse" />
            <span className="text-xs font-mono tracking-widest uppercase text-brand-slate">Intelligence-Driven Digital Growth</span>
          </motion.div>

          {/* Word-by-Word Headline */}
          <WordReveal />

          {/* Intro Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-brand-slate max-w-2xl mb-12 font-sans font-normal leading-relaxed"
          >
            We transform hospitals, luxury salons, and high-ticket clinics into AI-powered powerhouses. 
            Phoenix Labs builds the digital infrastructure that doesn't just look elite—it generates 
            unmatched business value.
          </motion.p>

          {/* Actions & Magnetic CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              {/* Magnetic Hover effect on Primary CTA */}
              <MagneticCTA>
                <a 
                  href="#contact" 
                  className="group relative px-10 py-5 rounded-full overflow-hidden bg-brand-primary text-white font-bold text-lg shadow-[0_0_40px_var(--color-primary-glow)] flex items-center justify-center transition-shadow duration-300 pointer-events-auto"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Get Free Website Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
              </MagneticCTA>
              
              <a 
                href="#portfolio" 
                className="px-10 py-5 rounded-full glass-panel text-brand-text font-bold text-lg hover:bg-brand-primary/5 transition-all border-brand-primary/20"
              >
                View Industry Demos
              </a>
            </div>
            
            <p className="text-sm font-medium text-brand-slate flex items-center gap-2 opacity-80">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
              Built for clinics, salons, gyms & local businesses.
            </p>
          </motion.div>

          {/* Social Proof / Metrics with Viewport Counter-up animation */}
          <StatsSection />
        </div>
      </motion.div>

      {/* FLOATING UI PANELS (z-index 8) */}
      <FloatingPanel1 x={panel1X} y={panel1Y} />
      <FloatingPanel2 x={panel2X} y={panel2Y} />
      <MicroBadgeTopLeft />
      <MicroBadgeBottomRight />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none z-10" />
    </section>
  );
}

// ==========================================
// SECTIONS WRAPPER CONTAINERS (Auxiliary)
// ==========================================
function StatsSection() {
  return (
    <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-16 pt-8 md:pt-12 border-t border-brand-text/5 dark:border-white/5 w-full">
      <StatCounterItem label="AI Efficiency" val="94%" duration={2.6} />
      <StatCounterItem label="Growth Capital" val="$2M+" duration={2.1} />
      <StatCounterItem label="Systems Built" val="50+" duration={2.2} />
      <StatCounterItem label="Market Edge" val="2026" duration={0} />
    </div>
  );
}
