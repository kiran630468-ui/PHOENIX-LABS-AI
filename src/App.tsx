import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import TransformationSection from './components/TransformationSection';
import GrowthSystems from './components/GrowthSystems';
import AIFeatures from './components/AIFeatures';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import LoadingScreen from './components/LoadingScreen';
import FloatingElements from './components/FloatingElements';
import CursorTrail from './components/CursorTrail';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check time of day on mount
    const hour = new Date().getHours();
    const isDayTime = hour >= 6 && hour < 18;
    
    // Default to time-based but allow override via local storage if implemented later
    const initialTheme = !isDayTime;
    setIsDark(initialTheme);
    
    if (initialTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-primary selection:text-white relative transition-colors duration-500 font-sans">
      {/* Global Cinematic Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Dynamic Background Elements */}
      <FloatingElements />
      <CursorTrail />
      
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <ProblemSection />
        <TransformationSection />
        
        <div id="systems">
          <GrowthSystems />
        </div>
        <div id="ai">
          <AIFeatures />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>

        <div id="process">
          <Process />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

