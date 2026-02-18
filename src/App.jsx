import { useState, useEffect } from 'react';

/* ───────────── 12-Week Curriculum Data ───────────── */
const curriculum = [
  {
    week: 1,
    title: 'Short Vowel a',
    focus: 'CVC words with short a',
    letters: ['a'],
    words: ['cat', 'bat', 'hat', 'mat', 'sat', 'rat', 'van', 'fan', 'can', 'pan', 'map', 'tap', 'nap', 'cap', 'dad', 'sad', 'had', 'bad'],
    sentences: [
      'The cat sat on the mat.',
      'Dad had a tan van.',
      'The fat rat ran fast.',
      'Sam has a red cap.',
    ],
    activity: 'Word Family Slide — change the first letter of _at words: bat → cat → hat → mat → rat → sat',
  },
  {
    week: 2,
    title: 'Short Vowel i',
    focus: 'CVC words with short i',
    letters: ['i'],
    words: ['sit', 'bit', 'hit', 'fit', 'pit', 'kit', 'dig', 'big', 'pig', 'wig', 'fig', 'pin', 'bin', 'fin', 'win', 'tin', 'lip', 'dip'],
    sentences: [
      'The big pig did a jig.',
      'Kim will sit and sip.',
      'The kid hid in the bin.',
      'Tim can dig in the pit.',
    ],
    activity: 'Sound Swap — start with "sit," change one sound at a time: sit → bit → big → dig → dip',
  },
  {
    week: 3,
    title: 'Short Vowels o & u',
    focus: 'CVC words with short o and u',
    letters: ['o', 'u'],
    words: ['hot', 'pot', 'dot', 'got', 'cot', 'lot', 'mop', 'hop', 'top', 'pop', 'bug', 'rug', 'mug', 'tug', 'hug', 'cup', 'pup', 'bus'],
    sentences: [
      'The dog got on top of the log.',
      'Mom got a hot pot.',
      'The pup dug up a bug.',
      'Gus cut the rug with a tug.',
    ],
    activity: 'Sort It Out — sort word cards into "o" vs "u" piles, then read each pile aloud',
  },
  {
    week: 4,
    title: 'Short Vowel e & Review',
    focus: 'CVC words with short e; review all short vowels',
    letters: ['e'],
    words: ['red', 'bed', 'led', 'fed', 'pet', 'net', 'set', 'wet', 'jet', 'get', 'hen', 'pen', 'ten', 'men', 'den', 'leg', 'beg', 'peg'],
    sentences: [
      'The red hen met ten men.',
      'Ben set the wet net.',
      'Jen fed the pet in the den.',
      'Let the jet get to the bed.',
    ],
    activity: 'Vowel Hunt — read a short paragraph and circle every short-vowel word, then sort by vowel sound',
  },
  {
    week: 5,
    title: 'Consonant Blends (beginning)',
    focus: 'bl, cl, fl, br, cr, dr, gr, tr, st, sp, sn, sl',
    letters: [],
    words: ['flag', 'clap', 'brim', 'trip', 'stop', 'spin', 'snip', 'sled', 'grab', 'drum', 'flat', 'club', 'drop', 'grin', 'step', 'snap'],
    sentences: [
      'Brad claps and grins on the step.',
      'The flag flaps in the breeze.',
      'Fran slid on the sled down the slope.',
      'Stan can stop and spin the drum.',
    ],
    activity: 'Blend Bingo — create a 3×3 grid with blend words; read aloud and mark matches',
  },
  {
    week: 6,
    title: 'Consonant Blends (ending) & Digraphs',
    focus: 'nd, nk, mp, sh, ch, th, wh',
    letters: [],
    words: ['ship', 'shop', 'chin', 'chop', 'this', 'that', 'when', 'whip', 'band', 'hand', 'sink', 'pink', 'lamp', 'bump', 'jump', 'fish'],
    sentences: [
      'The fish swam past the ship.',
      'Chad had a chip and a thin mint.',
      'Beth put her hand on the pink lamp.',
      'When did the chimp jump on that rock?',
    ],
    activity: 'Digraph Detective — find objects around the house that start with sh, ch, th, or wh',
  },
  {
    week: 7,
    title: 'Silent-e (Magic e)',
    focus: 'a_e, i_e, o_e, u_e patterns',
    letters: [],
    words: ['cake', 'lake', 'make', 'bake', 'bike', 'hike', 'like', 'time', 'home', 'bone', 'nose', 'rope', 'cute', 'mule', 'tune', 'huge'],
    sentences: [
      'Jake will bake a cake by the lake.',
      'I like to ride my bike and hike.',
      'Rose drove home with a bone for the dog.',
      'The cute mule played a tune.',
    ],
    activity: 'Magic-e Flip — write CVC words on cards, add an "e" flap; flip it up to see the word change (e.g., "cap" → "cape")',
  },
  {
    week: 8,
    title: 'Long Vowel Teams (ai, ay, ee, ea)',
    focus: 'Vowel teams that say long a and long e',
    letters: [],
    words: ['rain', 'mail', 'tail', 'wait', 'play', 'day', 'say', 'way', 'tree', 'free', 'see', 'bee', 'read', 'bean', 'leaf', 'team'],
    sentences: [
      'The rain may stay all day.',
      'Jay can see a bee in the tree.',
      'She will read by the leaf pile.',
      'The team will wait and play.',
    ],
    activity: 'Team Match-Up — match word cards: pair "ai" words with "ay" words that share the same vowel sound',
  },
  {
    week: 9,
    title: 'Long Vowel Teams (oa, ow, igh, ie, y)',
    focus: 'Vowel teams that say long o and long i',
    letters: [],
    words: ['boat', 'coat', 'goat', 'road', 'show', 'know', 'grow', 'snow', 'night', 'light', 'right', 'high', 'tie', 'pie', 'fly', 'sky'],
    sentences: [
      'The goat in the coat rode the boat down the road.',
      'I know the snow will grow by night.',
      'The bright light shines high in the sky.',
      'My pie will fly right off the tie.',
    ],
    activity: 'Story Illustrator — read each sentence, then draw and label the scene',
  },
  {
    week: 10,
    title: 'R-Controlled Vowels',
    focus: 'ar, or, er, ir, ur',
    letters: [],
    words: ['car', 'star', 'jar', 'farm', 'corn', 'fork', 'sort', 'born', 'her', 'fern', 'bird', 'girl', 'stir', 'turn', 'burn', 'surf'],
    sentences: [
      'The star shines far above the farm.',
      'The girl found a bird near the fern.',
      'Turn the corn on the fork.',
      'Her horse ran north to the barn.',
    ],
    activity: 'R-Controlled Sort — write each word on a card and sort into ar / or / er-ir-ur groups',
  },
  {
    week: 11,
    title: 'Diphthongs & Special Vowels',
    focus: 'oo (moon/book), ou, ow, oi, oy, aw, au',
    letters: [],
    words: ['moon', 'food', 'book', 'look', 'out', 'loud', 'how', 'cow', 'oil', 'coin', 'boy', 'joy', 'saw', 'draw', 'paw', 'crawl'],
    sentences: [
      'The boy found a coin by the brook.',
      'The cow stood out in the moonlight.',
      'Joy saw a hawk draw a crawl in the clouds.',
      'Look at the food in the book.',
    ],
    activity: 'Sound Spotter Walk — go on a walk and find things that contain each vowel sound; keep a tally',
  },
  {
    week: 12,
    title: 'Multi-Syllable Words & Review',
    focus: 'Two-syllable words, compound words, suffixes -ing, -ed, -er, -est',
    letters: [],
    words: ['sunset', 'backpack', 'pigpen', 'bathtub', 'jumping', 'running', 'faster', 'tallest', 'outside', 'inside', 'bedroom', 'cupcake', 'reading', 'sitting', 'biggest', 'hottest'],
    sentences: [
      'The tallest kid is jumping outside at sunset.',
      'She is reading the biggest book inside her bedroom.',
      'Running faster, he grabbed his backpack and cupcake.',
      'The hottest day had us sitting by the bathtub.',
    ],
    activity: 'Syllable Clap — clap each syllable in every word; sort into 1-syllable vs 2-syllable piles, then make up a sentence using at least three 2-syllable words',
  },
];

