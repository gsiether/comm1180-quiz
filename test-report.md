# COMM1180 Quiz App - QA Test Report
**Date:** 2026-05-23
**Tested by:** Automated QA Agent
**Branch:** main (origin/main, commit `3c3b59e`)

## Overall Status: PASS

All required features are present and functional in the code. JS syntax is valid. Netlify functions are untouched. The question count is 166 (higher than the spec's stated 118 — reflects multiple sessions adding questions across the project lifetime; no duplicates present; all 12 practice exam questions from `practice-questions.md` confirmed present). No new redesign commit since 2026-05-22; the feature set is stable.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Latest: `3c3b59e` — "QA report: automated code check (2026-05-22)". Feature commit: `440e8af` "Remove duplicate practice exam questions". Redesign: `137368f` (2026-05-17). |
| JS syntax valid | ✅ | Passed `new Function()` constructor parse — no syntax errors |
| 118+ questions intact | ✅ | QUESTIONS array has **166** top-level entries across W2–W10 (lines 3050–4518). No duplicates. All 12 practice exam questions confirmed present. |
| Light mode CSS | ✅ | `--bg:#F8FAFC`, `--surface:#FFFFFF`, `--border:#E2E8F0` present; dark override via `.dark {}` class |
| Dark mode toggle | ✅ | `toggleDarkMode()` + `#darkModeBtn` (🌙/☀️) in sticky header at line 820 |
| Multi-week selection | ✅ | `selectWeekChip()` at line 4668, `.week-chip.active`, `homeState.weeks[]` — multi-select grid with "All Weeks" shortcut |
| Learn mode | ✅ | `#learn` screen, `showLearn(week)`, `buildLearnGrid()` — full notes → "Test yourself" flow |
| I'm Confused button | ✅ | `😕 I'm Confused` → `showHintAI()` in quiz screen (shown after hint progression) |
| Hint 1 / Hint 2 | ✅ | All questions carry `hint` + `hint2` fields; 3-level system: Hint 1 → Hint 2 → Ask AI |
| Multi-step math input | ✅ | MathQuill CDN loaded (lines 6910–6911); `addStep()`, `.step-row`, `.working-steps`, `+ Add Step` button |
| Final Answer field | ✅ | `.final-answer-wrap` + `.final-answer-label` ("Final Answer") present |
| Notes overlay present | ✅ | `#notes-overlay` at line 1153 with W2/W3/W4/W5/W7/W8/W9/W10 tab content; pop-out window feature also present |
| Formula overlay present | ✅ | `#formula-overlay` with W3/W5/W7/W8/W9 tabs |
| Netlify functions unchanged | ✅ | `git diff HEAD -- netlify/` returns empty; `mark.js` and `explain.js` unmodified |
| File size increased | ✅ | **6,916 lines** (original was ~1,458 — 4.7× larger) |

---

## Question Count Breakdown

**Main QUESTIONS array** (lines 3050–4518):

| Week | Label | Questions |
|------|-------|-----------|
| Week 2 | Value Creation | 15 |
| Week 3 | CVP Analysis | 23 |
| Week 4 | Balanced Scorecard | 15 |
| Week 5 | Time Value of Money | 30 |
| Week 7 | Capital Budgeting | 23 |
| Week 8 | Investors / Valuation | 23 |
| Week 9 | WACC | 23 |
| Week 10 | Performance Measurement | 14 |
| **Total** | | **166** |

**Question types:**

| Type | Count |
|------|-------|
| `mcq` | 42 |
| `numerical` | 64 |
| `sa` | 58 |
| `multipart` | 59 |
| `tf` | 0 |
| **Total top-level** | **166** (type-tag total is higher as multipart sub-questions also carry type fields) |

**Separate practice exam arrays** also present: `EXAM2` (line ~6437), `EXAM3`, `EXAM4`, `EXAM5`

---

## Issues Found

### 1. Question count is 166, not 118 (LOW — stale spec)
`CLAUDE.md` states 118 total questions. Actual count is 166. This reflects additional questions added across multiple earlier sessions on top of the 12 new practice exam questions from `practice-questions.md`. No duplicates are present. The spec figure of 118 is outdated.

### 2. Multiple `<script>` tags present (INFO — expected)
`grep -c '<script>'` returns 2. The second occurrence is a CDN string embedded inside a JavaScript template literal (the pop-out notes window writer) and is not a real second script block. External CDN scripts (jQuery, MathQuill) add `</script>` close tags. This is a known pattern in the codebase and not an error.

### 3. No true/false (`type:'tf'`) questions (LOW — pre-existing)
0 questions use `type:'tf'`. Boolean-style content is encoded as `type:'sa'` or `type:'mcq'`. Pre-existing condition, not introduced by recent commits.

### 4. Multi-week selection grep patterns in spec return 0 (INFO — naming mismatch)
The spec's suggested greps (`selectedWeeks`, `toggleWeek`) return 0 matches, but the feature is fully implemented under `selectWeekChip()` and `homeState.weeks[]`. Feature works; spec grep patterns are stale.

---

## Recommendations

1. **Update CLAUDE.md question count**: Change "118 questions total" to 166 to avoid confusing future QA runs.

2. **Browser test**: All code-level checks pass, but UI functionality (exam mode with EXAM2–EXAM5, learn mode flow, hint progression, MathQuill input) should be validated in a real browser against the Netlify deployment before the exam date (2026-05-05).

3. **Guard against re-adding questions**: Future sessions adding questions should grep for existing question text before appending. The git history shows a repeated add → duplicate → remove cycle; a pre-check prevents this.
