import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const services = [
  {
    title: "Business Websites",
    description: "Custom-designed websites that build trust and showcase your services perfectly.",
    result: "More local visibility.",
    color: "bg-brand-blue",
    textColor: "text-white",
    shape: "rounded-[40px] rounded-tr-[100px]",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    features: [
      "Custom UI/UX Design",
      "Mobile Responsive",
      "Fast Loading Speeds",
      "CMS Integration"
    ]
  },
  {
    title: "Landing Pages",
    description: "High-converting single pages designed specifically for your ad campaigns.",
    result: "Higher conversion rates.",
    color: "bg-brand-green",
    textColor: "text-white",
    shape: "rounded-[40px] rounded-tl-[100px] rounded-br-[100px]",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    features: [
      "A/B Testing Ready",
      "Lead Capture Forms",
      "Persuasive Copywriting",
      "Analytics Tracking"
    ]
  },
  {
    title: "SEO Optimization",
    description: "Get found on Google when locals search for your services.",
    result: "More organic traffic.",
    color: "bg-brand-pink",
    textColor: "text-white",
    shape: "rounded-[40px] rounded-t-[100px]",
    image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&q=80&w=800",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Local SEO Setup",
      "Performance Audits"
    ]
  }
];

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <motion.section 
      ref={ref}
      id="process" 
      className="relative py-24 px-6 md:px-12 bg-brand-bg text-brand-text overflow-hidden transition-colors duration-300 border-t border-brand-text/5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10 z-0"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-green rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-brand-green dark:text-brand-orange mb-6 transition-colors duration-300">
              How I Help <br/> You Grow
            </h2>
            <p className="text-lg md:text-xl font-medium text-brand-slate">
              It's not just a website; it's a 24/7 sales engine. I build digital experiences that turn your visitors into loyal customers.
            </p>
          </div>
          <a href="#contact" className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold whitespace-nowrap hover:bg-orange-600 transition-colors">
            See All Services
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${service.color} ${service.textColor} ${service.shape} p-8 flex flex-col h-full overflow-hidden relative group cursor-pointer`}
            >
              <div className="h-48 -mx-8 -mt-8 mb-8 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-4 relative z-10">{service.title}</h3>
              <p className="text-sm opacity-90 mb-6 flex-grow relative z-10">{service.description}</p>
              <div className="mt-auto pt-4 border-t border-white/20 relative z-10">
                <p className="font-bold text-sm uppercase tracking-wider">Result: {service.result}</p>
              </div>

              {/* Hover Reveal Overlay */}
              <div 
                className={`absolute inset-0 ${service.color} p-8 flex flex-col justify-center items-start z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out`}
              >
                <h3 className="font-display text-3xl font-bold mb-6">{service.title} Features</h3>
                <ul className="space-y-4 mb-8 w-full">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg font-medium">
                      <span className="w-2 h-2 rounded-full bg-white" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto w-full pt-4 border-t border-white/20 flex flex-col gap-4">
                  <p className="font-bold text-sm uppercase tracking-wider">Result: {service.result}</p>
                  <a href="#contact" className="bg-white text-brand-dark px-6 py-3 rounded-full font-bold text-center hover:scale-105 transition-transform shadow-lg">
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
