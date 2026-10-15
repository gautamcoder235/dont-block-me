import React from 'react';
import { ArrowRight } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface LandingHeroProps {
  userName: string;
  mascotImage?: string;
  onStartQuiz: () => void;
  onOpenCreate?: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  userName,
  mascotImage = '/static/assets/img/player/home/character-dudu.svg',
  onStartQuiz,
}) => {
  const handleStart = () => {
    sounds.playPop();
    onStartQuiz();
  };
  return (
    <section className="relative w-full max-w-md mx-auto px-4 pt-2 pb-4">
      {/* Floating doodles background decor */}
      <img
        src="/static/assets/img/doodles/doodle-12.svg"
        alt=""
        className="absolute top-4 left-6 w-8 h-8 opacity-75 animate-float pointer-events-none"
      />
      <img
        src="/static/assets/img/doodles/doodle-17.svg"
        alt=""
        className="absolute top-12 right-8 w-7 h-7 opacity-75 animate-float pointer-events-none"
      />
      <img
        src="/static/assets/img/doodles/doodle-10.svg"
        alt=""
        className="absolute top-44 right-4 w-6 h-6 opacity-80 pointer-events-none"
      />

      {/* Mascot & Thought Cloud container */}
      <div className="relative w-full flex items-end justify-between px-2 pt-4">
        {/* Thought Bubble on Left */}
        <div className="relative w-[54%] mb-3 animate-float">
          <img
            src="/static/assets/img/player/home/thought-cloud-3.svg"
            alt=""
            className="w-full h-auto drop-shadow-sm"
          />
          {/* Handwritten thought text inside cloud */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3 text-xs sm:text-sm font-extrabold leading-tight text-gray-800">
            <span>i will</span>
            <span>
              find & <strong className="text-pink-500 font-black">block</strong>
            </span>
            <span>
              my{' '}
              <span className="underline decoration-wavy decoration-yellow-400 font-black">
                fake
              </span>
            </span>
            <span>friends</span>
          </div>
        </div>

        {/* Mascot Peeking on Right */}
        <div className="w-[42%] flex justify-end relative">
          <img
            src={mascotImage}
            alt={`${userName}'s mascot`}
            className="w-36 sm:w-44 h-auto object-contain drop-shadow-md hover:scale-105 transition-transform"
          />
        </div>
      </div>

      {/* Taped Notebook Card */}
      <div className="relative w-full mt-[-8px]">
        {/* Pink Washi Tape with hearts on top */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 w-36 h-7 washi-tape-pink rounded-sm shadow-sm flex items-center justify-center opacity-90 -rotate-1">
          <div className="flex gap-2">
            <span className="text-white text-xs opacity-75">♥</span>
            <span className="text-white text-xs opacity-75">♥</span>
            <span className="text-white text-xs opacity-75">♥</span>
          </div>
        </div>

        {/* Notebook Paper Card Body */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-7 pt-8 border-2 border-blue-200/90 shadow-card overflow-hidden">
          {/* Spiral Notebook Left Holes */}
          <div className="absolute left-2.5 top-0 bottom-0 w-3.5 flex flex-col justify-around py-4 pointer-events-none opacity-40">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-blue-100 border border-blue-200"
              />
            ))}
          </div>

          {/* Block Phone Sticker on Right Top */}
          <div className="absolute top-2 -right-1 w-20 h-24 pointer-events-none z-10 animate-wiggle">
            <img
              src="/static/assets/img/player/home/block-phone.webp"
              alt="Blocked phone"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>

          {/* Main Card Content */}
          <div className="pl-4 pr-12 text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 leading-snug">
              will{' '}
              <span className="text-blue-500 font-black tracking-wide">
                {userName.toLowerCase()}
              </span>
              <br />
              <span className="relative inline-block text-pink-500 font-black tracking-wide">
                block
                <span className="absolute left-0 right-0 -bottom-1 h-2.5 bg-yellow-300 -z-10 rounded-sm -rotate-1 opacity-80" />
              </span>{' '}
              you?
            </h1>

            {/* Cute separator line with heart */}
            <div className="flex items-center gap-2 my-3 text-blue-300">
              <div className="h-[2px] bg-blue-200 flex-1 rounded-full" />
              <span className="text-blue-500 text-sm">♡</span>
              <div className="h-[2px] bg-blue-200 w-8 rounded-full" />
            </div>

            <p className="text-gray-600 text-xs sm:text-sm font-semibold tracking-wide">
              let's see how well you know{' '}
              <strong className="text-gray-800 font-bold">{userName.toLowerCase()}</strong>
            </p>
          </div>

          {/* Corner Sticker: Flower on Bottom Left */}
          <div className="absolute -bottom-1 -left-1 w-8 h-8 pointer-events-none">
            <img
              src="/static/assets/img/doodles/doodle-15.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          {/* Corner Sticker: Yellow Star on Bottom Right */}
          <div className="absolute -bottom-1 -right-1 w-8 h-8 pointer-events-none">
            <img
              src="/static/assets/img/doodles/doodle-10.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Start Quiz Call To Action Button */}
      <div className="mt-5 px-1">
        <button
          onClick={handleStart}
          className="cute-btn-blue w-full py-4 px-6 rounded-full text-white font-black text-lg sm:text-xl flex items-center justify-center gap-3 tracking-wide active:scale-95 transition-transform"
        >
          <span>start quiz</span>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
        </button>
      </div>
    </section>
  );
};
