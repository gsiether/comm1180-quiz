# COMM1180 Quiz App - QA Test Report
**Date:** 2026-08-13
**Tested by:** Automated QA Agent (Pass 50)

## Overall Status: PASS

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | fe3d8a4 "Add 12 practice exam questions from university practice materials" |
| JS syntax valid | ✅ | node --check exits 0, no errors |
| 118 questions (min) | ✅ | 193 questions present across W2/W3/W4/W5/W7/W8/W9/W10 — app has grown over 49 passes |
| Light mode CSS | ✅ | CSS variables `--bg: #F8FAFC`, `--surface: #FFFFFF` etc. present |
| Dark mode toggle | ✅ | `toggleDarkMode()` function, moon/sun emoji button, `.dark` CSS class |
| Multi-week selection | ✅ | `homeState.weeks[]`, `week-chip` / `.all-chip` classes, toggle logic |
| Learn mode | ✅ | `learnMode`, `Learn Mode` tab, `#learn` screen present |
| I'm Confused button | ✅ | "😕 I'm Confused" button calling `showHintAI()` |
| Hint 1 / Hint 2 | ✅ | 246 occurrences of hint fields across all questions |
| Multi-step math input | ✅ | `addStep`, `step-row`, `working-steps` present; MathQuill CDN loaded |
| Final Answer field | ✅ | `finalAnswer` / `Final Answer` field present (13 matches) |
| Notes overlay present | ✅ | `notes-overlay` with week-tab structure present |
| Formula overlay present | ✅ | `formula-overlay` with CVP/TVM/NPV/WACC sections present |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` shows no changes; functions intact since initial creation |
| File size increased | ✅ | 7183 lines (vs original 1458) |

## Question Count Breakdown (by week)
| Week | Topic | Questions |
|------|-------|-----------|
| W2 | Market Opportunities | 15 |
| W3 | CVP/Pricing | 26 |
| W4 | Technology/BSC | 15 |
| W5 | TVM | 37 |
| W7 | Capital Budgeting | 29 |
| W8 | Investors/Valuation | 29 |
| W9 | WACC | 28 |
| W10 | Performance Measurement | 14 |
| **Total** | | **193** |

## Notes
- The file contains 3 `<script>` tags: 1 main inline block + 2 external CDN scripts (jQuery 2.2.4, MathQuill 0.10.1) for the math input feature. This is expected and not a bug.
- Question count exceeds the originally specified 118 because multiple development passes have expanded the question bank. All weeks are well covered.
- The netlify functions (`mark.js`, `explain.js`) were last modified in pass 5 (2026-07-12) when they were first committed; they have remained unchanged since.

## Issues Found
No issues found. All required features are present and the JS is syntactically valid.

## Recommendations
- The app is in a healthy state. No follow-up actions are needed.
- The question bank has grown to 193 questions across all exam weeks — comprehensive coverage.
- Consider running a browser-level smoke test (Playwright) in a future pass to verify UI interactions beyond static code checks.
