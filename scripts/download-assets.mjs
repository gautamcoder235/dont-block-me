import fs from 'fs';
import path from 'path';

const ASSETS = [
  // Logos & branding
  'static/assets/img/logo-f.webp',
  'static/assets/img/snap-f.webp',
  
  // Home page assets
  'static/assets/img/player/home/globe.svg',
  'static/assets/img/player/home/character-bubu.webp',
  'static/assets/img/player/home/thought-cloud-3.svg',
  'static/assets/img/player/home/note-card.svg',
  'static/assets/img/player/home/block-phone.webp',
  'static/assets/img/user/scoreboard/bg.webp',
  
  // Playing assets
  'static/assets/img/player/playing/question-bg.svg',
  
  // Scoreboard
  'static/assets/img/user/scoreboard/ranks/rank1.svg',
  'static/assets/img/user/scoreboard/ranks/rank2.svg',
  'static/assets/img/user/scoreboard/ranks/rank3.svg',
  'static/assets/img/user/scoreboard/ranks/rankall.svg',
  'static/assets/img/user/scoreboard/avatars/avatar1.webp',
  'static/assets/img/user/scoreboard/avatars/avatar2.webp',
  'static/assets/img/user/scoreboard/avatars/avatar3.webp',
  'static/assets/img/user/scoreboard/avatars/avatar4.webp',
];

// Doodles 1 through 35
for (let i = 1; i <= 35; i++) {
  ASSETS.push(`static/assets/img/doodles/doodle-${i}.svg`);
}

// Question images
const questions = [
  { id: '9', options: 6 },
  { id: '24', options: 4 },
  { id: '41', options: 12 },
  { id: '11', options: 8 },
  { id: '459', options: 10 },
  { id: '43', options: 8 },
  { id: '457', options: 2 },
  { id: '10', options: 9 },
  { id: '28', options: 2 },
  { id: '34', options: 2 }
];

for (const q of questions) {
  ASSETS.push(`static/assets/img/ques_images/${q.id}/header.webp`);
  for (let opt = 0; opt < q.options; opt++) {
    ASSETS.push(`static/assets/img/ques_images/${q.id}/${opt}.webp`);
  }
}

async function download() {
  const base = 'https://block.youtest.me/';
  console.log(`Starting download of ${ASSETS.length} assets...`);

  let count = 0;
  for (const assetPath of ASSETS) {
    const url = base + assetPath;
    const dest = path.join('public', assetPath);
    const dir = path.dirname(dest);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
      count++;
      continue;
    }

    try {
      const res = await fetch(url);
      if (res.ok) {
        const buffer = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(dest, buffer);
        count++;
        process.stdout.write(`Downloaded (${count}/${ASSETS.length}): ${assetPath}\r`);
      } else {
        console.warn(`\n[${res.status}] Failed to fetch ${url}`);
      }
    } catch (err) {
      console.warn(`\nError fetching ${url}:`, err.message);
    }
  }
  console.log(`\nFinished downloading ${count} assets.`);
}

download();
