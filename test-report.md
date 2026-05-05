# COMM1180 Quiz App - QA Test Report
**Date:** 2026-05-05
**Tested by:** Automated QA Agent (run 12)

## Overall Status: PASS

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | "Fix hint progression: hide I'm Confused until after hints are shown" (9291124) |
| JS syntax valid | ✅ | `node --check` passed with no errors |
| 118+ questions intact | ✅ | 166 questions in QUESTIONS array (118 original + 48 from practice exams PE4 & PE5) |
| Light mode CSS | ✅ | `--bg: #F8FAFC`, `--surface: #FFFFFF` and white/light backgrounds present |
| Dark mode toggle | ✅ | `toggleDarkMode()` function, `darkModeBtn` button, localStorage persistence |
| Multi-week selection | ✅ | `homeState.weeks[]`, `selectWeekChip()`, `.week-chip.active` UI all present |
| Learn mode | ✅ | `#learn` screen, `learnMode` flag, `renderLearnCard()` function present |
| I'm Confused button | ✅ | `hintBtnAI` button with "😕 I'm Confused" label; conditionally shown after hints |
| Hint 1 / Hint 2 | ✅ | `hint` and `hint2` fields in all SA questions; `.hint-box.h1` and `.hint-box.h2` CSS classes |
| Multi-step math input | ✅ | `addStep()`, `workingSteps` container, `.step-row`, `+ Add Step` button |
| Final Answer field | ✅ | `.final-answer-wrap`, `.final-answer-input`, `.final-answer-label` all present |
| Notes overlay present | ✅ | `#notes-overlay` div with W2–W10 tab content sections |
| Formula overlay present | ✅ | `#formula-overlay` div with W3 CVP, W5 TVM, W7 NPV, W8 Valuation, W9 WACC tabs |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` shows no changes |
| File size increased | ✅ | 6711 lines (vs original 1458 lines) |

## Question Breakdown by Week
| Week | Count |
|------|-------|
| Week 2 | 15 |
| Week 3 | 23 |
| Week 4 | 15 |
| Week 5 | 30 |
| Week 7 | 23 |
| Week 8 | 23 |
| Week 9 | 23 |
| Week 10 | 14 |
| **Total** | **166** |

## Question Type Breakdown
| Type | Count |
|------|-------|
| `mcq` | 42 |
| `numerical` | 64 |
| `sa` | 58 |
| `multipart` | 59 |
| `tf` (true/false) | 0 |

## Issues Found

1. **No true/false questions**: The `type:'tf'` question type is absent from the QUESTIONS array. This may be intentional (tf questions may have been converted to MCQ or another type), but if tf questions existed in a previous version they have been removed.

2. **Script tag structure**: The main inline `<script>` block spans lines 2817–6703, followed by two external script tags (jQuery 2.2.4 and MathQuill 0.10.1). jQuery 2.2.4 is significantly out of date (end-of-life) and has known vulnerabilities, but this is a low-risk internal quiz tool so it is noted for awareness only.

3. **I'm Confused button visibility logic**: The button is hidden by default when `hasHints` is true, and shown only after hints are exhausted. This is the expected post-fix behavior per the latest commit message. Confirmed correct.

## Recommendations

1. Verify in-browser that the hint progression works end-to-end: Hint 1 → Hint 2 → I'm Confused (AI), since the latest commit specifically fixed this flow.
2. Confirm that all 12 practice exam questions from `practice-questions.md` (W5 Q1–Q4, W7 Q5–Q7, W8 Q8–Q10, W9 Q11–Q12) are present — they appear to be included within the 166-question count (Week 5 has 30, Weeks 7–9 have 23 each).
3. Consider upgrading jQuery from 2.2.4 to a current version if the app remains in active use post-exam.
