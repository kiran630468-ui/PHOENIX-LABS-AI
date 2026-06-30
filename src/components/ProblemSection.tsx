import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, animate, useMotionValue } from 'motion/react';
import { XCircle, AlertTriangle, TrendingDown, Users } from 'lucide-react';

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03
    }
  }
};

const charVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: { opacity: 1, y: 0, rotateX: 0 }
};

function AnimatedCharacters({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={charVariants}
              transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
              className="inline-block"
              style={{ transformOrigin: "bottom center" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </>
  );
}

function TypewriterQuote({ text }: { text: string }) {
  const ref = useRef<HTMLQuoteElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayText, setDisplayText] = useState("");
  const charIndexMotion = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(charIndexMotion, text.length, {
      duration: 3.5,
      ease: "linear",
      onUpdate: (latest) => {
        setDisplayText(text.slice(0, Math.round(latest)));
      }
    });

    return () => controls.stop();
  }, [isInView, text, charIndexMotion]);

  return (
    <blockquote ref={ref} className="text-xl font-display italic text-brand-text/80 leading-relaxed min-h-[5.5rem] md:min-h-[4rem]">
      "{displayText}"
    </blockquote>
  );
}

export default function ProblemSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const problems = [
    {
      icon: <XCircle className="text-red-500" />,
      title: "Outdated Persona",
      desc: "Your current website looks like a template from 2018, eroding the trust of premium high-ticket clients."
    },
    {
      icon: <TrendingDown className="text-red-500" />,
      desc: "Visitors leave within 3 seconds because your mobile experience is frustrating and slow.",
      title: "Conversion Leakage"
    },
    {
      icon: <Users className="text-red-500" />,
      title: "Zero Authority",
      desc: "Competitors with inferior services are winning because their digital presence feels more professional."
    },
    {
      icon: <AlertTriangle className="text-red-500" />,
      title: "Friction-Filled Bookings",
      desc: "Manually managing appointments via calls while losing leads who want instant, automated booking."
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-transparent relative overflow-hidden transition-colors duration-500">
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 opacity-[0.03] grayscale pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000" 
          alt="" 
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
            >
              The Invisible Leak
            </motion.span>
            <motion.h2 
              variants={parentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-6xl font-display font-bold mb-8 gradient-text"
              style={{ perspective: 800, transformStyle: 'preserve-3d' }}
            >
              <span className="block">
                <AnimatedCharacters text="PEOPLE JUDGE YOUR" />
              </span>
              <span className="block">
                <AnimatedCharacters text="BUSINESS" />{' '}
                <span className="text-brand-primary italic underline decoration-brand-text/10 inline-block">
                  <AnimatedCharacters text="IN SECONDS." />
                </span>
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-lg text-brand-slate max-w-lg mb-12 leading-relaxed"
            >
              Most businesses lose 60% of potential high-ticket leads before they ever pick up the phone. 
              A weak digital presence isn't just an aesthetic issue—it's a massive financial liability.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-3xl glass-panel border-red-500/10 bg-red-500/[0.02]"
            >
              <TypewriterQuote text="We were losing patients to a newer clinic down the street simply because their website looked more 'modern'. We didn't realize how much our old site was hurting our credibility." />
              <div className="mt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-slate/20" />
                <div>
                  <p className="text-sm font-bold">Dr. Sharma</p>
                  <p className="text-xs text-brand-slate uppercase tracking-wider">Clinical Director</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {problems.map((prob, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl glass-panel hover:bg-white/[0.03] transition-all group border-white/5 border-gradient-card"
              >
                <div className="relative z-10">
                  <div className="mb-6 p-3 rounded-2xl bg-brand-text/5 w-fit group-hover:scale-110 transition-transform">
                    {prob.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 text-brand-text glitch-title">{prob.title}</h3>
                  <p className="text-sm text-brand-slate leading-relaxed">{prob.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
