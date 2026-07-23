# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-23
**Tested by:** Automated QA Agent (pass 20)

## Overall Status: PASS ✅

All required features are present. No regressions detected since pass 19. Code is stable.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `e368782` "Fix QA report question breakdown table (pass 19 correction)" |
| JS syntax valid | ✅ | `node --check` on extracted 4018-line script — no errors |
| Questions present | ✅ | 181 in main QUESTIONS array (see note) |
| Light mode CSS | ✅ | Full CSS variable system (`--bg`, `--surface`, `--text`, etc.) in `:root` |
| Dark mode toggle | ✅ | `toggleDarkMode()` at line 5051; moon/sun button; `.dark {}` CSS override |
| Multi-week selection | ✅ | `homeState.weeks[]` array + `selectWeekChip()` function |
| Learn mode | ✅ | `#learn` screen, `learnMode` flag in quizState, `renderLearnCard()` |
| I'm Confused button | ✅ | Rendered at line 5286; calls `/explain` Netlify function inline |
| Hint 1 / Hint 2 | ✅ | 3-level hint system (hint → hint2 → Ask AI) — 234 matches |
| Multi-step math input | ✅ | MathQuill fields, `addStep()`, `.step-row`, `.working-steps` CSS |
| Final Answer field | ✅ | `finalAnswer` / `Final Answer` — 13 matches |
| Notes overlay present | ✅ | `notes-overlay` at line 1153 with W2–W10 content; pop-out window |
| Formula overlay present | ✅ | `formula-overlay` at line 2445 with tabbed formula sheet |
| Netlify functions unchanged | ✅ | `git diff HEAD~2 -- netlify/` produces no output |
| File size increased | ✅ | 7,062 lines (vs original 1,458 lines) |

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

**Note on question count:** The QA script targets 118 questions (original 106 + 12 practice). The actual count of 181 reflects questions added during passes 11–19 including enhanced numerical questions, EVE/pieconomics questions, and practice-aligned sets. The 12 practice exam questions (W5 Q1–Q4, W7 Q5–Q7, W8 Q8–Q10, W9 Q11–Q12) are confirmed present. Count exceeds 118 deliberately — not a defect.

## File Structure
| Check | Result |
|-------|--------|
| Starts with `<!DOCTYPE html>` | ✅ |
| Ends with `</html>` | ✅ |
| Inline `<script>` blocks | 1 (line 3035) |
| External `<script src>` tags | 2 (jQuery 2.2.4 + MathQuill 0.10.1 from cdnjs) — expected |

## What Changed Since Pass 19
Only `test-report.md` was updated in commit `e368782` (corrected question breakdown table). No changes to `index.html` or `netlify/functions/` since pass 19.

## Issues Found
No issues found.

## Recommendations
- No action required. App is stable.
- The exam date (5 May 2026) has passed — app functions as a revision/practice tool.
- Fixed exam arrays (EXAM2–5) contain their own question sets tailored to specific exam formats and are intentionally separate from the main QUESTIONS array.
- CDN dependencies: jQuery 2.2.4 + MathQuill 0.10.1 from cdnjs (lines 7056–7057). Required for multi-step math input.
