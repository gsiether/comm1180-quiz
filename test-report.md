# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-09
**Tested by:** Automated QA Agent
**Commit tested:** 13172b0 — "Add 12 practice exam questions from official practice exam (W5, W7, W8, W9)"

## Overall Status: PASS

All required features are present and intact. The latest commit successfully added 12 practice exam questions across W5, W7, W8, and W9, bringing the total from 166 to 178 questions. No regressions detected.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | 13172b0 "Add 12 practice exam questions from official practice exam (W5, W7, W8, W9)" |
| JS syntax valid | ✅ | `node --check` passed with no errors |
| 118+ questions intact | ✅ | 178 question objects in QUESTIONS array (target was 118 minimum; previously 166, +12 new) |
| Light mode CSS | ✅ | `--bg: #F8FAFC`, `--surface: #FFFFFF`, white/light theme throughout |
| Dark mode toggle | ✅ | `toggleDarkMode()` / `applyDarkMode()` toggle `.dark` on `document.documentElement` |
| Multi-week selection | ✅ | `homeState.weeks[]`, `buildWeekChips()`, `selectWeekChip()` — 16 references |
| Learn mode | ✅ | Learn Mode tab, `buildLearnGrid()`, learn screen flow — 71 references |
| I'm Confused button | ✅ | Present (2 references — HTML element + JS handler) |
| Hint 1 / Hint 2 | ✅ | 3-level hint system (230 references) |
| Multi-step math input | ✅ | MathQuill integration, `addStep`, step-row UI — 19 references |
| Final Answer field | ✅ | `finalAnswer` field present — 13 references |
| Notes overlay present | ✅ | `#notes-overlay` with per-week tab content — 8 references |
| Formula overlay present | ✅ | `#formula-overlay` present — 8 references |
| Netlify functions unchanged | ✅ | Zero diff on `netlify/functions/mark.js` and `netlify/functions/explain.js` |
| File size increased | ✅ | 7,059 lines (vs original 1,458 lines — 4.8× larger; up from 6,936 in prev commit) |

## Question Breakdown

| Week | Prev Count | New Count | Change | Topic |
|------|-----------|-----------|--------|-------|
| W2 | 15 | 15 | — | Market Opportunities |
| W3 | 23 | 23 | — | CVP / Pricing |
| W4 | 15 | 15 | — | Technology / BSC |
| W5 | 30 | 34 | **+4** | TVM (Q1 APR/EAR/FV, Q2 solve-r, Q3 deferred perpetuity, Q4 mortgage) |
| W7 | 23 | 26 | **+3** | Capital Budgeting (Q5 NPV perpetuity, Q6 EAA, Q7 NPV/IRR/PI/Payback) |
| W8 | 23 | 26 | **+3** | Valuation (Q8 bond pricing, Q9 multi-stage DDM, Q10 Gordon Growth) |
| W9 | 23 | 25 | **+2** | WACC (Q11 CAPM 5-part, Q12 WACC with D/E ratios) |
| W10 | 14 | 14 | — | Performance Measurement |
| **Total** | **166** | **178** | **+12** | |

All 12 expected practice exam questions are accounted for and landed in the correct weeks.

## Changes Since Last QA Report (2026-06-08)

- **13172b0**: Added 12 practice exam questions (123 insertions, 0 deletions). W5 +4, W7 +3, W8 +3, W9 +2. No other files modified.

## Issues Found

1. **Pre-existing: `type:'tf'` absent from question bank** — The rendering code supports true/false questions but there are zero `tf`-type entries in the array. Low priority unless the exam includes T/F questions.

2. **Pre-existing: CDN dependency for MathQuill/jQuery** — Two external CDN `<script>` tags load jQuery and MathQuill from `cdnjs.cloudflare.com`. If the CDN is unavailable, math step input breaks silently. Low risk for exam day but worth noting.

3. **Note on `<script>` tag count** — `grep -c '<script>'` returns 2 and `grep -c '</script>'` returns 3. This is expected and harmless: the third occurrence is an escaped `<\/script>` inside a JS string literal in the `openNotesWindow()` popup helper, which is the correct way to embed an end-tag inside a script block.

## Recommendations

1. No action required on the question bank — all 12 practice exam questions are present and in the correct weeks.
2. Manual browser smoke-test of the new practice questions recommended before exam day.
3. No action required on Netlify functions — both are unchanged.
4. Consider adding `type:'tf'` questions if the exam has true/false coverage.
