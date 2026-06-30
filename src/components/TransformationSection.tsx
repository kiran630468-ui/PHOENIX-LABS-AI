import { motion } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export default function TransformationSection() {
  return (
    <section className="py-24 bg-transparent transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            The Evolution
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-8 text-brand-text leading-tight"
          >
            FROM OUTDATED TO <br />
            <span className="text-brand-primary italic font-light italic">UNSTOPPABLE.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Before Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-10 rounded-[40px] bg-brand-text/[0.02] border border-brand-text/5 relative flex flex-col glass-panel"
          >
            <div className="absolute top-6 right-8 text-brand-slate/20 font-display text-6xl font-black italic">BEFORE</div>
            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3 text-brand-slate/60">
              <XCircle className="text-brand-slate/40" /> Standard Agency Result
            </h3>
            
            <div className="space-y-6 flex-grow">
              {[
                "Generic template appearance",
                "Mobile experience is secondary",
                "Text-heavy, low engagement",
                "Buried contact forms",
                "Slow, bloated loading times"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-brand-slate/50 line-through">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-slate/30" />
                  {item}
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-brand-bg/40 border border-brand-text/5 opacity-50 grayscale">
              <div className="h-4 w-1/3 bg-brand-text/10 rounded-full mb-3" />
              <div className="h-2 w-full bg-brand-text/5 rounded-full mb-2" />
              <div className="h-2 w-5/6 bg-brand-text/5 rounded-full" />
            </div>
          </motion.div>

          {/* After Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-10 rounded-[40px] gradient-primary relative text-white flex flex-col shadow-[0_40px_100px_var(--color-primary-glow)]"
          >
            <div className="absolute top-6 right-8 text-white/10 font-display text-6xl font-black italic">AFTER</div>
            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
              <CheckCircle2 /> The Phoenix Standard
            </h3>

            <div className="space-y-6 flex-grow">
              {[
                "Custom AI-native digital architecture",
                "Ultra-fast cinematic interactions",
                "Strategic high-ticket psychology",
                "Automated Growth & Booking systems",
                "100/100 Core Web Vitals performance"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 font-medium">
                  <CheckCircle2 size={18} className="text-black/30 fill-white" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight size={16} />
                </div>
                <div className="h-2 w-32 bg-white/40 rounded-full" />
              </div>
              <div className="h-4 w-full bg-white/20 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
