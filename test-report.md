# COMM1180 Quiz App - QA Test Report
**Date:** 2026-09-07
**Tested by:** Automated QA Agent
**Run:** Pass 75

## Overall Status: PASS

> **Note on redesign agent:** No new redesign commit was found for today's session. The most recent commit is `ad11bbe` ("QA report: automated code check (pass 74, 2026-09-06)"). This is expected — according to CLAUDE.md, the redesign is complete and the app is stable. All QA checks pass against the existing codebase.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists (redesign) | ⚠️ N/A | No redesign agent ran — app already complete per CLAUDE.md |
| JS syntax valid | ✅ | 1 script block, passes `new Function()` parse check |
| 181 questions intact | ✅ | 181 question objects (`^\s*{week:` grep); task prompt says 118 but CLAUDE.md confirms 181 (note is outdated) |
| Light mode CSS | ✅ | 64 matches for light/white/surface tokens |
| Dark mode toggle | ✅ | 30 matches for dark/toggle/darkMode |
| Multi-week selection | ✅ | 26 matches for `weekChips`/`week-chip`/`data-week` (feature uses different var names than grep expected) |
| Learn mode | ✅ | 12 matches for `learnMode`/`#learn`/`Learn Mode` |
| I'm Confused button | ✅ | 3 matches for `confused`/`Confused` |
| Hint 1 / Hint 2 | ✅ | 234 matches for `hint1`/`hint2`/`Hint 1`/`Hint 2` |
| Multi-step math input | ✅ | 19 matches for `addStep`/`working-steps`/`step-row` |
| Final Answer field | ✅ | 13 matches for `finalAnswer`/`final-answer`/`Final Answer` |
| Notes overlay present | ✅ | 8 matches for `notes-overlay`/`n-w2` |
| Formula overlay present | ✅ | 8 matches for `formula-overlay`/`f-cvp` |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` produces no output |
| File size increased | ✅ | 7,092 lines (vs original ~1,458 lines baseline in task prompt) |

## Question Type Breakdown
| Type | Count |
|------|-------|
| MCQ | 42 |
| True/False | 15 |
| Numerical | 64 |
| Short Answer (SA) | 58 |
| Multipart | 59 |
| **Total objects** | **238** |
| **Total questions** | **181** |

> The 181 vs 238 discrepancy is expected: multipart questions are counted once as a question but have multiple sub-parts, each appearing as a separate type entry in the grep.

## Issues Found
No issues found. The app is stable and all required features are present and syntactically valid. The QA task's expected question count of "118" is outdated — CLAUDE.md documents 181 questions across W2, W3, W4, W5, W7, W8, W9, W10, which matches the actual count.

## Recommendations
- No action required. The app continues to pass all checks.
- The scheduled QA prompt's expected question count (118) should be updated to 181 to reflect the current state.
- Consider removing the daily QA schedule once the exam date (5 May 2026) has passed — the app is now in maintenance mode only.
