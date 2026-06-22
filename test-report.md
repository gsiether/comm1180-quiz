# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-22
**Tested by:** Automated QA Agent

## Overall Status: PASS

All critical features are present and functional. JS syntax is valid. Questions total 166 (above the 118 target). Today's commit cleanly removed 12 duplicate practice exam questions that had been double-entered in a prior session, leaving 166 unique questions. Netlify functions are unchanged.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `5d4419e` — "Remove duplicate practice exam questions from QUESTIONS array" (2026-06-22) |
| JS syntax valid | ✅ | `node --check` on extracted script block: no errors |
| 118+ questions intact | ✅ | **166 questions** (target ≥118; 12 duplicates removed from prior 178) |
| Light mode CSS | ✅ | `--bg:#F8FAFC`; `--surface:#FFFFFF`; full design token set in `:root` |
| Dark mode toggle | ✅ | `toggleDarkMode()` + `darkModeBtn` with 🌙/☀️ (line 820) |
| Multi-week selection | ✅ | `.week-chip` grid + `toggleWeek` function; 16 matches |
| Learn mode | ✅ | `#learn` screen + `learnMode` flag; 12 matches |
| I'm Confused button | ✅ | `#hintBtnAI` calls `showHintAI()` → inline AI explanation box |
| Hint 1 / Hint 2 | ✅ | 3-level system; 223 matches for hint1/hint2/hintBtn |
| Multi-step math input | ✅ | `addStep`/`working-steps`/`step-row`; MathQuill CDN loaded |
| Final Answer field | ✅ | `finalAnswer`/`final-answer`; 13 matches |
| Notes overlay present | ✅ | `#notes-overlay` with tabbed W2–W10 content; 8 matches |
| Formula overlay present | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC tabs; 8 matches |
| Netlify functions unchanged | ✅ | No changes in `netlify/` since initial function commit (`112dd8a`) |
| File size increased | ✅ | **6,938 lines** (original: 1,458 lines; +376%) |

---

## Today's Commit: Duplicate Question Removal (2026-06-22)

**Commit `5d4419e`** removed 123 lines (12 duplicate questions) from the QUESTIONS array. The 12 practice exam questions from `practice-questions.md` had been inserted twice: once at their correct week positions (W5/W7/W8/W9) and again as a second block appended at the end of the array. The duplicate block was removed; the canonical entries with correct `scenario:` fields remain.

---

## Question Breakdown
| Week | Count | Topics |
|------|-------|--------|
| W2 | 15 | Market Opportunities |
| W3 | 23 | CVP / Pricing |
| W4 | 15 | Technology / BSC |
| W5 | 30 | TVM (incl. practice exam Q1–Q4) |
| W7 | 23 | Capital Budgeting (incl. Q5–Q7) |
| W8 | 23 | Valuation (incl. Q8–Q10) |
| W9 | 23 | WACC (incl. Q11–Q12) |
| W10 | 14 | Performance Measurement |
| **Total** | **166** | |

**By type:** `mcq` 42 · `numerical` 48 · `sa` 41 · `multipart` 35 · `tf` 0

---

## Issues Found

No blocking issues. One structural note:

- **Script tag count:** `grep -c "<script>"` returns 2 (not 1) because line 5000 contains a `<script>` literal inside a JavaScript string used to build the popup notes window. This is intentional; there is still exactly one actual `<script>` block (lines 3035–6930) plus two CDN `<script src>` tags for jQuery and MathQuill. Not a bug.

## Recommendations

- The app is deploy-ready. No further action required for this cycle.
- If the duplicate question issue recurs, consider adding a guard in a future session to check for duplicate `question:` / `scenario:` text before committing additions to the QUESTIONS array.