/* ───────────── Persist progress in localStorage ───────────── */
const STORAGE_KEY = 'littlereader_progress';

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return {};
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch { /* ignore */ }
}

/* ───────────── Inline styles ───────────── */
const colors = {
  cream: '#FAF6F0',
  peach: '#FFE8D6',
  coral: '#FF8A65',
  coralDark: '#E64A19',
  sky: '#81D4FA',
  skyDark: '#0288D1',
  mint: '#A5D6A7',
  mintDark: '#388E3C',
  lilac: '#CE93D8',
  lilacDark: '#7B1FA2',
  warm: '#5D4037',
  warmLight: '#8D6E63',
  white: '#FFFFFF',
  gray100: '#F5F5F5',
  gray300: '#E0E0E0',
  gray600: '#757575',
};

const font = {
  serif: "'Literata', Georgia, serif",
  sans: "'DM Sans', system-ui, sans-serif",
};

/* ───────────── Components ───────────── */

function Header({ onHome }) {
  return (
    <header
      style={{
        background: `linear-gradient(135deg, ${colors.coral} 0%, ${colors.lilac} 100%)`,
        color: colors.white,
        padding: '20px 16px',
        textAlign: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <h1
        onClick={onHome}
        style={{
          fontFamily: font.serif,
          fontSize: '1.6rem',
          fontWeight: 700,
          cursor: 'pointer',
          margin: 0,
          letterSpacing: '-0.02em',
        }}
      >
        📖 Little Reader
      </h1>
      <p style={{ fontFamily: font.sans, fontSize: '0.85rem', opacity: 0.9, marginTop: 4 }}>
        12-Week Homeschool Reading Program
      </p>
    </header>
  );
}

function WeekCard({ week, isComplete, onSelect }) {
  const accentColors = [
    [colors.coral, colors.coralDark],
    [colors.sky, colors.skyDark],
    [colors.mint, colors.mintDark],
    [colors.lilac, colors.lilacDark],
  ];
  const [accent, accentDark] = accentColors[(week.week - 1) % accentColors.length];

  return (
    <button
      onClick={() => onSelect(week.week)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        width: '100%',
        background: colors.white,
        border: `2px solid ${isComplete ? colors.mint : colors.gray300}`,
        borderRadius: 14,
        padding: '16px',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'box-shadow 0.2s, transform 0.15s',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        fontFamily: font.sans,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)';
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: isComplete
            ? `linear-gradient(135deg, ${colors.mint}, ${colors.mintDark})`
            : `linear-gradient(135deg, ${accent}, ${accentDark})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: colors.white,
          fontWeight: 700,
          fontSize: '1.1rem',
          flexShrink: 0,
        }}
      >
        {isComplete ? '✓' : week.week}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: '1rem', color: colors.warm }}>
          Week {week.week}: {week.title}
        </div>
        <div style={{ fontSize: '0.82rem', color: colors.gray600, marginTop: 2 }}>
          {week.focus}
        </div>
      </div>
      <div style={{ color: colors.gray600, fontSize: '1.2rem', flexShrink: 0 }}>›</div>
    </button>
  );
}

function WordChip({ word, isRead, onToggle }) {
  return (
    <button
      onClick={() => onToggle(word)}
      style={{
        display: 'inline-block',
        padding: '8px 16px',
        borderRadius: 20,
        border: 'none',
        background: isRead ? colors.mint : colors.peach,
        color: isRead ? colors.mintDark : colors.warm,
        fontFamily: font.serif,
        fontSize: '1.15rem',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'background 0.2s, transform 0.15s',
        letterSpacing: '0.01em',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      {word}
    </button>
  );
}

function SentenceCard({ sentence, index }) {
  return (
    <div
      style={{
        background: colors.white,
        border: `1px solid ${colors.gray300}`,
        borderRadius: 12,
        padding: '14px 16px',
        fontFamily: font.serif,
        fontSize: '1.1rem',
        lineHeight: 1.7,
        color: colors.warm,
      }}
    >
      <span style={{ color: colors.coral, fontWeight: 600, marginRight: 8 }}>{index + 1}.</span>
      {sentence}
    </div>
  );
}

function Section({ title, emoji, children }) {
  return (
    <section style={{ marginTop: 28 }}>
      <h3
        style={{
          fontFamily: font.sans,
          fontSize: '0.9rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: colors.warmLight,
          marginBottom: 12,
        }}
      >
        {emoji} {title}
      </h3>
      {children}
    </section>
  );
}

function WeekDetail({ week, progress, onBack, onUpdateProgress }) {
  const weekKey = `week_${week.week}`;
  const readWords = progress[weekKey]?.readWords || [];
  const isComplete = progress[weekKey]?.complete || false;

  const toggleWord = (word) => {
    const current = new Set(readWords);
    if (current.has(word)) current.delete(word);
    else current.add(word);
    const newReadWords = [...current];
    onUpdateProgress(weekKey, {
      ...progress[weekKey],
      readWords: newReadWords,
      complete: newReadWords.length === week.words.length,
    });
  };

  const markComplete = () => {
    onUpdateProgress(weekKey, {
      ...progress[weekKey],
      readWords: [...week.words],
      complete: true,
    });
  };

  const pct = week.words.length > 0 ? Math.round((readWords.length / week.words.length) * 100) : 0;

  const accentColors = [
    [colors.coral, colors.coralDark],
    [colors.sky, colors.skyDark],
    [colors.mint, colors.mintDark],
    [colors.lilac, colors.lilacDark],
  ];
  const [accent] = accentColors[(week.week - 1) % accentColors.length];

  return (
    <div style={{ paddingBottom: 40 }}>
      {/* Back bar */}
      <button
        onClick={onBack}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: 'none',
          border: 'none',
          color: colors.coral,
          fontFamily: font.sans,
          fontWeight: 600,
          fontSize: '0.95rem',
          cursor: 'pointer',
          padding: '8px 0',
        }}
      >
        ← All Weeks
      </button>

      {/* Week header */}
      <div style={{ marginTop: 8 }}>
        <h2
          style={{
            fontFamily: font.serif,
            fontSize: '1.5rem',
            fontWeight: 700,
            color: colors.warm,
            margin: 0,
          }}
        >
          Week {week.week}: {week.title}
        </h2>
        <p style={{ fontFamily: font.sans, fontSize: '0.88rem', color: colors.gray600, marginTop: 4 }}>
          {week.focus}
        </p>
      </div>

      {/* Progress bar */}
      <div style={{ marginTop: 16 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: font.sans,
            fontSize: '0.8rem',
            color: colors.gray600,
            marginBottom: 6,
          }}
        >
          <span>Word Progress</span>
          <span>
            {readWords.length}/{week.words.length} words ({pct}%)
          </span>
        </div>
        <div
          style={{
            height: 8,
            borderRadius: 4,
            background: colors.gray300,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${pct}%`,
              borderRadius: 4,
              background: isComplete
                ? `linear-gradient(90deg, ${colors.mint}, ${colors.mintDark})`
                : `linear-gradient(90deg, ${accent}, ${colors.coral})`,
              transition: 'width 0.4s ease',
            }}
          />
        </div>
      </div>

      {/* Words */}
      <Section title="Practice Words" emoji="🔤">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {week.words.map((w) => (
            <WordChip key={w} word={w} isRead={readWords.includes(w)} onToggle={toggleWord} />
          ))}
        </div>
        <p style={{ fontFamily: font.sans, fontSize: '0.78rem', color: colors.gray600, marginTop: 10, fontStyle: 'italic' }}>
          Tap each word as your child reads it aloud
        </p>
      </Section>

      {/* Sentences */}
      <Section title="Practice Sentences" emoji="📝">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {week.sentences.map((s, i) => (
            <SentenceCard key={i} sentence={s} index={i} />
          ))}
        </div>
      </Section>

      {/* Activity */}
      <Section title="Hands-On Activity" emoji="🎲">
        <div
          style={{
            background: `linear-gradient(135deg, ${colors.peach} 0%, ${colors.cream} 100%)`,
            border: `1px solid ${colors.peach}`,
            borderRadius: 12,
            padding: '16px',
            fontFamily: font.serif,
            fontSize: '1rem',
            lineHeight: 1.6,
            color: colors.warm,
          }}
        >
          {week.activity}
        </div>
      </Section>

      {/* Mark complete button */}
      {!isComplete && (
        <button
          onClick={markComplete}
          style={{
            display: 'block',
            width: '100%',
            marginTop: 32,
            padding: '14px',
            borderRadius: 12,
            border: 'none',
            background: `linear-gradient(135deg, ${colors.mint} 0%, ${colors.mintDark} 100%)`,
            color: colors.white,
            fontFamily: font.sans,
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(56,142,60,0.3)',
          }}
        >
          ✓ Mark Week as Complete
        </button>
      )}
      {isComplete && (
        <div
          style={{
            textAlign: 'center',
            marginTop: 32,
            padding: '14px',
            borderRadius: 12,
            background: colors.gray100,
            fontFamily: font.sans,
            fontWeight: 600,
            color: colors.mintDark,
          }}
        >
          🎉 Week Complete!
        </div>
      )}
    </div>
  );
}

