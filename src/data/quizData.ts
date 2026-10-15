export interface Question {
  id: string;
  question: string;
  options: string[];
  headerImage: string;
  optionImages: string[];
  correctIndex: number;
}

export interface ScoreEntry {
  id: string;
  name: string;
  score: number;
  total: number;
  avatar: string;
  rankBadge?: string;
  doodle?: string;
  answers?: number[]; // indices of options chosen
  date: string;
}

export interface Quiz {
  id: string;
  userName: string;
  userGender: 'male' | 'female';
  mascotImage?: string;
  themeColor?: string;
  questions: Question[];
  scoreboard: ScoreEntry[];
}

export const INITIAL_GAUTAM_QUIZ: Quiz = {
  id: 'gautam',
  userName: 'Gautam',
  userGender: 'male',
  mascotImage: '/static/assets/img/player/home/character-dudu.svg',
  themeColor: 'sky',
  questions: [
    {
      id: 'g-1',
      question: "What was Gautam's real first impression of you? 🥺",
      options: [
        'Thought you were cute but intimidating 🫣',
        'Thought you were super quiet & shy 🤫',
        'Instantly wanted to be close to you ✨',
        'Thought you were funny & chaotic 😂',
      ],
      headerImage: '/static/assets/img/ques_images/9/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/9/1.webp',
        '/static/assets/img/ques_images/9/4.webp',
        '/static/assets/img/ques_images/9/0.webp',
        '/static/assets/img/ques_images/9/5.webp',
      ],
      correctIndex: 1,
    },
    {
      id: 'g-2',
      question: 'What does Gautam secretly value most in you? 💖',
      options: [
        'Your smile & the way your eyes light up ✨',
        'Your gentle patience & how thoughtfully you treat people 🌷',
        'Your savage sarcasm & sense of humor 😂',
        'How comfortable he feels around you 🧸',
      ],
      headerImage: '/static/assets/img/ques_images/24/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/9/1.webp',
        '/static/assets/img/ques_images/24/0.webp',
        '/static/assets/img/ques_images/41/0.webp',
        '/static/assets/img/ques_images/43/0.webp',
      ],
      correctIndex: 1,
    },
    {
      id: 'g-3',
      question: 'When Gautam has a rough day, what instantly cures it? 🩹',
      options: [
        'A sweet random text or call from you 📱',
        'Late-night Maggi or ice cream together 🍜',
        'Dragging him out to get fresh air and forget about the world 🚲',
        'Playing games while on call with you 🎮',
      ],
      headerImage: '/static/assets/img/ques_images/459/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/34/0.webp',
        '/static/assets/img/ques_images/459/8.webp',
        '/static/assets/img/ques_images/11/2.webp',
        '/static/assets/img/ques_images/43/4.webp',
      ],
      correctIndex: 2,
    },
    {
      id: 'g-4',
      question: 'How does Gautam act when he has a soft spot / crush on you? 🫣',
      options: [
        'Roasts & teases you constantly 😈',
        'Replies in under 5 seconds to every text ⚡',
        'Gets slightly shy and avoids eye contact 🙈',
        'Remembers tiny random details you mention 📝',
      ],
      headerImage: '/static/assets/img/ques_images/11/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/11/0.webp',
        '/static/assets/img/ques_images/34/0.webp',
        '/static/assets/img/ques_images/9/1.webp',
        '/static/assets/img/ques_images/10/1.webp',
      ],
      correctIndex: 2,
    },
    {
      id: 'g-5',
      question: "What songs does Gautam secretly dedicate to you? 🎧",
      options: [
        'Late night acoustic 🌙',
        'Soulful melodies / Arijit 🎶',
        'Chill lo-fi beats ☕',
        'Upbeat romantic songs ✨',
      ],
      headerImage: '/static/assets/img/ques_images/41/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/24/1.webp',
        '/static/assets/img/ques_images/41/6.webp',
        '/static/assets/img/ques_images/9/5.webp',
        '/static/assets/img/ques_images/9/1.webp',
      ],
      correctIndex: 3,
    },
    {
      id: 'g-6',
      question: "What is Gautam's hidden habit only you would catch? 🔍",
      options: [
        'Checking his hair in every reflection 💇',
        'Re-reading old texts and smiling to himself 📲',
        'Overthinking conversations 3 days later 🧠',
        'Pretending he is not sleepy when talking to you 😴',
      ],
      headerImage: '/static/assets/img/ques_images/10/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/10/4.webp',
        '/static/assets/img/ques_images/34/1.webp',
        '/static/assets/img/ques_images/10/1.webp',
        '/static/assets/img/ques_images/9/4.webp',
      ],
      correctIndex: 1,
    },
    {
      id: 'g-7',
      question: 'Which cartoons / animated movies does Gautam love the most? 🎬',
      options: [
        'Animated cartoon movies (e.g. Kung Fu Panda, etc.) 🐼',
        'Classic cartoons (Tom & Jerry, Shinchan, Doraemon) 🐱',
        'Superhero cartoons (Ben 10, Spider-Man) ⚡',
        'Anime series (Naruto, Dragon Ball Z) ⚔️',
      ],
      headerImage: '/static/assets/img/ques_images/41/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/9/1.webp',
        '/static/assets/img/ques_images/41/0.webp',
        '/static/assets/img/ques_images/43/4.webp',
        '/static/assets/img/ques_images/11/0.webp',
      ],
      correctIndex: 0,
    },
    {
      id: 'g-8',
      question: 'What little thing you do melts his heart the most? 🫠',
      options: [
        'Calling him by a cute/silly nickname 🙈',
        'Remembering what he likes to eat/drink 🍫',
        "Sending unexpected 'did you eat?' check-ins 🥣",
        'The way you laugh at his silly jokes 😂',
      ],
      headerImage: '/static/assets/img/ques_images/43/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/9/1.webp',
        '/static/assets/img/ques_images/459/8.webp',
        '/static/assets/img/ques_images/9/0.webp',
        '/static/assets/img/ques_images/41/0.webp',
      ],
      correctIndex: 3,
    },
    {
      id: 'g-9',
      question: "What would Gautam do if you suddenly started crying in front of him? 🥺",
      options: [
        'Sit with you quietly and listen 🧸',
        'Ask what happened and try to help 💬',
        'Try to cheer you up and make you smile 😊',
        'Get you water or food to help you feel better 🥤',
      ],
      headerImage: '/static/assets/img/ques_images/11/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/11/2.webp',
        '/static/assets/img/ques_images/34/0.webp',
        '/static/assets/img/ques_images/9/1.webp',
        '/static/assets/img/ques_images/9/0.webp',
      ],
      correctIndex: 1,
    },
    {
      id: 'g-10',
      question: 'Will Gautam ever block you? 🚫📱',
      options: [
        "Never in a million years, you're too special 💖",
        'Only if you steal his fries or do not reply 🍟',
        'He would miss you too much in 5 minutes 🥺',
        'He is physically unable to press that button 🔒',
      ],
      headerImage: '/static/assets/img/ques_images/34/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/9/1.webp',
        '/static/assets/img/ques_images/9/0.webp',
        '/static/assets/img/ques_images/11/2.webp',
        '/static/assets/img/ques_images/34/1.webp',
      ],
      correctIndex: 0,
    },
  ],
  scoreboard: [],
};

