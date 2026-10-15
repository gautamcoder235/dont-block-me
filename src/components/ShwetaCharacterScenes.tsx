import React from 'react';

// =========================================================================
// SCENE 1: You Are Irreplaceable (Dudu & Bubu Holding Glowing Heart Together)
// =========================================================================
export const IrreplaceableScene: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-1 select-none">
      <svg
        viewBox="0 0 280 135"
        className="w-full max-w-[270px] h-auto drop-shadow-md overflow-visible"
      >
        <defs>
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff7597" />
            <stop offset="100%" stopColor="#ff2e63" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Soft Fluffy Cloud Base */}
        <g transform="translate(0, 0)">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 -3; 0 0"
            dur="3.5s"
            repeatCount="indefinite"
          />
          <ellipse cx="140" cy="116" rx="95" ry="14" fill="url(#cloudGrad)" opacity="0.95" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="95" cy="112" r="14" fill="#ffffff" />
          <circle cx="185" cy="112" r="14" fill="#ffffff" />
          <circle cx="140" cy="108" r="18" fill="#ffffff" />
        </g>

        {/* Dudu the Brown Bear (Left: centered around X=85) */}
        <g transform="translate(55, 30)">
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -2.5; 0 0"
              dur="2.8s"
              repeatCount="indefinite"
            />
            {/* Left & Right Ears */}
            <circle cx="14" cy="14" r="9" fill="#8f5b3a" stroke="#4a2c18" strokeWidth="2" />
            <circle cx="14" cy="14" r="4.5" fill="#d99f77" />
            <circle cx="48" cy="14" r="9" fill="#8f5b3a" stroke="#4a2c18" strokeWidth="2" />
            <circle cx="48" cy="14" r="4.5" fill="#d99f77" />

            {/* Head */}
            <ellipse cx="31" cy="36" rx="22" ry="19" fill="#a46d47" stroke="#4a2c18" strokeWidth="2.2" />
            {/* Snout */}
            <ellipse cx="31" cy="41" rx="10" ry="7" fill="#f3dfcb" stroke="#4a2c18" strokeWidth="1.2" />
            <ellipse cx="31" cy="38" rx="3" ry="1.8" fill="#2d170a" />
            <path d="M 29 41 Q 31 44 33 41" fill="none" stroke="#2d170a" strokeWidth="1.2" strokeLinecap="round" />

            {/* Happy smiling eyes (⌒ ⌒) */}
            <path d="M 21 33 Q 24 29 27 33" fill="none" stroke="#2d170a" strokeWidth="2" strokeLinecap="round" />
            <path d="M 35 33 Q 38 29 41 33" fill="none" stroke="#2d170a" strokeWidth="2" strokeLinecap="round" />

            {/* Rosy Cheeks */}
            <ellipse cx="17" cy="39" rx="4" ry="2.2" fill="#ff7597" opacity="0.85" />
            <ellipse cx="45" cy="39" rx="4" ry="2.2" fill="#ff7597" opacity="0.85" />

            {/* Mint Bowtie */}
            <path d="M 28 54 L 22 50 L 22 58 Z" fill="#34d399" stroke="#047857" strokeWidth="1" />
            <path d="M 34 54 L 40 50 L 40 58 Z" fill="#34d399" stroke="#047857" strokeWidth="1" />
            <circle cx="31" cy="54" r="2.2" fill="#10b981" />

            {/* Body */}
            <path d="M 18 55 C 10 70 10 80 21 82 C 28 84 38 84 42 82 C 50 80 50 70 42 55 Z" fill="#8f5b3a" stroke="#4a2c18" strokeWidth="2" />
            
            {/* Arm holding heart */}
            <path d="M 38 60 Q 52 64 56 68" fill="none" stroke="#8f5b3a" strokeWidth="6" strokeLinecap="round" />
            <ellipse cx="57" cy="69" rx="4.5" ry="4" fill="#d99f77" stroke="#4a2c18" strokeWidth="1.2" />
          </g>
        </g>

        {/* Bubu the Cute White Bunny/Bear (Right: centered around X=195) */}
        <g transform="translate(165, 30)">
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -2.5; 0 0"
              dur="2.8s"
              begin="0.4s"
              repeatCount="indefinite"
            />
            {/* Left & Right Ears */}
            <circle cx="14" cy="14" r="9" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="14" cy="14" r="4.5" fill="#fbcfe8" />
            <circle cx="48" cy="14" r="9" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="48" cy="14" r="4.5" fill="#fbcfe8" />

            {/* Head */}
            <ellipse cx="31" cy="36" rx="22" ry="19" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2.2" />

            {/* Snout */}
            <ellipse cx="31" cy="41" rx="9" ry="6" fill="#fdf2f8" />
            <ellipse cx="31" cy="38" rx="2.5" ry="1.5" fill="#f43f5e" />
            <path d="M 29 41 Q 31 44 33 41" fill="none" stroke="#f43f5e" strokeWidth="1.2" strokeLinecap="round" />

            {/* Blushing Anime Eyes */}
            <circle cx="23" cy="33" r="2.8" fill="#1e293b" />
            <circle cx="22" cy="32" r="1" fill="#ffffff" />
            <circle cx="39" cy="33" r="2.8" fill="#1e293b" />
            <circle cx="38" cy="32" r="1" fill="#ffffff" />

            {/* Rosy Cheeks */}
            <ellipse cx="17" cy="39" rx="4.5" ry="2.2" fill="#f472b6" opacity="0.85" />
            <ellipse cx="45" cy="39" rx="4.5" ry="2.2" fill="#f472b6" opacity="0.85" />

            {/* Body */}
            <path d="M 18 55 C 10 70 10 80 21 82 C 28 84 38 84 42 82 C 50 80 50 70 42 55 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />

            {/* Arm holding heart */}
            <path d="M 24 60 Q 10 64 6 68" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
            <ellipse cx="5" cy="69" rx="4.5" ry="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
          </g>
        </g>

        {/* Big Glowing Heart in the Middle (Held Together at X=140, Y=78) */}
        <g transform="translate(140, 78)">
          <g>
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1; 1.15; 1"
              dur="1.8s"
              repeatCount="indefinite"
            />
            <path
              d="M 0 -18 
                 C -10 -30, -26 -18, -26 -4 
                 C -26 12, 0 26, 0 26 
                 C 0 26, 26 12, 26 -4 
                 C 26 -18, 10 -30, 0 -18 Z"
              fill="url(#heartGrad)"
              stroke="#ffffff"
              strokeWidth="2.5"
              filter="url(#glow)"
            />
            {/* Specular highlight */}
            <ellipse cx="-8" cy="-10" rx="3.5" ry="2" fill="#ffffff" opacity="0.8" transform="rotate(-30, -8, -10)" />
          </g>
        </g>

        {/* Orbiting Sparkles & Hearts */}
        <text x="135" y="24" fontSize="13" fill="#f59e0b">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 -4; 0 0"
            dur="2s"
            repeatCount="indefinite"
          />
          ✨
        </text>
        <text x="42" y="38" fontSize="11" fill="#ec4899">💖</text>
        <text x="228" y="38" fontSize="11" fill="#ec4899">💖</text>
      </svg>
    </div>
  );
};

