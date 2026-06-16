# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-16
**Tested by:** Automated QA Agent

## Overall Status: PASS ✅

No redesign agent ran since the last QA cycle — code is unchanged from yesterday. All 14 required features confirmed present. **178 questions total** across 8 weeks. Note: exam date was 2026-05-05 (6 weeks ago); app now serves as post-exam revision reference.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit (redesign) exists | ⚠️ | No redesign commit today — last code change was `693ec73` (2026-06-11) |
| JS syntax valid | ✅ | `node --check` passed with no errors |
| 178 questions intact | ✅ | **178** (mcq:42, sa:41, numerical:53, multipart:42, tf:0) — above original 118 target |
| Light mode CSS | ✅ | `--bg:#F8FAFC; --surface:#FFFFFF` in `:root`; light mode is default |
| Dark mode toggle | ✅ | `toggleDarkMode()` at line ~5075; 🌙/☀️ `#darkModeBtn` in header |
| Multi-week selection | ✅ | `homeState.weeks[]` toggled by `selectWeekChip()`; `.week-chip` grid + "All Weeks" chip |
| Learn mode | ✅ | `#learn` screen, Learn Mode tab, `learnMode` flag, "Test yourself" button |
| I'm Confused button | ✅ | `#hintBtnAI` calls `showHintAI()` — 😕 I'm Confused renders inline AI explanation |
| Hint 1 / Hint 2 | ✅ | 3-level progressive hint system; `hint` + `hint2` data fields on all questions |
| Multi-step math input | ✅ | `addStep()`, `.working-steps`, `.step-row`; MathQuill CDN loaded |
| Final Answer field | ✅ | `.final-answer-wrap` + `#num-final` — final answer input with indigo border |
| Notes overlay present | ✅ | `#notes-overlay` with W2–W10 tabs; comprehensive study notes HTML |
| Formula overlay present | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC tabs |
| Netlify functions unchanged | ✅ | `mark.js` (136 lines), `explain.js` (79 lines) — no diff vs previous commit |
| File size increased | ✅ | **7061 lines** (vs original 1458) |

---

## Question Distribution

| Week | Count | Topic |
|------|-------|-------|
| 2 | 15 | Market Opportunities |
| 3 | 23 | CVP/Pricing |
| 4 | 15 | Balanced Scorecard |
| 5 | 34 | Time Value of Money |
| 7 | 26 | Capital Budgeting |
| 8 | 26 | Valuation |
| 9 | 25 | Risk & WACC |
| 10 | 14 | Performance Measurement |
| **Total** | **178** | |

---

## Issues Found

None. App is stable. No redesign agent ran today — expected given the exam has passed. The app is functioning as a post-exam revision tool.

### Non-defects (confirmed acceptable):
- **Q count 178 > 118:** Expected — practice exam questions and expansions added in earlier sessions
- **TF questions = 0:** `renderTF()` function exists in code; exam format simply doesn't use this type
- **Multiple `<script>` tags (4 per grep):** Expected — CDN imports for MathQuill and jQuery; one tag is inside a `document.write()` string, not a real HTML script element

---

## Recommendations

1. **Netlify `ANTHROPIC_API_KEY`:** Confirm still active in Netlify dashboard — AI marking/explain requires this.
2. **Exam has passed (2026-05-05):** Consider whether to keep running daily QA or wind down the schedule.
3. **No code changes required** — all features present and verified.
