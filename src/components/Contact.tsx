import { Phone, Mail, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-brand-light">
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <div className="bg-brand-orange rounded-[3rem] p-10 md:p-20 text-white text-center mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 shape-blob-1 -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight mb-6 leading-none">
              Ready to Grow Your <br className="hidden md:block" /> Business Online?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Don't let your competitors take your customers. Get a professional, high-converting website today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/910000000000" className="bg-white text-brand-orange px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-gray-100 transition-transform hover:scale-105">
                <MessageCircle size={24} /> WhatsApp Now
              </a>
              <a href="tel:+910000000000" className="bg-brand-dark text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-gray-900 transition-transform hover:scale-105">
                <Phone size={24} /> Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Let's Start a <span className="text-brand-blue">Conversation</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Have a question or ready to start your project? Fill out the form or reach out directly via phone or email. I usually respond within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Call Me</p>
                  <p className="text-xl font-bold">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-brand-pink/10 text-brand-pink rounded-2xl flex items-center justify-center">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Email Me</p>
                  <p className="text-xl font-bold">hello@kiran.dev</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400">WhatsApp</p>
                  <p className="text-xl font-bold">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-1">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-1">Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-1">Business Type</label>
                <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all">
                  <option>Gym / Fitness</option>
                  <option>Salon / Spa</option>
                  <option>Clinic / Hospital</option>
                  <option>Restaurant</option>
                  <option>Other Business</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-1">How can I help?</label>
                <textarea rows={4} placeholder="Tell me about your project..." className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"></textarea>
              </div>
              <button className="w-full bg-brand-blue text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
