import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  CircleCheckBig, 
  Zap, 
  Sparkles, 
  Shield, 
  TrendingUp, 
  Clock, 
  Globe, 
  MessageSquare,
  ArrowRight,
  HelpCircle,
  Plus,
  Minus,
  ChevronRight,
  BarChart3,
  Users2,
  Calendar
} from 'lucide-react';

const plans = [
  {
    name: "Starter",
    description: "Ideal for local clinics, gyms, salons, and boutique restaurants.",
    price: "₹15K–₹25K",
    period: "one-time",
    features: [
      "Premium Landing Page Design",
      "WhatsApp Business Integration",
      "Mobile-First Optimization",
      "Google Maps & GMB Setup",
      "High-Conversion Contact Forms",
      "Basic SEO Foundation",
      "Hosting & Domain Guidance"
    ],
    cta: "Start Your Journey",
    highlight: false
  },
  {
    name: "Growth",
    description: "Optimized for scaling businesses needing advanced automation.",
    price: "₹35K–₹60K",
    period: "one-time",
    features: [
      "Multi-Page Premium Architecture",
      "Advanced Booking & Scheduling Systems",
      "Premium Cinematic Animations",
      "Advanced SEO & Local Ranking Strategy",
      "Conversion Rate Optimization (CRO)",
      "Automated Customer Reviews Section",
      "Speed & Performance Tuning",
      "Social Media Ecosystem Integration"
    ],
    cta: "Scale Your Business",
    highlight: true,
    badge: "Most Popular"
  },
  {
    name: "Premium",
    description: "Full-scale digital transformation for industry leaders.",
    price: "₹75K+",
    period: "custom",
    features: [
      "AI-Integrated Business Subsystems",
      "Custom Client/Admin Dashboards",
      "Full Automation Workflows",
      "Advanced Custom UX Research",
      "Identity & High-End Branding",
      "Priority Ongoing Optimization",
      "Advanced Analytics & ROI Tracking",
      "Custom Digital Growth Strategy"
    ],
    cta: "Transform Globally",
    highlight: false
  }
];

const faqs = [
  {
    question: "Why are custom websites more expensive than templates?",
    answer: "A template is a static shell; a custom Phoenix Labs system is a conversion engine. We build from the ground up to match your specific business goals, ensuring unique branding, superior speed, and architecture that actually converts visitors into paying customers. It's an investment in an asset, not just a cost."
  },
  {
    question: "Do I need a website if I already use Instagram/Facebook?",
    answer: "Social media is 'rented land.' You don't own the algorithm or the data. A premium website is your 'digital headquarters'—the only place where you control the narrative, the conversion path, and the professional trust required for high-ticket clients."
  },
  {
    question: "Will this truly help increase my bookings?",
    answer: "Yes. Our systems are built with conversion psychology. By integrating seamless booking flows, WhatsApp triggers, and trust-building social proof, we remove the friction that usually stops customers from taking action."
  },
  {
    question: "How long does the development process take?",
    answer: "Quality takes precision. A Starter system typically takes 2-3 weeks, while Growth and Premium systems range from 4-8 weeks depending on the complexity of integrations and AI subsystems."
  },
  {
    question: "Is hosting and domain included?",
    answer: "We guide you through the setup of your own hosting and domain so you maintain 100% ownership of your digital property. We then handle the technical deployment and optimization for you."
  }
];

interface FAQ {
  question: string;
  answer: string;
}

