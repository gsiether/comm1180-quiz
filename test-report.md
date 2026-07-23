# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-23
**Tested by:** Automated QA Agent (pass 19)

## Overall Status: PASS ✅

All required features are present and functioning. Duplicate Q1–Q12 block removed in this pass.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| JS syntax valid | ✅ | `new Function(js)` — no errors; inline script is 323,560 chars |
| 12 practice exam questions | ✅ | All present (W5 Q1–Q4, W7 Q5–Q7, W8 Q8–Q10, W9 Q11–Q12) |
| Deduplication | ✅ | Removed 12 redundant duplicate Q1–Q12 entries (second block at ~line 4639); first set at lines 3421–4140 kept |
| Light mode CSS | ✅ | Full CSS variable system (`--bg`, `--surface`, `--text`, etc.) in `:root` |
| Dark mode toggle | ✅ | `toggleDarkMode()` at line 5223; moon/sun button; `.dark {}` CSS override |
| Multi-week selection | ✅ | `homeState.weeks[]` array + toggleable `weekChips`; `startQuiz(homeState.weeks)` filters by week |
| Learn mode | ✅ | `#learn` screen, learn mode tab, `renderLearnCard()` function |
| I'm Confused button | ✅ | Inline AI explain call via `/explain` Netlify function |
| Hint 1 / Hint 2 | ✅ | 3-level hint system (hint → hint2 → Ask AI) |
| Multi-step math input | ✅ | MathQuill fields, `addStep()`, `delStep()`, final answer field |
| Notes overlay present | ✅ | `notes-overlay` with comprehensive W2–W10 content; Blob URL pop-out |
| Formula overlay present | ✅ | `formula-overlay` with tabbed formula sheet (CVP, TVM, NPV, Valuation, WACC) |
| Netlify functions unchanged | ✅ | `netlify/functions/mark.js` and `explain.js` not modified |

## Question Breakdown (post-deduplication)
| Week | Topic | Count |
|------|-------|-------|
| W2 | Value Creation | 15 |
| W3 | CVP Analysis | 26 |
| W4 | Balanced Scorecard | 15 |
| W5 | Time Value of Money | 37 |
| W7 | Capital Budgeting | 29 |
| W8 | Valuation | 29 |
| W9 | Risk & WACC | 28 |
| W10 | Integration | 2 |
| **Total** | | **181** |

*Previous reports cited 250 — this was inflated by counting `type:` patterns across the entire file (including EXAM2–5 fixed exam arrays and part-level attributes). True count of main QUESTIONS array entries is 181.*

## What Changed in Pass 19
- **Removed 12 duplicate questions** from the QUESTIONS array. The Q1–Q12 block labeled "PRACTICE EXAM QUESTIONS (from university practice screenshots)" at ~line 4639 was an exact re-addition of questions already present in the "WEEK 5/7/8/9 — Practice Exam Questions" sections. Removing the duplicates drops the array from 193 to 181 unique questions.
- **Recovered 9 commits** that were on a detached HEAD branch (not on origin/main) and merged them via fast-forward onto main.
- JS syntax verified clean after all edits.

## Issues Found
None requiring action.

### Notes
- Lines 7228–7229 load jQuery 2.2.4 and MathQuill 0.10.1 from cdnjs.cloudflare.com. Required for multi-step math input. Low risk CDN.
- The exam date (May 5, 2026) has passed. App continues to function as a revision tool.
- Fixed exam arrays (EXAM2–5) contain their own question copies tailored to specific exam formats — these are intentional and not duplicates of the main QUESTIONS array.