/* ───────────── Teaching Methods Data ───────────── */
const teachingMethods = [
  {
    title: 'Systematic Phonics',
    emoji: '🔤',
    color: colors.coral,
    description:
      'Teach letter-sound relationships in a planned, sequential order. Start with the most common sounds and progress to less common ones.',
    steps: [
      'Introduce one new sound per session — say the sound, show the letter, give a keyword (e.g., "a — apple — /a/")',
      'Have your child trace the letter while saying the sound aloud',
      'Practice blending: model how to push sounds together ("c-a-t → cat")',
      'Use decodable words that only contain sounds already taught',
    ],
    tip: 'Keep phonics lessons to 10–15 minutes. Short, daily practice beats long, infrequent sessions.',
  },
  {
    title: 'Multi-Sensory Learning',
    emoji: '🖐️',
    color: colors.sky,
    description:
      'Engage sight, sound, and touch simultaneously. Children learn letter patterns more deeply when multiple senses are involved.',
    steps: [
      'Sky-writing: trace letters in the air with a pointed finger while saying the sound',
      'Sand or salt tray: write letters in a shallow tray of sand while saying the word',
      'Letter tiles or magnets: physically build words by snapping sounds together',
      'Playdough letters: roll and shape letters, then blend them into words',
    ],
    tip: 'Let your child choose which sensory activity they prefer — ownership increases engagement.',
  },
  {
    title: 'Guided Oral Reading',
    emoji: '📖',
    color: colors.mint,
    description:
      'Read aloud together with your child. You provide a model of fluent reading; they practice with your support right beside them.',
    steps: [
      'Echo reading: you read a sentence, then your child reads the same sentence back',
      'Choral reading: read the sentence together at the same time',
      'Partner reading: take turns — you read one sentence, they read the next',
      'Gradually release: as confidence grows, let your child read more independently',
    ],
    tip: 'When your child gets stuck on a word, wait 3–5 seconds before helping. Let them try their decoding skills first.',
  },
  {
    title: 'Word Families & Patterns',
    emoji: '🏠',
    color: colors.lilac,
    description:
      'Group words that share the same ending pattern (rime). Once a child can read "cat," they can quickly decode bat, hat, mat, sat, and rat.',
    steps: [
      'Start with a known word (e.g., "cat") and write it on a card',
      'Change only the first letter to make new words: bat, hat, mat, sat',
      'Have your child read the whole family, noticing what stays the same',
      'Mix word families together and have your child sort them back into groups',
    ],
    tip: 'The 37 most common word families (like -at, -in, -op) can generate over 500 words your child can read.',
  },
  {
    title: 'Sight Word Practice',
    emoji: '👀',
    color: colors.coralDark,
    description:
      'Some high-frequency words don\'t follow regular phonics rules (e.g., "the," "was," "said"). These need to be memorized by sight through repeated exposure.',
    steps: [
      'Introduce 2–3 new sight words per week — no more',
      'Use flashcards: show the word, say it, use it in a sentence',
      'Word hunt: find the sight word in books, signs, or labels around the house',
      'Write it, build it: write the word in a sentence, then build it with letter tiles',
    ],
    tip: 'The Dolch or Fry word lists cover the most common sight words. Start with the pre-primer list.',
  },
  {
    title: 'Comprehension Conversations',
    emoji: '💬',
    color: colors.skyDark,
    description:
      'Reading isn\'t just decoding — it\'s understanding. Even at the earliest stages, talk about what your child reads to build meaning-making habits.',
    steps: [
      'Before reading: look at the title or picture and predict what will happen',
      'During reading: pause and ask "What just happened?" or "What do you think comes next?"',
      'After reading: ask your child to retell the story in their own words',
      'Connect to life: "Has something like this ever happened to you?"',
    ],
    tip: 'Avoid yes/no questions. Open-ended questions build deeper thinking skills.',
  },
];

