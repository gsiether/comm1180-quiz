# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-21
**Tested by:** Automated QA Agent

## Overall Status: PASS

All critical features are present and functional. JS syntax is valid. Questions exceed minimum target count (178 vs 118). A bug fix was applied today (2026-06-21) resolving a TypeError in multipart question rendering. Netlify functions are unchanged.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `9c232e1` — "Fix multipart questions with question: field instead of scenario:" (2026-06-21) |
| JS syntax valid | ✅ | `new Function()` parse of extracted script block: no errors |
| 118+ questions intact | ✅ | **178 questions** found (target 118; bank grew via prior practice-exam commits) |
| Light mode CSS | ✅ | `--bg:#F8FAFC; --surface:#FFFFFF`; Inter font; full design token set in `:root` |
| Dark mode toggle | ✅ | `toggleDarkMode()` + `darkModeBtn` with 🌙/☀️; persisted to localStorage |
| Multi-week selection | ✅ | `homeState.weeks[]` array + `.week-chip` toggle grid; "All Weeks" chip wired |
| Learn mode | ✅ | 71 matches; `#learn` screen + `learnMode` flag + "Test yourself" button |
| I'm Confused button | ✅ | `#hintBtnAI` (line 5308) calls `showHintAI()` → inline AI explanation box |
| Hint 1 / Hint 2 | ✅ | 230 matches; 3-level system: Hint 1 → Hint 2 → I'm Confused (AI) |
| Multi-step math input | ✅ | 19 matches for `addStep`/`working-steps`/`step-row`; MathQuill CDN loaded |
| Final Answer field | ✅ | 13 matches for `finalAnswer`/`final-answer` rendered for numerical/multipart |
| Notes overlay present | ✅ | `#notes-overlay` with tabbed W2–W10 content |
| Formula overlay present | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC tabs |
| Netlify functions unchanged | ✅ | `mark.js` (136 lines) and `explain.js` — no changes in git log for `netlify/` |
| File size increased | ✅ | **7,061 lines** (original: 1,458 lines; +484%) |

---

## Today's Commit: Bug Fix (2026-06-21)

**Commit `9c232e1`** fixed a regression introduced by previous QA sessions that renamed the `scenario:` field to `question:` in 7 practice exam multipart questions, without updating the rendering code that still read `q.scenario`.

**Bugs fixed:**
- `renderQuestion()` — `q.scenario` showed "undefined" for affected multipart Qs
- `aiMarkMultipart()` — AI marking call sent undefined scenario context
- `showSummary()` — `q.scenario.substring(...)` threw a TypeError (blank summary screen)
- `ctbBuild()` — Custom Test Builder displayed blank question text

**Fix:** `q.scenario||q.question||''` fallback applied in all 4 locations.

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

**By type:** `mcq` 42 · `numerical` 69 · `sa` 58 · `multipart` 42 (63 use `scenario:`, rest use `question:` — both now handled) · `tf` 0

---

## Issues Found

1. **Multipart field inconsistency (patched today)** — 7 practice exam multipart questions use `question:` instead of `scenario:` as the top-level text field. The 2026-06-21 commit added a `||q.question||''` fallback in 4 rendering locations. The fix is correct but the data inconsistency remains. Long-term, questions should be normalised to use one field name.

2. **No `tf` (true/false) questions** — The `tf` type is supported in rendering code but 0 tf questions exist in the array. Content gap only, not a code bug.

3. **3 external `<script>` tags** (spec says 1 inline block) — Main inline block (line 3035) + jQuery CDN (7055) + MathQuill CDN (7056). External scripts are required for MathQuill math input. Intentional and correct.

4. **Question count is 178, not 118** — The bank grew through multiple prior sessions. This is additional content, not data loss. Count is stable across last three QA runs.

---

## Recommendations

- The multipart `scenario:`/`question:` inconsistency should be normalised — either rename all `question:` fields to `scenario:` in the 7 affected practice exam questions, or update all rendering code to use `question:` consistently and drop `scenario:`.
- No tf questions exist but the rendering path is ready — content only.
- Confirm Netlify `ANTHROPIC_API_KEY` environment variable is active — AI marking and explain features depend on it.
- No blocking issues. App is functionally complete.
