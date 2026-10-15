import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export const SoundToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [muted, setMuted] = useState(sounds.isMuted());

  useEffect(() => {
    return sounds.onMuteChange((newMuted) => setMuted(newMuted));
  }, []);

  return (
    <button
      onClick={() => sounds.toggleMute()}
      aria-label={muted ? 'Unmute sound effects' : 'Mute sound effects'}
      title={muted ? 'Sound: OFF (Click to turn ON)' : 'Sound: ON (Click to Mute)'}
      className={`w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm border border-blue-200 shadow-sm flex items-center justify-center transition-all hover:bg-white hover:scale-105 active:scale-90 text-gray-600 hover:text-pink-500 ${className}`}
    >
      {muted ? (
        <VolumeX className="w-4 h-4 text-gray-400" />
      ) : (
        <Volume2 className="w-4 h-4 text-pink-500 animate-pulse" />
      )}
    </button>
  );
};
