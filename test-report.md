# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-24
**Tested by:** Automated QA Agent (pass 22)

## Overall Status: PASS ✅

All required features are present and verified. No regressions detected since pass 21. JS syntax clean. Code is stable.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `b2f2ce6 QA report: automated code check (2026-07-24, twenty-first pass)` — no new redesign commit since pass 21; `index.html` unchanged |
| JS syntax valid | ✅ | `node --check` on extracted 4018-line script (lines 3036–7053) — no errors |
| 181 questions intact | ✅ | W2:15 W3:26 W4:15 W5:33 W7:26 W8:26 W9:26 W10:14 = 181 total (exceeds original 118 baseline — additional questions added in passes 11–20) |
| Light mode CSS | ✅ | Full CSS variable system (`--bg`, `--surface`, `--text`, etc.) in `:root` |
| Dark mode toggle | ✅ | `toggleDarkMode()` at line 5051; moon/sun button at line 820; `.dark {}` CSS override |
| Multi-week selection | ✅ | `homeState.weeks[]` array + `selectWeekChip()` function (lines 4688–4824) |
| Learn mode | ✅ | `#learn` screen, `learnMode` flag in quizState, `renderLearnCard()` |
| I'm Confused button | ✅ | Renders `showHintAI()` (line 5699); calls `/explain` Netlify function inline |
| Hint 1 / Hint 2 | ✅ | 3-level hint system — `showHint1()` (line 5639) / `showHint2()` (line 5659) |
| Multi-step math input | ✅ | MathQuill fields, `addStep()` (line 5412), `.step-row`, `.working-steps` CSS |
| Final Answer field | ✅ | `final-answer-wrap` CSS class + HTML in quiz renderer |
| Notes overlay present | ✅ | `notes-overlay` div at line 1153; W2–W10 content; pop-out window |
| Formula overlay present | ✅ | `formula-overlay` div at line 2445; tabbed formula sheet |
| Practice Q1 (APR/EAR 16%) | ✅ | Present in QUESTIONS array |
| Practice Q11 (Round Corp) | ✅ | Present in QUESTIONS array |
| Practice Q12 (Sandwich WACC) | ✅ | Present in QUESTIONS array |
| Netlify functions unchanged | ✅ | Last modified in `bbcddc6` (2026-05-30); `claude-haiku-4-5-20251001` confirmed in both mark.js and explain.js |
| File size increased | ✅ | 7,062 lines (original: 1,458 lines) |

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
| Inline `<script>` block | 1 (line 3035) |
| External `<script src>` tags | 2 (jQuery 2.2.4 + MathQuill 0.10.1 from cdnjs) — expected |

## What Changed Since Pass 21
No changes to `index.html` or `netlify/functions/` since pass 21. Only `test-report.md` updated this pass.

## Issues Found
None.

## Recommendations
- App is stable and all features are verified.
- The exam date (5 May 2026) has passed — app continues to function as a revision/practice tool.
- CDN dependencies: jQuery 2.2.4 + MathQuill 0.10.1 from cdnjs (lines 7056–7057). Required for multi-step math input.
