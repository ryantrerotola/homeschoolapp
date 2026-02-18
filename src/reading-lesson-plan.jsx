import { useState } from "react";

const WEEKS = [
  {
    week: 1,
    title: "Letter Sounds: S, A, T, P",
    focus: "Introducing the first four letter sounds using synthetic phonics. These letters were chosen because they combine to form simple CVC (consonant-vowel-consonant) words early.",
    days: [
      {
        day: "Monday",
        theme: "Introduce /s/ and /a/",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet the Sound /s/",
            materials: "Paper, pen, a picture book with S words (e.g., 'Silly Sally' by Audrey Wood or any book with prominent S words)",
            steps: [
              "Sit with your child and say: 'Today we're going to learn a special sound. Listen: /ssssss/. It sounds like a snake!' Make the sound together 5 times, stretching it out.",
              "Write a large lowercase 's' on a piece of paper. Trace it with your finger while making the /s/ sound. Have your child trace it 3 times while saying /ssssss/ each time.",
              "Say these words slowly, emphasizing the /s/: sun, sit, sock, sand, soup. Ask: 'What sound do you hear at the very beginning?' Wait for them to say /s/.",
              "Open any picture book and go through 3-4 pages. Each time your child spots something that starts with /s/, they make the snake sound. Examples: sky, street, shoes, shirt, smile.",
              "On a fresh piece of paper, write 's' five times in large letters. Have your child circle each one while saying the sound. Then have them try writing 's' three times themselves — focus on the motion, not perfection."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Meet the Sound /a/ (short a, as in 'cat')",
            materials: "Paper, pen",
            steps: [
              "Say: 'Now let's learn another sound: /a/ — open your mouth wide like you're at the dentist! /aaaa/!' Practice together 5 times.",
              "Write a large lowercase 'a' on paper. Trace it while saying /a/. Child traces 3 times saying the sound.",
              "Play 'Do You Hear It?': Say these words one at a time — apple, ant, astronaut, dog, alligator, basket. After each word, child puts thumbs up if it starts with /a/, thumbs down if it doesn't.",
              "Write both 's' and 'a' on paper. Point to each randomly (10 times total) and child says the sound. If they hesitate, give the sound and have them repeat."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Introduce /t/ and /p/, Review /s/ and /a/",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Review /s/ and /a/",
            materials: "Yesterday's letter papers, pen",
            steps: [
              "Flash the 's' paper: 'What sound does this make?' Then 'a'. Alternate 5 times each.",
              "Say 5 words (sat, apple, sun, ant, sock) and have child tell you the first sound they hear.",
              "Child writes 's' and 'a' each twice from memory. Praise effort over accuracy."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet /t/ and /p/",
            materials: "Paper, pen",
            steps: [
              "Say: '/t/ is a quick, sharp sound — like a tiny tap! /t/ /t/ /t/!' (Do NOT say 'tuh' — keep it crisp with no vowel added.) Practice 5 times.",
              "Write lowercase 't'. Trace while saying /t/. Child traces 3 times.",
              "Say: '/p/ is a popping sound! Feel the little puff of air on your hand: /p/ /p/ /p/!' Hold your hand in front of your mouth so child can feel the air. Practice 5 times.",
              "Write lowercase 'p'. Trace while saying /p/. Child traces 3 times.",
              "Write all four letters (s, a, t, p) in a row. Point to each in random order — child says the sound. Do 3 full rounds (12 sounds total). Note which ones need more practice."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Blending Sounds into Words",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Oral Blending (No Letters Yet)",
            materials: "None",
            steps: [
              "Say: 'I'm going to say a word in slow motion, and you tell me what word I'm saying!' This is called oral blending — the child's job is to push the sounds together.",
              "Say '/s/... /a/... /t/' (pause 1 second between each sound). Encourage child to say it faster and faster until they hear 'sat'. Celebrate!",
              "Repeat with: /t/-/a/-/p/ (tap), /p/-/a/-/t/ (pat), /a/-/t/ (at), /s/-/a/-/p/ (sap).",
              "If child struggles, say the sounds faster yourself first, then slower. This is HARD at first — be patient and make it playful. 'You're a word detective!'"
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Blending with Letters",
            materials: "Paper, pen, scissors (to cut out letter cards)",
            steps: [
              "Cut or tear paper into 8 small cards (roughly playing-card size). Write one letter per card: make 2 of each letter (s, a, t, p) so you have: s, s, a, a, t, t, p, p.",
              "Lay out the cards: s, a, t. Point to each and say the sound, then blend: '/s/... /a/... /t/... sat!' Run your finger under the letters left to right as you blend.",
              "Now child tries. Help them point to each letter, say the sound, then push the sounds together. If they struggle, say it with them.",
              "Build these words together with the cards: sat, tap, pat, at, sap. For each word, child points and blends.",
              "Let child 'build' a word: say 'tap' and see if they can find the right letter cards and put them in order. Give hints as needed — 'What's the first sound in /t/-/a/-/p/?'"
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Segmenting and Multisensory Practice",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Segmenting (Breaking Words Apart)",
            materials: "3 small objects (coins, buttons, blocks — anything small)",
            steps: [
              "Say: 'Yesterday we pushed sounds together. Today we're going to pull words apart!' This is the opposite skill — segmenting.",
              "Place 3 small objects in a row in front of child. Say 'sat.' Then model: touch the first object and say /s/, touch the second and say /a/, touch the third and say /t/.",
              "Now child's turn. Say 'tap.' Child touches each object while saying each sound: /t/ /a/ /p/. Repeat with: pat, sat, sap, at (use only 2 objects for 'at').",
              "If child can do this easily, try it WITHOUT the objects — just holding up a finger for each sound. This is a big leap, so only push here if they're ready."
            ]
          },
          {
            method: "Multisensory / Kinesthetic",
            duration: "10 min",
            title: "Sky Writing and Arm Tapping",
            materials: "None",
            steps: [
              "Stand up together. Say: 'Let's write our letters BIG in the sky!' Using your whole arm (not just fingers), trace a giant 's' in the air while saying /s/. Child copies. Do each letter (s, a, t, p) twice.",
              "Arm Tapping: Say the word 'sat.' Touch your shoulder and say /s/, touch your elbow and say /a/, touch your wrist and say /t/. Then slide your hand down your whole arm and say 'sat!' Child mirrors you.",
              "Repeat arm tapping with: tap, pat, sap. This connects the physical motion to the sounds and helps kinesthetic learners lock in the blending skill."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Interactive Story Time",
            materials: "Any picture book your child enjoys",
            steps: [
              "Read a picture book together, but pause 3-4 times to interact using the PEER method (Prompt, Evaluate, Expand, Repeat).",
              "Page 1-2: Point to a picture and ask an open-ended question: 'What do you think is happening here?' (Prompt). Acknowledge their answer: 'Yes! The cat is climbing.' (Evaluate). Add detail: 'The cat is climbing the big oak tree because it saw a bird.' (Expand). Ask them to repeat: 'Can you say that? The cat is climbing the tree.' (Repeat).",
              "Page 3-4: Point to a word that starts with s, a, t, or p if you can find one. 'Look! This word is sun. What sound does sun start with?' Connect to what they learned this week.",
              "Near the end: Ask a prediction question: 'What do you think will happen next?' There are no wrong answers — this builds comprehension and engagement.",
              "After the book: Ask 'What was your favorite part?' and 'Can you tell me what happened in the story?' Retelling builds narrative comprehension."
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "Review, Practice, and Fun Application",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Speed Sound Review",
            materials: "Letter cards from Wednesday",
            steps: [
              "Spread all letter cards (s, a, t, p) face up. Point to each — child says the sound. Time them (casually, not stressfully): 'Let's see how fast you can go!' Do 3 rounds.",
              "Dictation: Say 'sat.' Child writes it on paper (or arranges letter cards). Repeat with: tap, pat, at. Help as needed — the goal is practice, not perfection.",
              "Say 3-4 words and child tells you if they start with /s/, /t/, /a/, or /p/: penguin (/p/), tiger (/t/), ant (/a/), sandwich (/s/), table (/t/), apple (/a/)."
            ]
          },
          {
            method: "Sight Words / Whole Language",
            duration: "10 min",
            title: "First Two Sight Words: 'the' and 'I'",
            materials: "Paper, pen, index cards (or cut paper)",
            steps: [
              "Say: 'Some words are tricky — we can't sound them out easily, so we learn them by sight, like recognizing a friend's face!' These are called sight words or heart words.",
              "Write 'the' on a card in large, clear lowercase letters. Say: 'This word is THE. T-H-E spells THE.' Point to it and have child say 'the' 3 times.",
              "Write 'I' on a card. Say: 'This word is I — just one letter! When you talk about yourself, you write I.' Have child say it 3 times.",
              "Hold up each card randomly (alternating, 8-10 times) — child says the word. Stick these cards on the fridge or a wall where child will see them daily.",
              "Simple sentence reading: Write on paper 'I sat.' Point to each word and read it together. Then write 'I tap.' Read together. Child is reading their first sentences!"
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "10 min",
            title: "Our First Story",
            materials: "Paper, pen or markers",
            steps: [
              "Say: 'Let's make up a story together and I'll write it down!' Ask: 'What should our story be about?' Accept whatever they say.",
              "As they dictate (even if it's just one or two sentences), write their exact words in large, clear print. Example: 'I see a big cat. The cat sat.'",
              "Read the story back together, pointing to each word. When you hit 'the' or 'I' or any word with s/a/t/p, pause and let them try to read it.",
              "Have child illustrate their story with a drawing. Hang it on the wall — they wrote their first book! This shows them that reading and writing are connected to THEIR thoughts and ideas."
            ]
          }
        ]
      }
    ]
  },
  {
    week: 2,
    title: "Letter Sounds: I, N, M, D",
    focus: "Adding four new sounds that combine with Week 1 letters to unlock many more CVC words. Continuing to build blending and segmenting fluency.",
    days: [
      {
        day: "Monday",
        theme: "Introduce /i/ (short i) and /n/",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Quick Review of S, A, T, P",
            materials: "Letter cards from Week 1",
            steps: [
              "Flash each letter card — child says the sound. Aim for instant recall (under 2 seconds per sound).",
              "Oral blending review: say /s/-/a/-/t/, /p/-/a/-/t/, /t/-/a/-/p/ — child blends each into a word.",
              "If any sounds are shaky, spend an extra minute on those before moving on."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet /i/ and /n/",
            materials: "Paper, pen, new letter cards",
            steps: [
              "Say: '/i/ (short i, like in 'it') — say /i/ like something is icky! Make a face!' Practice 5 times with the 'icky' face.",
              "Write lowercase 'i' (with the dot). Trace while saying /i/. Child traces 3 times. Make two 'i' letter cards.",
              "Say: '/n/ — hum with your mouth closed: nnnnn, then open: /n/! Feel your nose vibrate when you say /n/.' Practice 5 times. Child puts fingers on their nose to feel the vibration.",
              "Write lowercase 'n'. Trace while saying /n/. Child traces 3 times. Make two 'n' letter cards.",
              "Mix all 6 letter cards (s, a, t, p, i, n). Flash randomly — child says each sound. Do 2 full rounds."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "New Words with /i/ and /n/",
            materials: "Letter cards (all 6 letters)",
            steps: [
              "Build these words with letter cards, blending each one together: sit, pin, tin, nap, nip, tip, tan, pan, pit, in, an, it, is (note: tell child that 's' in 'is' makes a /z/ sound — this is a good early exception to learn).",
              "For each word: lay out the cards, child points and says each sound, then blends. Read at least 8 of these words.",
              "Let child build 2-3 words on their own: say the word, they find the letter cards and arrange them. Guide as needed."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Introduce /m/ and /d/",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet /m/ and /d/",
            materials: "Paper, pen, new letter cards",
            steps: [
              "Say: '/m/ — close your lips and hum: mmmm! Like you're eating something yummy — mmmmm!' Practice 5 times. Child touches lips to feel them vibrating.",
              "Write lowercase 'm'. Note it has two 'humps' — trace while saying /m/. Child traces 3 times. Make two 'm' letter cards.",
              "Say: '/d/ — feel your tongue tap the roof of your mouth right behind your teeth: /d/ /d/ /d/! It's like /t/'s louder cousin.' Practice 5 times.",
              "Write lowercase 'd'. Trace while saying /d/. Point out: 'd' has a tall line on the RIGHT side (versus 'b' which has it on the left — but don't introduce 'b' yet, just plant the seed).",
              "Flash all 8 letter cards randomly. Child says each sound. Note any that need extra practice."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Expanded Word Building",
            materials: "All letter cards (s, a, t, p, i, n, m, d)",
            steps: [
              "Build and blend these new words: man, mad, dam, dim, mid, map, mat, mist (4-letter word — stretch it!), and, mind, dip, din, sand (another 4-letter one!).",
              "For 4-letter words: model blending by breaking into two parts first if needed. For 'mist': '/m/-/i/' makes 'mi', then '/s/-/t/' makes 'st', then push together: 'mist.'",
              "Sentence reading: write 'I am sad.' on paper. Child reads each word. 'I' is a sight word. 'am' can be blended. 'sad' can be blended. They just read a whole sentence!",
              "Write one more: 'A man sat.' Read together."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Segmenting Practice and Writing",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Segmenting Drill",
            materials: "Small objects (3-4 buttons, coins, or blocks)",
            steps: [
              "Say a word. Child pushes one object forward for each sound they hear. Words to use: map (3), sand (4), it (2), stamp (5 — this is a reach!), dim (3), nap (3), tip (3), mist (4).",
              "After pushing objects, child says the whole word. If they get the count wrong, say the word slowly together and recount.",
              "Challenge round: you push the objects and say the sounds — but make one wrong. Child has to catch your 'mistake.' Example: for 'pin' you say /p/ /a/ /n/ — child corrects you: 'No, it's /p/ /i/ /n/!' Kids love catching adults making mistakes."
            ]
          },
          {
            method: "Multisensory / Kinesthetic",
            duration: "10 min",
            title: "Sand / Salt Tray Writing",
            materials: "A baking tray or plate with a thin layer of salt, sand, or even flour spread on it",
            steps: [
              "Spread a thin, even layer of salt (or sand or flour) on a tray or plate. Child uses their index finger to write letters in the salt while saying the sound.",
              "Call out sounds randomly — child writes the letter. Shake the tray to 'erase' and go again. Do all 8 letters at least once.",
              "Call out a word (e.g., 'map'). Child writes the whole word in the salt, saying each sound as they write each letter. Try 4-5 words: map, sit, nap, dim, tan.",
              "This engages touch and sight together, which strengthens letter-sound memory significantly for kinesthetic learners."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Story Time with Sound Spotting",
            materials: "Any picture book",
            steps: [
              "Read a picture book, but this time give child a 'mission' before you start: 'Every time you hear a word that starts with /m/, clap your hands!'",
              "Read normally but slightly emphasize any /m/ words. Pause briefly after each one to give child time to clap. Celebrate each catch.",
              "At the halfway point, switch the target sound to /d/ — now they clap for /d/ words.",
              "After reading, ask 3 comprehension questions: 'Who was in the story?', 'What happened?', 'How did it end?' These build narrative recall."
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "New Sight Words and Sentence Building",
        lessons: [
          {
            method: "Sight Words",
            duration: "10 min",
            title: "New Sight Words: 'is', 'a', 'it'",
            materials: "Index cards or cut paper",
            steps: [
              "Review 'the' and 'I' from last week — flash the cards. Child reads each.",
              "Introduce 'is' — write on a card. 'This word is IS. I-S spells IS.' Note: 'a' as a sight word is different from the /a/ sound — here it's the word 'a' as in 'a cat.' Write on a card.",
              "Introduce 'it' — this one they CAN sound out (/i/-/t/), but it comes up so often it's worth memorizing as instant-recognition. Write on card.",
              "Flash all 5 sight word cards randomly. Child reads each. Aim for 10 rounds (about 2 minutes). Put tricky ones in a separate pile for extra practice."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Reading Simple Sentences",
            materials: "Paper, pen",
            steps: [
              "Write these sentences in large, clear lowercase print (one per line):\n• 'A man is sad.'\n• 'I sat in it.'\n• 'The map is tan.'\n• 'A pin is in it.'\n• 'I did nap.'",
              "For each sentence: child reads each word. Decodable words (man, sad, sat, etc.) they blend. Sight words (a, the, I, is, it, in) they recognize. Help only when needed.",
              "After reading each sentence, ask: 'What does that mean? Can you tell me in your own words?' This connects decoding to comprehension.",
              "If child is flying through these, let them try to WRITE a sentence. Dictate 'I am a man.' or 'It is a map.' and they write it word by word."
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "Week 2 Review and Creative Application",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "All-Sounds Speed Round",
            materials: "All 8 letter cards, timer (phone)",
            steps: [
              "Lay all 8 letter cards face up. Point to each — child says the sound as fast as they can. Record how long it takes (just for fun, never pressure).",
              "Shuffle and repeat. See if they can beat their time. Cheer for any improvement.",
              "Read 6 words written on paper: stamp, mist, dip, sand, pan, sit. Child blends each one."
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "Our Week 2 Story",
            materials: "Paper, pen, crayons or colored pencils",
            steps: [
              "Ask child: 'What was the most fun thing you did this week?' (Or any open-ended prompt.) Write down their words exactly as they say them, in large clear print.",
              "Read the story back together, finger-pointing to each word. Whenever you encounter a decodable word or sight word they know, let them read it.",
              "Have child illustrate the story. Write a title together at the top.",
              "Start a 'Story Collection' — staple or clip this with last week's story. Building a personal library is incredibly motivating."
            ]
          },
          {
            method: "Phonemic Awareness",
            duration: "10 min",
            title: "Rhyme Time",
            materials: "None",
            steps: [
              "Say: 'I'm going to say two words. You tell me: do they rhyme? Do they sound the same at the end?' Model first: 'Cat, hat — do they rhyme? YES! They both end in /at/!'",
              "Test pairs: man/pan (yes), sit/map (no), tip/dip (yes), sad/mad (yes), pin/pat (no), tin/sin (yes). For each 'yes,' ask child to say what sounds the same.",
              "Rhyme generation: 'What rhymes with sat?' Accept real words AND nonsense words (dat, gat, lat). Nonsense words are fine and actually show strong phonemic awareness! List them out: sat, mat, pat, bat, cat, dat, fat, hat...",
              "This builds the foundation for recognizing word families (-at, -in, -an, -ip) which will be a major tool in the coming weeks."
            ]
          }
        ]
      }
    ]
  },
  {
    week: 3,
    title: "Letter Sounds: G, O, C, K",
    focus: "Four new sounds plus introduction to word families. The hard /c/ and /k/ make the same sound — teach them together to avoid confusion.",
    days: [
      {
        day: "Monday",
        theme: "Introduce /g/, /o/ (short o)",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Week 2 Review Sprint",
            materials: "All letter cards so far (s, a, t, p, i, n, m, d)",
            steps: [
              "Flash all 8 cards — child says each sound. Target: under 20 seconds for all 8.",
              "Quick blending: say /m/-/a/-/n/ — child says 'man'. Do 5 more: dim, sit, pan, nip, stamp.",
              "Quick segmenting: say 'sand' — child says /s/-/a/-/n/-/d/. Do 3 more: mist, dip, tap."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet /g/ and /o/",
            materials: "Paper, pen, new letter cards",
            steps: [
              "Say: '/g/ — it comes from the back of your throat, like a little gulp: /g/ /g/ /g/!' Practice 5 times. Point out it's the HARD g sound (as in 'go'), not the soft g (as in 'gem').",
              "Write lowercase 'g'. Trace while saying /g/. Child traces 3 times. Make two letter cards.",
              "Say: '/o/ — short o, like in 'hot.' Open your mouth round like you're saying /o/ at the doctor! /o/ /o/ /o/!' Practice 5 times.",
              "Write lowercase 'o'. Trace while saying /o/. Child traces 3 times. Make two letter cards.",
              "Mix new cards with old. Flash 12 cards randomly — child says each sound. Celebrate speed and accuracy."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Words with /g/ and /o/",
            materials: "Letter cards",
            steps: [
              "Build and blend: got, dog, god, not, nod, on, pot, top, mop, stop,nog, pod, dot, log, moss, toss, Tom, mod.",
              "Note: some of these use letters from previous weeks combined with new ones. That's the beauty — the word possibilities keep expanding.",
              "Sentence: Write 'A dog sat on a mat.' Child reads it (introduce 'on' as a new readable word — they can blend /o/-/n/)."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Introduce /c/ and /k/ (same sound!)",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "20 min",
            title: "Meet /c/ and /k/ — The Twins!",
            materials: "Paper, pen, new letter cards",
            steps: [
              "Say: 'Today is special — we're learning TWO letters that make the SAME sound! /k/ — it's a sharp sound from the back of your mouth, like a little cough: /k/ /k/ /k/!' Practice 5 times.",
              "Write lowercase 'c'. Say: 'This is C, and it says /k/.' Trace while saying /k/. Child traces 3 times.",
              "Write lowercase 'k'. Say: 'And THIS is K, and it ALSO says /k/!' Trace while saying /k/. Child traces 3 times.",
              "Explain simply: 'C and K are like twins who wear different outfits but sound the same. As we read more, you'll learn which one to use. For now, just know they both say /k/.'",
              "Make letter cards for both 'c' and 'k' (two each).",
              "Build words: cat, can, cap, kit, kid, kick (explain the -ck ending: 'When /k/ comes at the end of a short word, we often write CK together'), cot, cod, sack, pack, tack, nick, pick, sick, dock, mock, sock.",
              "Write 'A cat is on a mat.' and 'I can kick it.' — child reads both sentences."
            ]
          },
          {
            method: "Multisensory / Kinesthetic",
            duration: "10 min",
            title: "Letter Body Shapes",
            materials: "Open floor space",
            steps: [
              "Stand up and use your whole body to form letter shapes! For 'c': curve your body into a C shape. For 'k': stand with one arm and one leg extended. For 'o': make a big circle with your arms overhead.",
              "Call out a sound — child makes the body shape AND says the sound. Do all 12 letters learned so far.",
              "Call out a word — child makes the body shape for just the FIRST letter. Words: cat, dog, pot, man, sun, nap, tip, igloo."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Word Families Introduction",
        lessons: [
          {
            method: "Synthetic Phonics / Word Families",
            duration: "20 min",
            title: "The -AT Family",
            materials: "Paper, pen",
            steps: [
              "Write '-at' on paper in large letters. Say: 'This says /at/. Now watch — when we put different letters in front, we make different words! This is a word FAMILY — they all end the same way.'",
              "Write each word as you build the family: sat, mat, pat, cat, tat, dat (nonsense — that's OK!), nat, gat. For each, child reads the onset (first letter sound) and then the rime (-at). So: /s/ + /at/ = sat!",
              "Repeat with the -IT family: sit, pit, nit, kit, mit, dit, git, bit (preview — they haven't learned 'b' yet, but can try).",
              "Repeat with -OT family: dot, got, not, pot, cot, mot, tot.",
              "Ask child: 'What do you notice about word families?' Guide them to see: only the first letter changes, the ending stays the same. This is a HUGE reading shortcut."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Rhyming Book Read-Aloud",
            materials: "A rhyming picture book (e.g., 'Green Eggs and Ham', 'The Cat in the Hat', 'Goodnight Moon', or any Dr. Seuss)",
            steps: [
              "Before reading: 'This book has lots of rhyming words — words that sound the same at the end. Let's listen for them!'",
              "Read the book. After each page with a rhyme, pause: 'Did you hear a rhyme? Which words rhymed?' If child catches it, celebrate. If not, point it out and repeat the pair.",
              "After reading, pick 3 rhyming pairs from the book. For each pair, ask: 'Can you think of another word that rhymes with these?' (Real or silly words both count.)",
              "Connect to word families: 'See? Cat and hat are in the -AT family! You already know that one!'"
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Sight Words and Sentences",
        lessons: [
          {
            method: "Sight Words",
            duration: "10 min",
            title: "New Sight Words: 'and', 'to', 'in'",
            materials: "Index cards or cut paper",
            steps: [
              "Review all previous sight words first: the, I, is, a, it. Flash cards — child reads each.",
              "Introduce 'and' — child CAN decode this one (/a/-/n/-/d/), but it appears so frequently that instant recognition helps fluency. Write on a card.",
              "Introduce 'to' — this is a true sight word (the 'o' makes an /oo/ sound, which is irregular at this stage). Write on a card.",
              "Introduce 'in' — another decodable one that benefits from instant recognition. Write on a card.",
              "Flash all 8 sight word cards randomly for 2 minutes. Put any tricky ones in a 'practice more' pile."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Connected Text Reading",
            materials: "Paper, pen",
            steps: [
              "Write a short 'story' using only decodable words and taught sight words:\n\n'Tim and the Dog\nTim got a dog.\nThe dog is tan and it is not sad.\nTim and the dog sat on a mat.\nTim got a stick and the dog got it.\nThe dog is a good dog.'",
              "Note: 'good' uses the 'oo' sound not yet taught. Pre-teach it: 'This word is GOOD. The two O's together make an /oo/ sound.' Just tell them — it's fine to pre-teach occasional words.",
              "Child reads the story, pointing to each word. Help with any stumbles — give them 3 seconds to try before providing the word. The goal is successful reading, not struggle.",
              "After reading: 'What happened in the story? Tell me about Tim and his dog.' Comprehension check.",
              "Child reads the story a second time. It will be smoother. Rereading builds fluency and confidence."
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "Week 3 Celebration and Review",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Full Letter Review",
            materials: "All 12 letter cards (s, a, t, p, i, n, m, d, g, o, c, k)",
            steps: [
              "Speed round: flash all 12 cards. Child says each sound. Time it and write down the time.",
              "Word building challenge: build 8 words using the cards as fast as possible: dog, stop, kick, mist, sand, pond (new!), camp (new!), stomp (ambitious!).",
              "For any child who's ready: try WRITING (not just building) 4 words from dictation. Say the word, child writes it. Accept inventive spelling and gently correct."
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "My Favorite Animal Story",
            materials: "Paper, pen, crayons",
            steps: [
              "Ask: 'What's your favorite animal? Let's write a story about it!' If they choose 'dog': guide them to dictate 2-4 sentences about a dog.",
              "Write their words. Try to incorporate some decodable words: 'The dog is big and can dig in the sand.' Read it back together.",
              "Child illustrates the story. Add this to their growing Story Collection.",
              "Read through ALL stories in the collection from Week 1 to now. Child reads as much as they can. This shows them how much progress they've made!"
            ]
          },
          {
            method: "Phonemic Awareness",
            duration: "10 min",
            title: "Sound Swap",
            materials: "Letter cards",
            steps: [
              "Build the word 'cat' with letter cards. Child reads it.",
              "Say: 'Now watch — I'm going to change just ONE letter.' Swap the 'c' for 'm'. 'What word is it now?' Child reads: 'mat!'",
              "Continue swapping one letter at a time: mat → man → pan → pin → pit → sit → sat → sad → mad → mid → did. Each time, only one letter changes.",
              "This is called a 'word chain' and it powerfully demonstrates how changing one sound changes the whole word. Let child try being the 'swapper' for a few rounds."
            ]
          }
        ]
      }
    ]
  },
  {
    week: 4,
    title: "Letter Sounds: E, R, H, B + Reading Fluency",
    focus: "Final set of high-frequency consonants plus short /e/. By end of this week, children can read dozens of CVC words and simple sentences with increasing fluency.",
    days: [
      {
        day: "Monday",
        theme: "Introduce /e/ (short e) and /r/",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Review and Warm-Up",
            materials: "All 12 letter cards from Weeks 1-3",
            steps: [
              "Flash all 12 cards. Any sound that takes child longer than 2 seconds gets set aside for extra practice after the new sounds.",
              "Read 5 words from paper: dog, stop, mist, camp, kick. Child blends each.",
              "Segment 3 words: say 'pond' — child says each sound. Then 'stomp' and 'sand.'"
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet /e/ and /r/",
            materials: "Paper, pen, new letter cards",
            steps: [
              "Say: '/e/ — short e, like in 'egg' or when you say 'eh?' /eee/!' Practice 5 times. Write lowercase 'e', trace, child traces 3 times.",
              "Say: '/r/ — growl like a little pirate: /rrrr/! Feel how your tongue kind of curls back?' Practice 5 times. Write lowercase 'r', trace, child traces 3 times.",
              "Make letter cards for 'e' and 'r' (2 each).",
              "New word building with 14 letters total: red, pen, ten, net, pet, men, met, rag, ran, rat, rip, rim, rod, rock, rest, rent, send, mend, drip, grip, trip, grand.",
              "Write 2 sentences: 'The red dog ran.' and 'I can get a pet.' Child reads both."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Introduce /h/ and /b/",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet /h/ and /b/",
            materials: "Paper, pen, new letter cards",
            steps: [
              "Say: '/h/ — it's like a warm breath, like you're fogging up a window: /h/ /h/ /h/!' Hold hand in front of mouth to feel the warm air. Practice 5 times.",
              "Write lowercase 'h'. Note: it looks like 'n' but with a tall line. Trace while saying /h/. Child traces 3 times.",
              "Say: '/b/ — your lips pop open: /b/ /b/ /b/! Watch my lips.' Practice 5 times.",
              "Write lowercase 'b'. THIS IS IMPORTANT: Say 'b has a bat and a ball — the stick (tall line) comes first, then the round part.' Trace while saying /b/. Compare to 'd' which they already know: hold 'b' and 'd' cards side by side. 'b' stick is on the LEFT, 'd' stick is on the RIGHT.",
              "Practice b/d discrimination: flash 'b' and 'd' cards randomly 10 times. If child confuses them, use the 'bed' trick: hold up both fists with thumbs pointing up — left hand makes a 'b', right hand makes a 'd', together they spell 'bed.'",
              "Make letter cards for 'h' and 'b' (2 each). You now have 16 letters!"
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Massive Word Expansion",
            materials: "Letter cards, paper, pen",
            steps: [
              "With 16 letters (s, a, t, p, i, n, m, d, g, o, c, k, e, r, h, b), the child can now read HUNDREDS of words. Build and blend a selection: hat, hen, him, hop, hot, hid, hit, had, hand, herd, bed, big, bit, bat, bad, ban, bin, bend, best, band, bring, brick, basket.",
              "Word chains: start with 'hat' and change one letter at a time: hat → bat → bit → sit → set → pet → pen → pin → bin → big → dig → dog → dot → hot → hop.",
              "Write a short paragraph:\n'The big red hen is in the pen.\nIt can hop and peck.\nBob got the hen a big basket.'\nChild reads the whole paragraph!"
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Fluency Building",
        lessons: [
          {
            method: "Synthetic Phonics / Fluency",
            duration: "15 min",
            title: "Repeated Reading for Fluency",
            materials: "Paper, pen",
            steps: [
              "Write this short passage:\n'Sam and the Hen\nSam had a big red hen.\nThe hen sat on a nest.\nSam got ten eggs!\nHe ran to Mom and Dad.\nMom said it is the best!'",
              "Pre-teach 'said' and 'he' and 'she' as sight words before reading. Write them on cards, practice 5 times each.",
              "First read: child reads through the passage. Help with any word they can't get within 3 seconds. Note the overall feeling — choppy is normal!",
              "Second read: child reads again. It should be slightly smoother. Praise any improvement in speed or expression.",
              "Third read: by now, familiar words come faster. Ask child to try to 'read it like they're telling a friend the story' — this nudges toward expression/prosody."
            ]
          },
          {
            method: "Multisensory / Kinesthetic",
            duration: "10 min",
            title: "Sandpaper Letters (DIY version)",
            materials: "Paper, glue, sand or salt or sugar",
            steps: [
              "Write 4-6 letters that child finds trickiest in LARGE size on paper using a thick line of glue. Sprinkle sand, salt, or sugar over the glue. Shake off excess. Let dry for 5 minutes (or use as-is if you're okay with slightly messy fingers).",
              "Child closes their eyes and traces a letter with their finger. The rough texture gives tactile feedback. They say the sound while tracing. Can they identify the letter just by touch?",
              "This is a Montessori-inspired technique. The combination of touch + sound + visual strengthens neural pathways for letter-sound association."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Shared Reading with Word Spotting",
            materials: "A picture book slightly above child's reading level",
            steps: [
              "Tell child: 'I'll read most of this book, but whenever I point to a word, YOU read it!' Choose words you know they can decode or sight words they know.",
              "Read the book together. Point to 8-10 words throughout that the child reads. Celebrate each one.",
              "After reading: ask 'What would YOU do if you were [main character]?' This builds inferential comprehension — going beyond just retelling facts.",
              "Pick one interesting word from the book that the child doesn't know. Teach it: say the word, explain what it means, use it in 2 different sentences. Ask child to use it in a sentence. This builds vocabulary."
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Writing and Composition",
        lessons: [
          {
            method: "Sight Words",
            duration: "10 min",
            title: "Sight Word Checkpoint",
            materials: "All sight word cards (the, I, is, a, it, and, to, in, he, she, said — 11 total)",
            steps: [
              "Flash all 11 cards. Sort into 3 piles: 'Know It Instantly' (under 1 second), 'Almost' (1-3 seconds), 'Tricky' (over 3 seconds or wrong).",
              "For 'Tricky' pile: practice each word 5 times. Try the 'Look-Say-Cover-Write-Check' method: child looks at the word, says it, you cover it, child writes it from memory, then uncover to check.",
              "For 'Almost' pile: flash each 3 more times to build speed.",
              "Post all sight words on a 'Word Wall' (a section of wall, fridge, or door) at child's eye level. Point to and read them casually throughout the day."
            ]
          },
          {
            method: "Phonics + Writing",
            duration: "20 min",
            title: "Guided Writing",
            materials: "Paper, pen or pencil",
            steps: [
              "Tell child: 'Today YOU are the author! You're going to write your own sentences. I'll help.'",
              "Start with a simple sentence: 'The cat is big.' Say it together. Count the words on fingers (5). Then write each word:\n- 'The' — sight word, child writes from memory.\n- 'cat' — segment: /c/-/a/-/t/. Child writes each letter as they say each sound.\n- 'is' — sight word.\n- 'big' — segment: /b/-/i/-/g/. Child writes.\nRemind them: finger space between words!",
              "Write 2-3 more sentences this way: 'He had a red hat.' 'The dog is in a pen.' 'I can hop and skip.'",
              "For misspellings: praise the sounds they DID get right. If 'big' comes out as 'bg', say: 'You got the /b/ and /g/ — great! Listen again in the middle: /b/-/i/-/g/. What sound is in the middle?' Guide them to add the 'i.'"
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "Month 1 Celebration and Assessment",
        lessons: [
          {
            method: "Assessment",
            duration: "15 min",
            title: "Informal Progress Check",
            materials: "Paper, pen",
            steps: [
              "Letter sounds: flash all 16 letter cards. Record which ones are instant (✓), slow (△), or unknown (✗). Don't tell child it's a 'test' — just say 'Let's see how many sounds you know now!'",
              "Word reading: write these 10 words (mix of easy and challenging): sat, him, red, stop, kick, band, trip, mend, dog, best. Child reads each. Record results.",
              "Sight words: flash all 11 sight word cards. Record which are instant.",
              "Sentence reading: 'The big dog ran to the red basket and hid in it.' Child reads. Note fluency — is it word-by-word or starting to flow?",
              "Comprehension: after the sentence, ask 'What did the dog do?' and 'Where did it hide?'",
              "This is for YOUR information only — to know what to review and what to push forward. Never share 'scores' with the child. Instead, tell them: 'You have learned SO many sounds and words! I'm really proud of you!'"
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "My Reading Journey Book",
            materials: "Several sheets of paper, stapler, crayons/markers",
            steps: [
              "Create a special 'book' together. Page 1: Title page — 'My Reading Journey by [child's name]'. Child decorates it.",
              "Page 2: 'Letters I Know' — child writes all the letters they've learned (help as needed). They can decorate each one.",
              "Page 3: 'Words I Can Read' — together, write 10-15 words child can read. They pick their favorites to illustrate.",
              "Page 4: 'My Story' — child dictates a short story about anything they want. You write it. They illustrate it.",
              "Staple it together. This is THEIR book, and it represents a month of incredible progress. Read it together with pride."
            ]
          },
          {
            method: "Celebration",
            duration: "10 min",
            title: "Reading to Someone Special",
            materials: "Phone or in-person family member, the stories and books child has created",
            steps: [
              "Have child 'read' their Story Collection and Reading Journey Book to someone — a grandparent on the phone, a sibling, a stuffed animal audience, or a parent who hasn't seen them yet.",
              "The act of reading TO someone else is incredibly empowering. It shifts the child's identity: 'I am a READER.'",
              "After the reading, ask: 'What do you want to learn to read next? What kind of stories do you want to write?' Use their answer to shape the coming weeks.",
              "Celebrate with something special — a trip to the library to pick their own books, a reading certificate you make together, or simply a big hug and genuine praise for their hard work."
            ]
          }
        ]
      }
    ]
  },
  {
    week: 5,
    title: "Letter Sounds: F, L, U, J",
    focus: "Four new high-value letters including short /u/, which completes all five short vowels. Children can now decode any CVC word in English. This is a major milestone.",
    days: [
      {
        day: "Monday",
        theme: "Introduce /f/ and /l/",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Weeks 1-4 Cumulative Review",
            materials: "All 16 letter cards (s, a, t, p, i, n, m, d, g, o, c, k, e, r, h, b)",
            steps: [
              "Flash all 16 cards in random order. Child says each sound. Any that take longer than 2 seconds go into a 'review' pile.",
              "Read 5 words from paper: brick, stamp, trend, grand, crisp. These are challenging CCVC and CCVCC words — if child struggles, break them into onset and rime: 'br-ick', 'st-amp'.",
              "Sight word speed round: flash all known sight words (the, I, is, a, it, and, to, in, he, she, said). Aim for instant recognition on all."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet /f/ and /l/",
            materials: "Paper, pen, new letter cards",
            steps: [
              "Say: '/f/ — put your top teeth gently on your bottom lip and blow: /ffffff/! Feel the air tickle your lip!' Practice 5 times. This is a continuous sound — you can stretch it, unlike /t/ or /p/.",
              "Write lowercase 'f'. Trace while saying /f/. Child traces 3 times. Make two letter cards.",
              "Say: '/l/ — put the tip of your tongue right behind your top front teeth and hum: /llllll/! Feel your tongue press the roof of your mouth!' Practice 5 times.",
              "Write lowercase 'l'. Note: it's just a tall straight line — easy to write but easy to confuse with the number 1. Trace while saying /l/. Child traces 3 times. Make two letter cards.",
              "Flash all 18 cards randomly. Focus on new sounds mixing with old. Do 2 full rounds."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Words with /f/ and /l/",
            materials: "Letter cards, paper, pen",
            steps: [
              "Build and blend: fan, fat, fin, fit, fig, fog, frog (CCVC!), flat, flag, flip, fed, felt, left, lift, lid, lip, log, leg, lot, let, lick, lock, lamp, land, list, lost,elf, self.",
              "Note: words like 'frog', 'flat', 'flag', 'flip' start with consonant blends (fl-, fr-). Model these carefully: '/f/-/l/' pushed together quickly makes 'fl', then add the vowel and final consonant.",
              "Write 2 sentences: 'The frog fell in the pond.' and 'I left the flag on the hill.' Pre-teach 'the' if needed (it should be solid by now). Child reads both."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Introduce /u/ (short u) — The Fifth Short Vowel!",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet /u/ — All Five Short Vowels Complete!",
            materials: "Paper, pen, new letter cards, colored pencils or markers",
            steps: [
              "Say: '/u/ — short u, like when something is yucky: /u/! Or like the beginning of 'up' — /u/!' Practice 5 times. Make the 'disgusted' face for fun.",
              "Write lowercase 'u'. Trace while saying /u/. Child traces 3 times. Make two letter cards.",
              "CELEBRATION MOMENT: Write all five short vowels in a row: a, e, i, o, u. Say: 'You now know ALL five vowels! These are the most important letters because every single word has at least one vowel. You're a vowel master!' Let child color or decorate the vowels.",
              "Vowel drill: point to each vowel randomly — child says the short sound. Do 3 rounds. This is critical because vowel confusion is the #1 source of reading errors.",
              "New words with /u/: bus, bug, bun, but, cup, cut, cub, dug, fun, gum, gun, gut, hug, hum, hut, jug (preview!), lug, mud, mug, mum, nut, pug, pun, run, rub, rug, sub, sum, sun, tub, tug, up, us."
            ]
          },
          {
            method: "Phonemic Awareness",
            duration: "10 min",
            title: "Vowel Sound Sorting",
            materials: "5 pieces of paper labeled 'a', 'e', 'i', 'o', 'u'",
            steps: [
              "Lay the 5 vowel papers in a row on the floor. Say a word — child jumps to (or touches) the paper with the matching vowel sound.",
              "Words to use: cat (a), bed (e), pig (i), dog (o), bus (u), hat (a), pen (e), lip (i), hot (o), rug (u), map (a), hen (e), kit (i), log (o), cup (u).",
              "This is HARD. Short vowels are the trickiest sounds to distinguish. If child gets /e/ and /i/ confused (very common), exaggerate the sounds: /eee/ with mouth wider, /iii/ with mouth more narrow. Same with /o/ and /u/.",
              "End with: child picks a vowel and says 3 words that have that vowel sound. Help as needed. This builds active production, not just recognition."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Introduce /j/ and Practice Blends",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet /j/ and Consonant Blend Practice",
            materials: "Paper, pen, new letter cards",
            steps: [
              "Say: '/j/ — it's like the beginning of jump! /j/ /j/ /j/! Feel how your tongue starts pressed to the roof and then drops.' Practice 5 times.",
              "Write lowercase 'j'. Note the dot on top (like 'i') and the hook at the bottom. Trace while saying /j/. Child traces 3 times. Make two letter cards.",
              "Words with /j/: jam, jab, jet, jig, jog, job, jot, jug, just, jump. Note: 'j' doesn't appear in as many simple words as other letters, but it's distinctive and memorable.",
              "Consonant blend practice — these are TWO consonants that each keep their own sound, pushed together quickly. Write and blend: bl- (black, bled, bliss, block, blot, bluff), cl- (clam, clip, clock, club, clump), fl- (flag, flip, flock, flop, fluff), gl- (glad, glen, glum, glob), pl- (plan, plot, plug, plum, plop), sl- (slam, slid, slim, slob, slug, slump).",
              "For each blend, model first: '/b/ and /l/ pushed together make bl. Now add the rest: bl-a-ck... black!' Child tries each word."
            ]
          },
          {
            method: "Multisensory / Kinesthetic",
            duration: "10 min",
            title: "Blend Clapping",
            materials: "None",
            steps: [
              "Stand up. For each word, child does a physical action for each sound, then claps once for the whole blended word.",
              "For 'flag': stomp (f), stomp (l), clap (a), clap (g), then JUMP and say 'flag!' The jump represents blending everything together.",
              "Do 8-10 blend words this way: frog, step, grip, clap, drum, slip, stop, trip, glad, plum.",
              "This turns a tricky phonics concept (blends) into a full-body experience. The physical separation of sounds followed by the 'jump blend' builds the mental model of how blending works."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Vocabulary-Rich Read-Aloud",
            materials: "A picture book with rich language (e.g., 'Owl Moon' by Jane Yolen, 'The Snowy Day' by Ezra Jack Keats, or any book with vivid descriptions)",
            steps: [
              "Before reading, say: 'Today we're going to be word collectors! When we hear a really interesting or beautiful word, we'll stop and collect it.'",
              "Read the book. When you encounter a rich vocabulary word (e.g., 'enormous', 'glistening', 'trudged'), stop and 'collect' it: say the word, explain what it means in child-friendly terms, use it in a new sentence.",
              "After reading, review your 'collected' words (aim for 3-4). For each word, ask child to use it in their own sentence. Accept any reasonable attempt.",
              "Write the collected words on a 'Word Collector' paper and post it on the wall. Over the coming weeks, you'll build an impressive vocabulary wall alongside the sight word wall."
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Sight Words and Connected Text",
        lessons: [
          {
            method: "Sight Words",
            duration: "10 min",
            title: "New Sight Words: 'was', 'for', 'are', 'you'",
            materials: "Index cards, pen",
            steps: [
              "Review all previous sight words (the, I, is, a, it, and, to, in, he, she, said). Flash cards — child reads each.",
              "Introduce 'was': 'This word is WAS. The 'a' makes an /o/ sound here — that's the tricky part. W-A-S spells WAS.' Child says it 5 times while looking at the card.",
              "Introduce 'for': child can nearly decode this (/f/-/or/), but the 'or' sound hasn't been formally taught yet. Teach as sight word for now. Say it 5 times.",
              "Introduce 'are' and 'you': both are highly irregular at this stage. Flash and repeat 5 times each. For 'you', note: 'This is a tricky one — it doesn't sound like it looks! Y-O-U says YOU.'",
              "Flash all 15 sight words randomly for 2 minutes. Sort into 'instant', 'almost', 'tricky' piles."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "20 min",
            title: "Reading a Longer Passage",
            materials: "Paper, pen",
            steps: [
              "Write this passage in large, clear print:\n\n'Jill and the Lost Pup\nJill had a fun job. She did jobs for her mum and dad.\nJill fed the hens. She got eggs and set them in a big basket.\nBut then she said, \"A pup! I can see a lost pup!\"\nThe pup was slim and sad. Jill got him a bun and a cup.\nThe pup had the bun and a long nap in the sun.\nJill said, \"You are the best pup!\"\nThe pup got a big hug.'",
              "Pre-teach any words the child hasn't seen: 'long' (they know /l/, /o/, /n/, /g/ — they can blend it!), 'then' (they know all these sounds but 'th' as a digraph hasn't been formally taught — just tell them 'th' together says /th/).",
              "Child reads the passage. Help with any word they can't get within 4 seconds. Celebrate progress — this is the longest text they've read!",
              "Comprehension questions: 'What was Jill's job?', 'What did she find?', 'How did Jill help the pup?', 'How do you think the pup felt at the end?'",
              "Child rereads the passage a second time. Note any improvement in fluency or confidence."
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "Week 5 Review and Creative Writing",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "All 20 Letters Speed Round",
            materials: "All letter cards (s, a, t, p, i, n, m, d, g, o, c, k, e, r, h, b, f, l, u, j)",
            steps: [
              "Flash all 20 cards. Time the full run. Record the time. This is child's new personal benchmark!",
              "Word chain starting from 'fun': fun → bun → bus → bug → big → bit → fit → fat → flat → flag → frog → fog → log → leg → let → jet → just (keep going as long as child is engaged).",
              "Dictation: say 5 words, child writes each one: cup, flag, jump, left, slug. Praise sounds they get correct; gently correct any errors."
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "My Five Vowels Story",
            materials: "Paper, pen, crayons",
            steps: [
              "Challenge: 'Let's write a story that uses ALL five vowel sounds!' Work together to create something like: 'The fat (a) hen (e) did (i) a hop (o) on the rug (u).' The child comes up with the ideas; you help incorporate all five vowels.",
              "Write the story in large print. Child illustrates it. Underline or highlight the five vowel letters in different colors.",
              "Read the story together. Add it to the Story Collection. At this point, the collection should be getting thick — this is deeply motivating for the child."
            ]
          },
          {
            method: "Phonemic Awareness",
            duration: "10 min",
            title: "Sound Deletion",
            materials: "None",
            steps: [
              "This is an advanced phonemic awareness skill: removing a sound from a word. Say: 'I'll say a word, and you tell me what's left when I take away a sound.'",
              "Start with first-sound deletion (easier): 'Say FAN without the /f/.' → 'an'. 'Say SLIP without the /s/.' → 'lip'. More: bus→us, flat→lat, stop→top, grip→rip, plan→lan (nonsense is fine!), clap→lap, flag→lag.",
              "If child handles that well, try last-sound deletion: 'Say LAMP without the /p/.' → 'lam'. 'Say BEST without the /t/.' → 'bes'. This is harder — only push it if they're ready.",
              "This skill directly supports spelling and decoding — it teaches children that words are made of separable, manipulable parts."
            ]
          }
        ]
      }
    ]
  },
  {
    week: 6,
    title: "Letter Sounds: W, V, Y, Z, X, Q",
    focus: "Completing the alphabet! These are lower-frequency letters, but knowing them means the child can now attempt to decode ANY single-letter sound in English. A major milestone.",
    days: [
      {
        day: "Monday",
        theme: "Introduce /w/ and /v/",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Review and Warm-Up",
            materials: "Letter cards, paper",
            steps: [
              "Flash all 20 letter cards from Week 5. Target: all sounds under 1 second each.",
              "Read 6 words: frog, jump, left, slug, club, plum. Child blends each.",
              "Sight word review: flash all 15 sight words. Note any that still need work."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet /w/ and /v/",
            materials: "Paper, pen, new letter cards",
            steps: [
              "Say: '/w/ — round your lips like you're about to whistle, then release: /w/ /w/ /w/! Your lips do all the work.' Practice 5 times. Hold a hand in front of mouth — /w/ produces a small puff of air.",
              "Write lowercase 'w'. Trace while saying /w/. Child traces 3 times. Make two letter cards.",
              "Say: '/v/ — put your top teeth on your bottom lip — just like /f/ — but this time VIBRATE! /vvvvv/! Feel the buzz!' Practice 5 times. Compare /f/ and /v/ — same mouth position, but /v/ vibrates (voiced) and /f/ doesn't (unvoiced). Child puts hand on throat to feel the vibration for /v/.",
              "Write lowercase 'v'. Trace while saying /v/. Child traces 3 times. Make two letter cards.",
              "Words with /w/: web, wet, wig, will, win, wag, wax, well, west, wind, with, wish. Words with /v/: van, vat, vet, vest, vim, visit (2 syllables — model: 'viz-it'). Note: /v/ appears in fewer CVC words.",
              "Sentences: 'The vet had a red van.' and 'I wish I had a wig!' Child reads both."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Introduce /y/, /z/, and the Alphabet Finale",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "20 min",
            title: "Meet /y/, /z/, /x/, and /qu/",
            materials: "Paper, pen, new letter cards",
            steps: [
              "Say: '/y/ — it's like saying 'yes' really fast: /y/ /y/ /y/! Your tongue lifts to the roof.' Practice 5 times. Note: 'y' can also act as a vowel (as in 'my' or 'happy'), but for now teach the consonant sound.",
              "Write lowercase 'y'. Trace while saying /y/. Make letter cards. Words: yak, yam, yap, yes, yet, yell, yip.",
              "Say: '/z/ — it's the buzzing bee sound: /zzzzzz/! It's the voiced version of /s/ — same mouth position but with vibration.' Practice 5 times. Child puts hand on throat to feel the buzz.",
              "Write lowercase 'z'. Trace. Make cards. Words: zap, zen, zig, zip, zit, buzz, fizz, fuzz, jazz (note double z at the end of some words).",
              "Say: '/x/ — this is special because it actually makes TWO sounds pushed together: /k/ and /s/ → /ks/! And in words, 'x' almost always comes at the END.' Practice the /ks/ sound 5 times.",
              "Write lowercase 'x'. Trace. Make cards. Words: ax, box, fox, hex, mix, six, fix, wax (note: wax ends in /ks/ sound but is spelled with 'x').",
              "Say: '/q/ — this letter is ALMOST never alone. It brings its best friend 'u' everywhere! QU together says /kw/.' Practice /kw/ 5 times.",
              "Write 'qu' together (always taught as a pair). Make a card. Words: quit, quiz, quick, quack, queen (the 'ee' sound hasn't been taught yet — pre-teach it as a preview).",
              "ALPHABET CELEBRATION: Write all 26 letters in order. Child reads each sound. They now know the ENTIRE ALPHABET! This is enormous. Take a moment to celebrate."
            ]
          },
          {
            method: "Multisensory / Kinesthetic",
            duration: "10 min",
            title: "Alphabet Obstacle Course",
            materials: "26 letter cards spread around the room/area",
            steps: [
              "Spread all 26 letter cards around the room — on furniture, the floor, taped to walls at child height.",
              "Call out a sound. Child runs to find the matching letter card, grabs it, says the sound, and brings it back. Continue until all 26 are collected.",
              "Variation: call out a WORD. Child identifies the FIRST sound, then runs to find that letter. For 'queen' they'd run to 'q' (or 'qu' card).",
              "This combines gross motor movement with letter-sound recall, and the physical effort creates stronger memory encoding."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Consonant Blends Mastery",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "20 min",
            title: "All Common Consonant Blends",
            materials: "Paper, pen",
            steps: [
              "Write and practice these beginning blends — for each, child reads 3-4 example words:\n\nL-blends: bl (black, bled, bliss), cl (clam, clip, club), fl (flag, flip, flock), gl (glad, glib, glum), pl (plan, plug, plop), sl (slam, slid, slug)\n\nR-blends: br (brag, brick, brush), cr (crab, crisp, cross), dr (drip, drop, drum), fr (frog, fresh, from), gr (grab, grin, grub), pr (press, prim, prop), tr (trap, trick, truck)\n\nS-blends: sc (scan, scat, scum), sk (skin, skip, skull), sm (smell, smog, smug), sn (snap, snip, snug), sp (spin, spot, spun), st (step, stick, stop), sw (swim, swam, swig)",
              "End blends are important too. Write and practice: -nd (band, bend, find, pond, fund), -nk (bank, sink, bunk, trunk), -nt (bent, hint, front, hunt), -mp (camp, limp, stomp, dump), -ft (left, lift, soft, loft), -lp (help, gulp, yelp), -lk (milk, silk, bulk), -sk (desk, risk, dusk, tusk), -st (best, fist, cost, must, just), -ct (fact, sect).",
              "Challenge words that combine beginning AND end blends: stamp, trunk, frost, crisp, grasp, trust, blast, clamp, drift."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Prediction and Connection Read-Aloud",
            materials: "Any picture book new to the child",
            steps: [
              "Before reading, look at the cover together. Ask: 'What do you think this book will be about? What clues do you see in the picture and title?' Write down child's prediction.",
              "Read the first few pages. Pause: 'Is it what you expected? Do you want to change your prediction?' This teaches children that good readers are always thinking ahead.",
              "At a key turning point in the story, pause again: 'What would YOU do if you were [character]?' This builds empathy and inferential thinking.",
              "After reading, compare the prediction to what actually happened. Ask: 'Were you surprised by anything? What was different from what you expected?' Then: 'Does this remind you of anything in YOUR life?' (text-to-self connection).",
              "Pick 2-3 words from the book for the Word Collector wall."
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Sight Words and Fluency Practice",
        lessons: [
          {
            method: "Sight Words",
            duration: "10 min",
            title: "New Sight Words: 'they', 'have', 'with', 'this'",
            materials: "Index cards, pen",
            steps: [
              "Review all 15 previous sight words. Flash quickly.",
              "Introduce 'they': 'T-H-E-Y. The TH says /th/ (we'll learn more about this soon!), and EY says /ay/. THEY.' Flash and repeat 5 times.",
              "Introduce 'have': 'H-A-V-E. The tricky part is the silent E at the end — the A still says /a/ not /ay/ in this word.' Flash and repeat 5 times.",
              "Introduce 'with' and 'this': both start with /th/. Note the TH pattern. Flash and repeat 5 times each.",
              "Flash all 19 sight words. Sort into mastered vs. needs-practice."
            ]
          },
          {
            method: "Synthetic Phonics / Fluency",
            duration: "20 min",
            title: "Fluency Through Repeated Reading",
            materials: "Paper, pen",
            steps: [
              "Write this passage:\n\n'Fun at the Pond\nBen and Jess went to the pond with Mum.\nThey got a stick and flung it. Splash!\nA big frog sat on a flat rock.\n\"I can grab it!\" said Jess.\nBut the frog was too quick. It did a big jump.\nBen and Jess had a swim and then sat in the sun.\n\"This was the best trip,\" said Ben.\nThey had fun with Mum at the pond.'",
              "Pre-teach: 'went' (they know all sounds), 'too' (/t/-/oo/ — tell them OO says /oo/), 'swim' (they know it), 'splash' (blend + digraph — model 'spl-a-sh', tell them SH says /sh/).",
              "First read: child reads through. Time it casually (note the time but don't tell child). Help with stumbles.",
              "Discuss: 'What happened at the pond? Did Jess catch the frog?' Quick comprehension check.",
              "Second read: smoother this time. Focus on reading in phrases rather than word-by-word. Model: read one sentence with expression, then have child echo it.",
              "Third read (optional, if child is willing): aim for 'storytelling voice.' If they're tired, skip this — never push to the point of frustration."
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "Alphabet Completion Celebration",
        lessons: [
          {
            method: "Assessment",
            duration: "15 min",
            title: "Mid-Program Check: All 26 Letters",
            materials: "All 26 letter cards, paper, pen",
            steps: [
              "Flash all 26 letter cards. Record: instant (✓), slow (△), unknown (✗). The goal isn't perfection — it's to identify which sounds need more review in the coming weeks.",
              "Word reading assessment — write these 12 words (increasing difficulty): cat, ship, frog, jump, vest, quiz, black, trust, blend, swift, frost, clump. Child reads each. Record results.",
              "Sight word check: flash all 19 cards. Record which are instant.",
              "Sentence fluency: 'The quick fox ran and hid in the big black box.' Child reads. Note: is it word-by-word or starting to group into phrases?",
              "Share results with child positively: 'You know [X] out of 26 sounds — that's amazing! And you can read so many words now. Let me show you how many stories you've written!' Pull out the Story Collection."
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "My Alphabet Adventure",
            materials: "Paper, pen, crayons/markers",
            steps: [
              "Create a special project: 'My A to Z page.' Child picks their favorite word for as many letters as they can (doesn't have to be all 26). Example: A — ant, B — bug, C — cat...",
              "For each word, child writes the letter and the word (with help as needed), and draws a small picture.",
              "This becomes a reference page they can be proud of AND use as a personal dictionary going forward.",
              "Read through the entire Story Collection together. Count the pages. Celebrate the sheer volume of what they've created and read."
            ]
          },
          {
            method: "Phonemic Awareness",
            duration: "10 min",
            title: "Sound Substitution",
            materials: "None",
            steps: [
              "This is the most advanced phonemic awareness skill: swapping one sound for another. Say: 'Say CAT. Now change the /k/ to /b/. What word do you get?' → BAT.",
              "First sound substitution: fan→van (change /f/ to /v/), log→dog (change /l/ to /d/), red→bed, wig→pig, hot→lot, cup→pup.",
              "Last sound substitution (harder): cat→can (change /t/ to /n/), bug→bus (change /g/ to /s/), lip→lit, mud→mug, hen→hem.",
              "Middle sound substitution (hardest — only try if child is crushing the above): cat→cot (change /a/ to /o/), big→bag, pin→pen, hot→hit, cup→cap.",
              "Each of these requires the child to hold a word in memory, isolate a specific sound, remove it, insert a new one, and blend the result. It's a phenomenal workout for phonological processing."
            ]
          }
        ]
      }
    ]
  },
  {
    week: 7,
    title: "Consonant Digraphs: SH, CH, TH, NG",
    focus: "Digraphs are two letters that make ONE new sound (unlike blends where each letter keeps its sound). This is a conceptual leap — children must learn that two letters can work as a team.",
    days: [
      {
        day: "Monday",
        theme: "Introduce SH and CH",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet the Digraph SH",
            materials: "Paper, pen, new digraph cards",
            steps: [
              "Say: 'Today we're learning something new — sometimes two letters work together to make a BRAND NEW sound that's different from either letter alone! We call these digraphs — fancy word for letter partners.'",
              "Write 'sh' on a card. Say: 'S and H are partners. Together they say /sh/ — like when you tell someone to be quiet: shhhh!' Practice /sh/ 5 times.",
              "IMPORTANT: demonstrate that /sh/ is NOT /s/ + /h/. Say /s/ then /h/ separately — it sounds nothing like /sh/. 'See? When they're partners, they make a completely new sound!'",
              "Words with SH at the beginning: she, ship, shop, shed, shell, shin, shock, shrug, shelf, shut, shrimp. Words with SH at the end: fish, dish, wish, gush, rush, crush, brush, flash, fresh, splash, cash, mash, rash, ash.",
              "Write 'sh' in the beginning and end positions: 'shin' vs 'fish'. Point out that the digraph can appear anywhere in a word.",
              "Make 2 digraph cards for 'sh'."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet the Digraph CH",
            materials: "Paper, pen, new digraph cards",
            steps: [
              "Write 'ch' on a card. Say: 'C and H are partners. Together they say /ch/ — like a train: ch-ch-ch-ch!' Practice /ch/ 5 times.",
              "Again, demonstrate: /k/ then /h/ separately sounds nothing like /ch/. The digraph creates a new sound.",
              "Words with CH at the beginning: chip, chop, chin, chest, check, chill, chum, chunk, chick. Words with CH at the end: much, such, rich, which, lunch, bunch, bench, ranch, stretch.",
              "Note: 'ch' also appears in the middle of words: teacher, kitchen, ketchup. Preview these casually.",
              "Make 2 digraph cards for 'ch'.",
              "Sorting activity: write 10 words on paper. Child sorts them into 'starts with SH', 'starts with CH', 'ends with SH', 'ends with CH': ship (starts SH), chop (starts CH), fish (ends SH), much (ends CH), shed (starts SH), chin (starts CH), rush (ends SH), bench (ends CH), shock (starts SH), lunch (ends CH)."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Introduce TH (voiced and unvoiced) and NG",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet the Digraph TH (Two Sounds!)",
            materials: "Paper, pen, new digraph cards",
            steps: [
              "Write 'th' on a card. Say: 'TH is extra special — it actually makes TWO different sounds! Both times, stick your tongue out a tiny bit between your teeth.'",
              "Unvoiced TH (as in 'thin'): '/th/ — whisper it with your tongue between your teeth: /th/ /th/ /th/!' No vibration in the throat. Words: thin, thick, think, thing, three, thank, thud, thumb, thunder.",
              "Voiced TH (as in 'the'): 'Now do the same mouth position but turn on your voice — feel the buzz: /th/ (like in THE)!' Words: the, this, that, them, then, they, there, with.",
              "Child puts hand on throat: unvoiced TH = no buzz, voiced TH = buzz. Practice switching between them.",
              "For now, don't stress about which TH is which — just help child recognize the mouth position. Over time, context will guide them to the right sound. The key insight is: 'th' = tongue between teeth."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet the Digraph NG",
            materials: "Paper, pen, new digraph cards",
            steps: [
              "Write 'ng' on a card. Say: '/ng/ — this sound comes from the BACK of your mouth. It's the sound at the end of SING: /ng/! Try humming it — your mouth stays open but the sound comes from your nose and throat.' Practice 5 times.",
              "IMPORTANT: /ng/ almost always appears at the END of words, never at the beginning in English.",
              "Words ending in NG: ring, sing, king, thing, long, song, strong, bring, swing, sting, hung, lung, rung, bung, bang, rang, gang, fang, spring, string.",
              "The -ING ending is HUGE: running, jumping, sitting, getting, etc. Preview: 'This ending -ING shows that something is happening RIGHT NOW. We'll use it a lot!'",
              "Make 2 digraph cards for 'th' and 2 for 'ng'. Child now has 26 letter cards + 4 digraph pair cards.",
              "Mix all cards and flash. Child says each sound. Digraphs should be treated as single sounds, not two separate letters."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Digraph Reading Practice",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Digraph Word Building",
            materials: "Letter and digraph cards",
            steps: [
              "Using letter cards AND digraph cards, build these words. The digraph card ('sh', 'ch', 'th', 'ng') counts as ONE sound position:\nsh words: shop, ship, shed, fish, dish, wish, shut, shrug, shell, shelf, cash, rash, flash\nch words: chip, chop, chin, much, such, rich, lunch, bunch, chest, check\nth words: thin, thick, this, that, them, with, cloth, math, bath, both\nng words: ring, sing, king, long, song, bang, hung, thing, bring, string",
              "Word chains with digraphs: ship → chip (swap sh for ch), chip → chin (swap p for n), chin → thin (swap ch for th), thin → thing (add ng), thing → ring (remove th), ring → rung (swap i for u), rung → lung (swap r for l).",
              "Write 3 sentences heavy with digraphs: 'I think the ship is long.' 'She had chips for lunch with a fresh drink.' 'The king did sing a thing.' Child reads each."
            ]
          },
          {
            method: "Phonemic Awareness",
            duration: "10 min",
            title: "Digraph Sound Identification",
            materials: "None (purely oral)",
            steps: [
              "Say a word. Child identifies which digraph they hear and whether it's at the beginning or end: 'SHIP' → 'SH at the beginning!', 'FISH' → 'SH at the end!', 'CHIN' → 'CH at the beginning!', 'RING' → 'NG at the end!', 'THINK' → 'TH at the beginning!'",
              "Trickier: some words have TWO digraphs or a digraph plus a blend: 'THRUSH' → TH at beginning, SH at end. 'SHRIMP' → SH at beginning. 'STRENGTH' → this is very advanced — just mention it as a preview.",
              "Digraph vs. Blend discrimination: 'Is the first sound in SHOP one sound or two?' (One — it's a digraph!) 'Is the first sound in STOP one sound or two?' (Two — it's a blend, /s/ and /t/!) Try: CHIN (one: ch), CLIP (two: c-l), THIN (one: th), TRIP (two: t-r), SHRIMP (one: sh... then r is a blend with it!)."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Story Retelling Practice",
            materials: "A familiar picture book the child has heard before",
            steps: [
              "Choose a book child already knows well. Say: 'Today YOU'RE going to tell ME the story! I'll hold the book and turn the pages, and you tell me what happens.'",
              "Child 'reads' / retells the story using the pictures as prompts. Don't correct narrative details — focus on their ability to sequence events (beginning, middle, end).",
              "After they finish, ask: 'What happened first? Then what? How did it end?' This practices temporal sequencing, which is critical for reading comprehension.",
              "If child struggles with retelling, use prompts: 'What did [character] do here?' while pointing to illustrations. Retelling is a skill that improves rapidly with practice."
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Sight Words and Extended Reading",
        lessons: [
          {
            method: "Sight Words",
            duration: "10 min",
            title: "New Sight Words: 'do', 'what', 'when', 'your'",
            materials: "Index cards, pen",
            steps: [
              "Review all 19 previous sight words. At this point, most should be automatic.",
              "Introduce 'do': irregular — the 'o' says /oo/. 'D-O spells DO.' Practice 5 times.",
              "Introduce 'what': 'W-H-A-T. The WH says /w/ (in most accents) and the A says /o/. Tricky word! WHAT.' Practice 5 times.",
              "Introduce 'when' and 'your': 'when' — WH says /w/, the rest is decodable. 'your' — highly irregular, just memorize. Practice 5 times each.",
              "All 23 sight words flash round. Any word not instant after 2 seconds gets starred for extra daily review."
            ]
          },
          {
            method: "Synthetic Phonics / Fluency",
            duration: "20 min",
            title: "Digraph-Rich Passage",
            materials: "Paper, pen",
            steps: [
              "Write this passage:\n\n'The Ship Trip\nChip and his mum got on a big ship.\n\"What a long ship!\" said Chip.\nThey could see fish in the fresh, thin water.\nChip said, \"I think that fish is the king!\"\nHis mum said, \"Shh! Do not shout or the fish will rush off.\"\nChip sat still. Then the fish did a flash and a splash!\n\"That was the best thing!\" said Chip with a grin.\nWhen they got back, Chip sang a song about the ship and the fish king.'",
              "Pre-teach 'about' (sight word preview — say 'this word is ABOUT, a-b-o-u-t'), 'water' (irregular — tell them), 'could' and 'shout' (preview 'ou' as a vowel sound they'll learn formally soon).",
              "First read: child reads through. Help with any digraphs they stumble on — remind them: 'Those two letters are partners — what sound do they make together?'",
              "Comprehension: 'Where did Chip go?', 'What did he see?', 'Why did mum say shh?', 'What did Chip do when he got home?'",
              "Second read for fluency. Encourage child to read dialogue with expression — 'How would Chip say this if he was excited?'"
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "Week 7 Review and Creative Application",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Digraph Speed Drill",
            materials: "All letter and digraph cards",
            steps: [
              "Flash all 26 letter cards + 4 digraph cards (30 total). Child says each sound. Time it.",
              "Write 10 digraph words. Child reads each as fast as they can: shop, chin, this, ring, fish, much, thing, shell, chest, string.",
              "Dictation challenge: say these words, child writes them: ship, lunch, math, bang, brush. Digraphs in spelling are the new challenge — celebrate correct digraph use!"
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "The Digraph Detective Story",
            materials: "Paper, pen, crayons",
            steps: [
              "Help child create a story that uses LOTS of digraph words. Prompt: 'Let's write about a detective who finds things. What sounds might the detective hear?' Guide toward words like: 'shh', 'crash', 'thud', 'bang', 'crash'.",
              "Write the story together. Child contributes ideas; you write. Try to include at least 2 words from each digraph (sh, ch, th, ng).",
              "After writing, go back through the story with a colored pencil. Child circles every digraph they can find. Count them up!",
              "Read the story together. Add to the Story Collection."
            ]
          },
          {
            method: "Multisensory / Kinesthetic",
            duration: "10 min",
            title: "Digraph Action Sounds",
            materials: "None — just space to move",
            steps: [
              "Assign a body action to each digraph: SH = finger to lips (shh!), CH = pump arms like a train (ch-ch-ch), TH = stick tongue out, NG = flex arms like a strong person (like 'strong').",
              "Call out words. Child does the matching action AND says the digraph sound: 'FISH!' → child puts finger to lips and says /sh/. 'RING!' → child flexes and says /ng/. 'THINK!' → tongue out, /th/.",
              "Speed round: call words faster and faster. Mix in non-digraph words too — for those, child stands still. This tests whether they can distinguish digraph words from non-digraph words.",
              "Let child be the caller for a round while you do the actions. Teaching solidifies learning."
            ]
          }
        ]
      }
    ]
  },
  {
    week: 8,
    title: "Vowel Digraphs: AI, EE, OA, OO",
    focus: "The first long vowel sounds! Children learn that two vowels together can make the 'name' of the first vowel (ai = long a, ee = long e, oa = long o). This dramatically expands readable vocabulary.",
    days: [
      {
        day: "Monday",
        theme: "Introduce AI (long a) and EE (long e)",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet AI — 'When Two Vowels Go Walking, the First One Does the Talking'",
            materials: "Paper, pen, new digraph cards",
            steps: [
              "Say: 'We've learned that A says /a/ (short a, like in cat). But sometimes A wants to say its NAME — /ay/! When A brings its friend I along, together AI says /ay/!'",
              "Write 'ai' on a card. Say: 'AI says /ay/ — like in RAIN!' Practice /ay/ 5 times.",
              "Teach the helpful (but not always perfect) rule: 'When two vowels go walking, the first one does the talking — it says its own name!' So in AI, the A says its name /ay/ and the I is quiet.",
              "Words with AI: rain, train, brain, pain, main, chain, sail, tail, mail, rail, snail, trail, wait, bait, paid, laid, maid, faint, paint, saint.",
              "Write 'The snail sat on the trail in the rain.' Child reads. This is AMAZING — they're reading long vowel words!"
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet EE — Long E",
            materials: "Paper, pen, new digraph cards",
            steps: [
              "Write 'ee' on a card. Say: 'EE says /ee/ — like in TREE! Two E's together say E's name: /ee/!' Practice 5 times.",
              "Words with EE: see, bee, tree, free, three, feet, meet, seed, feed, need, deed, week, seek, peek, beef, reef, feel, heel, steel, green, screen, sleep, sheep, sweep, speed, sweet, street.",
              "Compare short e vs. long ee: bed vs. beed (not a word, but hear the difference), pet vs. peet, red vs. reed. This contrast helps solidify that EE = long E.",
              "Sentences: 'I can see three green trees.' 'She did feed the sheep and then went to sleep.' Child reads both.",
              "Make digraph cards for 'ai' and 'ee'. Add to the collection."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Introduce OA (long o) and OO (two sounds!)",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet OA — Long O, and OO — Two Sounds!",
            materials: "Paper, pen, new digraph cards",
            steps: [
              "Write 'oa' on a card. Say: 'OA says /oa/ — like in BOAT! O says its name, A stays quiet.' Practice 5 times.",
              "Words with OA: boat, coat, goat, moat, float, oak, soak, cloak, road, load, toad, loaf, foam, roam, groan, moan, toast, roast, coast.",
              "Write 'oo' on TWO cards — because OO makes TWO different sounds!",
              "OO Sound 1 — /oo/ as in 'moon': long, round sound. Words: moon, soon, spoon, noon, room, boom, zoom, food, mood, pool, cool, tool, school, too, zoo, roof, hoof, boot, hoot, root, shoot.",
              "OO Sound 2 — /oo/ as in 'book': shorter, pulled-back sound. Words: book, cook, look, hook, took, shook, good, hood, wood, stood, foot, wool.",
              "Explain: 'OO makes two sounds. You'll learn which one to use by trying both — one will make a real word! If 'book' doesn't sound right as /b/-/oo/-/k/ (like 'bOOk' with a moon-oo), try the shorter sound: /b/-/oo/-/k/ (book!). Your brain will figure it out with practice.'",
              "Make digraph cards for 'oa' and 'oo'. Flash all vowel digraphs: ai, ee, oa, oo — child says the sound for each."
            ]
          },
          {
            method: "Phonemic Awareness",
            duration: "10 min",
            title: "Long vs. Short Vowel Sorting",
            materials: "Two pieces of paper labeled 'Short' and 'Long'",
            steps: [
              "Say a word. Child decides if the vowel sound is SHORT (like in cat, bed, pig, dog, bus) or LONG (like in rain, tree, boat, moon). They point to or touch the correct paper.",
              "Words: cat (short), rain (long), bed (short), feet (long), dog (short), road (long), bus (short), moon (long), fish (short), green (long), ship (short), train (long), boot (long), rock (short), sleep (long), plug (short).",
              "This is challenging because children are used to hearing only short vowels. The key insight: 'Long vowels say their NAME — A, E, I, O, U. Short vowels say their SOUND — /a/, /e/, /i/, /o/, /u/.'",
              "If child struggles, focus on just two contrasts first: short a vs. long a (cat vs. rain), then short e vs. long e (bed vs. tree). Build from there."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Vowel Digraph Reading Practice",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "20 min",
            title: "Mixed Vowel Digraph Reading",
            materials: "Paper, pen",
            steps: [
              "Write these word sets and have child read across each row:\nAI words: brain, chain, faint, plain, strain, trait\nEE words: creep, fleet, greed, sleeve, squeeze, steep\nOA words: approach, cloak, float, groan, throat, toast\nOO (long) words: bloom, cartoon, igloo, lagoon, mushroom, scooter\nOO (short) words: brook, childhood, firewood, footprint, mistook, notebook",
              "Mixed sentences — child reads each:\n'The green frog sat on the boat in the moonlight.'\n'I need to get my raincoat — it is going to rain!'\n'She took a good look at the cookbook.'\n'The train to the coast was too soon for me.'",
              "Word sort: write 12 words on paper. Child reads each and sorts by vowel digraph: cream (ee), float (oa), brain (ai), stool (oo-long), shook (oo-short), tail (ai), speech (ee), roast (oa), proof (oo-long), brook (oo-short), snail (ai), steep (ee)."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Information Book Read-Aloud",
            materials: "A non-fiction picture book (about animals, space, weather, the ocean — whatever interests the child)",
            steps: [
              "Say: 'Today we're reading a different kind of book — this one tells us TRUE things! It's called non-fiction.' This is an important genre distinction.",
              "Read the book together. After each page or section, pause: 'What did we just learn? Can you tell me one new fact?'",
              "Point out text features: 'See this big word at the top? That's a heading — it tells us what this section is about.' 'See this word in bold? That means it's an important word.'",
              "After reading: 'What was the most surprising thing you learned? What do you want to know more about?' This builds curiosity and information literacy.",
              "Connect to phonics: find 3-4 words in the book that use the vowel digraphs learned this week."
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Sight Words and Passage Reading",
        lessons: [
          {
            method: "Sight Words",
            duration: "10 min",
            title: "New Sight Words: 'come', 'some', 'there', 'were'",
            materials: "Index cards, pen",
            steps: [
              "Review all 23 previous sight words.",
              "Introduce 'come': 'C-O-M-E. The O says /u/ and the E is silent. Tricky! COME.' Practice 5 times.",
              "Introduce 'some': same pattern — 'S-O-M-E. The O says /u/ and E is silent. SOME.' Practice 5 times.",
              "Introduce 'there' and 'were': both have the /air/ or /er/ sound. 'THERE' and 'WERE' are very common. Practice 5 times each.",
              "Flash all 27 sight words. At this point, child should instantly recognize at least 20 of them."
            ]
          },
          {
            method: "Synthetic Phonics / Fluency",
            duration: "20 min",
            title: "Vowel Digraph Rich Passage",
            materials: "Paper, pen",
            steps: [
              "Write this passage:\n\n'The Goat on the Boat\nThere was a goat on a boat in the moonlight.\nThe goat could see the green reeds by the coast.\n\"I need to get to that road,\" the goat said.\nSo the goat took a big leap and went — SPLASH — in the cool pool!\nShe did a good swim to the shore.\nBut then it started to rain. Big drops came soon.\nThe goat shook and shook. She was too wet!\nShe took shelter under an old oak tree.\nWhen the rain stopped, the moon came back.\nThe goat said, \"That was quite a trip!\"\nAnd she went to sleep under the tree, feeling free.'",
              "Pre-teach 'shelter', 'quite', 'under', 'feeling', 'started', 'drops' — mix of sight words and decodable words with patterns not yet formally taught. Just tell them these words.",
              "First read: child reads the passage. This is the longest piece they've attempted. If they need to take a break in the middle, that's fine.",
              "Comprehension: 'Why did the goat jump off the boat?', 'What happened after she jumped?', 'How do you think the goat felt at the end?', 'What would you have done differently?'",
              "Second read for fluency. Point out how much easier it is the second time!"
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "Week 8 Review — Month 2 Milestone",
        lessons: [
          {
            method: "Assessment",
            duration: "15 min",
            title: "Month 2 Progress Check",
            materials: "Paper, pen, all letter/digraph cards, all sight word cards",
            steps: [
              "Letter/digraph sounds: flash all 30 cards (26 letters + sh, ch, th, ng). Record results. Also flash the 4 vowel digraphs (ai, ee, oa, oo).",
              "Word reading — 15 words (increasing complexity): ship, train, green, float, book, splash, branch, street, chain, smooth, shrimp, toast, speech, paint, moonlight. Child reads each.",
              "Sight words: flash all 27 cards. Record instant vs. needs-practice.",
              "Passage fluency: have child reread the 'Goat on the Boat' passage from yesterday. Note improvements in speed, accuracy, and expression compared to first read.",
              "Celebrate massively: 'Two months ago you didn't know any letter sounds. Now you know ALL 26 plus digraphs, you can read long stories, and you've written your own books. That is incredible.'"
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "My Chapter Book — Chapter 1",
            materials: "Several sheets of paper, pen, crayons, stapler",
            steps: [
              "Big project launch: 'You've been writing single stories. Now let's start a CHAPTER BOOK! This is what real authors do.' The excitement of a multi-chapter project is very motivating.",
              "Ask: 'Who is the main character in your book? What's their name? Where do they live? What's special about them?' Write down the child's answers.",
              "Child dictates Chapter 1 (aim for 4-6 sentences). You write it in clear print. Child illustrates it.",
              "Create a cover page with the book title (child chooses), author name (child's name!), and an illustration.",
              "Chapters 2 and 3 will be written in Weeks 9 and 10 — building anticipation and narrative planning."
            ]
          }
        ]
      }
    ]
  },
  {
    week: 9,
    title: "R-Controlled Vowels & Diphthongs: AR, OR, ER, OW, OI",
    focus: "R-controlled vowels ('Bossy R') change the vowel sound completely. Diphthongs (ow, oi) are vowel sounds that glide from one position to another. These unlock a huge new set of words.",
    days: [
      {
        day: "Monday",
        theme: "Introduce AR and OR",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Bossy R: Meet AR and OR",
            materials: "Paper, pen, new digraph cards",
            steps: [
              "Say: 'Remember how vowels have their short sounds? Well, there's a letter that's SO bossy, it changes the vowel sound completely — it's R! When R comes after a vowel, it takes over. We call this Bossy R.'",
              "Write 'ar' on a card. Say: 'AR says /ar/ — like a pirate! ARRRR!' Practice 5 times with pirate voices. This is the sound in 'car' and 'star'.",
              "Words with AR: car, far, bar, star, jar, arm, art, farm, barn, card, hard, dark, park, start, sharp, chart, march, garden, carpet, market.",
              "Write 'or' on a card. Say: 'OR says /or/ — like in MORE or FOR! /orrr/!' Practice 5 times.",
              "Words with OR: for, or, corn, born, torn, sort, sport, short, north, storm, fork, cork, pork, horse, force, morning, corner, order.",
              "Make digraph cards for 'ar' and 'or'. Write 2 sentences: 'The car went far in the dark.' 'The horse ran north in the storm.' Child reads both."
            ]
          },
          {
            method: "Multisensory / Kinesthetic",
            duration: "10 min",
            title: "Bossy R Hand Signal",
            materials: "None",
            steps: [
              "Create a special 'Bossy R' hand signal: make a fist and shake it (like R is being bossy!). Whenever child encounters an R-controlled vowel while reading, they can make this signal to remind themselves that R is changing the vowel.",
              "Practice: write words on paper. Mix R-controlled words with regular words. Child reads each. When they see an R-controlled vowel, they make the Bossy R fist FIRST, then read the word: barn (fist! → /ar/ → barn), cat (no fist → regular), fork (fist! → /or/ → fork), bed (no fist → regular).",
              "Do 12-15 words. This physical cue helps children remember to adjust their vowel sounds when R appears."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Introduce ER (and IR and UR — same sound!)",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "ER, IR, and UR — The Three Twins!",
            materials: "Paper, pen, new digraph cards",
            steps: [
              "Say: 'Today's Bossy R patterns are tricky because THREE different spellings make the SAME sound! ER, IR, and UR all say /er/ — like the end of 'mother' or the beginning of 'earth.'",
              "Write 'er', 'ir', 'ur' on three separate cards. Practice /er/ with each: 'They look different but sound the same!'",
              "ER words: her, fern, term, herd, perch, clerk, under, sister, water, better, letter, never, after, summer, winter.",
              "IR words: sir, bird, girl, dirt, firm, first, shirt, third, stir, birth, circle, thirsty.",
              "UR words: fur, burn, turn, curl, hurt, burst, church, nurse, purple, turkey, surfing, Thursday.",
              "The big question: 'How do I know which spelling to use?' Answer honestly: 'You'll learn by seeing these words many times. For reading, the great news is they ALL sound the same, so just say /er/ and you'll be right!' Spelling will develop over time through exposure.",
              "Sentences: 'The girl in the purple shirt was first.' 'Her bird had a hurt wing and the nurse did help.' Child reads both."
            ]
          },
          {
            method: "Phonemic Awareness",
            duration: "10 min",
            title: "Bossy R Sorting",
            materials: "Three papers labeled 'AR', 'OR', 'ER/IR/UR'",
            steps: [
              "Say a word. Child sorts it into the correct R-controlled vowel category by pointing to the right paper.",
              "Words: car (AR), born (OR), bird (ER), farm (AR), fork (OR), nurse (ER), star (AR), sport (OR), girl (ER), dark (AR), horse (OR), hurt (ER), barn (AR), morning (OR), fern (ER).",
              "The AR and OR categories are distinctive. ER/IR/UR sound the same — child just needs to recognize the /er/ sound, not distinguish between spellings.",
              "Challenge: say a made-up word with a Bossy R sound. Child identifies which category: 'blork' (OR), 'flarm' (AR), 'blirm' (ER). This is phonemic awareness at a high level!"
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Introduce Diphthongs: OW/OU and OI/OY",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet OW/OU (as in 'cow' / 'cloud')",
            materials: "Paper, pen, new digraph cards",
            steps: [
              "Say: 'Some vowel sounds MOVE — your mouth starts in one position and glides to another. These are called diphthongs (you don't need to remember that word, just the sounds!).'",
              "Write 'ow' on a card. Say: 'OW can say /ow/ — like when something hurts: OW! Feel how your mouth moves from open /a/ to rounded /oo/.' Practice 5 times.",
              "IMPORTANT: OW makes TWO sounds! /ow/ as in 'cow' AND /oh/ as in 'snow'. For now, focus on the /ow/ sound. Tell child: 'If one sound doesn't make a real word, try the other one!'",
              "OW words (/ow/ sound): cow, how, now, wow, bow, down, town, brown, crown, frown, crowd, growl, owl, power, tower, flower.",
              "Write 'ou' on a card. 'OU also says /ow/! Different spelling, same sound.' Words: out, our, loud, cloud, proud, house, mouse, about, around, count, found, ground, mouth, sound, shout, pouch.",
              "Sentences: 'The brown cow ran around the house.' 'I found a loud owl in the town.' Child reads."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Meet OI/OY (as in 'coin' / 'boy')",
            materials: "Paper, pen, new digraph cards",
            steps: [
              "Write 'oi' on a card. Say: 'OI says /oi/ — like in COIN or OIL! Feel your mouth glide from /o/ to /i/.' Practice 5 times.",
              "Write 'oy' on a card. 'OY makes the same sound! Different spelling, same sound — just like ER/IR/UR.' Practice 5 times.",
              "Helpful pattern: OI usually appears in the MIDDLE of words, OY usually appears at the END. This helps with spelling later.",
              "OI words: oil, coin, join, point, noise, voice, moist, choice, toilet, poison, boil, soil, foil, coil.",
              "OY words: boy, toy, joy, enjoy, royal, destroy, employ, annoy, loyal.",
              "Mixed sentences: 'The boy found a coin in the moist soil.' 'I enjoy the sound of rain on the roof.' Child reads.",
              "Make cards for ow, ou, oi, oy. Add to collection. Quick flash of all new patterns from this week: ar, or, er, ir, ur, ow, ou, oi, oy."
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Sight Words and Extended Reading",
        lessons: [
          {
            method: "Sight Words",
            duration: "10 min",
            title: "New Sight Words: 'would', 'could', 'should', 'because'",
            materials: "Index cards, pen",
            steps: [
              "Review previous sight words (quick flash of all 27).",
              "Introduce 'would': 'W-O-U-L-D. This word has a silent L! WOULD.' The 'ould' pattern appears in all three new words. Practice 5 times.",
              "Introduce 'could' and 'should': same pattern — silent L, 'ould' says /ood/. Practice each 5 times.",
              "Introduce 'because': 'B-E-C-A-U-S-E. This is a long one! Be-CAUSE. The tricky part is the AU saying /aw/ or /u/.' Practice 5 times.",
              "Flash all 31 sight words. Child should now have a substantial instant-recognition vocabulary."
            ]
          },
          {
            method: "Synthetic Phonics / Fluency",
            duration: "20 min",
            title: "R-Controlled and Diphthong Passage",
            materials: "Paper, pen",
            steps: [
              "Write this passage:\n\n'The Farm at Morning\nMark woke up at the farm when the birds started to sing.\nHe could see the barn from his window. The horse was in the yard.\n\"First I should do the morning chores,\" he said.\nHe went to the garden and turned the dark soil.\nA worm curled around his fork! \"Ow!\" he said, because it gave him a fright.\nThen he heard a loud noise from the barn. The cow was making a fuss!\nMark went to the barn and found her with a new calf.\n\"What a joy!\" Mark said with a proud grin.\nThe little calf had brown and white fur.\nMark would call her Star, because of the mark on her forehead.'",
              "Pre-teach: 'woke', 'window', 'chores', 'worm', 'fright', 'calf', 'forehead', 'little' — tell the child these words before reading begins.",
              "Child reads the passage. This is rich with R-controlled vowels and diphthongs — exactly the week's learning applied in context.",
              "Comprehension: 'What time of day is it?', 'What surprised Mark in the garden?', 'What was the loud noise?', 'Why did Mark name the calf Star?', 'How do you think Mark felt at the end?'"
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "Week 9 Review and Chapter Book",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "R-Controlled and Diphthong Review",
            materials: "All digraph cards",
            steps: [
              "Flash all vowel pattern cards: ai, ee, oa, oo, ar, or, er, ir, ur, ow, ou, oi, oy. Child says the sound for each.",
              "Mixed word reading (12 words): storm, train, boil, crown, nurse, float, dark, shout, point, green, church, growl. Child reads each.",
              "Dictation: say 4 words — child writes them: farm, bird, coin, town. This tests their ability to choose the right spelling for R-controlled vowels and diphthongs."
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "Chapter Book — Chapter 2",
            materials: "The chapter book started in Week 8, pen, crayons",
            steps: [
              "Pull out the chapter book from Week 8. Reread Chapter 1 together.",
              "Ask: 'What happens next to [main character]? Do they go on an adventure? Meet someone new? Find something?' Child dictates Chapter 2.",
              "Write it down (aim for 5-7 sentences — longer than Chapter 1!). Child illustrates.",
              "Read Chapters 1 and 2 together. Ask: 'What do you think will happen in Chapter 3?'",
              "This narrative planning (What happens next? Building suspense) is developing story structure understanding that supports reading comprehension."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Making Connections Read-Aloud",
            materials: "A picture book with a theme the child can relate to (friendship, a new experience, being brave, feeling different)",
            steps: [
              "Read the book together. This time, focus on THREE types of connections:\n1. Text-to-Self: 'Has something like this ever happened to YOU?'\n2. Text-to-Text: 'Does this remind you of any other book we've read?'\n3. Text-to-World: 'Does this remind you of something you've seen in real life or on TV?'",
              "Model each type first: 'This reminds ME of when I [share a personal connection]. That's a text-to-self connection!'",
              "After reading, ask child to share one connection of any type. Write it down: '[Child's name]'s connection: This book reminded me of...' These can be posted near the reading corner.",
              "Making connections is one of the most important comprehension strategies — it transforms reading from decoding into meaning-making."
            ]
          }
        ]
      }
    ]
  },
  {
    week: 10,
    title: "Magic E & Advanced Vowel Patterns",
    focus: "The 'Magic E' (split digraph) pattern: a_e, i_e, o_e, u_e. This is the other major way English creates long vowel sounds. Also introducing common word endings: -ed, -ing, -er, -est.",
    days: [
      {
        day: "Monday",
        theme: "Introduce Magic E with A and I",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "20 min",
            title: "Magic E — The Silent Helper!",
            materials: "Paper, pen, letter cards including 'e'",
            steps: [
              "Say: 'Today we meet Magic E! The E sits at the end of a word and doesn't make a sound — but it has MAGIC POWER. It reaches over the consonant and makes the vowel say its NAME!'",
              "Demonstrate with letter cards: lay out C-A-P. 'This says... cap!' Now add E to the end: C-A-P-E. 'The E is silent, but it changes the A from /a/ to /ay/. Now it says... CAPE!' Act amazed.",
              "Do more A_E transformations (write each pair): cap → cape, tap → tape, mat → mate, mad → made, can → cane, plan → plane, pan → pane, hat → hate, at → ate, rat → rate, fad → fade, man → mane, Sam → same, van → vane, pal → pale, gap → gape.",
              "For each pair, say: 'Without Magic E: [short vowel word]. WITH Magic E: [long vowel word]! The E makes A say its name!'",
              "Now I_E: write these transformations: kit → kite, bit → bite, rip → ripe, hid → hide, dim → dime, fin → fine, pin → pine, Tim → time, win → wine, trip → tripe, shin → shine, slim → slime, grip → gripe.",
              "Sentences: 'I came to make a cake at the lake.' 'She can ride the bike on a fine line.' Child reads."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Magic E with O and U, Plus Review",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Magic E with O_E and U_E",
            materials: "Paper, pen",
            steps: [
              "Review A_E and I_E quickly: write 'late, shine, blame, drive' — child reads all four.",
              "O_E transformations: hop → hope, not → note, cod → code, rob → robe, rod → rode, mop → mope, cop → cope, ton → tone, con → cone, bon → bone. Plus: home, hole, pole, role, sole, stove, broke, spoke, smoke, those, stone, phone, throne.",
              "U_E: this one is slightly different — the long U can say /yoo/ (as in 'cute') or /oo/ (as in 'rude'). Words: use, fuse, muse, mute, cute, tube, tune, June, rule, rude, flute, prune. Just teach both sounds casually.",
              "BIG comparison chart — write these columns on paper for child to read across:\nShort a / Long a: cap/cape, hat/hate, tap/tape, can/cane\nShort i / Long i: kit/kite, bit/bite, fin/fine, pin/pine\nShort o / Long o: hop/hope, not/note, rob/robe, cod/code\nShort u / Long u: tub/tube, cub/cube, cut/cute, us/use",
              "Child reads each pair, noting how Magic E changes the vowel sound. This comparison is gold for vowel awareness."
            ]
          },
          {
            method: "Multisensory / Kinesthetic",
            duration: "10 min",
            title: "Magic E Wand",
            materials: "A pencil, stick, or rolled-up paper (the 'wand'), letter cards",
            steps: [
              "Give child a 'Magic E wand' (any stick-like object). Lay out a CVC word with letter cards: H-O-P.",
              "Child reads: 'hop.' Then they wave the wand and place an 'e' card at the end. They say: 'Magic E makes O say its name!' and read: 'hope!'",
              "Do this with 8-10 CVC → CVCe pairs. The physical act of waving the wand and placing the E creates a strong memory anchor.",
              "Reverse challenge: start with the Magic E word (e.g., 'cape'). Child removes the E with the wand and reads the short vowel word ('cap'). They need to switch BACK to the short vowel sound — this is harder than going the other direction."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Common Word Endings: -ED, -ING",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "20 min",
            title: "The -ED Ending (Three Sounds!)",
            materials: "Paper, pen",
            steps: [
              "Say: 'When we add -ED to a word, it means something already happened — in the past! But -ED is sneaky — it makes THREE different sounds depending on the word.'",
              "Sound 1: /t/ — after unvoiced consonants (p, k, f, s, sh, ch). Words: jumped (/jumpt/), kicked (/kikt/), stuffed (/stuft/), kissed (/kist/), pushed (/pusht/), watched (/wocht/).",
              "Sound 2: /d/ — after voiced consonants and vowels (b, g, m, n, l, r, v, z, and vowels). Words: rubbed (/rubd/), hugged (/hugd/), hummed (/humd/), trained (/traynd/), called (/calld/), stirred (/sterd/).",
              "Sound 3: /id/ — after /t/ or /d/ sounds. Words: wanted (/wont-id/), needed (/need-id/), planted (/plant-id/), painted (/paynt-id/), landed (/land-id/).",
              "Don't overwhelm child with these rules — instead, read lots of -ED words and let them hear the patterns. Say: 'Your mouth will naturally pick the right sound. Try all three if you're not sure!'",
              "Practice reading: walked, rained, shouted, helped, played, started, fixed, smiled, danced, pointed."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "The -ING Ending",
            materials: "Paper, pen",
            steps: [
              "Say: '-ING means something is happening RIGHT NOW. It uses the /ng/ digraph we learned in Week 7!'",
              "Add -ING to known words: run → running, jump → jumping, sit → sitting, fish → fishing, rain → raining, cook → cooking, look → looking, read → reading, help → helping, shout → shouting.",
              "Note the spelling rule casually: 'Sometimes we double the last letter before adding -ING. Run becomes r-u-n-n-i-n-g. Sit becomes s-i-t-t-i-n-g.' Don't drill this rule — just mention it so they see it in print.",
              "Sentences with both -ED and -ING: 'I was running and then I stopped.' 'She started painting and made a green tree.' 'He was jumping and then landed hard.' Child reads each."
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Common Endings: -ER, -EST, and Compound Words",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "-ER (comparison) and -EST (superlative)",
            materials: "Paper, pen",
            steps: [
              "Say: '-ER means MORE of something. -EST means the MOST. Watch: big, bigger, biggest!' Write all three, pointing out the pattern.",
              "Practice sets (write all three forms, child reads across):\nfast → faster → fastest\ntall → taller → tallest\nshort → shorter → shortest\nlong → longer → longest\ncold → colder → coldest\nbright → brighter → brightest\nsweet → sweeter → sweetest\nloud → louder → loudest",
              "Ask child to use each form in a sentence: 'The tree is tall. The building is taller. The mountain is the tallest!' This connects the grammar concept to real understanding.",
              "Note: there are irregular comparisons (good → better → best, bad → worse → worst). Mention these casually: 'Some words are tricky and don't follow the pattern. We say BETTER, not GOODER!'"
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Compound Words — Two Words in One!",
            materials: "Paper, pen, scissors",
            steps: [
              "Say: 'Some big words are actually TWO small words stuck together. If you can read the small words, you can read the big word!'",
              "Write these compound words in large print. Draw a line between the two parts. Child reads each part, then the whole word:\nsun + set = sunset\nrain + coat = raincoat\nfoot + ball = football\nbed + room = bedroom\nair + port = airport\nbook + shelf = bookshelf\nstar + fish = starfish\nlight + house = lighthouse\ndown + stairs = downstairs\nwith + out = without",
              "Compound word hunt: cut up 10 paper strips, each with one word that forms part of a compound word. Child matches the strips to create compound words. Example strips: 'cup' + 'cake', 'pop' + 'corn', 'tooth' + 'brush', 'rain' + 'bow', 'dog' + 'house'.",
              "Sentences: 'I got a sunburn at the football match.' 'She went downstairs to the bookshelf.' Child reads."
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "Week 10 Review and Chapter Book",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Magic E and Endings Review",
            materials: "Paper, pen",
            steps: [
              "CVC vs CVCe pairs (child reads both): tap/tape, kit/kite, hop/hope, cub/cube, bit/bite, not/note, pin/pine, cap/cape.",
              "Words with endings: jumping, painted, brightest, running, started, louder, fishing, landed.",
              "Compound words: moonlight, backpack, earthquake, popcorn, afternoon. Child reads each, identifying the two words inside."
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "Chapter Book — Chapter 3 (The Finale!)",
            materials: "The chapter book, pen, crayons, stapler",
            steps: [
              "Reread Chapters 1 and 2 together.",
              "Ask: 'How does the story end? What happens to [character]? Do they solve the problem? Go home? Learn something?' Child dictates the final chapter. Encourage a satisfying ending.",
              "Write Chapter 3 (aim for 6-8 sentences). Child illustrates. Add a 'The End' page with a special illustration.",
              "Bind the complete book. Read the entire book from cover to cover. THIS IS A HUGE ACHIEVEMENT — they authored a multi-chapter book! Celebrate accordingly."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Questioning Strategy Read-Aloud",
            materials: "Any picture book new to the child",
            steps: [
              "Introduce the comprehension strategy of questioning: 'Good readers ask themselves questions WHILE they read. It helps your brain stay active and curious.'",
              "Model: before reading, look at the cover and say: 'I wonder why [something from the cover]? I wonder if [prediction]?' Write your questions on sticky notes or a paper.",
              "Read the first half of the book. Pause: 'Do we have answers to our questions yet? Any new questions?' Child generates at least one question of their own.",
              "Read the rest. After: 'Which questions got answered? Any that didn't?' Unanswered questions are great — they spark curiosity and could lead to future reading or research.",
              "This strategy transfers directly to independent reading — children who question as they read comprehend significantly more."
            ]
          }
        ]
      }
    ]
  },
  {
    week: 11,
    title: "Fluency, Expression & Comprehension Strategies",
    focus: "Shifting emphasis from decoding (which should be becoming more automatic) to fluency and comprehension. Children begin reading with expression, phrasing, and deeper understanding.",
    days: [
      {
        day: "Monday",
        theme: "Reading with Expression (Prosody)",
        lessons: [
          {
            method: "Synthetic Phonics / Fluency",
            duration: "20 min",
            title: "Voice Signals: Punctuation as Reading Directions",
            materials: "Paper, pen",
            steps: [
              "Say: 'Punctuation marks are like signs that tell us HOW to read. They're the author's way of telling you what voice to use!'",
              "Period (.): 'A period means STOP. Your voice goes down slightly at the end. Listen: The dog is big. (voice drops slightly on 'big.')' Child practices reading 3 sentences with periods, making their voice go down at the end.",
              "Question mark (?): 'A question mark means your voice goes UP at the end — like you're curious! Listen: Is the dog big? (voice rises on 'big?')' Child reads 3 questions with rising intonation.",
              "Exclamation mark (!): 'An exclamation mark means READ IT WITH ENERGY! It could be excitement, surprise, or strong feeling. Listen: The dog is SO big! (voice is emphatic)' Child reads 3 exclamatory sentences.",
              "Mixed practice — write these sentences, child reads with correct intonation:\n'The frog jumped into the pond.' (period — voice down)\n'Did the frog jump into the pond?' (question — voice up)\n'The frog jumped into the pond!' (exclamation — voice energetic)\n'What a big splash that was!' (exclamation)\n'Was the water cold?' (question)\n'It was very cold.' (period)",
              "Dialogue practice — write: 'Mum said, \"Stop running!\"\n\"But why?\" asked Tom.\n\"Because it is too dark,\" said Mum.' Read it together, using different voices for each character."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Phrase Reading vs. Word-by-Word Reading",
        lessons: [
          {
            method: "Fluency",
            duration: "15 min",
            title: "Scooping Phrases",
            materials: "Paper, pen, a pencil for 'scooping'",
            steps: [
              "Say: 'When we first learned to read, we read one word at a time: The... dog... ran... fast. But now we can start reading in GROUPS of words — like how we talk! We don't say 'I — went — to — the — store.' We say 'I went / to the store.' Reading this way sounds better and helps us understand more.'",
              "Write this passage with slash marks showing phrase breaks:\n'The little girl / ran to the park / with her big dog. / She threw the ball / as far as she could. / The dog raced after it / and came back / with a huge grin.'",
              "Model reading the passage in phrases (group the words between slashes). Then child reads it, pausing slightly at each slash.",
              "Rewrite the passage WITHOUT slashes. Child reads again, now making their own phrase decisions. Praise any grouping — even if it's not perfect, the shift from word-by-word to phrasal reading is a major milestone.",
              "Second passage WITHOUT pre-marked phrases:\n'On Saturday morning Mark and his dad went fishing at the lake. They got up very early and packed the car with rods and snacks. The sun was just coming up when they got to the water. It was the best morning Mark had all summer.'\nChild reads, grouping words naturally."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Echo Reading for Fluency",
            materials: "A picture book or the passage from above",
            steps: [
              "Echo reading: You read one sentence with expression, phrasing, and appropriate speed. Then child 'echoes' you — reading the same sentence, trying to match your style.",
              "Do this for a full page or passage (8-10 sentences). The child hears fluent reading immediately before attempting it themselves, which provides a clear model.",
              "Variation — Choral reading: read TOGETHER at the same time. You set the pace and expression; child follows along. This is less intimidating than solo reading and builds confidence.",
              "After echo or choral reading, child reads the passage once more SOLO. The improvement from the start of the session to this final read will be noticeable."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Comprehension Strategies: Visualization and Summarizing",
        lessons: [
          {
            method: "Comprehension",
            duration: "15 min",
            title: "Making a Mind Movie (Visualization)",
            materials: "Paper, crayons/pencils",
            steps: [
              "Say: 'Good readers make PICTURES in their minds when they read — like a movie playing in your head! This is called visualization. Let's try it.'",
              "Read this passage aloud (child does NOT see the text): 'The old castle stood on top of a green hill. Its tall towers reached into the grey clouds. A long bridge crossed over the deep blue water around it. At the front gate stood a tiny kitten, meowing loudly.'",
              "Ask child to close their eyes and describe what they 'see' in their mind. Prompt: 'What color is the castle? How big is the hill? What does the water look like? Where is the kitten?'",
              "Have child DRAW what they visualized. There are no wrong answers — different readers see different things.",
              "Now show them the text. Child reads it themselves. Ask: 'Does it match what you drew? Would you change anything?' This teaches that visualization happens naturally during reading.",
              "Practice with a second passage that child reads themselves: 'The forest was dark and quiet. Tall trees blocked the sunlight. Soft green moss covered the ground. A red fox stepped out from behind a rock, sniffing the cool morning air.' Child draws their mind movie."
            ]
          },
          {
            method: "Comprehension",
            duration: "15 min",
            title: "Summarizing: Somebody-Wanted-But-So-Then",
            materials: "A picture book the child knows well, paper, pen",
            steps: [
              "Teach the SWBST framework for summarizing stories: 'Every story can be summed up with: SOMEBODY wanted something, BUT there was a problem, SO they did something, THEN it worked out (or didn't!).'",
              "Model with a familiar story. Example with 'The Three Little Pigs': 'SOMEBODY: Three pigs. WANTED: Safe houses. BUT: A wolf wanted to blow them down. SO: The third pig built with bricks. THEN: The wolf couldn't blow it down and the pigs were safe!'",
              "Now do it with a book child has recently read. Help them fill in each part. Write it down.",
              "This is a VERY powerful comprehension tool. With practice, children will automatically organize stories this way in their heads while reading, dramatically improving recall and understanding.",
              "Try with one more story. This time, child tries to do it with less help. Even partial summaries are great at this stage."
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Independent Reading and Sight Word Mastery",
        lessons: [
          {
            method: "Sight Words",
            duration: "10 min",
            title: "Final Sight Word Push: 'very', 'after', 'again', 'little', 'just', 'know'",
            materials: "Index cards, pen",
            steps: [
              "Quick review of all 31 previous sight words. By now most should be instant.",
              "Add 6 more high-frequency words: very, after, again, little, just, know. These are all words that appear constantly in children's literature.",
              "For 'know': 'The K is silent! K-N-O-W. The KN pattern — the K is there but we don't say it. KNOW.' Other KN words: knee, knit, knock, knife, knight.",
              "Flash all 37 sight words. Sort into mastered (instant) and review (more than 1 second). The goal by end of Week 12: instant recognition of all 37+."
            ]
          },
          {
            method: "Fluency / Independent Reading",
            duration: "20 min",
            title: "Sustained Independent Reading",
            materials: "2-3 decodable readers or easy picture books at child's reading level (e.g., Bob Books Set 2-3, or early leveled readers)",
            steps: [
              "This is a milestone moment: child reads an entire book (or most of it) INDEPENDENTLY. Choose a book at their comfortable level — one where they can read at least 90% of the words without help.",
              "Set up a cozy reading spot. Say: 'Today you're reading on your own — like a real reader! I'll be right here if you need help.'",
              "Child reads the book. Sit nearby and listen, but don't jump in unless they ask or struggle for more than 5 seconds on a word.",
              "After reading: 'Tell me about the book! What happened?' Let child summarize freely. Then ask: 'What was your favorite part? Was anything confusing?'",
              "If child finishes quickly and wants more, have another book ready. Independent reading stamina builds with practice. Start with 5-10 minutes of sustained reading and build up."
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "Week 11 Review: Comprehension and Fluency Showcase",
        lessons: [
          {
            method: "Fluency",
            duration: "15 min",
            title: "Performance Reading",
            materials: "A short passage or poem the child has practiced this week",
            steps: [
              "Choose a passage the child has read multiple times this week (familiarity builds fluency). They will 'perform' it — reading aloud as beautifully as they can.",
              "Before the performance: do one final rehearsal read. Coach on expression: 'Can you make your voice go up for the question? Can you sound excited here? Can you read these words a bit faster because the character is rushing?'",
              "The performance: child reads to you (and any willing family members — the more audience, the more motivating). You could even record it on your phone.",
              "After: genuine, specific praise. Not just 'Good job!' but 'I loved how you made your voice go up when the character asked a question!' or 'You read that part about the storm really fast — it made it feel exciting!'",
              "Compare this to their reading in Week 1 or 2. The improvement will be staggering. Let them hear the difference if you have recordings."
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "Book Review",
            materials: "Paper, pen, crayons",
            steps: [
              "New type of writing: a book review! Ask about a book child recently read or heard: 'What was the book called? What was it about? Did you like it? Would you tell a friend to read it? What stars would you give it out of 5?'",
              "Write their review in clear print. Include: title, what it's about (1-2 sentences), opinion (1-2 sentences), star rating. Child draws the book cover.",
              "Read the review together. Say: 'This is what real book reviewers do! Newspapers and websites have reviews just like this.' This introduces a new text type beyond narratives.",
              "Post the review on the reading wall or in the Story Collection."
            ]
          }
        ]
      }
    ]
  },
  {
    week: 12,
    title: "Celebration, Assessment & Reading Independence",
    focus: "The final week brings everything together: a comprehensive (but stress-free) assessment, independent reading confidence, and a major celebration of 12 weeks of incredible progress.",
    days: [
      {
        day: "Monday",
        theme: "Cumulative Phonics Review",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "20 min",
            title: "The Grand Sound Review",
            materials: "All letter and digraph cards, paper, pen",
            steps: [
              "Flash EVERY card: 26 individual letters + all digraph/vowel pattern cards (sh, ch, th, ng, ai, ee, oa, oo, ar, or, er, ir, ur, ow, ou, oi, oy). That's approximately 40+ cards. Child says each sound. Time the full run.",
              "Magic E review: write 8 CVCe words: cake, bike, hope, cube, flame, stripe, stone, flute. Child reads each.",
              "Word endings review: write 8 words with endings: jumping, painted, loudest, faster, running, landed, brightest, fishing. Child reads each.",
              "Grand word challenge — 20 words spanning all concepts learned:\n1. splash (blend + digraph)\n2. train (vowel digraph)\n3. church (digraph + R-controlled)\n4. moonlight (compound + oo)\n5. stripe (blend + Magic E)\n6. shouted (-ed ending)\n7. pointing (-ing ending)\n8. brightest (-est ending)\n9. cornfield (compound + R-controlled)\n10. destroyer (diphthong + ending)\n11. playground (compound + diphthong)\n12. thunderstorm (compound + digraph + R-controlled)\n13. lunchtime (compound + digraph)\n14. starfish (compound + R-controlled)\n15. footprint (compound + oo)\n16. painting (-ing + vowel digraph)\n17. outside (diphthong + Magic E)\n18. springtime (blend + compound)\n19. birthday (R-controlled + digraph)\n20. raincoat (vowel digraph + compound)",
              "Child reads as many as they can. Help with any stumbles. Celebrate EVERY word they get — these are complex, multi-pattern words!"
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Comprehensive Assessment (Stress-Free)",
        lessons: [
          {
            method: "Assessment",
            duration: "25 min",
            title: "12-Week Progress Assessment",
            materials: "Paper, pen, timer (phone), all flash cards",
            steps: [
              "Frame this positively: 'Today we're going to see how much you've learned in 12 weeks! This is going to be FUN because you know SO much now.' This is NOT a test — it's a celebration of growth.",
              "Part 1 — Letter Sounds (2 min): flash all 26 letter cards. Record: instant (✓), slow (△), incorrect (✗). Most should be instant by now. Target: 24+ instant.",
              "Part 2 — Digraphs & Vowel Patterns (3 min): flash all digraph/pattern cards (sh, ch, th, ng, ai, ee, oa, oo, ar, or, er, ow, ou, oi, oy, plus Magic E concept). Record results. Target: 10+ instant.",
              "Part 3 — Word Reading (5 min): write these 20 words (no help, no hints): cat, shop, train, drive, church, moon, farm, shout, coin, cake, jumped, running, biggest, footprint, raincoat, birthday, grandmother, thunderstorm, playground, understand. Record which are read correctly.",
              "Part 4 — Sight Words (3 min): flash all 37 sight word cards. Record instant recognition. Target: 30+ instant.",
              "Part 5 — Passage Reading (5 min): child reads a passage cold (not previously seen):\n'It was a bright morning in spring. A little bird sang a sweet song on top of the tallest tree. A girl named Rose heard the bird and ran outside. She looked up and saw its red and yellow wings shining in the sunlight. \"What a beautiful bird!\" she said. She wished she could fly just like it — high above the rooftops, over the river, past the green hills. But then the bird flew down and landed right on her hand! Rose smiled the biggest smile. She did not need to fly. The bird had come to her.'\nNote: fluency (word-by-word vs. phrases), accuracy, expression.",
              "Part 6 — Comprehension (3 min): Ask about the passage: 'What happened in the story?', 'How did Rose feel?', 'Why did she smile at the end?', 'What do you think happened next?'",
              "Record everything for your own reference. Share only positives with the child."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Addressing Gaps and Strengthening Skills",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Personalized Review Based on Assessment",
            materials: "Assessment results from Tuesday, relevant cards and materials",
            steps: [
              "Look at yesterday's assessment results. Identify the 3-5 areas where child needs the most support. Create a personalized review session focusing on these specific skills.",
              "If letter sounds need work: extra practice with the specific sounds that were slow or incorrect. Use multisensory approaches — salt tray, sky writing.",
              "If digraphs are weak: focused word building with the specific digraphs that need reinforcement.",
              "If sight words need work: intensive flash card practice with the 'Look-Say-Cover-Write-Check' method for the specific words that aren't instant.",
              "If fluency is the main gap: repeated reading of the assessment passage or another passage at their level.",
              "If comprehension needs support: re-read the passage and practice the SWBST summary method.",
              "This personalized session ensures no child 'graduates' with unaddressed gaps."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Reading a Slightly Harder Book Together",
            materials: "A book slightly above child's independent reading level (their 'instructional level' — where they can read 80-90% of words with some help)",
            steps: [
              "Choose a book that stretches the child — more words on the page, more complex sentences, some unfamiliar words. This is the NEXT level they're growing toward.",
              "Read it together using partner reading: you read a page, they read a page. On their pages, help with tricky words after 5 seconds.",
              "After the book: 'That book was harder, right? But you read so much of it! In a few more weeks, books like this will feel easy.' This gives them a concrete vision of where they're headed.",
              "Let child choose 1-2 words from the book to add to the Word Collector wall."
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Building a Reading Routine for the Future",
        lessons: [
          {
            method: "Fluency / Independent Reading",
            duration: "20 min",
            title: "Extended Independent Reading",
            materials: "3-4 books at child's comfortable reading level",
            steps: [
              "Set a timer for 15-20 minutes. Child reads independently, choosing from a selection of books you've provided. This is 'real reading time' — quiet, comfortable, uninterrupted.",
              "Your role: sit nearby and read your own book (modeling that reading is a normal, enjoyable adult activity too). Be available if needed but don't hover.",
              "After the timer: 'What did you read about? Tell me the best part.' This brief conversation check maintains accountability without making reading feel like homework.",
              "If child finishes a book and wants to talk about it: great! If they want to immediately start another: even better! The goal is to build the HABIT of sustained reading.",
              "Discuss the plan going forward: 'We've done 12 weeks of reading lessons. Now the most important thing is to keep reading every day. Let's make a plan!' Set a daily reading time (even 10-15 minutes) that becomes a non-negotiable part of the routine."
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "Letter to Future Self",
            materials: "Special paper or card stock, pen, envelope",
            steps: [
              "Help child write (or dictate) a letter to their future self — to be opened in 6 months or a year. Prompt questions: 'What can you read now? What's your favorite book? What was hard to learn? What are you proud of?'",
              "Write their words on nice paper. Child signs their name and draws a picture.",
              "Seal it in an envelope. Write the date to open it on the front. This creates a tangible time capsule of their reading journey.",
              "When they open it later, they'll be amazed at how much more they can read and write — and they'll have a record of this special time."
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "The Grand Celebration! 🎉",
        lessons: [
          {
            method: "Celebration",
            duration: "15 min",
            title: "The Reading Portfolio Showcase",
            materials: "ALL stories, books, and work created over 12 weeks; the chapter book; the Story Collection; the letter to future self",
            steps: [
              "Gather EVERYTHING child has created over 12 weeks: all stories from the Story Collection, the chapter book, the Reading Journey Book from Week 4, the A to Z page, the book review, and the letter to future self.",
              "Arrange these in chronological order. Look at Week 1's work versus Week 12's. The difference will be extraordinary — from single letters and simple CVC words to complex passages and authored stories.",
              "Count together: 'How many stories did you write? How many books did you read? How many sounds do you know? How many words can you read?' Make these numbers concrete and visible.",
              "Create a 'Reading Certificate' together. Write: '[Child's name] has completed 12 weeks of reading instruction. They can read [X] letter sounds, [X] sight words, and hundreds of words. They have written [X] stories and [X] books. They are officially a READER!' Child decorates it. Sign it together."
            ]
          },
          {
            method: "Celebration",
            duration: "15 min",
            title: "Read to Your Favorite Audience",
            materials: "Child's best / favorite piece of writing, a favorite book they can read",
            steps: [
              "Arrange a 'reading performance' for family members — in person, on a video call, or recorded. The more audience, the better.",
              "Child reads: (1) their favorite self-authored story or chapter from their book, and (2) a few pages from a favorite book they can read independently.",
              "After the reading: audience applauds. Specific praise from each listener: 'I loved when you read the part about...' or 'Your story about the dragon was amazing because...'",
              "End with a special celebration: a trip to the library for new books, a bookstore visit where child chooses a book, a special treat, or simply a heartfelt conversation about how proud you are.",
              "Final message to the child: 'You worked really hard and you learned something incredible — you can READ. Every book in the world is now a door you can open. I can't wait to see what you'll read next.'"
            ]
          },
          {
            method: "Planning",
            duration: "10 min",
            title: "What Comes Next: A Parent Roadmap",
            materials: "Paper, pen (this is for the PARENT, not the child)",
            steps: [
              "While child plays or looks at their new books, take 10 minutes to plan the next phase:",
              "1. DAILY READING: Establish a 15-20 minute daily reading routine — child reads independently from decodable/leveled readers, plus a parent read-aloud at bedtime or another time.",
              "2. LIBRARY VISITS: Weekly library visits. Let child choose books freely (even if they seem 'too easy' — rereading builds fluency and confidence). Also choose 1-2 books slightly above their level for read-aloud time.",
              "3. PHONICS GAPS: Review your assessment notes. Any sounds or patterns that aren't solid yet need continued practice. 5 minutes of review per day is enough.",
              "4. NEXT PHONICS STEPS: When ready, move to more advanced patterns: silent letters (know, write, lamb), soft c and g (city, gem), vowel teams (ea, ie, igh), suffixes (-tion, -ness, -ful, -ly).",
              "5. WRITING: Continue encouraging child to write — stories, lists, labels, letters to friends/family. Invented spelling is still fine and normal. Spelling accuracy improves with reading volume.",
              "6. COMPREHENSION: Keep using the strategies taught in Weeks 11-12: visualization, summarizing (SWBST), questioning, and making connections. These need ongoing practice."
            ]
          }
        ]
      }
    ]
  }
];

const TEACHING_METHODS = [
  {
    id: "synthetic-phonics",
    name: "Synthetic Phonics",
    tagline: "The backbone of this curriculum",
    color: "#E85D3A",
    icon: "🔤",
    what: "Synthetic phonics teaches children to read by learning the individual sounds (phonemes) that letters and letter combinations make, then blending those sounds together to read words. 'Synthetic' means 'putting together' — synthesizing individual sounds into whole words.",
    why: "It is the most evidence-backed method for early reading instruction. The UK adopted it nationally after a landmark 2005 study (the Clackmannanshire study) showed children taught with synthetic phonics were 3.5 years ahead in reading by age 11. It works because English is an alphabetic language — letters represent sounds — and teaching this code directly is the most efficient path to independent reading.",
    keyPrinciples: [
      "Teach sounds, not letter names (at first). 'S' says /s/, not 'ess.'",
      "Introduce letters in a deliberate order that allows word-building early (s, a, t, p, i, n before x, q, z).",
      "Blending: pushing individual sounds together to read words (/c/-/a/-/t/ → cat).",
      "Segmenting: pulling words apart into individual sounds (dog → /d/-/o/-/g/). This supports spelling.",
      "Move from simple CVC words (cat, dog) to blends (stop, grand) to digraphs (sh, ch, th) to longer words."
    ],
    whatToKnow: "Keep sounds 'pure' — say /s/ not 'suh', /t/ not 'tuh'. Adding a vowel sound makes blending much harder. When your child is blending, be patient — it takes time for the brain to automate this process. Expect choppy, sound-by-sound reading for weeks before it starts flowing. This is completely normal."
  },
  {
    id: "sight-words",
    name: "Sight Words / Heart Words",
    tagline: "Instant recognition for high-frequency words",
    color: "#5B8C5A",
    icon: "👁️",
    what: "Sight words are high-frequency words that children learn to recognize instantly, without needing to sound them out each time. Some (like 'the', 'said', 'to') are genuinely irregular and CAN'T be fully decoded with basic phonics rules. Others (like 'and', 'in', 'it') are decodable but appear so frequently that instant recognition dramatically improves reading fluency.",
    why: "The 100 most common English words make up about 50% of all written text. If a child can recognize these instantly, half the words in any book are already effortless, freeing up mental energy for decoding the remaining words. This is why a combined phonics + sight words approach is more effective than either alone.",
    keyPrinciples: [
      "Introduce 2-3 new sight words per week maximum. Overloading leads to confusion.",
      "Use multi-exposure practice: see it, say it, write it, use it in a sentence.",
      "Post sight words visibly (fridge, word wall) for passive daily exposure.",
      "For irregular words, the 'heart word' approach is helpful: identify which parts of the word ARE regular (the 'th' in 'the' follows phonics rules) and which parts the child needs to 'learn by heart' (the 'e' making an /uh/ sound).",
      "Review previously learned sight words regularly — spaced repetition cements them in long-term memory."
    ],
    whatToKnow: "Don't present sight words as 'words you can't sound out' — many of them CAN be partially or fully decoded. Instead, frame them as 'words we see so often that we want to know them super fast.' Also, there's a difference between 'Dolch words' and 'Fry words' — both are common sight word lists. Fry's list is based on frequency in actual text and is generally more useful."
  },
  {
    id: "dialogic-reading",
    name: "Dialogic Reading (Read-Alouds)",
    tagline: "Building comprehension and vocabulary through conversation",
    color: "#4A7FB5",
    icon: "📖",
    what: "Dialogic reading transforms story time from a passive listening experience into an active, conversational one. Instead of just reading TO the child, you read WITH them — asking questions, making connections, and encouraging the child to become the storyteller. It uses the PEER method: Prompt the child to say something, Evaluate their response, Expand on it, and Repeat (ask them to say the expanded version).",
    why: "Reading comprehension is the ultimate goal of learning to read, and it develops through rich language interaction. Children who experience dialogic reading show significantly greater gains in vocabulary, narrative skills, and comprehension compared to children who are simply read to. It also builds the love of stories that motivates children to keep reading.",
    keyPrinciples: [
      "Ask open-ended questions: 'What do you think will happen next?' rather than 'Is the cat sleeping?' (yes/no).",
      "Connect stories to the child's life: 'The boy lost his dog — have you ever lost something important?'",
      "Let the child 'read' pictures: 'Look at this page — tell me what's happening here.'",
      "Expand vocabulary: when a child says 'The dog is sad,' you might say 'Yes, the dog looks really lonely and dejected' — casually introducing richer language.",
      "Reread favorites! Children learn more from the 5th reading than the 1st. Each time, they can engage more deeply."
    ],
    whatToKnow: "Don't turn every reading session into an interrogation — some nights, just enjoy the story. Aim for dialogic reading 3-4 times per week, with pure enjoyment reading the other times. Also, choose books slightly above the child's reading level for read-alouds — THEY don't need to decode the words, so you can expose them to richer language and more complex stories."
  },
  {
    id: "language-experience",
    name: "Language Experience Approach (LEA)",
    tagline: "The child's own words become their reading material",
    color: "#9B59B6",
    icon: "✍️",
    what: "LEA uses the child's own spoken language as the basis for reading material. The child tells a story or shares an experience, the parent writes it down exactly as the child says it, and then they read it together. The child sees their own thoughts and words transformed into text — making the connection between spoken and written language deeply personal.",
    why: "It's powerful because the content is inherently meaningful and motivating to the child — these are THEIR words, THEIR stories. It also demonstrates that writing is just 'talk written down,' demystifying the reading process. Research shows LEA is particularly effective for building reading confidence and for children who struggle with phonics-only approaches, because it gives them immediate successful reading experiences.",
    keyPrinciples: [
      "Write the child's exact words — don't 'fix' grammar or vocabulary. If they say 'Me and my dog goed to the park,' write that.",
      "Read the story back together, pointing to each word. The child follows your finger and 'reads' along.",
      "Over time, the child will start recognizing words in their stories — these become personal sight words.",
      "Collect stories over time into a personal 'book' — children love rereading their own work.",
      "Use LEA stories for phonics practice too: 'Look, this word starts with the /d/ sound we learned!'"
    ],
    whatToKnow: "This isn't a standalone reading method — it works best alongside systematic phonics instruction. Think of it as the 'meaning and motivation' complement to the 'code and decoding' work of phonics. It's also a beautiful keepsake — children's dictated stories from ages 4-5 are often hilarious, creative, and surprisingly profound."
  },
  {
    id: "phonemic-awareness",
    name: "Phonemic Awareness",
    tagline: "Training the ear before the eye",
    color: "#E67E22",
    icon: "👂",
    what: "Phonemic awareness is the ability to hear, identify, and manipulate individual sounds (phonemes) in spoken words — without any letters or text involved. It's purely auditory. Can a child hear that 'cat' starts with /k/? Can they tell you that 'dog' and 'log' rhyme? Can they remove the /s/ from 'stop' and tell you the remaining word is 'top'? That's phonemic awareness.",
    why: "It's the single strongest predictor of reading success. Children who can't hear and manipulate sounds in spoken words will struggle to connect letters to those sounds. The good news: it can be trained quickly, and even a few minutes per day of phonemic awareness activities produces measurable gains. It's also the great equalizer — it requires no materials, no reading ability, and can be done anywhere (in the car, at dinner, on a walk).",
    keyPrinciples: [
      "Start with easier skills first: rhyming → identifying first sounds → blending → segmenting → manipulating (adding, deleting, substituting sounds).",
      "It's ALL oral — no letters needed. In fact, doing it without letters first can be more effective because it forces the child to really listen.",
      "Keep sessions short (5-10 minutes) but frequent (daily if possible).",
      "Use the child's name and familiar words — 'What sound does your name start with? What if we changed the /r/ in Ryan to /b/? BRIAN!'",
      "Celebrate effort and approximations — the skill develops gradually."
    ],
    whatToKnow: "Phonemic awareness is NOT the same as phonics. Phonics connects sounds to written letters. Phonemic awareness is about sounds only — no text required. However, they reinforce each other powerfully. If a child is struggling with phonics, go back and shore up phonemic awareness first. Also, most children naturally develop strong phonemic awareness by age 6, but starting at 4-5 gives them a significant head start."
  },
  {
    id: "multisensory",
    name: "Multisensory / Kinesthetic",
    tagline: "Learning through the body, not just the brain",
    color: "#E74C3C",
    icon: "🖐️",
    what: "Multisensory learning engages multiple senses simultaneously — seeing, hearing, touching, and moving — to strengthen memory and understanding. Instead of just looking at a letter and hearing its sound, a child might trace it in sand while saying the sound, form it with their body, write it in the air with big arm movements, or feel a textured letter with their fingers. The Orton-Gillingham approach is the most well-known multisensory reading method.",
    why: "Different children learn best through different sensory channels. Some are visual learners, some are auditory, some are kinesthetic (learn by doing/moving). Multisensory instruction doesn't require you to figure out your child's 'type' — it engages ALL channels at once, so every child benefits. It's also especially effective for children with dyslexia or other learning differences. Research consistently shows that multisensory instruction produces stronger, more durable learning.",
    keyPrinciples: [
      "Always combine at least 2 senses: say the sound (auditory) WHILE tracing the letter (kinesthetic + visual).",
      "Use varied textures: sandpaper, salt trays, finger paint, play-doh letters, pipe cleaners.",
      "Include whole-body movement: sky writing (writing large letters in the air with your arm), letter body shapes, hopping to sounds.",
      "Arm tapping for blending: touch shoulder, elbow, wrist as you say each sound, then slide your hand down your arm to blend.",
      "Repetition across different sensory modes: write it, trace it, build it, type it, say it, sing it."
    ],
    whatToKnow: "Multisensory doesn't mean 'messy and complicated.' A salt tray is just a plate of salt. Sky writing is just waving your arm. These techniques add maybe 2-3 minutes to a lesson but can dramatically improve retention, especially for letters or words a child keeps forgetting. Use multisensory methods strategically — for new concepts, tricky letters, or when a child is stuck."
  }
];

const RESOURCES = [
  {
    id: "first-100-sight-words",
    title: "First 100 Sight Words (Fry List)",
    description: "The 100 most common English words, in order of frequency. These 100 words make up roughly 50% of all written English. Teach the first 20-30 in the first few months; add more as the child masters earlier ones.",
    type: "reference",
    content: {
      groups: [
        {
          label: "Words 1-25 (Start here)",
          words: ["the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he", "was", "for", "on", "are", "as", "with", "his", "they", "I", "at", "be", "this", "have", "from"]
        },
        {
          label: "Words 26-50",
          words: ["or", "one", "had", "by", "word", "but", "not", "what", "all", "were", "we", "when", "your", "can", "said", "there", "each", "which", "she", "do", "how", "their", "if", "will", "up"]
        },
        {
          label: "Words 51-75",
          words: ["other", "about", "out", "many", "then", "them", "these", "so", "some", "her", "would", "make", "like", "him", "into", "time", "has", "look", "two", "more", "write", "go", "see", "number", "no"]
        },
        {
          label: "Words 76-100",
          words: ["way", "could", "people", "my", "than", "first", "water", "been", "call", "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get", "come", "made", "may", "part", "over", "new"]
        }
      ]
    }
  },
  {
    id: "letter-order",
    title: "Recommended Letter Introduction Order",
    description: "This order is used by many synthetic phonics programs because it allows children to start building real words almost immediately. The first 4 letters (s, a, t, p) combine to make: sat, tap, pat, at, sap — real reading in week 1!",
    type: "reference",
    content: {
      phases: [
        { phase: "Phase 1 (Weeks 1-2)", letters: "s, a, t, p, i, n, m, d", note: "High-frequency letters that combine into many CVC words" },
        { phase: "Phase 2 (Weeks 3-4)", letters: "g, o, c, k, e, r, h, b", note: "Adds short o and e, plus common consonants" },
        { phase: "Phase 3 (Weeks 5-6)", letters: "f, l, u, j, w, v, y, z, x, q", note: "Remaining letters including less common ones" },
        { phase: "Phase 4 (Weeks 7-8)", letters: "sh, ch, th, ng, ai, ee, oa, oo", note: "Consonant digraphs and first vowel digraphs" },
        { phase: "Phase 5 (Weeks 9-12)", letters: "ar, or, er, ow, oi, ear, air, ure", note: "R-controlled vowels and diphthongs" }
      ]
    }
  },
  {
    id: "books-by-level",
    title: "Recommended Book List by Stage",
    description: "Books carefully selected for each stage of development. Decodable readers for independent reading practice; rich picture books for read-aloud time.",
    type: "booklist",
    content: {
      categories: [
        {
          label: "Decodable Readers (child reads independently)",
          note: "These books use only the letter sounds the child has already learned. Critical for building decoding skills without frustration.",
          books: [
            { title: "Bob Books Set 1: Beginning Readers", author: "Bobby Lynn Maslen", note: "The gold standard. 12 tiny books using only a few letter sounds each. Start here." },
            { title: "Primary Phonics (Set 1)", author: "Barbara W. Makar", note: "Simple, no-frills decodable stories. Excellent progression." },
            { title: "Teach Your Child to Read in 100 Easy Lessons", author: "Engelmann, Haddox, Bruner", note: "Complete phonics program in one book. Great for parents who want a scripted approach." },
            { title: "Sounds Write Readers", author: "Sounds Write", note: "UK-based phonics readers that align well with the synthetic phonics approach used here." }
          ]
        },
        {
          label: "Read-Aloud Picture Books (parent reads, child listens and engages)",
          note: "Rich vocabulary and engaging stories for dialogic reading sessions. Choose books slightly above the child's own reading level.",
          books: [
            { title: "Chicka Chicka Boom Boom", author: "Bill Martin Jr.", note: "Alphabet book with rhythm and rhyme. Kids adore it." },
            { title: "Green Eggs and Ham", author: "Dr. Seuss", note: "Rhyming, repetition, and only 50 unique words. Great for word pattern recognition." },
            { title: "The Very Hungry Caterpillar", author: "Eric Carle", note: "Sequencing, counting, days of the week — packed with learning opportunities." },
            { title: "Where the Wild Things Are", author: "Maurice Sendak", note: "Rich vocabulary and emotional themes for deeper dialogic reading conversations." },
            { title: "Goodnight Moon", author: "Margaret Wise Brown", note: "Rhyming, repetition, and a calming bedtime ritual. Perfect for evening reading." },
            { title: "Owl at Home", author: "Arnold Lobel", note: "Five gentle, funny stories at a level that bridges read-alouds and early chapter books." }
          ]
        },
        {
          label: "Phonics-Supporting Books",
          note: "Books that reinforce specific phonics skills while still being enjoyable stories.",
          books: [
            { title: "Pig the Pug", author: "Aaron Blabey", note: "Short-vowel heavy, funny, and great for the -ig word family." },
            { title: "Hop on Pop", author: "Dr. Seuss", note: "Explicitly organized by word families. A parent-child reading classic." },
            { title: "Ten Apples Up on Top", author: "Dr. Seuss (as Theo. LeSieg)", note: "Repetitive structure with simple words. Building fluency through pattern." },
            { title: "Cat Traps", author: "Molly Coxe", note: "Simple CVC words, repetitive structure. Child can read much of this independently early on." }
          ]
        }
      ]
    }
  },
  {
    id: "daily-schedule",
    title: "Sample Daily Schedule",
    description: "A flexible framework for structuring your reading instruction time. Total: 25-35 minutes per day, which can be split into 2 sessions if attention spans are short.",
    type: "schedule",
    content: {
      blocks: [
        { time: "5 min", activity: "Review", detail: "Flash letter cards and sight word cards from previous lessons. Quick and energetic." },
        { time: "10-15 min", activity: "New Learning", detail: "Introduce new sounds, practice blending/segmenting, or teach new sight words. This is the focused instruction block." },
        { time: "5 min", activity: "Application", detail: "Read simple sentences or a short decodable passage using the new skills. Or do a writing activity." },
        { time: "10-15 min", activity: "Read-Aloud", detail: "Read a picture book together using dialogic reading techniques. This can happen at a different time of day (e.g., bedtime)." }
      ],
      tips: [
        "If the child is engaged and wanting more, keep going! If they're antsy after 10 minutes, stop and come back later.",
        "Consistency matters more than duration. 15 minutes every day beats 60 minutes twice a week.",
        "End every session on a success — even if you need to go back to something easy to end positively.",
        "The read-aloud doesn't have to happen at the same time as the phonics work. Bedtime is perfect for it.",
        "Take 1-2 days off per week. Young brains consolidate learning during rest."
      ]
    }
  },
  {
    id: "troubleshooting",
    title: "Common Challenges & Solutions",
    description: "Every child hits bumps in the road. Here's how to handle the most common ones.",
    type: "troubleshooting",
    content: {
      issues: [
        {
          problem: "Child confuses b and d",
          solution: "This is the most common early reading challenge. Use the 'bed' trick: child makes fists with thumbs up — left hand is 'b', right hand is 'd'. Together they spell 'bed.' Also, avoid introducing b and d in the same week. Practice writing each letter while saying a keyword: 'b for bat' (the stick is the bat, the round part is the ball) and 'd for drum' (the round part is the drum, the stick is the drumstick)."
        },
        {
          problem: "Child can sound out letters but can't blend them into a word",
          solution: "Blending is a skill that develops over time. Try these scaffolds: (1) YOU blend the word first at normal speed while pointing to letters, then have child try. (2) Use 'continuous blending' — don't pause between sounds. Instead of '/c/... /a/... /t/', hold each sound and glide: '/cccaaattt/'. (3) Start with 2-sound words (at, in, on, up) before 3-sound words. (4) Use the arm-tapping method: shoulder for first sound, elbow for second, wrist for third, then slide hand down arm to blend."
        },
        {
          problem: "Child guesses words based on the first letter or the picture",
          solution: "This is a common habit from whole-language approaches. Gently redirect: cover the picture and say 'Let's look at ALL the letters, not just the first one.' Point to each letter and have them say each sound before blending. If they guess 'horse' for 'house', say: 'Good start with /h/! Now let's check the rest: /h/-/ou/-/s/. Does that say horse or house?' Praise them for self-correcting."
        },
        {
          problem: "Child gets frustrated and says 'I can't read'",
          solution: "Drop back to easier material immediately. Success builds confidence. Read something you KNOW they can handle — even if it's 'I sat. I am sad.' from week 1. Then say: 'You just read that! You CAN read!' Also, separate 'reading' from 'learning new sounds.' When you're practicing new, hard stuff, call it 'sound practice' or 'word building,' not 'reading.' Let 'reading' be associated with the fun, successful experience of reading books and stories they can handle."
        },
        {
          problem: "Child isn't interested / won't sit still",
          solution: "Completely normal for 4-5 year olds. Strategies: (1) Keep lessons to 10-15 minutes max. (2) Add movement — sky writing, letter body shapes, jumping to sounds. (3) Follow their interests — if they love dinosaurs, make all example words about dinosaurs. (4) Let them be the teacher — they quiz YOU on sounds. (5) Use a 'reading treasure box' — after each session, they get to add a sticker or token. No punishment for not engaging, just try again tomorrow."
        },
        {
          problem: "Child seems to forget sounds they knew last week",
          solution: "Totally normal. Memory for letter-sounds needs LOTS of repetition to move from short-term to long-term memory. Solution: (1) Always start with review of all known sounds. (2) Put 'tricky' sounds on the fridge for passive daily exposure. (3) Play 'sound of the day' — pick one tricky sound and notice it everywhere throughout the day. (4) Use spaced repetition: review after 1 day, then 3 days, then 1 week. (5) Keep sessions short but frequent — daily 10 minutes beats weekly 60 minutes."
        }
      ]
    }
  }
];

// ============ COMPONENTS ============

function App() {
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeDay, setActiveDay] = useState(0);
  const [activeMethod, setActiveMethod] = useState(null);
  const [activeResource, setActiveResource] = useState(null);

  const tabs = [
    { id: "curriculum", label: "Lesson Plan", icon: "📚" },
    { id: "methods", label: "Teaching Methods", icon: "🧠" },
    { id: "resources", label: "Resources", icon: "📋" },
  ];

  return (
    <div style={{
      fontFamily: "'Literata', 'Georgia', serif",
      background: "#FAF6F0",
      minHeight: "100vh",
      color: "#2D2A26",
      maxWidth: 800,
      margin: "0 auto",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,300;7..72,400;7..72,500;7..72,600;7..72,700&family=DM+Sans:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .tab-bar {
          display: flex;
          gap: 0;
          background: #EDEDEA;
          border-radius: 12px;
          padding: 4px;
          margin: 0 16px;
        }
        .tab-btn {
          flex: 1;
          padding: 10px 8px;
          border: none;
          background: transparent;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #8A8680;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        .tab-btn.active {
          background: #FFF;
          color: #2D2A26;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
        }

        .week-pills {
          display: flex;
          gap: 8px;
          padding: 16px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .week-pill {
          flex-shrink: 0;
          padding: 8px 16px;
          border-radius: 20px;
          border: 1.5px solid #D4CFC7;
          background: transparent;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #6B6560;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .week-pill.active {
          background: #E85D3A;
          color: white;
          border-color: #E85D3A;
        }

        .day-tabs {
          display: flex;
          gap: 4px;
          padding: 0 16px 12px;
        }
        .day-tab {
          flex: 1;
          padding: 8px 4px;
          border: none;
          background: transparent;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #A09A93;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all 0.2s;
        }
        .day-tab.active {
          color: #E85D3A;
          border-bottom-color: #E85D3A;
        }

        .lesson-card {
          background: #FFF;
          border-radius: 14px;
          padding: 20px;
          margin: 0 16px 14px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          border: 1px solid #EDEBE6;
        }

        .method-tag {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .step-item {
          padding: 12px 0;
          border-bottom: 1px solid #F2EFEA;
          line-height: 1.65;
          font-size: 14.5px;
        }
        .step-item:last-child { border-bottom: none; }
        .step-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #F2EFEA;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #6B6560;
          margin-right: 10px;
          flex-shrink: 0;
          float: left;
          margin-top: 1px;
        }

        .method-card {
          background: #FFF;
          border-radius: 14px;
          margin: 0 16px 12px;
          overflow: hidden;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          border: 1px solid #EDEBE6;
          cursor: pointer;
          transition: all 0.2s;
        }
        .method-card:hover { box-shadow: 0 2px 8px rgba(0,0,0,0.08); }

        .resource-card {
          background: #FFF;
          border-radius: 14px;
          margin: 0 16px 12px;
          overflow: hidden;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          border: 1px solid #EDEBE6;
          cursor: pointer;
          transition: all 0.2s;
        }
        .resource-card:hover { box-shadow: 0 2px 8px rgba(0,0,0,0.08); }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          margin: 12px 16px;
          border: none;
          background: #F2EFEA;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #6B6560;
          border-radius: 8px;
          cursor: pointer;
        }

        .word-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 8px;
        }
        .word-chip {
          padding: 4px 10px;
          background: #F8F5F0;
          border-radius: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #4A4540;
          border: 1px solid #EDEBE6;
        }

        .section-heading {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #A09A93;
          margin-bottom: 12px;
          padding: 0 16px;
        }

        .principle-item {
          padding: 10px 14px;
          background: #FAF6F0;
          border-radius: 10px;
          margin-bottom: 8px;
          font-size: 14px;
          line-height: 1.6;
        }

        .schedule-block {
          display: flex;
          gap: 14px;
          padding: 14px;
          background: #FAF6F0;
          border-radius: 10px;
          margin-bottom: 8px;
          align-items: flex-start;
        }
        .schedule-time {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 14px;
          color: #E85D3A;
          white-space: nowrap;
          min-width: 60px;
        }
      `}</style>

      {/* Header */}
      <div style={{
        padding: "24px 16px 16px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 32, marginBottom: 4 }}>📖</div>
        <h1 style={{
          fontFamily: "'Literata', Georgia, serif",
          fontSize: 22,
          fontWeight: 700,
          color: "#2D2A26",
          letterSpacing: "-0.3px",
          marginBottom: 4,
        }}>Little Reader</h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          color: "#8A8680",
          fontWeight: 500,
        }}>Homeschool Reading · Ages 4-5</p>
      </div>

      {/* Tab Bar */}
      <div className="tab-bar">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => { setActiveTab(tab.id); setActiveMethod(null); setActiveResource(null); }}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* CURRICULUM TAB */}
      {activeTab === "curriculum" && (
        <div>
          {/* Week Pills */}
          <div className="week-pills">
            {WEEKS.map((w, i) => (
              <button
                key={i}
                className={`week-pill ${activeWeek === i ? 'active' : ''}`}
                onClick={() => { setActiveWeek(i); setActiveDay(0); }}
              >
                Week {w.week}
              </button>
            ))}
          </div>

          {/* Week Info */}
          <div style={{ padding: "0 16px 12px" }}>
            <h2 style={{
              fontFamily: "'Literata', Georgia, serif",
              fontSize: 19,
              fontWeight: 700,
              marginBottom: 6,
              color: "#2D2A26",
            }}>{WEEKS[activeWeek].title}</h2>
            <p style={{
              fontSize: 13.5,
              lineHeight: 1.55,
              color: "#6B6560",
              fontFamily: "'DM Sans', sans-serif",
            }}>{WEEKS[activeWeek].focus}</p>
          </div>

          {/* Day Tabs */}
          <div className="day-tabs">
            {WEEKS[activeWeek].days.map((d, i) => (
              <button
                key={i}
                className={`day-tab ${activeDay === i ? 'active' : ''}`}
                onClick={() => setActiveDay(i)}
              >
                {d.day.slice(0, 3)}
              </button>
            ))}
          </div>

          {/* Day Theme */}
          <div style={{
            padding: "0 16px 14px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: "#E85D3A",
          }}>
            {WEEKS[activeWeek].days[activeDay].theme}
          </div>

          {/* Lessons */}
          {WEEKS[activeWeek].days[activeDay].lessons.map((lesson, li) => {
            const methodColor = TEACHING_METHODS.find(m =>
              lesson.method.toLowerCase().includes(m.name.toLowerCase().split(" ")[0].toLowerCase()) ||
              m.name.toLowerCase().includes(lesson.method.toLowerCase().split(" ")[0].toLowerCase())
            )?.color || "#6B6560";

            return (
              <div key={li} className="lesson-card">
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
                  <span className="method-tag" style={{
                    background: methodColor + "15",
                    color: methodColor,
                  }}>{lesson.method}</span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    color: "#A09A93",
                    fontWeight: 500,
                  }}>⏱ {lesson.duration}</span>
                </div>

                <h3 style={{
                  fontFamily: "'Literata', Georgia, serif",
                  fontSize: 17,
                  fontWeight: 600,
                  marginBottom: 8,
                  color: "#2D2A26",
                }}>{lesson.title}</h3>

                <div style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  padding: "10px 12px",
                  background: "#F8F5F0",
                  borderRadius: 10,
                  marginBottom: 14,
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: "#6B6560",
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  <span style={{ fontSize: 16, flexShrink: 0 }}>🧰</span>
                  <span><strong style={{ color: "#4A4540" }}>Materials:</strong> {lesson.materials}</span>
                </div>

                <div>
                  {lesson.steps.map((step, si) => (
                    <div key={si} className="step-item">
                      <span className="step-num">{si + 1}</span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* METHODS TAB */}
      {activeTab === "methods" && !activeMethod && (
        <div style={{ paddingTop: 20 }}>
          <p style={{
            padding: "0 16px 16px",
            fontSize: 14,
            lineHeight: 1.6,
            color: "#6B6560",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            This curriculum blends six teaching approaches. Tap any method to learn what it is, why it works, and how to use it effectively.
          </p>
          {TEACHING_METHODS.map(m => (
            <div
              key={m.id}
              className="method-card"
              onClick={() => setActiveMethod(m.id)}
            >
              <div style={{
                borderLeft: `4px solid ${m.color}`,
                padding: "16px 16px 16px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    <span style={{ fontSize: 22 }}>{m.icon}</span>
                    <h3 style={{
                      fontFamily: "'Literata', Georgia, serif",
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#2D2A26",
                    }}>{m.name}</h3>
                  </div>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "#8A8680",
                    fontWeight: 500,
                  }}>{m.tagline}</p>
                </div>
                <span style={{ color: "#C4BFBA", fontSize: 20 }}>›</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "methods" && activeMethod && (() => {
        const m = TEACHING_METHODS.find(x => x.id === activeMethod);
        return (
          <div style={{ paddingTop: 8 }}>
            <button className="back-btn" onClick={() => setActiveMethod(null)}>
              ← All Methods
            </button>

            <div style={{ padding: "8px 16px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                <span style={{ fontSize: 32 }}>{m.icon}</span>
                <div>
                  <h2 style={{
                    fontFamily: "'Literata', Georgia, serif",
                    fontSize: 21,
                    fontWeight: 700,
                  }}>{m.name}</h2>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: m.color,
                    fontWeight: 600,
                  }}>{m.tagline}</p>
                </div>
              </div>
            </div>

            <div className="lesson-card">
              <h4 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
                color: "#A09A93",
                marginBottom: 10,
              }}>What Is It?</h4>
              <p style={{ fontSize: 14.5, lineHeight: 1.7 }}>{m.what}</p>
            </div>

            <div className="lesson-card">
              <h4 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
                color: "#A09A93",
                marginBottom: 10,
              }}>Why Does It Work?</h4>
              <p style={{ fontSize: 14.5, lineHeight: 1.7 }}>{m.why}</p>
            </div>

            <div className="lesson-card">
              <h4 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
                color: "#A09A93",
                marginBottom: 12,
              }}>Key Principles</h4>
              {m.keyPrinciples.map((p, i) => (
                <div key={i} className="principle-item">{p}</div>
              ))}
            </div>

            <div className="lesson-card">
              <h4 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
                color: "#A09A93",
                marginBottom: 10,
              }}>What You Need to Know</h4>
              <p style={{ fontSize: 14.5, lineHeight: 1.7 }}>{m.whatToKnow}</p>
            </div>
          </div>
        );
      })()}

      {/* RESOURCES TAB */}
      {activeTab === "resources" && !activeResource && (
        <div style={{ paddingTop: 20 }}>
          <p style={{
            padding: "0 16px 16px",
            fontSize: 14,
            lineHeight: 1.6,
            color: "#6B6560",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Quick-reference materials to support your teaching. Tap to expand.
          </p>
          {RESOURCES.map(r => (
            <div
              key={r.id}
              className="resource-card"
              onClick={() => setActiveResource(r.id)}
            >
              <div style={{ padding: "16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <h3 style={{
                    fontFamily: "'Literata', Georgia, serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#2D2A26",
                    marginBottom: 3,
                  }}>{r.title}</h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12.5,
                    color: "#8A8680",
                    lineHeight: 1.4,
                  }}>{r.description.slice(0, 90)}…</p>
                </div>
                <span style={{ color: "#C4BFBA", fontSize: 20, flexShrink: 0, marginLeft: 12 }}>›</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "resources" && activeResource && (() => {
        const r = RESOURCES.find(x => x.id === activeResource);
        return (
          <div style={{ paddingTop: 8 }}>
            <button className="back-btn" onClick={() => setActiveResource(null)}>
              ← All Resources
            </button>

            <div style={{ padding: "8px 16px 16px" }}>
              <h2 style={{
                fontFamily: "'Literata', Georgia, serif",
                fontSize: 19,
                fontWeight: 700,
                marginBottom: 6,
              }}>{r.title}</h2>
              <p style={{
                fontSize: 13.5,
                lineHeight: 1.55,
                color: "#6B6560",
                fontFamily: "'DM Sans', sans-serif",
              }}>{r.description}</p>
            </div>

            {/* Sight Words */}
            {r.id === "first-100-sight-words" && r.content.groups.map((g, i) => (
              <div key={i} className="lesson-card">
                <h4 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#E85D3A",
                  marginBottom: 10,
                }}>{g.label}</h4>
                <div className="word-grid">
                  {g.words.map((w, wi) => (
                    <span key={wi} className="word-chip">{w}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Letter Order */}
            {r.id === "letter-order" && r.content.phases.map((p, i) => (
              <div key={i} className="lesson-card">
                <h4 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#E85D3A",
                  marginBottom: 4,
                }}>{p.phase}</h4>
                <p style={{
                  fontFamily: "'Literata', Georgia, serif",
                  fontSize: 17,
                  fontWeight: 600,
                  marginBottom: 6,
                  letterSpacing: 1.5,
                  color: "#2D2A26",
                }}>{p.letters}</p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "#8A8680",
                }}>{p.note}</p>
              </div>
            ))}

            {/* Book List */}
            {r.id === "books-by-level" && r.content.categories.map((cat, ci) => (
              <div key={ci} style={{ marginBottom: 8 }}>
                <div className="lesson-card" style={{ marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderBottom: "none" }}>
                  <h4 style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#E85D3A",
                    marginBottom: 4,
                  }}>{cat.label}</h4>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12.5,
                    color: "#8A8680",
                    lineHeight: 1.5,
                  }}>{cat.note}</p>
                </div>
                {cat.books.map((b, bi) => (
                  <div key={bi} style={{
                    background: "#FFF",
                    margin: "0 16px",
                    padding: "12px 20px",
                    borderBottom: bi < cat.books.length - 1 ? "1px solid #F2EFEA" : "none",
                    ...(bi === cat.books.length - 1 ? { borderBottomLeftRadius: 14, borderBottomRightRadius: 14, marginBottom: 14, border: "1px solid #EDEBE6", borderTop: "none" } : { borderLeft: "1px solid #EDEBE6", borderRight: "1px solid #EDEBE6" }),
                  }}>
                    <div style={{
                      fontFamily: "'Literata', Georgia, serif",
                      fontSize: 14.5,
                      fontWeight: 600,
                      color: "#2D2A26",
                    }}>{b.title}</div>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      color: "#8A8680",
                      marginTop: 2,
                    }}>by {b.author}</div>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12.5,
                      color: "#6B6560",
                      marginTop: 4,
                      lineHeight: 1.5,
                    }}>{b.note}</div>
                  </div>
                ))}
              </div>
            ))}

            {/* Schedule */}
            {r.id === "daily-schedule" && (
              <div>
                <div className="lesson-card">
                  <h4 style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    color: "#A09A93",
                    marginBottom: 14,
                  }}>Daily Blocks</h4>
                  {r.content.blocks.map((b, i) => (
                    <div key={i} className="schedule-block">
                      <span className="schedule-time">{b.time}</span>
                      <div>
                        <div style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#2D2A26",
                          marginBottom: 3,
                        }}>{b.activity}</div>
                        <div style={{
                          fontSize: 13,
                          color: "#6B6560",
                          lineHeight: 1.5,
                        }}>{b.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="lesson-card">
                  <h4 style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    color: "#A09A93",
                    marginBottom: 12,
                  }}>Tips</h4>
                  {r.content.tips.map((t, i) => (
                    <div key={i} className="principle-item">{t}</div>
                  ))}
                </div>
              </div>
            )}

            {/* Troubleshooting */}
            {r.id === "troubleshooting" && r.content.issues.map((issue, i) => (
              <div key={i} className="lesson-card">
                <h4 style={{
                  fontFamily: "'Literata', Georgia, serif",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#E85D3A",
                  marginBottom: 8,
                }}>😰 {issue.problem}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#4A4540" }}>{issue.solution}</p>
              </div>
            ))}
          </div>
        );
      })()}

      {/* Footer spacer */}
      <div style={{ height: 40 }} />
    </div>
  );
}

export default App;
