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

/* ───────────── Main App ───────────── */
export default function App() {
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

  return (
    <div style={{ minHeight: '100vh', background: colors.cream }}>
      <Header onHome={() => setSelectedWeek(null)} />

      <main style={{ maxWidth: 600, margin: '0 auto', padding: '20px 16px' }}>
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
      </main>

      <footer
        style={{
          textAlign: 'center',
          padding: '24px 16px',
          fontFamily: font.sans,
          fontSize: '0.75rem',
          color: colors.gray600,
        }}
      >
        Made with ♥ for homeschool families
      </footer>
    </div>
  );
}