const dailyRoutine = [
  { time: '5 min', activity: 'Phonics warm-up', detail: 'Review yesterday\'s sounds, introduce today\'s new sound', color: colors.coral },
  { time: '5 min', activity: 'Word practice', detail: 'Read through this week\'s word list (tap words in the Curriculum tab)', color: colors.sky },
  { time: '5 min', activity: 'Sentence reading', detail: 'Read the practice sentences together using guided oral reading', color: colors.mint },
  { time: '5 min', activity: 'Hands-on activity', detail: 'Do the weekly activity or a multi-sensory exercise', color: colors.lilac },
  { time: '10 min', activity: 'Free reading', detail: 'Read a favorite book together — let your child choose', color: colors.coral },
];

/* ───────────── Resources Data ───────────── */
const resources = {
  decodableBooks: [
    {
      title: 'Bob Books Set 1: Beginning Readers',
      description: 'Simple CVC words with just a few sounds per book. Perfect companion for Weeks 1–4.',
      level: 'Beginner',
    },
    {
      title: 'Primary Phonics by Barbara Makar',
      description: 'Progressive storybooks aligned to phonics scope and sequence. Great for Weeks 1–8.',
      level: 'Beginner',
    },
    {
      title: 'Flyleaf Publishing Decodable Books',
      description: 'Engaging stories that stay strictly decodable. Good for Weeks 3–10.',
      level: 'Intermediate',
    },
    {
      title: 'High Noon Decodable Chapter Books',
      description: 'Longer chapter-style decodable books for kids ready to read more. Weeks 8–12.',
      level: 'Advanced',
    },
  ],
  readAloudBooks: [
    {
      title: 'The Read-Aloud Handbook by Jim Trelease',
      description: 'The essential guide to why reading aloud matters and how to do it well.',
    },
    {
      title: 'Chicka Chicka Boom Boom by Bill Martin Jr.',
      description: 'A rhythmic alphabet book that makes letter learning feel like a party.',
    },
    {
      title: 'Green Eggs and Ham by Dr. Seuss',
      description: 'Only 50 unique words — repetition builds sight word recognition naturally.',
    },
    {
      title: 'Frog and Toad Are Friends by Arnold Lobel',
      description: 'Simple, warm stories perfect for early readers transitioning to chapter books.',
    },
    {
      title: 'Owl at Home by Arnold Lobel',
      description: 'Five gentle chapters with predictable vocabulary — great for building stamina.',
    },
  ],
  printableActivities: [
    {
      title: 'Letter Sound Cards',
      description: 'Print one card per sound. Front: letter. Back: keyword picture and sound. Use for daily drill.',
      forWeeks: 'Weeks 1–4',
    },
    {
      title: 'Word Family Wheels',
      description: 'A spinner wheel with the rime in the center and onsets around the edge. Spin and read.',
      forWeeks: 'Weeks 1–6',
    },
    {
      title: 'Blend & Digraph Chart',
      description: 'A reference poster with all consonant blends and digraphs. Hang it at reading level.',
      forWeeks: 'Weeks 5–6',
    },
    {
      title: 'Magic-e Flip Cards',
      description: 'CVC word cards with a folding "e" flap. Flip it up to see the word transform (e.g., "cap" → "cape").',
      forWeeks: 'Week 7',
    },
    {
      title: 'Vowel Team Sorting Mats',
      description: 'Print a mat for each vowel team. Sort word cards onto the correct mat.',
      forWeeks: 'Weeks 8–9',
    },
    {
      title: 'Syllable Clap Cards',
      description: 'Multi-syllable word cards. Clap each syllable, then draw lines to divide the word.',
      forWeeks: 'Week 12',
    },
  ],
  assessmentTips: [
    {
      title: 'Weekly Word Check',
      description: 'At the end of each week, show the word list in random order. Note which words are read fluently vs. slowly decoded vs. missed. Re-teach missed words next week.',
    },
    {
      title: 'Running Record',
      description: 'As your child reads a passage, mark each word: ✓ for correct, record substitutions, note self-corrections. Aim for 95%+ accuracy before moving on.',
    },
    {
      title: 'Fluency Timing',
      description: 'Starting around Week 6, time your child reading a passage for one minute. Count correct words per minute (CWPM). Track growth over time — progress matters more than the number.',
    },
    {
      title: 'Comprehension Retell',
      description: 'After reading, ask your child to retell what happened. Look for: characters, setting, problem, events, and solution. A strong retell means real understanding.',
    },
  ],
  parentTips: [
    'Read to your child every day — even after they can read on their own. This builds vocabulary and a love of stories.',
    'Never force reading when your child is frustrated. Take a break, do something fun, and come back later.',
    'Celebrate effort, not just accuracy. "You worked so hard sounding that out!" beats "You got it right!"',
    'Let your child see you reading. Kids model what they see at home.',
    'Re-reading favorite books is valuable — repetition builds fluency and confidence.',
    'If your child is struggling with a concept for more than a week, slow down. There is no race.',
    'Make reading part of daily life: read menus, street signs, grocery lists, and recipe steps together.',
  ],
};

