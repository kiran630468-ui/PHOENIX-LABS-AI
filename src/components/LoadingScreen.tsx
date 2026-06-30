import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import PhoenixLogo from './PhoenixLogo';

export default function LoadingScreen() {
  // NOTE: Loading screen duration hint reduced to 1500ms in App.tsx timer
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `[${Math.round(latest)}%]`);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2.2,
      ease: "easeInOut",
      delay: 0.2,
    });
    return () => controls.stop();
  }, [count]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-bg text-brand-text overflow-hidden"
      initial={{ opacity: 1, scale: 1, clipPath: "circle(150% at 50% 50%)" }}
      exit={{ opacity: 0, scale: 0, clipPath: "circle(0% at 50% 50%)" }}
      transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
    >
      {/* Background Cinematic Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
      </div>

      {/* Grid Scanning Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Central Logo with Pulsing Glow, 3D Sphere, and Orbit Dots */}
        <div className="relative mb-12">
          {/* 3D Wireframe Rotating Sphere behind Logo */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none wireframe-container scale-110">
            <div className="wireframe-ring ring-x w-36 h-36 md:w-48 md:h-48" />
            <div className="wireframe-ring ring-y w-36 h-36 md:w-48 md:h-48" />
            <div className="wireframe-ring ring-z w-36 h-36 md:w-48 md:h-48" />
          </div>

          {/* Orbiting Dots */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {/* Dot 1 - Primary, angled */}
            <div className="absolute inset-0 flex items-center justify-center rotate-[15deg]">
              <div className="w-1 h-1 rounded-full bg-brand-primary animate-orbit-dot-1 absolute" />
            </div>
            {/* Dot 2 - Blue, angled */}
            <div className="absolute inset-0 flex items-center justify-center rotate-[-35deg]">
              <div className="w-1 h-1 rounded-full bg-brand-blue animate-orbit-dot-2 absolute" />
            </div>
            {/* Dot 3 - Primary, steeper angle */}
            <div className="absolute inset-0 flex items-center justify-center rotate-[75deg]">
              <div className="w-1 h-1 rounded-full bg-brand-primary animate-orbit-dot-3 absolute" />
            </div>
            {/* Dot 4 - Blue, reverse direction and different tilt */}
            <div className="absolute inset-0 flex items-center justify-center rotate-[-115deg]">
              <div className="w-1 h-1 rounded-full bg-brand-blue animate-orbit-dot-4 absolute" />
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10"
          >
            <PhoenixLogo className="w-24 h-24 md:w-32 md:h-32 drop-shadow-[0_0_50px_var(--color-primary-glow)]" />
          </motion.div>
          
          <motion.div 
            className="absolute inset-0 bg-brand-primary/20 blur-[40px] rounded-full"
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Circular Scanning Ring */}
          <motion.div 
            className="absolute -inset-8 border border-brand-text/5 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-primary rounded-full shadow-[0_0_10px_var(--color-primary)]" />
          </motion.div>
        </div>

        {/* Brand Text */}
        <div className="flex flex-col items-center">
          <div className="overflow-hidden mb-2">
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="font-display text-4xl md:text-5xl font-black tracking-tighter flex items-center"
            >
              <span className="text-brand-text">PHOENIX</span>
              <span className="text-brand-primary ml-2 italic">LABS</span>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-8 bg-brand-text/10" />
            <span className="text-[10px] font-mono text-brand-slate uppercase tracking-[0.4em]">Initializing AI Subsystems</span>
            <div className="h-[1px] w-8 bg-brand-text/10" />
          </motion.div>
        </div>

        {/* Advanced Progress Terminal */}
        <div className="mt-16 w-64">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[9px] font-mono text-brand-primary uppercase animate-pulse">Syncing Growth Matrix...</span>
            <motion.span 
              className="text-[9px] font-mono text-brand-slate animate-pulse"
            >
              {rounded}
            </motion.span>
          </div>
          
          <div className="h-1 w-full bg-brand-text/5 rounded-full overflow-hidden relative">
            <motion.div 
              className="h-full bg-brand-primary relative z-10"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut", delay: 0.2 }}
            />
            {/* Gloss Highlight */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-20 skew-x-12 z-20"
              animate={{ x: ["-100%", "400%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          {/* Data Particles below bar */}
          <div className="mt-4 flex justify-between px-1">
            {[...Array(4)].map((_, i) => (
              <motion.div 
                key={i}
                className="w-1 h-3 bg-brand-text/10 rounded-full"
                animate={{ 
                  height: [4, 12, 4],
                  backgroundColor: ["rgba(var(--color-text),0.05)", "rgba(var(--color-primary),0.2)", "rgba(var(--color-text),0.05)"]
                }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
