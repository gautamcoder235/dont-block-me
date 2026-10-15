import React, { useState } from 'react';
import type { ScoreEntry, Question } from '../data/quizData';
import { Eye, Search, Sparkles, X, Check } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface ScoreboardProps {
  scoreboard: ScoreEntry[];
  userName: string;
  questions?: Question[];
  highlightPlayerName?: string;
}

export const Scoreboard: React.FC<ScoreboardProps> = ({
  scoreboard,
  userName,
  questions = [],
  highlightPlayerName,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState<ScoreEntry | null>(null);

  const filteredScoreboard = scoreboard.filter((entry) =>
    entry.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full max-w-md mx-auto px-4 mt-6 mb-12">
      {/* Scoreboard Ribbon Banner */}
      <div className="relative flex justify-center items-center w-full mb-3">
        <div className="relative w-full max-w-[340px] flex items-center justify-center">
          <img
            src="/static/assets/img/user/scoreboard/bg.webp"
            alt="Scoreboard Banner"
            className="w-full h-auto drop-shadow-md"
          />
          <div className="absolute inset-0 flex items-center justify-center -rotate-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-neutral-800 tracking-wide font-shantell">
              Scoreboard
            </span>
          </div>
        </div>
      </div>

      {/* Friends played pill counter & search toggle */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="bg-white/95 backdrop-blur-sm border border-blue-200 text-gray-700 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
          <span>{scoreboard.length} {scoreboard.length === 1 ? 'friend played' : 'friends played'}</span>
        </div>

        {/* Live Search Input */}
        {scoreboard.length > 3 && (
          <div className="relative w-40">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search friend..."
              className="w-full bg-white/90 border border-blue-200 rounded-full py-1 pl-7 pr-3 text-xs font-semibold text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400"
            />
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          </div>
        )}
      </div>

      {/* Scoreboard Cards List */}
      {filteredScoreboard.length === 0 ? (
        <div className="bg-white rounded-3xl p-8 border-2 border-dashed border-blue-200 text-center shadow-card">
          <p className="text-base font-extrabold text-gray-800 mb-1 font-shantell">
            {searchQuery ? 'No friends found' : 'No scores yet! 🏆'}
          </p>
          <p className="text-xs text-gray-400 font-medium">
            {searchQuery
              ? 'Try searching for another name!'
              : 'Be the first to play and take the #1 spot on the leaderboard! ✨'}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3.5">
          {filteredScoreboard.map((entry, index) => {
            const percentage = Math.round((entry.score / entry.total) * 100);
            const isHighlighted = highlightPlayerName && entry.name.toLowerCase() === highlightPlayerName.toLowerCase();

            return (
              <div
                key={entry.id || index}
                className={`relative bg-white rounded-3xl p-4 shadow-card border transition-all hover:shadow-cute flex items-center gap-3.5 ${
                  isHighlighted
                    ? 'border-2 border-pink-400 ring-2 ring-pink-200 bg-pink-50/20'
                    : 'border-blue-100 hover:border-blue-200'
                }`}
              >
                {/* Rank Star Badge */}
                <div className="absolute -top-3.5 -left-2 w-9 h-9 flex items-center justify-center z-10">
                  {entry.rankBadge ? (
                    <img
                      src={entry.rankBadge}
                      alt={`Rank ${index + 1}`}
                      className="w-full h-full object-contain drop-shadow-sm"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-yellow-400 text-white font-bold text-xs flex items-center justify-center shadow">
                      {index + 1}
                    </div>
                  )}
                  <span className="absolute text-[11px] font-black text-gray-700">
                    {index + 1}
                  </span>
                </div>

                {/* Corner Cute Doodle */}
                {entry.doodle && (
                  <div className="absolute top-2 right-2 w-6 h-6 pointer-events-none opacity-85">
                    <img src={entry.doodle} alt="" className="w-full h-full object-contain" />
                  </div>
                )}

                {/* Avatar Icon */}
                <div className="w-16 h-16 flex-shrink-0 bg-blue-50/70 rounded-2xl p-1 flex items-center justify-center border border-blue-100/60 shadow-inner">
                  <img
                    src={entry.avatar}
                    alt={entry.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>

                {/* Player details & progress bar */}
                <div className="flex-1 min-w-0 pr-2">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5 truncate">
                      <h3 className="font-extrabold text-gray-800 text-base truncate font-shantell">
                        {entry.name}
                      </h3>
                      {isHighlighted && (
                        <span className="bg-pink-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shrink-0">
                          YOU
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-pink-500 font-extrabold text-base">
                        {entry.score}
                      </span>
                      <span className="text-gray-400 text-xs font-semibold">
                        /{entry.total}
                      </span>
                    </div>
                  </div>

                  {/* Cute Pink Progress Bar */}
                  <div className="w-full bg-pink-100 rounded-full h-2.5 overflow-hidden p-[2px] mb-2">
                    <div
                      className="bg-gradient-to-r from-pink-400 to-pink-500 h-full rounded-full transition-all duration-1000 shadow-sm"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>

                  {/* Date & View Answers CTA */}
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-gray-400 font-medium">{entry.date}</span>
                    {questions.length > 0 && entry.answers && entry.answers.length > 0 && (
                      <button
                        onClick={() => {
                          sounds.playPop();
                          setSelectedPlayer(entry);
                        }}
                        className="text-blue-500 hover:text-blue-700 font-bold flex items-center gap-1 hover:underline"
                      >
                        <Eye className="w-3 h-3" />
                        <span>View answers</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal to View Specific Player's Answers */}
      {selectedPlayer && questions.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-pop">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md max-h-[85vh] flex flex-col shadow-2xl border-2 border-blue-200">
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <div>
                <h3 className="font-black text-lg text-gray-800">
                  {selectedPlayer.name}'s Answers
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  Score: <strong className="text-pink-500">{selectedPlayer.score}/{selectedPlayer.total}</strong> on {userName}'s quiz
                </p>
              </div>
              <button
                onClick={() => {
                  sounds.playPop();
                  setSelectedPlayer(null);
                }}
                className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-bold text-sm hover:bg-gray-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="overflow-y-auto space-y-3.5 pr-1 flex-1">
              {questions.map((q, idx) => {
                const chosenIdx = selectedPlayer.answers ? selectedPlayer.answers[idx] : undefined;
                const isCorrect = chosenIdx !== undefined && chosenIdx === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-3.5 rounded-2xl border ${
                      isCorrect ? 'bg-green-50/40 border-green-200' : 'bg-red-50/40 border-red-200'
                    }`}
                  >
                    <p className="font-bold text-xs text-gray-800 mb-1">
                      {idx + 1}. {q.question}
                    </p>
                    <div className="text-xs space-y-1">
                      <p className="flex items-center justify-between">
                        <span className="text-gray-500">Answered:</span>
                        <span className={isCorrect ? 'text-green-700 font-bold' : 'text-red-600 font-bold'}>
                          {chosenIdx !== undefined ? q.options[chosenIdx] : 'None'} {isCorrect ? '✔' : '✖'}
                        </span>
                      </p>
                      {!isCorrect && (
                        <p className="flex items-center justify-between text-gray-500">
                          <span>{userName}'s answer:</span>
                          <span className="text-green-700 font-bold">
                            {q.options[q.correctIndex]} <Check className="w-3 h-3 inline" />
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => {
                sounds.playPop();
                setSelectedPlayer(null);
              }}
              className="mt-4 w-full py-3 bg-blue-500 text-white font-bold rounded-2xl shadow-cute hover:bg-blue-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
