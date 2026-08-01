import type { Topic } from "./types";

/* ===========================================================================
   ANTICIPATORY GRIEF — grieving before the loss
   =========================================================================== */

export const ANTICIPATORY_TOPICS: Topic[] = [
  {
    slug: "what-is-anticipatory-grief",
    title: "What is anticipatory grief?",
    summary:
      "Grief that begins while the person is still alive. It is common, it is not disloyal, and naming it usually brings enormous relief.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "Grieving someone who is still here",
        body: [
          "When a serious diagnosis arrives, people begin to mourn immediately — not only a future death, but the losses happening now: the person's independence, their role in the family, the plans you had, the future you assumed.",
          "It can be as intense as grief after death, and it is often lonelier, because there is no funeral, no cards, and no social permission to be grieving someone you are sitting next to.",
        ],
      },
      {
        heading: "What it looks like",
        list: [
          "Crying at ordinary moments — a song, a photograph, their handwriting on a shopping list.",
          "Rehearsing the death in your mind, then feeling monstrous for it.",
          "Pulling away emotionally to protect yourself, then feeling guilty about the distance.",
          "Living in two realities: caring practically today, imagining the funeral tonight.",
          "Exhaustion, forgetfulness, irritability, physical aches.",
          "Moments of relief or impatience — 'I just want it to be over' — followed by shame.",
        ],
      },
      {
        heading: "Patients grieve too",
        body: [
          "The person who is ill is often grieving hardest and saying least: their own future, their body, their independence, and the pain they see in the people they love.",
          "Families sometimes discover that both sides have been protecting each other from the same conversation for months.",
        ],
      },
      {
        heading: "Does it make bereavement easier?",
        body: [
          "Not automatically. Anticipatory grief can allow time to say what matters, settle affairs and prepare — and that helps. But it does not use up a fixed quota of grief in advance; the death still lands.",
          "What does help afterwards is what happened in this period: things said, presence given, conflicts eased.",
        ],
      },
    ],
    related: [
      { href: "/support/anticipatory-grief/common-emotions", label: "Common emotions" },
      { href: "/care/counselling", label: "Talk to a counsellor" },
    ],
  },
  {
    slug: "common-emotions",
    title: "The common emotions",
    summary:
      "Sadness, dread, numbness, tenderness, resentment, relief — often within a single afternoon. All of it belongs.",
    audience: ["caregiver", "family", "patient"],
    blocks: [
      {
        heading: "What people report most",
        list: [
          "Sadness that arrives in waves, triggered by small ordinary things.",
          "Dread of a specific moment: the phone call, the last breath, the empty chair.",
          "Numbness — feeling nothing at all, and fearing that means you do not care.",
          "Hyper-attachment — an urge to record, photograph and memorise everything.",
          "Irritability with the person, with other relatives, with strangers in car parks.",
          "Relief at the thought of an end to suffering — theirs and yours.",
          "Tenderness and love more intense than you have felt in years.",
        ],
      },
      {
        heading: "Why the feelings contradict each other",
        body: [
          "You are losing several things at once, at different speeds, and each loss has its own emotion. Grief for the person they were, fear of the death to come, anger at the illness, love for who is still here.",
          "Contradiction is not confusion; it is accuracy.",
        ],
      },
      {
        heading: "What helps",
        list: [
          "Say it out loud to someone outside the household.",
          "Write the sentence you would not say in front of them.",
          "Let waves pass rather than analysing them — most subside in minutes.",
          "Keep something in the week that is not about illness.",
          "Do not compare your grief to anyone else's; there is no correct dose.",
        ],
      },
    ],
    related: [{ href: "/tools/journal", label: "Write it down" }],
  },
  {
    slug: "guilt",
    title: "Guilt",
    summary:
      "Almost universal, almost always disproportionate — and it responds well to being examined out loud.",
    audience: ["caregiver", "family", "patient"],
    blocks: [
      {
        heading: "The usual forms",
        list: [
          "'I should have noticed the symptoms sooner.'",
          "'I lost my temper with them yesterday.'",
          "'I went out for the evening and enjoyed myself.'",
          "'I wished it was over.'",
          "'I wasn't there when it happened.'",
          "For patients: 'I'm doing this to my family.'",
        ],
      },
      {
        heading: "Separate guilt from responsibility",
        body: [
          "Guilt assumes you had knowledge, control and choice. Ask honestly: what did I actually know at the time, and what could I actually have done?",
          "Most caregiver guilt fails that test immediately — it is grief wearing a mask, because guilt at least implies control, and helplessness is harder to bear than blame.",
        ],
      },
      {
        heading: "Working with it",
        steps: [
          "Write the accusation in your own words.",
          "Write what you knew and could control at the time.",
          "Write what a fair outside observer would say.",
          "If you did cause harm, name it, apologise where possible, and make a repair.",
          "Say the sentence to one other person. Guilt shrinks in company and grows in silence.",
        ],
      },
    ],
    related: [
      { href: "/support/modules/cognitive-restructuring", label: "Examining thoughts" },
    ],
  },
  {
    slug: "anger",
    title: "Anger",
    summary:
      "At the illness, the doctors, the delays, God, other families, the person themselves — and at yourself.",
    audience: ["caregiver", "family", "patient"],
    blocks: [
      {
        heading: "Why anger comes with grief",
        body: [
          "Anger is what powerlessness feels like when it has somewhere to point. It is also easier to bear than sorrow, so the mind often reaches for it first.",
          "It commonly lands on the nearest safe target — a partner, a nurse, a call centre — rather than on the actual cause.",
        ],
      },
      {
        heading: "Anger at the person who is ill",
        body: [
          "For being difficult, for refusing help, for smoking or drinking, for not fighting harder, for leaving you. This is one of the least admitted and most common experiences in caregiving.",
          "It does not mean you love them less. Saying it once, to someone safe, usually reduces it more than months of suppressing it.",
        ],
      },
      {
        heading: "Handling it without damage",
        list: [
          "Discharge it physically where you can — walking, cleaning, hitting a pillow, shouting in the car.",
          "Write the unsendable letter, in full, and do not send it.",
          "Name the fear underneath when you speak: 'I'm angry because I'm frightened.'",
          "Deal with legitimate anger properly — if care has been poor, make a formal complaint rather than carrying it.",
          "Get help if anger is turning into aggression towards anyone, including yourself.",
        ],
      },
    ],
    related: [{ href: "/support/modules/emotional-regulation", label: "Emotional regulation" }],
  },
  {
    slug: "fear",
    title: "Fear",
    summary:
      "Fear of the death itself, of suffering, of coping alone afterwards, of the moment you will be told.",
    audience: ["caregiver", "family", "patient"],
    blocks: [
      {
        heading: "Name the specific fear",
        body: [
          "'I'm scared' is too large to work with. Underneath it there is usually something specific: that they will be in pain, that I will not be there, that I will fall apart, that I cannot manage the money, that I will forget their voice.",
          "Named fears can be answered. Some have practical answers; the rest need company rather than solutions.",
        ],
      },
      {
        heading: "Fears with practical answers",
        list: [
          "Pain — ask the palliative care team exactly what the plan is for symptom control. Ask what happens at night and at weekends.",
          "The moment itself — ask a nurse to describe what usually happens in the final days. Knowing removes a great deal of terror.",
          "Being alone with them when it happens — ask who to call, and in what order.",
          "Money and paperwork — get one appointment with a social worker or adviser.",
          "Practical care — ask for training in lifting, feeding, medication, and mouth care.",
        ],
      },
      {
        heading: "Fears that need company",
        body: [
          "Fear of life afterwards, of who you will be without them, of not surviving it. These cannot be solved in advance and do not need to be.",
          "Say them aloud to someone who will not rush to reassure you. Being heard reduces fear more reliably than being reassured.",
        ],
      },
    ],
    related: [{ href: "/support/anticipatory-grief/preparing-emotionally", label: "Preparing emotionally" }],
  },
  {
    slug: "hope-versus-realism",
    title: "Hope versus realism",
    summary:
      "Families are often told to choose between them. You do not have to — most people hold both, and doing so is protective.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "Dual awareness",
        body: [
          "It is entirely possible to hope for more time and to prepare for less of it. Clinicians call it hoping for the best while planning for the worst, and it is associated with better outcomes for families, not worse.",
          "Preparing does not cause the death. Refusing to prepare does not prevent it — it only removes choices later.",
        ],
      },
      {
        heading: "When family members disagree",
        list: [
          "One person's 'realism' can feel to another like giving up on their mother.",
          "Agree that no one has to abandon their hope in order for practical preparations to happen.",
          "Let the patient's own stated wishes settle disputes wherever possible.",
          "Use the care team to give the same information to everyone at once.",
          "Where views cannot be reconciled, a social worker, chaplain or family therapist helps more than another argument.",
        ],
      },
      {
        heading: "Practical preparation that respects hope",
        list: [
          "Advance care planning and preferred place of care.",
          "Power of attorney, will, and access to accounts.",
          "Which treatments they would and would not want, in writing.",
          "Funeral or ritual preferences, if they want to say.",
          "Passwords, keys, and where important documents live.",
        ],
      },
    ],
    related: [{ href: "/support/modules/hope-therapy", label: "Hope therapy" }],
  },
  {
    slug: "preparing-emotionally",
    title: "Preparing emotionally",
    summary:
      "You cannot rehearse grief away. You can reduce the number of things left undone, unsaid and unarranged.",
    audience: ["caregiver", "family", "patient"],
    blocks: [
      {
        heading: "The four things people wish they had done",
        list: [
          "Said the important things while conversation was still possible.",
          "Asked the questions only that person could answer.",
          "Recorded the voice, the stories, the recipes.",
          "Sorted the practical and legal matters early, so the last weeks were not spent on paperwork.",
        ],
      },
      {
        heading: "Prepare yourself, not just the arrangements",
        list: [
          "Decide who you will call in the first hour afterwards.",
          "Tell your employer roughly what is coming.",
          "Identify who will look after the children, the pets, the house.",
          "Line up your own support — a counsellor, a group, one friend who will still be there in month six.",
          "Notice what you are already leaning on too heavily: alcohol, work, isolation.",
        ],
      },
      {
        heading: "Ask the medical team directly",
        list: [
          "What are the likely last weeks and days going to look like?",
          "What symptoms should we expect, and what is the plan for each?",
          "Who do we call at 3am?",
          "Where can they be cared for — home, hospice, hospital — and what would each involve?",
          "What happens immediately after a death at home?",
        ],
      },
    ],
    related: [{ href: "/support/anticipatory-grief/saying-goodbye", label: "Saying goodbye" }],
  },
  {
    slug: "difficult-conversations",
    title: "Difficult conversations",
    summary:
      "The conversations everyone avoids are usually the ones that bring the most relief once they have happened.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "Opening lines that work",
        list: [
          "'Can I ask you something difficult? You can say no.'",
          "'I've been thinking about what you'd want if things got worse.'",
          "'Is there anything you're worried about that we haven't talked about?'",
          "'I don't want to say the wrong thing, so I've been saying nothing. That's worse.'",
          "'Is there anyone you want to see?'",
        ],
      },
      {
        heading: "How to hold the conversation",
        steps: [
          "Choose a private time when neither of you is exhausted, and turn the television off.",
          "Ask permission, and accept 'not today' without pushing.",
          "Say your piece in short sentences, then stop and let silence work.",
          "Do not correct their beliefs or hopes mid-conversation.",
          "Close with what you will do next: 'I'll write that down and talk to the nurse.'",
        ],
      },
      {
        heading: "The four things worth saying",
        body: [
          "Palliative care clinicians often describe four sentences that matter most at the end of a life: thank you; I forgive you; please forgive me; I love you.",
          "They do not require a formal occasion. They land just as well over tea, in a car, or in a text message.",
        ],
      },
      {
        heading: "If they refuse to talk about dying",
        body: [
          "Some people never will, and that is their right. You can still say your own part — 'I want you to know…' — without requiring a response.",
          "Practical planning can also be framed sideways: 'Help me understand how you'd want things done, so I don't get it wrong.'",
        ],
      },
    ],
    related: [{ href: "/support/family/communicating", label: "Communicating well" }],
  },
  {
    slug: "legacy-building",
    title: "Legacy building",
    summary:
      "Deliberately capturing what should outlast the illness — stories, voice, values, instructions and love.",
    audience: ["patient", "family", "caregiver"],
    blocks: [
      {
        heading: "Why it helps both sides",
        body: [
          "For the person who is ill, legacy work restores a sense of purpose and of being more than a patient — dignity therapy, a structured version of this, measurably reduces distress.",
          "For the family, it produces something to hold afterwards, and it gives the visits a shape when conversation is hard.",
        ],
      },
      {
        heading: "Ways to do it",
        list: [
          "Record an interview — where you grew up, how you met, the hardest thing you did, what you are proud of.",
          "Write letters for future occasions: a wedding, an eighteenth birthday, a first child.",
          "Make a recipe book in their handwriting, or cook the dishes together and film it.",
          "Photograph hands, jewellery, the garden, the workshop — the details that fade first.",
          "Record the voice: a voicemail greeting, a bedtime story for a grandchild, a song.",
          "Write down the family history and who is in the old photographs.",
        ],
      },
      {
        heading: "Keep it light enough to actually happen",
        body: [
          "Grand projects stall. Ten minutes with a phone recorder, once a week, produces more than an unrealised plan for a memoir.",
          "Ask permission and stop when they are tired. Legacy work should not become another demand on someone with very little energy left.",
        ],
      },
    ],
    practices: [
      {
        title: "Ten questions worth recording",
        minutes: 20,
        steps: [
          "What is your earliest memory?",
          "What were your parents like?",
          "How did you meet the people you love?",
          "What is the hardest thing you have lived through, and how did you get through it?",
          "What are you proudest of? And what advice would you give us?",
        ],
      },
    ],
    related: [{ href: "/support/modules/meaning-making", label: "Meaning-making" }],
  },
  {
    slug: "memory-making",
    title: "Memory making",
    summary:
      "Not bucket lists. Small, achievable moments that will matter more later than any trip abroad.",
    audience: ["patient", "family", "caregiver"],
    blocks: [
      {
        heading: "Scale it to their energy",
        list: [
          "A meal at home with the people who matter, rather than an exhausting trip.",
          "Watching a familiar film together for the last time on purpose.",
          "A drive to a place that means something, even without getting out of the car.",
          "Hand casts or handprints, especially with children and grandchildren.",
          "A photograph of everyone together, taken properly rather than as an afterthought.",
          "Ordinary afternoons, deliberately noticed.",
        ],
      },
      {
        heading: "Include the children",
        body: [
          "Children who take part in memory-making — a shared album, a planted tree, a jar of notes — grieve with something to hold rather than only an absence.",
          "Let them choose their own contribution, and keep it optional.",
        ],
      },
      {
        heading: "A note on photographs",
        body: [
          "Many families avoid photographing someone who looks unwell, then afterwards regret having no images of the last months.",
          "Ask them. Some will hate it; many are glad to be seen as they are and remembered as present, not absent.",
        ],
      },
    ],
  },
  {
    slug: "saying-goodbye",
    title: "Saying goodbye",
    summary:
      "There is rarely one perfect final moment. Goodbye is usually said many times, in ordinary ways.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "You may not get the film version",
        body: [
          "People die when their family has gone for coffee. They die suddenly after a stable week. They are unconscious for the last days. If any of this happens, it is not a failure and it is not a message.",
          "Say what needs saying early and often, so nothing depends on being in the room at the exact minute.",
        ],
      },
      {
        heading: "In the last days",
        list: [
          "Hearing is thought to persist late — keep speaking, use their name, say who is there.",
          "Touch, mouth care and a familiar voice matter more than conversation.",
          "Play music they love; keep the room as they would want it.",
          "Take breaks. Exhausting yourself does not help them.",
          "Give other relatives their own time in the room.",
        ],
      },
      {
        heading: "If you were not there",
        body: [
          "This is one of the most common sources of lasting guilt, and one of the least deserved. Many people appear to wait until the room is empty; nurses see it constantly.",
          "What you did across months counts for more than the final ten minutes. Say your goodbye afterwards — out loud, in a letter, at the graveside. It still arrives.",
        ],
      },
    ],
    related: [{ href: "/support/bereavement", label: "After the death" }],
  },
  {
    slug: "self-care-during-anticipatory-grief",
    title: "Self-care during anticipatory grief",
    summary:
      "You are grieving and working a second unpaid job at the same time. The basics stop being optional.",
    audience: ["caregiver", "family"],
    blocks: [
      {
        heading: "Protect the physical floor",
        list: [
          "Sleep — arrange cover for at least one full night a week.",
          "Food — keep something ready that requires no cooking or decisions.",
          "Movement — a short walk daily does more for grief than most people expect.",
          "Alcohol — it worsens sleep and lowers mood; watch quietly for creep.",
          "Your own health appointments — keep them.",
        ],
      },
      {
        heading: "Protect something that is yours",
        body: [
          "One hour a week that is not about illness. Not a reward for coping — a requirement for continuing.",
          "Guilt about enjoying yourself is standard and should be ignored. Enjoyment does not shorten anyone's life.",
        ],
      },
      {
        heading: "Line up your afterwards",
        list: [
          "Find a bereavement service now and note the number; many accept referrals before the death.",
          "Tell one friend that you will need them in three months, when everyone else has moved on.",
          "Keep a journal — it becomes a record of the period you will otherwise remember only in fragments.",
        ],
      },
    ],
    related: [
      { href: "/support/caregiver/self-care", label: "Caregiver self-care" },
      { href: "/care/counselling", label: "Bereavement counselling" },
    ],
  },
];

