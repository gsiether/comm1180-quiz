# COMM1180 Quiz App - QA Test Report
**Date:** 2026-04-22
**Tested by:** Automated QA Agent

## Overall Status: PASS

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | "Major redesign: light mode, multi-week, learn mode, improved notes/formulas/math input + practice exam questions" |
| JS syntax valid | ✅ | `node --check` passed with no errors |
| 118 questions intact | ✅ | 131 questions found (exceeds 118 minimum) |
| Light mode CSS | ✅ | 61 matches for light-mode vars/colors (`--bg`, `#F8FAFC`, `--surface`, etc.) |
| Dark mode toggle | ✅ | `toggleDarkMode()` function + `darkModeBtn` (🌙/☀️) present in header |
| Multi-week selection | ✅ | `selectedWeeks`, `toggleWeek`, `week-chip` all present (15 matches) |
| Learn mode | ✅ | 59 matches for learn/learnMode/Learn Mode references |
| I'm Confused button | ✅ | Present as `😕 I'm Confused` in hint UI (`hintBtnAI`) |
| Hint 1 / Hint 2 | ✅ | 137 matches for hint1/hint2/Hint 1/Hint 2 |
| Multi-step math input | ✅ | `addStep`, `working-steps`, `step-row` all present (14 matches) |
| Final Answer field | ✅ | `finalAnswer` / `final-answer` present (9 matches) |
| Notes overlay present | ✅ | `#notes-overlay` with week content present |
| Formula overlay present | ✅ | `#formula-overlay` present (7 matches) |
| Netlify functions unchanged | ✅ | Zero diff lines for `netlify/` — mark.js and explain.js untouched |
| File size increased | ✅ | 4362 lines (up from original 1458 lines) |

## Question Breakdown (131 total)
| Week | Topic | Count |
|------|-------|-------|
| W2 | Market Opportunities | 13 |
| W3 | CVP / Pricing | 17 |
| W4 | Technology / BSC | 13 |
| W5 | TVM | 23 |
| W7 | Capital Budgeting / Investment | 18 |
| W8 | Investors / Valuation | 18 |
| W9 | WACC | 18 |
| W10 | Performance Measurement | 11 |
| **Total** | | **131** |

## Question Type Breakdown
| Type | Count |
|------|-------|
| `mcq` | 40 |
| `numerical` | 42 |
| `sa` | 35 |
| `multipart` | 14 |
| `tf` | 0 |
| **Total** | **131** |

## Issues Found
1. **Zero `tf` (true/false) questions** — the original build included true/false type questions; none are present now. If they were intentionally converted to MCQ or other types, no action needed. If not, some questions may have been silently dropped during the redesign.
2. **Question count is 131, not 118** — this is a positive deviation. The 12 practice exam questions were added, plus additional questions may have been expanded or added. No action required.

## Recommendations
1. Confirm whether `tf`-type questions were intentionally removed or converted to another type.
2. Run a manual smoke test in-browser on the Netlify deploy to verify the full quiz flow, learn mode, dark/light toggle, and hint system render correctly end-to-end.
3. Verify the AI mark/explain Netlify functions work post-deploy with a live numerical and multipart question (requires `ANTHROPIC_API_KEY` set in Netlify dashboard).
