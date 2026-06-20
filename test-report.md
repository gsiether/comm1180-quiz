# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-20
**Tested by:** Automated QA Agent

## Overall Status: PASS

All required features are present and functional. The redesign was completed in a prior session (commit `56f3fd5`). The question bank contains **178 questions**. JS syntax is valid. No changes to `index.html` since `693ec73` (2026-06-11). Note: exam date was 2026-05-05 (46 days ago); app now serves as post-exam revision reference.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit (redesign) exists | ✅ | Redesign at `56f3fd5`; practice Qs added at `693ec73` (2026-06-11); only QA reports since |
| JS syntax valid | ✅ | `node --check` on extracted `<script>` block exits 0 — no errors |
| 178 questions in bank | ✅ | 178 top-level question objects confirmed (exceeds 118 target — extra content added across sessions) |
| Light mode CSS | ✅ | `--bg:#F8FAFC; --surface:#FFFFFF` in `:root`; light mode is default |
| Dark mode toggle | ✅ | `toggleDarkMode()` in header with 🌙/☀️; persists via localStorage |
| Multi-week selection | ✅ | `.week-chip` toggle grid; `homeState.weeks` array; "All Weeks" chip |
| Learn mode | ✅ | `#learn` screen, `learnMode` flag, "📚 Learn Mode" tab, `renderLearnCard()` |
| I'm Confused button | ✅ | `#hintBtnAI` calls `showHintAI()` — inline AI explanation |
| Hint 1 / Hint 2 | ✅ | 3-level: Hint 1 → Hint 2 → I'm Confused |
| Multi-step math input | ✅ | `addStep()` with MathQuill fields; `.working-steps` / `.step-row` CSS |
| Final Answer field | ✅ | `.final-answer-wrap` rendered for numerical/multipart |
| Notes overlay | ✅ | `#notes-overlay` with W2–W10 tabs and full HTML study notes |
| Formula overlay | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC tabs |
| Practice Q1–Q12 present | ✅ | All 12 practice exam questions confirmed in QUESTIONS array |
| Netlify functions unchanged | ✅ | `mark.js` and `explain.js` unmodified |
| File size | ✅ | **7,061 lines** (vs original 1,458 — 4.8× larger) |

---

## Practice Question Verification

| Q# | Topic | Present |
|----|-------|---------|
| Q1 | APR/EAR/FV multipart (16% APR monthly) | ✅ |
| Q2 | Solve for r ($14k → $30k in 10y) | ✅ |
| Q3 | Deferred perpetuity ($128 first payment yr 22) | ✅ |
| Q4 | Mortgage payment ($300k house, 25yr, 4%) | ✅ |
| Q5 | McDonald's NPV declining perpetuity | ✅ |
| Q6 | AT&T EAA comparison | ✅ |
| Q7 | NPV/IRR/PI/Payback 7-part | ✅ |
| Q8 | Bond pricing semi-annual (7.2% coupon) | ✅ |
| Q9 | Hush Puppies multi-stage dividend growth | ✅ |
| Q10 | Gordon Growth Model ($4.5 dividend) | ✅ |
| Q11 | CAPM multi-company analysis (Round Corp) | ✅ |
| Q12 | WACC varying D/E ratios (Sandwich Corp) | ✅ |

---

## Question Distribution

| Week | Topic | Count |
|------|-------|-------|
| 2 | Market Opportunities | SA, multipart |
| 3 | CVP/Pricing | MCQ, numerical, multipart |
| 4 | Technology/BSC | SA, multipart |
| 5 | Time Value of Money | MCQ, numerical, multipart |
| 7 | Capital Budgeting | Numerical, multipart |
| 8 | Valuation | Numerical, multipart |
| 9 | Risk & WACC | Numerical, multipart |
| 10 | Performance Measurement | SA, multipart |
| **Total** | | **178 questions** |

---

## Issues Found

### Minor / Informational

1. **Question count is 178, not 118.** The QUESTIONS array grew through multiple practice question batches. This is additional content (not data loss). No deduplication action taken this run — code is stable.

2. **No `type:'tf'` questions in the question bank.** The code supports true/false (`renderTF`, `selectTF`, scoring) but no questions currently use this type. Some multipart sub-questions embed "True or False?" wording but are typed as `sa`. Content gap only, not a code bug.

3. **Three `<script>` tags present.** One inline block (main app) + two external CDN imports (jQuery 2.2.4 + MathQuill 0.10.1). Required for MathQuill math input. Not a defect.

---

## Recommendations

1. **Consider stopping this scheduled QA routine** — The exam was on 2026-05-05 (46 days ago). The app is stable with no pending changes. Routine has been running daily since June 13.
2. **Netlify `ANTHROPIC_API_KEY`:** Confirm still active in Netlify dashboard — AI marking and explain features require this env var.
3. **Add tf questions** — True/false question support is built in; no questions currently use it.
