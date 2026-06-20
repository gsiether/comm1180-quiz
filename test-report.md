# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-20
**Tested by:** Automated QA Agent

## Overall Status: PASS

All critical features are present and functional. JS syntax is valid. Questions exceed the minimum target count (178 vs 118). Netlify functions are unchanged.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Redesign at `56f3fd5` (2026-06-10); practice Qs added at `693ec73` (2026-06-11); only QA reports since |
| JS syntax valid | ✅ | `node --check` on extracted script block exits 0 — no errors |
| 118+ questions intact | ✅ | **178 questions** found (target 118; grew via subsequent practice-exam commits) |
| Light mode CSS | ✅ | `--bg:#F8FAFC; --surface:#FFFFFF`; Inter font; full design token set in `:root` |
| Dark mode toggle | ✅ | `toggleDarkMode()` + `darkModeBtn` with 🌙/☀️; persisted to localStorage |
| Multi-week selection | ✅ | `homeState.weeks[]` array + `.week-chip` toggle grid; "All Weeks" chip wired |
| Learn mode | ✅ | 71 matches; `#learn` screen + `learnMode` flag + "Test yourself" button |
| I'm Confused button | ✅ | `#hintBtnAI` at line 5308 calls `showHintAI()` → inline AI explanation box |
| Hint 1 / Hint 2 | ✅ | 230 matches; 3-level system: Hint 1 → Hint 2 → I'm Confused (AI) |
| Multi-step math input | ✅ | 23 matches for `addStep`/`working-steps`/`step-row`; MathQuill CDN loaded |
| Final Answer field | ✅ | 13 matches for `finalAnswer`/`final-answer` rendered for numerical/multipart |
| Notes overlay present | ✅ | `#notes-overlay` with tabbed W2–W10 content |
| Formula overlay present | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC tabs |
| Netlify functions unchanged | ✅ | `mark.js` and `explain.js` last touched in `7cfc60f` (initial restore); redesign did not modify them |
| File size increased | ✅ | **7,061 lines** (original: 1,458 lines; +484%) |

---

## Question Breakdown
| Week | Count | Topics |
|------|-------|--------|
| W2 | 15 | Market Opportunities |
| W3 | 23 | CVP/Pricing |
| W4 | 15 | Technology/BSC |
| W5 | 34 | TVM (incl. practice exam Qs Q1–Q4) |
| W7 | 26 | Capital Budgeting (incl. Q5–Q7) |
| W8 | 26 | Valuation (incl. Q8–Q10) |
| W9 | 25 | WACC (incl. Q11–Q12) |
| W10 | 14 | Performance Measurement |
| **Total** | **178** | |

**By type:** `mcq` 42 · `numerical` 53 · `sa` 41 · `multipart` 42 · `tf` 0

---

## Issues Found

1. **No `tf` (true/false) questions** — The `tf` type is listed as supported in CLAUDE.md spec but 0 tf questions are in the current QUESTIONS array. The rendering code for tf questions exists but is unused. Content gap only, not a code bug.

2. **3 `<script>` tags present** (spec says 1) — Main inline block (line 3035) + jQuery CDN (line 7055) + MathQuill CDN (line 7056). The external scripts are required for MathQuill math input rendering. A 4th apparent `<script>` appears only inside a JS string for a popup window — not a real tag. Intentional and correct.

3. **Question count is 178, not 118** — The bank grew through multiple practice-question sessions. This is additional content, not data loss. Count appears stable (same as last two QA runs).

---

## Recommendations

- No blocking issues. The app is functionally complete.
- If tf (true/false) questions are wanted, the rendering code is already in place — questions just need to be added to the QUESTIONS array.
- Consider confirming Netlify `ANTHROPIC_API_KEY` is still active — AI marking and explain features depend on it.
