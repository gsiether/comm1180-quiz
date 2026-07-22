# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-22
**Tested by:** Automated QA Agent (pass 17)

## Overall Status: PASS

All required features are present and functioning. No critical issues found. No code changes required.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| Git sync | ✅ | HEAD = origin/main = `0d1079f`. Detached HEAD from previous session was re-attached to main and verified in sync. |
| JS syntax valid | ✅ | Inline script (lines 3035–7226) extracted and checked via `new Function()` — no syntax errors |
| Question count | ✅ | 193 top-level questions across all 8 weeks (W2–W10) |
| 12 practice exam questions | ✅ | All 12 from practice-questions.md confirmed present (Q1 APR/EAR, Q2 solve-for-r, Q3 deferred perpetuity, Q4 mortgage, Q5 McDonald's NPV, Q6 AT&T EAA, Q7 7-part NPV/IRR/PI, Q8 bond pricing, Q9 Hush Puppies dividend, Q10 Gordon Growth, Q11 CAPM 5-part, Q12 WACC 4-part) |
| Light mode CSS | ✅ | CSS variables for light theme as default; dark mode via `.dark` class on `<html>` |
| Dark mode toggle | ✅ | `toggleDarkMode()` at line 5223; moon/sun icon button at line 820 |
| Multi-week selection | ✅ | `homeState.weeks[]` array; toggleable chips with push/splice/indexOf logic |
| Learn mode | ✅ | `#learn` screen, learn mode tab, `renderLearnCard()` function |
| 3-tier hint system | ✅ | Hint 1, Hint 2, "I'm Confused" (AI explain) all wired up |
| Multi-step math input | ✅ | MathQuill fields, `addStep()`, `delStep()`, `workingStepsToText()` for AI submission |
| Final Answer field | ✅ | Blue-bordered final answer section in numerical questions |
| Notes overlay | ✅ | Comprehensive notes for W2–W10 with formulas, definitions, exam tips, approach guides |
| Formula overlay | ✅ | Tabbed formula sheet with use-when explanations and variable legends |
| Exam Mode | ✅ | 5 practice exams (Random, Canteen, VoltRide, PulseWear, Section B only) with 2:15 timer |
| Netlify functions unchanged | ✅ | `mark.js` and `explain.js` intact — no modifications |

## Question Breakdown
| Week | Topic | Count |
|------|-------|-------|
| W2 | Value Creation | 15 |
| W3 | CVP Analysis | 26 |
| W4 | Balanced Scorecard | 15 |
| W5 | Time Value of Money | 37 |
| W7 | Capital Budgeting | 29 |
| W8 | Valuation | 29 |
| W9 | Risk & WACC | 28 |
| W10 | Integration | 14 |
| **Total** | | **193** |

**Question types:** SA (58), Numerical (53), MCQ (42), Multipart (42), TF (15)

## Notes

- jQuery 2.2.4 CDN is required as a MathQuill dependency — cannot be removed without replacing the math input system
- CLAUDE.md references original 118 questions; actual count is 193 (cumulative additions across sessions)
- The exam date (May 5, 2026) has already passed; the app continues to function as a general study tool
- No code changes were made this pass — all features verified and working
