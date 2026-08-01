# CareCircle

> Supporting the emotional and nutritional wellbeing of patients, caregivers and families — through every stage of illness.

A mobile + web app (installable PWA) that addresses three people at once: the
person who is ill, the person caring for them, and the family around them.

**Live demo:** https://gaeskat.github.io/carecircle/

```bash
npm install
npm run dev     # http://localhost:3500
```

The demo is a static export with no server behind it, so the booking and
community forms say plainly that nothing is sent, and the nutrition assistant
answers from its built-in library instead of a language model — the same
fallback the app uses when there is no signal. Everything else, which is
device-local anyway, behaves exactly as in a full deployment.

## What's in it

**Emotional support** — `/support`

- Patient (11 topics): check-ins, anxiety, depression, pain journal, relaxation, hope, self-esteem, sleep, spiritual care, affirmations, goals
- Caregiver (9): strain, burnout, compassion fatigue, self-care, emotions, time, emergencies, asking for help, balance
- Family (7): the diagnosis, communicating, children, conflict, money, family meetings, support systems
- 12 psychological modules: psychoeducation → stress → anxiety → depression → acceptance → coping → emotional regulation → cognitive restructuring → resilience → problem-solving → hope therapy → meaning-making
- Anticipatory grief (12 topics) and bereavement (11 topics)
- 12 disease-specific entries (cancer, diabetes, kidney, stroke, heart, dementia, Parkinson's, HIV, chronic pain, MS, terminal illness, rare disease), each covering emotional / family / caregiver challenges, coping and resources

**Onboarding** — `/join`

Five roles register through one wizard driven by `src/content/onboarding.ts`:

| Role | Access | Required documents |
| --- | --- | --- |
| Patient | Immediate | — |
| Family member | Immediate | Power of attorney, only if acting on someone's behalf |
| Counsellor / psychologist | Verified, 5–10 days | Degree, council registration, practising certificate, indemnity insurance, police clearance, supervision confirmation, photo ID |
| Dietitian / nutritionist | Verified, 5–10 days | Degree, council registration, practising certificate, indemnity insurance, police clearance, photo ID |
| Caregiver — individual | Verified, 10–15 days | Care or nursing qualification, first aid/BLS, police clearance, occupational health and immunisation record, two references, photo ID (plus nursing registration where they claim it) |
| Caregiver — organisation (hospice, agency, nursing home, hospital) | Verified, 10–15 days | Facility operating licence, company or NPO registration, tax compliance, named clinician's registration, indemnity and public liability insurance, safeguarding policy, staff vetting statement, signatory ID |

The wizard saves drafts to the device as you type, validates per step, records
the issuing body / certificate number / issue and expiry dates alongside each
upload, flags expired documents before submission, and ends with declarations
that are specific about scope of practice, escalation and notification duties.
Files are capped at 5 MB and limited to PDF or images.

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

**Registration documents are the most sensitive thing here.** A caregiver
application carries identity documents, a police clearance, occupational health
records and professional registration numbers — everything an identity thief
would want, in one folder. `/api/registration` validates type and size, refuses
path traversal in filenames, and writes to `data/uploads/<reference>/`, which is
gitignored. That is adequate for development and **not** adequate for real
applicants: see the warning at the top of `src/app/api/registration/route.ts`
for what production storage has to add.

## Build modes

| Command | Result |
| --- | --- |
| `npm run build` | Full server build. API routes work: booking, moderation queue, model-backed assistant. |
| `NEXT_PUBLIC_DEMO=1 NEXT_PUBLIC_BASE_PATH=/carecircle npm run build` | Static export to `out/` for GitHub Pages. CI drops `src/app/api` first; forms and assistant degrade as described above. |

`.github/workflows/pages.yml` runs the second on every push to `main`.

## Configuration

```bash
# optional — enables the model-backed nutrition assistant
ANTHROPIC_API_KEY=sk-ant-...
```

Booking requests append to `data/bookings.jsonl`, community posts to
`data/community-queue.jsonl`, and registrations to `data/registrations.jsonl`
with their uploads under `data/uploads/`. All are gitignored. **These files
contain health information and identity documents** — swap the `persist()`
calls for storage with encryption at rest, named-staff access with an audit
trail, virus scanning on upload, and a retention schedule before this serves
real people.

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
