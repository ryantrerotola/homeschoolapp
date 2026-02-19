import { useState } from "react";

const WEEKS = [
  {
    week: 1,
    title: "Jolly Phonics Group 1: S, A, T, I, P, N",
    focus: "Introducing the first six letter sounds using Jolly Phonics actions and songs. These letters combine to form many CVC words immediately — your child will be reading real words by Wednesday.",
    days: [
      {
        day: "Monday",
        theme: "Introduce /s/ and /a/ with Jolly Phonics",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "15 min",
            title: "Meet the Sound /s/ — The Snake Sound",
            materials: "Paper, pen, Jolly Phonics songs on Spotify/YouTube",
            steps: [
              "Play the Jolly Phonics 's' song ('The Snake is in the Grass'). Listen once together, then sing along the second time. The song helps children remember /ssssss/.",
              "Teach the Jolly Phonics ACTION for /s/: weave your hand in an S-shape like a snake while saying /ssssss/. Do it together 5 times. The action is the key — Jolly Phonics pairs every sound with a physical gesture so the child has a body memory, not just an ear memory.",
              "Write a large lowercase 's' on paper. Trace it with your finger while making the snake action and saying /ssssss/. Have your child trace it 3 times while doing the action and sound together.",
              "Say these words slowly, emphasizing the /s/: sun, sit, sock, sand, soup. Ask: 'What sound do you hear at the very beginning?' Wait for them to say /s/ and do the snake action.",
              "On a fresh piece of paper, write 's' five times in large letters. Have your child circle each one while doing the action. Then have them try writing 's' three times themselves — focus on the motion, not perfection."
            ]
          },
          {
            method: "Jolly Phonics",
            duration: "10 min",
            title: "Meet the Sound /a/ — The Ants on Arm Sound",
            materials: "Paper, pen, Jolly Phonics songs on Spotify/YouTube",
            steps: [
              "Play the Jolly Phonics 'a' song ('Ants on My Arm'). This is one kids love — the idea of ants crawling up your arm is silly and memorable! Sing along.",
              "Teach the Jolly Phonics ACTION for /a/: wiggle your fingers up your arm like ants crawling while saying /a/ /a/ /a/! Do it together 5 times.",
              "Write a large lowercase 'a' on paper. Trace it while doing the ant action and saying /a/. Child traces 3 times with action and sound.",
              "Play 'Do You Hear It?': Say these words one at a time — apple, ant, astronaut, dog, alligator, basket. After each word, child puts thumbs up AND does the ant action if it starts with /a/, thumbs down if it doesn't.",
              "Write both 's' and 'a' on paper. Point to each randomly (10 times total) and child says the sound WITH the action. If they forget the action, model it and have them copy."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Introduce /t/ and /i/, Review /s/ and /a/",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "10 min",
            title: "Review /s/ and /a/ with Songs",
            materials: "Yesterday's letter papers, Spotify/YouTube",
            steps: [
              "Quick song review: play the first 10 seconds of each song — child does the action and says the sound as soon as they recognize it.",
              "Flash the 's' paper: 'What sound does this make?' Child says /s/ and does the snake action. Then 'a' with ant action. Alternate 5 times each.",
              "Say 5 words (sat, apple, sun, ant, sock) and have child tell you the first sound AND do the matching action.",
              "Child writes 's' and 'a' each twice from memory. Praise effort over accuracy."
            ]
          },
          {
            method: "Jolly Phonics",
            duration: "15 min",
            title: "Meet /t/ and /i/",
            materials: "Paper, pen, Jolly Phonics songs",
            steps: [
              "Play the Jolly Phonics 't' song. Teach the ACTION for /t/: turn your head side to side as if watching tennis while saying /t/ /t/ /t/! The sound is crisp — do NOT say 'tuh', keep it pure with no vowel added. Practice 5 times.",
              "Write lowercase 't'. Trace while saying /t/ and doing the tennis action. Child traces 3 times.",
              "Play the Jolly Phonics 'i' song. Teach the ACTION for /i/: pretend a mouse is running up your body — wiggle your fingers from tummy to nose while squeaking /i/ /i/ /i/! (short i, as in 'it'). Practice 5 times.",
              "Write lowercase 'i' (with the dot). Trace while saying /i/ and doing the mouse action. Child traces 3 times.",
              "Write all four letters (s, a, t, i) in a row. Point to each in random order — child says the sound AND does the action. Do 3 full rounds (12 sounds total). Note which ones need more practice."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Introduce /p/ and /n/, First Blending!",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "10 min",
            title: "Meet /p/ and /n/",
            materials: "Paper, pen, Jolly Phonics songs",
            steps: [
              "Play the Jolly Phonics 'p' song. Teach the ACTION for /p/: pretend to blow out candles — /p/ /p/ /p/! Feel the puff of air on your hand. Practice 5 times.",
              "Write lowercase 'p'. Trace while saying /p/ with candle action. Child traces 3 times.",
              "Play the Jolly Phonics 'n' song. Teach the ACTION for /n/: hold your arms out like an airplane and make the engine noise /nnnnn/! Practice 5 times.",
              "Write lowercase 'n'. Trace while saying /n/ with airplane action. Child traces 3 times.",
              "Flash all SIX Group 1 letter cards (s, a, t, i, p, n). Child says each sound with the action. You now have the full first group! Celebrate: 'You know SIX sounds — and we can make REAL words with these!'"
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Blending Sounds into Words",
            materials: "Paper, pen, scissors (to cut out letter cards)",
            steps: [
              "Say: 'I'm going to say a word in slow motion, and you tell me what word I'm saying!' This is oral blending.",
              "Say '/s/... /a/... /t/' (pause 1 second between each sound). Encourage child to say it faster and faster until they hear 'sat'. Celebrate!",
              "Repeat with: /t/-/a/-/p/ (tap), /p/-/a/-/t/ (pat), /a/-/t/ (at), /s/-/a/-/p/ (sap), /p/-/i/-/n/ (pin), /t/-/i/-/n/ (tin), /s/-/i/-/t/ (sit), /n/-/i/-/p/ (nip), /p/-/i/-/t/ (pit), /s/-/i/-/p/ (sip).",
              "Now with letter cards: cut paper into 12 small cards, write s, s, a, a, t, t, i, i, p, p, n, n. Lay out: s, a, t. Point to each and say the sound, then blend: '/s/... /a/... /t/... sat!' Run your finger under the letters left to right.",
              "Child tries. Help them point to each letter, say the sound (with Jolly Phonics action!), then push the sounds together. Build and blend: sat, tap, pat, pin, tin, sit, nip, pit, sip, nap, pan, tan, tip, sap, snap, spin, spit."
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Segmenting, Multisensory Practice, and Story Time",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Segmenting (Breaking Words Apart)",
            materials: "3 small objects (coins, buttons, blocks — anything small)",
            steps: [
              "Say: 'Yesterday we pushed sounds together. Today we're going to pull words apart!' This is the opposite skill — segmenting.",
              "Place 3 small objects in a row. Say 'sat.' Then model: touch the first object and say /s/, touch the second and say /a/, touch the third and say /t/.",
              "Child's turn. Say 'tap.' Child touches each object while saying each sound: /t/ /a/ /p/. Repeat with: pat, sit, pin, nap, tin, sip, pan (use only 2 objects for 2-sound words like 'at' and 'in').",
              "Challenge: try it WITHOUT the objects — just holding up a finger for each sound. Only push this if they're ready."
            ]
          },
          {
            method: "Multisensory / Kinesthetic",
            duration: "10 min",
            title: "Jolly Phonics Actions + Sky Writing",
            materials: "None",
            steps: [
              "Stand up together. For each of the 6 Group 1 sounds, do the Jolly Phonics action AND sky-write the letter simultaneously: snake action + sky-write 's', ant action + sky-write 'a', tennis action + sky-write 't', mouse action + sky-write 'i', candle action + sky-write 'p', airplane action + sky-write 'n'.",
              "Arm Tapping for blending: say the word 'sat.' Touch your shoulder and say /s/ (snake action), touch your elbow and say /a/ (ant action), touch your wrist and say /t/ (tennis action). Then slide your hand down your whole arm and say 'sat!'",
              "Repeat arm tapping with: pin, tap, nip, sit. This connects the Jolly Phonics actions to the blending skill."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Interactive Story Time",
            materials: "Any picture book your child enjoys",
            steps: [
              "Read a picture book together, but pause 3-4 times to interact using the PEER method (Prompt, Evaluate, Expand, Repeat).",
              "Page 1-2: Point to a picture and ask an open-ended question: 'What do you think is happening here?' (Prompt). Acknowledge their answer (Evaluate). Add detail (Expand). Ask them to repeat the expanded version (Repeat).",
              "Page 3-4: Point to a word that starts with s, a, t, i, p, or n if you can find one. 'Look! This word is sun. What sound does sun start with? Can you do the action?' Connect to Jolly Phonics.",
              "Near the end: Ask a prediction question: 'What do you think will happen next?' There are no wrong answers — this builds comprehension.",
              "After the book: Ask 'What was your favorite part?' and 'Can you tell me what happened in the story?'"
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "Review, Sight Words, and First Story",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "10 min",
            title: "Group 1 Song and Action Review",
            materials: "Letter cards, Jolly Phonics songs on Spotify/YouTube",
            steps: [
              "Play each Group 1 song in random order. As soon as child recognizes the sound, they do the action and say the sound. Time how fast they can identify all 6.",
              "Flash all 6 letter cards. Child says each sound with action. Target: under 2 seconds per sound.",
              "Dictation: Say 'sat.' Child writes it on paper (or arranges letter cards). Repeat with: tip, nap, pin, sit. Help as needed — the goal is practice, not perfection."
            ]
          },
          {
            method: "Sight Words",
            duration: "10 min",
            title: "First Two Sight Words: 'the' and 'I'",
            materials: "Paper, pen, index cards",
            steps: [
              "Say: 'Some words are tricky — we can't sound them out easily with the sounds we know yet, so we learn them by sight, like recognizing a friend's face!' These are called sight words or heart words.",
              "Write 'the' on a card in large, clear lowercase letters. Say: 'This word is THE. T-H-E spells THE.' Point to it and have child say 'the' 3 times.",
              "Write 'I' on a card. Say: 'This word is I — just one letter! When you talk about yourself, you write I.' Have child say it 3 times.",
              "Hold up each card randomly (alternating, 8-10 times) — child says the word. Stick these cards on the fridge or a wall where child will see them daily.",
              "Simple sentence reading: write on paper 'I sat.' Point to each word and read it together. Then write 'I tap.' Read together. Then 'I nap.' Your child is reading their first sentences!"
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
              "Read the story back together, pointing to each word. When you hit 'the' or 'I' or any word with their Group 1 sounds, pause and let them try to read it.",
              "Have child illustrate their story with a drawing. Hang it on the wall — they wrote their first book! This shows them that reading and writing are connected to THEIR thoughts and ideas."
            ]
          }
        ]
      }
    ]
  },
  {
    week: 2,
    title: "Jolly Phonics Group 2: CK, E, H, R, M, D",
    focus: "Six new sounds including the digraph 'ck' (taught as one sound in Jolly Phonics from the start!), short /e/, and high-frequency consonants. Blending and segmenting practice intensifies.",
    days: [
      {
        day: "Monday",
        theme: "Introduce CK and /e/ (short e)",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "10 min",
            title: "Quick Review of Group 1",
            materials: "Group 1 letter cards, Jolly Phonics songs",
            steps: [
              "Play 10-second clips of each Group 1 song — child does action and says sound as fast as possible.",
              "Flash all 6 letter cards — child says each sound with action. Aim for instant recall (under 2 seconds per sound).",
              "Oral blending review: say /s/-/a/-/t/, /p/-/i/-/n/, /t/-/a/-/p/ — child blends each into a word."
            ]
          },
          {
            method: "Jolly Phonics",
            duration: "15 min",
            title: "Meet CK and /e/",
            materials: "Paper, pen, Jolly Phonics songs",
            steps: [
              "Play the Jolly Phonics 'ck' song. Say: 'In Jolly Phonics, we learn C and K together because they make the same sound! CK says /k/.' Teach the ACTION for /ck/: raise your hands and click your fingers (or pretend to click like castanets) while saying /k/ /k/ /k/! Practice 5 times.",
              "Write 'ck' on a card. Explain: 'When /k/ comes at the end of a short word right after a short vowel, we usually write CK together: kick, sock, duck.' Also write 'c' separately: 'C on its own also says /k/ — cat, cap, cot.' Make cards for both 'ck' and 'c'.",
              "Play the Jolly Phonics 'e' song. Teach the ACTION for /e/: pretend to crack an egg on the edge of a pan — tap-tap-tap — while saying /e/ /e/ /e/! Practice 5 times.",
              "Write lowercase 'e'. Trace while doing egg-cracking action and saying /e/. Child traces 3 times.",
              "Words with these new sounds: neck, peck, pick, sick, tick, tack, pack, kick, stick, pet, pen, ten, net, set."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Introduce /h/, /r/, /m/, /d/",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "20 min",
            title: "Four New Sounds with Songs and Actions",
            materials: "Paper, pen, Jolly Phonics songs",
            steps: [
              "Play the Jolly Phonics 'h' song. Teach the ACTION for /h/: hold your hand in front of your mouth and pant like a dog — /h/ /h/ /h/! Feel the warm air. Practice 5 times. Write lowercase 'h', trace with action.",
              "Play the Jolly Phonics 'r' song. Teach the ACTION for /r/: pretend to be a puppy holding a rag in its teeth and shaking it — /rrrrr/! Practice 5 times. Write lowercase 'r', trace with action.",
              "Play the Jolly Phonics 'm' song. Teach the ACTION for /m/: rub your tummy like you're eating something yummy — /mmmm/! Practice 5 times. Write lowercase 'm' (two humps), trace with action.",
              "Play the Jolly Phonics 'd' song. Teach the ACTION for /d/: play air drums — /d/ /d/ /d/! The sound comes from the tongue tapping behind the top teeth. Practice 5 times. Write lowercase 'd', trace with action.",
              "IMPORTANT — b/d prevention: Jolly Phonics teaches 'd' in Group 2 and 'b' in Group 3, deliberately separating them. When teaching 'd', say: 'd has a tall line on the RIGHT side.' Don't mention 'b' yet.",
              "Flash all 12 sound cards (Group 1 + Group 2) randomly. Child says each sound with action. Note any that need extra practice."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Expanded Word Building",
            materials: "Letter cards",
            steps: [
              "With 12 sounds (s, a, t, i, p, n, ck, e, h, r, m, d), build and blend: man, mad, dam, dim, mid, map, mat, mist, and, mind, dip, din, red, hen, hem, hip, him, hit, hat, had, hand, hid, rid, rim, rip, ram, ran, rat, rack, deck, den, rest, rent, mend, send, trip, drip, trick, stick, prick, crisp.",
              "For words with 'ck': remind child that CK is ONE sound /k/, represented by the ck card. Blend: kick, sick, nick, tick, tack, pack, pick, peck, neck, deck, dock, dick, rick, trick, stick, snick.",
              "Sentence reading: write 'I am sad.' on paper. Child reads each word. Then: 'A man sat.' and 'The hen pecked.' Read together."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Segmenting and Multisensory Practice",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Segmenting Drill with Actions",
            materials: "Small objects (3-4 buttons, coins, or blocks)",
            steps: [
              "Say a word. Child pushes one object forward for each sound they hear AND does the Jolly Phonics action for each sound. Words: map (3), sand (4), it (2), dim (3), nap (3), tip (3), mist (4), neck (3 — n, e, ck), stick (4 — s, t, i, ck).",
              "After pushing objects, child says the whole word. If they get the count wrong, say the word slowly together and recount.",
              "Challenge: you push the objects and say the sounds — but make one WRONG. Child catches your mistake! Example: for 'pin' you say /p/ /a/ /n/ — child corrects you: 'No, it's /p/ /i/ /n/!' Kids love catching adults making mistakes."
            ]
          },
          {
            method: "Multisensory / Kinesthetic",
            duration: "10 min",
            title: "Sand / Salt Tray Writing with Jolly Phonics Actions",
            materials: "A baking tray or plate with a thin layer of salt, sand, or flour",
            steps: [
              "Spread a thin layer of salt on a tray. Call out a sound — child does the Jolly Phonics action first, THEN writes the letter in the salt while saying the sound. Shake tray to erase. Do all 12 sounds.",
              "Call out a word (e.g., 'map'). Child does the action for each sound, then writes the whole word in the salt, saying each sound as they write each letter. Try 4-5 words: map, sit, hen, drip, neck.",
              "This engages touch, sight, sound, AND movement (the Jolly Phonics action) — quadruple sensory encoding."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Story Time with Action Spotting",
            materials: "Any picture book",
            steps: [
              "Read a picture book, but give child a 'mission': 'Every time you hear a word that starts with /m/, do the yummy-tummy action!'",
              "Read normally but slightly emphasize /m/ words. Pause briefly after each one for child to do the action and say the sound.",
              "At the halfway point, switch target to /h/ — now they do the panting dog action for /h/ words.",
              "After reading, ask 3 comprehension questions: 'Who was in the story?', 'What happened?', 'How did it end?'"
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
              "Introduce 'is' — write on a card. 'This word is IS. I-S spells IS.' Note: the 's' makes a /z/ sound here.",
              "Introduce 'a' as a sight word — different from the /a/ sound. Here it's the word 'a' as in 'a cat.'",
              "Introduce 'it' — this one they CAN sound out (/i/-/t/), but it's worth memorizing for instant recognition.",
              "Flash all 5 sight word cards randomly. Child reads each. Aim for 10 rounds."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Reading Simple Sentences",
            materials: "Paper, pen",
            steps: [
              "Write these sentences in large, clear print:\n'A man is sad.'\n'I sat in it.'\n'The map is tan.'\n'A pin is in it.'\n'I did nap.'\n'He hid the red pen.'",
              "For each sentence: child reads each word. Decodable words they blend (using Jolly Phonics actions if needed). Sight words they recognize. Help only when needed.",
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
            method: "Jolly Phonics",
            duration: "10 min",
            title: "Groups 1-2 Song Medley and Speed Round",
            materials: "All 12 sound cards, Jolly Phonics songs, timer (phone)",
            steps: [
              "Play the Jolly Phonics songs for all Group 1 and 2 sounds as a medley. Child does each action as the song plays. This is a great energy-builder!",
              "Speed round: flash all 12 cards. Child says each sound with action as fast as they can. Time it (just for fun, never pressure).",
              "Read 6 words: stick, mist, drip, hand, rent, crisp. Child blends each one."
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "Our Week 2 Story",
            materials: "Paper, pen, crayons or colored pencils",
            steps: [
              "Ask child: 'What was the most fun thing you did this week?' Write down their words exactly. Read the story back together.",
              "Start a 'Story Collection' — staple or clip this with last week's story. Building a personal library is incredibly motivating.",
              "Child illustrates the story."
            ]
          },
          {
            method: "Phonemic Awareness",
            duration: "10 min",
            title: "Rhyme Time",
            materials: "None",
            steps: [
              "Say: 'I'm going to say two words. You tell me: do they rhyme?' Model first: 'Cat, hat — do they rhyme? YES! They both end in /at/!'",
              "Test pairs: man/pan (yes), sit/map (no), tip/dip (yes), sad/mad (yes), pin/pat (no), tin/sin (yes).",
              "Rhyme generation: 'What rhymes with sat?' Accept real AND nonsense words (dat, gat, lat). Nonsense words show strong phonemic awareness!",
              "This builds the foundation for word families (-at, -in, -an, -ip) which become a major tool in the coming weeks."
            ]
          }
        ]
      }
    ]
  },
  {
    week: 3,
    title: "Jolly Phonics Group 3: G, O, U, L, F, B",
    focus: "Six more sounds including three vowels (/o/, /u/, and the tricky /b/). After this week, children know all five short vowels! Also introduces the 'b' vs 'd' distinction carefully.",
    days: [
      {
        day: "Monday",
        theme: "Introduce /g/ and /o/ (short o)",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "10 min",
            title: "Groups 1-2 Speed Review",
            materials: "All 12 sound cards",
            steps: [
              "Flash all 12 cards — child says each sound with Jolly Phonics action. Target: under 20 seconds for all 12.",
              "Quick blending: say /m/-/a/-/n/ — child says 'man'. Do 5 more: dim, sit, pan, nip, stick.",
              "Quick segmenting: say 'hand' — child says each sound with actions. Do 3 more: mist, drip, neck."
            ]
          },
          {
            method: "Jolly Phonics",
            duration: "15 min",
            title: "Meet /g/ and /o/",
            materials: "Paper, pen, Jolly Phonics songs",
            steps: [
              "Play the Jolly Phonics 'g' song. Teach the ACTION for /g/: spiral your hand downward like water going down a drain — gurgle gurgle /g/ /g/ /g/! Practice 5 times. Write lowercase 'g', trace with action.",
              "Play the Jolly Phonics 'o' song. Teach the ACTION for /o/: pretend to switch a light on and off — 'o, o, o' (like 'oh! oh! oh!' as the light flickers). Practice 5 times. Write lowercase 'o', trace with action.",
              "New words: got, dog, god, not, nod, on, pot, top, mop, stop, pod, dot, log, moss, Tom, cot, cock, dock, mock, sock, rock, knock.",
              "Sentence: 'A dog sat on a rock.' Child reads it."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Introduce /u/, /l/, /f/ — All Five Short Vowels Complete!",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "20 min",
            title: "Three New Sounds — Completing the Vowels!",
            materials: "Paper, pen, Jolly Phonics songs, colored pencils",
            steps: [
              "Play the Jolly Phonics 'u' song. Teach the ACTION for /u/: put up an umbrella — mime holding and opening an umbrella while saying /u/ /u/ /u/! Practice 5 times.",
              "Play the Jolly Phonics 'l' song. Teach the ACTION for /l/: lick a lollipop — pretend to lick a lollipop while saying /llll/! Practice 5 times.",
              "Play the Jolly Phonics 'f' song. Teach the ACTION for /f/: let out air like a deflating tire — /fffff/! Move hands apart slowly as if the air is escaping. Practice 5 times.",
              "Write each letter, trace with action. Child traces 3 times each.",
              "VOWEL CELEBRATION: Write all five short vowels in a row: a, e, i, o, u. Say: 'You now know ALL five vowels! Every single word has at least one vowel.' Let child color each vowel differently. Do all 5 vowel actions in a row as a mini-dance!",
              "Words: bus, bug, bun (preview 'b'!), cup, cut, fun, gum, hut, mud, mug, mum, nut, pug, run, rub, rug, sun, tub, tug, up, us, flat, flag, flip, fog, frog, felt, left, lift, lid, lip, log, leg, lot, let, lick, lock, lamp, land, list, lost, elf."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Introduce /b/ — Careful b/d Distinction",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "15 min",
            title: "Meet /b/ — And the b/d Solution",
            materials: "Paper, pen, Jolly Phonics songs",
            steps: [
              "Play the Jolly Phonics 'b' song. Teach the ACTION for /b/: pretend to hit a ball with a bat — swing and say /b/ /b/ /b/! Practice 5 times.",
              "Write lowercase 'b'. Say: 'b starts with a bat (the tall line going DOWN) and then the ball (the round part). Bat then ball — that's b!' This is the Jolly Phonics approach to b/d — 'b' = bat + ball. Trace while saying /b/ with bat action.",
              "Now compare to 'd' (which they already know): hold up both letters. 'd has the drumstick AFTER the drum' (round part first, tall line second). 'b has the bat BEFORE the ball' (tall line first, round part second).",
              "The 'bed' trick: child makes fists with thumbs pointing up. Left hand forms 'b', right hand forms 'd'. Together they spell 'bed'. Practice: flash 'b' and 'd' cards randomly 10 times.",
              "Words with /b/: bat, bag, bed, bet, big, bin, bit, bog, bud, bug, bun, bus, but, back, band, bank, bend, best, black, blend, block, brick, brush, bump, bust.",
              "Sentences: 'The big red bus is best.' 'A black bird sat on a brick.' Child reads."
            ]
          },
          {
            method: "Phonemic Awareness",
            duration: "10 min",
            title: "Vowel Sound Sorting",
            materials: "5 pieces of paper labeled 'a', 'e', 'i', 'o', 'u'",
            steps: [
              "Lay the 5 vowel papers on the floor. Say a word — child does the Jolly Phonics action for the vowel they hear, then jumps to the matching paper.",
              "Words: cat (a-ants), bed (e-egg), pig (i-mouse), dog (o-light), bus (u-umbrella), hat (a), pen (e), lip (i), hot (o), rug (u).",
              "This is HARD. Short vowels are the trickiest sounds to distinguish. If child gets /e/ and /i/ confused (very common), use the Jolly Phonics actions to differentiate: 'Is it the egg-cracking sound or the mouse sound?'",
              "The Jolly Phonics actions are particularly valuable here — each vowel has a distinct physical gesture that helps children tell them apart."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Rhyming Book Read-Aloud",
            materials: "A rhyming picture book (e.g., 'Green Eggs and Ham', 'The Cat in the Hat', 'Goodnight Moon', or any Dr. Seuss)",
            steps: [
              "Before reading: 'This book has lots of rhyming words — words that sound the same at the end. Let's listen for them!'",
              "Read the book. After each page with a rhyme, pause: 'Did you hear a rhyme? Which words rhymed?' Celebrate each catch.",
              "After reading, pick 3 rhyming pairs from the book. For each pair, ask: 'Can you think of another word that rhymes?'",
              "Connect to word families: 'See? Cat and hat are in the -AT family!'"
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Word Families and Connected Text",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Word Families Introduction",
            materials: "Paper, pen",
            steps: [
              "Write '-at' on paper in large letters. Say: 'This says /at/. When we put different letters in front, we make a word FAMILY — they all end the same way!'",
              "Build the -AT family: sat, mat, pat, cat, tat, bat, fat, hat, rat, flat. For each, child reads the onset + rime: /s/ + /at/ = sat!",
              "Build the -IT family: sit, pit, nit, kit, bit, fit, hit, lit, spit, grit, slit.",
              "Build the -OT family: dot, got, not, pot, cot, hot, lot, rot, trot, slot.",
              "Build the -UG family: bug, dug, hug, lug, mug, pug, rug, tug, drug, plug, slug, snug.",
              "Ask: 'What do you notice about word families?' Only the first letter changes — the ending stays the same. This is a HUGE reading shortcut."
            ]
          },
          {
            method: "Sight Words",
            duration: "10 min",
            title: "New Sight Words: 'and', 'to', 'in', 'he', 'she'",
            materials: "Index cards, pen",
            steps: [
              "Review all previous sight words: the, I, is, a, it. Flash cards.",
              "Introduce 'and' — decodable but so frequent that instant recognition helps. Flash and repeat 5 times.",
              "Introduce 'to' — irregular (the 'o' makes /oo/). 'This word is TO. T-O spells TO.' Flash 5 times.",
              "Introduce 'in' — decodable, instant recognition helpful. And 'he' and 'she' — both are partially irregular.",
              "Flash all 10 sight words. Put tricky ones in a 'practice more' pile."
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "Week 3 Celebration — 18 Sounds!",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "10 min",
            title: "Groups 1-3 Full Song and Action Review",
            materials: "All 18 sound cards, Jolly Phonics songs",
            steps: [
              "Play a selection of Group 1-3 songs as a medley. Child does actions throughout. This should feel like a fun singalong, not a test.",
              "Speed round: flash all 18 cards. Time the full run. Record the time — this becomes their benchmark.",
              "Word building challenge: build 8 words using letter cards: dog, stop, flag, plug, stick, mist, bump, frost."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Reading a Longer Passage",
            materials: "Paper, pen",
            steps: [
              "Write this passage:\n\n'Tim and the Dog\nTim got a dog. The dog is tan and it is not sad.\nTim and the dog sat on a mat.\nTim got a stick and the dog got it.\n\"Drop it!\" said Tim. But the dog ran off.\nTim had to run and run.\nAt last the dog sat in the mud.\nTim had to mop up the dog!\nThe dog is a fun dog.'",
              "Pre-teach 'said' and 'drop' and 'last' if needed. Child reads the story, pointing to each word.",
              "Comprehension: 'What happened in the story? Tell me about Tim and his dog.'",
              "Child reads a second time — it will be smoother. Rereading builds fluency and confidence."
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "10 min",
            title: "My Favorite Animal Story",
            materials: "Paper, pen, crayons",
            steps: [
              "Ask: 'What's your favorite animal? Let's write a story about it!' Child dictates 2-4 sentences.",
              "Write their words. Read back together. Child illustrates. Add to Story Collection.",
              "Read through ALL stories in the collection from Week 1 to now. Child reads as much as they can."
            ]
          }
        ]
      }
    ]
  },
  {
    week: 4,
    title: "Jolly Phonics Group 4: AI, J, OA, IE, EE, OR",
    focus: "A huge leap! Group 4 introduces the first vowel digraphs (ai, oa, ie, ee, or) alongside /j/. Children learn that two letters can work together to make one long vowel sound. This dramatically expands readable vocabulary.",
    days: [
      {
        day: "Monday",
        theme: "Introduce AI (long a) and /j/",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "10 min",
            title: "Groups 1-3 Quick Review",
            materials: "All sound cards",
            steps: [
              "Flash all 18 cards from Groups 1-3. Child says each with action. Target: all under 2 seconds.",
              "Read 5 words: frog, stick, must, blend, crisp. Child blends each.",
              "Sight word review: flash all 10 sight words."
            ]
          },
          {
            method: "Jolly Phonics",
            duration: "15 min",
            title: "Meet AI and /j/ — First Long Vowel!",
            materials: "Paper, pen, Jolly Phonics songs",
            steps: [
              "Play the Jolly Phonics 'ai' song. Say: 'When A and I work together, they make A say its NAME — /ay/! Like in RAIN!' Teach the ACTION for 'ai': point to your ear cup it as if it's raining and say /ay/ — 'ai, ai, it's raining!' Practice 5 times.",
              "Write 'ai' on a card (it's ONE sound, even though it's two letters). Words: rain, train, brain, pain, main, chain, sail, tail, mail, rail, snail, trail, wait, bait, paid, laid, maid, faint, paint.",
              "Play the Jolly Phonics 'j' song. Teach the ACTION for /j/: pretend to wobble like a jelly on a plate — /j/ /j/ /j/! Practice 5 times.",
              "Write lowercase 'j'. Words: jam, jab, jet, jig, jog, job, jot, jug, just, jump.",
              "Sentence: 'I got on the train in the rain.' Child reads — they're reading long vowel words!"
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Introduce OA (long o) and IE (long i)",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "20 min",
            title: "Meet OA and IE — More Long Vowels!",
            materials: "Paper, pen, Jolly Phonics songs",
            steps: [
              "Play the Jolly Phonics 'oa' song. Teach the ACTION for 'oa': bring your hand to your mouth in an O shape as if you have a toothache — 'oh! oh! /oa/!' Practice 5 times.",
              "Words with OA: boat, coat, goat, moat, float, oak, soak, road, load, toad, loaf, foam, roam, groan, moan, toast, roast, coast.",
              "Play the Jolly Phonics 'ie' song. Teach the ACTION for 'ie': stand to attention like a soldier and salute — 'ie! ie!' (like saying 'aye aye!'). Practice 5 times.",
              "Words with IE: tie, pie, die, lie, tried, dried, fried, cried. Note: 'ie' can also say /ee/ (as in 'field') but in Jolly Phonics it's primarily taught as the long /ie/ sound first.",
              "Compare short vowels to their long versions: 'Remember /a/ (ant action)? Now AI says A's NAME: /ay/ (rain action)! Remember /o/ (light switch)? Now OA says O's NAME: /oa/ (toothache action)! Remember /i/ (mouse)? Now IE says I's NAME: /ie/ (salute)!'",
              "Sentences: 'The goat in the coat sat on the boat.' 'I tried to tie a pie to the rail.' Child reads."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Introduce EE (long e) and OR",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "15 min",
            title: "Meet EE and OR",
            materials: "Paper, pen, Jolly Phonics songs",
            steps: [
              "Play the Jolly Phonics 'ee' song. Teach the ACTION for 'ee': put your hands on your cheeks and move your head side to side like a donkey braying 'ee-aw, ee-aw' — just the /ee/ part! Practice 5 times.",
              "Words with EE: see, bee, tree, free, three, feet, meet, seed, feed, need, deed, week, seek, peek, beef, feel, heel, green, screen, sleep, sheep, sweep, speed, sweet, street.",
              "Play the Jolly Phonics 'or' song. Teach the ACTION for 'or': pretend to row a boat — pull arms back while saying /or/ /or/ /or/ like the oars! Practice 5 times.",
              "Words with OR: for, or, corn, born, torn, sort, sport, short, north, storm, fork, cork, pork, horse, force, morning, corner.",
              "Make digraph cards for 'ee' and 'or'. Flash ALL Group 4 cards (ai, j, oa, ie, ee, or) with actions. Then mix with Groups 1-3 for a full 24-sound review."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Long vs. Short Vowel Practice",
            materials: "Paper, pen",
            steps: [
              "Write pairs of words — child reads both and hears the difference:\nShort a: cat, hat, man → Long ai: rain, train, mail\nShort e: bed, pet, hen → Long ee: tree, feet, seed\nShort o: dog, pot, hot → Long oa: boat, coat, road\nShort i: pin, sit, big → Long ie: pie, tie, tried",
              "For each pair, child does the Jolly Phonics action for the vowel sound. This physical contrast helps cement the difference between short and long vowels.",
              "Mixed word reading (child doesn't know in advance if it's short or long): cat, rain, feet, hot, boat, pin, pie, tree, man, road, big, nail, green, dog, train."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Prediction and Connection Read-Aloud",
            materials: "Any picture book new to the child",
            steps: [
              "Before reading, look at the cover. Ask: 'What do you think this book will be about?' Write down child's prediction.",
              "Read the first few pages. Pause: 'Is it what you expected? Do you want to change your prediction?'",
              "At a turning point: 'What would YOU do if you were this character?'",
              "After reading, compare prediction to what happened. Ask: 'Does this remind you of anything in YOUR life?'",
              "Find 2-3 words with this week's vowel digraphs in the book."
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
            title: "New Sight Words: 'said', 'was', 'for', 'are'",
            materials: "Index cards, pen",
            steps: [
              "Review all 10 previous sight words. Flash cards.",
              "Introduce 'said': highly irregular — S-A-I-D says 'sed'. Practice 5 times.",
              "Introduce 'was': W-A-S, the 'a' says /o/. Practice 5 times.",
              "Introduce 'for' and 'are': 'for' uses the /or/ sound they just learned! 'are' is irregular. Practice each 5 times.",
              "Flash all 14 sight words. Sort into mastered vs. needs-practice."
            ]
          },
          {
            method: "Synthetic Phonics / Fluency",
            duration: "20 min",
            title: "Digraph-Rich Passage",
            materials: "Paper, pen",
            steps: [
              "Write this passage:\n\n'The Boat Trip\nJim and his dad got on a big boat.\nThey set sail at the coast and the sea was green.\n\"I need a raincoat,\" said Jim, and his dad said, \"I see rain too!\"\nIt did rain and rain. Jim felt the drops on his feet.\nBut then a rainbow! Jim said, \"I can see a rainbow!\"\nAt last the storm did stop and the sun came back.\nThey had toast and jam for lunch on the boat.\n\"This is the best trip,\" said Jim.'",
              "Pre-teach 'rainbow', 'storm', 'lunch', 'came', 'they', 'sea' — mix of decodable and not-yet-taught patterns.",
              "First read: child reads through. Help with stumbles. This passage is loaded with Group 4 digraphs (ai, oa, ee, or).",
              "Comprehension: 'Where did Jim go?', 'What happened with the weather?', 'What made Jim happy?'",
              "Second read for fluency."
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
            materials: "All sound cards, paper, pen",
            steps: [
              "Sound check: flash all 24 sound cards (Groups 1-4). Record which are instant (✓), slow (△), or unknown (✗). Frame it positively: 'Let's see how many sounds you know now!'",
              "Word reading: write these 12 words: sat, kick, frog, jump, train, boat, tree, storm, pie, green, paint, toast. Child reads each.",
              "Sight words: flash all 14 sight word cards.",
              "Sentence reading: 'The green frog sat on the boat in the rain.' Child reads. Note fluency.",
              "This is for YOUR information only. Tell child: 'You have learned SO many sounds and words! I'm really proud of you!'"
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "My Reading Journey Book",
            materials: "Several sheets of paper, stapler, crayons/markers",
            steps: [
              "Create a special 'book.' Page 1: Title — 'My Reading Journey by [child's name]'.",
              "Page 2: 'Sounds I Know' — child writes letters/digraphs they've learned. Decorate each one.",
              "Page 3: 'Words I Can Read' — write 10-15 words child can read. They pick favorites to illustrate.",
              "Page 4: 'My Story' — child dictates a short story about anything. You write it. They illustrate.",
              "Staple together. Read with pride."
            ]
          },
          {
            method: "Celebration",
            duration: "10 min",
            title: "Jolly Phonics Action Performance!",
            materials: "Phone or in-person audience, all stories created",
            steps: [
              "Have child perform ALL 24 Jolly Phonics actions in order for an audience — a parent, grandparent on the phone, a sibling, or stuffed animals. Each action with the sound.",
              "Then child 'reads' their Story Collection and Reading Journey Book to the audience.",
              "Celebrate! A trip to the library, a special treat, or a big hug and genuine praise for their incredible work over 4 weeks."
            ]
          }
        ]
      }
    ]
  },
  {
    week: 5,
    title: "Jolly Phonics Group 5: Z, W, NG, V, OO (short), OO (long)",
    focus: "Group 5 introduces the nasal digraph /ng/, the versatile /oo/ (two sounds!), and less common consonants. The -ING ending is a major unlock here.",
    days: [
      {
        day: "Monday",
        theme: "Introduce /z/ and /w/",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "10 min",
            title: "Groups 1-4 Cumulative Review",
            materials: "All 24 sound cards",
            steps: [
              "Flash all 24 cards in random order. Child says each sound with action. Any that take longer than 2 seconds go into a 'review' pile.",
              "Read 5 words: train, toast, green, sport, fries. Child blends each.",
              "Sight word speed round: flash all 14 sight words. Aim for instant recognition."
            ]
          },
          {
            method: "Jolly Phonics",
            duration: "15 min",
            title: "Meet /z/ and /w/",
            materials: "Paper, pen, Jolly Phonics songs",
            steps: [
              "Play the Jolly Phonics 'z' song. Teach the ACTION for /z/: move your arms like the wings of a bee and buzz — /zzzzz/! Practice 5 times. Point out: /z/ is like /s/ but with vibration. Hand on throat — /s/ no buzz, /z/ buzz!",
              "Write lowercase 'z'. Trace with action. Words: zap, zip, zoo, zoom, buzz, fizz, fuzz, jazz.",
              "Play the Jolly Phonics 'w' song. Teach the ACTION for /w/: blow on your hand like the wind — /w/ /w/ /w/! Feel the rounded lips. Practice 5 times.",
              "Write lowercase 'w'. Trace with action. Words: web, wet, wig, will, win, wag, wax, well, west, wind, wish, with.",
              "Sentences: 'I wish the wind was not so wet.' 'The bee did buzz and zoom to the zoo.' Child reads."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Introduce NG and /v/ — The -ING Ending!",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "15 min",
            title: "Meet NG and /v/",
            materials: "Paper, pen, Jolly Phonics songs",
            steps: [
              "Play the Jolly Phonics 'ng' song. Teach the ACTION for 'ng': imagine you're a weightlifter holding a heavy barbell — strain and say /ng/ /ng/ /ng/ from the back of your throat! Practice 5 times.",
              "Write 'ng' on a card (one sound, two letters — a digraph like 'ck'). /ng/ almost always comes at the END of words. Words: ring, sing, king, thing, long, song, strong, bring, swing, sting, hung, lung, bang, rang, gang, fang, spring, string.",
              "THE -ING ENDING: 'This is one of the most important endings in English! -ING means something is happening RIGHT NOW!' running, jumping, sitting, singing, fishing, getting, kicking, looking, sleeping, painting.",
              "Play the Jolly Phonics 'v' song. Teach the ACTION for /v/: pretend to drive a van — hold the steering wheel and say /vvvvv/ like the engine! Practice 5 times.",
              "Write lowercase 'v'. Words: van, vat, vet, vest, vim, visit. Sentences: 'The king is singing a long song.' 'The vet drove the van fast.' Child reads."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Introduce OO — Two Sounds!",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "15 min",
            title: "Meet OO (long) and OO (short)",
            materials: "Paper, pen, Jolly Phonics songs",
            steps: [
              "Say: 'OO is special — it makes TWO different sounds! Let's learn both.'",
              "Play the Jolly Phonics 'oo' (long) song. Teach the ACTION for long /oo/: move your head back as if to avoid a bad smell and say /oo/ like 'oo, that's stinky!' Practice 5 times.",
              "Long OO words: moon, soon, spoon, noon, room, boom, zoom, food, mood, pool, cool, tool, school, too, zoo, roof, boot, hoot, root, shoot.",
              "Play the Jolly Phonics 'oo' (short) song. Teach the ACTION for short /oo/: pull back slightly, less dramatically — a shorter /oo/ like 'ooh look!' Practice 5 times.",
              "Short OO words: book, cook, look, hook, took, shook (preview 'sh'), good, hood, wood, stood, foot, wool.",
              "Explain: 'If one sound doesn't make a real word, try the other! Your brain will figure out which /oo/ to use.' Mix both and have child read: moon, book, boot, look, food, good, pool, foot, root, cook, zoom, wood."
            ]
          },
          {
            method: "Multisensory / Kinesthetic",
            duration: "10 min",
            title: "Jolly Phonics Action Relay",
            materials: "Sound cards spread around the room",
            steps: [
              "Spread all 30 sound cards around the room — on furniture, floor, walls.",
              "Call out a sound. Child runs to find the matching card, does the Jolly Phonics action, says the sound, and brings it back. Continue until 15 cards are collected.",
              "Variation: call out a WORD. Child identifies the vowel sound, does that action, then finds the card. For 'moon' they'd do the long /oo/ action and find the 'oo' card.",
              "This is high energy and connects gross motor movement with sound-action-letter recall."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Vocabulary-Rich Read-Aloud",
            materials: "A picture book with rich language",
            steps: [
              "Before reading: 'Today we're word collectors! When we hear an interesting word, we'll stop and collect it.'",
              "Read the book. When you encounter a rich vocabulary word, stop: say the word, explain it, use it in a new sentence.",
              "After reading, review 3-4 collected words. Child uses each in their own sentence.",
              "Write collected words on a 'Word Collector' paper for the wall."
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
            title: "New Sight Words: 'you', 'they', 'have', 'with'",
            materials: "Index cards, pen",
            steps: [
              "Review all 14 previous sight words. Flash quickly.",
              "Introduce 'you' (Y-O-U, highly irregular), 'they' (TH hasn't been formally taught yet — just memorize), 'have' (silent E, A still says /a/), 'with' (TH preview).",
              "Practice each 5 times. Flash all 18 sight words. Sort into mastered vs. needs-practice."
            ]
          },
          {
            method: "Synthetic Phonics / Fluency",
            duration: "20 min",
            title: "Extended Passage Reading",
            materials: "Paper, pen",
            steps: [
              "Write this passage:\n\n'A Trip to the Moon\nZip and Boo are going to the moon!\nThey got in a big rocket. Zoom! Off it went.\n\"I can see the green land,\" said Zip. \"And a long river!\"\n\"Look at the moon!\" said Boo. \"It is so big and cool.\"\nThey did land on the moon. The ground was soft.\nZip said, \"I am jumping!\" And he did a big jump.\nBoo said, \"I am floating!\" And she went up and up.\nThey had food from a tin — it was good.\n\"I wish we could bring the dog,\" said Boo.\n\"Next trip!\" said Zip with a grin.\nSoon it was time to go. The rocket did zoom back.\n\"That was the best trip,\" they said.'",
              "Pre-teach: 'rocket', 'river', 'ground', 'floating', 'could', 'bring', 'next', 'time', 'back'. This passage uses Group 5 sounds heavily (z, w, ng, oo).",
              "Child reads the passage. Help with any word they can't get within 4 seconds.",
              "Comprehension: 'Where did Zip and Boo go?', 'What did they see?', 'What did they do on the moon?', 'What did Boo wish for?'",
              "Second read for fluency."
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "Week 5 Review and Creative Writing",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "10 min",
            title: "Groups 1-5 Speed Round",
            materials: "All 30 sound cards, timer",
            steps: [
              "Flash all 30 cards. Time the full run. Record time. Celebrate improvement over Week 3's benchmark.",
              "Word chain: moon → soon → spoon → spool → pool → cool → cook → look → book → boot → hoot → hoop → loop.",
              "Dictation: say 5 words, child writes: zoom, ring, vest, look, moon."
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "My Moon Adventure Story",
            materials: "Paper, pen, crayons",
            steps: [
              "Inspired by today's passage: 'If YOU went to the moon, what would you do?' Child dictates a moon adventure story.",
              "Write it in large print. Child illustrates. Add to Story Collection.",
              "Read through recent stories together."
            ]
          },
          {
            method: "Phonemic Awareness",
            duration: "10 min",
            title: "Sound Deletion with Actions",
            materials: "None",
            steps: [
              "Advanced phonemic awareness: removing a sound from a word. 'Say BRING without the /b/.' → 'ring'. Child does the Jolly Phonics action for the removed sound as they 'take it away.'",
              "More: stop→top, clap→lap, swing→wing, flag→lag, frog→rog (nonsense is fine!), slip→lip, grin→rin, train→rain.",
              "If ready, try last-sound deletion: 'Say LAMP without the /p/.' → 'lam'. 'Say BEST without the /t/.' → 'bes'. Harder — only push if they're ready."
            ]
          }
        ]
      }
    ]
  },
  {
    week: 6,
    title: "Jolly Phonics Group 6: Y, X, CH, SH, TH (voiced), TH (unvoiced)",
    focus: "The major consonant digraphs! CH, SH, and TH are among the most common letter combinations in English. After this week, children can decode the vast majority of common words.",
    days: [
      {
        day: "Monday",
        theme: "Introduce /y/ and /x/",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "10 min",
            title: "Cumulative Review",
            materials: "All 30 sound cards",
            steps: [
              "Flash all 30 cards. Child says each with action. Target: all under 2 seconds each.",
              "Read 6 words: train, moon, book, ring, strong, zoom. Child blends each.",
              "Sight word review: flash all 18 sight words."
            ]
          },
          {
            method: "Jolly Phonics",
            duration: "15 min",
            title: "Meet /y/ and /x/",
            materials: "Paper, pen, Jolly Phonics songs",
            steps: [
              "Play the Jolly Phonics 'y' song. Teach the ACTION for /y/: pretend to eat a yummy yogurt — /y/ /y/ yum! Practice 5 times. Note: 'y' can also act as a vowel later, but for now teach the consonant sound.",
              "Write lowercase 'y'. Words: yak, yam, yap, yes, yet, yell, yip.",
              "Play the Jolly Phonics 'x' song. Teach the ACTION for /x/: cross your arms into an X shape and say /ks/ /ks/ /ks/! Remember, X makes TWO sounds pushed together: /k/+/s/. Practice 5 times.",
              "Write lowercase 'x'. Words: ax, box, fox, hex, mix, six, fix, wax, next, text.",
              "Sentences: 'Yes! I can fix the box!' 'The fox had six yams in a mix.' Child reads."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Introduce CH and SH — The Big Digraphs!",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "20 min",
            title: "Meet CH and SH",
            materials: "Paper, pen, Jolly Phonics songs",
            steps: [
              "Play the Jolly Phonics 'ch' song. Teach the ACTION for 'ch': move your arms like a train — ch-ch-ch-ch-ch! Like a steam engine puffing along! Practice 5 times.",
              "IMPORTANT: demonstrate that /ch/ is NOT /c/ + /h/. Say them separately — it sounds nothing like /ch/. 'When they're partners, they make a completely new sound!'",
              "Words with CH beginning: chip, chop, chin, chest, check, chill, chum, chunk, chick. Words with CH ending: much, such, rich, which, lunch, bunch, bench, ranch, catch, match.",
              "Play the Jolly Phonics 'sh' song. Teach the ACTION for 'sh': place your finger to your lips — 'shhhh!' Like telling someone to be quiet! Practice 5 times.",
              "Words with SH beginning: she, ship, shop, shed, shell, shin, shock, shrug, shelf, shut, shrimp. Words with SH ending: fish, dish, wish, gush, rush, crush, brush, flash, fresh, splash, cash, mash.",
              "Make digraph cards for 'ch' and 'sh'. Sorting activity: write 10 words. Child sorts into 'starts with SH', 'starts with CH', 'ends with SH', 'ends with CH'."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Introduce TH (Two Sounds!) — Completing Group 6",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "15 min",
            title: "Meet TH (voiced and unvoiced)",
            materials: "Paper, pen, Jolly Phonics songs",
            steps: [
              "Play the Jolly Phonics 'th' song. Say: 'TH is extra special — it makes TWO sounds! For both, stick your tongue out a tiny bit between your teeth.'",
              "Teach the ACTION for unvoiced TH (as in 'thin'): pretend to be a naughty clown sticking your tongue out — /th/ /th/ /th/! No vibration in throat. Words: thin, thick, think, thing, three, thank, thud, thumb.",
              "Teach the ACTION for voiced TH (as in 'the'): same tongue position but 'turn on your voice' — feel the buzz! Words: the, this, that, them, then, they, there, with.",
              "Child puts hand on throat: unvoiced TH = no buzz, voiced TH = buzz. Practice switching.",
              "For now, both use the same action. Context guides which sound to use. Make 'th' digraph cards.",
              "ALL Group 6 is now complete! Flash y, x, ch, sh, th with actions. Then mix with all previous groups for a full review. Child now knows 36 sounds!"
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Digraph Reading Blitz",
            materials: "Paper, pen",
            steps: [
              "Write and read mixed digraph words:\nSH: shop, fish, shelf, brush, shrimp\nCH: chip, much, chest, lunch, catch\nTH: thin, this, thing, with, math\nNG: ring, thing, song, bring, string",
              "Word chains with digraphs: ship → chip (swap sh→ch), chip → chin (swap p→n), chin → thin (swap ch→th), thin → thing (add ng), thing → ring (remove th), ring → rung (swap i→u).",
              "Sentences: 'I think the ship is long and green.' 'She had fish and chips for lunch.' 'The king did sing a thing.' Child reads each."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Story Retelling Practice",
            materials: "A familiar picture book",
            steps: [
              "Choose a book child already knows. Say: 'Today YOU tell ME the story! I'll hold the book and turn pages.'",
              "Child retells using pictures as prompts. Don't correct — focus on their ability to sequence events.",
              "After: 'What happened first? Then what? How did it end?' Practices temporal sequencing.",
              "If child struggles, use prompts: 'What did [character] do here?' Retelling improves rapidly with practice."
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Sight Words and Digraph-Rich Passage",
        lessons: [
          {
            method: "Sight Words",
            duration: "10 min",
            title: "New Sight Words: 'do', 'what', 'when', 'this', 'there'",
            materials: "Index cards, pen",
            steps: [
              "Review all 18 previous sight words.",
              "Introduce: 'do' (irregular — O says /oo/), 'what' (WH says /w/, A says /o/), 'when' (decodable with WH), 'this' (TH + decodable), 'there' (irregular).",
              "Practice each 5 times. Flash all 23 sight words. Star any that need daily review."
            ]
          },
          {
            method: "Synthetic Phonics / Fluency",
            duration: "20 min",
            title: "Digraph-Rich Story",
            materials: "Paper, pen",
            steps: [
              "Write this passage:\n\n'The Shell Shop\nThere was a shell shop on the beach.\nChip went in with his mum. \"What a lot of shells!\" he said.\nThey had big shells and thin shells and shells that shone.\nChip said, \"This shell looks like a ship!\"\nHis mum picked a shell that was smooth and pink.\n\"I think this is the best,\" she said.\nThen Chip got a shock — he could hear the sea in his shell!\n\"Shh — can you hear it?\" he said.\nThey went to the bench and had lunch. Fish and chips!\n\"This is the best shop,\" said Chip with a grin.'",
              "Pre-teach: 'beach', 'shone', 'smooth', 'pink', 'picked', 'hear', 'sea'. Tell child these words before reading.",
              "First read. Comprehension: 'What kind of shop was it?', 'What surprised Chip?', 'What did they eat?'",
              "Second read for fluency. Encourage reading dialogue with expression."
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "Week 6 Celebration — Mid-Program Assessment",
        lessons: [
          {
            method: "Assessment",
            duration: "15 min",
            title: "Mid-Program Check: 36 Sounds!",
            materials: "All 36 sound cards, paper, pen",
            steps: [
              "Flash all 36 sound cards. Record: instant (✓), slow (△), incorrect (✗). Most Groups 1-3 should be instant. Groups 4-6 may still be developing.",
              "Word reading — 12 words (increasing difficulty): cat, ship, train, drive, much, moon, farm, thing, boat, fresh, string, splash. Child reads each.",
              "Sight word check: flash all 23 cards.",
              "Sentence: 'The three children went to the green shell shop and then had fish and chips for lunch.' Note fluency.",
              "Share results positively: 'You know 36 sounds — that's amazing!'"
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "The Digraph Detective Story",
            materials: "Paper, pen, crayons",
            steps: [
              "Help child create a story using LOTS of digraph words. Prompt: 'A detective hears strange sounds — shh, ch-ch-ch, thud! What's happening?'",
              "Write the story. After writing, child circles every digraph with a colored pencil. Count them!",
              "Add to Story Collection."
            ]
          },
          {
            method: "Jolly Phonics",
            duration: "10 min",
            title: "All 36 Actions Performance",
            materials: "Jolly Phonics songs",
            steps: [
              "Play a medley of Jolly Phonics songs from all 6 groups. Child does every action. This should feel like a celebratory performance!",
              "If you have an audience (family member, video call), let child show off their 36 actions. Each action with the sound.",
              "Celebrate the halfway point of the program!"
            ]
          }
        ]
      }
    ]
  },
  {
    week: 7,
    title: "Jolly Phonics Group 7: QU, OU, OI, UE, ER, AR",
    focus: "The final Jolly Phonics group! QU (always taught as a pair), diphthongs (ou, oi), long /ue/, and R-controlled vowels (er, ar). After this week, children know ALL 42 Jolly Phonics sounds!",
    days: [
      {
        day: "Monday",
        theme: "Introduce QU, OU, and OI",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "10 min",
            title: "Groups 1-6 Quick Review",
            materials: "All 36 sound cards",
            steps: [
              "Flash all 36 cards. Child says each with action. Target: all under 2 seconds.",
              "Read 5 words: splash, string, shrimp, church, thrill. Child blends each.",
              "Sight word review: flash all 23 sight words."
            ]
          },
          {
            method: "Jolly Phonics",
            duration: "20 min",
            title: "Meet QU, OU, and OI",
            materials: "Paper, pen, Jolly Phonics songs",
            steps: [
              "Play the Jolly Phonics 'qu' song. Teach the ACTION for 'qu': make a duck beak with your hand — /kw/ /kw/ /kw/ like a duck quacking! Practice 5 times. Q always brings U along!",
              "Write 'qu' together. Words: quit, quiz, quick, quack, queen, quest, quite.",
              "Play the Jolly Phonics 'ou' song. Teach the ACTION for 'ou': pretend you pricked your finger — 'ou! ou! ou!' (like 'ow!'). Practice 5 times.",
              "OU words: out, our, loud, cloud, proud, house, mouse, about, around, count, found, ground, mouth, sound, shout.",
              "Play the Jolly Phonics 'oi' song. Teach the ACTION for 'oi': cup hands around mouth like a megaphone — 'oi! oi!' Practice 5 times.",
              "OI words: oil, coin, join, point, noise, voice, moist, choice, boil, soil, foil. Note: OY (same sound) at word ends: boy, toy, joy, enjoy.",
              "Sentences: 'The queen went out in the loud rain.' 'I found a coin in the moist soil.' Child reads."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Introduce UE, ER, AR — ALL 42 SOUNDS COMPLETE! 🎉",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "20 min",
            title: "The Final Three Sounds!",
            materials: "Paper, pen, Jolly Phonics songs, colored pencils for celebration",
            steps: [
              "Play the Jolly Phonics 'ue' song. Teach the ACTION for 'ue': point at people — '/ue/ /ue/ /ue/' like 'you! you!' Practice 5 times. Words: blue, clue, glue, true, statue, rescue.",
              "Play the Jolly Phonics 'er' song. Teach the ACTION for 'er': roll hands over each other like a mixer — /er/ /er/ /er/! Practice 5 times. ER words: her, fern, under, sister, better, letter, never. Note: IR and UR make the same sound (bird, fur).",
              "Play the Jolly Phonics 'ar' song. Teach the ACTION for 'ar': open mouth wide — 'say ahhh... /ar/!' like at the doctor. Practice 5 times. AR words: car, far, star, farm, barn, card, dark, park, start, sharp, garden.",
              "🎉 CELEBRATION: Write ALL 42 sounds. Child reads each with action. THEY KNOW ALL 42 JOLLY PHONICS SOUNDS! Take a photo, do a dance!",
              "Play Group 7 songs as celebration music."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "R-Controlled Vowels Deep Dive",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Bossy R — All Patterns",
            materials: "Paper, pen",
            steps: [
              "Say: 'R is bossy! When R comes after a vowel, it changes the sound.' Make the 'Bossy R' fist-shake signal!",
              "AR (Jolly Phonics ar action — doctor): car, star, farm, barn, dark, park, sharp, garden.",
              "OR (Jolly Phonics or action — rowing): for, corn, born, sort, sport, short, north, storm, fork, morning.",
              "ER/IR/UR (Jolly Phonics er action — mixer): her, fern, bird, girl, first, shirt, fur, burn, turn, church, nurse, purple.",
              "Mixed reading: 12 R-controlled words. Child does the Jolly Phonics action for each vowel sound."
            ]
          },
          {
            method: "Multisensory / Kinesthetic",
            duration: "10 min",
            title: "Bossy R Action Sorting",
            materials: "Three papers labeled 'AR', 'OR', 'ER/IR/UR' on floor",
            steps: [
              "Say a word. Child does matching Jolly Phonics action AND jumps to correct paper.",
              "Words: car (AR), born (OR), girl (ER), star (AR), sport (OR), nurse (ER), dark (AR), horse (OR), fern (ER).",
              "Combined action + movement creates strong multisensory memory."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Non-Fiction Read-Aloud",
            materials: "A non-fiction picture book",
            steps: [
              "Say: 'This book tells us TRUE things — it's non-fiction!'",
              "Read together. After each section: 'What did we learn? Tell me one new fact.'",
              "Point out text features: headings, bold words, captions.",
              "After: 'What was most surprising? What do you want to know more about?'"
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Sight Words and Rich Passage",
        lessons: [
          {
            method: "Sight Words",
            duration: "10 min",
            title: "New Sight Words: 'would', 'could', 'your', 'come', 'some'",
            materials: "Index cards, pen",
            steps: [
              "Review all 23 previous sight words.",
              "Introduce: 'would' (silent L!), 'could' (same), 'your' (irregular), 'come' (O says /u/), 'some' (same pattern).",
              "Practice each 5 times. Flash all 28 sight words."
            ]
          },
          {
            method: "Synthetic Phonics / Fluency",
            duration: "20 min",
            title: "All 42 Sounds Passage",
            materials: "Paper, pen",
            steps: [
              "Write this passage:\n\n'The Farm in the Morning\nMark woke up at the farm when the birds started to sing.\nHe could see the barn from his room. The horse was in the yard.\n\"First I should do the morning jobs,\" he said.\nHe went to the garden and turned the dark soil with a fork.\nThen he heard a loud noise from the barn — the cow had a new calf!\n\"What a joy!\" said Mark with a proud grin.\nThe little calf had brown and white fur.\nHe would call her Star, because of the mark on her forehead.\nMark gave her some warm milk in a blue pail.\nStar drank it all! \"You are the best calf,\" Mark said.'",
              "Pre-teach: 'woke', 'started', 'should', 'heard', 'calf', 'little', 'because', 'forehead'. This passage uses sounds from ALL 7 groups.",
              "Child reads. Comprehension: 'What surprised Mark?', 'Why did he name the calf Star?'"
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "ALL 42 SOUNDS CELEBRATION! 🎉",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "15 min",
            title: "Grand 42-Sound Performance",
            materials: "All 42 sound cards, Jolly Phonics songs, audience!",
            steps: [
              "Arrange an audience if possible. Play the Jolly Phonics songs as a medley. Child performs ALL 42 actions with sounds!",
              "Flash all 42 cards randomly. Time complete run. Record as benchmark.",
              "Read 10 challenging words: church, shrimp, queen, moonlight, farmyard, thunderstorm, outside, playground, springtime, birthday.",
              "Present a '42 Sounds Certificate': '[Child's name] knows all 42 Jolly Phonics sounds!'"
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "Chapter Book Begins!",
            materials: "Paper, pen, crayons, stapler",
            steps: [
              "Launch: 'You know ALL the sounds — time for a CHAPTER BOOK!'",
              "Ask: 'Who is your character? Where do they live? What's special about them?'",
              "Child dictates Chapter 1 (4-6 sentences). Write, illustrate, create cover page.",
              "Chapters 2 and 3 continue in Weeks 9 and 10."
            ]
          }
        ]
      }
    ]
  },
  {
    week: 8,
    title: "Magic E, Word Endings & Blends Mastery",
    focus: "Building on all 42 sounds: the Magic E (split digraph) pattern, word endings (-ed, -ing, -er, -est), compound words, and consonant blends mastery.",
    days: [
      {
        day: "Monday",
        theme: "Magic E — The Silent Helper",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "20 min",
            title: "Magic E with A and I",
            materials: "Paper, pen, letter cards",
            steps: [
              "Say: 'Magic E sits at the end, makes no sound, but has MAGIC POWER — it makes the vowel say its NAME!'",
              "Demonstrate: C-A-P → add E → C-A-P-E. 'Magic E makes A say its name!'",
              "A_E pairs: cap→cape, tap→tape, mat→mate, mad→made, can→cane, plan→plane, hat→hate, rat→rate, van→vane.",
              "I_E pairs: kit→kite, bit→bite, rip→ripe, hid→hide, dim→dime, fin→fine, pin→pine, Tim→time, win→wine, shin→shine.",
              "Connect to Jolly Phonics: 'AI (rain action) and Magic A_E BOTH make A say its name! IE (salute) and Magic I_E BOTH make I say its name!'",
              "Sentences: 'I came to make a cake at the lake.' 'She can ride the bike in the sunshine.' Child reads."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Magic E with O and U, Plus Blends",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Magic E with O_E and U_E",
            materials: "Paper, pen",
            steps: [
              "O_E: hop→hope, not→note, cod→code, rod→rode, ton→tone, con→cone. Plus: home, hole, stove, broke, stone, phone.",
              "U_E: use, fuse, mute, cute, tube, tune, June, rule, rude, flute.",
              "Connect: 'OA (toothache action) and O_E both make long O! UE (you-you action) and U_E both make long U!'",
              "Comparison chart: cap/cape, kit/kite, hop/hope, tub/tube, bit/bite, not/note. Child reads pairs."
            ]
          },
          {
            method: "Multisensory / Kinesthetic",
            duration: "10 min",
            title: "Magic E Wand",
            materials: "A pencil (the 'wand'), letter cards",
            steps: [
              "Child uses a 'Magic E wand.' Lay out CVC word → wave wand → add E → read CVCe word.",
              "Do 8-10 pairs. Then reverse: start with CVCe, remove E, read CVC word."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Word Endings: -ED, -ING, -ER, -EST",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "-ED and -ING Endings",
            materials: "Paper, pen",
            steps: [
              "'-ED means it already happened! It makes three sounds: /t/ (jumped), /d/ (hugged), /id/ (wanted).' Practice 10 words.",
              "'-ING means happening now! Remember NG from Group 5?' Do weightlifter action. Practice: running, jumping, sitting, fishing, painting, cooking, reading, shouting.",
              "Mixed sentences: 'I was running and then I stopped.' 'She started painting a green tree.' Child reads."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "-ER, -EST, and Compound Words",
            materials: "Paper, pen, scissors",
            steps: [
              "'-ER means MORE. -EST means MOST.' fast→faster→fastest, tall→taller→tallest, loud→louder→loudest. Child reads sets.",
              "Compound words: sun+set, rain+coat, foot+ball, bed+room, book+shelf, star+fish, moon+light. Child reads each, identifying two words inside.",
              "Matching strips: cut paper, child matches halves: cup+cake, pop+corn, tooth+brush, rain+bow."
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Consonant Blends Mastery",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "20 min",
            title: "All Common Blends",
            materials: "Paper, pen",
            steps: [
              "Beginning blends (3 words each):\nL-blends: bl, cl, fl, gl, pl, sl\nR-blends: br, cr, dr, fr, gr, pr, tr\nS-blends: sc, sk, sm, sn, sp, st, sw",
              "End blends: -nd, -nk, -nt, -mp, -ft, -lk, -sk, -st.",
              "Challenge: stamp, trunk, frost, crisp, trust, blast, clamp, drift, sprint."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Making Connections Read-Aloud",
            materials: "A picture book with a relatable theme",
            steps: [
              "Three connection types: Text-to-Self, Text-to-Text, Text-to-World.",
              "Model each, then child shares one connection.",
              "Making connections transforms reading from decoding into meaning-making."
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
            materials: "All cards, paper, pen",
            steps: [
              "Flash all 42 sound cards. Record results. Also test Magic E concept.",
              "Word reading — 15 words: ship, train, stripe, church, moonlight, splash, toast, jumped, running, brightest, raincoat, footprint, starfish, farmyard, understand.",
              "Sight word check: flash all 28 cards.",
              "Celebrate: 'Two months of incredible progress!'"
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "Story Collection Update",
            materials: "Paper, pen, crayons",
            steps: [
              "Child writes (or dictates) a story about anything. Aim for 5-7 sentences.",
              "Add to Story Collection. Read the full collection. Count pages!"
            ]
          },
          {
            method: "Jolly Phonics",
            duration: "10 min",
            title: "42-Sound Speed Challenge",
            materials: "All 42 sound cards, timer",
            steps: [
              "Flash all 42 with actions. Time it. Try to beat Week 7's record!",
              "Play child's favorite Jolly Phonics song as a reward. Sing along!"
            ]
          }
        ]
      }
    ]
  },
  {
    week: 9,
    title: "Fluency Building & Comprehension Strategies",
    focus: "Shifting from 'learning to read' toward 'reading to learn.' Decoding becomes more automatic. Focus moves to fluency, expression, and deeper understanding.",
    days: [
      {
        day: "Monday",
        theme: "Reading with Expression",
        lessons: [
          {
            method: "Fluency",
            duration: "20 min",
            title: "Punctuation as Voice Signals",
            materials: "Paper, pen",
            steps: [
              "Period (.): voice DOWN. Question mark (?): voice UP. Exclamation (!): voice ENERGETIC!",
              "Mixed practice:\n'The frog jumped.' (down)\n'Did the frog jump?' (up)\n'The frog jumped!' (energy)\n'What a big splash!' (energy)\n'Was it cold?' (up)\n'It was very cold.' (down)",
              "Dialogue: 'Mum said, \"Stop!\"\n\"But why?\" asked Tom.\n\"Because it is dark,\" said Mum.' Different voices for characters."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Phrase Reading and Echo Reading",
        lessons: [
          {
            method: "Fluency",
            duration: "15 min",
            title: "Scooping Phrases",
            materials: "Paper, pen",
            steps: [
              "Write passage with phrase marks: 'The little girl / ran to the park / with her big dog. / She threw the ball / as far as she could.'",
              "Model reading in phrases. Child reads with slashes, then without."
            ]
          },
          {
            method: "Fluency",
            duration: "15 min",
            title: "Echo and Choral Reading",
            materials: "A book or passage",
            steps: [
              "Echo: you read a sentence with expression, child echoes it matching your style.",
              "Choral: read TOGETHER. You set pace and expression.",
              "Final solo read. Note improvement."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Visualization and Summarizing",
        lessons: [
          {
            method: "Comprehension",
            duration: "15 min",
            title: "Mind Movies (Visualization)",
            materials: "Paper, crayons",
            steps: [
              "Read aloud (child doesn't see text): 'The old castle stood on a green hill. Its tall towers reached into grey clouds. A tiny kitten stood at the gate, meowing.'",
              "Child closes eyes, describes what they 'see,' then draws it.",
              "Show text — child reads it. 'Does it match your drawing?'",
              "Second passage: child reads and draws their own visualization."
            ]
          },
          {
            method: "Comprehension",
            duration: "15 min",
            title: "SWBST Summarizing",
            materials: "A familiar book, paper, pen",
            steps: [
              "SOMEBODY wanted something, BUT there was a problem, SO they did something, THEN it worked out.",
              "Model with a familiar story. Child does it with a recent book. Write it down.",
              "This is a powerful tool for organizing story understanding."
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Sight Words and Independent Reading",
        lessons: [
          {
            method: "Sight Words",
            duration: "10 min",
            title: "New Sight Words: 'were', 'because', 'very', 'after', 'again', 'little'",
            materials: "Index cards, pen",
            steps: [
              "Review all 28 previous sight words.",
              "Add 6 more: were, because, very, after, again, little. Practice each 5 times.",
              "Flash all 34 sight words."
            ]
          },
          {
            method: "Independent Reading",
            duration: "20 min",
            title: "Sustained Independent Reading",
            materials: "2-3 books at child's comfortable level",
            steps: [
              "Child reads an entire book independently. Choose one where they read 90%+ without help.",
              "Set up cozy spot. 'Today you're reading on your own — like a real reader!'",
              "After: 'Tell me about it! What happened? Favorite part?'"
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "Chapter Book + Jolly Phonics Review",
        lessons: [
          {
            method: "Jolly Phonics",
            duration: "10 min",
            title: "42-Sound Maintenance",
            materials: "All 42 sound cards",
            steps: [
              "Flash all 42 with actions. Focus on any still slow — play the specific Jolly Phonics song.",
              "Read 8 complex words: thunderstorm, championship, playground, farmyard, springtime, footprint, countryside, butterscotch."
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "Chapter Book — Chapter 2",
            materials: "Chapter book, pen, crayons",
            steps: [
              "Reread Chapter 1. 'What happens next?'",
              "Child dictates Chapter 2 (5-7 sentences). Write, illustrate.",
              "Read Chapters 1 and 2. 'What will happen in Chapter 3?'"
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Questioning Strategy",
            materials: "A new picture book",
            steps: [
              "Before reading: 'I wonder why... I wonder if...' Write questions.",
              "Read first half. 'Answers yet? New questions?'",
              "Read rest. 'Which got answered? Any that didn't?'"
            ]
          }
        ]
      }
    ]
  },
  {
    week: 10,
    title: "Advanced Patterns & Writing Skills",
    focus: "Alternative spellings, silent letters, multi-syllable words, and expanding writing skills alongside reading.",
    days: [
      {
        day: "Monday",
        theme: "Alternative Spellings for Long Vowels",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "20 min",
            title: "Same Sound, Different Spellings",
            materials: "Paper, pen",
            steps: [
              "Long A: ai (rain — JP Group 4), a_e (cake — Magic E), ay (play, day — new!). AY usually at word END, AI in MIDDLE.",
              "Long E: ee (tree — JP Group 4), ea (sea, bean, dream — new!), e_e (these). EA is very common.",
              "Long I: ie (pie — JP Group 4), i_e (kite), igh (light, night — new!), y at end (my, fly — new!).",
              "Long O: oa (boat — JP Group 4), o_e (home), ow (snow, slow — note: OW also says /ow/ as in cow).",
              "Mixed challenge: day, clean, night, show, train, bike, tree, boat, cake, dream, fly, bone, beach, try, slow. Child reads all 15."
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Silent Letters and Multi-Syllable Words",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Silent Letters",
            materials: "Paper, pen",
            steps: [
              "Silent K (before N): know, knee, knit, knock, knife, knight.",
              "Silent W (before R): write, wrong, wrap, wrist.",
              "Silent B (after M): lamb, comb, climb, thumb, crumb.",
              "Silent GH: light, night, right, high, through, thought.",
              "Child reads 12 words, identifying which letter is silent."
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Breaking Down Big Words",
            materials: "Paper, pen",
            steps: [
              "Clap syllables: rab-bit (2), um-brel-la (3), cat-er-pil-lar (4). Do 10 words.",
              "Strategy: 'Look for parts you know!' fan-tas-tic, sun-set, gar-den, kit-ten, thun-der, mon-ster, ad-ven-ture, un-der-stand.",
              "Child reads each big word by syllables, then blends together."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Guided Writing",
        lessons: [
          {
            method: "Writing",
            duration: "20 min",
            title: "Independent Sentence Writing",
            materials: "Paper, pen",
            steps: [
              "Child writes their own sentences. For decodable words, use Jolly Phonics actions to identify each sound, then write the matching letter(s).",
              "Write 3-4 sentences together: 'The cat is big.' 'He had a red hat.' 'I can ride a bike.'",
              "For misspellings: praise sounds they got right. Guide to missing ones."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Shared Reading — Child Takes Lead",
            materials: "A book slightly above child's level",
            steps: [
              "Partner reading: you read a page, they read a page. Help with tricky words after 5 seconds.",
              "After: 'That was harder, but you read so much! Books like this will feel easy soon.'"
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Extended Independent Reading",
        lessons: [
          {
            method: "Sight Words",
            duration: "10 min",
            title: "Final Sight Word Push",
            materials: "Index cards, pen",
            steps: [
              "Review all 34 previous. Add: just, know, who, been, many, before.",
              "For 'know': 'Silent K!' For 'who': 'Tricky — W-H-O says /hoo/!'",
              "Flash all 40. Target: 35+ instant."
            ]
          },
          {
            method: "Independent Reading",
            duration: "20 min",
            title: "Building Reading Stamina",
            materials: "3-4 books at child's level",
            steps: [
              "15-20 minutes of independent reading. You read your own book nearby.",
              "After: 'What did you read? Best part?'",
              "Discuss daily reading plan going forward."
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "Chapter Book Finale + Review",
        lessons: [
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "Chapter Book — Chapter 3 (Finale!)",
            materials: "Chapter book, pen, crayons, stapler",
            steps: [
              "Reread Chapters 1-2. 'How does it end?'",
              "Child dictates final chapter (6-8 sentences). Illustrate. Add 'The End' page.",
              "Bind complete book. Read cover to cover. They authored a chapter book!"
            ]
          },
          {
            method: "Synthetic Phonics",
            duration: "10 min",
            title: "Advanced Word Reading",
            materials: "Paper, pen",
            steps: [
              "15 multi-syllable words: adventure, important, remember, beautiful, different, everyone, chocolate, butterfly, dinosaur, tomorrow, wonderful, telephone, crocodile, celebration, imagination.",
              "Break into syllables, find known parts, blend. Help as needed."
            ]
          },
          {
            method: "Jolly Phonics",
            duration: "10 min",
            title: "Jolly Phonics Sing-Along",
            materials: "Jolly Phonics songs on Spotify/YouTube",
            steps: [
              "Pick child's 5 favorite Jolly Phonics songs. Sing with all actions.",
              "Remind: 'These songs are YOUR tools. Whenever you're stuck on a sound, think of the action!'"
            ]
          }
        ]
      }
    ]
  },
  {
    week: 11,
    title: "Comprehension Deep Dive & Performance Reading",
    focus: "With decoding becoming automatic, this week focuses on deep comprehension strategies, reading fluency with expression, and the pure joy of reading.",
    days: [
      {
        day: "Monday",
        theme: "Thick and Thin Questions",
        lessons: [
          {
            method: "Comprehension",
            duration: "20 min",
            title: "Two Kinds of Questions",
            materials: "A picture book, sticky notes, pen",
            steps: [
              "THIN questions: simple answers right in the book ('What color is the dog?'). THICK questions: make you think ('Why did the dog run away?').",
              "Read a book. Every 2-3 pages, write one thin and one thick question on sticky notes.",
              "After: answer thin questions from text. Discuss thick questions — no single right answer.",
              "Child creates one thick question. Celebrate any reasonable attempt!"
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Inference — Reading Between the Lines",
        lessons: [
          {
            method: "Comprehension",
            duration: "15 min",
            title: "Detective Reading",
            materials: "Paper, pen",
            steps: [
              "Sometimes authors don't tell you everything — you have to figure it out from clues!",
              "Read: 'Sara put on her raincoat and boots. She picked up her umbrella and sighed.' Ask: 'Nice weather or bad? How do you know?' The text never SAYS — child INFERS.",
              "More passages: 'Tom looked at the clock. 3:00. He packed his books and ran to the door.' → Where is Tom?\n'The dog wagged its tail when it heard the key in the door.' → Who's coming?\nFor each: 'What clues told you?'"
            ]
          },
          {
            method: "Fluency",
            duration: "15 min",
            title: "Character Voice Reading",
            materials: "A book with dialogue",
            steps: [
              "Assign characters — you read narration, child reads a character. Different voices!",
              "Read the whole book as a performance.",
              "Swap characters and reread. Repetition builds fluency."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Performance Reading Rehearsal",
        lessons: [
          {
            method: "Fluency",
            duration: "20 min",
            title: "Rehearsing for Friday's Performance",
            materials: "A passage the child loves",
            steps: [
              "Choose a piece child will perform Friday. Should be familiar enough for confident reading.",
              "First rehearsal. Note stumbles — practice those words.",
              "Coach expression: 'Voice up for questions? Sound excited here? Read slowly for the scary part?'",
              "Second and third rehearsal. Almost performance-ready!"
            ]
          },
          {
            method: "Writing",
            duration: "15 min",
            title: "Book Review",
            materials: "Paper, pen, crayons",
            steps: [
              "Write a book review: title, summary, opinion, star rating out of 5. Child draws cover.",
              "Post on reading wall or add to Story Collection."
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Extended Reading and Jolly Phonics Maintenance",
        lessons: [
          {
            method: "Independent Reading",
            duration: "20 min",
            title: "Longest Reading Session Yet",
            materials: "Several books",
            steps: [
              "20 minutes of independent reading.",
              "After: child summarizes using SWBST if it was a story.",
              "Discuss: 'What kind of books do you like best? Let's find more!'"
            ]
          },
          {
            method: "Jolly Phonics",
            duration: "10 min",
            title: "Targeted Weak Spot Review",
            materials: "Sound cards for slow sounds",
            steps: [
              "Flash all 42. Identify 3-5 slowest. For each: play the Jolly Phonics song, do action 3 times, read 3 words.",
              "Targeted review is efficient and keeps all sounds fresh."
            ]
          }
        ]
      },
      {
        day: "Friday",
        theme: "Performance Reading Showcase",
        lessons: [
          {
            method: "Fluency",
            duration: "15 min",
            title: "The Performance!",
            materials: "Rehearsed piece, audience!",
            steps: [
              "Arrange audience. One final rehearsal. Then: the performance!",
              "Specific praise from listeners. Compare to early reading if you have recordings."
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "Letter to a Book Character",
            materials: "Paper, pen, envelope",
            steps: [
              "New writing type: a letter to a book character! Pick a character from a favorite book. Ask: 'What would you say to them?'",
              "Help child write (or dictate): 'Dear [character], I liked your story because... I think you were brave when... I wish I could... Your friend, [child's name].'",
              "This builds perspective-taking and personal connection to literature. Put in an envelope with the character's name on it. Tuck it into the book."
            ]
          },
          {
            method: "Phonemic Awareness",
            duration: "10 min",
            title: "Advanced Sound Manipulation",
            materials: "None",
            steps: [
              "These are high-level phonemic awareness tasks for children who are ready:",
              "Phoneme reversal: 'Say the sounds in PAN backwards.' → /n/-/a/-/p/ → NAP! More: top→pot, pit→tip, tap→pat, net→ten.",
              "Spoonerisms: 'Switch the first sounds of these two words: BAD COP → CAD BOP!' More: fun day → dun fay, big house → hig bouse.",
              "If child finds these fun, keep going. If not, skip — these are bonus skills, not essential at this stage."
            ]
          }
        ]
      }
    ]
  },
  {
    week: 12,
    title: "Celebration, Assessment & Reading Independence",
    focus: "The final week: comprehensive assessment, reading independence, celebration of 12 weeks of extraordinary progress, and a roadmap for continued growth.",
    days: [
      {
        day: "Monday",
        theme: "Cumulative Review — Everything They've Learned",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "20 min",
            title: "The Grand Review",
            materials: "All 42 sound cards, paper, pen",
            steps: [
              "Flash ALL 42 Jolly Phonics sound cards with actions. Time the complete run.",
              "Magic E review: write 8 CVCe words: cake, bike, hope, cube, flame, stripe, stone, flute. Child reads each.",
              "Word endings: jumped, painting, loudest, faster, running, landed, brightest, fishing. Child reads each.",
              "Grand word challenge — 20 words spanning ALL concepts:\n1. splash (blend + digraph)\n2. train (Jolly Phonics Group 4 ai)\n3. church (ch digraph + er)\n4. moonlight (compound + oo)\n5. stripe (blend + Magic E)\n6. shouted (-ed ending)\n7. pointing (-ing ending)\n8. brightest (-est ending)\n9. farmyard (compound + ar)\n10. playground (compound + ou)\n11. thunderstorm (compound + th + er + or)\n12. lunchtime (compound + ch)\n13. starfish (compound + ar)\n14. footprint (compound + oo)\n15. painting (-ing + ai)\n16. outside (ou + Magic E)\n17. springtime (blend + compound)\n18. birthday (ir + th)\n19. raincoat (ai + oa compound)\n20. nightlight (igh + Magic E compound)",
              "Child reads as many as they can. Celebrate EVERY word!"
            ]
          }
        ]
      },
      {
        day: "Tuesday",
        theme: "Comprehensive Assessment (Stress-Free!)",
        lessons: [
          {
            method: "Assessment",
            duration: "25 min",
            title: "12-Week Progress Assessment",
            materials: "All cards, paper, pen, timer",
            steps: [
              "Frame positively: 'Let's see how much you've learned in 12 weeks! This will be FUN.'",
              "Part 1 — All 42 Sounds (3 min): flash all 42 cards. Record instant (✓), slow (△), incorrect (✗). Target: 38+ instant.",
              "Part 2 — Word Reading (5 min): 20 words — cat, ship, train, drive, church, moon, farm, shout, coin, cake, jumped, running, biggest, footprint, raincoat, birthday, adventure, understand, beautiful, important. Record results.",
              "Part 3 — Sight Words (3 min): flash all 40 cards. Target: 35+ instant.",
              "Part 4 — Passage Reading (5 min): child reads a new passage cold:\n'It was a bright morning in spring. A little bird sang a sweet song from the top of the tallest tree. A girl named Rose heard the bird and ran outside. She looked up and saw its red and yellow wings shining in the sunlight. \"What a beautiful bird!\" she said. She wished she could fly just like it — high above the rooftops, over the river, past the green hills. But then the bird flew down and landed right on her hand! Rose smiled the biggest smile. She did not need to fly. The bird had come to her.'",
              "Note: fluency, accuracy, expression.",
              "Part 5 — Comprehension (3 min): 'What happened?', 'How did Rose feel?', 'Why did she smile at the end?', 'What might happen next?'",
              "Record everything for YOUR reference. Share only positives with child."
            ]
          }
        ]
      },
      {
        day: "Wednesday",
        theme: "Personalized Gap-Filling",
        lessons: [
          {
            method: "Synthetic Phonics",
            duration: "15 min",
            title: "Targeted Review Based on Assessment",
            materials: "Assessment results, relevant materials",
            steps: [
              "Look at Tuesday's results. Identify 3-5 areas needing support. Create a personalized session:",
              "If sounds need work: play the specific Jolly Phonics songs, do the actions, practice with salt tray or sky writing.",
              "If digraphs/vowel patterns are weak: focused word building with those specific patterns.",
              "If sight words need work: intensive Look-Say-Cover-Write-Check for specific words.",
              "If fluency is the gap: repeated reading of the assessment passage.",
              "If comprehension: re-read and practice SWBST summary.",
              "This ensures no gaps carry forward."
            ]
          },
          {
            method: "Read-Aloud / Dialogic Reading",
            duration: "15 min",
            title: "Reading a Harder Book Together — The Next Level",
            materials: "A book slightly above child's independent level",
            steps: [
              "Partner reading: you read a page, they read a page.",
              "After: 'That book was harder — but you read so much! Books like this will feel easy soon.' This gives a vision of where they're headed.",
              "Choose 2 words for the Word Collector wall."
            ]
          }
        ]
      },
      {
        day: "Thursday",
        theme: "Building a Reading Routine for the Future",
        lessons: [
          {
            method: "Independent Reading",
            duration: "20 min",
            title: "Extended Independent Reading",
            materials: "3-4 books at child's level",
            steps: [
              "Timer for 20 minutes. Child reads independently. You read your own book nearby.",
              "After: 'What did you read? Tell me the best part.'",
              "Set the daily plan: 'The most important thing now is reading every day. Even 15 minutes makes a huge difference. Let's pick a time!' Make it a non-negotiable part of the routine."
            ]
          },
          {
            method: "Language Experience Approach",
            duration: "15 min",
            title: "Letter to Future Self",
            materials: "Special paper, pen, envelope",
            steps: [
              "Help child write a letter to their future self (to open in 6 months or a year): 'What can you read now? Favorite book? What was hard? What are you proud of?'",
              "Write on nice paper. Child signs and draws. Seal in envelope with open date on front.",
              "When they open it later, they'll be amazed at their growth."
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
            materials: "ALL work from 12 weeks: Story Collection, chapter book, Reading Journey Book, book reviews, letter to future self",
            steps: [
              "Gather EVERYTHING from 12 weeks. Arrange chronologically. The difference between Week 1 and Week 12 will be extraordinary.",
              "Count together: stories written, books read, sounds learned (42!), sight words mastered (40!), words they can read (hundreds!).",
              "Create a Reading Certificate: '[Child's name] has completed 12 weeks of reading! They know all 42 Jolly Phonics sounds, 40+ sight words, and can read hundreds of words. They are officially a READER!' Child decorates it."
            ]
          },
          {
            method: "Celebration",
            duration: "15 min",
            title: "The Jolly Phonics Grand Finale Performance",
            materials: "Jolly Phonics songs, audience, child's favorite stories/books",
            steps: [
              "Arrange an audience. The performance has three parts:",
              "Part 1: Child performs all 42 Jolly Phonics actions with sounds — a complete run-through of everything they've learned. Play the songs!",
              "Part 2: Child reads their favorite self-authored story or chapter from their book.",
              "Part 3: Child reads a few pages from a favorite book they can read independently.",
              "Audience applauds. Specific praise from each listener.",
              "End with: 'You can READ. Every book is a door you can open. I can't wait to see what you read next.'"
            ]
          },
          {
            method: "Planning",
            duration: "10 min",
            title: "What Comes Next: A Parent Roadmap",
            materials: "Paper, pen (for the parent)",
            steps: [
              "While child enjoys their celebration, plan the next phase:",
              "1. DAILY READING: 15-20 minutes daily. Child reads independently from leveled readers. Plus a parent read-aloud at bedtime.",
              "2. LIBRARY VISITS: Weekly. Let child choose freely. Also choose 1-2 above-level books for read-alouds.",
              "3. JOLLY PHONICS MAINTENANCE: When child encounters a tricky sound, go back to the song and action. The Jolly Phonics Spotify/YouTube playlist is a permanent resource.",
              "4. NEXT PHONICS STEPS: Alternative spellings (ea, igh, ow, ay), soft c and g (city, gem), suffixes (-tion, -ness, -ful, -ly), prefixes (un-, re-, pre-).",
              "5. WRITING: Continue stories, lists, labels, letters. Invented spelling is still normal and healthy.",
              "6. COMPREHENSION: Keep using visualization, SWBST, questioning, connections, and inference strategies."
            ]
          }
        ]
      }
    ]
  }

];

const TEACHING_METHODS = [
  {
    id: "jolly-phonics",
    name: "Jolly Phonics",
    tagline: "The primary framework for this curriculum",
    color: "#D4442A",
    icon: "🎵",
    what: "Jolly Phonics is a comprehensive, multisensory phonics program developed in the UK by Sue Lloyd and Sara Wernham. It teaches children the 42 main sounds of English (not just the 26 letters of the alphabet) through a specific sequence of actions, songs, and stories. Each of the 42 sounds has a unique physical action and a song that helps children remember the letter-sound connection. The program is organized into 7 groups of sounds, carefully ordered so children can start building and reading words from the very first group.",
    why: "Jolly Phonics is one of the most widely used and research-backed phonics programs in the world, used in over 100 countries. Multiple studies — including a large-scale study in the UK by Rhona Johnston and Joyce Watson — show that children taught with Jolly Phonics significantly outperform peers in reading and spelling. It works because it engages ALL learning channels simultaneously: visual (seeing the letter), auditory (hearing the sound and song), kinesthetic (performing the action), and narrative (the story for each sound). For young children especially, the songs and actions make learning feel like play rather than work.",
    keyPrinciples: [
      "Each of the 42 sounds has a unique ACTION (physical gesture) that the child performs while saying the sound. For example: /s/ = weave hand like a snake, /a/ = wiggle fingers up arm like ants, /t/ = turn head like watching tennis.",
      "Each sound has a SONG available on Spotify and YouTube (search 'Jolly Phonics Songs'). Play the song when introducing a new sound, and replay it throughout the week for reinforcement. The songs are catchy and children remember them long after the lesson.",
      "Sounds are taught in 7 specific groups: Group 1 (s,a,t,i,p,n), Group 2 (ck,e,h,r,m,d), Group 3 (g,o,u,l,f,b), Group 4 (ai,j,oa,ie,ee,or), Group 5 (z,w,ng,v,oo,oo), Group 6 (y,x,ch,sh,th,th), Group 7 (qu,ou,oi,ue,er,ar). This order is deliberate — Group 1 letters combine into many words immediately.",
      "Digraphs (two letters making one sound, like 'sh', 'ck', 'ai') are taught as SINGLE sounds from the start — not as two separate letters. This is a key Jolly Phonics principle: children learn 42 SOUNDS, not 26 letters.",
      "Five key skills are taught: (1) Learning the letter sounds, (2) Learning letter formation, (3) Blending sounds to read words, (4) Identifying sounds in words for writing, (5) Learning tricky/irregular words."
    ],
    whatToKnow: "You don't need to buy any Jolly Phonics materials to use this curriculum — the songs are freely available on Spotify and YouTube, and the actions are described in each lesson. However, if you want to supplement, 'The Phonics Handbook' by Sue Lloyd is the definitive parent/teacher resource, and the 'Jolly Phonics Pupil Book' series provides structured writing practice. The Jolly Phonics app is also excellent for independent practice. The actions are THE most important element — children who consistently use the actions while learning sounds retain them much better than those who don't. Even when your child has mastered a sound, encourage them to do the action when they encounter it during reading — it becomes an automatic recall trigger."
  },
  {
    id: "synthetic-phonics",
    name: "Synthetic Phonics",
    tagline: "The evidence-based approach underpinning the curriculum",
    color: "#E85D3A",
    icon: "🔤",
    what: "Synthetic phonics teaches children to read by learning the individual sounds (phonemes) that letters and letter combinations make, then blending those sounds together to read words. 'Synthetic' means 'putting together' — synthesizing individual sounds into whole words. Jolly Phonics IS a synthetic phonics program, so when this curriculum references 'Synthetic Phonics' methods, it means the blending and segmenting skills that form the core of reading — the skills that Jolly Phonics songs and actions are designed to support.",
    why: "It is the most evidence-backed method for early reading instruction. The UK adopted it nationally after a landmark 2005 study (the Clackmannanshire study) showed children taught with synthetic phonics were 3.5 years ahead in reading by age 11. It works because English is an alphabetic language — letters represent sounds — and teaching this code directly is the most efficient path to independent reading.",
    keyPrinciples: [
      "Teach sounds, not letter names (at first). 'S' says /s/, not 'ess.'",
      "Introduce letters in a deliberate order that allows word-building early — Jolly Phonics Group 1 (s,a,t,i,p,n) is designed for exactly this.",
      "Blending: pushing individual sounds together to read words (/c/-/a/-/t/ → cat).",
      "Segmenting: pulling words apart into individual sounds (dog → /d/-/o/-/g/). This supports spelling.",
      "Move from simple CVC words (cat, dog) to blends (stop, grand) to digraphs (sh, ch, th) to longer words."
    ],
    whatToKnow: "Keep sounds 'pure' — say /s/ not 'suh', /t/ not 'tuh'. Adding a vowel sound makes blending much harder. The Jolly Phonics songs model pure sounds perfectly, so use them as your reference. When your child is blending, be patient — it takes time for the brain to automate this process. Expect choppy, sound-by-sound reading for weeks before it starts flowing. This is completely normal."
  },
  {
    id: "sight-words",
    name: "Sight Words / Heart Words",
    tagline: "Instant recognition for high-frequency words",
    color: "#5B8C5A",
    icon: "👁️",
    what: "Sight words are high-frequency words that children learn to recognize instantly, without needing to sound them out each time. Some (like 'the', 'said', 'to') are genuinely irregular and CAN'T be fully decoded with basic phonics rules. Others (like 'and', 'in', 'it') are decodable but appear so frequently that instant recognition dramatically improves reading fluency. In Jolly Phonics, these are called 'tricky words.'",
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
      "The Jolly Phonics actions add a kinesthetic dimension to phonemic awareness — when a child does the snake action while identifying /s/ at the start of 'sun', they're combining phonemic awareness with physical memory.",
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
    what: "Multisensory learning engages multiple senses simultaneously — seeing, hearing, touching, and moving — to strengthen memory and understanding. Jolly Phonics is inherently multisensory (every sound has a visual letter, an auditory song, and a kinesthetic action), but this curriculum adds additional multisensory techniques: salt/sand tray writing, sky writing, arm tapping, body letter shapes, and the Magic E wand.",
    why: "Different children learn best through different sensory channels. Some are visual learners, some are auditory, some are kinesthetic (learn by doing/moving). Multisensory instruction doesn't require you to figure out your child's 'type' — it engages ALL channels at once, so every child benefits. It's also especially effective for children with dyslexia or other learning differences. Research consistently shows that multisensory instruction produces stronger, more durable learning.",
    keyPrinciples: [
      "Always combine at least 2 senses: say the sound (auditory) WHILE doing the Jolly Phonics action (kinesthetic) WHILE looking at the letter (visual). Three channels at once!",
      "Use varied textures: sandpaper, salt trays, finger paint, play-doh letters, pipe cleaners.",
      "Include whole-body movement: sky writing (writing large letters in the air with your arm), letter body shapes, hopping to sounds, the Jolly Phonics action relay game.",
      "Arm tapping for blending: touch shoulder, elbow, wrist as you say each sound (with Jolly Phonics actions), then slide your hand down your arm to blend.",
      "The Jolly Phonics songs add an AUDITORY-MUSICAL channel that pure phonics instruction lacks. Music activates different brain regions and creates stronger memory traces."
    ],
    whatToKnow: "Multisensory doesn't mean 'messy and complicated.' A salt tray is just a plate of salt. Sky writing is just waving your arm. The Jolly Phonics actions are just hand gestures. These techniques add maybe 2-3 minutes to a lesson but can dramatically improve retention, especially for sounds or words a child keeps forgetting. The golden rule: if a child is stuck on a sound, go back to the Jolly Phonics song and action — the multisensory anchor usually brings the memory right back."
  }
];


const RESOURCES = [
  {
    id: "jolly-phonics-guide",
    title: "Jolly Phonics: 42 Sounds, Actions & Songs",
    description: "Complete reference for all 42 Jolly Phonics sounds organized by group, with the action description for each sound and the song to find on Spotify/YouTube.",
    type: "reference",
    content: {
      jpGroups: [
        {
          group: "Group 1",
          sounds: [
            { sound: "s", action: "Weave hand like a snake", song: "The Snake is in the Grass", keywords: "snake, ssssss" },
            { sound: "a", action: "Wiggle fingers up arm like ants", song: "Ants on My Arm", keywords: "ants, /a/ /a/ /a/" },
            { sound: "t", action: "Turn head side to side like watching tennis", song: "Tennis (t, t, t)", keywords: "tennis, crisp /t/" },
            { sound: "i", action: "Wiggle fingers from tummy to nose like a mouse", song: "Inky Mouse", keywords: "mouse, /i/ /i/ /i/" },
            { sound: "p", action: "Pretend to blow out candles", song: "Puff Out the Candles", keywords: "candles, puff /p/" },
            { sound: "n", action: "Arms out like an airplane engine", song: "Noisy Airplane", keywords: "airplane, /nnnnn/" }
          ]
        },
        {
          group: "Group 2",
          sounds: [
            { sound: "ck", action: "Click fingers like castanets", song: "Castanets (ck, ck, ck)", keywords: "click, one sound /k/" },
            { sound: "e", action: "Pretend to crack an egg on a pan", song: "Crack an Egg", keywords: "egg, tap-tap /e/" },
            { sound: "h", action: "Pant like a dog, hand in front of mouth", song: "Ha Ha Ha", keywords: "panting, warm air /h/" },
            { sound: "r", action: "Pretend to be a puppy shaking a rag", song: "Rip the Rag", keywords: "puppy, /rrrr/" },
            { sound: "m", action: "Rub tummy — yummy food!", song: "Mmm Mmm Mmm", keywords: "yummy, /mmmm/" },
            { sound: "d", action: "Play air drums", song: "Beat the Drum", keywords: "drums, tongue tap /d/" }
          ]
        },
        {
          group: "Group 3",
          sounds: [
            { sound: "g", action: "Spiral hand down like water going down a drain", song: "Gurgling Water", keywords: "drain, gurgle /g/" },
            { sound: "o", action: "Pretend to switch a light on and off", song: "Oh Oh Oh", keywords: "light switch, /o/ /o/" },
            { sound: "u", action: "Mime opening an umbrella", song: "Up Goes the Umbrella", keywords: "umbrella, /u/ /u/" },
            { sound: "l", action: "Pretend to lick a lollipop", song: "Lovely Lollipop", keywords: "lollipop, /llll/" },
            { sound: "f", action: "Let air out like a deflating tire", song: "Flat Tire (ffff)", keywords: "tire, /fffff/" },
            { sound: "b", action: "Pretend to hit a ball with a bat", song: "Bat and Ball", keywords: "bat+ball = b, /b/" }
          ]
        },
        {
          group: "Group 4",
          sounds: [
            { sound: "ai", action: "Cup ear as if it's raining", song: "It's Raining (ai, ai)", keywords: "rain, long A /ay/" },
            { sound: "j", action: "Wobble like a jelly on a plate", song: "Jelly on a Plate", keywords: "jelly, /j/ /j/" },
            { sound: "oa", action: "Hand to mouth — toothache!", song: "Oh No, Toothache!", keywords: "toothache, long O /oa/" },
            { sound: "ie", action: "Stand to attention and salute", song: "Aye Aye Captain!", keywords: "salute, long I /ie/" },
            { sound: "ee", action: "Hands on cheeks, head side to side like a donkey", song: "Ee-Aw Donkey", keywords: "donkey, long E /ee/" },
            { sound: "or", action: "Pretend to row a boat", song: "Row the Boat", keywords: "rowing, /or/ /or/" }
          ]
        },
        {
          group: "Group 5",
          sounds: [
            { sound: "z", action: "Arms like bee wings, buzzing", song: "Buzzy Bee (zzz)", keywords: "bee, buzz /zzzz/" },
            { sound: "w", action: "Blow on hand like the wind", song: "Blow, Wind, Blow", keywords: "wind, rounded lips /w/" },
            { sound: "ng", action: "Weightlifter holding heavy barbell", song: "A Strong King", keywords: "strong, back of throat /ng/" },
            { sound: "v", action: "Pretend to drive a van — steering wheel", song: "Drive the Van (vvv)", keywords: "van, vibrate /vvvv/" },
            { sound: "oo (long)", action: "Move head back — bad smell!", song: "Ooo, That's Stinky!", keywords: "moon, /oo/ long" },
            { sound: "oo (short)", action: "Pull back slightly — ooh look!", song: "Ooh, Look at That!", keywords: "book, /oo/ short" }
          ]
        },
        {
          group: "Group 6",
          sounds: [
            { sound: "y", action: "Pretend to eat yummy yogurt", song: "Yummy Yogurt", keywords: "yogurt, /y/ yum" },
            { sound: "x", action: "Cross arms into X shape", song: "X-Ray (ks, ks)", keywords: "X shape, /ks/" },
            { sound: "ch", action: "Arms like a train — ch ch ch", song: "The Little Train", keywords: "train, /ch/ /ch/" },
            { sound: "sh", action: "Finger to lips — shhhh!", song: "Be Quiet! Shh!", keywords: "quiet, /shhhh/" },
            { sound: "th (unvoiced)", action: "Naughty clown sticking tongue out", song: "Cheeky Clown (th)", keywords: "tongue out, no buzz" },
            { sound: "th (voiced)", action: "Same but with voice turned on", song: "Same action, add voice", keywords: "tongue out, buzz!" }
          ]
        },
        {
          group: "Group 7",
          sounds: [
            { sound: "qu", action: "Duck beak hand — quack quack!", song: "Quack Quack Duck", keywords: "duck, /kw/ /kw/" },
            { sound: "ou", action: "Pretend to prick finger — ou! ou!", song: "Ouch! That Hurt!", keywords: "ouch, /ow/" },
            { sound: "oi", action: "Cup hands like megaphone — oi! oi!", song: "Ship Ahoy! (oi)", keywords: "sailor, /oi/" },
            { sound: "ue", action: "Point at people — you! you!", song: "You! You! You!", keywords: "pointing, /ue/ long U" },
            { sound: "er", action: "Roll hands like a mixer", song: "Whirr Goes the Mixer", keywords: "mixer, /er/" },
            { sound: "ar", action: "Open mouth wide — doctor says ahh", song: "Open Wide (ar)", keywords: "doctor, /ar/" }
          ]
        }
      ]
    }
  },
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
    title: "Jolly Phonics Letter Introduction Order",
    description: "Jolly Phonics teaches 42 sounds in 7 groups. This order is carefully designed so children can build real words from Group 1 onward. The first 6 letters (s,a,t,i,p,n) combine to make dozens of words immediately!",
    type: "reference",
    content: {
      phases: [
        { phase: "Group 1 (Week 1)", letters: "s, a, t, i, p, n", note: "High-frequency letters that combine into many CVC words — reading starts here!" },
        { phase: "Group 2 (Week 2)", letters: "ck, e, h, r, m, d", note: "Includes first digraph (ck) and short /e/. Word possibilities explode." },
        { phase: "Group 3 (Week 3)", letters: "g, o, u, l, f, b", note: "Completes all five short vowels! Plus careful b/d introduction." },
        { phase: "Group 4 (Weeks 4)", letters: "ai, j, oa, ie, ee, or", note: "First long vowel sounds and digraphs — a major leap." },
        { phase: "Group 5 (Week 5)", letters: "z, w, ng, v, oo (short), oo (long)", note: "The -ING ending unlocked! Plus the two /oo/ sounds." },
        { phase: "Group 6 (Week 6)", letters: "y, x, ch, sh, th, th", note: "Major consonant digraphs. CH, SH, TH are among the most common patterns." },
        { phase: "Group 7 (Week 7)", letters: "qu, ou, oi, ue, er, ar", note: "Final group! Diphthongs and R-controlled vowels. All 42 sounds complete!" },
        { phase: "Weeks 8-12", letters: "Magic E, -ed, -ing, -er, -est, alternative spellings", note: "Building advanced skills on top of the 42-sound foundation." }
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

            {/* Jolly Phonics Groups */}
            {r.id === "jolly-phonics-guide" && r.content.jpGroups.map((g, gi) => (
              <div key={gi} className="lesson-card">
                <h4 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#D4442A",
                  marginBottom: 12,
                }}>{g.group}</h4>
                {g.sounds.map((s, si) => (
                  <div key={si} style={{
                    padding: "10px 12px",
                    background: si % 2 === 0 ? "#FAF6F0" : "transparent",
                    borderRadius: 8,
                    marginBottom: 4,
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                      <span style={{
                        fontFamily: "'Literata', Georgia, serif",
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#D4442A",
                        minWidth: 36,
                      }}>{s.sound}</span>
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#2D2A26",
                      }}>{s.action}</span>
                    </div>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      color: "#8A8680",
                      paddingLeft: 46,
                    }}>🎵 {s.song}</div>
                  </div>
                ))}
              </div>
            ))}

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
