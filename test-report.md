# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-06
**Tested by:** Automated QA Agent

## Overall Status: PASS

No redesign agent ran today (2026-07-06) — this run re-validates the stable implementation. The major redesign landed on 2026-06-10 (commit `56f3fd5`). All required features confirmed present. 206 questions intact. No regressions detected.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Most recent non-QA: `419f80d` "Fix duplicate practice-exam questions" (2026-07-02); redesign at `56f3fd5` (2026-06-10) |
| JS syntax valid | ✅ | `new Function()` parse passes; no errors |
| 118+ questions intact | ✅ | **206 questions** (bracket-balanced parse of QUESTIONS array); exceeds target of 118 |
| Light mode CSS | ✅ | `--bg:#F8FAFC`, `--surface:#FFFFFF`, white/`#ffffff` refs throughout; Inter font via Google Fonts |
| Dark mode toggle | ✅ | `darkModeBtn` button with 🌙/☀️ toggle; `toggleDarkMode()` applies `.dark` on `<html>`; persisted in localStorage |
| Multi-week selection | ✅ | `.week-chip` grid UI; `selectWeekChip()` toggles `homeState.weeks` array; active state via `.active` class |
| Learn mode | ✅ | `#learn` screen present; `showLearn()` function; `.learn-week-tile` grid; "Test yourself" button flow |
| I'm Confused button | ✅ | 3 references; local fallback + AI explanation via `/explain` endpoint (PR #5 improvement applied) |
| Hint 1 / Hint 2 | ✅ | 219 hint references; 3-level progressive reveal (hint1 → hint2 → Ask AI inline) |
| Multi-step math input | ✅ | `.working-steps`, `.step-row`, `addStep()` (23 references); MathQuill-backed inputs |
| Final Answer field | ✅ | `finalAnswer`/`.final-answer` (13 references); used in numerical questions |
| Notes overlay present | ✅ | `#notes-overlay` present (8 references); W2–W10 tabs with pop-out window option |
| Formula overlay present | ✅ | `#formula-overlay` present (8 references); CVP/TVM/NPV/Valuation/WACC sections |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` is empty; `mark.js` and `explain.js` untouched |
| File size increased | ✅ | **6,944 lines** (vs original 1,458 — 4.75× larger) |

---

## Question Bank Breakdown
| Week | Count | Topic |
|------|-------|-------|
| W2 | 19 | Market Opportunities |
| W3 | 26 | CVP / Pricing |
| W4 | 18 | Technology / BSC |
| W5 | 37 | TVM |
| W7 | 32 | Investment / Capital Budgeting |
| W8 | 28 | Investors / Valuation |
| W9 | 29 | WACC |
| W10 | 17 | Performance Measurement |
| **Total** | **206** | By type: mcq=42, tf=0, numerical=64, sa=58, multipart=59 |

---

## Issues Found

### Minor — No true/false (`tf`) questions
`CLAUDE.md` lists `tf` as a supported type and rendering handles it, but zero `tf` questions exist in the QUESTIONS array. Not a blocker — the feature is built, just unused.

### Minor — External CDN dependencies
Lines 6938–6939 load jQuery 2.2.4 and MathQuill 0.10.1 from `cdnjs.cloudflare.com`. Required for math-input feature. Low risk for exam-prep use but app will degrade offline or if CDN is unavailable.

### Note — No redesign agent ran today
QA was scheduled expecting a redesign agent to run first. No new redesign commit exists for 2026-07-06 — last `index.html` change was `419f80d` (2026-07-02, duplicate question fix). This run re-validates the existing stable implementation.

### Note — Previous QA report undercounted questions
Yesterday's report stated 166 questions. Today's bracket-balanced parser found 206. The discrepancy was caused by a non-greedy regex that stopped at the first `];` inside the array before reaching the end. Today's count (206) is accurate.

### Note — Exam date has passed
The exam was 5 May 2026. The app has served its primary purpose. Consider archiving or repurposing.

---

## Recommendations

1. **No immediate action required** — all required features are present and the JS is syntactically valid.
2. Consider adding `tf` questions if the exam includes true/false items.
3. Consider bundling MathQuill/jQuery locally to eliminate CDN dependency.
4. Consider archiving the repo or updating CLAUDE.md to reflect post-exam status.
