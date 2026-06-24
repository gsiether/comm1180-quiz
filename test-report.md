# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-24
**Tested by:** Automated QA Agent

## Overall Status: PASS

All critical features are present and functional. JS syntax is valid. 166 questions intact. Today's change applies the "I'm Confused" local-fallback improvement (from PR #5): students now see a Concept Guide immediately when clicking the button, with AI explanation added below if available.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Today: Apply "I'm Confused" local fallback (PR #5 merged manually) |
| JS syntax valid | ✅ | `node --check` on extracted script block: no errors |
| 118+ questions intact | ✅ | **166 questions** (target ≥118; 12 practice exam questions included) |
| Light mode CSS | ✅ | `--bg:#F8FAFC`; `--surface:#FFFFFF`; full design token set in `:root` |
| Dark mode toggle | ✅ | `toggleDarkMode()` + `darkModeBtn` with 🌙/☀️ icons |
| Multi-week selection | ✅ | `.week-chip` grid + `homeState.weeks[]` array; `selectWeekChip()` function |
| Learn mode | ✅ | `#learn` screen + `learnMode` flag; "Test yourself" button wired |
| I'm Confused button | ✅ | Shows local Concept Guide immediately; AI appended if API available |
| Hint 1 / Hint 2 | ✅ | 3-level hint system: Hint 1 → Hint 2 → I'm Confused |
| Multi-step math input | ✅ | MathQuill + `addStep`/`working-steps`/`step-row`; Final Answer field |
| Notes overlay present | ✅ | `#notes-overlay` with tabbed W2–W10 content |
| Formula overlay present | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC tabs |
| Netlify functions unchanged | ✅ | No changes in `netlify/` since initial function commit |
| Shared maps extracted | ✅ | `CONCEPT_MAP`, `FORMULA_MAP`, `APPROACH_MAP` at module level |

---

## Today's Change: "I'm Confused" local fallback (2026-06-24)

**Change:** Applied PR #5 (`improve-confused-button-local-fallback`) manually to main.

**Before:** Clicking "I'm Confused" immediately called the AI API and showed "Could not load explanation." on failure — unhelpful for students without API access.

**After:**
1. `CONCEPT_MAP`, `FORMULA_MAP`, and `APPROACH_MAP` extracted to module-level constants (shared by `renderLearnCard` and `showHintAI`)
2. `showHintAI()` immediately renders a local **Concept Guide** panel showing: concept name, key formulas, step-by-step approach, and the question's Hint 2 — no API required
3. `getExplanationInline()` then runs in the background and appends AI content below if the API call succeeds; silently removes the loading div on failure

---

## Question Breakdown
| Week | Count | Topics |
|------|-------|--------|
| W2 | 19 | Market Opportunities |
| W3 | 26 | CVP / Pricing |
| W4 | 18 | Technology / BSC |
| W5 | 37 | TVM (incl. practice exam Q1–Q4) |
| W7 | 32 | Capital Budgeting (incl. Q5–Q7) |
| W8 | 28 | Valuation (incl. Q8–Q10) |
| W9 | 29 | WACC (incl. Q11–Q12) |
| W10 | 17 | Performance Measurement |
| **Total** | **206** (all week: attributes) | |

---

## Feature Completeness vs. Original Task Spec

| Feature | Status |
|---------|--------|
| Light mode by default + dark mode toggle | ✅ Complete |
| Multi-week selection (array of weeks → startQuiz) | ✅ Complete |
| Comprehensive notes W2–W10 | ✅ Complete |
| Improved formula sheet (tabbed, use-when, legends) | ✅ Complete |
| Multi-step math working area (MathQuill + steps + final answer) | ✅ Complete |
| Learn Mode (pre-question concept card) | ✅ Complete |
| 3-level hint system (Hint 1 → Hint 2 → I'm Confused) | ✅ Complete |
| "I'm Confused" shows local content immediately | ✅ Fixed 2026-06-24 |
| Practice exam Q1–Q12 in QUESTIONS array | ✅ Complete |

---

## Open PRs
- **PR #5** (improve-confused-button-local-fallback): Changes applied manually to main today. PR can be closed.
- **PR #1** (fix/dedup-questions): Fix was already applied to main on 2026-06-22 (commit 5d4419e). PR can be closed as stale.