/* ───────────── Tab Components ───────────── */

function TabBar({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'curriculum', label: 'Curriculum', emoji: '📚' },
    { id: 'methods', label: 'Methods', emoji: '🎓' },
    { id: 'resources', label: 'Resources', emoji: '📦' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: colors.white,
        borderTop: `1px solid ${colors.gray300}`,
        display: 'flex',
        justifyContent: 'space-around',
        padding: '6px 0 env(safe-area-inset-bottom, 8px)',
        zIndex: 20,
        boxShadow: '0 -2px 8px rgba(0,0,0,0.06)',
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              padding: '8px 4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: isActive ? colors.coral : colors.gray600,
              fontFamily: font.sans,
              fontSize: '0.7rem',
              fontWeight: isActive ? 700 : 500,
              transition: 'color 0.2s',
            }}
          >
            <span style={{ fontSize: '1.3rem' }}>{tab.emoji}</span>
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}

function MethodCard({ method }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background: colors.white,
        border: `1px solid ${colors.gray300}`,
        borderRadius: 14,
        overflow: 'hidden',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '16px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          fontFamily: font.sans,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: `${method.color}20`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            flexShrink: 0,
          }}
        >
          {method.emoji}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 600, fontSize: '1rem', color: colors.warm }}>
            {method.title}
          </div>
          <div style={{ fontSize: '0.82rem', color: colors.gray600, marginTop: 2 }}>
            {method.description.slice(0, 80)}...
          </div>
        </div>
        <div
          style={{
            color: colors.gray600,
            fontSize: '1.2rem',
            flexShrink: 0,
            transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
          }}
        >
          ›
        </div>
      </button>

      {expanded && (
        <div style={{ padding: '0 16px 16px', borderTop: `1px solid ${colors.gray100}` }}>
          <p
            style={{
              fontFamily: font.serif,
              fontSize: '0.95rem',
              lineHeight: 1.6,
              color: colors.warm,
              margin: '14px 0',
            }}
          >
            {method.description}
          </p>

          <div
            style={{
              fontFamily: font.sans,
              fontSize: '0.8rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: colors.warmLight,
              marginBottom: 8,
            }}
          >
            How To Do It
          </div>
          <ol style={{ margin: 0, paddingLeft: 20 }}>
            {method.steps.map((step, i) => (
              <li
                key={i}
                style={{
                  fontFamily: font.serif,
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  color: colors.warm,
                  marginBottom: 8,
                }}
              >
                {step}
              </li>
            ))}
          </ol>

          <div
            style={{
              marginTop: 12,
              padding: '12px 14px',
              background: `${method.color}12`,
              borderRadius: 10,
              borderLeft: `3px solid ${method.color}`,
              fontFamily: font.sans,
              fontSize: '0.85rem',
              lineHeight: 1.5,
              color: colors.warm,
            }}
          >
            <strong>Tip:</strong> {method.tip}
          </div>
        </div>
      )}
    </div>
  );
}

