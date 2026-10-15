import React from 'react';

interface CustomLogoProps {
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export const CustomLogo: React.FC<CustomLogoProps> = ({
  className = "",
  onClick,
  size = 'md',
}) => {
  const isSm = size === 'sm';

  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border-2 border-blue-200/90 shadow-[0_4px_14px_rgba(24,156,244,0.16)] select-none cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_20px_rgba(24,156,244,0.25)] hover:border-blue-300 active:scale-95 ${className}`}
    >
      {/* Cute Mascot: Dudu the Brown Bear */}
      <div className={`relative shrink-0 flex items-center justify-center ${isSm ? 'w-8 h-8' : 'w-10 sm:w-11 h-10 sm:h-11'}`}>
        <img
          src="/static/assets/img/player/home/character-dudu.svg"
          alt="Dudu Mascot"
          className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(74,40,16,0.25)] group-hover:rotate-6 transition-transform"
        />
        {/* Floating Sparkle above Bear */}
        <span className="absolute -top-1.5 -right-1 text-[11px] animate-pulse">✨</span>
      </div>

      {/* 3D Bubble Typography */}
      <div className="flex flex-col justify-center leading-none">
        {/* Top Arc: "don't" */}
        <div className="flex items-center gap-1 -mb-0.5">
          <span
            className="font-shantell font-black tracking-wider text-pink-500 uppercase transform -rotate-2"
            style={{
              fontSize: isSm ? '10px' : '11px',
              textShadow: '0 1px 0 #ffffff, 0 2px 0 #fb7185, 0 3px 5px rgba(251,113,133,0.35)',
            }}
          >
            don't
          </span>
          <span className="text-[10px] text-yellow-400">★</span>
        </div>

        {/* Bottom Main: "BLOCK ME" */}
        <div className="flex items-center gap-1 font-shantell font-black tracking-tight">
          <span
            className="text-sky-500 transform -rotate-1 inline-block"
            style={{
              fontSize: isSm ? '18px' : '22px',
              textShadow: '0 1.5px 0 #ffffff, 0 3px 0 #0284c7, 0 4px 8px rgba(2,132,199,0.3)',
            }}
          >
            Block
          </span>
          <span
            className="text-pink-500 transform rotate-1 inline-block ml-0.5"
            style={{
              fontSize: isSm ? '18px' : '22px',
              textShadow: '0 1.5px 0 #ffffff, 0 3px 0 #e11d48, 0 4px 8px rgba(225,29,72,0.35)',
            }}
          >
            Me
          </span>
          <span className="text-sm ml-0.5 transform group-hover:scale-125 transition-transform">
            🛑
          </span>
        </div>
      </div>
    </div>
  );
};
