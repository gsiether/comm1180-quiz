# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-13
**Tested by:** Automated QA Agent

## Overall Status: PARTIAL

The redesign **is present** on `main` (completed 2026-06-03) and all required features are functional. However, **no redesign agent ran today** — `index.html` has not changed since 2026-06-03, and the last commit was a QA report on 2026-06-04. The **QUESTIONS array has 178 questions instead of the expected 118**, and the most recent "Major redesign" commit (`8fdbf94`) is misleadingly labelled — it only changed 4 lines (formula font size + count chip range), not a full redesign.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `8fdbf94` "Major redesign…" (2026-06-03) is present on main. Note: this commit is a minor 4-line tweak; the full redesign was built across earlier commits. |
| JS syntax valid | ✅ | `new Function(js)` parse succeeded — no syntax errors |
| 118 questions intact | ❌ | **178 questions found** (mcq:42, sa:41, numerical:53, multipart:42, tf:0) |
| Light mode CSS | ✅ | `--bg:#F8FAFC; --surface:#FFFFFF` in `:root`; `.dark{}` override class present |
| Dark mode toggle | ✅ | `toggleDarkMode()` function + moon button in header; 8 matches for dark/toggle logic |
| Multi-week selection | ✅ | `homeState.weeks[]` array; `.week-chip` grid with active-state toggling; "All" chip |
| Learn mode | ✅ | `#learn` screen, Learn Mode tab, `learnMode` flag, "Test yourself" button |
| I'm Confused button | ✅ | Renders as `hintBtnAI`, calls `showHintAI()` |
| Hint 1 / Hint 2 | ✅ | 3-level progressive system: `hint` + `hint2` fields present; 230 occurrences |
| Multi-step math input | ✅ | `addStep()`, `.working-steps`, `.step-row`; MathQuill CDN loaded |
| Final Answer field | ✅ | `.final-answer-wrap` + "Final Answer" label in HTML and CSS |
| Notes overlay present | ✅ | `#notes-overlay` with W2–W10 tabs and inline HTML content |
| Formula overlay present | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC tabs |
| Netlify functions unchanged | ✅ | Only one commit ever touched functions (initial build); 0 bytes diff vs HEAD |
| File size increased | ✅ | **7,071 lines** (up from ~1,458 original) |

---

## Issues Found

### Issue 1 — No New Activity Since 2026-06-04 (Critical)

The task expects a redesign agent to have run today. The git log on `main` shows no changes since 2026-06-04:

```
27f3c6f  2026-06-04  QA report: automated code check (2026-06-04)  <- HEAD / origin/main
89de3bb  2026-06-03  QA report: automated code check (2026-06-03)
8fdbf94  2026-06-03  Major redesign (4-line tweak)                  <- last index.html change
27c685c  2026-06-02  Add 12 practice exam questions (W5, W7, W8, W9)
c90b28b  2026-06-01  Major redesign: light mode, multi-week, ...
```

`index.html` has not been modified in 10 days. Previous QA agent sessions (2026-06-10 through 2026-06-12) committed to a **detached HEAD** that was never merged into `main`, so their work is unreachable on any branch.

### Issue 2 — Misleading "Major Redesign" Commit Label (Informational)

The most recent commit touching `index.html` (`8fdbf94`) is labelled "Major redesign" but only changed **4 lines**:
- `.fml-expr` font-size: `.88rem` to `1.02rem`
- Count chips: `[5,10,15,20]` to `[5,10,15,20,25]`

The actual full redesign was built across earlier commits (starting from `c90b28b` on 2026-06-01). The code state is correct; only the commit message is misleading.

### Issue 3 — Question Count: 178 vs Expected 118 (Significant)

**Expected:** 118 questions (106 original + 12 practice exam questions per CLAUDE.md)
**Actual:** 178 questions

Week-by-week breakdown within QUESTIONS array:

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

The bank has 60 more questions than the 118 target. Multiple "Add 12 practice exam questions" commits contributed. Prior QA sessions confirmed 5 exact duplicates remain in the array.

### Issue 4 — No `type:'tf'` Questions (Minor)

There are 0 true/false questions in the QUESTIONS array. The code supports the `tf` type (`renderTF()` function exists, type label map includes `tf`), but no questions use it.

### Issue 5 — Dangling Commits from Prior QA Sessions (Informational)

Prior agent sessions (2026-06-10 to 2026-06-12) created 17 commits in a detached HEAD that were never merged into `main`. These are unreachable and will be garbage-collected. They represent wasted compute from 3 prior QA cycles that were never persisted.

---

## Recommendations

1. **Investigate why no redesign pipeline ran since 2026-06-03** (priority: critical) — 10 days of inactivity on index.html. Check the trigger/schedule.

2. **Merge detached HEAD work or prune it** (priority: medium) — cherry-pick useful commits from the dangling 17-commit chain onto main, or run `git gc` to clean up.

3. **Resolve question count baseline** (priority: medium) — prune back to 118 by removing duplicate/excess questions, or update CLAUDE.md to declare 178 as the canonical count.

4. **Clarify `tf` question status** (priority: low) — restore true/false questions from the original spec or remove `tf` handling from the codebase.

5. **Netlify functions are intact** — `mark.js` and `explain.js` unchanged since initial build. Verify `ANTHROPIC_API_KEY` is set in Netlify dashboard.
