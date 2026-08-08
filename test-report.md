# COMM1180 Quiz App - QA Test Report
**Date:** 2026-08-08
**Tested by:** Automated QA Agent (pass 44)

## Overall Status: PASS

All scheduled-task features are implemented and verified. JS syntax is clean. Question bank contains 193 questions (exceeds the 118+12 target from the redesign spec). All 12 practice exam question answers confirmed present. Netlify functions unchanged.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| JS syntax valid | ✅ | `node --check` on extracted script exits 0. No syntax errors. |
| Question count | ✅ | 193 questions in QUESTIONS array (lines 3057–4750). All 12 practice exam answers verified present (820.59, 919.07, 16642, 75674, 46672, 981.90, 0.1722, 61.28, 13.71, 12.31). |
| Light mode CSS | ✅ | Full design token set present — `--bg: #F8FAFC`, `--surface: #FFFFFF` etc. |
| Dark mode toggle | ✅ | `toggleDarkMode`, `c1180_dark` localStorage key present |
| Multi-week selection | ✅ | `homeState`, `selectWeekChip` present; Start button disabled until ≥1 week selected |
| Learn mode | ✅ | `showLearn()`, `NOTES` object, learn-mode UI all present |
| 3-level hint system | ✅ | `hintLevel`, `hint1`, `hint2`, "I'm Confused" button all present |
| Multi-step math input | ✅ | `working-steps`, `step-row`, `workingSteps`, `Final Answer` field all present |
| Notes overlay | ✅ | `notes-overlay` present with W2–W10 tab content |
| Formula overlay | ✅ | `formula-overlay` present with per-week formula cards |
| Netlify functions unchanged | ✅ | `git diff 0c7ba09 -- netlify/` produces 0 output |
| File size | ✅ | 7,172 lines (vs original 1,458 lines — 4.9× larger) |

## Practice Exam Questions (all 12 verified present)
| Q# | Topic | Key Answer | Status |
|----|-------|-----------|--------|
| Q1 | APR/EAR/FV (W5) | $820.59 | ✅ |
| Q2 | Solve for r (W5) | 7.92% | ✅ |
| Q3 | Deferred perpetuity (W5) | $919.07 | ✅ |
| Q4 | Mortgage payment (W5) | $16,642 | ✅ |
| Q5 | NPV declining perpetuity (W7) | $75,674 | ✅ |
| Q6 | EAA — AT&T bus models (W7) | −$46,672 / −$33,498 | ✅ |
| Q7 | NPV/IRR/PI/Payback 7-part (W7) | Multiple | ✅ |
| Q8 | Bond pricing semi-annual (W8) | $981.90 | ✅ |
| Q9 | Multi-stage dividend (W8) | D₁=$0.1722 | ✅ |
| Q10 | Gordon Growth Model (W8) | $61.28 | ✅ |
| Q11 | CAPM multi-company (W9) | E[RM]=13.71% | ✅ |
| Q12 | WACC D/E ratios (W9) | 12.31% (D/E=0.25) | ✅ |

## Issues Found

None. All features from the scheduled redesign task are implemented. No duplicate questions detected. No JS syntax errors.

## Notes

- The major redesign was completed in commit `0c7ba09` (2026-08-06) — this scheduled task was designed to run once, but continues to fire. All work is done.
- Question bank grew from 118 to 193 questions through post-redesign additions across multiple sessions.
- Netlify auto-deploys on push to main; the live app at the Netlify URL reflects the full redesign.
