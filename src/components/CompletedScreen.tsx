import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, RefreshCw, Eye, ArrowLeft, Heart, ShieldAlert, ShieldCheck, Sparkles, PlusCircle } from 'lucide-react';
import type { Question } from '../data/quizData';
import { sounds } from '../utils/soundEffects';

interface CompletedScreenProps {
  userName: string;
  playerName: string;
  score: number;
  total: number;
  answers: number[];
  questions: Question[];
  onBackToScoreboard: () => void;
  onCreateQuiz: () => void;
}

interface DialogueLine {
  sender: string;
  avatar: string;
  side: 'left' | 'right';
  text: string;
  reaction?: string;
}

export const CompletedScreen: React.FC<CompletedScreenProps> = ({
  userName,
  playerName,
  score,
  total,
  answers,
  questions,
  onBackToScoreboard,
  onCreateQuiz,
}) => {
  const [dialogueStep, setDialogueStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showAnswersModal, setShowAnswersModal] = useState(false);

  const percentage = Math.round((score / total) * 100);
  const isHigh = score >= 8;
  const isMedium = score >= 5 && score < 8;
  const isLow = score < 5;

  useEffect(() => {
    if (isHigh) {
      sounds.playVictory();
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#189cf4', '#ff4c8a', '#fcd34d', '#34d399', '#a78bfa'],
      });
    } else if (isMedium) {
      sounds.playSparkle();
    } else {
      sounds.playOops();
    }
  }, [isHigh, isMedium]);

  // Dynamic funny dialogues based on score bracket
  const getDialogueScript = (): DialogueLine[] => {
    if (isHigh) {
      return [
        {
          sender: userName,
          avatar: '🐻',
          side: 'left',
          text: `Hold on... scanning your 10 answers right now 🧐`,
          reaction: '👀',
        },
        {
          sender: playerName,
          avatar: '🐰',
          side: 'right',
          text: `Go ahead! I literally know your whole soul 😏✨`,
          reaction: '💅',
        },
        {
          sender: userName,
          avatar: '🐻',
          side: 'left',
          text: `Wait... ${score}/${total}?! How did you know that?! Even my mom doesn't know me this well 💀`,
          reaction: '😳',
        },
        {
          sender: playerName,
          avatar: '🐰',
          side: 'right',
          text: `Because I actually pay attention to you, dummy 🥺💖`,
          reaction: '🥰',
        },
        {
          sender: userName,
          avatar: '🐻',
          side: 'left',
          text: `Fine. You win. The block button has been officially dismantled and thrown in the trash 🔒🚫`,
          reaction: '👑',
        },
        {
          sender: playerName,
          avatar: '🐰',
          side: 'right',
          text: `Does this mean you're treating me to food now? 🍕😋`,
          reaction: '🤤',
        },
        {
          sender: userName,
          avatar: '🐻',
          side: 'left',
          text: `Anything for my #1 favorite person! You passed the ultimate vibe check ✨🥳`,
          reaction: '💖',
        },
      ];
    } else if (isMedium) {
      return [
        {
          sender: userName,
          avatar: '🐻',
          side: 'left',
          text: `Hmm... reviewing your answers right now 🤨`,
          reaction: '🧐',
        },
        {
          sender: playerName,
          avatar: '🐰',
          side: 'right',
          text: `Did I pass or am I packing my bags to leave your life? 🧳😂`,
          reaction: '🫣',
        },
        {
          sender: userName,
          avatar: '🐻',
          side: 'left',
          text: `You scored ${score}/${total}... you got some right, but what was question 4?! Did you guess with your eyes closed?! 💀`,
          reaction: '🤣',
        },
        {
          sender: playerName,
          avatar: '🐰',
          side: 'right',
          text: `Hey! It was a 50/50 chance! Give me credit for trying! 😭`,
          reaction: '🥺',
        },
        {
          sender: userName,
          avatar: '🐻',
          side: 'left',
          text: `You are officially on THIN ICE probation. 1 strike left before the block list! 🧊⚠️`,
          reaction: '😏',
        },
        {
          sender: playerName,
          avatar: '🐰',
          side: 'right',
          text: `Can I appeal my sentence with snacks? 🍫🥺`,
          reaction: '😇',
        },
        {
          sender: userName,
          avatar: '🐻',
          side: 'left',
          text: `One pizza delivery and all charges will be dismissed 🍕🤝`,
          reaction: '😎',
        },
      ];
    } else {
      return [
        {
          sender: userName,
          avatar: '🐻',
          side: 'left',
          text: `Excuse me... who are you and how did you get my contact? 😭💀`,
          reaction: '🚨',
        },
        {
          sender: playerName,
          avatar: '🐰',
          side: 'right',
          text: `WAIT HEAR ME OUT!! The questions were tricky! 🫣🚨`,
          reaction: '😱',
        },
        {
          sender: userName,
          avatar: '🐻',
          side: 'left',
          text: `Tricky?! You scored ${score}/${total}! You thought I sleep at 8 PM and hate food?! 💀`,
          reaction: '🤦‍♂️',
        },
        {
          sender: playerName,
          avatar: '🐰',
          side: 'right',
          text: `I panicked under exam pressure okay?! DO NOT press that red button! 😭`,
          reaction: '🥺',
        },
        {
          sender: userName,
          avatar: '🐻',
          side: 'left',
          text: `My thumb is literally hovering 1 millimeter over 'BLOCK CONTACT'... 🚫🔨`,
          reaction: '😈',
        },
        {
          sender: playerName,
          avatar: '🐰',
          side: 'right',
          text: `I will order you Biryani right now if you spare my life! 🍗📦`,
          reaction: '🙏',
        },
        {
          sender: userName,
          avatar: '🐻',
          side: 'left',
          text: `Order must be confirmed first before unblocking. Goodbye for now! 🏃💨`,
          reaction: '👋',
        },
      ];
    }
  };

  const script = getDialogueScript();

  const handleNextDialogue = () => {
    if (dialogueStep < script.length - 1) {
      const nextLine = script[dialogueStep + 1];
      sounds.playChatBlip(nextLine.side === 'left');
      setIsTyping(true);
      setTimeout(() => {
        setDialogueStep((prev) => prev + 1);
        setIsTyping(false);
      }, 250);
    }
  };

  const handleReplayDialogue = () => {
    sounds.playPop();
    setDialogueStep(0);
  };

  return (
    <div className="min-h-screen w-full max-w-md mx-auto px-4 py-6 flex flex-col justify-between relative">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBackToScoreboard}
          className="flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-white/95 px-3 py-1.5 rounded-full border border-blue-200 shadow-sm hover:bg-blue-50 transition-all active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Scoreboard</span>
        </button>

        <img
          src="/static/assets/img/logo-f.webp"
          alt="Don't Block Me"
          className="w-32 h-auto drop-shadow-sm"
        />
      </div>

      {/* Funny Comic Dialogue Box */}
      <div className="bg-white rounded-[2rem] p-5 border-2 border-blue-200 shadow-card mb-5 relative overflow-hidden">
        {/* Comic Header Tag */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-extrabold text-gray-700 tracking-wide">
              {userName} & {playerName} Showdown
            </span>
          </div>
          <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">
            Scene {dialogueStep + 1} / {script.length}
          </span>
        </div>

        {/* Dialogue scroll/view */}
        <div className="space-y-3 min-h-[160px] flex flex-col justify-end">
          {script.slice(0, dialogueStep + 1).map((line, index) => (
            <div
              key={index}
              className={`flex items-end gap-2 animate-pop ${
                line.side === 'right' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Avatar Bubble */}
              <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-sm shadow-sm shrink-0">
                {line.avatar}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-[76%] rounded-2xl p-3 text-xs sm:text-sm font-bold shadow-sm relative ${
                  line.side === 'left'
                    ? 'bg-blue-50/90 text-gray-800 border border-blue-200 rounded-bl-none'
                    : 'bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-br-none'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-0.5 opacity-80 text-[10px]">
                  <span>{line.sender}</span>
                  {line.reaction && <span>{line.reaction}</span>}
                </div>
                <p className="leading-snug">{line.text}</p>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center gap-1.5 text-gray-400 text-xs pl-10 animate-pulse">
              <span>typing</span>
              <span className="animate-bounce">.</span>
              <span className="animate-bounce delay-100">.</span>
              <span className="animate-bounce delay-200">.</span>
            </div>
          )}
        </div>

        {/* Action Controls for Dialogue */}
        <div className="mt-3.5 pt-2 border-t border-gray-100 flex items-center gap-2">
          {dialogueStep < script.length - 1 ? (
            <button
              onClick={handleNextDialogue}
              className="cute-btn-blue flex-1 py-2.5 px-4 rounded-xl text-white font-extrabold text-xs flex items-center justify-center gap-1.5 tracking-wide active:scale-95 transition-transform"
            >
              <span>tap to hear his reply! 💬</span>
              <span className="text-sm">➔</span>
            </button>
          ) : (
            <button
              onClick={handleReplayDialogue}
              className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-xl text-xs font-bold border border-gray-200 flex items-center justify-center gap-1 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Replay Conversation 🎬</span>
            </button>
          )}
        </div>
      </div>

      {/* Verdict & Score Reveal Card */}
      <div className="bg-white rounded-[2rem] p-6 border-2 border-blue-200 shadow-card text-center mb-6 relative overflow-hidden">
        {/* Floating Sparkles */}
        <div className="absolute top-3 right-4 text-yellow-400 text-xl animate-float">✨</div>
        <div className="absolute bottom-3 left-4 text-pink-400 text-xl animate-float">💖</div>

        {/* Mascot Avatar Reaction */}
        <div className="w-24 h-24 mx-auto mb-2 flex items-center justify-center">
          <img
            src="/static/assets/img/player/home/character-dudu.svg"
            alt="Dudu Mascot"
            className="w-full h-full object-contain drop-shadow-md animate-float"
          />
        </div>

        {/* Reply from Gautam */}
        <div className="mb-4">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Official Verdict from {userName}:
          </p>
          <div className="mt-1.5 inline-block px-4 py-2.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 font-extrabold text-xs sm:text-sm shadow-sm">
            {isHigh && "You really know my heart 🥺💖 - Bestie/Crush Forever!"}
            {isMedium && "Not bad! You know me better than most, but you still have secrets to learn 😏"}
            {isLow && "Blocked until you buy me food! 😤🍕"}
          </div>
        </div>

        {/* Status Badge */}
        <div className="mb-4 flex justify-center">
          {isHigh && (
            <div className="flex items-center gap-1.5 bg-green-100 text-green-700 px-4 py-1.5 rounded-full font-black text-xs sm:text-sm border border-green-300 shadow-sm animate-wiggle">
              <ShieldCheck className="w-4 h-4" />
              <span>NOT BLOCKED! SAFE FOREVER 💖</span>
            </div>
          )}
          {isMedium && (
            <div className="flex items-center gap-1.5 bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full font-black text-xs sm:text-sm border border-yellow-300 shadow-sm">
              <Heart className="w-4 h-4 text-pink-500" />
              <span>ON PROBATION 😏</span>
            </div>
          )}
          {isLow && (
            <div className="flex items-center gap-1.5 bg-red-100 text-red-600 px-4 py-1.5 rounded-full font-black text-xs sm:text-sm border border-red-300 shadow-sm animate-wiggle">
              <ShieldAlert className="w-4 h-4" />
              <span>BLOCKED! (BRIBE WITH FOOD) 🍕</span>
            </div>
          )}
        </div>

        {/* Score Number Display */}
        <div className="bg-blue-50/60 rounded-2xl p-4 border border-blue-100 mb-4">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-0.5">
            Final Score
          </span>
          <div className="text-4xl sm:text-5xl font-black text-pink-500 tracking-tight">
            {score}{' '}
            <span className="text-gray-400 text-2xl font-bold">/ {total}</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-pink-100 rounded-full h-3 mt-3 overflow-hidden p-0.5 shadow-inner">
            <div
              className="bg-gradient-to-r from-pink-400 to-pink-500 h-full rounded-full transition-all duration-1000 shadow-sm"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5">
          {/* Irresistible Make Your Own Quiz Button */}
          <button
            onClick={onCreateQuiz}
            className="cute-btn-pink w-full py-4 px-4 rounded-full text-white font-black text-base flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-cute"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Make Your Own Quiz & Test Gautam!</span>
            <Sparkles className="w-4 h-4 text-yellow-200" />
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setShowAnswersModal(true)}
              className="py-3 px-3 rounded-2xl bg-white border-2 border-blue-200 text-blue-600 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-blue-50 active:scale-95 transition-all shadow-sm"
            >
              <Eye className="w-4 h-4" />
              <span>View All Answers</span>
            </button>

            <button
              onClick={onBackToScoreboard}
              className="py-3 px-3 rounded-2xl bg-white border-2 border-gray-200 text-gray-700 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-gray-50 active:scale-95 transition-all shadow-sm"
            >
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>See Scoreboard</span>
            </button>
          </div>
        </div>
      </div>

      {/* Answers Modal */}
      {showAnswersModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-pop">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md max-h-[85vh] flex flex-col shadow-2xl border-2 border-blue-200">
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <div>
                <h3 className="font-black text-lg text-gray-800">
                  {playerName}'s Answers
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  Score: <strong className="text-pink-500">{score}/{total}</strong>
                </p>
              </div>
              <button
                onClick={() => setShowAnswersModal(false)}
                className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-bold text-sm hover:bg-gray-200"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto space-y-3.5 pr-1 flex-1">
              {questions.map((q, idx) => {
                const chosenIdx = answers[idx];
                const isCorrect = chosenIdx === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-3.5 rounded-2xl border ${
                      isCorrect
                        ? 'bg-green-50/50 border-green-200'
                        : 'bg-red-50/50 border-red-200'
                    }`}
                  >
                    <p className="font-bold text-xs text-gray-800 mb-1">
                      {idx + 1}. {q.question}
                    </p>
                    <div className="text-xs space-y-1">
                      <p>
                        <span className="font-semibold text-gray-500">Your answer: </span>
                        <strong className={isCorrect ? 'text-green-700' : 'text-red-600'}>
                          {q.options[chosenIdx] || 'No answer'} {isCorrect ? '✔' : '✖'}
                        </strong>
                      </p>
                      {!isCorrect && (
                        <p>
                          <span className="font-semibold text-gray-500">
                            {userName}'s real answer:{' '}
                          </span>
                          <strong className="text-green-700">
                            {q.options[q.correctIndex]} ✔
                          </strong>
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setShowAnswersModal(false)}
              className="mt-4 w-full py-3 bg-blue-500 text-white font-bold rounded-2xl shadow-cute hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