// =========================================================================
// SCENE 2: The Unbreakable Rule (Dudu Breaking Block Button with Golden Lock)
// =========================================================================
export const NeverBlockScene: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-1 select-none">
      <svg
        viewBox="0 0 280 135"
        className="w-full max-w-[270px] h-auto drop-shadow-md overflow-visible"
      >
        <defs>
          <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>

        {/* Central Smartphone with Lifetime Lock (X=100, Y=10) */}
        <g transform="translate(100, 10)">
          {/* Phone body */}
          <rect x="0" y="0" width="80" height="114" rx="16" fill="#1e293b" stroke="#334155" strokeWidth="2.5" />
          <rect x="4" y="5" width="72" height="104" rx="12" fill="#f8fafc" />

          {/* Notch & Speaker */}
          <ellipse cx="40" cy="9" rx="8" ry="2" fill="#334155" />

          {/* Chat Bubble on Phone Screen */}
          <rect x="6" y="16" width="68" height="26" rx="8" fill="#fce7f3" stroke="#f472b6" strokeWidth="1.2" />
          <text x="11" y="28" fontSize="8" fontWeight="bold" fill="#be185d" fontFamily="sans-serif">Shweta 🌸</text>
          <text x="11" y="37" fontSize="7" fill="#475569" fontFamily="sans-serif">Always safe here ✨</text>

          {/* Broken "BLOCK" button with red slash */}
          <g transform="translate(8, 48)">
            <rect x="0" y="0" width="64" height="22" rx="7" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1" strokeDasharray="3 2" />
            <text x="10" y="14" fontSize="9" fontWeight="900" fill="#dc2626" textDecoration="line-through">BLOCK</text>
            <text x="46" y="15" fontSize="11">❌</text>
          </g>

          {/* Golden Forever Badge */}
          <g transform="translate(6, 78)">
            <rect x="0" y="0" width="68" height="22" rx="8" fill="url(#goldGrad2)" stroke="#d97706" strokeWidth="1.5" />
            <text x="5" y="15" fontSize="8" fontWeight="900" fill="#78350f" fontFamily="sans-serif">🔒 UNBLOCKABLE</text>
          </g>
        </g>

        {/* Dudu Bear on Left (X=25, Y=32) Holding Golden Key */}
        <g transform="translate(25, 32)">
          {/* Ears */}
          <circle cx="14" cy="14" r="8.5" fill="#8f5b3a" stroke="#4a2c18" strokeWidth="2" />
          <circle cx="14" cy="14" r="4" fill="#d99f77" />
          <circle cx="44" cy="14" r="8.5" fill="#8f5b3a" stroke="#4a2c18" strokeWidth="2" />
          <circle cx="44" cy="14" r="4" fill="#d99f77" />

          {/* Head */}
          <ellipse cx="29" cy="36" rx="20" ry="17" fill="#a46d47" stroke="#4a2c18" strokeWidth="2.2" />
          <ellipse cx="29" cy="40" rx="9" ry="6" fill="#f3dfcb" />
          <ellipse cx="29" cy="37" rx="2.8" ry="1.5" fill="#2d170a" />
          <path d="M 27 40 Q 29 43 31 40" fill="none" stroke="#2d170a" strokeWidth="1.2" strokeLinecap="round" />

          {/* Winking eye + normal eye */}
          <circle cx="21" cy="33" r="2.8" fill="#2d170a" />
          <path d="M 34 33 Q 38 30 40 34" fill="none" stroke="#2d170a" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="16" cy="38" rx="3.5" ry="2" fill="#ff7597" opacity="0.85" />
          <ellipse cx="42" cy="38" rx="3.5" ry="2" fill="#ff7597" opacity="0.85" />

          {/* Body */}
          <path d="M 16 52 C 8 68 8 78 18 80 C 26 82 36 82 40 80 C 48 78 48 68 40 52 Z" fill="#8f5b3a" stroke="#4a2c18" strokeWidth="2" />
          
          {/* Reaching Arm with Golden Key turning */}
          <g transform="translate(38, 56)">
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 25 10; -12 25 10; 0 25 10"
                dur="2s"
                repeatCount="indefinite"
              />
              <path d="M 0 6 L 22 2 L 22 10 L 0 10 Z" fill="#8f5b3a" stroke="#4a2c18" strokeWidth="1.2" />
              {/* Golden Key */}
              <circle cx="26" cy="6" r="6" fill="url(#goldGrad2)" stroke="#b45309" strokeWidth="1.5" />
              <circle cx="26" cy="6" r="2.5" fill="#ffffff" />
              <rect x="32" y="4" width="10" height="4" fill="url(#goldGrad2)" stroke="#b45309" strokeWidth="1" />
              <rect x="38" y="8" width="3" height="4" fill="url(#goldGrad2)" />
            </g>
          </g>
        </g>

        {/* Bubu on Right (X=198, Y=34) Happily Cheering */}
        <g transform="translate(198, 34)">
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="1.8s"
              repeatCount="indefinite"
            />
            {/* Ears */}
            <circle cx="14" cy="14" r="8.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="14" cy="14" r="4" fill="#fbcfe8" />
            <circle cx="44" cy="14" r="8.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="44" cy="14" r="4" fill="#fbcfe8" />

            {/* Head */}
            <ellipse cx="29" cy="36" rx="20" ry="17" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2.2" />
            <ellipse cx="29" cy="40" rx="8" ry="5.5" fill="#fdf2f8" />
            <ellipse cx="29" cy="37" rx="2.5" ry="1.5" fill="#f43f5e" />
            <path d="M 27 40 Q 29 43 31 40" fill="none" stroke="#f43f5e" strokeWidth="1.2" strokeLinecap="round" />

            {/* Cheerful Anime Eyes */}
            <circle cx="21" cy="33" r="2.8" fill="#1e293b" />
            <circle cx="20" cy="32" r="1" fill="#ffffff" />
            <circle cx="37" cy="33" r="2.8" fill="#1e293b" />
            <circle cx="36" cy="32" r="1" fill="#ffffff" />
            <ellipse cx="16" cy="38" rx="3.5" ry="2" fill="#f472b6" opacity="0.85" />
            <ellipse cx="42" cy="38" rx="3.5" ry="2" fill="#f472b6" opacity="0.85" />

            {/* Body */}
            <path d="M 16 52 C 8 68 8 78 18 80 C 26 82 36 82 40 80 C 48 78 48 68 40 52 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            {/* Cheering paws up in the air */}
            <ellipse cx="12" cy="46" rx="4" ry="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" transform="rotate(-25, 12, 46)" />
            <ellipse cx="46" cy="46" rx="4" ry="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" transform="rotate(25, 46, 46)" />
          </g>
        </g>
      </svg>
    </div>
  );
};

