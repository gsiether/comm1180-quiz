# COMM1180 Quiz App - QA Test Report
**Date:** 2026-05-22
**Tested by:** Automated QA Agent
**Branch:** main (origin/main, commit `5f9e832`)

## Overall Status: PASS

All required features are present and functional in the code. JS is valid. Netlify functions are untouched. The question count is 166 (higher than the spec's stated 118 due to multiple sessions adding new questions, but no duplicates are present and all 12 practice exam questions from `practice-questions.md` are confirmed present). Additional practice exam arrays (EXAM2–EXAM5) are also present as a bonus.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Latest: `5f9e832` — "QA report: automated code check (2026-05-21)" · Feature: `440e8af` "Remove duplicate practice exam questions from QUESTIONS array" |
| JS syntax valid | ✅ | Passed Function constructor parse check — no syntax errors |
| 118+ questions intact | ✅ | QUESTIONS array has **166** top-level entries across W2–W10. 0 duplicates found. All 12 practice exam questions from `practice-questions.md` confirmed present. |
| Light mode CSS | ✅ | `--bg:#F8FAFC`, `--surface:#FFFFFF`, `--border:#E2E8F0` present; dark override via `.dark{}` at line 45 |
| Dark mode toggle | ✅ | `toggleDarkMode()` function and `#darkModeBtn` (🌙/☀️ toggle) in sticky header |
| Multi-week selection | ✅ | `selectWeekChip()`, `homeState.weeks[]`, `.week-chip.active` — multi-select chips with "All Weeks →" shortcut |
| Learn mode | ✅ | `#learn` screen, `showLearn(week)`, `buildLearnGrid()` — full notes → "Test yourself" flow |
| I'm Confused button | ✅ | `😕 I'm Confused` → `showHintAI()` present in quiz screen (shown after hint progression) |
| Hint 1 / Hint 2 | ✅ | All questions carry `hint` + `hint2` fields; 3-level hint system: Hint 1 → Hint 2 → Ask AI |
| Multi-step math input | ✅ | MathQuill CDN loaded; `addStep()`, `.step-row`, `.working-steps`, `+ Add Step` button |
| Final Answer field | ✅ | `.final-answer-wrap` + `.final-answer-label` ("Final Answer") present |
| Notes overlay present | ✅ | `#notes-overlay` with W2/W3/W4/W5/W7/W8/W9/W10 tab content; pop-out window feature also present |
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
| `numerical` | 48 |
| `sa` | 58 |
| `multipart` | 35 |
| `tf` | 0 |
| **Total** | **183** type-tags (includes sub-questions inside multipart; top-level count is 166) |

**Separate practice exam arrays** also present: `EXAM2` (line 6437), `EXAM3` (6569), `EXAM4` (6710), `EXAM5` (6825)

---

## Issues Found

### 1. Question count is 166, not 118 (LOW — stale spec)
`CLAUDE.md` states 118 total questions should be in the array. The actual count is 166. This is not a bug — it reflects additional questions added across multiple earlier sessions plus the 12 new practice exam questions from `practice-questions.md`. No duplicates are present. The spec figure of 118 is outdated.

### 2. No true/false (`type:'tf'`) questions (LOW — pre-existing)
0 questions use `type:'tf'`. All boolean-style content is encoded as `type:'sa'` or `type:'mcq'`. Pre-existing condition, not introduced by recent commits.

### 3. Multi-week selection grep patterns in spec return 0 (INFO — naming mismatch)
The spec's suggested greps (`selectedWeeks`, `toggleWeek`) return 0 matches, but the feature is fully implemented under `selectWeekChip()` and `homeState.weeks[]`. Feature is working; the spec's grep patterns are stale.

---

## Recommendations

1. **Update CLAUDE.md question count**: Change "118 questions total" to 166 to avoid confusing future QA runs.

2. **Test in browser**: All code-level checks pass, but UI functionality (exam mode with EXAM2–EXAM5, learn mode flow, hint progression, MathQuill input) should be validated in a real browser on the Netlify deployment.

3. **Guard against re-adding questions**: Future sessions adding questions should first grep for existing question text before adding to prevent duplicate cycles (pattern seen in git history: add → QA flags duplicate → remove → re-add).
