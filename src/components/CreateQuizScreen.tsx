import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowLeft, ArrowRight, Copy, Check, Share2, Play, Sparkles } from 'lucide-react';
import { INITIAL_SHWETA_QUIZ, INITIAL_GAUTAM_QUIZ, saveQuiz } from '../data/quizData';
import type { Quiz } from '../data/quizData';

interface CreateQuizScreenProps {
  onBack: () => void;
  onQuizCreated: (newQuiz: Quiz) => void;
}

export const CreateQuizScreen: React.FC<CreateQuizScreenProps> = ({
  onBack,
  onQuizCreated,
}) => {
  const [step, setStep] = useState<'info' | 'answering' | 'share'>('info');
  const [creatorName, setCreatorName] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [chosenAnswers, setChosenAnswers] = useState<number[]>([]);
  const [createdQuiz, setCreatedQuiz] = useState<Quiz | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  // Select base questions template based on gender
  const baseQuestions = gender === 'male' ? INITIAL_GAUTAM_QUIZ.questions : INITIAL_SHWETA_QUIZ.questions;

  const questionsList = baseQuestions.map((q) => {
    const pronoun = gender === 'female' ? 'her' : 'his';
    const cleanQ = q.question
      .replace(/Gautam's/g, `${creatorName || 'Your'}'s`)
      .replace(/Gautam/g, creatorName || 'you')
      .replace(/Shweta's/g, `${creatorName || 'Your'}'s`)
      .replace(/Shweta/g, creatorName || 'you')
      .replace(/her/g, pronoun);
    return {
      ...q,
      question: cleanQ,
    };
  });

  const handleStartQuestions = (e: React.FormEvent) => {
    e.preventDefault();
    if (!creatorName.trim()) {
      setError('Please enter your name...');
      return;
    }
    setError('');
    setStep('answering');
  };

  const handleChooseAnswer = (optIndex: number) => {
    const updated = [...chosenAnswers, optIndex];
    setChosenAnswers(updated);

    if (currentQIndex + 1 < questionsList.length) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      // Completed all 10 questions! Build quiz
      const newId = 'quiz-' + Math.random().toString(36).substring(2, 9);
      const newQuiz: Quiz = {
        id: newId,
        userName: creatorName.trim(),
        userGender: gender,
        mascotImage: gender === 'male' ? '/static/assets/img/player/home/character-dudu.svg' : '/static/assets/img/player/home/character-bubu.webp',
        questions: questionsList.map((q, idx) => ({
          ...q,
          correctIndex: updated[idx],
        })),
        scoreboard: [],
      };

      saveQuiz(newQuiz);
      setCreatedQuiz(newQuiz);
      setStep('share');

      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
      });
    }
  };

  const shareLink = createdQuiz
    ? `${window.location.origin}${window.location.pathname}?id=${createdQuiz.id}`
    : '';

  const handleCopy = () => {
    if (shareLink) {
      navigator.clipboard.writeText(shareLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsAppShare = () => {
    if (!createdQuiz) return;
    const pronoun = gender === 'female' ? 'her' : 'his';
    const text = `🎭 ${creatorName} is *blocking* 🚫📱 ${pronoun} _fake_ friends! Will ${gender === 'female' ? 'she' : 'he'} *block* you as well? Let’s see👇\n${shareLink}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen w-full max-w-md mx-auto px-4 py-6 flex flex-col justify-between relative">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-2xl bg-white border border-blue-200 text-blue-500 flex items-center justify-center shadow-sm hover:bg-blue-50 active:scale-90 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <img
          src="/static/assets/img/logo-f.webp"
          alt="Don't Block Me"
          className="w-32 h-auto drop-shadow-sm"
        />
      </div>

      {/* STEP 1: Enter Name and Gender */}
      {step === 'info' && (
        <div className="my-auto">
          <div className="bg-white rounded-[2.2rem] p-6 sm:p-8 border-2 border-dashed border-blue-300 shadow-card text-center">
            <div className="w-16 h-16 mx-auto mb-2">
              <img
                src={gender === 'male' ? '/static/assets/img/player/home/character-dudu.svg' : '/static/assets/img/player/home/character-bubu.webp'}
                alt="Mascot"
                className="w-full h-full object-contain animate-float"
              />
            </div>

            <h2 className="text-2xl font-black text-gray-800 mb-2">
              make your own{' '}
              <span className="text-pink-500">quiz!</span>
            </h2>
            <p className="text-xs text-gray-500 mb-6 font-medium">
              Answer 10 quick questions about yourself, then share the link with friends to see who gets blocked!
            </p>

            <form onSubmit={handleStartQuestions} className="space-y-5">
              <div className="text-left">
                <label className="text-xs font-bold text-gray-600 block mb-1 pl-2">
                  What's your name?
                </label>
                <input
                  type="text"
                  value={creatorName}
                  onChange={(e) => {
                    if (e.target.value.length <= 15) {
                      setCreatorName(e.target.value);
                      if (error) setError('');
                    }
                  }}
                  maxLength={15}
                  placeholder="Your name..."
                  className="w-full py-3.5 px-5 rounded-full border-2 border-blue-300 focus:border-blue-500 focus:outline-none text-gray-800 font-bold text-base bg-blue-50/20"
                />
                {error && <p className="text-pink-500 text-xs font-bold mt-1 pl-2">{error}</p>}
              </div>

              {/* Gender selector */}
              <div className="text-left">
                <label className="text-xs font-bold text-gray-600 block mb-2 pl-2">
                  I am a...
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-3 px-4 rounded-2xl font-bold text-sm border-2 transition-all flex items-center justify-center gap-2 ${
                      gender === 'male'
                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm'
                        : 'border-gray-200 bg-white text-gray-600'
                    }`}
                  >
                    <span>👦 Boy (Dudu)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-3 px-4 rounded-2xl font-bold text-sm border-2 transition-all flex items-center justify-center gap-2 ${
                      gender === 'female'
                        ? 'border-pink-500 bg-pink-50 text-pink-700 shadow-sm'
                        : 'border-gray-200 bg-white text-gray-600'
                    }`}
                  >
                    <span>👧 Girl (Bubu)</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="cute-btn-blue w-full py-4 rounded-full text-white font-black text-base flex items-center justify-center gap-2 shadow-cute"
              >
                <span>start answering questions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* STEP 2: Creator Answering 10 Questions */}
      {step === 'answering' && (
        <div className="my-auto">
          <div className="bg-white rounded-[2.2rem] p-5 sm:p-6 border-2 border-blue-200 shadow-card flex flex-col items-center">
            {/* Progress */}
            <div className="w-full flex items-center justify-between text-xs font-bold text-gray-500 mb-3 px-1">
              <span>Question {currentQIndex + 1} of {questionsList.length}</span>
              <span className="text-blue-500 font-extrabold">
                {Math.round(((currentQIndex) / questionsList.length) * 100)}%
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-blue-100 rounded-full h-2.5 mb-4 overflow-hidden">
              <div
                className="bg-blue-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentQIndex) / questionsList.length) * 100}%` }}
              />
            </div>

            {/* Mascot */}
            <div className="w-28 h-28 mb-2 flex items-center justify-center">
              <img
                src={questionsList[currentQIndex].headerImage}
                alt="Question Mascot"
                className="w-full h-full object-contain drop-shadow-sm"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/static/assets/img/player/home/character-dudu.svg';
                }}
              />
            </div>

            {/* Question title */}
            <div className="w-full bg-blue-50/60 rounded-2xl p-4 border-2 border-dashed border-blue-200 text-center mb-5">
              <p className="text-base sm:text-lg font-black text-gray-800 leading-snug">
                {questionsList[currentQIndex].question}
              </p>
              <p className="text-[11px] text-pink-600 font-bold mt-1">
                Choose the answer that is TRUE for you! ✨
              </p>
            </div>

            {/* Options list */}
            <div className="w-full grid grid-cols-2 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
              {questionsList[currentQIndex].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChooseAnswer(idx)}
                  className="p-3 bg-white border-2 border-blue-100 hover:border-blue-400 rounded-2xl text-xs sm:text-sm font-extrabold text-gray-800 shadow-sm active:scale-95 transition-all text-center flex flex-col items-center justify-center min-h-[56px]"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: Quiz Ready & Share Screen */}
      {step === 'share' && createdQuiz && (
        <div className="my-auto">
          <div className="bg-white rounded-[2.2rem] p-6 sm:p-7 border-2 border-blue-200 shadow-card text-center space-y-4">
            <div className="w-24 h-24 mx-auto">
              <img
                src={createdQuiz.mascotImage || '/static/assets/img/player/home/character-dudu.svg'}
                alt="Happy Mascot"
                className="w-full h-full object-contain animate-float"
              />
            </div>

            <div>
              <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                WOOHOO! 🎉
              </span>
              <h2 className="text-2xl font-black text-gray-800 mt-2">
                Your Quiz is <span className="text-pink-500">Ready!</span>
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Share this link with your friends to see who really knows you and who gets blocked!
              </p>
            </div>

            {/* Link Copy Box */}
            <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-2xl border border-blue-200 shadow-inner">
              <input
                type="text"
                readOnly
                value={shareLink}
                className="bg-transparent text-xs text-gray-700 font-semibold flex-1 outline-none truncate"
              />
              <button
                onClick={handleCopy}
                className="bg-blue-500 text-white py-2 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 hover:bg-blue-600 active:scale-95 transition-all shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Share Buttons */}
            <div className="flex flex-col gap-2.5 pt-2">
              <button
                onClick={handleWhatsAppShare}
                className="w-full py-3.5 px-4 rounded-2xl bg-green-500 text-white font-bold text-sm shadow-sm hover:bg-green-600 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>Share on WhatsApp</span>
              </button>

              <button
                onClick={() => onQuizCreated(createdQuiz)}
                className="cute-btn-blue w-full py-4 px-4 rounded-full text-white font-black text-sm flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Open & Play This Quiz Now</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Info */}
      <div className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
        <Sparkles className="w-3 h-3 text-yellow-400" />
        <span>Don't Block Me Quiz Maker</span>
      </div>
    </div>
  );
};