const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`border-b border-brand-text/5 last:border-0 rounded-2xl px-6 transition-all duration-300 ${isOpen ? 'bg-brand-primary/[0.02]' : 'bg-transparent'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-brand-primary' : 'text-brand-text/80 group-hover:text-brand-text'}`}>
          {faq.question}
        </span>
        <div className={`p-2 rounded-full transition-all ${isOpen ? 'bg-brand-primary text-white rotate-180' : 'bg-brand-text/5 text-brand-slate'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-8 text-brand-slate leading-relaxed max-w-3xl">
          {faq.answer}
        </p>
      </motion.div>
    </div>
  );
}

export default function Pricing() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="pricing" ref={containerRef} className="relative py-32 bg-transparent transition-colors duration-500 overflow-hidden">
      {/* Background Parallax Patterns */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
      >
        <div className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] bg-brand-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-brand-blue/10 rounded-full blur-[150px]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-primary font-mono text-sm tracking-[0.4em] uppercase mb-6 block"
          >
            Investment Architecture
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-display font-black text-brand-text mb-8 leading-[0.9] uppercase"
          >
            NOT JUST WEBSITES.<br />
            <span className="gradient-text">GROWTH INFRASTRUCTURE.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-slate max-w-2xl mx-auto mb-12 font-medium"
          >
            Premium digital systems built to transform your business from a local presence into a dominant market force. 
            One-time investment. Long-term digital asset.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href="#contact"
              className="px-10 py-5 rounded-full bg-brand-primary text-white font-bold hover:opacity-90 transition-all flex items-center gap-3 shadow-[0_20px_40px_var(--color-primary-glow)]"
            >
              Book A Free Strategy Call <ArrowRight size={20} />
            </a>
            <a 
              href="#contact"
              className="px-10 py-5 rounded-full bg-brand-text/5 text-brand-text font-bold hover:bg-brand-text/10 transition-all border border-brand-text/10"
            >
              See Live Demo
            </a>
          </motion.div>
        </div>

        {/* Value Explanation - The "Why" */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {[
            {
              icon: <Zap className="text-brand-primary" />,
              title: "Performance First",
              desc: "Ultra-fast load times that satisfy both Google and your impatient customers."
            },
            {
              icon: <Shield className="text-brand-blue" />,
              title: "Trust Anchors",
              desc: "Deep conversion psychology applied to every button, layout, and pixel."
            },
            {
              icon: <Sparkles className="text-brand-primary" />,
              title: "AI-Enhanced Systems",
              desc: "Intelligent automation that handles your bookings while you sleep."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[40px] glass-panel border-brand-text/5 hover:border-brand-primary/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-brand-text">{item.title}</h3>
              <p className="text-brand-slate leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-40" style={{ perspective: 1000, transformStyle: "preserve-3d" }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ rotateX: 30, opacity: 0, y: 40 }}
              whileInView={{ rotateX: 0, opacity: 1, y: plan.highlight ? -16 : 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                y: plan.highlight ? -31 : -15, 
                borderColor: plan.highlight ? 'rgba(255,255,255,0.4)' : 'var(--color-primary)',
                boxShadow: plan.highlight 
                  ? '0 60px 120px -20px var(--color-primary-glow)' 
                  : '0 40px 80px -15px rgba(0,0,0,0.1)'
              }}
              transition={{ 
                delay: i * 0.15,
                duration: 0.6,
                whileHover: { duration: 0.3, ease: "easeOut" }
              }}
              className={`relative p-10 rounded-[48px] flex flex-col h-full transition-all duration-300 overflow-hidden border border-transparent ${
                plan.highlight 
                ? 'gradient-primary text-white z-10 premium-border-ring shadow-[0_40px_80px_var(--color-primary-glow)]' 
                : 'glass-panel border-brand-text/5 text-brand-text'
              }`}
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              <div className="mb-10 relative">
                {plan.badge && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/20"
                  >
                    <Sparkles size={12} /> {plan.badge}
                  </motion.div>
                )}
                <h3 className={`text-2xl font-display font-bold mb-3 ${plan.highlight ? 'text-white' : 'text-brand-text'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-white/80' : 'text-brand-slate'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-10">
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl font-display font-black ${plan.highlight ? 'text-white' : 'text-brand-text'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm uppercase tracking-tighter ${plan.highlight ? 'text-white/60' : 'text-brand-slate'}`}>
                    / {plan.period}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-start gap-4 group/item"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                        plan.highlight 
                        ? 'bg-white/20 text-white group-hover/item:bg-white group-hover/item:text-brand-primary group-hover/item:scale-110' 
                        : 'bg-brand-primary/10 text-brand-primary group-hover/item:bg-brand-primary group-hover/item:text-white group-hover/item:scale-110'
                      }`}
                      whileHover={{ rotate: 15 }}
                    >
                      <CircleCheckBig size={14} strokeWidth={2.5} />
                    </motion.div>
                    <span className={`text-sm font-medium transition-colors ${
                      plan.highlight 
                      ? 'text-white/90 group-hover/item:text-white' 
                      : 'text-brand-text/80 group-hover/item:text-brand-text'
                    }`}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <a href="#contact" className="block w-full">
                <motion.button 
                  whileHover={{ scale: 1.02, boxShadow: plan.highlight ? '0 0 30px var(--color-primary)' : '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group/btn ${
                  plan.highlight 
                  ? 'bg-white text-brand-primary relative overflow-hidden shadow-[0_20px_40px_rgba(255,255,255,0.1)]' 
                  : 'bg-brand-primary text-white hover:shadow-[0_20px_40px_var(--color-primary-glow)]'
                }`}>
                  <span className="relative z-10">{plan.cta}</span>
                  <ChevronRight size={18} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                  {plan.highlight && (
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-gpu"
                    />
                  )}
                </motion.button>
              </a>
            </motion.div>
          ))}
        </div>

        {/* What You Actually Get (Psychological Value) */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-black text-brand-text mb-6 uppercase">
              What You Are <span className="text-brand-primary">Actually</span> Buying
            </h2>
            <p className="text-brand-slate text-lg max-w-2xl mx-auto">
              Our clients aren't just buying code. They are buying the results that only high-end architecture can deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Pure Authority", icon: <Shield />, desc: "An online presence that looks more expensive than your competitors." },
              { title: "Customer Confidence", icon: <Users2 />, desc: "A seamless UX that makes it easy for customers to trust you." },
              { title: "Revenue Conversion", icon: <BarChart3 />, desc: "Strategic design that guides visitors toward the 'Book' button." },
              { title: "Total Ownership", icon: <Globe />, desc: "Independence from third-party platform algorithm changes." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-[32px] glass-panel border-brand-text/5 hover:bg-brand-text/[0.02] transition-all"
              >
                <div className="text-brand-primary mb-5">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-brand-text">{item.title}</h4>
                <p className="text-sm text-brand-slate leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ROI Comparison Section */}
        <div className="mb-40 rounded-[64px] bg-brand-text/[0.02] border border-brand-text/5 p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.span 
                className="text-brand-primary font-mono text-xs tracking-[0.5em] uppercase mb-6 block"
              >
                Financial Perspective
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-brand-text mb-8 leading-tight uppercase">
                The Cost of <span className="text-brand-primary">Invisibility</span> is Higher.
              </h2>
              <p className="text-brand-slate text-lg leading-relaxed mb-8">
                Most local businesses lose 40%–60% of potential bookings due to poor mobile performance and outdated design.
                If our system brings in just 3-5 additional high-ticket clients monthly, your investment is recovered in weeks.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-brand-text font-bold">
                  <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center text-white">
                    <TrendingUp size={12} strokeWidth={3} />
                  </div>
                  24/7 Digital Salesperson working for you.
                </div>
                <div className="flex items-center gap-4 text-brand-text font-bold">
                  <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center text-white">
                    <TrendingUp size={12} strokeWidth={3} />
                  </div>
                  Professional identity that commands higher prices.
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-[40px] glass-panel border-brand-text/5 p-10 flex flex-col justify-center">
                <div className="space-y-10">
                  <div>
                    <div className="flex justify-between text-sm font-bold uppercase tracking-wider text-brand-slate mb-4">
                      <span>Standard Website</span>
                      <span>1% Conv.</span>
                    </div>
                    <div className="h-4 w-full bg-brand-text/5 rounded-full overflow-hidden relative">
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 0.15 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-brand-slate/40 origin-left w-full"
                        style={{ transformOrigin: 'left' }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-bold uppercase tracking-wider text-brand-primary mb-4">
                      <span>Phoenix Labs System</span>
                      <span>8% - 12% Conv.</span>
                    </div>
                    <div className="h-6 w-full bg-brand-text/5 rounded-full overflow-hidden relative">
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 0.85 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-brand-primary to-orange-400 shadow-[0_0_20px_var(--color-primary)] origin-left w-full"
                        style={{ transformOrigin: 'left' }}
                      />
                      {/* Glowing dot that travels along the Phoenix Labs bar as it animates */}
                      <motion.div 
                        initial={{ left: "0%" }}
                        animate={{ left: "85%" }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_10px_#fff,0_0_25px_var(--color-primary)] -translate-x-1/2"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12 p-6 rounded-2xl bg-brand-primary/5 border border-brand-primary/10">
                  <p className="text-center font-display font-bold text-xl text-brand-text">
                    "Growth" Tier clients typically see a <span className="text-brand-primary">3x - 5x surge</span> in digital inquiries within 30 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-40">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-black text-brand-text mb-6 uppercase">
              Transparent <span className="text-brand-primary">Answers</span>
            </h2>
            <p className="text-brand-slate text-lg">
              Everything you need to know before we transform your digital territory.
            </p>
          </div>
          <div className="glass-panel border-brand-text/5 p-10 rounded-[48px]">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="rounded-[80px] gradient-primary p-12 md:p-32 text-center text-white relative overflow-hidden shadow-[0_60px_120px_var(--color-primary-glow)]">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative z-10"
          >
            <h2 className="text-5xl md:text-8xl font-display font-black mb-8 leading-[0.9] uppercase">
              YOUR BUSINESS DESERVES A <br/> PREMIUM DIGITAL PRESENCE.
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 font-medium">
              The businesses winning in 2026 are digitally dominant. Stop losing customers to competitors with better systems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#contact"
                className="px-12 py-6 rounded-full bg-white text-brand-primary font-black uppercase tracking-widest hover:scale-105 transition-all text-sm inline-block"
              >
                Book Your Free Consultation
              </a>
              <a 
                href="#contact"
                className="px-12 py-6 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold hover:bg-white/20 transition-all inline-block"
              >
                See Business Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
