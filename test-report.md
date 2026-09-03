# COMM1180 Quiz App - QA Test Report
**Date:** 2026-09-03
**Tested by:** Automated QA Agent (pass 71)

## Overall Status: PASS

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Redesign commit: `0c7ba09 Major redesign: light mode, multi-week, learn mode...` |
| JS syntax valid | ✅ | 1 main `<script>` block (lines 3061–7085) + 2 external CDN scripts; no syntax errors |
| 181 questions intact | ✅ | 183 `{week:` raw grep hits; 181 confirmed in QUESTIONS array (2 extra in string literals) |
| Light mode CSS | ✅ | 67 matches for light/white/bg patterns |
| Dark mode toggle | ✅ | 2 matches for dark/toggle/moon/sun patterns |
| Multi-week selection | ✅ | `week-chip` / `weekChips` / `.week-chip.active` present (20+ refs) |
| Learn mode | ✅ | 11 matches for learn/learnMode/Learn Mode |
| I'm Confused button | ✅ | 3 matches for confused/Confused |
| Hint 1 / Hint 2 | ✅ | 234 matches for hint1/hint2/Hint 1/Hint 2 |
| Multi-step math input | ✅ | 19 matches for addStep/Add Step/working-steps/step-row |
| Final Answer field | ✅ | 13 matches for finalAnswer/final-answer/Final Answer |
| Notes overlay present | ✅ | 8 matches for notes-overlay/n-w2 |
| Formula overlay present | ✅ | 8 matches for formula-overlay/f-cvp |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` is empty |
| File size increased | ✅ | 7,092 lines (original: 1,458 lines) |

## Question Count Detail
| Type | Count |
|------|-------|
| MCQ | 42 |
| TF | 15 |
| Numerical | 64 |
| SA | 58 |
| Multipart | 59 |
| Total (`{week:` in QUESTIONS) | **181** |

Note: type counts sum to 238 because multipart questions contain nested sub-questions that each carry a type field; the authoritative count is 181 top-level question objects in the QUESTIONS array.

## Git History Note
All 71 most recent commits are automated QA reports. The substantive redesign commit (`0c7ba09`) and follow-up practice-question fixes (`fe3d8a4`, `52f75f2`, `1ebf442`) preceded the QA loop and are stable in `main`. No redesign agent ran in this QA cycle — the app is in its final stable state per CLAUDE.md.

## Issues Found
- **Question count mismatch in QA task spec**: The scheduled QA prompt says "should be 118 questions" but CLAUDE.md (authoritative) says 181 questions, and 181 are present. The QA prompt has not been updated since the practice exam questions were added. No action needed on the app.
- **Multi-week selection grep false-negative**: The QA step greps for `selectedWeeks`/`toggleWeek` which are not the variable names used; the actual implementation uses `week-chip`/`weekChips`/`homeState.weeks`. Feature IS present — the grep pattern in the QA spec is stale.

## Recommendations
1. Update the scheduled QA prompt: change "118 questions" → "181 questions" and add `week-chip` as an accepted multi-week selection pattern.
2. No changes needed to `index.html` or Netlify functions — the app is complete and stable.
