import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 500px
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-brand-primary text-white rounded-full shadow-lg shadow-brand-primary/40 flex items-center justify-center hover:opacity-90 transition-all font-sans"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        href="tel:+916304686019"
        className="w-14 h-14 bg-brand-text text-brand-bg rounded-full shadow-lg shadow-brand-text/20 flex items-center justify-center hover:scale-110 transition-transform border border-brand-text/10"
        aria-label="Call us"
      >
        <Phone size={24} />
      </motion.a>

      {/* WhatsApp Button with Pulse */}
      <div className="relative group">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0, 0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-[#25D366] rounded-full"
        />
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1, type: "spring", stiffness: 200, damping: 20 }}
          href="https://wa.me/916304686019?text=Hi%20Kiran,%20I'm%20visiting%20your%20website.%20I%20want%20to%20discuss%20a%20premium%20website%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/40 flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={32} />
        </motion.a>
        
        {/* Hover Label */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 px-4 py-2 bg-zinc-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
          WhatsApp Inquiry
        </div>
      </div>
    </div>
  );
}
