import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex flex-col items-start justify-center font-black tracking-[-0.12em] text-white uppercase select-none group ${className}`}>
      <span className="text-[22px] md:text-[26px] leading-[0.85] group-hover:text-gray-300 transition-colors">TSE</span>
      <span className="text-[22px] md:text-[26px] leading-[0.85] group-hover:text-gray-300 transition-colors">LEC</span>
    </div>
  );
}
