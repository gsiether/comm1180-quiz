# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-10
**Tested by:** Automated QA Agent

## Overall Status: PARTIAL

> Most new features are implemented correctly, but **the redesign agent dropped 12 questions** compared to the version it replaced. W5, W7, W8, and W9 each lost questions that had been deliberately added in commit `13172b0`. Restoration required before next exam session.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `56f3fd5` — "Major redesign: light mode, multi-week, learn mode, improved notes/formulas/math input + practice exam questions" |
| JS syntax valid | ✅ | `node --check` exited 0 — no parse errors |
| 118 questions (spec target) | ⚠️ | Actual: **166 questions** — exceeds spec of 118, but **12 fewer than the 178 in the version being replaced** (see Issues) |
| Light mode CSS | ✅ | Full design-system variables present (`--bg:#F8FAFC`, `--surface:#FFFFFF`, etc.) |
| Dark mode toggle | ✅ | `darkModeBtn` (🌙/☀️) calls `toggleDarkMode()`; `.dark{…}` CSS block overrides all variables |
| Multi-week selection | ✅ | `week-chip` grid + `selectWeekChip()` + "All" chip; filters questions by active chips |
| Learn mode | ✅ | Learn Mode tab, `#learn` screen, "Test yourself" button present (71 matches) |
| I'm Confused button | ✅ | `😕 I'm Confused` button calls `showHintAI()` after hints shown |
| Hint 1 / Hint 2 | ✅ | 218 matches; progressive hint reveal logic present |
| Multi-step math input | ✅ | `addStep`, `step-row` present (19 matches); MathQuill via CDN |
| Final Answer field | ✅ | `finalAnswer` / `Final Answer` present (13 matches) |
| Notes overlay present | ✅ | `#notes-overlay` with W2–W10 tabs and inline HTML content |
| Formula overlay present | ✅ | `#formula-overlay` at line 2445 with full formula content |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` returned no output — mark.js and explain.js untouched |
| File size increased | ✅ | **6,936 lines** (up from ~1,458 lines in original CLAUDE.md baseline) |

---

## Issues Found

### 🔴 CRITICAL — 12 Questions Dropped by Redesign

Comparing `index.html` before the redesign (commit `ee005e6`) against the current version (`56f3fd5`):

| Week | Before redesign | After redesign | Lost |
|------|----------------|----------------|------|
| W5 (TVM) | 34 | 30 | **−4** |
| W7 (Capital Budgeting) | 26 | 23 | **−3** |
| W8 (Valuation) | 26 | 23 | **−3** |
| W9 (WACC) | 25 | 23 | **−2** |
| **Total** | **178** | **166** | **−12** |

These are the exact same weeks where the 12 practice exam questions were added in commit `13172b0`. The redesign agent likely truncated the end of those week blocks when rewriting the file, silently dropping the recently-added multipart and numerical practice questions.

**To restore:** run `git show ee005e6:index.html` and diff the QUESTIONS array for W5, W7, W8, W9 against the current file to identify and re-add the missing `{week:…}` objects.

### ⚠️ Minor — Multiple `<script>` Tags

There are 3 `<script>` entries in the HTML:
- Line 3035: main inline `<script>` ✅
- Line 6930: `<script src="…jquery.min.js">` (CDN)
- Line 6931: `<script src="…mathquill.min.js">` (CDN)

The spec says "exactly one `<script>` tag." The external CDN tags are required for MathQuill and are not a functional issue, but they introduce a CDN availability dependency for math input.

### ℹ️ Informational — Question Count vs Spec

The QA spec states "118 questions total." Current count is **166**. The discrepancy is because additional questions and practice exams were added after CLAUDE.md was written. 166 > 118 is fine — but CLAUDE.md should be updated once the 12 dropped questions are restored (making the true target 178).

---

## Recommendations

1. **Restore the 12 dropped questions** (priority: high, before next exam):
   - Run: `git show ee005e6:index.html | grep "^{week:[5789]," > /tmp/old_qs.txt`
   - Compare against current to identify which entries are missing in W5, W7, W8, W9.
   - Re-insert them into the QUESTIONS array.

2. **Update CLAUDE.md** expected question count from 118 to 178 (the correct post-restore target).

3. **Add a question-count assertion** in CI (e.g. a `make check` or `node` one-liner that asserts `QUESTIONS.length >= 178`) so future redesign agents cannot silently reduce the bank.