export const INITIAL_SHWETA_QUIZ: Quiz = {
  id: 'fgpPacQ',
  userName: 'Shweta',
  userGender: 'female',
  mascotImage: '/static/assets/img/player/home/character-bubu.webp',
  themeColor: 'pink',
  questions: [
    {
      id: '9',
      question: 'What makes Shweta happy? 🥹',
      options: [
        'Food 🍕',
        'Compliments 💕',
        'Money 💸',
        'Shopping 🛍️',
        'Sleeping 😴',
        'Gossip ☕',
      ],
      headerImage: '/static/assets/img/ques_images/9/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/9/0.webp',
        '/static/assets/img/ques_images/9/1.webp',
        '/static/assets/img/ques_images/9/2.webp',
        '/static/assets/img/ques_images/9/3.webp',
        '/static/assets/img/ques_images/9/4.webp',
        '/static/assets/img/ques_images/9/5.webp',
      ],
      correctIndex: 1, // Compliments 💕
    },
    {
      id: '24',
      question: 'When did Shweta usually study for exams? 📝',
      options: [
        'Days in advance 📚',
        'The night before 🌙',
        '5 minutes before 😭',
        "Didn't study 💀",
      ],
      headerImage: '/static/assets/img/ques_images/24/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/24/0.webp',
        '/static/assets/img/ques_images/24/1.webp',
        '/static/assets/img/ques_images/24/2.webp',
        '/static/assets/img/ques_images/24/3.webp',
      ],
      correctIndex: 1, // The night before 🌙
    },
    {
      id: '41',
      question: 'Which cartoon does Shweta like most? 📺',
      options: [
        'Shinchan 😂',
        'Doraemon 🤖',
        'Ninja Hattori 🥷',
        'Chhota Bheem 💪',
        'Motu Patlu 🤩',
        'Oggy and the Cockroaches 😆',
        'Tom and Jerry 🐱',
        'Pokémon ⚡',
        'Ben 10 👽',
        'SpongeBob SquarePants 🧽',
        'Naruto 🍥',
        'Dragon Ball Z 🐉',
      ],
      headerImage: '/static/assets/img/ques_images/41/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/41/0.webp',
        '/static/assets/img/ques_images/41/1.webp',
        '/static/assets/img/ques_images/41/2.webp',
        '/static/assets/img/ques_images/41/3.webp',
        '/static/assets/img/ques_images/41/4.webp',
        '/static/assets/img/ques_images/41/5.webp',
        '/static/assets/img/ques_images/41/6.webp',
        '/static/assets/img/ques_images/41/7.webp',
        '/static/assets/img/ques_images/41/8.webp',
        '/static/assets/img/ques_images/41/9.webp',
        '/static/assets/img/ques_images/41/10.webp',
        '/static/assets/img/ques_images/41/11.webp',
      ],
      correctIndex: 6, // Tom and Jerry 🐱
    },
    {
      id: '11',
      question: 'What does Shweta hate the most? 😤',
      options: [
        'Someone farting 💨',
        'Pimples 🔴',
        'Someone playing with her feelings 🥺',
        'Lying 🤥',
        'Fake friends 🎭',
        'Broken promises 😕',
        'Homework 📚',
        'Exams 📑',
      ],
      headerImage: '/static/assets/img/ques_images/11/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/11/0.webp',
        '/static/assets/img/ques_images/11/1.webp',
        '/static/assets/img/ques_images/11/2.webp',
        '/static/assets/img/ques_images/11/3.webp',
        '/static/assets/img/ques_images/11/4.webp',
        '/static/assets/img/ques_images/11/5.webp',
        '/static/assets/img/ques_images/11/6.webp',
        '/static/assets/img/ques_images/11/7.webp',
      ],
      correctIndex: 3, // Lying 🤥
    },
    {
      id: '459',
      question: "What’s Shweta’s go-to sweet or tangy treat? 🍬",
      options: [
        'Pulse Kachcha Aam 🥭',
        'Mango Bite 🟡',
        'Melody 🍫',
        'Alpenliebe Gold 🍮',
        'Alpenliebe Juzt Jelly Strawberry 🍓',
        'Poppins 🌈',
        'Boomer bubble gum 🫧',
        'Dairy Milk Chocolate 🍫',
        'KitKat Chocolate 🍫',
        'Center Fresh 🫧',
      ],
      headerImage: '/static/assets/img/ques_images/459/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/459/0.webp',
        '/static/assets/img/ques_images/459/1.webp',
        '/static/assets/img/ques_images/459/2.webp',
        '/static/assets/img/ques_images/459/3.webp',
        '/static/assets/img/ques_images/459/4.webp',
        '/static/assets/img/ques_images/459/5.webp',
        '/static/assets/img/ques_images/459/6.webp',
        '/static/assets/img/ques_images/459/7.webp',
        '/static/assets/img/ques_images/459/8.webp',
        '/static/assets/img/ques_images/459/9.webp',
      ],
      correctIndex: 8, // KitKat Chocolate 🍫
    },
    {
      id: '43',
      question: "What was Shweta's favorite game as a kid? 🛝",
      options: [
        'Hide-and-seek 🫣',
        'Tag 🏃',
        'Badminton 🏸',
        'Jump rope 🪢',
        'Ludo 🎲',
        'Carrom 🎯',
        'Snakes and Ladders 🐍',
        'Rock Paper Scissors ✂️',
      ],
      headerImage: '/static/assets/img/ques_images/43/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/43/0.webp',
        '/static/assets/img/ques_images/43/1.webp',
        '/static/assets/img/ques_images/43/2.webp',
        '/static/assets/img/ques_images/43/3.webp',
        '/static/assets/img/ques_images/43/4.webp',
        '/static/assets/img/ques_images/43/5.webp',
        '/static/assets/img/ques_images/43/6.webp',
        '/static/assets/img/ques_images/43/7.webp',
      ],
      correctIndex: 2, // Badminton 🏸
    },
    {
      id: '457',
      question: 'What is Shweta most scared of? 😨',
      options: ['Injections 💉', 'Roller coasters 🎢'],
      headerImage: '/static/assets/img/ques_images/457/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/457/0.webp',
        '/static/assets/img/ques_images/457/1.webp',
      ],
      correctIndex: 0, // Injections 💉
    },
    {
      id: '10',
      question: "What’s Shweta’s bad habit? 😬",
      options: [
        'Forgetting passwords 🔐',
        'Overthinking everything 🧠',
        'Staying up too late 🌙',
        'Shopping too much 🛍️',
        'Scrolling on her phone 📱',
        'Eating too many snacks 🍫',
        'Sleeping too much 😴',
        'Biting her nails 😬',
        'Chewing on pens 🖊️',
      ],
      headerImage: '/static/assets/img/ques_images/10/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/10/0.webp',
        '/static/assets/img/ques_images/10/1.webp',
        '/static/assets/img/ques_images/10/2.webp',
        '/static/assets/img/ques_images/10/3.webp',
        '/static/assets/img/ques_images/10/4.webp',
        '/static/assets/img/ques_images/10/5.webp',
        '/static/assets/img/ques_images/10/6.webp',
        '/static/assets/img/ques_images/10/7.webp',
        '/static/assets/img/ques_images/10/8.webp',
      ],
      correctIndex: 1, // Overthinking everything 🧠
    },
    {
      id: '28',
      question: 'How much ketchup does Shweta use? 🥫',
      options: ['None 🚫', 'Loads it with ketchup 🍅'],
      headerImage: '/static/assets/img/ques_images/28/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/28/0.webp',
        '/static/assets/img/ques_images/28/1.webp',
      ],
      correctIndex: 0, // None 🚫
    },
    {
      id: '34',
      question: 'How does Shweta usually text? 📱',
      options: [
        'Lots of messages in a row 💬',
        'One long message 📝',
      ],
      headerImage: '/static/assets/img/ques_images/34/header.webp',
      optionImages: [
        '/static/assets/img/ques_images/34/0.webp',
        '/static/assets/img/ques_images/34/1.webp',
      ],
      correctIndex: 1, // One long message 📝
    },
  ],
  scoreboard: [
    {
      id: 'sb-1',
      name: 'Bittu kumar',
      score: 10,
      total: 10,
      avatar: '/static/assets/img/user/scoreboard/avatars/avatar1.webp',
      rankBadge: '/static/assets/img/user/scoreboard/ranks/rank1.svg',
      doodle: '/static/assets/img/doodles/doodle-1.svg',
      date: 'Just now',
    },
    {
      id: 'sb-2',
      name: 'Bittu kumar',
      score: 9,
      total: 10,
      avatar: '/static/assets/img/user/scoreboard/avatars/avatar2.webp',
      rankBadge: '/static/assets/img/user/scoreboard/ranks/rank2.svg',
      doodle: '/static/assets/img/doodles/doodle-2.svg',
      date: '1 hour ago',
    },
    {
      id: 'sb-3',
      name: 'Gautam',
      score: 6,
      total: 10,
      avatar: '/static/assets/img/user/scoreboard/avatars/avatar3.webp',
      rankBadge: '/static/assets/img/user/scoreboard/ranks/rank3.svg',
      doodle: '/static/assets/img/doodles/doodle-3.svg',
      date: '3 hours ago',
    },
    {
      id: 'sb-4',
      name: 'Bittu kumar',
      score: 6,
      total: 10,
      avatar: '/static/assets/img/user/scoreboard/avatars/avatar4.webp',
      rankBadge: '/static/assets/img/user/scoreboard/ranks/rankall.svg',
      doodle: '/static/assets/img/doodles/doodle-4.svg',
      date: 'Yesterday',
    },
  ],
};

