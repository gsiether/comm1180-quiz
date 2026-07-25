# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-25
**Tested by:** Automated QA Agent (pass 23)

## Overall Status: PASS ✅

All required features are present and verified. One git housekeeping fix applied this pass (detached HEAD recovery). JS syntax clean. App is stable.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| Git state clean | ✅ | Pass 22 commit was in detached HEAD state; merged to `main` this pass via `git merge a9e0fcf --ff-only` |
| New commit exists | ✅ | `a9e0fcf QA report: automated code check (2026-07-24, twenty-second pass)` — now on `main` |
| JS syntax valid | ✅ | `node --check` on extracted script (lines 3035–7054) — no errors |
| 181 questions intact | ✅ | W2:15 W3:26 W4:15 W5:33 W7:26 W8:26 W9:26 W10:14 = 181 total |
| Light mode CSS | ✅ | Full CSS variable system (`--bg`, `--surface`, `--text`, etc.) in `:root` |
| Dark mode toggle | ✅ | `toggleDarkMode()` at line 5051; moon/sun button at line 820; `.dark {}` CSS override |
| Multi-week selection | ✅ | `homeState.weeks[]` array + `selectWeekChip()` function |
| Learn mode | ✅ | `#learn` screen, `learnMode` flag in quizState, `renderLearnCard()` |
| I'm Confused button | ✅ | Renders `showHintAI()`; calls `/explain` Netlify function inline |
| Hint 1 / Hint 2 | ✅ | 3-level hint system — `showHint1()` / `showHint2()` |
| Multi-step math input | ✅ | MathQuill fields, `addStep()`, `.step-row`, `.working-steps` CSS |
| Final Answer field | ✅ | `final-answer-wrap` CSS class + HTML in quiz renderer |
| Notes overlay present | ✅ | `notes-overlay` div at line 1153; W2–W10 content; pop-out window |
| Formula overlay present | ✅ | `formula-overlay` div at line 2445; tabbed formula sheet |
| Practice Q1 (APR/EAR 16%) | ✅ | Present in QUESTIONS array |
| Practice Q11 (Round Corp) | ✅ | Present in QUESTIONS array |
| Practice Q12 (Sandwich WACC) | ✅ | Present in QUESTIONS array |
| Netlify functions unchanged | ✅ | `claude-haiku-4-5-20251001` confirmed in both mark.js and explain.js |
| File size | ✅ | 7,062 lines |

## Question Breakdown
| Week | Topic | Count |
|------|-------|-------|
| W2 | Value Creation | 15 |
| W3 | CVP Analysis | 26 |
| W4 | Balanced Scorecard | 15 |
| W5 | Time Value of Money | 33 |
| W7 | Capital Budgeting | 26 |
| W8 | Valuation | 26 |
| W9 | Risk & WACC | 26 |
| W10 | Integration | 14 |
| **Total** | | **181** |

**Note:** The 12 practice exam questions (W5 Q1–Q4, W7 Q5–Q7, W8 Q8–Q10, W9 Q11–Q12) are confirmed present.

## File Structure
| Check | Result |
|-------|--------|
| Starts with `<!DOCTYPE html>` | ✅ |
| Ends with `</html>` | ✅ |
| Inline `<script>` block | 1 (line 3035) |
| External `<script src>` tags | 2 (jQuery 2.2.4 + MathQuill 0.10.1 from cdnjs) |

## What Changed Since Pass 22
- **Git fix:** Pass 22 commit (a9e0fcf) existed in detached HEAD state, not connected to `main`. Fast-forward merged to `main` this pass. `origin/main` is now up to date.
- No changes to `index.html` or `netlify/functions/`.

## Issues Found
None (beyond the git housekeeping issue, now resolved).

## Recommendations
- App is stable and all features verified.
- The exam date (5 May 2026) has passed — app functions as a revision/practice tool.
- CDN dependencies: jQuery 2.2.4 + MathQuill 0.10.1 from cdnjs. Required for multi-step math input.
