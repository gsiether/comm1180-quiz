# COMM1180 Quiz App - QA Test Report
**Date:** 2026-05-13
**Tested by:** Automated QA Agent

## Overall Status: PARTIAL

All required UI features are present and JS syntax is valid. However, the question count (173) exceeds the expected 118. The redesign added more questions than the 12 specified from `practice-questions.md`, and although a deduplication pass was done, the count remains 55 above target.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `7cfc60f Restore index.html with duplicate questions removed` (preceded by `a733fa5 Major redesign`) |
| JS syntax valid | ✅ | No errors detected |
| 118 questions intact | ⚠️ | **173 questions found** (expected 118) — see Issues |
| Light mode CSS | ✅ | Default light theme with `--bg: #F8FAFC`, `--surface: #FFFFFF` |
| Dark mode toggle | ✅ | `.dark` CSS class defined; `toggleDarkMode()` + 🌙/☀️ button present |
| Multi-week selection | ✅ | Implemented via `homeState.weeks[]` + `selectWeekChip()` — functionally complete |
| Learn mode | ✅ | `showLearn()`, `renderLearnCard()`, `#learn` screen, Learn Mode tab all present |
| I'm Confused button | ✅ | Renders as "😕 I'm Confused", calls `showHintAI()` |
| Hint 1 / Hint 2 | ✅ | 3-level hint system implemented (`hint`, `hint2`, AI explain) |
| Multi-step math input | ✅ | `addStep()`, `.working-steps`, `.step-row`, "+ Add Step" button all present |
| Final Answer field | ✅ | `.final-answer-wrap`, `.final-answer-input`, `.final-answer-label` all present |
| Notes overlay present | ✅ | `notes-overlay` present with week tabs |
| Formula overlay present | ✅ | `formula-overlay` present with CVP/TVM/NPV/Valuation/WACC tabs |
| Netlify functions unchanged | ✅ | `mark.js` and `explain.js` not modified |
| File size increased | ✅ | **6,824 lines** (was 1,458 lines — 4.7× increase) |

---

## Question Count Breakdown
| Week | Questions | Topic |
|------|-----------|-------|
| W2 | 15 | Market Opportunities |
| W3 | 23 | CVP/Pricing |
| W4 | 15 | Technology/BSC |
| W5 | 34 | TVM |
| W7 | 26 | Investment/Capital Budgeting |
| W8 | 23 | Investors/Valuation |
| W9 | 23 | WACC |
| W10 | 14 | Performance Measurement |
| **Total** | **173** | **(expected 118)** |

---

## Issues Found

### 1. Question count is 173, not 118 (HIGH PRIORITY)
The QUESTIONS array contains 173 top-level questions vs the expected 118 (original ~106 + 12 new practice exam questions from `practice-questions.md`). The redesign agent added more than the 12 specified questions. Two deduplication commits were applied (`f5443f7`, `7cfc60f`) that reduced the count from ~178 to 173, but 55 excess questions remain.

W5 (34 Qs) and W7 (26 Qs) are the primary candidates for remaining duplicates — both are substantially higher than would be expected from the original bank plus the 4 and 3 new practice questions added for those weeks respectively.

**Action required:** Further audit of W5 and W7 for near-duplicate question text.

### 2. Multiple script tags (minor)
There are 3 `<script>` tags total: one main inline block (lines 2817–6816) plus external CDN scripts for jQuery and MathQuill. The jQuery and MathQuill libraries are legitimate dependencies for the MathQuill math input feature. Not a functional issue.

### 3. "I'm Confused" button hidden when hints disabled (minor)
The button is conditionally rendered when `settings.hints !== false && !quizState.examMode`. Users who turn off hints in Settings will not see the AI explain button. This may be intentional but is worth confirming.

---

## Recommendations
1. **Further deduplicate W5 and W7** — run a text-similarity check on question strings within each week group.
2. **Verify the 12 practice exam questions from `practice-questions.md`** are present: Q1–Q4 (TVM/W5), Q5–Q7 (Capital Budgeting/W7), Q8–Q10 (Valuation/W8), Q11–Q12 (WACC/W9).
3. **No action needed** on netlify functions — `mark.js` and `explain.js` are untouched and working.
4. All UI features (learn mode, 3-level hints, dark mode toggle, multi-week selection, MathQuill math input, final answer field, notes and formula overlays) are correctly implemented and present.
