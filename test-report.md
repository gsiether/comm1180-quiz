# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-24
**Tested by:** Automated QA Agent (pass 21)

## Overall Status: PASS ✅

All required features are present and verified. No regressions detected since pass 20. JS syntax clean. Code is stable.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| JS syntax valid | ✅ | `node --check` on extracted 4017-line script — no errors |
| Questions present | ✅ | 181 in main QUESTIONS array |
| Light mode CSS | ✅ | Full CSS variable system (`--bg`, `--surface`, `--text`, etc.) in `:root` |
| Dark mode toggle | ✅ | `toggleDarkMode()` at line 5051; moon/sun button; `.dark {}` CSS override |
| Multi-week selection | ✅ | `homeState.weeks[]` array + `selectWeekChip()` function |
| Learn mode | ✅ | `#learn` screen, `learnMode` flag in quizState, `renderLearnCard()` |
| I'm Confused button | ✅ | Renders `showHintAI()` (2 matches); calls `/explain` Netlify function inline |
| Hint 1 / Hint 2 | ✅ | 3-level hint system — `showHint1`/`showHint2` (4 matches) |
| Multi-step math input | ✅ | MathQuill fields, `addStep()` (6 matches), `.step-row`, `.working-steps` CSS |
| Final Answer field | ✅ | `finalAnswer` / `Final Answer` — 13 matches |
| Notes overlay present | ✅ | `notes-overlay` (6 matches) with W2–W10 content; pop-out window |
| Formula overlay present | ✅ | `formula-overlay` (6 matches) with tabbed formula sheet |
| Practice Q1 (APR/EAR 16%) | ✅ | Present in QUESTIONS array |
| Practice Q11 (Round Corp) | ✅ | Present in QUESTIONS array (5 matches) |
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

**Note:** The 12 practice exam questions (W5 Q1–Q4, W7 Q5–Q7, W8 Q8–Q10, W9 Q11–Q12) are confirmed present. Total of 181 exceeds the baseline 118 — not a defect; additional questions were added in passes 11–20.

## File Structure
| Check | Result |
|-------|--------|
| Starts with `<!DOCTYPE html>` | ✅ |
| Ends with `</html>` | ✅ |
| Inline `<script>` blocks | 1 (line 3035) |
| External `<script src>` tags | 2 (jQuery 2.2.4 + MathQuill 0.10.1 from cdnjs) — expected |

## What Changed Since Pass 20
No changes to `index.html` or `netlify/functions/` since pass 20. Only `test-report.md` updated this pass.

## Issues Found
None.

## Recommendations
- App is stable and exam-ready.
- The exam date (5 May 2026) has now passed — app continues to function as a revision/practice tool.
- CDN dependencies: jQuery 2.2.4 + MathQuill 0.10.1 from cdnjs (lines 7056–7057). Required for multi-step math input.
