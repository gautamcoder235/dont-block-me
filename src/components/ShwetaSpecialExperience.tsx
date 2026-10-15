import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, ShieldCheck, Sparkles, RefreshCw, CheckCircle, Lock, Award, X, Download, Zap, Check } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import {
  IrreplaceableScene,
  NeverBlockScene,
  ProtectiveUmbrellaScene,
  RespectAndCrownScene,
  ChocolateDeliveryIllustration,
} from './ShwetaCharacterScenes';

interface ShwetaSpecialProps {
  onProceedToQuiz: () => void;
  onExitToNormal: () => void;
}

interface ClickRecord {
  clickNum: number;
  time: string;
  intervalMs: number;
}

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const GAUTAM_INSTAGRAM_URL = 'https://www.instagram.com/gautam_kumar_sharma235/';

export const ShwetaSpecialExperience: React.FC<ShwetaSpecialProps> = ({
  onProceedToQuiz,
  onExitToNormal,
}) => {
  const [stage, setStage] = useState<'gate1' | 'gate2' | 'experience' | 'certificate'>('gate1');
  const [activeTab, setActiveTab] = useState<number>(0);

  // Respect tracking & analytics
  const [respectClicks, setRespectClicks] = useState<ClickRecord[]>(() => {
    try {
      const stored = localStorage.getItem('shweta_respect_log');
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.clickLog || [];
      }
    } catch {}
    return [];
  });
  const [lastClickTimestamp, setLastClickTimestamp] = useState<number | null>(null);
  const [showRespectPopup, setShowRespectPopup] = useState<boolean>(false);
  const [copiedInsta, setCopiedInsta] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stage]);

  const handleGate1Yes = () => {
    sounds.playPop();
    setStage('gate2');
  };

  const handleVerify100Sure = () => {
    sounds.playVictory();
    confetti({
      particleCount: 140,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#ff4c8a', '#fb7185', '#f43f5e', '#fbcfe8', '#fcd34d'],
    });
    setStage('experience');
  };

  const handleNextTab = () => {
    sounds.playPop();
    if (activeTab < 3) {
      setActiveTab((prev) => prev + 1);
    } else {
      sounds.playSparkle();
      confetti({
        particleCount: 140,
        spread: 120,
        origin: { y: 0.55 },
        colors: ['#ff4c8a', '#38bdf8', '#fcd34d', '#34d399', '#a78bfa'],
      });
      setStage('certificate');
    }
  };

  // When she clicks "Send Respect 🫡🤍"
  const handleBurstRespect = () => {
    sounds.playSparkle();
    confetti({
      particleCount: 75,
      spread: 65,
      origin: { y: 0.7 },
      colors: ['#38bdf8', '#ff7597', '#ffe3e3', '#fcd34d'],
    });

    const now = Date.now();
    const interval = lastClickTimestamp ? now - lastClickTimestamp : 0;
    setLastClickTimestamp(now);

    const newRecord: ClickRecord = {
      clickNum: respectClicks.length + 1,
      time: new Date().toLocaleTimeString(),
      intervalMs: interval,
    };

    const updated = [...respectClicks, newRecord];
    setRespectClicks(updated);

    // Calculate rapidity (average interval in ms)
    const validIntervals = updated.slice(1).map((c) => c.intervalMs);
    const avgInterval = validIntervals.length > 0
      ? Math.round(validIntervals.reduce((a, b) => a + b, 0) / validIntervals.length)
      : 0;

    let intensityVerdict = "Deep & Sincere Respect 🌸";
    if (avgInterval > 0 && avgInterval < 350) {
      intensityVerdict = "⚡ Sonic Speed Maximum Respect! 🚀🫡";
    } else if (avgInterval > 0 && avgInterval < 750) {
      intensityVerdict = "✨ High Honor & Royal Standing! 👑";
    }

    // Save detailed analytics to localStorage
    const payload = {
      recipient: "Gautam",
      sender: "Shweta",
      totalClicks: updated.length,
      firstClickTime: updated[0].time,
      lastClickTime: newRecord.time,
      averageSpeedMs: avgInterval,
      intensity: intensityVerdict,
      clickLog: updated,
    };

    try {
      localStorage.setItem('shweta_respect_log', JSON.stringify(payload, null, 2));
    } catch {}

    // Open notification modal
    setShowRespectPopup(true);
  };

  // Download detailed respect report file
  const handleDownloadReport = () => {
    sounds.playPop();
    const count = respectClicks.length;
    const intervals = respectClicks.slice(1).map((c) => c.intervalMs);
    const avgSpeed = intervals.length > 0 ? Math.round(intervals.reduce((a, b) => a + b, 0) / intervals.length) : 0;

    const fileContent = `=================================================================
💌 SHWETA'S OFFICIAL RESPECT TRANSMISSION & TAP SPEED REPORT 🤍
=================================================================
Recipient: Gautam 🐻 (@gautam_kumar_sharma235)
Sender: Shweta 🌸
Date: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}

TRANSMISSION SUMMARY:
-----------------------------------------------------------------
Total Respect Taps: ${count} time(s)
Tapping Speed: ${avgSpeed > 0 ? avgSpeed + ' ms between taps' : 'First tap!'}
Rapidity Rating: ${
      count >= 15
        ? 'UNSTOPPABLE MAXIMUM RESPECT! 🚀🫡✨'
        : count >= 8
        ? 'HIGH HONOR & ROYAL STANDING! 👑💕'
        : count >= 3
        ? 'WARM & PROFOUND RESPECT! 🌸'
        : 'SINCERE & TRUE RESPECT 🤍'
    }

DETAILED TAP TIMELINE & INTERVAL LOG:
-----------------------------------------------------------------
${respectClicks
  .map(
    (c) =>
      `• Tap #${String(c.clickNum).padStart(2, '0')} | Timestamp: ${c.time} | Rapidity: ${
        c.intervalMs === 0 ? 'First Touch' : '+' + c.intervalMs + 'ms after previous'
      }`
  )
  .join('\n')}

=================================================================
SWEET SURPRISE NOTE:
🍫 "Your Chocolate is on the Way!" - Gautam 🛵💨✨
A little sweet treat is heading towards you to make you smile! 🌸
=================================================================
NOTE FROM GAUTAM:
"Every single tap here is proof that you are irreplaceable.
I will never block you, I will always protect you, and I will
always hold the deepest respect for who you are." 🤍
=================================================================`;

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `shweta_respect_report_for_gautam_${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyInstagram = () => {
    sounds.playPop();
    const count = respectClicks.length;
    const intervals = respectClicks.slice(1).map((c) => c.intervalMs);
    const avgSpeed = intervals.length > 0 ? Math.round(intervals.reduce((a, b) => a + b, 0) / intervals.length) : 0;
    const speedText = avgSpeed > 0 ? ` (speed: ${avgSpeed}ms per tap! ⚡)` : '';
    const text = `Hey Gautam 🥺🤍 I just went through your secret promises and tapped 'Send Respect' ${count} time(s)${speedText}! Thank you for always protecting me, respecting me, and never blocking me 🌸 ...And I saw your sweet message: my chocolate is on the way! 🍫😋✨`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(text);
    setCopiedInsta(true);
    setTimeout(() => setCopiedInsta(false), 3000);

    // Open Gautam's Instagram profile
    window.open(GAUTAM_INSTAGRAM_URL, '_blank');
  };

  // 1. GATE CHECK 1: "Wait a second... Are you really THE Shweta? 💖"
  if (stage === 'gate1') {
    return (
      <div className="min-h-screen w-full max-w-md mx-auto px-4 py-8 flex flex-col justify-center items-center relative animate-pop">
        {/* Floating background ambient stars */}
        <div className="absolute top-12 left-6 text-yellow-300 text-2xl animate-float">✨</div>
        <div className="absolute top-20 right-8 text-pink-300 text-2xl animate-float">💖</div>
        <div className="absolute bottom-16 left-10 text-sky-300 text-xl animate-float">🌸</div>

        <div className="w-full bg-white/95 backdrop-blur-md rounded-[2.5rem] p-7 border-2 border-pink-300 shadow-[0_10px_35px_rgba(255,76,138,0.2)] text-center relative overflow-hidden">
          {/* Cute Top Ribbon */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-600 font-extrabold text-xs uppercase tracking-wider mb-4 border border-pink-200">
            A Secret Note Detected 💌
          </div>

          {/* Dudu Mascot peeking with heart */}
          <div className="relative w-28 h-28 mx-auto mb-3">
            <img
              src="/static/assets/img/player/home/character-dudu.svg"
              alt="Dudu Bear"
              className="w-full h-full object-contain filter drop-shadow-md animate-bounce"
              style={{ animationDuration: '2.5s' }}
            />
            <span className="absolute -bottom-1 -right-1 text-2xl">🥺</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-gray-700 font-shantell mb-1">
            Wait a second...
          </h2>
          <p className="text-xs sm:text-sm font-extrabold text-pink-400 uppercase tracking-widest mb-1">
            Are you really
          </p>
          
          {/* BIG HIGHLIGHTED "THE Shweta? 💖" */}
          <h3 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 font-shantell mb-3 tracking-wide filter drop-shadow-sm animate-pulse">
            THE Shweta? 💖
          </h3>

          <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6 px-2">
            Gautam has created a special, heartfelt, and permanent promise here. 
            Before we open it, we need to know: is that really you?
          </p>

          <div className="space-y-3">
            <button
              onClick={handleGate1Yes}
              className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-black text-sm sm:text-base shadow-[0_6px_20px_rgba(244,63,94,0.35)] flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-95 transition-all"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Yes, it's really me 🤍</span>
            </button>

            <button
              onClick={onExitToNormal}
              className="w-full py-3 px-5 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-600 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>No, just someone else (Go to Quiz) ➔</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 1.5 GATE CHECK 2 (Second Verification Slide): "Are you 100% sure?"
  if (stage === 'gate2') {
    return (
      <div className="min-h-screen w-full max-w-md mx-auto px-4 py-8 flex flex-col justify-center items-center relative animate-pop">
        {/* Floating background ambient stars */}
        <div className="absolute top-12 left-6 text-yellow-300 text-2xl animate-float">✨</div>
        <div className="absolute top-20 right-8 text-pink-300 text-2xl animate-float">💖</div>
        <div className="absolute bottom-16 left-10 text-sky-300 text-xl animate-float">🌸</div>

        <div className="w-full bg-white/95 backdrop-blur-md rounded-[2.5rem] p-7 border-2 border-rose-300 shadow-[0_10px_35px_rgba(244,63,94,0.25)] text-center relative overflow-hidden">
          {/* Cute Top Ribbon */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 font-extrabold text-xs uppercase tracking-wider mb-4 border border-rose-200">
            Double Check • Verification 🔒
          </div>

          {/* Dudu Mascot looking surprised / curious */}
          <div className="relative w-28 h-28 mx-auto mb-3">
            <img
              src="/static/assets/img/player/home/character-dudu.svg"
              alt="Dudu Bear"
              className="w-full h-full object-contain filter drop-shadow-md animate-bounce"
              style={{ animationDuration: '2s' }}
            />
            <span className="absolute -bottom-1 -right-1 text-2xl">🧐</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-gray-700 font-shantell mb-1">
            Hold on...
          </h2>
          
          {/* BIG HIGHLIGHTED "Are you 100% sure? 🥺✨" */}
          <h3 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 font-shantell mb-3 tracking-wide filter drop-shadow-sm">
            Are you 100% sure? 🥺✨
          </h3>

          <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6 px-2">
            Because once you open this door, Gautam's promises to you are sealed forever and cannot be undone! Are you absolutely, 100% positive you are Shweta?
          </p>

          <div className="space-y-3">
            <button
              onClick={handleVerify100Sure}
              className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-red-400 hover:from-pink-600 hover:to-rose-600 text-white font-black text-sm sm:text-base shadow-[0_6px_20px_rgba(244,63,94,0.4)] flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-95 transition-all"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Yes, I am 100% sure! 💖✨</span>
            </button>

            <button
              onClick={onExitToNormal}
              className="w-full py-3 px-5 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-600 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>No, not really (Go to Quiz) ➔</span>
            </button>

            <button
              onClick={() => {
                sounds.playPop();
                setStage('gate1');
              }}
              className="w-full py-1.5 text-[11px] text-gray-400 hover:text-gray-600 font-semibold transition-colors"
            >
              ← Back to previous step
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. THE SPECIAL CINEMATIC EXPERIENCE: 4 Heartfelt Pillars
  const pillars = [
    {
      title: "You Are Irreplaceable",
      tag: "Pillar 1 • The Value",
      icon: <Sparkles className="w-5 h-5 text-yellow-500" />,
      badgeColor: "bg-yellow-50 text-yellow-700 border-yellow-200",
      quote: "Of all the people who ever open this page, you are the only one who truly matters.",
      scene: <IrreplaceableScene />,
      body: [
        "In a world where people come and go, you have a place in Gautam's life that no one else can ever take.",
        "Your presence, your laugh, your voice, and even the silly little things you do are remembered and deeply cherished.",
        "You aren't just another friend or a contact in a phone. You are someone truly rare and precious."
      ],
      emoji: "🌟",
      bgGradient: "from-amber-50 to-orange-50",
    },
    {
      title: "The Unbreakable Rule: Never Block You",
      tag: "Pillar 2 • The Promise",
      icon: <Lock className="w-5 h-5 text-pink-500" />,
      badgeColor: "bg-pink-50 text-pink-700 border-pink-200",
      quote: "The website is called 'Don't Block Me'... but for you, that button has been permanently erased.",
      scene: <NeverBlockScene />,
      body: [
        "No matter what happens in life — whether good days, hard days, misunderstandings, silence, or distance — Gautam will never, ever block you.",
        "You never have to worry about waking up and finding yourself locked out.",
        "You have a lifetime, unconditional VIP pass to reach out whenever you want. You are safe here."
      ],
      emoji: "🔒💖",
      bgGradient: "from-pink-50 to-rose-50",
    },
    {
      title: "Always Protect & Stand By You",
      tag: "Pillar 3 • Protection",
      icon: <ShieldCheck className="w-5 h-5 text-sky-500" />,
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      quote: "Whenever life gets too heavy or loud, you will never have to face it all alone.",
      scene: <ProtectiveUmbrellaScene />,
      body: [
        "Gautam will always stand in front of you to shield you, beside you to walk with you, and behind you to catch you if you ever stumble.",
        "You never have to pretend to be strong or hide your tears. Your peace, your safety, and your happiness will always be guarded fiercely.",
        "A true protector isn't just there during celebrations — they are there when you need a quiet shoulder the most."
      ],
      emoji: "🛡️🧸",
      bgGradient: "from-sky-50 to-blue-50",
    },
    {
      title: "Deepest Respect for Who You Are",
      tag: "Pillar 4 • Absolute Respect",
      icon: <Award className="w-5 h-5 text-emerald-500" />,
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      quote: "Respect is not given with words; it is proven through patience, honesty, and care.",
      scene: <RespectAndCrownScene />,
      body: [
        "I deeply respect your mind, your dreams, your boundaries, and the beautiful kind person you are.",
        "You will always be heard with patience, never taken for granted, and treated with the genuine honor you deserve.",
        "No matter where life takes both of us, you will always hold this highest tier of respect from Gautam.",
        "🍫 Sweet P.S.: Your chocolate is on the way! A special sweet delivery to bring a big smile to your face! 🛵✨"
      ],
      emoji: "🌷👑",
      bgGradient: "from-emerald-50 to-teal-50",
    },
  ];

  if (stage === 'experience') {
    const current = pillars[activeTab];

    return (
      <div className="min-h-screen w-full max-w-md mx-auto px-4 py-6 flex flex-col justify-between relative animate-pop">
        {/* Top Header with Progress Dots */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-pink-500 animate-ping" />
              <span className="text-xs font-black text-gray-800 font-shantell tracking-wide">
                Gautam's Dedicated Message for Shweta
              </span>
            </div>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-600 border border-pink-200">
              {activeTab + 1} / 4
            </span>
          </div>

          {/* Tab Progress Pills */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {pillars.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  sounds.playPop();
                  setActiveTab(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeTab
                    ? 'bg-gradient-to-r from-pink-500 to-rose-400 shadow-sm'
                    : idx < activeTab
                    ? 'bg-pink-300'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          {/* Interactive Card */}
          <div className={`bg-gradient-to-b ${current.bgGradient} rounded-[2.5rem] p-6 sm:p-7 border-2 border-white shadow-[0_10px_35px_rgba(244,63,94,0.14)] relative overflow-hidden transition-all duration-300`}>
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-3">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${current.badgeColor}`}>
                {current.icon}
                <span>{current.tag}</span>
              </div>
              <span className="text-2xl animate-wiggle">{current.emoji}</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-black text-gray-900 font-shantell leading-snug mb-2">
              {current.title}
            </h2>

            {/* Character Action Animation Scene (Visualizing the Promise above the points) */}
            <div className="my-2.5 bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-pink-200/60 shadow-inner flex justify-center">
              {current.scene}
            </div>

            {/* Highlighted Quote Callout */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3.5 border border-pink-200/80 mb-4 shadow-sm">
              <p className="text-xs sm:text-sm font-extrabold text-pink-600 font-shantell italic leading-relaxed text-center">
                "{current.quote}"
              </p>
            </div>

            {/* Body paragraphs / points */}
            <div className="space-y-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
              {current.body.map((p, idx) => (
                <p key={idx} className="flex items-start gap-2">
                  <span className="text-pink-400 font-bold shrink-0 mt-0.5">♥</span>
                  <span>{p}</span>
                </p>
              ))}
            </div>

            {/* Mascot Visual Reaction & Send Respect Button */}
            <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white p-1 border border-pink-200 shadow-sm">
                  <img
                    src="/static/assets/img/player/home/character-dudu.svg"
                    alt="Dudu"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-800 font-shantell">Gautam</p>
                  <p className="text-[10px] text-gray-500">Speaking from the heart</p>
                </div>
              </div>

              {/* Send Respect Button with Tap Counter */}
              <button
                onClick={handleBurstRespect}
                className="px-3.5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white text-xs font-black shadow-sm active:scale-90 transition-all flex items-center gap-1.5"
              >
                <span>Send Respect 🫡🤍</span>
                {respectClicks.length > 0 && (
                  <span className="bg-white/30 text-white px-1.5 py-0.2 rounded-full text-[10px]">
                    x{respectClicks.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-5 space-y-2.5">
          <button
            onClick={handleNextTab}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-black text-sm sm:text-base shadow-cute flex items-center justify-center gap-2 tracking-wide active:scale-95 transition-all"
          >
            <span>{activeTab < 3 ? 'Read Next Promise ➔' : 'Seal the Final Promise & Certificate 📜'}</span>
          </button>

          <button
            onClick={onProceedToQuiz}
            className="w-full py-2.5 text-xs text-gray-400 hover:text-gray-600 font-semibold text-center transition-colors"
          >
            Skip to Gautam's Quiz ➔
          </button>
        </div>

        {/* CUTE NOTIFICATION & DIRECT INSTAGRAM SEND MODAL */}
        {showRespectPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-pop">
            <div className="bg-white rounded-[2.2rem] p-6 w-full max-w-sm border-2 border-pink-300 shadow-2xl relative text-center">
              {/* Close Button */}
              <button
                onClick={() => {
                  sounds.playPop();
                  setShowRespectPopup(false);
                }}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center text-xs font-bold transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Mascot Icon */}
              <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                <img
                  src="/static/assets/img/player/home/character-dudu.svg"
                  alt="Dudu"
                  className="w-full h-full object-contain filter drop-shadow animate-bounce"
                  style={{ animationDuration: '2s' }}
                />
              </div>

              <h3 className="text-xl font-black text-gray-800 font-shantell mb-1">
                Gautam Acknowledged That! 🫡🤍
              </h3>
              <p className="text-xs text-gray-500 mb-3 font-medium">
                You've tapped Send Respect <strong className="text-pink-600 font-bold">{respectClicks.length} time{respectClicks.length > 1 ? 's' : ''}</strong>!
              </p>

              {/* Live Speed Stats Box */}
              <div className="bg-pink-50/70 rounded-2xl p-3 border border-pink-200 mb-4 text-xs text-pink-900 font-semibold flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>Tapping Speed:</span>
                </div>
                <span className="font-bold text-pink-600">
                  {respectClicks.length > 1
                    ? `${Math.round(respectClicks.slice(1).reduce((a, b) => a + b.intervalMs, 0) / (respectClicks.length - 1))}ms/tap`
                    : '1st Tap!'}
                </span>
              </div>

              {/* Direct Instagram Action */}
              <div className="space-y-2.5">
                {/* Instagram Direct DM Button */}
                <button
                  onClick={handleCopyInstagram}
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(219,39,119,0.35)] active:scale-95 transition-all"
                >
                  <InstagramIcon className="w-4 h-4 text-white" />
                  <span>{copiedInsta ? 'Message Copied! Opening IG...' : 'Send Respect on Instagram ➔'}</span>
                  {copiedInsta && <Check className="w-4 h-4 text-white" />}
                </button>

                <p className="text-[10.5px] text-gray-400 font-medium text-center">
                  ✨ Auto-copies your message so you can paste it directly into <span className="font-bold text-pink-600">@gautam_kumar_sharma235</span>'s DMs!
                </p>

                {/* Download Respect Report File */}
                <button
                  onClick={handleDownloadReport}
                  className="w-full py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-gray-500" />
                  <span>Download Respect Speed Report (.txt) 📄</span>
                </button>
              </div>

              <button
                onClick={() => {
                  sounds.playPop();
                  setShowRespectPopup(false);
                }}
                className="mt-3 text-[11px] text-gray-400 hover:text-gray-600 font-semibold underline"
              >
                Keep tapping to send more respect 🫡🤍
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 3. FINAL STAGE: The Official Shweta Protection & Safe Space Certificate
  return (
    <div className="min-h-screen w-full max-w-md mx-auto px-4 py-8 flex flex-col justify-between relative animate-pop">
      {/* Golden Confetti & Ambient Sparkles */}
      <div className="absolute top-4 left-6 text-yellow-400 text-xl animate-float">🌟</div>
      <div className="absolute top-10 right-6 text-pink-400 text-xl animate-float">💖</div>

      <div>
        {/* Certificate Card Container */}
        <div className="bg-gradient-to-b from-amber-50 via-pink-50 to-white rounded-[2.5rem] p-6 sm:p-7 border-4 border-amber-300/80 shadow-[0_12px_40px_rgba(251,191,36,0.25)] text-center relative overflow-hidden">
          {/* Certificate Stamp */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-amber-400 opacity-20 pointer-events-none" />

          {/* Top Badge Ribbon */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400 text-amber-950 font-black text-xs uppercase tracking-wider mb-3 shadow-sm border border-amber-500/30">
            <Award className="w-4 h-4 fill-amber-950" />
            <span>Official Bond of Protection</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-shantell mb-1">
            Certificate of Forever
          </h2>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
            Non-Transferable & Permanent
          </p>

          {/* Shweta Big Callout */}
          <div className="bg-white rounded-2xl p-4 border-2 border-dashed border-pink-300 shadow-sm mb-4">
            <p className="text-xs text-gray-400 font-bold uppercase">Issued Exclusively To</p>
            <h3 className="text-3xl font-black text-pink-500 font-shantell tracking-wide mt-1">
              Shweta 🌸
            </h3>
            <p className="text-xs text-gray-600 font-medium mt-1">
              Recognized as an irreplaceable pillar in Gautam's life.
            </p>
          </div>

          {/* Key Promises Checklist */}
          <div className="bg-white/80 rounded-2xl p-4 text-left space-y-2.5 text-xs text-gray-700 font-semibold border border-pink-100 shadow-inner mb-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              <span><strong>Unblockable:</strong> Will NEVER be blocked, under any condition.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              <span><strong>Protected:</strong> A standing promise of safety, care, and shelter.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              <span><strong>Respected:</strong> Deepest honor for your voice, thoughts, and dreams.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              <span><strong>Forever Safe Space:</strong> Can talk, rant, or vent without judgment.</span>
            </div>
          </div>

          {/* SPECIAL SWEET SURPRISE: Chocolate is on the Way */}
          <div className="bg-gradient-to-r from-amber-50 via-rose-50 to-amber-50 rounded-2xl p-4 border-2 border-dashed border-amber-300 shadow-sm mb-4 relative overflow-hidden">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black uppercase tracking-wider mb-2 border border-amber-300">
              <span>Special Sweet Delivery 🛵💨</span>
            </div>

            <div className="mb-2">
              <ChocolateDeliveryIllustration />
            </div>

            <h4 className="text-base sm:text-lg font-black text-amber-950 font-shantell text-center">
              Your Chocolate is on the Way! 🍫😋✨
            </h4>
            <p className="text-xs text-amber-900/80 font-medium text-center mt-1 leading-relaxed">
              No special promise is complete without something sweet. Gautam has already arranged it — keep an eye out, your chocolate is officially on the way! 🌸🤍
            </p>
          </div>

          {/* Signatures */}
          <div className="flex items-center justify-between border-t border-amber-200 pt-3 px-2">
            <div className="text-left">
              <p className="text-[10px] text-gray-400 font-bold uppercase">Signed with care,</p>
              <p className="text-base font-black text-gray-800 font-shantell">Gautam 🐻</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-pink-100 border-2 border-pink-300 flex items-center justify-center text-xl shadow-sm rotate-6">
              👑
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 space-y-3">
        {/* Instagram DM button on certificate */}
        <button
          onClick={handleCopyInstagram}
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-black text-sm flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(219,39,119,0.35)] active:scale-95 transition-all"
        >
          <InstagramIcon className="w-4 h-4 text-white" />
          <span>{copiedInsta ? 'Copied! Opening Instagram...' : 'Send Respect on Instagram (@gautam_kumar_sharma235) ➔'}</span>
          {copiedInsta && <Check className="w-4 h-4 text-white" />}
        </button>

        <button
          onClick={onProceedToQuiz}
          className="cute-btn-blue w-full py-4 px-6 rounded-2xl text-white font-black text-base flex items-center justify-center gap-2 shadow-cute active:scale-95 transition-all tracking-wide"
        >
          <span>Now Play Gautam's Quiz & Test Your Bond! ➔</span>
        </button>

        <button
          onClick={() => {
            sounds.playPop();
            setStage('experience');
            setActiveTab(0);
          }}
          className="w-full py-2.5 bg-white hover:bg-gray-50 border border-pink-200 text-pink-600 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Re-read The Promises 📜</span>
        </button>
      </div>
    </div>
  );
};
