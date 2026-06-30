import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Sun, Moon, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PhoenixLogo from './PhoenixLogo';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: "Growth Systems", href: "#systems" },
    { name: "AI Features", href: "#ai" },
    { name: "Process", href: "#process" },
    { name: "Success Stories", href: "#portfolio" },
    { name: "Investment", href: "#pricing" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 px-6 md:px-12 py-4 ${
      scrolled ? 'top-4' : 'top-0'
    }`}>
      <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 ${
        scrolled ? 'glass-panel px-6 py-3 rounded-full shadow-2xl' : 'py-4'
      }`}>
        
        {/* LEFT SIDE: Logo and Name */}
        <a href="#" className="flex items-center gap-3 group order-1">
          <PhoenixLogo className="w-8 h-8 group-hover:rotate-12 transition-transform" />
          <div className="font-display text-xl md:text-2xl font-bold tracking-tight">
            <span className="text-brand-text">PHOENIX</span>
            <span className="text-brand-primary">LABS</span>
            <span className="text-brand-slate opacity-40 ml-1">AI</span>
          </div>
        </a>

        {/* CENTER: Menu Dropdown (Desktop) */}
        <div className="hidden md:flex items-center gap-6 order-2">
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-brand-slate hover:text-brand-text bg-brand-text/5 hover:bg-brand-text/10 transition-all border border-brand-text/5"
            >
              Explore Solutions
              <motion.div
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-4 w-64 glass-panel rounded-[24px] overflow-hidden shadow-2xl border border-brand-text/10 p-2 z-50"
                >
                  <div className="py-2 space-y-1">
                    {navLinks.map((link) => (
                      <a 
                        key={link.name}
                        href={link.href}
                        className="flex items-center justify-between px-5 py-4 rounded-xl text-sm font-medium text-brand-slate hover:text-brand-primary hover:bg-brand-primary/5 transition-all group"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {link.name}
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full hover:bg-brand-primary/10 transition-colors text-brand-slate bg-brand-text/5"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* RIGHT SIDE: Free Website Audit (Desktop) */}
        <div className="hidden md:flex items-center order-3">
          <a href="#contact" className="group relative px-8 py-3 rounded-full overflow-hidden bg-brand-primary text-white font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_var(--color-primary-glow)]">
            <span className="relative z-10 flex items-center gap-2">
              Free Website Audit <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
              animate={{ x: ['100%', '-100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4 order-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl glass-panel text-brand-slate"
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button className="text-brand-text p-2 rounded-xl glass-panel" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 glass-panel rounded-3xl p-8 flex flex-col items-center space-y-4 md:hidden shadow-2xl z-40 border-brand-text/5"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="w-full text-center py-4 text-xl font-display font-medium text-brand-text hover:text-brand-primary transition-colors border-b border-brand-text/5 last:border-0" 
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="w-full mt-4 text-center bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-brand-primary/20"
              onClick={() => setIsOpen(false)}
            >
              Get Free Audit
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

