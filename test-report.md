# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-29
**Tested by:** Automated QA Agent

## Overall Status: PASS

All required features are present. The most recent commit added 12 practice exam questions from `practice-questions.md` as intended, bringing the total to 178 questions. The redesign was completed in earlier commits and remains intact. JS syntax is valid. Netlify functions are unchanged.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `df29682` — "Add 12 practice exam questions from practice-questions.md" (2026-06-29 15:09 UTC) |
| JS syntax valid | ✅ | `node --check` exits 0; browser-only `localStorage` error is a runtime artefact, not a syntax error |
| 118+ questions intact | ✅ | **178 questions** in QUESTIONS array (lines 3057–4713), up from 166 yesterday |
| Light mode CSS | ✅ | `--bg:#F8FAFC`, `--surface:#FFFFFF`, Inter font; full design-system CSS variables present |
| Dark mode toggle | ✅ | `toggleDarkMode()` + `#darkModeBtn` with 🌙/☀️; applies `.dark` class to `<html>` |
| Multi-week selection | ✅ | `homeState.weeks[]` + `selectWeekChip()` allow toggling individual weeks; "All Weeks" chip selects all |
| Learn mode | ✅ | `learnMode` / `#learn` screen present; 11 references in source |
| I'm Confused button | ✅ | `😕 I'm Confused` button (line 5357) with local fallback maps + AI via `showHintAI()` |
| Hint 1 / Hint 2 | ✅ | 3-level hint system (hint → hint2 → Ask AI); 231 hint-related matches |
| Multi-step math input | ✅ | `addStep` / `working-steps` / `step-row` present (23 matches) |
| Final Answer field | ✅ | `finalAnswer` found 13× in source |
| Notes overlay present | ✅ | `notes-overlay` + `notesOverlay` found; week tabs W2–W10 populated |
| Formula overlay present | ✅ | `formula-overlay` + `formulaOverlay` found; CVP/TVM/NPV/Valuation/WACC sections |
| Netlify functions unchanged | ✅ | 0 lines of diff on `netlify/functions/`; `mark.js` and `explain.js` untouched |
| File size increased | ✅ | **7,133 lines** (original: ~1,458 lines; 389% increase) |
| HTML structure valid | ✅ | `<!DOCTYPE html>` head, one inline `<script>` block, closes with `</html>` |

---

## Question Type Breakdown (main QUESTIONS array, lines 3057–4713)
| Type | Count |
|------|-------|
| `mcq` | 42 |
| `multipart` | 42 |
| `numerical` | 53 |
| `sa` | 58 |
| `tf` | 0 |
| **Top-level entries** | **178** |

*Note: `type:` matches within the array exceed 178 because some multipart sub-parts also carry internal `type` references — the top-level entry count (178) is definitive.*

---

## New Questions Added Today (commit `df29682`, +187 lines)
All 12 practice exam questions from `practice-questions.md` confirmed present:
- **Week 5 (TVM):** APR/EAR/FV multipart, solve for r, deferred perpetuity, mortgage payment
- **Week 7 (Capital Budgeting):** NPV declining perpetuity (McDonald's), EAA (AT&T bus models), NPV/IRR/PI/Payback 7-part multipart
- **Week 8 (Valuation):** Bond pricing semi-annual, multi-stage dividend growth (Hush Puppies), Gordon Growth Model
- **Week 9 (WACC):** CAPM multi-company 5-part, WACC with varying D/E ratios

---

## Issues Found

### Minor — No true/false (`tf`) questions
`CLAUDE.md` lists `tf` as a supported question type and rendering logic handles it, but zero `tf` questions exist in QUESTIONS. Not a blocker.

### Minor — Commit message summary omits Week 9
The commit message subject lists W5/W7/W8 but the body confirms W9 is included. Week 9 CAPM and WACC questions are confirmed present in the file on inspection.

---

## Recommendations
- No blocking issues. The app is ready for Netlify deployment of these new questions.
- Consider adding true/false questions for Weeks 3–5 if exam preparation scope requires them.
- Monitor Netlify deploy for this commit to confirm the 12 new questions render correctly in production.
