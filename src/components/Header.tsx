import React from 'react';
import { CustomLogo } from './CustomLogo';

export const Header: React.FC = () => {
  return (
    <header className="relative w-full max-w-md mx-auto pt-4 px-4 flex items-center justify-start z-40">
      <CustomLogo
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </header>
  );
};
