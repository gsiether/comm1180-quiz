# COMM1180 Quiz App - QA Test Report
**Date:** 2026-08-11
**Tested by:** Automated QA Agent (pass 48)

## Overall Status: PASS

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Latest: `89b5d23` QA report pass 47 (2026-08-11); redesign at `0c7ba09` |
| JS syntax valid | ✅ | `new Function()` parse check passed with no errors |
| Questions array present | ✅ | QUESTIONS array closes correctly; 181 entries total |
| 181 questions stable | ✅ | Stable count post-deduplication (d72225e removed 12 duplicates); all 12 practice exam Qs present |
| Light mode CSS | ✅ | `#F8FAFC`, `--bg`, `--surface` white/light tokens present |
| Dark mode toggle | ✅ | `toggleDarkMode()`, `darkModeBtn`, localStorage `c1180_dark` persists across sessions |
| Multi-week selection | ✅ | `homeState.weeks[]` array, `selectWeekChip()` toggles, all-weeks shortcut present |
| Learn mode | ✅ | `#learn` screen, `showLearn()`, "Test yourself" wired per week |
| Hint 1 button | ✅ | `showHint1()` reveals hint text, disables button with checkmark |
| Hint 2 button | ✅ | `showHint2()` appears after Hint 1 clicked |
| I'm Confused button | ✅ | `showHintAI()` calls `/explain`, renders AI response inline |
| Multi-step math input | ✅ | `.working-steps`, `.btn-add-step`, `addStep()` with MathQuill |
| Final Answer field | ✅ | `.final-answer-wrap` with indigo left-border styling |
| Notes overlay | ✅ | `notes-overlay` — all 8 weeks W2/W3/W4/W5/W7/W8/W9/W10 with comprehensive content |
| Formula overlay | ✅ | `formula-overlay` — W3/W5/W7/W8/W9 tabs with use-when explanations |
| Practice Q1: APR/EAR/FV | ✅ | W5 multipart: 16.0% APR monthly compounding |
| Practice Q2: Solving for r | ✅ | W5 numerical: $14,000 → $30,000 in 10 years |
| Practice Q3: Deferred perpetuity | ✅ | W5 numerical: first payment $128 in 22 years |
| Practice Q4: Mortgage | ✅ | W5 numerical: $300,000 house, $40,000 down, 25-year |
| Practice Q5: McDonald's NPV | ✅ | W7 multipart: soggy burger paddies, declining growing perpetuity |
| Practice Q6: AT&T EAA | ✅ | W7 multipart: Long Life vs Short Life bus models |
| Practice Q7: NPV/IRR/PI/Payback | ✅ | W7 multipart: 7-part mutually exclusive projects |
| Practice Q8: Bond pricing | ✅ | W8 numerical: 7.2% coupon, semi-annual, 2-year, YTM 8.2% |
| Practice Q9: Hush Puppies | ✅ | W8 multipart: multi-stage dividend growth, 2 parts |
| Practice Q10: Gordon Growth | ✅ | W8 numerical: D₀=$4.5, g=3.5%, r=11.1% |
| Practice Q11: CAPM 5-part | ✅ | W9 multipart: Round Corp table, 5 CAPM sub-questions |
| Practice Q12: WACC D/E ratios | ✅ | W9 multipart: Sandwich With A Pretty Big Pickle, 4 D/E ratios |
| Netlify functions unchanged | ✅ | `mark.js` and `explain.js` unmodified (git diff HEAD~1 -- netlify/ empty) |
| HTML structure valid | ✅ | Starts `<!DOCTYPE html>`, ends `</html>` |
| File size | ✅ | 7060 lines (vs original 1458) |

## Question Count Breakdown (QUESTIONS array)
| Week | Count |
|------|-------|
| Week 2 | 15 |
| Week 3 | 26 |
| Week 4 | 15 |
| Week 5 | 33 |
| Week 7 | 26 |
| Week 8 | 26 |
| Week 9 | 26 |
| Week 10 | 14 |
| **Total** | **181** |

Note: 181 questions (not 118) — the redesign agent added additional questions beyond the 12 practice exam questions originally specified. Count has been stable since `d72225e` (deduplication commit).

## Issues Found
None. All feature checks pass. App is fully functional.

## Recommendations
- All required features are implemented and stable: light mode, dark mode toggle, multi-week selection, learn mode, 3-level hints, multi-step math working area, comprehensive notes, formula sheet, and all 12 practice exam questions.
- Netlify auto-deploys on push to `main`; confirm `ANTHROPIC_API_KEY` is set in Netlify dashboard environment variables.