const AVATAR_OPTIONS = [
  '/static/assets/img/user/scoreboard/avatars/avatar1.webp',
  '/static/assets/img/user/scoreboard/avatars/avatar2.webp',
  '/static/assets/img/user/scoreboard/avatars/avatar3.webp',
  '/static/assets/img/user/scoreboard/avatars/avatar4.webp',
];

const DOODLE_OPTIONS = [
  '/static/assets/img/doodles/doodle-1.svg',
  '/static/assets/img/doodles/doodle-2.svg',
  '/static/assets/img/doodles/doodle-3.svg',
  '/static/assets/img/doodles/doodle-4.svg',
];

const STORAGE_KEY_QUIZZES = 'dontblockme_quizzes_clean';

export function getQuizById(id: string): Quiz {
  const targetId = id || 'gautam';
  if (targetId === 'fgpPacQ') {
    return INITIAL_SHWETA_QUIZ;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY_QUIZZES);
    if (raw) {
      const quizzes: Record<string, Quiz> = JSON.parse(raw);
      if (quizzes[targetId]) return quizzes[targetId];
    }
  } catch (e) {
    console.error(e);
  }
  return INITIAL_GAUTAM_QUIZ;
}

export function saveQuiz(quiz: Quiz) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_QUIZZES);
    const quizzes: Record<string, Quiz> = raw ? JSON.parse(raw) : {};
    quizzes[quiz.id] = quiz;
    localStorage.setItem(STORAGE_KEY_QUIZZES, JSON.stringify(quizzes));
  } catch (e) {
    console.error(e);
  }
}

