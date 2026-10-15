import React, { useState } from 'react';
import type { Question } from '../data/quizData';
import { Check, X } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface PlayingScreenProps {
  userName: string;
  questions: Question[];
  onComplete: (score: number, answers: number[]) => void;
}

export const PlayingScreen: React.FC<PlayingScreenProps> = ({
  questions,
  onComplete,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const currentQues = questions[currentIndex];

  const handleSelectOption = (optionIndex: number) => {
    if (isTransitioning) return;
    setSelectedOption(optionIndex);
    setIsTransitioning(true);
    sounds.playAnswerChime(optionIndex === currentQues.correctIndex);

    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setSelectedOption(null);
        setIsTransitioning(false);
      } else {
        let finalScore = 0;
        newAnswers.forEach((ans, idx) => {
          if (ans === questions[idx].correctIndex) {
            finalScore++;
          }
        });
        onComplete(finalScore, newAnswers);
      }
    }, 450);
  };

  return (
    <div className="min-h-screen w-full max-w-md mx-auto px-4 py-6 flex flex-col justify-between">
      {/* Top Header & Question Progress Numbers */}
      <div className="w-full mb-4">
        <div className="w-full bg-white/95 backdrop-blur-sm p-2.5 rounded-2xl flex items-center justify-between gap-1 shadow-sm border border-blue-100">
          {questions.map((q, idx) => {
            const isAnswered = idx < answers.length;
            const isCurrent = idx === currentIndex;
            const isCorrect = isAnswered && answers[idx] === q.correctIndex;

            if (isAnswered) {
              return (
                <div
                  key={idx}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center font-bold text-xs transition-all ${
                    isCorrect
                      ? 'bg-green-100 text-green-600 border border-green-300'
                      : 'bg-pink-100 text-pink-600 border border-pink-300'
                  }`}
                >
                  {isCorrect ? (
                    <Check className="w-4 h-4 stroke-[3]" />
                  ) : (
                    <X className="w-4 h-4 stroke-[3]" />
                  )}
                </div>
              );
            }

            if (isCurrent) {
              return (
                <div
                  key={idx}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-blue-500 to-sky-400 text-white font-extrabold text-xs flex items-center justify-center shadow-cute scale-105"
                >
                  {idx + 1}
                </div>
              );
            }

            return (
              <div
                key={idx}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-50/50 border border-blue-100 text-gray-400 font-bold text-xs flex items-center justify-center"
              >
                {idx + 1}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Quiz Card Frame */}
      <div className="relative bg-white rounded-[2.5rem] p-5 sm:p-6 shadow-card border-2 border-blue-200 flex flex-col items-center">
        {/* Mascot Center Illustration */}
        <div className="relative w-44 h-36 flex items-center justify-center mb-1">
          {/* Pastel Cloud Background Behind Mascot */}
          <div className="absolute w-36 h-24 bg-blue-100/70 rounded-full blur-[2px] -z-0" />

          {/* Doodles around Mascot */}
          <img
            src="/static/assets/img/doodles/doodle-6.svg"
            alt=""
            className="absolute -top-1 left-2 w-6 h-6 animate-float pointer-events-none"
          />
          <img
            src="/static/assets/img/doodles/doodle-2.svg"
            alt=""
            className="absolute top-2 right-2 w-6 h-6 animate-float pointer-events-none"
          />
          <img
            src="/static/assets/img/doodles/doodle-7.svg"
            alt=""
            className="absolute bottom-2 -left-2 w-5 h-5 opacity-70 pointer-events-none"
          />
          <img
            src="/static/assets/img/doodles/doodle-12.svg"
            alt=""
            className="absolute bottom-4 right-1 w-5 h-5 opacity-70 pointer-events-none"
          />

          {/* Question Mascot Image */}
          <img
            src={currentQues.headerImage}
            alt={`Question ${currentIndex + 1}`}
            className="w-32 h-32 object-contain relative z-10 drop-shadow-sm hover:scale-105 transition-transform"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/static/assets/img/player/home/character-bubu.webp';
            }}
          />
        </div>

        {/* Question Pill Badge */}
        <div className="relative z-10 -mb-3 bg-amber-200/90 border border-amber-300 text-amber-900 text-xs font-black px-4 py-1 rounded-full shadow-sm">
          Question {currentIndex + 1} of {questions.length}
        </div>

        {/* Stitched Bubble Card for Question Text */}
        <div className="relative w-full bg-blue-50/50 rounded-2xl p-4 pt-5 border-2 border-dashed border-blue-200 text-center mb-5">
          <p className="text-lg sm:text-xl font-extrabold text-gray-800 leading-snug">
            {currentQues.question}
          </p>
        </div>

        {/* Options Grid */}
        <div
          className={`w-full grid gap-3 ${
            currentQues.options.length <= 2
              ? 'grid-cols-2'
              : 'grid-cols-2'
          }`}
        >
          {currentQues.options.map((optionText, optIdx) => {
            const optImage = currentQues.optionImages[optIdx];
            const isChosen = selectedOption === optIdx;

            return (
              <button
                key={optIdx}
                onClick={() => handleSelectOption(optIdx)}
                disabled={isTransitioning}
                className={`group relative bg-white rounded-2xl p-2.5 sm:p-3 border-2 text-center transition-all flex flex-col items-center justify-between overflow-hidden shadow-sm hover:shadow-md ${
                  isChosen
                    ? 'border-blue-500 bg-blue-50/60 scale-95 ring-2 ring-blue-300'
                    : 'border-blue-100 hover:border-blue-300 active:scale-95'
                }`}
              >
                {/* Option Image if available */}
                {optImage ? (
                  <div className="w-full aspect-square max-h-32 mb-2 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-1">
                    <img
                      src={optImage}
                      alt={optionText}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 my-2 rounded-full bg-blue-100 flex items-center justify-center text-xl">
                    ✨
                  </div>
                )}

                {/* Option Label */}
                <span className="font-extrabold text-gray-800 text-xs sm:text-sm tracking-wide">
                  {optionText}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer hint */}
      <div className="text-center text-xs text-gray-500 font-medium mt-3">
        Select what you think is true!
      </div>
    </div>
  );
};
