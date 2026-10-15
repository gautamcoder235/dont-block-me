import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { LandingHero } from './components/LandingHero';
import { Scoreboard } from './components/Scoreboard';
import { NameInputScreen } from './components/NameInputScreen';
import { PlayingScreen } from './components/PlayingScreen';
import { CompletedScreen } from './components/CompletedScreen';
import { CreateQuizScreen } from './components/CreateQuizScreen';
import { ContactModal } from './components/ContactModal';
import { SoundToggle } from './components/SoundToggle';
import { ShwetaSpecialExperience } from './components/ShwetaSpecialExperience';
import { getQuizById, addScoreToQuiz, INITIAL_GAUTAM_QUIZ } from './data/quizData';
import type { Quiz } from './data/quizData';

export function App() {
  const [currentQuiz, setCurrentQuiz] = useState<Quiz>(INITIAL_GAUTAM_QUIZ);
  const [currentView, setCurrentView] = useState<'landing' | 'nameInput' | 'playing' | 'completed' | 'create' | 'shwetaSpecial'>('landing');
  const [playerName, setPlayerName] = useState('');
  const [latestScore, setLatestScore] = useState(0);
  const [latestAnswers, setLatestAnswers] = useState<number[]>([]);
  const [contactOpen, setContactOpen] = useState(false);

  // Load quiz based on URL parameter or default to Gautam Kumar
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const quizId = params.get('id') || 'gautam';
    const quiz = getQuizById(quizId);
    setCurrentQuiz(quiz);
  }, []);

  const handleStartQuiz = () => {
    setCurrentView('nameInput');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitName = (name: string) => {
    setPlayerName(name);
    if (name.toLowerCase().includes('shweta')) {
      setCurrentView('shwetaSpecial');
    } else {
      setCurrentView('playing');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuizComplete = (score: number, answers: number[]) => {
    setLatestScore(score);
    setLatestAnswers(answers);

    // Save score to quiz scoreboard
    const updatedQuiz = addScoreToQuiz(
      currentQuiz.id,
      playerName,
      score,
      currentQuiz.questions.length,
      answers
    );
    setCurrentQuiz({ ...updatedQuiz });

    setCurrentView('completed');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToScoreboard = () => {
    setCurrentView('landing');
    setTimeout(() => {
      const scoreboardEl = document.querySelector('section:has([alt="Scoreboard Banner"])');
      if (scoreboardEl) {
        scoreboardEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleQuizCreated = (newQuiz: Quiz) => {
    setCurrentQuiz(newQuiz);
    setCurrentView('landing');
    window.history.pushState({}, '', `?id=${newQuiz.id}`);
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-between selection:bg-pink-300">
      {/* Background Cloud Accents */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-white/40 blur-2xl" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-white/50 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-sky-200/40 blur-2xl" />
      </div>

      {/* Main View Switcher */}
      {currentView === 'landing' && (
        <div className="animate-pop pb-12">
          {/* Header */}
          <Header />

          {/* Hero notebook & mascot */}
          <LandingHero
            userName={currentQuiz.userName}
            mascotImage={currentQuiz.mascotImage}
            onStartQuiz={handleStartQuiz}
          />

          {/* Scoreboard List with full players and answers view */}
          <Scoreboard
            scoreboard={currentQuiz.scoreboard}
            userName={currentQuiz.userName}
            questions={currentQuiz.questions}
            highlightPlayerName={playerName}
          />

          {/* Bottom Footer */}
          <footer className="text-center text-xs text-gray-500 py-6 border-t border-blue-100 max-w-md mx-auto">
            <p className="font-bold text-gray-600">Don't Block Me</p>
            <p className="mt-1">Find friends you can't trust!</p>
          </footer>
        </div>
      )}

      {currentView === 'nameInput' && (
        <NameInputScreen
          onBack={() => setCurrentView('landing')}
          onSubmitName={handleSubmitName}
        />
      )}

      {currentView === 'playing' && (
        <PlayingScreen
          userName={currentQuiz.userName}
          questions={currentQuiz.questions}
          onComplete={handleQuizComplete}
        />
      )}

      {currentView === 'completed' && (
        <CompletedScreen
          userName={currentQuiz.userName}
          playerName={playerName}
          score={latestScore}
          total={currentQuiz.questions.length}
          answers={latestAnswers}
          questions={currentQuiz.questions}
          onBackToScoreboard={handleBackToScoreboard}
          onCreateQuiz={() => setCurrentView('create')}
        />
      )}

      {currentView === 'shwetaSpecial' && (
        <ShwetaSpecialExperience
          onProceedToQuiz={() => {
            setCurrentView('playing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onExitToNormal={() => {
            setCurrentView('playing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {currentView === 'create' && (
        <CreateQuizScreen
          onBack={() => setCurrentView('landing')}
          onQuizCreated={handleQuizCreated}
        />
      )}

      {/* Contact modal */}
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}

      {/* Floating Sound Effects Mute / Unmute Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <SoundToggle />
      </div>
    </div>
  );
}

export default App;