export function addScoreToQuiz(quizId: string, playerName: string, score: number, total: number, answers?: number[]): Quiz {
  const quiz = getQuizById(quizId);
  const avatarIndex = (quiz.scoreboard.length % AVATAR_OPTIONS.length);
  const doodleIndex = (quiz.scoreboard.length % DOODLE_OPTIONS.length);

  const newEntry: ScoreEntry = {
    id: 'score-' + Date.now(),
    name: playerName,
    score,
    total,
    avatar: AVATAR_OPTIONS[avatarIndex],
    doodle: DOODLE_OPTIONS[doodleIndex],
    answers,
    date: 'Just now',
  };

  const updatedList = [...quiz.scoreboard, newEntry].sort((a, b) => b.score - a.score);

  updatedList.forEach((entry, idx) => {
    if (idx === 0) entry.rankBadge = '/static/assets/img/user/scoreboard/ranks/rank1.svg';
    else if (idx === 1) entry.rankBadge = '/static/assets/img/user/scoreboard/ranks/rank2.svg';
    else if (idx === 2) entry.rankBadge = '/static/assets/img/user/scoreboard/ranks/rank3.svg';
    else entry.rankBadge = '/static/assets/img/user/scoreboard/ranks/rankall.svg';
  });

  quiz.scoreboard = updatedList;
  saveQuiz(quiz);
  return quiz;
}
