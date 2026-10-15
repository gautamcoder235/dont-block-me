import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="relative w-full max-w-md mx-auto pt-4 px-4 flex items-center justify-start z-40">
      {/* Brand Logo */}
      <div className="flex items-center">
        <img
          src="/static/assets/img/logo-f.webp"
          alt="Don't Block Me"
          className="w-36 sm:w-44 h-auto drop-shadow-sm cursor-pointer hover:scale-105 transition-transform"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>
    </header>
  );
};
