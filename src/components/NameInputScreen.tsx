import React, { useState } from 'react';
import { ChevronLeft, ArrowRight, Sparkles } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import { CustomLogo } from './CustomLogo';

interface NameInputScreenProps {
  onBack: () => void;
  onSubmitName: (name: string) => void;
}

export const NameInputScreen: React.FC<NameInputScreenProps> = ({
  onBack,
  onSubmitName,
}) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      sounds.playOops();
      setError('Please enter your name...');
      return;
    }
    sounds.playPop();
    onSubmitName(name.trim());
  };

  return (
    <div className="min-h-screen w-full max-w-md mx-auto px-4 py-8 flex flex-col justify-between relative">
      {/* Top Bar with Back Button and Logo */}
      <div className="relative flex items-center justify-center w-full mb-4">
        <button
          onClick={() => {
            sounds.playPop();
            onBack();
          }}
          className="absolute left-0 w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-sm border border-blue-200 text-blue-500 flex items-center justify-center shadow-sm hover:bg-blue-50 active:scale-90 transition-all"
          aria-label="Back"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <CustomLogo size="sm" />
      </div>

      {/* Floating Doodles Background Decor */}
      <div className="absolute top-20 right-10 opacity-75 pointer-events-none">
        <span className="text-pink-400 text-2xl font-bold animate-float">?</span>
      </div>
      <div className="absolute top-28 left-8 opacity-70 pointer-events-none">
        <span className="text-yellow-400 text-xl font-bold animate-float">★</span>
      </div>
      <div className="absolute bottom-24 right-8 opacity-60 pointer-events-none">
        <span className="text-blue-400 text-lg font-bold">✿</span>
      </div>

      {/* Hanging Sign Board Container */}
      <div className="relative w-full flex flex-col items-center my-auto pt-4">
        {/* Hanging Strings from Pink Peg */}
        <div className="w-4 h-4 rounded-full bg-pink-400 border-2 border-white shadow-sm z-20" />
        <div className="w-40 h-8 flex justify-between px-6 -mt-2 z-10 pointer-events-none">
          <div className="w-[1.5px] h-full bg-amber-700/60 rotate-[-15deg] origin-top" />
          <div className="w-[1.5px] h-full bg-amber-700/60 rotate-[15deg] origin-top" />
        </div>

        {/* Panda/Bear Peeking Behind Sign */}
        <div className="relative -mb-10 z-0">
          <img
            src="/static/assets/img/player/home/character-dudu.svg"
            alt="Mascot"
            className="w-32 h-auto drop-shadow-sm hover:scale-105 transition-transform"
          />
        </div>

        {/* Pink Plaid Tag on Sign Top */}
        <div className="relative z-20 -mb-4 bg-pink-100 border-2 border-dashed border-pink-300 rounded-2xl px-6 py-1.5 shadow-sm flex items-center justify-center">
          <span className="text-pink-500 text-base">♥</span>
        </div>

        {/* White Stitched Hanging Card */}
        <div className="relative z-10 w-full bg-white rounded-[2.2rem] p-7 pt-9 border-2 border-dashed border-blue-300 shadow-card text-center">
          {/* Card Corner Stickers */}
          <div className="absolute top-3 right-3 text-yellow-400 text-lg">★</div>
          <div className="absolute bottom-3 right-3 text-pink-400 text-lg">♥</div>
          <div className="absolute bottom-3 left-3 text-blue-400 text-lg">✿</div>

          {/* Title */}
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
            what's your{' '}
            <span className="relative inline-block text-pink-500 font-black">
              name
              <span className="absolute left-0 right-0 -bottom-1 h-1 border-b-2 border-blue-400" />
            </span>
            ?
          </h2>
          <p className="text-xs text-gray-500 font-medium mb-6">
            Enter your name to see if you get blocked or trusted!
          </p>

          <form onSubmit={handleContinue} className="space-y-4">
            {/* Input Pill */}
            <div className="relative w-full">
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  if (e.target.value.length <= 15) {
                    setName(e.target.value);
                    if (error) setError('');
                  }
                }}
                maxLength={15}
                placeholder="Type your name..."
                className="w-full py-4 pl-5 pr-14 rounded-full border-2 border-blue-300 focus:border-blue-500 focus:outline-none text-gray-800 font-bold text-base placeholder-gray-400 shadow-inner bg-blue-50/20 transition-all"
                autoFocus
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400">
                {name.length}/15
              </span>
            </div>

            {error && (
              <p className="text-pink-500 text-xs font-bold text-left pl-3 animate-wiggle">
                {error}
              </p>
            )}

            {/* Continue Button */}
            <button
              type="submit"
              className="cute-btn-blue w-full py-4 px-6 rounded-full text-white font-black text-base flex items-center justify-center gap-2.5 tracking-wide active:scale-95 transition-transform"
            >
              <span>continue</span>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </button>
          </form>
        </div>
      </div>

      {/* Clean bottom badge */}
      <div className="flex items-center justify-center gap-1.5 text-xs text-blue-600 font-bold opacity-80 pt-4">
        <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
        <span>10 quick questions • Zero personal data saved</span>
      </div>
    </div>
  );
};
