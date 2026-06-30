import { CheckCircle2, Clock, Smartphone, Search, Headphones, Tag } from 'lucide-react';

const reasons = [
  {
    title: "Fast Delivery",
    description: "Get your business online in as little as 7-10 days without compromising on quality.",
    icon: Clock
  },
  {
    title: "Mobile Optimized",
    description: "90% of your customers are on mobile. I ensure your site looks perfect on every screen.",
    icon: Smartphone
  },
  {
    title: "SEO-Friendly",
    description: "Built-in SEO best practices to help you rank higher on Google search results.",
    icon: Search
  },
  {
    title: "Affordable Pricing",
    description: "Premium agency-quality work at prices that make sense for local Indian businesses.",
    icon: Tag
  },
  {
    title: "Ongoing Support",
    description: "I don't just launch and leave. I'm here for updates, security, and maintenance.",
    icon: Headphones
  },
  {
    title: "Result Oriented",
    description: "Every button and image is placed with the goal of converting visitors into leads.",
    icon: CheckCircle2
  }
];

export default function WhyChooseMe() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
            Why <span className="text-brand-orange">Partner</span> With Me?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I offer more than just code. I offer a partnership dedicated to your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center">
                  <reason.icon size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
