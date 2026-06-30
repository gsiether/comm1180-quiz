# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-30
**Tested by:** Automated QA Agent

## Overall Status: PARTIAL — fix exists but is stuck in an unmerged draft PR, not on `main`

## Important note before the checklist

No new commit landed on `main` since yesterday's QA report (`c3ed58d`, 2026-06-29 16:11 UTC). The "redesign agent" that was supposed to run before this QA pass did produce work, but it sits in **PR #6 — "Fix duplicate practice-exam questions in QUESTIONS array"** (branch `fix/duplicate-practice-questions`), opened today at 2026-06-30T15:09 UTC and still **open/draft, unmerged**. Because it's unmerged, `main` — and therefore the live Netlify deployment — still contains the bug PR #6 was meant to fix.

This is a recurring pattern in the repo history: PRs #1, #2, #3, #4, #5, and now #6 have all attempted to fix the same duplicate-question issue. Only #3 and #4 were ever merged, and the duplication regressed afterward (most recently via commit `df29682`, "Add 12 practice exam questions", which **yesterday's QA report wrongly marked as PASS** — see Issues below). Someone needs to merge PR #6 or land an equivalent fix directly on `main`; repeatedly fixing-and-not-merging produces no benefit for students.

All checks below were run against current `main` HEAD (`c3ed58d`), since that's what's actually deployed via Netlify.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ❌ | Last commit on `main` is yesterday's own QA report (`c3ed58d`). The intended fix is in unmerged draft PR #6, not on `main`. |
| JS syntax valid | ✅ | Extracted inline `<script>` (330,946 chars) passes `node --check` with no errors. |
| 118 questions intact | ❌ | `grep -c "week:[0-9]"` = **218**, not 118 — and more importantly, contains **confirmed duplicate entries** (see Issues). |
| Light mode CSS | ✅ | `--bg`, `--surface`, light color tokens present. |
| Dark mode toggle | ✅ | `darkMode` state + toggle UI present. |
| Multi-week selection | ✅ | `selectWeekChip`, `homeState.weeks` present. |
| Learn mode | ✅ | `showLearn`, learn-mode state/UI present. |
| I'm Confused button | ✅ | "Confused" handler present (local-fallback + AI per PR #5). |
| Hint 1 / Hint 2 | ✅ | `hint`/`hint2` fields used extensively (233 matches), wired into UI flow. |
| Multi-step math input | ✅ | `addStep`/working-steps UI present. |
| Final Answer field | ✅ | `finalAnswer`/"Final Answer" present. |
| Notes overlay present | ✅ | `notes-overlay` present with per-week content. |
| Formula overlay present | ✅ | `formula-overlay` present with per-topic formulas. |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` is empty — `mark.js`/`explain.js` untouched. |
| File size increased | ✅ | `index.html` is **7,133 lines** (up from the original 1,458). One inline `<script>` block plus two external CDN `<script src>` tags (jQuery, MathQuill). |

## Issues Found

1. **Duplicate practice-exam questions on `main` (confirmed, unresolved).** The QUESTIONS array contains at least 3 verbatim-duplicate question/scenario pairs, each appearing once in the original integrated block and again under the later `// ── PRACTICE EXAM QUESTIONS (from practice-questions.md) ──` section (added by commit `df29682`):
   - McDonald's NPV / declining perpetuity (W7)
   - AT&T EAA / bus-model comparison (W7)
   - Hush Puppies multi-stage dividend growth (W8)

   A student doing a Week 7 or Week 8 quiz can be served the same question twice in one session. **PR #6 fixes exactly this** but has not been merged.

2. **Yesterday's QA report (2026-06-29) was a false positive.** It marked the app PASS with "178 questions" and did not catch this duplication, even though the duplicating commit (`df29682`) was the one being reviewed. PR #6's own description independently confirms this same finding ("previous automated QA reports had been wrongly marking as PASS").

3. **Fix work keeps landing in unmerged draft PRs instead of `main`.** This is the sixth PR attempting to fix the same root issue; only 2 of 6 were ever merged, and the problem regressed afterward. Today's fix (PR #6) provides no benefit to students until merged.

4. **Question count diverges from the spec in CLAUDE.md** (118 expected vs. 218 actual top-level entries) — largely explained by legitimate scope growth (many practice-exam-question PRs since the spec was written), but the duplication above means the effective unique count is lower than 218.

## Recommendations

1. **Merge PR #6** (or an equivalent fix) into `main` so the duplicate-question fix actually reaches production via Netlify. Until that happens, every subsequent QA pass will keep finding the same bug.
2. After merging, re-run this QA pass to confirm the duplicate count is 0 and capture an accurate unique-question total.
3. Add an automated duplicate-detection check (comparing `question`/`scenario` text across all QUESTIONS entries) so regressions like `df29682` are caught before merge, not after.
4. Clarify whether 218 questions (vs. 118 in CLAUDE.md) is intentional scope growth; if so, update CLAUDE.md so future QA passes use the correct baseline.
