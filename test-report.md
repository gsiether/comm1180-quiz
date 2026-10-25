# COMM1180 Quiz App - QA Test Report
**Date:** 2026-10-25
**Tested by:** Automated QA Agent
**Run:** Pass 138

## Overall Status: PASS

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `QA report: automated code check (pass 137, 2026-10-24)` — previous QA run |
| JS syntax valid | ✅ | `node --check` on extracted script block (323,871 chars): no errors |
| 181 questions intact | ✅ | 181 `week:` entries in QUESTIONS block (W2:15, W3:26, W4:15, W5:33, W7:26, W8:26, W9:26, W10:14) |
| All 12 practice exam questions | ✅ | Q1–Q12 individually verified present |
| Light mode CSS | ✅ | `#f8fafc`, `#ffffff`, light mode default with dark toggle |
| Dark mode toggle | ✅ | `toggleDarkMode()` present; persisted in localStorage |
| Multi-week selection | ✅ | `selectWeekChip()` uses `homeState.weeks` array; chips toggle on/off |
| Learn mode | ✅ | `learnMode` in quizState, `renderLearnCard()` function present |
| I'm Confused button | ✅ | `showHintAI()` with local concept guide + AI fallback |
| Hint 1 / Hint 2 | ✅ | `showHint1()`, `showHint2()` both present |
| Multi-step math input | ✅ | `workingSteps`, `addStep()`, `delStep()`, MathQuill fields |
| Final Answer field | ✅ | `final-answer-wrap`, `num-final` MathQuill field |
| Notes overlay present | ✅ | 8 tabs (W2–W10), comprehensive notes HTML |
| Formula overlay present | ✅ | Per-week formula cards with use-when notes and variable legends |
| Netlify functions unchanged | ✅ | netlify/functions/ not modified |
| File size appropriate | ✅ | 7,092 lines |

## Question Breakdown
| Week | Count |
|------|-------|
| W2 — Value Creation | 15 |
| W3 — CVP Analysis | 26 |
| W4 — Balanced Scorecard | 15 |
| W5 — Time Value of Money | 33 |
| W7 — Capital Budgeting | 26 |
| W8 — Valuation | 26 |
| W9 — Risk & WACC | 26 |
| W10 — Integration | 14 |
| **Total** | **181** |

## Issues Found
None. All 181 questions intact, all 12 practice exam questions verified (Q1–Q12), all design features confirmed. App is stable and feature-complete.

## Recommendations
No actions needed. Continue scheduled QA checks.
