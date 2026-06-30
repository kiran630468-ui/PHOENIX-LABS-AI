import { motion } from 'motion/react';
import { Calendar, MessageCircle, Clock, Shield, Users, Activity, Heart, Droplets, Smile, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

export default function CalciumHospitalPreview() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 md:px-8 text-xs font-medium flex justify-between items-center">
        <div className="flex items-center gap-2 text-green-400">
          <Shield size={14} />
          <span>Tested by 10,000+ Happy Patients</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-6 md:px-12 py-12 md:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Trusted <span className="text-blue-600">Healthcare</span> for Your Entire Family
          </h1>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed md:text-lg">
            Experience world-class medical care with our expert doctors. Quick appointments, minimal waiting time, and compassionate treatment for all your health needs.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition flex items-center gap-2 text-sm md:text-base">
              <Calendar size={18} /> Book Appointment
            </button>
            <button className="px-6 py-3 rounded-full bg-green-500 text-white font-bold hover:bg-green-600 transition flex items-center gap-2 text-sm md:text-base">
              <MessageCircle size={18} /> WhatsApp Now
            </button>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img loading="lazy" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" />
                </div>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="font-bold text-sm">4.9/5 Rating</div>
              <div className="text-xs text-slate-500">Based on 2,500+ reviews</div>
            </div>
          </div>
        </div>
        <div className="relative px-4 sm:px-0">
          <div className="aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl relative">
            <img loading="lazy" src="/images/calcium_hospital/hero.jpg" alt="Doctor" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-4 -left-4 sm:top-8 sm:-left-8 bg-white p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3 animate-bounce">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Phone size={16} className="sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-[10px] text-slate-500 font-bold uppercase underline-offset-1">24/7 Support</div>
              <div className="font-black text-xs sm:text-base">+1 (234) 567-890</div>
            </div>
          </div>
          <div className="absolute bottom-4 -right-4 sm:bottom-8 sm:-right-8 bg-white p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3">
            <div className="text-green-500"><Shield size={20} className="sm:w-6 sm:h-6" /></div>
            <div>
              <div className="text-[10px] text-slate-500 font-bold uppercase">Verified Clinic</div>
              <div className="font-black text-xs sm:text-sm">ISO Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto relative z-10 -mt-2 sm:-mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: <Users />, val: "10k+", label: "Patients Served", sub: "Trusted by families across the city." },
            { icon: <Activity />, val: "15+", label: "Years Experience", sub: "Providing expert medical care since 2011." },
            { icon: <Shield />, val: "100%", label: "ISO Certified", sub: "Meeting international healthcare standards." },
            { icon: <Clock />, val: "15min", label: "Avg. Wait Time", sub: "We value your time and health." },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg border border-slate-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">{stat.val}</div>
              <div className="font-bold text-blue-600 mb-1 sm:mb-2 text-sm sm:text-base">{stat.label}</div>
              <div className="text-xs sm:text-sm text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-12 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
          <div className="text-blue-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">Our Expertise</div>
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6">Comprehensive Medical Services</h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">We offer a wide range of specialized medical services to ensure you and your family receive the best possible care under one roof.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            { icon: <Activity />, color: "text-blue-600", bg: "bg-blue-50", title: "General Consultation", desc: "Comprehensive health checkups and expert medical advice for all age groups." },
            { icon: <Heart />, color: "text-red-500", bg: "bg-red-50", title: "Diabetes & BP Management", desc: "Personalized treatment plans to manage chronic conditions effectively." },
            { icon: <Smile />, color: "text-orange-500", bg: "bg-orange-50", title: "Skin & Allergy Treatment", desc: "Advanced care for dermatological issues and various allergic reactions." },
            { icon: <Users />, color: "text-purple-500", bg: "bg-purple-50", title: "Child Healthcare", desc: "Specialized medical care for infants, children, and adolescents." },
            { icon: <Shield />, color: "text-emerald-500", bg: "bg-emerald-50", title: "Preventive Checkups", desc: "Early detection and prevention of potential health risks and diseases." },
            { icon: <Heart />, color: "text-rose-500", bg: "bg-rose-50", title: "Heart Health Care", desc: "Comprehensive cardiovascular screenings and heart-healthy lifestyle guidance." },
          ].map((service, i) => (
            <div key={i} className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 group">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-4 sm:mb-6 mix-blend-multiply`}>
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 line-clamp-2 md:line-clamp-3">{service.desc}</p>
              <a href="#" className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all text-sm sm:text-base">
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Profile */}
      <div className="py-12 md:py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative px-4 sm:px-0 max-w-md mx-auto lg:max-w-none">
             <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-xl">
               <img loading="lazy" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" alt="Dr. Sarah Johnson" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-blue-600 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border-4 border-slate-50">
               <div className="text-2xl sm:text-3xl font-black">15+</div>
               <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider opacity-80">Years Exp.</div>
             </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-blue-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">Meet Our Expert</div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Dr. Sarah Johnson</h2>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-bold">MD, Internal Medicine</span>
              <span className="flex items-center gap-1 text-xs sm:text-sm font-bold text-orange-500"><Activity size={16} /> 4.9/5 Rating</span>
            </div>
            <p className="text-slate-600 mb-8 text-sm sm:text-lg leading-relaxed">
              Dr. Sarah Johnson is a highly experienced physician dedicated to providing personalized healthcare. With over 15 years of expertise in internal medicine and family care, she focuses on preventive treatments and holistic wellness for patients of all ages.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 text-left">
              {[
                "Expert in Chronic Disease Management",
                "Specialized in Child Healthcare",
                "Preventive Health Screenings",
                "Advanced Diagnostic Skills",
                "Compassionate Patient Care",
                "Modern Treatment Approaches"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700 font-medium text-sm sm:text-base">
                  <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200 text-sm sm:text-base">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Health Tips */}
      <div className="py-20 px-6 md:px-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Essential Health Tips</h2>
          <p className="text-blue-100 max-w-xl mx-auto">Simple daily habits for a healthier, happier life.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Droplets />, title: "Stay Hydrated", desc: "Drink at least 8 glasses of water daily to maintain energy levels and support your immune system." },
            { icon: <Shield />, title: "Boost Immunity", desc: "Incorporate Vitamin C rich foods like citrus fruits and leafy greens into your daily diet." },
            { icon: <Heart />, title: "Regular Exercise", desc: "Aim for 30 minutes of moderate physical activity daily to keep your heart healthy." },
          ].map((tip, i) => (
            <div key={i} className="bg-blue-700/50 border border-blue-500/30 p-8 rounded-3xl backdrop-blur-sm hover:bg-blue-700 transition">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-6">
                {tip.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{tip.title}</h3>
              <p className="text-blue-100">{tip.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center gap-8 text-sm font-medium text-blue-200">
           <div className="flex items-center gap-2"><CheckCircle size={16} /> Doctor Recommended</div>
           <div className="flex items-center gap-2"><CheckCircle size={16} /> Preventive Focus</div>
           <div className="flex items-center gap-2"><CheckCircle size={16} /> Holistic Care</div>
        </div>
      </div>

      {/* Articles */}
      <div className="py-12 md:py-20 px-6 md:px-12 bg-slate-50">
         <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
          <div className="text-blue-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">Stay Informed</div>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 md:mb-6">Health Tips & Hospital News</h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">Read our latest articles on health, wellness, and updates from Calcium Hospital.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { tag: "Health Tips", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80", date: "Oct 15, 2023", title: "10 Ways to Boost Your Immune System Naturally", desc: "Discover simple lifestyle changes and dietary additions that can help strengthen your body's natural defenses against common illnesses." },
            { tag: "Hospital News", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80", date: "Oct 10, 2023", title: "Calcium Hospital Opens New State-of-the-Art Pediatric Wing", desc: "We are thrilled to announce the opening of our new pediatric wing, designed specifically to provide a comforting environment for children." },
            { tag: "Medical Insights", img: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=600&q=80", date: "Oct 05, 2023", title: "Understanding Heart Health: Prevention and Care", desc: "Learn about the early warning signs of cardiovascular issues and the steps you can take today to ensure a healthier heart tomorrow." }
          ].map((article, i) => (
            <div key={i} className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
               <div className="h-40 sm:h-48 relative">
                 <img loading="lazy" src={article.img} alt={article.title} className="w-full h-full object-cover" />
                 <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-blue-600">{article.tag}</div>
               </div>
               <div className="p-5 sm:p-6">
                 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 sm:mb-3">
                   <Calendar size={14} /> {article.date}
                 </div>
                 <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 leading-tight">{article.title}</h3>
                 <p className="text-slate-600 mb-4 sm:mb-6 text-xs sm:text-sm">{article.desc}</p>
                 <a href="#" className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all text-sm">
                   Read Article <ArrowRight size={16} />
                 </a>
               </div>
            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-12 text-center">
          <button className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition text-sm sm:text-base">View All Articles</button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2">Patient Stories</div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">What Our Patients Say</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We take pride in providing compassionate care. Here are some experiences shared by our valued patients.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
           {[
             { name: "Emily Davis", role: "Patient", text: "Dr. Sarah is amazing! She took the time to listen to my concerns and provided a clear treatment plan. The clinic is very clean and the staff is friendly." },
             { name: "Michael Smith", role: "Patient", text: "I was impressed by the short waiting time. I booked an appointment via WhatsApp and was seen within 10 minutes of arriving. Highly recommend!" },
             { name: "Sarah Wilson", role: "Parent", text: "The pediatric care here is exceptional. My kids feel comfortable with the doctors, and the preventive checkups have been very helpful for our family." }
           ].map((t, i) => (
             <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="flex text-yellow-500 mb-4">
                    {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
                  </div>
                  <p className="text-lg text-slate-700 font-medium italic mb-8">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt={t.name} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Appointment Form area */}
      <div className="py-12 md:py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div className="text-center lg:text-left">
            <div className="text-blue-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">Book Your Visit</div>
            <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6">Schedule an Appointment Today</h2>
            <p className="text-slate-600 mb-8 text-sm sm:text-lg">Take the first step towards better health. Fill out the form below or contact us via WhatsApp for a quick booking.</p>
            
            <div className="space-y-4 md:space-y-6 mb-8 text-left">
              <div className="flex items-start gap-4 p-4 rounded-xl sm:rounded-2xl bg-white shadow-sm border border-slate-100">
                 <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0"><Shield size={20} /></div>
                 <div>
                   <div className="font-bold text-slate-900 mb-1 text-sm sm:text-base">Expert Consultation</div>
                   <p className="text-xs sm:text-sm text-slate-500">Get personalized medical advice.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl sm:rounded-2xl bg-white shadow-sm border border-slate-100">
                 <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0"><Calendar size={20} /></div>
                 <div>
                   <div className="font-bold text-slate-900 mb-1 text-sm sm:text-base">Flexible Scheduling</div>
                   <p className="text-xs sm:text-sm text-slate-500">Choose a time that works for you.</p>
                 </div>
              </div>
            </div>
            
            <button className="px-6 py-4 rounded-full bg-green-500 text-white font-bold hover:bg-green-600 transition flex items-center gap-2 w-full justify-center lg:w-auto shadow-lg shadow-green-200 text-sm sm:text-base">
              <MessageCircle size={20} /> Book via WhatsApp
            </button>
          </div>
          
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100">
             <form className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 flex items-center gap-2"><Users size={16}/> Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition text-sm" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 flex items-center gap-2"><Phone size={16}/> Phone Number</label>
                  <input type="tel" placeholder="+1 (234) 567-890" className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition text-sm" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 flex items-center gap-2"><Calendar size={16}/> Preferred Date</label>
                  <input type="date" className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition text-slate-600 text-sm" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2 flex items-center gap-2"><MessageCircle size={16}/> Message (Optional)</label>
                  <textarea placeholder="Briefly describe your health concern..." rows={3} className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition text-sm"></textarea>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-700 mb-3">Automated Reminders</div>
                  <label className="flex items-center gap-3 mb-2 cursor-pointer text-[10px] sm:text-sm text-slate-600">
                    <input type="checkbox" className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300" />
                    Send me appointment reminders via SMS
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer text-[10px] sm:text-sm text-slate-600">
                    <input type="checkbox" className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300" />
                    Send me appointment reminders via Email
                  </label>
                </div>
                <button type="button" className="w-full py-3.5 sm:py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 text-sm sm:text-base">
                  <ArrowRight size={20} /> Request Appointment
                </button>
             </form>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 md:px-12 py-20 pb-0 max-w-7xl mx-auto">
         <div className="bg-blue-600 rounded-[2rem] p-12 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
           
           <div className="relative z-10">
             <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Prioritize Your<br/>Health?</h2>
             <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">Join thousands of satisfied patients who trust Calcium Hospital for their medical needs. Book your appointment today and experience the difference.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 rounded-full bg-white text-blue-600 font-bold hover:bg-blue-50 transition flex items-center justify-center gap-2">
                  <Calendar size={20} /> Book Appointment
                </button>
                <button className="px-8 py-4 rounded-full bg-green-500 text-white font-bold hover:bg-green-600 transition flex items-center justify-center gap-2">
                  <MessageCircle size={20} /> WhatsApp Now
                </button>
             </div>
             <div className="mt-8 flex justify-center gap-6 text-sm text-blue-200 font-medium">
               <div className="flex items-center gap-2"><CheckCircle size={16} /> No Waiting Time</div>
               <div className="flex items-center gap-2"><CheckCircle size={16} /> Expert Doctors</div>
               <div className="flex items-center gap-2"><CheckCircle size={16} /> 24/7 Support</div>
             </div>
           </div>
         </div>
      </div>

      {/* Footer Info */}
      <div className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2">Find Us</div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Visit Our Clinic</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We are conveniently located in the heart of the city. Visit us for expert medical care or reach out via phone or WhatsApp.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
           {[
             { icon: <MapPin />, title: "Our Address", text: "123 Health Avenue, Medical District, City Center, 560001" },
             { icon: <Phone />, title: "Call Us", text: "+1 (234) 567-890", sub: "Mon - Sat: 9:00 AM - 8:00 PM" },
             { icon: <Clock />, title: "Working Hours", text: "Mon - Fri: 9:00 AM - 8:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed" }
           ].map((info, i) => (
             <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
               <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                 {info.icon}
               </div>
               <div>
                  <div className="font-bold text-slate-900 mb-1">{info.title}</div>
                  <div className="text-slate-600 whitespace-pre-line">{info.text}</div>
                  {info.sub && <div className="text-sm text-slate-400 mt-1">{info.sub}</div>}
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
