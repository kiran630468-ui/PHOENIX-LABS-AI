import { motion } from 'motion/react';
import { 
  Rocket, 
  Zap, 
  ArrowUpRight, 
  Key, 
  Cpu, 
  TrendingUp, 
  Sparkles, 
  Bot, 
  MousePointer2,
  Coins,
  Circle,
  Car,
  IndianRupee,
  ArrowRight
} from 'lucide-react';
import { useEffect, useState } from 'react';

const ICONS = [
  Rocket, 
  Zap, 
  ArrowUpRight, 
  Key, 
  Cpu, 
  TrendingUp, 
  Sparkles, 
  Bot, 
  MousePointer2,
  Coins,
  Circle,
  Car,
  IndianRupee,
  ArrowRight
];

interface Particle {
  id: number;
  Icon: any;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

export default function FloatingElements() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      Icon: ICONS[i % ICONS.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 10 + Math.random() * 30,
      duration: 20 + Math.random() * 30,
      delay: Math.random() * 10,
      rotation: Math.random() * 360,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden opacity-30 dark:opacity-40">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute text-brand-primary"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            rotate: p.rotation,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, 80, 0],
            rotate: [p.rotation, p.rotation + 360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: -p.delay, // Use negative delay to start mid-animation
          }}
        >
          <p.Icon size={p.size} strokeWidth={1} />
        </motion.div>
      ))}
    </div>
  );
}
