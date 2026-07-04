# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-04
**Tested by:** Automated QA Agent

## Overall Status: PASS

Codebase is in a stable, fully-featured state. No redesign agent ran today (2026-07-04) — the major redesign was completed on 2026-06-10 (commit `56f3fd5`). All redesign features confirmed present. 166 unique questions intact (no duplicates). No regressions detected.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Most recent: `970abf8` QA report 2026-07-03; redesign at `56f3fd5` (2026-06-10) |
| JS syntax valid | ✅ | `node --check` passes (exit 0); no parse errors |
| 118+ questions intact | ✅ | **166 unique questions** (node eval of QUESTIONS array; 0 duplicates); target ≥118 |
| Light mode CSS | ✅ | `--bg:#F8FAFC`, `--surface:#FFFFFF`, Inter font; dark-mode overrides via `.dark` class |
| Dark mode toggle | ✅ | `toggleDarkMode()` + `darkModeBtn` with 🌙/☀️; persisted in localStorage |
| Multi-week selection | ✅ | `homeState.weeks[]` array + `.week-chip` UI; all 8 weeks toggleable independently (line 3045) |
| Learn mode | ✅ | `#learn` screen, `showLearn()`, `.learn-week-tile` grid; "Test yourself" flow |
| I'm Confused button | ✅ | `😕 I'm Confused` calls `showHintAI()`; local fallback + AI explanation (PR #5 applied) |
| Hint 1 / Hint 2 | ✅ | 3-level progressive reveal: `showHint1()` → `showHint2()` → Ask AI (219 matches) |
| Multi-step math input | ✅ | `.working-steps`, `.step-row`, `addStep()`; MathQuill-backed inputs |
| Final Answer field | ✅ | `.final-answer-wrap` + `finalAnswer` present for numerical questions |
| Notes overlay present | ✅ | `#notes-overlay` with W2/W3/W4/W5/W7/W8/W9/W10 tabs; pop-out window option |
| Formula overlay present | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC sections |
| Netlify functions unchanged | ✅ | `mark.js` and `explain.js` created in initial commit `f07cc2d`; no modifications since |
| File size increased | ✅ | **6,944 lines** vs original 1,458 |

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

By type: MCQ 42, SA 41, Multipart 35, Numerical 48, TF 0.

---

## Issues Found

### Minor — No true/false (tf) questions
`CLAUDE.md` lists `tf` as a supported question type and the rendering logic handles it, but zero `tf` questions exist in QUESTIONS. Not a blocker — the feature is built, just unused.

### Note — Three `<script>` tags (expected)
`index.html` has one main inline `<script>` (line 3035) plus two CDN scripts for jQuery and MathQuill (lines 6938–6939). Intentional; CDN dependencies are required for the MathQuill math-input feature.

### Note — Question count exceeds original 118 baseline
The QA target specified 118 questions; current count is 166. The redesign intentionally expanded the question bank beyond just the 12 practice exam questions. No duplicates exist (verified by node eval + dedup commit `419f80d`).

### Note — No redesign agent ran today
The QA task expected a redesign agent to run immediately before this check. No new redesign commit exists for 2026-07-04 — the last change to `index.html` was `419f80d` (2026-07-02, duplicate fix). This QA run re-validates the existing stable implementation.

---

## Recommendations

1. **No action required** — app is in a stable, passing state. All CLAUDE.md features are present and verified.
2. **Optional:** Add a handful of `tf` (true/false) questions to exercise that render path.
3. **Exam date passed** (5 May 2026) — the app has served its purpose. Consider archiving or repurposing.
