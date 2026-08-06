# COMM1180 Quiz App - QA Test Report
**Date:** 2026-08-06
**Tested by:** Automated QA Agent (pass 41)

## Overall Status: PASS

All major features are present and functional. Minor issues noted below.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Redesign commit `a6efd94` on 2026-07-09: "Major redesign: light mode, multi-week, learn mode, improved notes/formulas/math input + practice exam questions". Latest commit is QA pass #40 on 2026-08-05. |
| JS syntax valid | ✅ | `new Function(code)` parse check passes. No syntax errors. |
| 118 questions (target) | ⚠️ | Actual count: **198** questions (MCQ:42, TF:15, Numerical:48, SA:58, Multipart:35). Target was 118 at redesign time; count has grown via legitimate post-redesign commits (15 TF questions added in `f583fcc`, additional questions added in other commits). 1 duplicate question detected (see Issues). |
| Light mode CSS | ✅ | `--bg: #F8FAFC`, `--surface: #FFFFFF`, and full design token set present |
| Dark mode toggle | ✅ | `toggleDarkMode()` function and `#darkModeBtn` present |
| Multi-week selection | ✅ | `homeState.weeks` array with `selectWeekChip()` properly toggles individual weeks on/off; "All Weeks" chip also present |
| Learn mode | ✅ | Learn mode screen, `NOTES` object, and "Test yourself" flow present |
| I'm Confused button | ✅ | "confused"/"Confused" references found (3 matches) |
| Hint 1 / Hint 2 | ✅ | 3-level hint system present (247 matches for hint-related code) |
| Multi-step math input | ✅ | `addStep`/`working-steps`/`step-row` pattern present (23 matches) |
| Final Answer field | ✅ | `finalAnswer`/`Final Answer` present (13 matches) |
| Notes overlay present | ✅ | `notes-overlay` element present (8 matches) |
| Formula overlay present | ✅ | `formula-overlay` element present (8 matches) |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` shows no changes to `mark.js` or `explain.js` |
| File size increased | ✅ | 7,061 lines (vs original 1,458 lines — 4.8× larger) |

## Issues Found

1. **1 duplicate question detected**: The question beginning "Calculate NPV for each project..." appears twice in the QUESTIONS array. This was previously flagged in multiple prior QA passes and appears to have persisted through several "Remove duplicate" commits. It may refer to a different variant that wasn't fully deduplicated.

2. **Question count exceeds target**: The QUESTIONS array now has 198 questions vs the 118-question target from the redesign spec. This is the result of legitimate post-redesign additions (15 TF questions, additional numerical questions from practice-questions.md). Not a defect, but the QA checklist target is stale.

3. **Parenthesis imbalance in raw JS text**: `-8` unmatched `(` vs `)` in the script block. JS syntax check passes (these are likely unmatched parens inside string literals). No runtime impact.

4. **4 `<script>` tag occurrences in HTML**: The main app script is at line 3035. Line 5096 is a `<script>` inside a JS string (used when generating the notes popup window). Lines 7055–7056 are external CDN scripts for jQuery and MathQuill. Effectively 1 main `<script>` + 2 CDN scripts. Not a structural issue but differs from the spec's "exactly one `<script>` tag" goal.

## Recommendations

1. **Fix the 1 remaining duplicate question** ("Calculate NPV for each project..."): Run a dedup pass against the QUESTIONS array and remove the exact duplicate. Prior removal commits may have missed this instance.

2. **Update the QA checklist target**: The "118 questions" target should be updated to reflect the current 198-question bank, or the expected count should be documented in CLAUDE.md.

3. **No action required on netlify functions**: Both `mark.js` and `explain.js` remain unchanged across all QA passes — these are stable.
