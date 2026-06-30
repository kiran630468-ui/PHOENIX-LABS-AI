import { motion, useInView, animate, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Star } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const testimonials = [
  {
    name: "Rahul Sharma",
    business: "Iron Paradise Gym",
    text: "Kiran completely transformed our online presence. We went from getting 1-2 inquiries a week to 10+ daily. The new booking system is flawless.",
    rating: 5.0,
    initials: "RS",
    excerpt: "Inquiries skyrocketed"
  },
  {
    name: "Priya Patel",
    business: "Glow & Grace Salon",
    text: "I was hesitant to hire a freelancer, but Kiran delivered an agency-quality website in half the time. Our salon is fully booked for the next month!",
    rating: 4.9,
    initials: "PP",
    excerpt: "Fully booked"
  },
  {
    name: "Dr. Amit Desai",
    business: "City Care Clinic",
    text: "Professional, fast, and SEO-focused. Our clinic now ranks #1 on Google Maps for local searches. Highly recommend his services.",
    rating: 5.0,
    initials: "AD",
    excerpt: "Ranks #1 Google"
  },
  {
    name: "Sarah Jenkins",
    business: "Bloom Florals",
    text: "The e-commerce site is beautiful and so easy to manage. Our online sales have tripled since the launch. Best investment we've made.",
    rating: 4.8,
    initials: "SJ",
    excerpt: "Sales tripled"
  },
  {
    name: "Michael Chen",
    business: "Chen & Co. Law",
    text: "A highly professional and sleek website that perfectly represents our firm. The lead forms have been incredibly effective.",
    rating: 5.0,
    initials: "MC",
    excerpt: "Highly professional"
  },
  {
    name: "Anita Singh",
    business: "The Spice Bistro",
    text: "Weekend dinner reservations increased by 25% just weeks after the new website went live. The digital menu is a huge hit with our customers.",
    rating: 4.9,
    initials: "AS",
    excerpt: "Reservations up 25%"
  },
  {
    name: "Vikram Reddy",
    business: "Urban Space Realty",
    text: "Our property listings look absolutely stunning. Clients constantly compliment the virtual tour integrations. Kiran knows his stuff.",
    rating: 4.8,
    initials: "VR",
    excerpt: "Stunning layouts"
  },
  {
    name: "Dr. Sneha Iyer",
    business: "Smile Dental",
    text: "Patient inquiries doubled in the first two weeks of launching. The clean, professional look instantly builds trust with new patients.",
    rating: 5.0,
    initials: "SI",
    excerpt: "Inquiries doubled"
  },
  {
    name: "Rohan Kapoor",
    business: "NextGen Tech",
    text: "The landing page conversions are out of this world. We achieved a 12% conversion rate on cold traffic thanks to the robust copy and design.",
    rating: 4.9,
    initials: "RK",
    excerpt: "Conversions out of this world"
  },
  {
    name: "Neha Gupta",
    business: "FreshBakes Bakery",
    text: "Online custom cake orders went through the roof! The ordering process is so fluid and easy for customers. Absolutely thrilled with the work.",
    rating: 5.0,
    initials: "NG",
    excerpt: "Orders through roof"
  }
];

const getAvatarColors = (index: number) => {
  const cycle = index % 3;
  if (cycle === 0) return "bg-brand-primary/20 text-brand-primary border-brand-primary/30";
  if (cycle === 1) return "bg-brand-blue/20 text-brand-blue border-brand-blue/30";
  return "bg-brand-amber/20 text-brand-amber border-brand-amber/30";
};

export default function Testimonials() {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, 85, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [isInView]);

  // Create infinite marquee array
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <motion.section 
      ref={sectionRef}
      id="testimonials"
      className="relative py-24 px-6 md:px-12 bg-transparent text-brand-text transition-colors duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.03] mix-blend-multiply dark:mix-blend-overlay"></div>
      </motion.div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase text-brand-primary leading-[0.9] transition-colors duration-500">
            Clients About <br/> Our Work
          </h2>
          <div className="text-right" ref={countRef}>
            <p className="text-lg font-medium text-brand-slate uppercase tracking-widest transition-colors duration-500">Total Reviews</p>
            <p className="font-display text-7xl font-black text-brand-primary leading-none">{count}+</p>
          </div>
        </div>

        {/* Marquee Row */}
        {!shouldReduceMotion && (
          <div className="w-full overflow-hidden mb-16 relative">
            {/* Left & Right gradient fades */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee gap-4 py-4">
              {marqueeItems.map((testimonial, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4 bg-brand-panel/30 dark:bg-brand-panel/15 backdrop-blur-md border border-brand-text/5 px-5 py-3 rounded-full shadow-sm hover:scale-102 transition-all duration-300"
                >
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-xs border flex-shrink-0 ${getAvatarColors(idx)}`}>
                    {testimonial.initials}
                  </div>
                  <div className="flex flex-col whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-xs text-brand-text leading-none">{testimonial.name}</span>
                      <div className="flex items-center text-brand-primary text-[10px] leading-none font-semibold">
                        <Star size={10} fill="currentColor" className="mr-0.5" />
                        <span className="font-mono">{testimonial.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-brand-slate font-medium leading-none mt-1">"{testimonial.excerpt}"</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Masonry Grid Layout for 10 items */}
        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group break-inside-avoid glass-panel p-8 rounded-3xl shadow-sm border border-brand-text/5 transition-colors relative overflow-hidden"
            >
              {/* Left border accent sliding in on hover */}
              <div className="absolute left-0 bottom-0 top-0 w-[2.5px] bg-brand-primary origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />

              {/* Header: Identity */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-xl border-2 flex-shrink-0 shadow-sm ${getAvatarColors(index)}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-text leading-tight">{testimonial.name}</h3>
                  <p className="text-sm text-brand-slate">{testimonial.business}</p>
                </div>
              </div>
              
              {/* Stars & Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-brand-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="mr-0.5" />
                  ))}
                </div>
                <span className="text-sm font-bold text-brand-primary font-mono">{testimonial.rating.toFixed(1)}</span>
              </div>

              {/* Body */}
              <p className="text-base font-medium text-brand-text leading-relaxed italic opacity-80">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
