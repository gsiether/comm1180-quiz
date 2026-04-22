# COMM1180 Quiz App — Project Context

## What This Is
An exam prep quiz app for COMM1180 (Value Creation) at UNSW. Deployed on Netlify.
**Exam date:** Tuesday 5 May 2026, 1:45pm–4pm (in-person, laptop required)

## Exam Structure
- **Section A (50%):** MCQ + Numerical — Weeks 3 (CVP/Pricing), 5 (TVM), 7 (Investment), 8 (Investors), 9 (WACC)
- **Section B (50%):** Qualitative SA — Weeks 2 (Market Opportunities), 4 (Technology/BSC), 10 (Performance Measurement)

---

## Key File Paths

| File | Path |
|------|------|
| Main app | `C:\Users\derek\OneDrive\Desktop\comm1180-quiz\index.html` |
| AI marking function | `C:\Users\derek\OneDrive\Desktop\comm1180-quiz\netlify\functions\mark.js` |
| AI explain function | `C:\Users\derek\OneDrive\Desktop\comm1180-quiz\netlify\functions\explain.js` |
| Practice exam questions | `C:\Users\derek\OneDrive\Desktop\comm1180-quiz\practice-questions.md` |
| Course PDFs | `C:\Users\derek\OneDrive\Desktop\COMM1180 Exam Prep\` |
| Reference app (COMM1150) | `C:\Users\derek\OneDrive\Desktop\comm1150-quiz\index.html` |

---

## Current State of index.html

The existing app (~1458 lines) is a **dark theme** app that already has:
- Full question bank for W2, W3, W4, W5, W7, W8, W9, W10
- Question types: `mcq`, `tf`, `sa`, `numerical`, `multipart`
- AI marking via Netlify functions (working)
- History, admin panel, settings, notes overlay, formula overlay
- LocalStorage persistence

**What is MISSING (needs to be built):**
1. Learn Mode (notes → mini quiz flow)
2. 3-level hints (Hint 1 → Hint 2 → Ask AI inline)
3. White/modern design (currently dark purple/navy)
4. 12 practice exam questions from `practice-questions.md` not yet in QUESTIONS array

---

## Netlify Functions — Already Done, Do Not Change

- `mark.js` — Uses Anthropic SDK, supports `multipart`, `numerical`, `sa`. Marks each part individually.
- `explain.js` — Has all week topics (W2–W10), returns plain text, supports finance weeks with formula guidance.
- Both use model `claude-haiku-4-5-20251001` and read `process.env.ANTHROPIC_API_KEY`.

---

## Target Design System

```css
:root {
  --blue: #2563EB;
  --blue-dark: #1D4ED8;
  --blue-light: #EFF6FF;
  --blue-mid: #BFDBFE;
  --green: #059669;
  --green-light: #ECFDF5;
  --green-border: #6EE7B7;
  --red: #DC2626;
  --red-light: #FEF2F2;
  --red-border: #FCA5A5;
  --amber: #D97706;
  --amber-light: #FFFBEB;
  --amber-border: #FDE68A;
  --purple: #7C3AED;
  --purple-light: #F5F3FF;
  --text: #0F172A;
  --text-2: #475569;
  --text-3: #94A3B8;
  --border: #E2E8F0;
  --bg: #F8FAFC;
  --surface: #FFFFFF;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow: 0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05);
  --r: 16px;
  --r-sm: 10px;
}
```

Font: `Inter` from Google Fonts + system fallback.

---

## Target App Architecture

### Screens
- `#home` — Quiz Mode / Learn Mode tabs
- `#learn` — Notes for a week + "Test yourself" button
- `#quiz` — Question card with 3-level hints
- `#summary` — Score ring + results list
- `#history` — Past sessions
- `#history-detail` — Per-question breakdown

### Overlays
- `#notes-overlay` — Full notes per week (tabs W2/W3/W4/W5/W7/W8/W9/W10)
- `#formula-overlay` — Formula reference (W3 CVP / W5 TVM / W7 NPV / W8 Valuation / W9 WACC)
- `#settings-overlay` — Shuffle, hints, count, API key
- `#admin-modal` — Password gate (password: `abc123`)
- `#admin-panel` — Stats, data management

### Sticky Header
Left: icon + "UNSW · COMM1180" + "Value Creation"
Right: [Notes] [Formulas] [⚙] [🔒]

### Home Screen
**Quiz Mode tab:** Exam info card → week chips grid → count chips → [Start Quiz →] → [View History]
**Learn Mode tab:** Week tiles → click → learn screen (not quiz)

### 3-Level Hint System
```
[💡 Hint 1]  → click → show hint text, reveal [🔍 Hint 2]
[🔍 Hint 2]  → click → show hint2 text, reveal [🤖 Ask AI]
[🤖 Ask AI]  → click → call /explain → render AI text inline in blue box
```

### Learn Mode Screen
```
← Back    [📐 Formulas]
Week 3 · CVP Analysis
─────────────────────
[scrollable notes HTML]
─────────────────────
[Test yourself on Week 3 →]   10 questions
```
Notes stored as HTML strings in a JS `NOTES` object keyed by week number.

---

## Practice Exam Questions to Add (from practice-questions.md)

**Week 5 (TVM):** Q1 APR/EAR/FV multipart, Q2 solve for r, Q3 deferred perpetuity, Q4 mortgage payment
**Week 7 (Capital Budgeting):** Q5 NPV declining perpetuity (McDonald's), Q6 EAA (AT&T bus models), Q7 NPV/IRR/PI/Payback 7-part
**Week 8 (Valuation):** Q8 bond pricing semi-annual, Q9 multi-stage dividend growth (Hush Puppies), Q10 Gordon Growth Model
**Week 9 (WACC):** Q11 CAPM multi-company 5-part, Q12 WACC with varying D/E ratios

Full model answers are in `practice-questions.md`.

---

## How to Start a Work Session

1. Read `practice-questions.md` for the 12 new questions
2. Read `index.html` lines 525–781 for the existing QUESTIONS array
3. Write the complete new `index.html` (keep logic/questions, add features, replace CSS)
4. Do NOT touch `netlify/functions/mark.js` or `explain.js`
5. After writing, git commit and push to trigger Netlify deploy
6. Ensure `ANTHROPIC_API_KEY` is set in Netlify dashboard environment variables