// =========================================================================
// SCENE 3: Always Protect (Dudu Sheltering Bubu with Umbrella in Rain)
// =========================================================================
export const ProtectiveUmbrellaScene: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-1 select-none">
      <svg
        viewBox="0 0 280 135"
        className="w-full max-w-[270px] h-auto drop-shadow-md overflow-visible"
      >
        <defs>
          <linearGradient id="umbrellaGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
          <linearGradient id="glowWarm3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fdf2f8" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Rain Cloud on Left Top (Outside umbrella) */}
        <g transform="translate(12, 6)">
          <ellipse cx="32" cy="16" rx="22" ry="11" fill="#94a3b8" />
          <circle cx="22" cy="14" r="13" fill="#94a3b8" />
          <circle cx="42" cy="13" r="14" fill="#cbd5e1" />

          {/* Falling Animated Rain Drops */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 -4; 0 6; 0 -4"
              dur="1.2s"
              repeatCount="indefinite"
            />
            <line x1="16" y1="32" x2="12" y2="44" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 5" />
            <line x1="30" y1="34" x2="26" y2="46" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 5" />
            <line x1="44" y1="32" x2="40" y2="44" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 5" />
          </g>
        </g>

        {/* Warm Sunlight & Cozy Glow inside the Shelter */}
        <polygon points="85,38 235,38 255,128 65,128" fill="url(#glowWarm3)" />

        {/* Pastel Protective Umbrella Canopy (X=80, Y=8) */}
        <g transform="translate(80, 8)">
          <path
            d="M 10 38 
               C 10 0, 150 0, 150 38 
               C 125 34, 105 38, 80 34 
               C 55 38, 35 34, 10 38 Z"
            fill="url(#umbrellaGrad3)"
            stroke="#ffffff"
            strokeWidth="3"
            filter="drop-shadow(0 3px 6px rgba(0,0,0,0.15))"
          />
          {/* Umbrella tip */}
          <line x1="80" y1="0" x2="80" y2="-6" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          {/* Umbrella Stick & Handle */}
          <line x1="80" y1="34" x2="80" y2="104" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 80 104 Q 80 114 72 114" fill="none" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
        </g>

        {/* Dudu (Left: X=88, Y=45) Holding the Umbrella Firmly & Protectively */}
        <g transform="translate(88, 45)">
          {/* Ears */}
          <circle cx="14" cy="14" r="8.5" fill="#8f5b3a" stroke="#4a2c18" strokeWidth="2" />
          <circle cx="14" cy="14" r="4" fill="#d99f77" />
          <circle cx="44" cy="14" r="8.5" fill="#8f5b3a" stroke="#4a2c18" strokeWidth="2" />
          <circle cx="44" cy="14" r="4" fill="#d99f77" />

          {/* Head */}
          <ellipse cx="29" cy="36" rx="20" ry="17" fill="#a46d47" stroke="#4a2c18" strokeWidth="2.2" />
          <ellipse cx="29" cy="40" rx="9" ry="6" fill="#f3dfcb" />
          <ellipse cx="29" cy="37" rx="2.8" ry="1.5" fill="#2d170a" />
          <path d="M 27 40 Q 29 43 31 40" fill="none" stroke="#2d170a" strokeWidth="1.2" strokeLinecap="round" />

          {/* Focused & Protective Gentle Eyes */}
          <circle cx="21" cy="33" r="2.8" fill="#2d170a" />
          <circle cx="20" cy="32" r="1" fill="#ffffff" />
          <circle cx="37" cy="33" r="2.8" fill="#2d170a" />
          <circle cx="36" cy="32" r="1" fill="#ffffff" />
          <ellipse cx="16" cy="38" rx="3.5" ry="2" fill="#ff7597" opacity="0.85" />
          <ellipse cx="42" cy="38" rx="3.5" ry="2" fill="#ff7597" opacity="0.85" />

          {/* Body */}
          <path d="M 16 52 C 8 68 8 78 18 80 C 26 82 36 82 40 80 C 48 78 48 68 40 52 Z" fill="#8f5b3a" stroke="#4a2c18" strokeWidth="2" />
          {/* Paw firmly clasping umbrella stick */}
          <ellipse cx="48" cy="60" rx="5" ry="4" fill="#d99f77" stroke="#4a2c18" strokeWidth="1.5" />
        </g>

        {/* Bubu (Right: X=152, Y=50) Safe, Warm & Smiling Peacefully Under the Umbrella */}
        <g transform="translate(152, 50)">
          {/* Ears */}
          <circle cx="14" cy="14" r="8.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="14" cy="14" r="4" fill="#fbcfe8" />
          <circle cx="44" cy="14" r="8.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="44" cy="14" r="4" fill="#fbcfe8" />

          {/* Head */}
          <ellipse cx="29" cy="36" rx="20" ry="17" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2.2" />
          <ellipse cx="29" cy="40" rx="8" ry="5.5" fill="#fdf2f8" />
          <ellipse cx="29" cy="37" rx="2.5" ry="1.5" fill="#f43f5e" />
          <path d="M 27 40 Q 29 43 31 40" fill="none" stroke="#f43f5e" strokeWidth="1.2" strokeLinecap="round" />

          {/* Peaceful closed happy eyes (^_^) */}
          <path d="M 20 33 Q 23 29 26 33" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
          <path d="M 32 33 Q 35 29 38 33" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="16" cy="38" rx="4" ry="2.2" fill="#f472b6" opacity="0.9" />
          <ellipse cx="42" cy="38" rx="4" ry="2.2" fill="#f472b6" opacity="0.9" />

          {/* Body */}
          <path d="M 16 52 C 8 68 8 78 18 80 C 26 82 36 82 40 80 C 48 78 48 68 40 52 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
        </g>

        {/* Floating Safe Heart under Umbrella */}
        <text x="142" y="52" fontSize="13" fill="#ec4899">
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 1.18; 1"
            dur="1.8s"
            repeatCount="indefinite"
          />
          💖
        </text>
        <text x="215" y="68" fontSize="11" fill="#f59e0b">✨</text>
      </svg>
    </div>
  );
};