function TeachingMethodsTab() {
  return (
    <div style={{ paddingBottom: 40 }}>
      <h2
        style={{
          fontFamily: font.serif,
          fontSize: '1.4rem',
          fontWeight: 700,
          color: colors.warm,
          margin: '0 0 6px',
        }}
      >
        Teaching Methods
      </h2>
      <p style={{ fontFamily: font.sans, fontSize: '0.88rem', color: colors.gray600, marginBottom: 24 }}>
        Research-backed approaches to help your child learn to read
      </p>

      {/* Methods list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
        {teachingMethods.map((m) => (
          <MethodCard key={m.title} method={m} />
        ))}
      </div>

      {/* Daily routine */}
      <Section title="Suggested Daily Routine" emoji="🕐">
        <p style={{ fontFamily: font.sans, fontSize: '0.85rem', color: colors.gray600, marginBottom: 14 }}>
          A simple 30-minute daily reading block
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {dailyRoutine.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: 12,
                alignItems: 'flex-start',
                background: colors.white,
                border: `1px solid ${colors.gray300}`,
                borderRadius: 12,
                padding: '14px',
              }}
            >
              <div
                style={{
                  background: `${item.color}20`,
                  color: item.color,
                  fontFamily: font.sans,
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  padding: '4px 10px',
                  borderRadius: 8,
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                {item.time}
              </div>
              <div>
                <div style={{ fontFamily: font.sans, fontWeight: 600, fontSize: '0.92rem', color: colors.warm }}>
                  {item.activity}
                </div>
                <div style={{ fontFamily: font.sans, fontSize: '0.82rem', color: colors.gray600, marginTop: 2 }}>
                  {item.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function ResourcesTab() {
  return (
    <div style={{ paddingBottom: 40 }}>
      <h2
        style={{
          fontFamily: font.serif,
          fontSize: '1.4rem',
          fontWeight: 700,
          color: colors.warm,
          margin: '0 0 6px',
        }}
      >
        Resources
      </h2>
      <p style={{ fontFamily: font.sans, fontSize: '0.88rem', color: colors.gray600, marginBottom: 24 }}>
        Books, activities, and tips to support your reading journey
      </p>

      {/* Decodable Books */}
      <Section title="Decodable Book Series" emoji="📕">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {resources.decodableBooks.map((book) => (
            <div
              key={book.title}
              style={{
                background: colors.white,
                border: `1px solid ${colors.gray300}`,
                borderRadius: 12,
                padding: '14px 16px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                <div style={{ fontFamily: font.sans, fontWeight: 600, fontSize: '0.95rem', color: colors.warm }}>
                  {book.title}
                </div>
                <span
                  style={{
                    fontFamily: font.sans,
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    padding: '2px 8px',
                    borderRadius: 6,
                    background:
                      book.level === 'Beginner' ? `${colors.mint}30` :
                      book.level === 'Intermediate' ? `${colors.sky}30` : `${colors.lilac}30`,
                    color:
                      book.level === 'Beginner' ? colors.mintDark :
                      book.level === 'Intermediate' ? colors.skyDark : colors.lilacDark,
                    flexShrink: 0,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {book.level}
                </span>
              </div>
              <div style={{ fontFamily: font.sans, fontSize: '0.82rem', color: colors.gray600, marginTop: 4 }}>
                {book.description}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Read-Aloud Favorites */}
      <Section title="Read-Aloud Favorites" emoji="📗">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {resources.readAloudBooks.map((book) => (
            <div
              key={book.title}
              style={{
                background: colors.white,
                border: `1px solid ${colors.gray300}`,
                borderRadius: 12,
                padding: '14px 16px',
              }}
            >
              <div style={{ fontFamily: font.sans, fontWeight: 600, fontSize: '0.95rem', color: colors.warm }}>
                {book.title}
              </div>
              <div style={{ fontFamily: font.sans, fontSize: '0.82rem', color: colors.gray600, marginTop: 4 }}>
                {book.description}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Printable Activities */}
      <Section title="Printable Activities" emoji="🖨️">
        <p style={{ fontFamily: font.sans, fontSize: '0.82rem', color: colors.gray600, marginBottom: 12, fontStyle: 'italic' }}>
          DIY activities you can make at home with index cards, paper, and markers
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {resources.printableActivities.map((item) => (
            <div
              key={item.title}
              style={{
                background: colors.white,
                border: `1px solid ${colors.gray300}`,
                borderRadius: 12,
                padding: '14px 16px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                <div style={{ fontFamily: font.sans, fontWeight: 600, fontSize: '0.95rem', color: colors.warm }}>
                  {item.title}
                </div>
                <span
                  style={{
                    fontFamily: font.sans,
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    padding: '2px 8px',
                    borderRadius: 6,
                    background: `${colors.peach}`,
                    color: colors.coralDark,
                    flexShrink: 0,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.forWeeks}
                </span>
              </div>
              <div style={{ fontFamily: font.sans, fontSize: '0.82rem', color: colors.gray600, marginTop: 4 }}>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Assessment Tips */}
      <Section title="Tracking Progress" emoji="📊">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {resources.assessmentTips.map((tip) => (
            <div
              key={tip.title}
              style={{
                background: colors.white,
                border: `1px solid ${colors.gray300}`,
                borderRadius: 12,
                padding: '14px 16px',
              }}
            >
              <div style={{ fontFamily: font.sans, fontWeight: 600, fontSize: '0.95rem', color: colors.warm }}>
                {tip.title}
              </div>
              <div style={{ fontFamily: font.sans, fontSize: '0.82rem', color: colors.gray600, marginTop: 4, lineHeight: 1.5 }}>
                {tip.description}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Parent Tips */}
      <Section title="Tips for Parents" emoji="💡">
        <div
          style={{
            background: `linear-gradient(135deg, ${colors.peach} 0%, ${colors.cream} 100%)`,
            border: `1px solid ${colors.peach}`,
            borderRadius: 12,
            padding: '16px',
          }}
        >
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {resources.parentTips.map((tip, i) => (
              <li
                key={i}
                style={{
                  fontFamily: font.serif,
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  color: colors.warm,
                  marginBottom: i < resources.parentTips.length - 1 ? 10 : 0,
                }}
              >
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}

/* ───────────── Main App ───────────── */
export default function App() {
  const [activeTab, setActiveTab] = useState('curriculum');
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [progress, setProgress] = useState(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const updateProgress = (weekKey, data) => {
    setProgress((prev) => ({ ...prev, [weekKey]: data }));
  };

  const completedCount = curriculum.filter(
    (w) => progress[`week_${w.week}`]?.complete
  ).length;

  const week = selectedWeek ? curriculum.find((w) => w.week === selectedWeek) : null;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedWeek(null);
  };

  return (
    <div style={{ minHeight: '100vh', background: colors.cream }}>
      <Header onHome={() => { setActiveTab('curriculum'); setSelectedWeek(null); }} />

      <main style={{ maxWidth: 600, margin: '0 auto', padding: '20px 16px 80px' }}>
        {activeTab === 'curriculum' && (
          <>
            {!week ? (
              <>
                {/* Dashboard */}
                <div
                  style={{
                    background: colors.white,
                    borderRadius: 14,
                    padding: '20px',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                    marginBottom: 24,
                  }}
                >
                  <div
                    style={{
                      fontFamily: font.sans,
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      color: colors.gray600,
                      marginBottom: 8,
                    }}
                  >
                    Overall Progress
                  </div>
                  <div
                    style={{
                      fontFamily: font.serif,
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: colors.warm,
                    }}
                  >
                    {completedCount}{' '}
                    <span style={{ fontSize: '1rem', fontWeight: 400, color: colors.gray600 }}>
                      / 12 weeks
                    </span>
                  </div>
                  <div
                    style={{
                      height: 8,
                      borderRadius: 4,
                      background: colors.gray300,
                      overflow: 'hidden',
                      marginTop: 12,
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${Math.round((completedCount / 12) * 100)}%`,
                        borderRadius: 4,
                        background: `linear-gradient(90deg, ${colors.coral}, ${colors.lilac})`,
                        transition: 'width 0.4s ease',
                      }}
                    />
                  </div>
                </div>

                {/* Week list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {curriculum.map((w) => (
                    <WeekCard
                      key={w.week}
                      week={w}
                      isComplete={progress[`week_${w.week}`]?.complete || false}
                      onSelect={setSelectedWeek}
                    />
                  ))}
                </div>
              </>
            ) : (
              <WeekDetail
                week={week}
                progress={progress}
                onBack={() => setSelectedWeek(null)}
                onUpdateProgress={updateProgress}
              />
            )}
          </>
        )}

        {activeTab === 'methods' && <TeachingMethodsTab />}
        {activeTab === 'resources' && <ResourcesTab />}
      </main>

      <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}
