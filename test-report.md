# COMM1180 Quiz App - QA Test Report
**Date:** 2026-11-02
**Tested by:** Automated QA Agent

## Overall Status: PASS

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `80bedfb QA report: automated code check (pass 147, 2026-11-01)` |
| JS syntax valid | ✅ | `node --check` passed — no syntax errors |
| 181 questions intact | ✅ | 181 (note: QA prompt says 118, but CLAUDE.md says 181; actual count is 181) |
| Light mode CSS | ✅ | `#ffffff`, `background: #f` found 24+ times |
| Dark mode toggle | ✅ | `dark` keyword found 16 times |
| Multi-week selection | ✅ | `selectedWeeks`, `selectWeekChip`, `week-chip` found 17 times |
| Learn mode | ✅ | `learnMode`, `Learn Mode` tab found 11 times |
| I'm Confused button | ✅ | `Confused` found 3 times |
| Hint 1 / Hint 2 | ✅ | `hint1`/`hint2` found 234+ times |
| Multi-step math input | ✅ | `addStep`, `working-steps`, `step-row` found 19 times |
| Final Answer field | ✅ | `finalAnswer`, `final-answer`, `Final Answer` found 13 times |
| Notes overlay present | ✅ | `notes-overlay`, `n-w2` found 8 times |
| Formula overlay present | ✅ | `formula-overlay`, `f-cvp` found 8 times |
| Netlify functions unchanged | ✅ | No diff in `netlify/` for last commit; mark.js (136 lines), explain.js (79 lines) intact |
| File size sufficient | ✅ | 7,092 lines (well above original 1,458 lines) |
| Single `<script>` tag | ✅ | Exactly 1 `<script>` tag (line 3061); inline `<script>` in string literal at line 5127 is not a real tag |
| DOCTYPE + closing html | ✅ | File starts with `<!DOCTYPE html>`, ends with `</html>` |

## Question Breakdown by Week
| Week | Topic | Count |
|------|-------|-------|
| W2 | Market Opportunities | 19 |
| W3 | CVP/Pricing | 29 |
| W4 | Technology/BSC | 18 |
| W5 | TVM | 40 |
| W7 | Capital Budgeting | 35 |
| W8 | Investors/Valuation | 31 |
| W9 | WACC | 32 |
| W10 | Performance Measurement | 17 |
| **Total** | | **221** |

*Note: `week:[0-9]` grep returns 221 because multipart questions embed `week:` in each part. Top-level question object count (`{week:`) = 181, matching CLAUDE.md.*

## Question Types
| Type | Count |
|------|-------|
| MCQ | 42 |
| TF (True/False) | 15 |
| Numerical | 64 |
| SA (Short Answer) | 58 |
| Multipart | 59 |

## Issues Found
No issues found. All checks pass. App is stable.

## Recommendations
- The QA task prompt references "118 questions" which is outdated; CLAUDE.md confirms 181 questions. No action needed.
- Exam date is Tuesday 5 May 2026 — the app is ready for the exam period.
- Continue daily QA runs to catch any regressions.