/* ===========================================================================
   LOSS AND BEREAVEMENT — after a death
   =========================================================================== */

export const BEREAVEMENT_TOPICS: Topic[] = [
  {
    slug: "understanding-grief",
    title: "Understanding grief",
    summary:
      "Grief is not an illness to be cured. It is the form love takes when the person is gone — and it has a physical, mental and social shape.",
    audience: ["family", "caregiver", "patient"],
    blocks: [
      {
        heading: "What grief does to the body and mind",
        list: [
          "Exhaustion, chest tightness, appetite loss, a hollow feeling in the stomach.",
          "Poor concentration and memory — people genuinely lose keys, appointments and words.",
          "Vivid dreams, and moments of hearing or seeing them. Common, and not a sign of losing your mind.",
          "Waves that arrive without warning, often triggered by the smallest things.",
          "Lowered immunity and higher blood pressure in the first months — grief is physical.",
        ],
      },
      {
        heading: "The oscillation",
        body: [
          "Healthy grieving swings between confronting the loss and getting on with life — crying in the morning, laughing at lunch. This oscillation is not avoidance; it is how humans metabolise loss.",
          "People who cannot swing in either direction — permanently distracted or permanently submerged — tend to be the ones who need extra help.",
        ],
      },
      {
        heading: "How long",
        body: [
          "There is no schedule. Most people find the acute, disabling phase eases over the first year, with anniversaries and reminders remaining sharp for much longer.",
          "The aim is not to stop missing them. It is to carry the loss in a way that leaves room for a life.",
        ],
      },
    ],
    related: [
      { href: "/support/bereavement/myths-about-grief", label: "Myths about grief" },
      { href: "/care/counselling", label: "Bereavement counselling" },
    ],
  },
  {
    slug: "stages-and-tasks",
    title: "Stages, tasks and models",
    summary:
      "Stages describe common experiences, not a sequence you must complete. Task-based models are often more useful.",
    audience: ["family", "caregiver"],
    blocks: [
      {
        heading: "The stages you have heard of",
        body: [
          "Denial, anger, bargaining, depression and acceptance were originally described in dying patients, not in the bereaved, and were never intended as a fixed order.",
          "They are useful as a vocabulary for feelings people recognise. They are harmful when used as a checklist that makes people feel they are grieving wrongly.",
        ],
      },
      {
        heading: "The tasks of mourning",
        list: [
          "Accept the reality of the loss — which the mind does slowly, long after the funeral.",
          "Feel the pain of it rather than routing around it.",
          "Adjust to a world without them — practically, and in your sense of who you are.",
          "Find an enduring connection while re-engaging with life. Not letting go: relocating them.",
        ],
      },
      {
        heading: "Continuing bonds",
        body: [
          "Modern bereavement care does not ask you to sever the relationship. Talking to them, keeping their things, marking their birthday and asking what they would have said are healthy, not stuck.",
          "What matters is whether the bond comforts you or keeps you from living.",
        ],
      },
    ],
  },
  {
    slug: "myths-about-grief",
    title: "Myths about grief",
    summary:
      "Most unhelpful advice comes from a handful of persistent myths. Here they are, dismantled.",
    audience: ["family", "caregiver"],
    blocks: [
      {
        heading: "The myths",
        list: [
          "'Grief takes a year.' — It has no timetable; the second year is often harder than the first.",
          "'You have to talk about it to heal.' — Some people process by doing, not talking. Both work.",
          "'Crying means you're not coping.' — Crying is coping in progress.",
          "'Not crying means you didn't love them.' — Numbness and practicality are also grief.",
          "'You need closure.' — Losses do not close. They integrate.",
          "'Getting rid of their things helps you move on.' — Move at your own pace; there is no deadline.",
          "'Time heals everything.' — Time alone does very little. What you do with the time matters.",
          "'You should be over it by now.' — Nobody gets to set that date for you.",
        ],
      },
      {
        heading: "What to say to people who repeat them",
        body: [
          "You are allowed a stock reply: 'I'm doing it my own way, thank you.' You do not owe anyone an explanation of your grief.",
        ],
      },
    ],
  },
  {
    slug: "anniversaries",
    title: "Anniversaries, birthdays and firsts",
    summary:
      "The dread beforehand is often worse than the day itself. Planning turns an ambush into something you chose.",
    audience: ["family", "caregiver"],
    blocks: [
      {
        heading: "Which dates hit hardest",
        list: [
          "The date of death, and the date of the diagnosis.",
          "Their birthday, and your own.",
          "Wedding anniversaries.",
          "Religious festivals and family holidays.",
          "Unexpected ones: the first spring, the first time you need their advice.",
        ],
      },
      {
        heading: "Plan the day",
        steps: [
          "Decide in advance where you will be and who with — do not leave it to chance.",
          "Choose one act of remembrance: a visit, a candle, a meal they loved, a walk.",
          "Give yourself an exit from anything you have agreed to.",
          "Tell people the day is coming; being remembered by others helps enormously.",
          "Plan the evening as well as the day — the drop often comes at night.",
        ],
      },
      {
        heading: "If you want to ignore it",
        body: [
          "That is allowed too. Some people do better with an ordinary working day. The important thing is that you decided, rather than being caught unprepared.",
        ],
      },
    ],
  },
  {
    slug: "grieving-as-a-couple",
    title: "Grieving as a couple",
    summary:
      "Two people grieving the same loss at different speeds and in different styles is one of the commonest sources of loneliness in a marriage.",
    audience: ["family"],
    blocks: [
      {
        heading: "Different styles, same loss",
        body: [
          "One partner may need to talk, cry and revisit; the other may need to work, fix and stay busy. Each often reads the other as either wallowing or cold.",
          "Neither style is superior. Naming the difference explicitly prevents most of the damage.",
        ],
      },
      {
        heading: "Practical agreements",
        list: [
          "Agree a signal for 'I need to talk about them' and for 'I can't right now'.",
          "Do not require your partner to be your only support — grief needs more than one listener.",
          "Expect changes in intimacy in both directions, and say so out loud rather than interpreting.",
          "Make no major irreversible decisions in the first year if you can avoid it.",
          "Mark the person together at least once, in a way both of you can bear.",
        ],
      },
      {
        heading: "After losing a child",
        body: [
          "The loss of a child is its own category. Blame, guilt and mismatched grieving strain even strong relationships badly.",
          "Specialist bereaved-parent support helps more than general counselling, and it is worth seeking early.",
        ],
      },
    ],
    related: [{ href: "/care/counselling", label: "Couple counselling" }],
  },
  {
    slug: "childrens-grief",
    title: "Children's grief",
    summary:
      "Children grieve in short bursts between play. That is not shallowness — it is how a young nervous system survives a large loss.",
    audience: ["family", "caregiver"],
    blocks: [
      {
        heading: "What children need",
        list: [
          "Honest, concrete words: 'died', not 'lost' or 'gone to sleep'.",
          "The three reassurances: it was not your fault, you cannot catch it, you will be looked after.",
          "Permission to play, laugh and be normal without being told they must be sad.",
          "Repeated chances to ask the same question again as they grow.",
          "To be included in rituals if they wish, prepared in advance for what they will see.",
        ],
      },
      {
        heading: "By age",
        list: [
          "Under 5: does not grasp permanence; asks repeatedly when the person is coming back. Repeat calmly.",
          "5–8: understands permanence; may believe something they thought or did caused it. Say explicitly that it did not.",
          "9–12: wants facts and may worry about who else will die. Answer honestly.",
          "Teenagers: may hide grief from adults, grieve through friends or risk-taking, or become the family's carer. Keep the door open without demanding they walk through it.",
        ],
      },
      {
        heading: "Warning signs",
        list: [
          "Grief that stops school, friendships or eating for weeks.",
          "Self-harm, or talk of joining the person who died.",
          "Persistent regression or new severe anxiety.",
          "A child who has become the household's emotional adult.",
        ],
      },
    ],
    related: [{ href: "/care/counselling", label: "Children's counselling" }],
  },
  {
    slug: "mens-grief",
    title: "Men's grief",
    summary:
      "Grief that comes out as work, anger, silence or activity is still grief — but it can leave men isolated at exactly the wrong moment.",
    audience: ["family", "caregiver"],
    blocks: [
      {
        heading: "Common patterns",
        list: [
          "Returning to work immediately and never stopping.",
          "Taking on tasks — the estate, the house, the practicalities — instead of talking.",
          "Anger and irritability as the main visible emotion.",
          "Drinking more, alone.",
          "Being asked constantly 'how is she doing?' and never 'how are you?'.",
        ],
      },
      {
        heading: "What tends to work",
        list: [
          "Side-by-side support rather than face-to-face: walking, driving, working on something together.",
          "Groups organised around an activity — sheds, sport, veterans' and men's bereavement groups.",
          "Physical outlets: hard exercise, manual work, being outdoors.",
          "One trusted person, not a room full.",
          "Time-limited, goal-shaped counselling, which many men find easier to accept than open-ended talking.",
        ],
      },
      {
        heading: "Watch the risk",
        body: [
          "Men are less likely to seek help and, in most countries, more likely to die by suicide after bereavement — particularly older widowers in the first year.",
          "If you are worried about a man in your family, ask directly and specifically. Directness is protective, not dangerous.",
        ],
      },
    ],
    related: [{ href: "/care/crisis", label: "Crisis support" }],
  },
  {
    slug: "spiritual-struggles",
    title: "Spiritual struggles",
    summary:
      "Loss can shake or deepen faith, sometimes both in the same week. Doubt is a normal part of grieving, not a betrayal.",
    audience: ["family", "caregiver", "patient"],
    blocks: [
      {
        heading: "What people describe",
        list: [
          "Anger at God, and guilt for feeling it.",
          "Losing the ability to pray, or praying more than ever.",
          "Feeling abandoned by a community that expects you to be comforted by its answers.",
          "Being told 'it was God's will' and finding it unbearable.",
          "Unexpected comfort in ritual, even without belief.",
        ],
      },
      {
        heading: "Working with it",
        list: [
          "Find someone who can sit with doubt rather than correcting it — many chaplains are trained for exactly this.",
          "Give yourself permission to argue with God; most religious traditions contain a long history of exactly that.",
          "Use ritual even when belief is thin. Actions often carry people when words fail.",
          "Do not let anyone rush you back to the position you held before.",
        ],
      },
    ],
    related: [{ href: "/support/patient/spiritual-care", label: "Spiritual care" }],
  },
  {
    slug: "returning-to-work",
    title: "Returning to work",
    summary:
      "Most people go back long before they are ready, and then discover the second week is harder than the first.",
    audience: ["family", "caregiver"],
    blocks: [
      {
        heading: "Before you go back",
        list: [
          "Ask about phased return, reduced hours or lighter duties for a defined period.",
          "Decide what you want colleagues to be told, and ask one person to tell them.",
          "Agree a signal or a place to go if you need ten minutes.",
          "Expect concentration and memory to be poor for a while; write more down than usual.",
          "Avoid major work decisions in the early months if you can.",
        ],
      },
      {
        heading: "Handling the awkwardness",
        body: [
          "Some colleagues will avoid you because they are frightened of saying the wrong thing. A short prepared line helps everyone: 'Thank you — it's hard, but being back is good for me.'",
          "You do not owe anyone the details, and you are allowed to change your answer daily.",
        ],
      },
      {
        heading: "If work is where you hide",
        body: [
          "Work can be genuinely restorative — structure, purpose, company. It becomes a problem when it is the only place you exist and there is no time when grief is allowed.",
          "Book one thing a week that has nothing to do with work or with the loss.",
        ],
      },
    ],
  },
  {
    slug: "complicated-grief",
    title: "When grief becomes complicated",
    summary:
      "A minority of bereaved people develop grief that stays acute and disabling. It is recognised, it is not a character flaw, and it responds to specific treatment.",
    audience: ["family", "caregiver"],
    blocks: [
      {
        heading: "Signs to take seriously",
        list: [
          "Twelve months on (six for children) and the intensity has not shifted at all.",
          "Intense daily yearning that stops you functioning.",
          "Inability to accept the death, or to look at anything connected with it.",
          "Complete avoidance of reminders — or the opposite, total immersion in them.",
          "Feeling that life has no meaning and no future without them.",
          "Persistent self-blame, or wishing to die to be with them.",
        ],
      },
      {
        heading: "What raises the risk",
        list: [
          "Sudden, violent or traumatic death.",
          "The death of a child.",
          "A relationship that was highly dependent, or unresolved and conflicted.",
          "Multiple losses close together.",
          "Little social support, or existing depression, anxiety or trauma.",
        ],
      },
      {
        heading: "What helps",
        body: [
          "Specific therapies for prolonged grief exist and work better than general counselling — usually combining exposure to the loss story, restoring goals, and structured work on the relationship with the person who died.",
          "Ask your doctor for a referral, and say explicitly that grief has not shifted in over a year.",
        ],
      },
    ],
    related: [
      { href: "/tools/screening/grief", label: "Grief intensity questionnaire" },
      { href: "/care/counselling", label: "Bereavement counselling" },
    ],
  },
  {
    slug: "purpose-after-loss",
    title: "Finding purpose after loss",
    summary:
      "Not moving on. Moving forward, carrying them — usually much later than people expect, and rarely on demand.",
    audience: ["family", "caregiver"],
    blocks: [
      {
        heading: "Rebuilding, slowly",
        list: [
          "Re-establish a rhythm first: sleep, meals, one fixed commitment a week.",
          "Return to one thing you used to enjoy, even without enjoying it yet.",
          "Take on something small that is entirely new — grief changes people, and new ground carries fewer ghosts.",
          "Let the role you played be redirected: caring, cooking, organising, mentoring.",
          "Expect guilt when you laugh again. Laugh anyway.",
        ],
      },
      {
        heading: "Meaning that does not require a silver lining",
        body: [
          "Some people volunteer, campaign, fundraise or train in the field that took the person they loved. Others simply live well, which is enough.",
          "You do not need to redeem the loss to justify surviving it.",
        ],
      },
      {
        heading: "Carrying them with you",
        list: [
          "Keep one ritual: their chair at Christmas, their recipe on a birthday.",
          "Tell stories about them out loud, especially to children who barely remember.",
          "Ask 'what would they have said?' when you are stuck — and then decide for yourself.",
        ],
      },
    ],
    related: [{ href: "/care/community", label: "Memorial wall & peer support" }],
  },
];
