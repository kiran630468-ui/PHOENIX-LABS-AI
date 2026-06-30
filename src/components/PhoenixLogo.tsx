import { useId } from 'react';

export default function PhoenixLogo({ className = "w-8 h-8" }: { className?: string }) {
  const uid = useId();

  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id={`phoenix-grad-${uid}`} x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6A00" />
          <stop offset="1" stopColor="#FF3C00" />
        </linearGradient>
        <filter id={`glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#FF6A00" floodOpacity="0.4"/>
        </filter>
      </defs>

      <g filter={`url(#glow-${uid})`} stroke={`url(#phoenix-grad-${uid})`} strokeWidth="5" strokeLinejoin="miter" strokeLinecap="butt">
        {/* Eye */}
        <rect x="66" y="12" width="5" height="5" fill={`url(#phoenix-grad-${uid})`} stroke="none" />
        
        {/* Head */}
        <path d="M 55 5 Q 62 12 70 10 L 82 10 Q 88 10 85 16 L 75 22 L 68 18 L 55 26 L 62 18 Z" fill="none" />
        
        {/* Back */}
        <path d="M 75 32 Q 88 45 85 65 L 80 75" fill="none" />
        
        {/* Wing & Chest */}
        <path d="M 62 30 Q 45 25 20 15 Q 30 30 40 35 L 15 45 Q 35 50 45 55 L 25 70 Q 45 75 60 75 Q 75 55 62 30 Z" fill="none" />
        
        {/* Tail */}
        <path d="M 65 82 Q 55 70 40 68 L 50 75 Q 45 80 30 85 L 50 85 Q 45 90 35 95 Q 55 95 65 82 Z" fill="none" />
      </g>
    </svg>
  );
}
