import { Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import PhoenixLogo from './PhoenixLogo';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-brand-text/5 pt-32 pb-12 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer">
              <PhoenixLogo className="w-10 h-10 group-hover:rotate-12 transition-transform duration-500" />
              <div className="font-display text-3xl font-black tracking-tighter">
                <span className="text-brand-text">PHOENIX</span>
                <span className="text-brand-primary">LABS</span>
              </div>
            </div>
            <p className="text-lg text-brand-slate max-w-sm mb-10 leading-relaxed font-sans">
              Engineering high-authority digital systems for the businesses of 2026. 
              We transform local leaders into global benchmarks.
            </p>
            <div className="flex gap-6">
              {[
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Instagram size={20} />, href: "#" },
                { icon: <Twitter size={20} />, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center text-brand-slate hover:text-brand-primary hover:bg-brand-primary/10 transition-all font-sans"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-text/40 mb-8 font-mono">Navigation</h4>
            <ul className="space-y-4">
              {['Growth Systems', 'AI Infrastructure', 'Case Studies', 'Our Process'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-sm font-medium text-brand-slate hover:text-brand-text transition-colors font-sans">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-text/40 mb-8 font-mono">Direct Access</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-brand-slate group cursor-pointer font-sans">
                <Mail size={14} className="group-hover:text-brand-primary transition-colors" />
                <span className="group-hover:text-brand-text transition-colors">hello@phoenixlabs.dev</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-slate group cursor-pointer font-sans">
                <Phone size={14} className="group-hover:text-brand-primary transition-colors" />
                <span className="group-hover:text-brand-text transition-colors">+91 6304686019</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-slate group cursor-pointer font-sans">
                <MapPin size={14} className="group-hover:text-brand-primary transition-colors" />
                <span className="group-hover:text-brand-text transition-colors">Hyderabad, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 font-sans">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-text/40 mb-8 font-mono">Strategic Intelligence</h4>
            <p className="text-xs text-brand-slate mb-6 leading-relaxed">
              Get weekly insights on AI-driven growth directly in your inbox.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Business Email" 
                className="w-full bg-brand-text/5 border border-brand-text/10 rounded-2xl px-6 py-4 text-sm text-brand-text focus:outline-none focus:border-brand-primary/50 transition-all font-sans"
              />
              <button className="absolute right-2 top-2 p-2 bg-brand-primary rounded-xl text-white hover:scale-105 transition-transform active:scale-95">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-text/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-brand-slate uppercase tracking-widest">
            © 2026 PHOENIX LABS DIGITAL. ALL SYSTEMS SYNCHRONIZED.
          </p>
          <div className="flex gap-8 text-[10px] font-mono text-brand-slate uppercase tracking-widest font-mono">
            <a href="#" className="hover:text-brand-text transition-colors">Terms of Growth</a>
            <a href="#" className="hover:text-brand-text transition-colors">Privacy Infrastructure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
