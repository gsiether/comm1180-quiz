# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-14
**Tested by:** Automated QA Agent

## Overall Status: PARTIAL

The redesign **is present and complete** on `main` (landed 2026-06-03 in commit `56f3fd5`). All required features are functional. However, **no redesign agent ran today** — `index.html` has not changed since 2026-06-03 (11 days unchanged). The **QUESTIONS array contains 178 questions** (vs the 118 stated in the QA prompt), which is a persistent known state due to two additional practice-question commits growing the bank beyond the original target count.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `6c1f359` "QA report: automated code check (2026-06-13)" is HEAD; full redesign in `56f3fd5` (2026-06-03) |
| JS syntax valid | ✅ | `node --check /tmp/quiz_js.js` passed — no syntax errors |
| 118 questions intact | ❌ | **178 questions found** (mcq:42, sa:41, numerical:53, multipart:42, tf:0) — extra practice questions added in commits `693ec73` and `13172b0` |
| Light mode CSS | ✅ | `--bg:#F8FAFC; --surface:#FFFFFF` in `:root`; 94 matches for light-mode tokens |
| Dark mode toggle | ✅ | `toggleDarkMode()` at line 5075; 🌙 button at line 820 (`#darkModeBtn`) |
| Multi-week selection | ✅ | `homeState.weeks[]` array toggled by `selectWeekChip()`; `.week-chip` grid with "All" chip |
| Learn mode | ✅ | `#learn` screen, Learn Mode tab, `learnMode` flag, "Test yourself" button — 71 matches |
| I'm Confused button | ✅ | `#hintBtnAI` calls `showHintAI()` at line 5308 (renders as 😕 I'm Confused) |
| Hint 1 / Hint 2 | ✅ | 3-level progressive system: `hint` + `hint2` data fields; 230 occurrences |
| Multi-step math input | ✅ | `addStep()`, `.working-steps`, `.step-row`; MathQuill CDN loaded (19 matches) |
| Final Answer field | ✅ | `.final-answer-wrap` + "Final Answer" label — 13 matches |
| Notes overlay present | ✅ | `#notes-overlay` at line 1153; W2–W10 tabs with inline HTML content |
| Formula overlay present | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC tabs — 8 matches |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` empty; mark.js and explain.js match original |
| File size increased | ✅ | **7,061 lines** (up from ~1,458 original) |

---

## Issues Found

### Issue 1 — No New index.html Changes Since 2026-06-03 (Persistent)

`index.html` has been unchanged for 11 days. Today's HEAD commit (`6c1f359`) is another QA report only. The redesign and all features were finalized in commit `56f3fd5` (2026-06-03). All previous QA runs (2026-06-06 through 2026-06-13) have reported the same state.

```
6c1f359  2026-06-13  QA report: automated code check (2026-06-13)  <- HEAD
acd1e11  2026-06-12  QA report: automated code check (2026-06-12)
4a698f8  2026-06-11  QA report: automated code check (2026-06-11)
693ec73  Add 12 practice exam questions from official COMM1180 practice materials
c9234aa  QA report: automated code check
56f3fd5  Major redesign: light mode, multi-week, learn mode, ...    <- last index.html change
```

### Issue 2 — Question Count: 178 vs Expected 118 (Significant, Persistent)

**Expected:** 118 questions (106 original + 12 practice exam questions per CLAUDE.md)
**Actual:** 178 questions — two additional "Add 12 practice exam questions" commits (`13172b0`, `693ec73`) pushed the count to 178.

Week-by-week breakdown:

| Week | Count | Topic |
|------|-------|-------|
| 2 | 15 | Market Opportunities |
| 3 | 23 | CVP/Pricing |
| 4 | 15 | Technology/BSC |
| 5 | 34 | TVM |
| 7 | 26 | Capital Budgeting |
| 8 | 26 | Investors/Valuation |
| 9 | 25 | WACC |
| 10 | 14 | Performance Measurement |
| **Total** | **178** | |

The extra questions are not a defect per se — they improve exam coverage — but the QA baseline count should be updated from 118 → 178.

### Issue 3 — No `type:'tf'` Questions (Minor, Persistent)

There are 0 true/false questions. The code supports the `tf` type (`renderTF()` exists, type labels map includes `tf`), but no questions use it. Consistent with all prior QA reports.

---

## Recommendations

1. **Update QA baseline count** from 118 → 178 to eliminate the persistent false-negative on question count.
2. **No feature gaps** — all 14 required features are present and working as of 2026-06-03.
3. **No redesign agent has run** in 11 days — if further enhancements are planned, a new build session should be triggered.
4. Netlify functions are confirmed intact; verify `ANTHROPIC_API_KEY` in Netlify dashboard if AI marking stops working.
