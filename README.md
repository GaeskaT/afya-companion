# CareCircle

> Supporting the emotional and nutritional wellbeing of patients, caregivers and families — through every stage of illness.

A mobile + web app (installable PWA) that addresses three people at once: the
person who is ill, the person caring for them, and the family around them.

```bash
npm install
npm run dev     # http://localhost:3500
```

## What's in it

**Emotional support** — `/support`

- Patient (11 topics): check-ins, anxiety, depression, pain journal, relaxation, hope, self-esteem, sleep, spiritual care, affirmations, goals
- Caregiver (9): strain, burnout, compassion fatigue, self-care, emotions, time, emergencies, asking for help, balance
- Family (7): the diagnosis, communicating, children, conflict, money, family meetings, support systems
- 12 psychological modules: psychoeducation → stress → anxiety → depression → acceptance → coping → emotional regulation → cognitive restructuring → resilience → problem-solving → hope therapy → meaning-making
- Anticipatory grief (12 topics) and bereavement (11 topics)
- 12 disease-specific entries (cancer, diabetes, kidney, stroke, heart, dementia, Parkinson's, HIV, chronic pain, MS, terminal illness, rare disease), each covering emotional / family / caregiver challenges, coping and resources

**Nutrition & dietetics** — `/nutrition`

- 13 condition-specific guides (foods, limits, timing, portions, sample day, myths, treatment challenges, when to see a dietitian)
- 12 therapeutic diet plans (diabetic, renal, low-sodium, cardiac, high-protein, weight management, soft/texture-modified, cancer, pregnancy, child, elderly, vegetarian & vegan)
- 10 treatment guides (chemotherapy, dialysis, surgery, radiotherapy, long-term medication, palliative, tube feeding, dysphagia, appetite loss, nausea)
- 10 education topics, 12 recipes with cost/nutrition/suitability, caregiver feeding, child & family nutrition
- Nutrition assessment → BMI, energy and protein estimates, matched plans, a 7-day menu and a shopping list
- Food, fluid and weight trackers; an AI nutrition assistant

**Tools** — `/tools`

Daily check-in, journal (pain diary + thought records + free writing), gratitude,
breathing (5 patterns) and guided relaxation (5 scripts), goals, progress
dashboard, and eight screening questionnaires:

| Tool | Instrument |
| --- | --- |
| Depression | PHQ-9 |
| Anxiety | GAD-7 |
| Stress | PSS-4 |
| Caregiver strain | Modified Caregiver Strain Index |
| Burnout | Copenhagen Burnout Inventory (personal) |
| Sleep | Athens Insomnia Scale |
| Quality of life | WHO-5 Wellbeing Index |
| Grief | Brief Grief Questionnaire |

Each scores locally, bands the result, gives next steps, keeps a history, and
flags risk (PHQ-9 item 9 routes straight to crisis support).

**Care** — `/care` — counselling services + booking, dietitian clinic + booking,
the multidisciplinary care team, moderated community spaces, and crisis support
with a fill-in safety plan and helplines.

## Design decisions worth knowing

**Data stays on the device.** Check-ins, journals, screening scores, food and
fluid records, goals and the safety plan live in `localStorage` under the `cc:`
namespace, read through `useSyncExternalStore` (`src/lib/storage.ts`). No
account, no upload. Two features do leave the device and say so on screen:
appointment requests (`/api/booking`) and community posts (`/api/community`,
which queues everything for human moderation and tags risk language).

**It refuses to guess where guessing is dangerous.** Kidney, liver and heart
failure targets are set from blood results, so `src/lib/nutrition.ts` declines
to estimate energy, protein or fluid for them and points to the renal or
hepatology dietitian instead. Deliberate weight loss during cancer treatment
raises a warning rather than producing a plan.

**Offline first.** `public/sw.js` caches the shell network-first for
navigations, stale-while-revalidate for assets, never for `/api`. The crisis
page, breathing exercises, check-in and home screen are pre-cached — hospital
basements and rural clinics are exactly when people need them.

**The nutrition assistant degrades, it doesn't break.** `/api/assistant` calls
Claude when `ANTHROPIC_API_KEY` is set, under a system prompt that forbids
diagnosis, dosing and individual renal targets. Without a key — or when the
call fails — the same question is answered from the app's own content library
(`src/lib/assistantOffline.ts`), including red-flag detection for choking,
weight loss, blood loss and self-harm.

## Configuration

```bash
# optional — enables the model-backed nutrition assistant
ANTHROPIC_API_KEY=sk-ant-...
```

Booking requests append to `data/bookings.jsonl`; community posts append to
`data/community-queue.jsonl`. Both are gitignored. **These files contain health
information** — swap `persist()` for a system with the right access controls
and retention policy before this serves real patients.

## Structure

```
src/app/            routes (App Router); api/ holds the three endpoints
src/components/     AppShell (bottom tabs on mobile, sidebar on desktop), ui primitives
src/components/tools/  the interactive pieces: check-in, journal, screening runner,
                       breathing player, trackers, assessment, assistant, dashboard
src/content/        all clinical content as typed data (support, modules, grief,
                    conditions, screening, crisis, counselling, daily, nutrition/*)
src/lib/            storage, nutrition calculations, offline assistant, nav, site
public/sw.js        offline service worker
```

Content is data, not markup: `src/content/**` feeds generic renderers, so adding
a topic, condition, diet or questionnaire is an entry in an array, not a new page.

## Installing on a phone

Android/Chrome: menu → Add to home screen. iPhone/Safari: Share → Add to Home
Screen. Desktop: the install icon in the address bar. For real app-store
binaries, wrap this with Capacitor — the PWA is already standalone-display and
offline-capable.

## Not a medical device

CareCircle provides education and self-help support. It does not diagnose or
treat, and it does not replace a clinician. Screening questionnaires are
screening aids. Every page carries the disclaimer, and crisis routes are one tap
from every screen.
