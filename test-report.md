# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-11 (third pass)
**Tested by:** Automated QA Agent

## Overall Status: PASS

No new feature commits since 2026-07-10 second pass. All 178 questions intact, JS syntax clean, all required features confirmed present. One carry-forward CDN risk (MathQuill/jQuery on cdnjs) remains the only open concern.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| Redesign commit exists | ✅ | `a6efd94` — "Major redesign: light mode, multi-week, learn mode, improved notes/formulas/math input + practice exam questions" |
| New commits today (2026-07-11) | ➖ | No new feature commits — latest is `f14ce1e` (2026-07-10 second-pass QA report) |
| JS syntax valid | ✅ | `new Function(script)` — no errors |
| ≥118 questions intact | ✅ | **178 questions** in QUESTIONS array (lines 3057–4643) |
| All 12 practice exam Qs | ✅ | Q1–Q12 all confirmed (see detail below) |
| Light mode CSS | ✅ | `--bg:#F8FAFC`, `--surface:#FFFFFF`, Inter font, target design system in place |
| Dark mode toggle | ✅ | `.dark` CSS class (line 45), `toggleDarkMode()`, `darkModeBtn` in header |
| Multi-week selection | ✅ | `selectWeekChip()`, `homeState.weeks`, `.week-chip.active` |
| Learn mode | ✅ | `#learn` screen, 71 matches for `learn`/`learnMode` |
| I'm Confused button | ✅ | `showHintAI()`, "😕 I'm Confused" button rendered in quiz |
| Hint 1 / Hint 2 | ✅ | `hint1`, `hint2`, `showHint`, `btn-hint` — 231 matches |
| Multi-step math input | ✅ | `addStep`, `working-steps`, `step-row` — 19 matches |
| Final Answer field | ✅ | `finalAnswer`, `Final Answer` — 13 matches |
| Notes overlay present | ✅ | `#notes-overlay` at line 1153, tab bar with W2–W10 |
| Formula overlay present | ✅ | `formula-overlay` present |
| Netlify functions unchanged | ✅ | `mark.js` 4,125 bytes / 136 lines; `explain.js` 4,472 bytes / 79 lines — last touched May 2026, not by redesign |
| File size increased | ✅ | **7,063 lines** (original ~1,458 lines) |

---

## Question Bank Detail

**178 total questions** across 8 weeks:

| Week | Topic | Count |
|------|-------|-------|
| W2 | Market Opportunities | 15 |
| W3 | CVP / Pricing | 23 |
| W4 | Technology / BSC | 15 |
| W5 | TVM | 34 |
| W7 | Capital Budgeting | 26 |
| W8 | Valuation / Investors | 26 |
| W9 | WACC | 25 |
| W10 | Performance Measurement | 14 |
| **Total** | | **178** |

### Practice Exam Questions (12/12 confirmed)

| # | Topic | Status |
|---|-------|--------|
| Q1 | APR/EAR/FV — bank account 16% APR | ✅ |
| Q2 | Solve for r — $14k → $30k in 10 yrs | ✅ |
| Q3 | Deferred perpetuity — $128 in yr 22 | ✅ |
| Q4 | Mortgage — $300k house, $40k down, 25yr 4% | ✅ |
| Q5 | McDonald's NPV declining perpetuity | ✅ |
| Q6 | AT&T EAA bus models | ✅ |
| Q7 | NPV/IRR/PI/Payback — Projects A & B (7 parts) | ✅ |
| Q8 | Bond pricing semi-annual — $1k, 7.2%, 8.2% YTM | ✅ |
| Q9 | Hush Puppies multi-stage DDM | ✅ |
| Q10 | Gordon Growth Model — $4.5 dividend | ✅ |
| Q11 | CAPM multi-company (Round Corp, Lemon LLC, etc.) | ✅ |
| Q12 | WACC varying D/E ratios — Sandwich Corp | ✅ |

---

## Issues Found

### 1. External CDN Dependencies (carry-forward from 2026-07-08)

Four external CDN resources are loaded at runtime:
- **Google Fonts** (`fonts.googleapis.com`) — Inter font family
- **MathQuill CSS** (`cdnjs.cloudflare.com`) — math input styling
- **jQuery 2.2.4** (`cdnjs.cloudflare.com`) — MathQuill dependency
- **MathQuill JS 0.10.1** (`cdnjs.cloudflare.com`) — multi-step math input

**Risk:** If the UNSW exam network blocks external CDNs, the multi-step math input UI will degrade silently. The app may fall back to plain inputs but this is unverified.

**Recommendation:** Bundle MathQuill and jQuery as local static assets. Add graceful fallback (plain `<textarea>`) if MathQuill fails to initialise.

### 2. No `type:'tf'` Questions (observation, carry-forward)

Zero questions with `type:'tf'` in the QUESTIONS array. The original CLAUDE.md listed `tf` as a supported type. Not a blocker — the exam does not require true/false questions — but flags a divergence from the documented question-type spec.

### 3. Popup Notes Window Uses `document.write` (observation)

Line 5102 uses `document.write()` to render the notes in a popup window. Some browsers restrict `document.write` in certain security contexts (e.g., when served over HTTPS with strict CSP). Not reproduced, but worth a manual smoke-test before the exam.

---

## Recommendations

1. **Bundle MathQuill/jQuery locally** — exam-room networks may block cdnjs.cloudflare.com; this would silently break multi-step math input.
2. **Smoke-test the Notes popup** — open the Notes overlay, click "Open in Window", confirm it renders correctly in Chrome.
3. **Verify `ANTHROPIC_API_KEY`** is set in the Netlify dashboard — required for AI marking ("I'm Confused" / explain) features.
