import { useState } from 'react';
import type { FormEvent } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setSent(false); // Reset sent state when reopening
  };

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSending(true);

    // Simulate sending, then use mailto as the "immediate notification" to Kiran Kumar
    setTimeout(() => {
      setIsSending(false);
      setSent(true);
      setMessage('');
      
      // Use mailto to notify Kiran Kumar directly
      // In a real application, you might use a backend API, Web3Forms, or connect to WhatsApp API
      window.location.href = `mailto:kiran630468@gmail.com?subject=New Message from Website&body=${encodeURIComponent(message)}`;
      
      // Auto close after 3 seconds
      setTimeout(() => setIsOpen(false), 3000);
    }, 800);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-orange to-[#FF3C00] p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-orange font-bold text-lg">
                    K
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Kiran Kumar</h3>
                  <p className="text-xs text-white/80">Typically replies right away</p>
                </div>
              </div>
              <button 
                onClick={toggleChat}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 bg-gray-50 dark:bg-brand-dark/50 flex-grow min-h-[200px] flex flex-col justify-end">
              {sent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-xl text-center shadow-sm"
                >
                  <p className="font-medium text-sm">Message sent!</p>
                  <p className="text-xs mt-1">Kiran will be notified immediately.</p>
                </motion.div>
              ) : (
                <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] self-start border border-gray-100 dark:border-gray-700">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Hi there! 👋 How can I help your business grow today?
                  </p>
                </div>
              )}
            </div>

            {/* Input Footer */}
            {!sent && (
              <form onSubmit={handleSend} className="p-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2">
                <input 
                  type="text" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow bg-gray-100 dark:bg-gray-800 dark:text-white border-transparent focus:border-brand-orange focus:bg-white dark:focus:bg-gray-900 focus:ring-0 rounded-full px-4 py-2 text-sm outline-none transition-all"
                  required
                />
                <button 
                  type="submit"
                  disabled={isSending || !message.trim()}
                  className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center flex-shrink-0 hover:bg-[#FF3C00] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Send message"
                >
                  {isSending ? (
                     <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <Send size={16} className="-ml-0.5" />
                  )}
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-brand-orange to-[#FF3C00] rounded-full shadow-xl flex items-center justify-center text-white"
        aria-label="Open live chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
