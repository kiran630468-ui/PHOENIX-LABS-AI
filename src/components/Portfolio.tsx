import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight, Zap, ExternalLink, Shield, Smartphone, MapPin } from 'lucide-react';

interface CardData {
  id: string;
  title: string;
  imgUrl: string;
  linkUrl: string;
  alt: string;
  niche: string;
  desc: string;
  tags: string[];
  result: string;
}

const CARDS_DATA: CardData[] = [
  {
    id: "calcium-hospital",
    title: "Calcium Hospital",
    imgUrl: "/images/Calcium Hospital.jpeg",
    linkUrl: "#calcium-hospital",
    alt: "Calcium Hospital Multi-Specialty Clinic Website",
    niche: "CLINICS & HOSPITALS",
    desc: "Total authority restoration for a multi-specialty clinic, built for patient trust and instant appointment action.",
    tags: ["WhatsApp Appointment", "Doctor Profiles", "Emergency Triggers"],
    result: "65% Automated Bookings"
  },
  {
    id: "larome-cafe",
    title: "L'Arôme Café",
    imgUrl: "/images/L'Arôme Café.jpeg",
    linkUrl: "#larome-cafe",
    alt: "L'Arôme Café Website",
    niche: "CAFÉS & COFFEE SHOPS",
    desc: "Artisan café digital experience with atmosphere-first design, online menu, and WhatsApp pre-order system.",
    tags: ["Digital Menu", "WhatsApp Pre-Orders", "Ambience Showcase"],
    result: "3x Daily Walk-In Inquiries"
  },
  {
    id: "luxecut-salon",
    title: "LuxeCut Salon",
    imgUrl: "/images/LuxeCut Salon.jpeg",
    linkUrl: "#luxecut-salon",
    alt: "LuxeCut Premium Salon Website",
    niche: "LUXURY SALONS",
    desc: "High-end salon booking experience designed to attract premium clientele and eliminate manual scheduling.",
    tags: ["Slot Booking", "Style Gallery", "VIP Client Portal"],
    result: "Fully Booked 4 Weeks Out"
  },
  {
    id: "style-makers-salon",
    title: "Style Makers Family Salon",
    imgUrl: "/images/Style Makers Family Salon.jpeg",
    linkUrl: "#style-makers-salon",
    alt: "Style Makers Family Salon Website",
    niche: "FAMILY SALONS",
    desc: "Warm, trust-first digital presence for a family salon, built for local discovery and repeat customer loyalty.",
    tags: ["WhatsApp Booking", "Service Showcase", "Google Maps SEO"],
    result: "2x Repeat Customer Rate"
  },
  {
    id: "zenith-academy",
    title: "Zenith Academy",
    imgUrl: "/images/Zenith Academy.jpeg",
    linkUrl: "#zenith-academy",
    alt: "Zenith Academy Coaching Institution Website",
    niche: "COACHING & EDUCATION",
    desc: "Authority-first website for a coaching institution, designed to drive enrolment inquiries and build student trust.",
    tags: ["Course Catalogue", "Enrolment Funnel", "Results Showcase"],
    result: "80% More Admission Inquiries"
  },
  {
    id: "wemakefiction",
    title: "WeMakeFiction",
    imgUrl: "/images/WeMakeFiction.jpeg",
    linkUrl: "#wemakefiction",
    alt: "WeMakeFiction AI Film Studio Website",
    niche: "AI FILM & CREATIVE STUDIO",
    desc: "Cinematic dark-aesthetic website for an AI film studio — built to impress industry clients and attract collaboration.",
    tags: ["Cinematic UI", "Project Showcase", "Collaboration CTA"],
    result: "Industry-Grade Digital Authority"
  },
  {
    id: "aristo-hyderabad",
    title: "Aristo Hyderabad",
    imgUrl: "/images/Aristo Hyderabad.jpeg",
    linkUrl: "#aristo-hyderabad",
    alt: "Aristo Hyderabad Luxury Real Estate Website",
    niche: "LUXURY REAL ESTATE",
    desc: "Premium property advisory website with luxury visual language, virtual tour integrations and high-ticket lead capture.",
    tags: ["Property Listings", "Virtual Tours", "Lead Capture Funnel"],
    result: "40% More Qualified Buyer Inquiries"
  },
  {
    id: "gusto-dining",
    title: "Gusto",
    imgUrl: "/images/Gusto.jpeg",
    linkUrl: "#gusto-dining",
    alt: "Gusto Premium Dining & Fast Delivery Website",
    niche: "RESTAURANTS & FAST DELIVERY",
    desc: "Dual-mode dining experience — premium sit-down atmosphere meets fast delivery system in one high-converting website.",
    tags: ["Motion Menu Design", "Delivery Integration", "Table RSVPs"],
    result: "2.4x Table Bookings + Online Orders"
  },
  {
    id: "stayease-pg",
    title: "StayEase PG & Hostel",
    imgUrl: "/images/StayEase PG.jpeg",
    linkUrl: "#stayease-pg",
    alt: "StayEase PG and Hostel Website",
    niche: "PG & HOSTELS",
    desc: "Trust-first accommodation website with room availability showcase, WhatsApp inquiry flow, and local SEO dominance.",
    tags: ["Room Gallery", "WhatsApp Inquiry", "Locality Map"],
    result: "3x Occupancy Inquiry Rate"
  },
  {
    id: "flex-gym",
    title: "Flex Gym",
    imgUrl: "/images/Flex Gym.jpeg",
    linkUrl: "#flex-gym",
    alt: "Flex Gym Fitness Website",
    niche: "GYMS & FITNESS",
    desc: "High-energy membership funnel for a premium gym — built to convert visitors into trial bookings on first visit.",
    tags: ["Trial Booking", "Trainer Profiles", "Transformation Gallery"],
    result: "3x Membership Sign-Up Inquiries"
  }
];

