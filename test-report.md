# COMM1180 Quiz App - QA Test Report
**Date:** 2026-04-21
**Tested by:** Automated QA Agent

## Overall Status: FAIL

> **Critical finding:** The redesign agent did NOT update `index.html`. The file remains at 1458 lines (original size). The only new commit (`1a17b34`) added `practice-questions.md` — a markdown file containing extra questions — but made no changes to the app itself. All redesign features are absent.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ❌ | Latest commit (`1a17b34 Add practice exam questions for agent to incorporate`) only added `practice-questions.md`; `index.html` was not modified |
| JS syntax valid | ✅ | `node --check` passes; `localStorage` error is expected (browser-only API, not a syntax error) |
| 118 questions intact | ❌ | 92 questions found (mcq: 35, tf: 20, numerical: 20, sa: 11, multipart: 6). 26 questions in `practice-questions.md` were never incorporated |
| Light mode CSS | ❌ | No light mode styles; app uses a single dark-themed CSS variable scheme |
| Dark mode toggle | ❌ | No theme toggle present; existing `.toggle` elements are for shuffle/hints settings only |
| Multi-week selection | ❌ | No `selectedWeeks`/`toggleWeek` logic; only single-week or all-weeks buttons exist |
| Learn mode | ❌ | Not present; all 10 "learn" matches refer to BSC "Learning & Growth" in question content |
| I'm Confused button | ❌ | Not present |
| Hint 1 / Hint 2 | ✅ | Present in original build: question data has `hint` and `hint2` fields; UI shows them progressively via a single "💡 Hint" button (first click → hint, second click → hint2) |
| Multi-step math input | ❌ | No `addStep`/`working-steps`/`step-row` logic present |
| Final Answer field | ❌ | No `finalAnswer`/`final-answer` element present |
| Notes overlay present | ✅ | Present in original build (`#notes-overlay` with tabbed week content) |
| Formula overlay present | ✅ | Present in original build (`#formula-overlay` with CVP and other formula tabs) |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` returns no output; functions untouched |
| File size increased | ❌ | 1458 lines — identical to original build; no increase |

## Issues Found

1. **Redesign agent did not run.** `index.html` is unchanged from the initial build. The commit history shows only two commits: the initial build and an addition of `practice-questions.md`.

2. **26 questions missing.** The `practice-questions.md` file (added in the latest commit) contains additional exam questions that were meant to be incorporated into the `QUESTIONS` array in `index.html`. They have not been added. Current count is 92; target is 118.

3. **Dark/light mode toggle absent.** The redesign was supposed to add a theme toggle. The current app only has a dark-style colour scheme with no switching capability.

4. **Multi-week selection absent.** Users can only quiz on a single week or all weeks. The planned multi-select (e.g. weeks 3 + 5 + 7) is not implemented.

5. **Learn mode absent.** No learn-mode flow (review without time pressure, flag cards, etc.) has been implemented.

6. **"I'm Confused" button absent.** No UI element or handler for this feature.

7. **Multi-step math input absent.** Numerical questions currently use a plain text input. The step-by-step working UI (`addStep`, `step-row`) was not built.

8. **Final Answer field absent.** Related to multi-step math; no dedicated final-answer input exists.

## Recommendations

1. **Re-run the redesign agent** targeting `index.html` with the full list of required features (dark/light toggle, multi-week selection, learn mode, I'm Confused, multi-step math, final answer field).
2. **Incorporate `practice-questions.md`** into the `QUESTIONS` array in `index.html` to reach the 118-question target.
3. After the redesign agent completes, re-run this QA report to verify all checklist items pass.
