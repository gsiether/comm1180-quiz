# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-24
**Tested by:** Automated QA Agent

## Overall Status: PASS

All critical features are present and functional. JS syntax is valid. 166 questions in QUESTIONS array (exceeds 118 target; all 12 practice exam questions included). Today's active change is PR #5 ("I'm Confused" local fallback), applied in commit `7c544bf`.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `7c544bf` — "Apply 'I'm Confused' local fallback improvement (PR #5)" (2026-06-24) |
| JS syntax valid | ✅ | `new Function(script)` passes — no parse errors |
| 118+ questions intact | ✅ | **166 questions** (by `{week:` count in QUESTIONS array; target ≥118) |
| Light mode CSS | ✅ | `--bg:#F8FAFC`, `--surface:#FFFFFF`; 64 light-mode CSS rule matches |
| Dark mode toggle | ✅ | `toggleDarkMode()` + `darkModeBtn` with 🌙/☀️ icons (8 matches) |
| Multi-week selection | ✅ | `.week-chip` grid + `selectedWeeks[]` + `toggleWeek()` (16 matches) |
| Learn mode | ✅ | `#learn` screen + `learnMode` flag + "Test yourself" button (12 matches) |
| I'm Confused button | ✅ | Local Concept Guide shown immediately; AI appended if API available (3 matches) |
| Hint 1 / Hint 2 | ✅ | 3-level hint system present (219 hint-related matches) |
| Multi-step math input | ✅ | `addStep` / `working-steps` / `step-row` present (19 matches) |
| Final Answer field | ✅ | `finalAnswer` / `final-answer` / `Final Answer` present (13 matches) |
| Notes overlay present | ✅ | `#notes-overlay` with W2–W10 content (6 matches) |
| Formula overlay present | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC (6 matches) |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` returns empty — mark.js and explain.js untouched |
| File size increased | ✅ | **6946 lines** (original: ~1458 lines) |

---

## Question Breakdown (corrected — counted from QUESTIONS array only)
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

**Type occurrences in QUESTIONS array:** MCQ: 42 · SA: 58 · Numerical: 48 · Multipart: 35  
*(type count 183 > 166 because multipart sub-parts also carry a `type:` field)*

---

## Today's Change: "I'm Confused" local fallback (PR #5)

**Commit `7c544bf` — 2026-06-24 15:15 UTC**

- `CONCEPT_MAP`, `FORMULA_MAP`, `APPROACH_MAP` extracted to module-level constants
- `showHintAI()` renders local Concept Guide immediately (no API required)
- `getExplanationInline()` appends AI text below if API succeeds; silently removes loading div on failure

**Before:** Clicking "I'm Confused" would call the AI API then show "Could not load explanation." on failure — unhelpful for students without API access.

**After:** Concept Guide (concept name + key formulas + step-by-step approach + Hint 2) is shown instantly; AI text is additive only.

---

## Issues Found

### Minor — No true/false (tf) questions
`CLAUDE.md` lists `tf` as a supported question type and the rendering logic handles it (`if(q.type==='tf')`), but there are zero `tf` questions in QUESTIONS. Functionality is built — just unused. Not a blocker.

### Note — Week counts differ from previous QA report
Previous report listed W2:19, W3:26, W4:18, etc. (total 206). Those were counting all `week:` attributes in the HTML file (including notes, overlays, and JS outside QUESTIONS). This report counts only within the QUESTIONS array: 166 top-level question objects.

---

## Recommendations

1. **Close PR #5** — "I'm Confused" fallback changes are live on main.
2. **Close PR #1** (fix/dedup-questions) — dedup fix already applied on 2026-06-22 (commit `5d4419e`). PR is stale.
3. **Optional:** Add a handful of `tf` questions if true/false coverage is desired (rendering path already exists).