const SLOT_CONFIGS = [
  { rotation: -21, scale: 0.7756, xRem: -30, yRem: 7.3, zIndex: 1 },
  { rotation: -14, scale: 0.8498, xRem: -22, yRem: 4.0, zIndex: 2 },
  { rotation: -7,  scale: 0.9346, xRem: -11, yRem: 1.3, zIndex: 3 },
  { rotation: 0,   scale: 1.0,    xRem: 0,   yRem: 0.0, zIndex: 10 },
  { rotation: 7,   scale: 0.9346, xRem: 11,  yRem: 1.3, zIndex: 3 },
  { rotation: 14,  scale: 0.8498, xRem: 22,  yRem: 4.0, zIndex: 2 },
  { rotation: 21,  scale: 0.7756, xRem: 30,  yRem: 7.3, zIndex: 1 }
];

const TRUST_BADGES = [
  "MOBILE-FIRST EXPERIENCE",
  "OPTIMIZED FOR INDIAN MARKETS",
  "CONVERSION-FOCUSED LAYOUTS",
  "BUILT FOR LOCAL TRUST"
];

export default function Portfolio() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);
  const [detailOpen, setDetailOpen] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const detailPanelRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const prevCenterRef = useRef(0);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const debounceLeaveRef = useRef<NodeJS.Timeout | null>(null);

  // Detect dimension changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute Layout Parameters
  const getLayout = () => {
    const w = dimensions.width;
    const h = dimensions.height;
    let respMult = 1.0;
    let idealHeight = 608;

    if (w < 480) {
      respMult = 0.28;
      idealHeight = 352;
    } else if (w < 640) {
      respMult = 0.38;
      idealHeight = 416;
    } else if (w < 768) {
      respMult = 0.50;
      idealHeight = 448;
    } else if (w < 1024) {
      respMult = 0.75;
      idealHeight = 544;
    } else {
      respMult = 1.0;
      idealHeight = 608;
    }

    const hMult = Math.min(1, (h * 0.7) / idealHeight);
    return { respMult, hMult, idealHeight };
  };

  const { respMult, hMult } = getLayout();
  const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  // Render carousel states
  const animateToState = (direction: 'left' | 'right' | null, isMount: boolean) => {
    const cards = containerRef.current?.querySelectorAll('.carousel-card');
    if (!cards || cards.length === 0) return;

    isAnimating.current = true;

    cards.forEach((cardEl, idx) => {
      let diff = idx - centerIndex;
      diff = ((diff + 5) % 10 + 10) % 10 - 5; // maps to -5..4
      
      const isVisible = diff >= -3 && diff <= 3;
      const slotIndex = isVisible ? diff + 3 : -1;

      if (isMount) {
        if (prefersReducedMotion) {
          if (isVisible) {
            const config = SLOT_CONFIGS[slotIndex];
            gsap.set(cardEl, {
              x: config.xRem * 16 * respMult,
              y: config.yRem * 16 * respMult * hMult,
              rotation: config.rotation,
              scale: config.scale,
              zIndex: config.zIndex,
              opacity: 1,
              display: 'block'
            });
          } else {
            gsap.set(cardEl, {
              opacity: 0,
              scale: 0.3,
              display: 'none'
            });
          }
          if (idx === centerIndex) {
            isAnimating.current = false;
          }
        } else {
          // ON MOUNT ANIMATION
          gsap.set(cardEl, {
            y: 12 * 16 * hMult,
            scale: 0.5,
            opacity: 0,
            x: 0,
            rotation: 0,
            display: 'block'
          });

          if (isVisible) {
            const config = SLOT_CONFIGS[slotIndex];
            const delay = 0.2 + slotIndex * 0.06;

            gsap.to(cardEl, {
              x: config.xRem * 16 * respMult,
              y: config.yRem * 16 * respMult * hMult,
              rotation: config.rotation,
              scale: config.scale,
              opacity: 1,
              zIndex: config.zIndex,
              duration: 1.2,
              delay: delay,
              ease: "elastic.out(1.05, 0.78)",
              onComplete: () => {
                if (idx === centerIndex) {
                  isAnimating.current = false;
                }
              }
            });
          } else {
            gsap.set(cardEl, {
              opacity: 0,
              scale: 0.3,
              display: 'none'
            });
          }
        }
      } else {
        // NORMAL TRANSITIONS
        if (isVisible) {
          const config = SLOT_CONFIGS[slotIndex];
          const isEntering = (direction === 'right' && slotIndex === 6) || (direction === 'left' && slotIndex === 0);

          if (isEntering) {
            const startX = direction === 'right' ? 40 * 16 * respMult : -40 * 16 * respMult;
            const startRot = direction === 'right' ? 30 : -30;

            gsap.set(cardEl, {
              x: startX,
              rotation: startRot,
              scale: 0.5,
              opacity: 0,
              zIndex: config.zIndex,
              display: 'block'
            });

            gsap.to(cardEl, {
              x: config.xRem * 16 * respMult,
              y: config.yRem * 16 * respMult * hMult,
              rotation: config.rotation,
              scale: config.scale,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              onComplete: () => {
                if (idx === centerIndex) {
                  isAnimating.current = false;
                }
              }
            });
          } else {
            gsap.to(cardEl, {
              x: config.xRem * 16 * respMult,
              y: config.yRem * 16 * respMult * hMult,
              rotation: config.rotation,
              scale: config.scale,
              opacity: 1,
              zIndex: config.zIndex,
              display: 'block',
              duration: 0.6,
              ease: "power2.out",
              onComplete: () => {
                if (idx === centerIndex) {
                  isAnimating.current = false;
                }
              }
            });
          }
        } else {
          // Non-visible cards
          const isExitingRight = direction === 'right' && diff === -4;
          const isExitingLeft = direction === 'left' && diff === 4;

          if (isExitingRight) {
            gsap.to(cardEl, {
              x: -40 * 16 * respMult,
              rotation: -30,
              scale: 0.5,
              opacity: 0,
              duration: 0.4,
              ease: "power2.in",
              onComplete: () => {
                gsap.set(cardEl, { display: 'none' });
              }
            });
          } else if (isExitingLeft) {
            gsap.to(cardEl, {
              x: 40 * 16 * respMult,
              rotation: 30,
              scale: 0.5,
              opacity: 0,
              duration: 0.4,
              ease: "power2.in",
              onComplete: () => {
                gsap.set(cardEl, { display: 'none' });
              }
            });
          } else {
            gsap.set(cardEl, {
              opacity: 0,
              scale: 0.3,
              display: 'none'
            });
          }
        }
      }
    });

    // Guard timeout to safely unlock animations
    gsap.delayedCall(0.65, () => {
      isAnimating.current = false;
    });
  };

  const isFirstMount = useRef(true);

  // Trigger animations on centerIndex change or resize
  useEffect(() => {
    let direction: 'left' | 'right' | null = null;
    if (!isFirstMount.current) {
      const diff = centerIndex - prevCenterRef.current;
      if (diff === 1 || diff === -9) {
        direction = 'right';
      } else if (diff === -1 || diff === 9) {
        direction = 'left';
      }
    }

    animateToState(direction, isFirstMount.current);
    setActiveDetailIndex(centerIndex);
    
    if (isFirstMount.current) {
      isFirstMount.current = false;
    }
    prevCenterRef.current = centerIndex;
  }, [centerIndex, dimensions]);

  // Restore layout without animation locks on hover exit
  const restoreFanPositions = () => {
    const cards = containerRef.current?.querySelectorAll('.carousel-card');
    if (!cards) return;

    cards.forEach((cardEl, idx) => {
      let diff = idx - centerIndex;
      diff = ((diff + 5) % 10 + 10) % 10 - 5;
      const isVisible = diff >= -3 && diff <= 3;
      const slotIndex = isVisible ? diff + 3 : -1;

      if (isVisible) {
        const config = SLOT_CONFIGS[slotIndex];
        gsap.to(cardEl, {
          x: config.xRem * 16 * respMult,
          y: config.yRem * 16 * respMult * hMult,
          scale: config.scale,
          duration: 0.5,
          ease: "elastic.out(1, 0.75)",
          overwrite: "auto"
        });
      }
    });
  };

  // Hover push spacing algorithm
  const applyHoverSpacing = (hoveredCardIdx: number) => {
    if (isTouchDevice || isAnimating.current) return;

    const cards = containerRef.current?.querySelectorAll('.carousel-card');
    if (!cards) return;

    let hoveredDiff = hoveredCardIdx - centerIndex;
    hoveredDiff = ((hoveredDiff + 5) % 10 + 10) % 10 - 5;
    const hoveredSlotIndex = hoveredDiff + 3;

    cards.forEach((cardEl, idx) => {
      let diff = idx - centerIndex;
      diff = ((diff + 5) % 10 + 10) % 10 - 5;
      const isVisible = diff >= -3 && diff <= 3;
      const slotIndex = isVisible ? diff + 3 : -1;

      if (isVisible) {
        const config = SLOT_CONFIGS[slotIndex];
        const baseX = config.xRem * 16 * respMult;
        const baseY = config.yRem * 16 * respMult * hMult;

        const distance = Math.abs(slotIndex - hoveredSlotIndex);
        const normalized = (slotIndex - hoveredSlotIndex) / 3.0;
        const direction = slotIndex < hoveredSlotIndex ? -1 : slotIndex > hoveredSlotIndex ? 1 : 0;

        let targetX = baseX;
        let targetY = baseY;
        let targetScale = config.scale;

        if (slotIndex === hoveredSlotIndex) {
          targetY = baseY - 2.5 * 16 * hMult;
          targetScale = config.scale * 1.08;
        } else {
          const strength = 8 * 16 * (1 - Math.abs(normalized)) * (1 + 0.2 * Math.max(0, 3 - distance));
          const push = direction * strength * respMult;
          targetX = baseX + push;
        }

        gsap.to(cardEl, {
          x: targetX,
          y: targetY,
          scale: targetScale,
          duration: 0.5,
          delay: distance * 0.02,
          ease: "elastic.out(1, 0.75)",
          overwrite: "auto"
        });
      }
    });
  };

  // Hover and Click handlers
  const handleCardMouseEnter = (idx: number) => {
    if (debounceLeaveRef.current) {
      clearTimeout(debounceLeaveRef.current);
      debounceLeaveRef.current = null;
    }

    applyHoverSpacing(idx);

    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      if (!isAnimating.current) {
        setCenterIndex(idx);
      }
    }, 2000);
  };

  const handleCardMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    if (debounceLeaveRef.current) clearTimeout(debounceLeaveRef.current);
    debounceLeaveRef.current = setTimeout(() => {
      restoreFanPositions();
    }, 50);
  };

  const handleCardClick = (idx: number) => {
    if (isAnimating.current) return;

    let diff = idx - centerIndex;
    diff = ((diff + 5) % 10 + 10) % 10 - 5;

    if (diff === 0) {
      // Toggle detail open if clicked on already active
      setDetailOpen(!detailOpen);
      return;
    }

    setCenterIndex(idx);
    setDetailOpen(true);
  };

  const handlePrev = () => {
    if (isAnimating.current) return;
    setCenterIndex((centerIndex - 1 + 10) % 10);
    setDetailOpen(true);
  };

  const handleNext = () => {
    if (isAnimating.current) return;
    setCenterIndex((centerIndex + 1) % 10);
    setDetailOpen(true);
  };

  const activeCard = CARDS_DATA[activeDetailIndex];

  // Dynamic style effects on detail panel toggling
  useEffect(() => {
    if (detailPanelRef.current) {
      if (detailOpen) {
        gsap.to(detailPanelRef.current, {
          y: 0,
          opacity: 1,
          height: 'auto',
          marginTop: '3rem',
          duration: 0.4,
          ease: "power4.out",
          overwrite: "auto"
        });
      } else {
        gsap.to(detailPanelRef.current, {
          y: 30,
          opacity: 0,
          height: 0,
          marginTop: '0px',
          duration: 0.4,
          ease: "power4.in",
          overwrite: "auto"
        });
      }
    }
  }, [detailOpen]);

  useEffect(() => {
    if (detailPanelRef.current && detailOpen) {
      gsap.fromTo(detailPanelRef.current,
        { y: 15, opacity: 0.8 },
        { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
      );
    }
  }, [activeDetailIndex]);

  // Height multiplier bounds the carousel stage
  const carouselStageHeight = 520 * hMult;

  return (
    <section id="success-stories" className="py-24 bg-transparent transition-colors duration-500 relative overflow-hidden scroll-mt-24">
      
      {/* Decorative scanline and backdrop glow */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
            SUCCESS STORIES
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-brand-text leading-[1.0] mb-6 uppercase">
            BUILT TO CONVERT <br />
            <span className="text-brand-primary">REAL CUSTOMERS.</span>
          </h2>
          <p className="text-brand-slate text-sm sm:text-base leading-relaxed max-w-[65ch] mx-auto mb-8">
            We build conversion systems specifically for Indian local businesses — clinics, cafés, salons, gyms, and more — to improve trust, branding, and bookings.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {TRUST_BADGES.map((badge, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full border border-brand-primary/15 bg-brand-primary/5 text-brand-primary text-[10px] font-mono font-bold tracking-wider"
              >
                • {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Carousel Visual Area */}
        <div 
          ref={containerRef}
          className="relative w-full overflow-visible flex items-center justify-center select-none"
          style={{ height: `${carouselStageHeight}px` }}
        >
          {CARDS_DATA.map((card, idx) => {
            let diff = idx - centerIndex;
            diff = ((diff + 5) % 10 + 10) % 10 - 5;
            const isCenter = diff === 0;

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(idx)}
                onMouseEnter={() => handleCardMouseEnter(idx)}
                onMouseLeave={handleCardMouseLeave}
                className="carousel-card absolute w-[260px] h-[420px] rounded-[16px] overflow-hidden select-none cursor-pointer transform-gpu origin-center border border-brand-primary/15 shadow-[0_8px_32px_rgba(0,0,0,0.18)] bg-black"
                style={{
                  display: 'none',
                  zIndex: isCenter ? 10 : 1
                }}
              >
                {/* Visual Image Screen */}
                <img
                  src={card.imgUrl}
                  alt={card.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500 pointer-events-none"
                />
                
                {/* High contrast overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 pointer-events-none" />
                
                {/* Subtle visual glow on centered card */}
                {isCenter && (
                  <div className="absolute inset-0 border-[1.5px] border-brand-primary rounded-[16px] pointer-events-none animate-pulse opacity-60 shadow-[inset_0_0_20px_var(--color-primary-glow)]" />
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Controls: Arrows and Dots */}
        <div className="flex flex-col items-center gap-6 mt-8">
          <div className="flex items-center gap-6">
            
            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              className="relative w-12 h-12 rounded-full flex items-center justify-center bg-brand-primary/10 border-[1.5px] border-brand-primary/25 backdrop-blur-[16px] text-brand-primary hover:border-brand-primary hover:bg-brand-primary/15 shadow-[0_4px_20px_var(--color-primary-glow)] transition-all duration-300 group cursor-pointer"
              aria-label="Previous story"
            >
              <span className="absolute inset-[3px] rounded-full border border-brand-primary/8 pointer-events-none" />
              <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {CARDS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (isAnimating.current) return;
                    setCenterIndex(idx);
                    setDetailOpen(true);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    centerIndex === idx 
                      ? 'bg-brand-primary scale-[1.3] shadow-[0_0_8px_var(--color-primary-glow)]' 
                      : 'bg-brand-primary/25 hover:bg-brand-primary/50'
                  }`}
                  aria-label={`Go to story ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="relative w-12 h-12 rounded-full flex items-center justify-center bg-brand-primary/10 border-[1.5px] border-brand-primary/25 backdrop-blur-[16px] text-brand-primary hover:border-brand-primary hover:bg-brand-primary/15 shadow-[0_4px_20px_var(--color-primary-glow)] transition-all duration-300 group cursor-pointer"
              aria-label="Next story"
            >
              <span className="absolute inset-[3px] rounded-full border border-brand-primary/8 pointer-events-none" />
              <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

          </div>
        </div>

        {/* Detail Panel */}
        <div 
          ref={detailPanelRef} 
          className="max-w-3xl mx-auto glass-panel border-brand-primary/15 shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] rounded-2xl p-6 md:p-8 overflow-hidden opacity-0"
        >
          {activeCard && (
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              {/* Detailed strategy texts */}
              <div className="flex-grow max-w-xl">
                <span className="text-brand-primary text-xs font-mono tracking-widest uppercase mb-2 block">
                  {activeCard.niche}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-black text-brand-text mb-3 uppercase tracking-tight">
                  {activeCard.title}
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed mb-6 line-clamp-2">
                  {activeCard.desc}
                </p>

                {/* Feature Tags badges */}
                <div className="flex flex-wrap gap-2">
                  {activeCard.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-full border border-brand-primary/30 text-brand-primary text-xs font-bold bg-brand-primary/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right panel side stats and actionable CTA */}
              <div className="flex flex-col items-start md:items-end justify-between flex-shrink-0 md:text-right gap-4">
                <div>
                  <span className="text-brand-slate text-[10px] font-mono tracking-wider uppercase block mb-1">
                    KEY OUTCOME
                  </span>
                  <div className="text-[#ff6b35] font-black text-2xl md:text-3xl italic leading-none">
                    ↑ {activeCard.result}
                  </div>
                </div>

                <a 
                  href={activeCard.linkUrl}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-brand-primary text-brand-primary bg-transparent hover:bg-brand-primary hover:text-brand-bg font-bold text-xs uppercase tracking-wider transition-all duration-300 group"
                >
                  View Live Demo
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
