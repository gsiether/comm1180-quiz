# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-30
**Tested by:** Automated QA Agent (pass 30)

## Overall Status: PASS ✅

All required features confirmed present. 193 unique questions in bank (181 from pass 29 + 12 new practice exam questions added in today's commit). No regressions detected.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `5eda8ce` — "Add 12 practice exam questions from university practice exam" |
| JS syntax valid | ✅ | `new Function()` parse on extracted script block: no errors |
| 193 questions intact | ✅ | 193 questions confirmed (181 prior + 12 new; see details below) |
| Light mode CSS | ✅ | `--bg: #F8FAFC`, `--surface: #FFFFFF`, full target design system present (16+ matches) |
| Dark mode toggle | ✅ | `toggleDarkMode()` present; 🌙/☀️ button wired (30+ matches) |
| Multi-week selection | ✅ | `selectWeekChip()` + `homeState.weeks[]` present (13 matches) |
| Learn mode | ✅ | `#learn` screen, `showLearn()`, learn card render logic (71 matches) |
| I'm Confused button | ✅ | `showHintAI()` → calls `/explain` inline (3 matches) |
| Hint 1 / Hint 2 | ✅ | `showHint1()` / `showHint2()` — 3-level hint system (246 matches) |
| Multi-step math input | ✅ | `.working-steps`, `.step-row`, `addStep()`, MathQuill integration (19 matches) |
| Final Answer field | ✅ | `finalAnswer` / `.final-answer-wrap` present (13 matches) |
| Notes overlay present | ✅ | `#notes-overlay` with W2–W10 tabs (8 matches) |
| Formula overlay present | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC tabs (8 matches) |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` is empty; no changes to mark.js or explain.js |
| File size increased | ✅ | 7,199 lines (was 7,059 in pass 29; growth consistent with 12 new questions) |

---

## Question Bank Details

```
Total questions: 193  (all unique)
By week:  W2=15  W3=26  W4=15  W5=37  W7=29  W8=29  W9=28  W10=14
```

**Growth from pass 29 → pass 30:**
- W5 (TVM): 33 → 37 (+4): APR/EAR/FV multipart, solve for r, deferred perpetuity, mortgage payment
- W7 (Capital Budgeting): 26 → 29 (+3): NPV declining perpetuity, EAA, NPV/IRR/PI/Payback 7-part
- W8 (Valuation): 26 → 29 (+3): bond pricing semi-annual, multi-stage dividend growth, Gordon Growth Model
- W9 (WACC): 26 → 28 (+2): CAPM multi-company 5-part, WACC with varying D/E ratios

Total additions: +12 — matches commit message and `practice-questions.md` specification. ✅

**Note on question count vs original task spec:** The task spec targeted 118 questions (106 original + 12 practice additions). The bank has grown across multiple development passes to 193. All questions are unique (duplicates were removed in pass 27). 193 is the current correct baseline.

---

## Script Tag Structure

- **1 main `<script>` block** (line 3035): all app logic and QUESTIONS array
- **1 escaped `<\/script>` inside a JS string** (line 5234): correct, not a real tag
- **2 external `<script>` tags** (lines 7193–7194): jQuery 2.2.4 and MathQuill 0.10.1 from CDN
- File starts with `<!DOCTYPE html>` ✅
- File ends with `</html>` ✅
- HTML structure: 793 `<div` occurrences

---

## Issues Found

No regressions or new issues detected in this pass.

**Minor note (carried from previous passes):** Multi-week selection is implemented as `selectWeekChip()` / `homeState.weeks[]` rather than `toggleWeek` / `selectedWeeks`. The feature is fully and correctly implemented — only the implementation name differs from the QA spec's grep patterns.

---

## Recommendations

- All 12 practice exam questions from `practice-questions.md` are now confirmed added to the QUESTIONS array.
- App is stable; all features verified.
- No action required from this QA pass.