// =========================================================================
// SCENE 4: Deep Respect (Dudu Gently Placing a Golden Crown on Bubu)
// =========================================================================
export const RespectAndCrownScene: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-1 select-none">
      <svg
        viewBox="0 0 280 135"
        className="w-full max-w-[270px] h-auto drop-shadow-md overflow-visible"
      >
        <defs>
          <linearGradient id="crownGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>

        {/* Ambient Royal Sparkles */}
        <g>
          <text x="176" y="20" fontSize="14" fill="#eab308">👑</text>
          <text x="75" y="26" fontSize="12" fill="#ec4899">🌸</text>
          <text x="235" y="42" fontSize="12" fill="#ec4899">🌸</text>
          <text x="135" y="16" fontSize="13" fill="#f59e0b">✨</text>
        </g>

        {/* Dudu on Left (X=58, Y=35) Bowing respectfully with hand over heart */}
        <g transform="translate(58, 35)">
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 25 80; 4 25 80; 0 25 80"
              dur="2.5s"
              repeatCount="indefinite"
            />
            {/* Ears */}
            <circle cx="14" cy="14" r="8.5" fill="#8f5b3a" stroke="#4a2c18" strokeWidth="2" />
            <circle cx="14" cy="14" r="4" fill="#d99f77" />
            <circle cx="44" cy="14" r="8.5" fill="#8f5b3a" stroke="#4a2c18" strokeWidth="2" />
            <circle cx="44" cy="14" r="4" fill="#d99f77" />

            {/* Head tilting respectfully */}
            <ellipse cx="29" cy="36" rx="20" ry="17" fill="#a46d47" stroke="#4a2c18" strokeWidth="2.2" />
            <ellipse cx="29" cy="40" rx="9" ry="6" fill="#f3dfcb" />
            <ellipse cx="29" cy="37" rx="2.8" ry="1.5" fill="#2d170a" />
            <path d="M 27 40 Q 29 43 31 40" fill="none" stroke="#2d170a" strokeWidth="1.2" strokeLinecap="round" />

            {/* Gentle Respectful Smile & Eyes */}
            <path d="M 20 33 Q 23 29 26 33" fill="none" stroke="#2d170a" strokeWidth="2" strokeLinecap="round" />
            <path d="M 32 33 Q 35 29 38 33" fill="none" stroke="#2d170a" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="16" cy="38" rx="3.5" ry="2" fill="#ff7597" opacity="0.85" />
            <ellipse cx="42" cy="38" rx="3.5" ry="2" fill="#ff7597" opacity="0.85" />

            {/* Body */}
            <path d="M 16 52 C 8 68 8 78 18 80 C 26 82 36 82 40 80 C 48 78 48 68 40 52 Z" fill="#8f5b3a" stroke="#4a2c18" strokeWidth="2" />
            {/* Hand over heart */}
            <ellipse cx="29" cy="62" rx="6" ry="4" fill="#d99f77" stroke="#4a2c18" strokeWidth="1.2" />
            {/* Reaching arm crowning Bubu */}
            <path d="M 40 58 L 65 38" stroke="#8f5b3a" strokeWidth="4.5" strokeLinecap="round" />
            <ellipse cx="65" cy="38" rx="4" ry="4" fill="#d99f77" stroke="#4a2c18" strokeWidth="1.2" />
          </g>
        </g>

        {/* Bubu on Right (X=155, Y=35) Blushing Queen with Crown on Head */}
        <g transform="translate(155, 35)">
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -2; 0 0"
              dur="2.5s"
              repeatCount="indefinite"
            />
            {/* Ears */}
            <circle cx="14" cy="14" r="8.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="14" cy="14" r="4" fill="#fbcfe8" />
            <circle cx="44" cy="14" r="8.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="44" cy="14" r="4" fill="#fbcfe8" />

            {/* Head */}
            <ellipse cx="29" cy="36" rx="20" ry="17" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2.2" />
            <ellipse cx="29" cy="40" rx="8" ry="5.5" fill="#fdf2f8" />
            <ellipse cx="29" cy="37" rx="2.5" ry="1.5" fill="#f43f5e" />
            <path d="M 27 40 Q 29 43 31 40" fill="none" stroke="#f43f5e" strokeWidth="1.2" strokeLinecap="round" />

            {/* Sparkly Anime Queen Eyes */}
            <circle cx="21" cy="33" r="3" fill="#1e293b" />
            <circle cx="20" cy="32" r="1.2" fill="#ffffff" />
            <circle cx="37" cy="33" r="3" fill="#1e293b" />
            <circle cx="36" cy="32" r="1.2" fill="#ffffff" />

            {/* Deep Rosy Blushing Cheeks */}
            <ellipse cx="16" cy="39" rx="4.5" ry="2.5" fill="#f472b6" opacity="0.9" />
            <ellipse cx="42" cy="39" rx="4.5" ry="2.5" fill="#f472b6" opacity="0.9" />

            {/* Beautiful Golden Crown on Bubu's Head */}
            <g transform="translate(15, 6)">
              <path
                d="M 0 14 L 6 4 L 14 12 L 22 4 L 28 14 Z"
                fill="url(#crownGrad4)"
                stroke="#b45309"
                strokeWidth="1.5"
              />
              {/* Jewels on crown */}
              <circle cx="6" cy="4" r="2" fill="#ef4444" />
              <circle cx="14" cy="12" r="1.8" fill="#3b82f6" />
              <circle cx="22" cy="4" r="2" fill="#ef4444" />
            </g>

            {/* Body */}
            <path d="M 16 52 C 8 68 8 78 18 80 C 26 82 36 82 40 80 C 48 78 48 68 40 52 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />

            {/* Holding a cute pink tulip flower */}
            <line x1="14" y1="56" x2="10" y2="72" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
            <circle cx="15" cy="54" r="4.5" fill="#f43f5e" />
            <circle cx="12" cy="52" r="3.5" fill="#fb7185" />
            <circle cx="18" cy="52" r="3.5" fill="#fb7185" />
          </g>
        </g>
      </svg>
    </div>
  );
};

