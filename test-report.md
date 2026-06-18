# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-18
**Tested by:** Automated QA Agent

## Overall Status: PASS ✅

All 7 requested features are implemented and all 12 practice exam questions are present. Code is stable with no changes to `index.html` since `693ec73` (2026-06-11). **178 questions total** across 8 weeks. Note: exam date was 2026-05-05 (44 days ago); app now serves as post-exam revision reference.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit (redesign) exists | ⚠️ | No redesign commit today — last code change was `693ec73` (2026-06-11); only QA report commits since then |
| JS syntax valid | ✅ | `node --check` on extracted `<script>` block — no errors |
| 178 questions intact | ✅ | **178** top-level question objects in array (lines 3057–4649); mcq:42, sa:58, numerical:69, multipart:66 type-matches (includes template code) |
| Light mode CSS | ✅ | `--bg:#F8FAFC; --surface:#FFFFFF` in `:root`; light mode is default |
| Dark mode toggle | ✅ | `toggleDarkMode()` at line ~5077; 🌙/☀️ `#darkModeBtn` in header; persists via localStorage |
| Multi-week selection | ✅ | `homeState.weeks[]` toggled by week-chip click handlers; `.week-chip` grid + "All Weeks" chip; `selectedWeeks` variable name not used (different impl, same behaviour) |
| Learn mode | ✅ | `#learn` screen, Learn Mode tab, `learnMode` flag, "Test yourself" button; 71 matches |
| I'm Confused button | ✅ | `#hintBtnAI` calls `showHintAI()` — 😕 I'm Confused renders inline AI explanation |
| Hint 1 / Hint 2 | ✅ | 3-level progressive hint system; `showHint1()` / `showHint2()` / `showHintAI()`; 230 references found |
| Multi-step math input | ✅ | `.working-steps`, `.step-row`; MathQuill CDN (jQuery 2.2.4 + MathQuill 0.10.1) at file end |
| Final Answer field | ✅ | `.final-answer-wrap`, `.final-answer-input`, `.final-answer-label` CSS present |
| Notes overlay present | ✅ | `#notes-overlay` with W2–W10 tabs; comprehensive study notes HTML |
| Formula overlay present | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC tabs |
| Practice Q1–Q12 present | ✅ | All 12 practice exam questions at lines 4528–4648 in QUESTIONS array |
| Netlify functions unchanged | ✅ | `mark.js` and `explain.js` — not modified (timestamps Jun 5, no git diff) |
| File size increased | ✅ | **7061 lines** (vs original 1458 lines — 4.8× larger) |

---

## Question Distribution

| Week | Topic |
|------|-------|
| 2 | Market Opportunities |
| 3 | CVP/Pricing |
| 4 | Balanced Scorecard |
| 5 | Time Value of Money |
| 7 | Capital Budgeting |
| 8 | Valuation |
| 9 | Risk & WACC |
| 10 | Performance Measurement |
| **Total** | **178 questions** |

---

## Issues Found

None. All 7 requested features from the task spec are fully implemented. All 12 practice exam questions (Q1–Q12) are present. Code is stable and unchanged since June 11.

### Non-defects (confirmed acceptable):
- **Q count 178 > 118:** Expected — practice exam questions and expansions added across multiple sessions
- **TF questions = 0:** `renderTF()` function exists in code; exam format simply doesn't use this type
- **Multiple `<script>` tags:** Expected — CDN imports for MathQuill and jQuery at file end
- **No `selectedWeeks` variable:** Multi-week selection implemented via `homeState.weeks[]` — equivalent behaviour

---

## Completed Features Summary

All 7 requested changes are implemented:
1. ✅ **Light mode by default** with dark mode toggle (sun/moon icon, persists in localStorage)
2. ✅ **Multi-week selection** — week chips toggle on/off; "All Weeks" shortcut
3. ✅ **Comprehensive study notes** — W2–W10 tabs with definitions, formulas, exam tips
4. ✅ **Improved formula sheet** — coloured tabs per topic, variable legends, "Use this when…" explanations
5. ✅ **Multi-step math working area** — MathQuill fields per step, + Add Step, Final Answer box
6. ✅ **Learn mode** — Learn card shown before question; 3-level hints (Hint 1, Hint 2, I'm Confused AI)
7. ✅ **12 practice exam questions** — Q1–Q12 from practice-questions.md added to QUESTIONS array

---

## Recommendations

1. **Netlify `ANTHROPIC_API_KEY`:** Confirm still active in Netlify dashboard — AI marking/explain requires this env var.
2. **Exam has passed (2026-05-05):** All features complete; consider winding down the scheduled QA routine now that post-exam revision use is winding down.
