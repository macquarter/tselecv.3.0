import React from 'react';

interface LogoProps {
  className?: string;
  withText?: boolean;
}

export default function Logo({ className = "w-8 h-8", withText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-2 group">
      <div className="relative flex items-center justify-center">
        {/* Subtle glow for the emblem */}
        <div className="absolute inset-0 bg-sky-500/20 rounded-lg blur-md group-hover:bg-sky-400/40 transition-colors duration-300"></div>
        
        {/* SVG Emblem Logo */}
        <svg 
          className={`relative z-10 ${className} drop-shadow-[0_0_5px_rgba(56,189,248,0.5)]`} 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ts-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BAE6FD" /> {/* sky-200 */}
              <stop offset="50%" stopColor="#38BDF8" /> {/* sky-400 */}
              <stop offset="100%" stopColor="#0284C7" /> {/* sky-600 */}
            </linearGradient>
          </defs>

          {/* IC Pins */}
          <path d="M10 0V4 M15 0V4 M20 0V4 M25 0V4 M30 0V4 M10 36V40 M15 36V40 M20 36V40 M25 36V40 M30 36V40 M0 10H4 M0 15H4 M0 20H4 M0 25H4 M0 30H4 M36 10H40 M36 15H40 M36 20H40 M36 25H40 M36 30H40" stroke="#38BDF8" strokeWidth="1.5"/>
          
          {/* Chip Body */}
          <rect x="4" y="4" width="32" height="32" rx="3" fill="#020617" stroke="#38BDF8" strokeWidth="2"/>
          
          {/* Inner Die */}
          <rect x="8" y="8" width="24" height="24" rx="1" fill="#0F172A" stroke="#1E293B" strokeWidth="1"/>
          
          {/* Pin 1 Indicator */}
          <circle cx="7" cy="7" r="1" fill="#38BDF8"/>
          
          {/* Die Traces connecting TS to the edge */}
          <path d="M14.5 27.5V32 M25.5 8V12.5 M8 14H10 M30 26H32" stroke="url(#ts-grad)" strokeWidth="1.5"/>

          {/* TS Monogram */}
          <path d="M10 12.5H19V15.5H16V27.5H13V15.5H10V12.5Z M30 12.5H21V21.5H27V24.5H21V27.5H30V18.5H24V15.5H30V12.5Z" fill="url(#ts-grad)"/>
        </svg>
      </div>
      
      {withText && (
        <div className="flex flex-col justify-center">
          <span className="text-white font-black tracking-[-0.1em] text-xl leading-none pr-1">
            TSELEC
          </span>
          <span className="text-[9px] text-sky-400 font-bold tracking-[-0.05em] uppercase mt-[2px] leading-none">
            Electronics
          </span>
        </div>
      )}
    </div>
  );
}
