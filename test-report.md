# COMM1180 Quiz App - QA Test Report
**Date:** 2026-08-14
**Tested by:** Automated QA Agent (Pass 51)

## Overall Status: PASS

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | fe3d8a4 "Add 12 practice exam questions from university practice materials" (no new redesign commit since pass 50) |
| JS syntax valid | ✅ | `node --check` exits 0, no errors |
| 118 questions (min) | ✅ | 193 questions present across W2/W3/W4/W5/W7/W8/W9/W10 |
| Light mode CSS | ✅ | CSS variables `--bg: #F8FAFC`, `--surface: #FFFFFF` etc. present |
| Dark mode toggle | ✅ | `toggleDarkMode()` function at line 5172; 🌙 button at line 820 |
| Multi-week selection | ✅ | `homeState.weeks[]`, `week-chip` / `.all-chip` classes, toggle logic present |
| Learn mode | ✅ | `learnMode`, "Learn Mode" tab, `#learn` screen present (71 matches) |
| I'm Confused button | ✅ | "😕 I'm Confused" button calling `showHintAI()` at line 5407 |
| Hint 1 / Hint 2 | ✅ | 246 occurrences of hint fields across all questions |
| Multi-step math input | ✅ | `addStep`, `step-row`, `working-steps` present; MathQuill CDN loaded |
| Final Answer field | ✅ | `finalAnswer` / `Final Answer` field present (13 matches) |
| Notes overlay present | ✅ | `notes-overlay` with week-tab structure present |
| Formula overlay present | ✅ | `formula-overlay` with CVP/TVM/NPV/WACC sections present |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` shows no changes |
| File size increased | ✅ | 7183 lines (vs original 1458) |

## Question Count Breakdown (by week)
| Type | Count |
|------|-------|
| mcq | 42 |
| tf | 15 |
| numerical | 53 |
| sa | 58 |
| multipart | 25 |
| **Total (top-level)** | **193** |

Verified by bracket-balanced Python scan of the QUESTIONS array (188,455 chars). Practice exam questions from `practice-questions.md` confirmed present: McDonald's NPV, AT&T EAA, Hush Puppies dividend growth, CAPM multi-company, APR/EAR/FV multipart, deferred perpetuity, WACC with D/E ratios, and others.

## Notes
- No new redesign commit since pass 50 (2026-08-13). The app has been in its redesigned state since `0c7ba09` ("Major redesign") and is unchanged.
- 4 `<script>` tags total: 1 main inline block + a JS string literal containing HTML (for notes popup) + 2 external CDN scripts (jQuery 2.2.4, MathQuill 0.10.1). This is expected.
- Question count (193) exceeds original spec of 118 — the bank has grown through 50+ QA/development passes. All exam weeks are well covered.

## Issues Found
No issues found. All required features are present and JS is syntactically valid.

## Recommendations
- The app remains in a healthy state. No follow-up actions needed.
- Consider a Playwright browser smoke test in a future pass to verify UI interactions (hint flow, quiz scoring, learn mode navigation).
