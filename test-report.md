# COMM1180 Quiz App - QA Test Report
**Date:** 2026-10-19
**Tested by:** Automated QA Agent
**Pass number:** 130

## Overall Status: PASS

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | d789f28 — "QA report: automated code check (pass 129, 2026-10-19)" 2026-10-19 |
| JS syntax valid | ✅ | No syntax errors detected |
| 181 questions intact | ✅ | 181 question entries found (task spec says 118 — see note below) |
| Light mode CSS | ✅ | 38 matches for light background tokens |
| Dark mode toggle | ✅ | 30 matches for dark/moon/sun/toggle |
| Multi-week selection | ✅ | 17 matches for week chip/toggle patterns |
| Learn mode | ✅ | 12 matches for learnMode/#learn |
| I'm Confused button | ✅ | 3 matches |
| Hint 1 / Hint 2 | ✅ | 234 matches |
| Multi-step math input | ✅ | 19 matches for addStep/step-row |
| Final Answer field | ✅ | 13 matches |
| Notes overlay present | ✅ | 8 matches for notes-overlay/n-w2 |
| Formula overlay present | ✅ | 8 matches for formula-overlay/f-cvp |
| Netlify functions unchanged | ✅ | git diff HEAD~1 -- netlify/ shows no changes |
| File size increased | ✅ | 7,092 lines (vs original 1,458 lines) |

## Question Breakdown
| Type | Count |
|------|-------|
| MCQ | 42 |
| True/False | 15 |
| Numerical | 64 |
| Short Answer | 58 |
| Multipart | 59 |
| **Total (week: entries)** | **181** |

## Issues Found

**Minor discrepancy in QA task spec:** The QA task prompt specifies 118 questions, but `CLAUDE.md` documents 181 questions across W2, W3, W4, W5, W7, W8, W9, W10. The app has 181 questions, which matches the project's own documentation. The 118-question target in the task spec appears to be outdated (predates the practice exam question additions). This is not a bug — the app is correct per CLAUDE.md.

**Note on script tag count:** `grep -c '<script>'` returns 2 because one occurrence is inside a JavaScript string literal (a popup notes window builder using `<\/script>` to escape). There is only 1 actual `<script>` block in the HTML — this is not an issue.

No functional issues found.

## Recommendations
- Update the QA task spec to reference 181 questions instead of 118.
- Continue periodic QA runs to catch regressions ahead of the exam date (Tuesday 5 May 2026).