// =========================================================================
// SCENE 5: Sweet Surprise (Your Chocolate is on the Way! 🍫🛵💨)
// =========================================================================
export const ChocolateDeliveryIllustration: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-1 select-none">
      <svg
        viewBox="0 0 280 105"
        className="w-full max-w-[270px] h-auto drop-shadow-sm overflow-visible"
      >
        <defs>
          <linearGradient id="chocFoilGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
        </defs>

        {/* Speed lines for delivery 🛵💨 */}
        <g stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" opacity="0.6">
          <line x1="28" y1="88" x2="55" y2="88" strokeDasharray="5 4" />
          <line x1="40" y1="94" x2="75" y2="94" strokeDasharray="6 4" />
        </g>

        {/* Dudu Bear on Left (X=55, Y=16) in Delivery Cap */}
        <g transform="translate(55, 16)">
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -2.5; 0 0"
              dur="2s"
              repeatCount="indefinite"
            />
            {/* Ears */}
            <circle cx="12" cy="12" r="7" fill="#8f5b3a" stroke="#4a2c18" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3.5" fill="#d99f77" />
            <circle cx="36" cy="12" r="7" fill="#8f5b3a" stroke="#4a2c18" strokeWidth="1.5" />
            <circle cx="36" cy="12" r="3.5" fill="#d99f77" />

            {/* Head */}
            <ellipse cx="24" cy="30" rx="16" ry="14" fill="#a46d47" stroke="#4a2c18" strokeWidth="1.8" />
            <ellipse cx="24" cy="33" rx="7" ry="5" fill="#f3dfcb" />
            <ellipse cx="24" cy="31" rx="2.2" ry="1.2" fill="#2d170a" />
            <path d="M 22 34 Q 24 36 26 34" fill="none" stroke="#2d170a" strokeWidth="1" strokeLinecap="round" />

            {/* Eyes (Happy winking smile) */}
            <circle cx="18" cy="27" r="2.2" fill="#2d170a" />
            <path d="M 28 27 Q 31 25 33 28" fill="none" stroke="#2d170a" strokeWidth="1.5" strokeLinecap="round" />
            <ellipse cx="14" cy="32" rx="3" ry="1.8" fill="#ff7597" opacity="0.85" />
            <ellipse cx="34" cy="32" rx="3" ry="1.8" fill="#ff7597" opacity="0.85" />

            {/* Red Delivery Cap */}
            <path d="M 12 18 C 12 10 32 10 32 18 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.2" />
            <ellipse cx="34" cy="18" rx="8" ry="2.5" fill="#dc2626" />

            {/* Body */}
            <path d="M 14 43 C 8 55 8 64 16 66 C 22 68 28 68 32 66 C 38 64 38 55 34 43 Z" fill="#8f5b3a" stroke="#4a2c18" strokeWidth="1.5" />
            
            {/* Paws holding chocolate bar out */}
            <ellipse cx="38" cy="50" rx="4" ry="3.5" fill="#d99f77" stroke="#4a2c18" strokeWidth="1" />
          </g>
        </g>

        {/* Big Delicious Chocolate Bar (Middle X=112, Y=25) */}
        <g transform="translate(112, 25)">
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -2; 0 0"
              dur="2s"
              begin="0.2s"
              repeatCount="indefinite"
            />
            {/* Chocolate Bar Body */}
            <rect x="0" y="0" width="56" height="50" rx="7" fill="#451a03" stroke="#290e02" strokeWidth="1.5" />
            
            {/* Chocolate Squares */}
            <rect x="5" y="5" width="21" height="18" rx="3" fill="#581c10" stroke="#371206" strokeWidth="1" />
            <rect x="30" y="5" width="21" height="18" rx="3" fill="#581c10" stroke="#371206" strokeWidth="1" />
            <rect x="5" y="27" width="21" height="18" rx="3" fill="#581c10" stroke="#371206" strokeWidth="1" />
            <rect x="30" y="27" width="21" height="18" rx="3" fill="#581c10" stroke="#371206" strokeWidth="1" />

            {/* Golden Foil Wrap */}
            <path d="M 0 30 L 56 30 L 56 50 L 0 50 Z" fill="url(#chocFoilGrad)" stroke="#ca8a04" strokeWidth="1" />
            {/* Red Ribbon on wrapper */}
            <rect x="0" y="36" width="56" height="6" fill="#ef4444" />
            <circle cx="28" cy="39" r="4" fill="#dc2626" />
          </g>
        </g>

        {/* Bubu on Right (X=185, Y=20) Excited with Heart Eyes */}
        <g transform="translate(182, 20)">
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -3.5; 0 0"
              dur="1.8s"
              repeatCount="indefinite"
            />
            {/* Ears */}
            <circle cx="12" cy="12" r="7" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3.5" fill="#fbcfe8" />
            <circle cx="36" cy="12" r="7" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <circle cx="36" cy="12" r="3.5" fill="#fbcfe8" />

            {/* Head */}
            <ellipse cx="24" cy="30" rx="16" ry="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.8" />
            <ellipse cx="24" cy="33" rx="6.5" ry="4.5" fill="#fdf2f8" />
            <ellipse cx="24" cy="31" rx="2" ry="1.2" fill="#f43f5e" />
            <path d="M 22 34 Q 24 36 26 34" fill="none" stroke="#f43f5e" strokeWidth="1" strokeLinecap="round" />

            {/* Heart Eyes (Excited for Chocolate) */}
            <text x="14" y="28" fontSize="9" fill="#f43f5e">♥</text>
            <text x="26" y="28" fontSize="9" fill="#f43f5e">♥</text>
            <ellipse cx="14" cy="32" rx="3.5" ry="1.8" fill="#f472b6" opacity="0.9" />
            <ellipse cx="34" cy="32" rx="3.5" ry="1.8" fill="#f472b6" opacity="0.9" />

            {/* Body */}
            <path d="M 14 43 C 8 55 8 64 16 66 C 22 68 28 68 32 66 C 38 64 38 55 34 43 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            
            {/* Paws held in excitement */}
            <ellipse cx="10" cy="46" rx="3.5" ry="4.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" transform="rotate(-20, 10, 46)" />
            <ellipse cx="38" cy="46" rx="3.5" ry="4.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" transform="rotate(20, 38, 46)" />
          </g>
        </g>

        {/* Ambient Sparkles */}
        <text x="135" y="16" fontSize="12" fill="#f59e0b">✨</text>
        <text x="44" y="26" fontSize="11" fill="#ec4899">🍫</text>
        <text x="232" y="32" fontSize="11" fill="#ec4899">💖</text>
      </svg>
    </div>
  );
};
