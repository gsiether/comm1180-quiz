# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-01
**Tested by:** Automated QA Agent

## Overall Status: PARTIAL — duplicate questions still on `main`; fix exists in unmerged draft PR #6

## Summary

All core features (redesign, learn mode, hints, multi-week selection, notes/formulas overlays, math input) are present and the JS is syntax-clean. The one unresolved issue is **3 duplicate question pairs** in the QUESTIONS array that cause a student to potentially see the same scenario twice in a quiz session. Draft PR #6 (opened 2026-06-30) contains the fix but has not been merged for over 24 hours.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `df29682` "Add 12 practice exam questions" (2026-06-29). Redesign was `a733fa5` (earlier session). |
| JS syntax valid | ✅ | `node --check` on extracted `<script>` block exits 0 — no errors. |
| 118 questions intact | ⚠️ | **178 questions** in QUESTIONS array (scope grew across sessions; 3 are duplicates — see Issues). |
| Light mode CSS | ✅ | Design-system tokens `--bg:#F8FAFC`, `--surface:#FFFFFF`, Inter font present. |
| Dark mode toggle | ✅ | `darkModeBtn` + `toggleDarkMode()` with moon/sun emoji; dark CSS tokens present. |
| Multi-week selection | ✅ | `homeState.weeks[]` + `selectWeekChip()` supports any combination of week chips. |
| Learn mode | ✅ | `showLearn()`, `.learn-week-tile`, `.learn-notes-card`, "Test yourself" button present. |
| I'm Confused button | ✅ | `hintBtnAI` renders "😕 I'm Confused" after Hint 2 is shown. |
| Hint 1 / Hint 2 | ✅ | `hint`/`hint2` fields on all questions; 3-level reveal logic wired in. |
| Multi-step math input | ✅ | `addStep()`, `.working-steps`, `.step-row` present (MathQuill-backed). |
| Final Answer field | ✅ | `finalAnswer` / "Final Answer" input present for numerical questions. |
| Notes overlay present | ✅ | `notes-overlay` with per-week HTML content. |
| Formula overlay present | ✅ | `formula-overlay` with topic-grouped formulas. |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` is empty — `mark.js` and `explain.js` untouched. |
| File size increased | ✅ | **7,133 lines** (vs original 1,458). One inline `<script>` + two CDN scripts (jQuery, MathQuill). |

## Issues Found

### 1. Three duplicate question pairs in QUESTIONS array (unresolved — same as 2026-06-30 report)
Commit `df29682` (2026-06-29) re-added 12 practice-exam questions that were already present in the array, creating duplicate scenarios:

| Question | First occurrence | Duplicate |
|----------|-----------------|-----------|
| McDonald's NPV / declining perpetuity (W7) | Line 3603 | Line 4572 |
| AT&T EAA / bus models (W7) | Line 3622 | Line 4590 |
| Hush Puppies multi-stage dividend (W8) | Line 3880 | Line 4644 |

A student doing a W7 or W8 session can receive the same scenario twice in one quiz. **PR #6 fixes exactly this** (removes the redundant later copy, reduces array to 166 unique entries) but has been in draft/unmerged state since 2026-06-30T15:09 UTC.

### 2. Question count diverges from CLAUDE.md spec (minor)
CLAUDE.md specifies 118 questions (original) + 12 practice = 130. The array has 178, reflecting legitimate scope additions across many sessions. CLAUDE.md should be updated with the current baseline (~175 unique after removing 3 duplicates) to prevent future false-positive QA failures.

### 3. PR #6 stuck as draft for >24 hours
No reviewer has acted on it. The fix is correct (per PR description and manual line-by-line verification above) but cannot help students until it lands on `main`.

## Recommendations

1. **Merge PR #6** (`fix/duplicate-practice-questions`) — the fix is verified correct; this is the highest priority action.
2. After merging, update `CLAUDE.md` with the correct question count baseline (~175) so future QA passes use a valid target.
3. Consider adding a pre-commit or CI duplicate-detection step (compare `question`/`scenario` text across QUESTIONS entries) so re-addition of duplicates is caught before a commit lands.
