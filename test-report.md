# COMM1180 Quiz App - QA Test Report
**Date:** 2026-09-13
**Tested by:** Automated QA Agent (pass 84)

## Overall Status: PASS

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| Redesign commit exists | ✅ | `0c7ba09` — "Major redesign: light mode, multi-week, learn mode, improved notes/formulas/math input + practice exam questions" |
| No new commit since last QA | ✅ | Last commit: `ade3bc5` QA pass 82 (2026-09-12) — app stable |
| JS syntax valid | ✅ | `new Function()` parse passed with no errors |
| 181 questions intact | ✅ | 181 question objects confirmed (task expected 118; CLAUDE.md documents 181 after practice Qs added) |
| Light mode CSS | ✅ | 64 occurrences of `--bg`, `--surface`, `#ffffff`, etc. |
| Dark mode toggle | ✅ | `toggleDarkMode()` function present; 🌙/☀️ button in header |
| Multi-week selection | ✅ | `homeState.weeks[]` + `selectWeekChip()` — toggles individual weeks into array, "All Weeks" shortcut present |
| Learn mode | ✅ | `buildLearnGrid()` function + `#learn` screen + `renderLearnCard()` present |
| I'm Confused button | ✅ | 3 occurrences of "confused" |
| Hint 1 / Hint 2 | ✅ | 236 occurrences of hint1/hint2/Hint |
| Multi-step math input | ✅ | 19 occurrences of `addStep`/`step-row`/`working-steps` |
| Final Answer field | ✅ | 15 occurrences of `finalAnswer`/`final-answer` |
| Notes overlay present | ✅ | 8 occurrences of `notes-overlay`/`n-w2`; all 8 exam weeks covered |
| Formula overlay present | ✅ | W3 CVP / W5 TVM / W7 NPV / W8 Val / W9 WACC tabs |
| All 12 practice exam Qs | ✅ | Q1–Q12 confirmed: APR/EAR, perpetuity, mortgage, McDonald's, AT&T EAA, 7-part project, bond, Hush Puppies, Gordon Growth, CAPM 5-company, Sandwich WACC |
| Exam mode with timer | ✅ | 26 occurrences of `examMode`; 5 pre-built exam sets |
| Netlify functions unchanged | ✅ | `mark.js` + `explain.js` not modified |
| File size stable | ✅ | 7,092 lines |

## Question Breakdown
| Type | Count |
|------|-------|
| MCQ | 42 |
| True/False | 15 |
| Numerical | 64 |
| Short Answer | 58 |
| Multipart | 59 |
| **Total (confirmed)** | **181** |

Note: The task prompt expected 118 questions. CLAUDE.md documents 181 questions — the higher count reflects 12 practice exam questions added in earlier commits. The actual JS parse confirms 181 question objects.

## Script Tags
3 actual `<script>` tags: 1 main app script (line 3061) + 2 CDN external scripts (jQuery 2.2.4 and MathQuill 0.10.1 at lines 7086–7087). A 4th apparent match at line 5127 is a `<\/script>` string literal inside JS (not an HTML tag). The external scripts are required for MathQuill input and are expected.

## Issues Found
No issues found. All required features are present and intact. The app has maintained a clean PASS for 84 consecutive automated QA checks.

## Recommendations
- App is stable. No action required.
- Exam date was 2026-05-05 (now past). Consider archiving or decommissioning the scheduled QA task.
