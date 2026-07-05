# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-05
**Tested by:** Automated QA Agent

## Overall Status: PASS

Codebase is in a stable, fully-featured state. No redesign agent ran today (2026-07-05) — the major redesign was completed on 2026-06-10 (commit `56f3fd5`). All redesign features confirmed present. 166 unique questions intact (no duplicates). No regressions detected.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Most recent: `87b8482` QA report 2026-07-04; redesign at `56f3fd5` (2026-06-10) |
| JS syntax valid | ✅ | `new Function()` parse passes; no syntax errors |
| 118+ questions intact | ✅ | **166 unique questions** (node eval of QUESTIONS array; 0 duplicates); target ≥118 |
| Light mode CSS | ✅ | `--bg:#F8FAFC`, `--surface:#FFFFFF`, Inter font; dark-mode overrides via `.dark` class |
| Dark mode toggle | ✅ | `toggleDarkMode()` + `darkModeBtn` with 🌙/☀️; persisted in localStorage |
| Multi-week selection | ✅ | `homeState.weeks[]` array + `.week-chip` UI; all 8 weeks toggleable independently |
| Learn mode | ✅ | `#learn` screen, `showLearn()`, `.learn-week-tile` grid; "Test yourself" flow |
| I'm Confused button | ✅ | `😕 I'm Confused` calls `showHintAI()`; local fallback + AI explanation |
| Hint 1 / Hint 2 | ✅ | 3-level progressive reveal: `showHint1()` → `showHint2()` → Ask AI |
| Multi-step math input | ✅ | `.working-steps`, `.step-row`, `addStep()`; MathQuill-backed inputs |
| Final Answer field | ✅ | `.final-answer-wrap` present for numerical questions |
| Notes overlay present | ✅ | `#notes-overlay` with W2/W3/W4/W5/W7/W8/W9/W10 tabs; pop-out window option |
| Formula overlay present | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC sections |
| Netlify functions unchanged | ✅ | `mark.js` and `explain.js` unchanged since initial commit |
| All 12 practice questions | ✅ | Q1–Q12 from `practice-questions.md` all verified PRESENT |
| File size | ✅ | 457 KB / ~6,900+ lines |

---

## Question Bank Breakdown
| Week | Count | Topic |
|------|-------|-------|
| W2 | 15 | Market Opportunities |
| W3 | 23 | CVP / Pricing |
| W4 | 15 | Technology / BSC |
| W5 | 30 | TVM |
| W7 | 23 | Investment / Capital Budgeting |
| W8 | 23 | Investors / Valuation |
| W9 | 23 | WACC |
| W10 | 14 | Performance Measurement |
| **Total** | **166** | All unique (0 duplicates confirmed) |

---

## Issues Found

### Minor — No true/false (tf) questions
`CLAUDE.md` lists `tf` as a supported question type and the rendering logic handles it, but zero `tf` questions exist in QUESTIONS. Not a blocker — the feature is built, just unused.

### Note — Three `<script>` tags (expected)
`index.html` has one main inline `<script>` plus two CDN scripts for jQuery and MathQuill. Intentional; CDN dependencies are required for the MathQuill math-input feature.

### Note — No redesign agent ran today
The QA task expected a redesign agent to run immediately before this check. No new redesign commit exists for 2026-07-05 — the last change to `index.html` was `419f80d` (2026-07-02, duplicate fix). This QA run re-validates the existing stable implementation.

### Note — Exam date has passed
The exam was 5 May 2026. The app has served its primary purpose. Consider archiving or repurposing.

---

## Recommendations

1. **No action required** — app is in a stable, passing state. All CLAUDE.md features are present and verified.
2. **Optional:** Add a handful of `tf` (true/false) questions to exercise that render path.
3. **Optional:** Archive repo or update CLAUDE.md to reflect post-exam status.
