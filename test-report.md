# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-23
**Tested by:** Automated QA Agent

## Overall Status: PASS

All critical features are present and functional. JS syntax is valid. Questions total 166 (above the 118 target). Today's change improves the "I'm Confused" button to show local concept/formula/approach content immediately (without requiring an API call), then adds AI explanation below if available. This matches the original task spec more closely.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Today: improve "I'm Confused" button with local fallback content |
| JS syntax valid | ✅ | `new Function()` parse of extracted script block: no errors |
| 118+ questions intact | ✅ | **166 questions** (target ≥118) |
| Light mode CSS | ✅ | `--bg:#F8FAFC`; `--surface:#FFFFFF`; full design token set in `:root` |
| Dark mode toggle | ✅ | `toggleDarkMode()` + `darkModeBtn` with 🌙/☀️ (line 820) |
| Multi-week selection | ✅ | `.week-chip` grid + `homeState.weeks[]` array; "All Weeks" chip wired |
| Learn mode | ✅ | `#learn` screen + `learnMode` flag + "Test yourself" button |
| I'm Confused button | ✅ | Shows local concept/formula/approach immediately; AI added below if available |
| Hint 1 / Hint 2 | ✅ | 3-level system: Hint 1 → Hint 2 → I'm Confused |
| Multi-step math input | ✅ | `addStep`/`working-steps`/`step-row`; MathQuill CDN loaded |
| Final Answer field | ✅ | `final-answer-wrap` with distinct indigo styling |
| Notes overlay present | ✅ | `#notes-overlay` with tabbed W2–W10 content |
| Formula overlay present | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC tabs |
| Netlify functions unchanged | ✅ | No changes in `netlify/` since initial function commit |
| File size | ✅ | ~6,960 lines |

---

## Today's Commit: "I'm Confused" local fallback (2026-06-23)

**Problem:** The "I'm Confused" button previously called the AI API immediately and showed "Could not load explanation." on failure. This left students with nothing useful if the API was unavailable.

**Fix:** 
1. Extracted `CONCEPT_MAP`, `FORMULA_MAP`, and `APPROACH_MAP` to module-level constants (shared by `renderLearnCard` and `showHintAI`)
2. `showHintAI()` now immediately shows a local "Concept Guide" panel with concept name, key formulas, step-by-step approach, and key hint — no API required
3. `getExplanationInline()` then runs in the background and adds AI content below if successful; silently removes the loading div if the API fails
4. Matches the original spec: "Trigger the AI call, or use local content as fallback"

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

None. The app is deploy-ready.

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
| "I'm Confused" shows local content immediately | ✅ Fixed today |
| Practice exam Q1–Q12 in QUESTIONS array | ✅ Complete (166 total Qs) |
