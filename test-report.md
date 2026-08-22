# COMM1180 Quiz App - QA Test Report
**Date:** 2026-08-21
**Tested by:** Automated QA Agent (pass 60)

## Overall Status: PASS

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `46e29af` "QA report: automated code check (pass 59, 2026-08-20)" — no `index.html` changes since `02b5eb5` (2026-08-17) |
| JS syntax valid | ✅ | `new Function(script)` passes cleanly on the extracted inline script |
| 118+ questions intact | ✅ | 181 top-level questions in QUESTIONS array (stable since pass 56) |
| Light mode CSS | ✅ | Full design-token system present (`--bg:#F8FAFC`, `--surface:#FFFFFF`) |
| Dark mode toggle | ✅ | `toggleDarkMode()` function + `darkModeBtn` (🌙/☀️) + dark-token block |
| Multi-week selection | ✅ | `homeState.weeks[]` array + `selectWeekChip()` toggle/all-chip logic |
| Learn mode | ✅ | `learnMode` flag (9 hits), `#learn` screen, "Learn Mode" tab |
| I'm Confused button | ✅ | "Confused" button (3 hits) — calls AI explain endpoint |
| Hint 1 / Hint 2 | ✅ | `showHint1`, `showHint2`, and Ask-AI escalation present (234 hits) |
| Multi-step math input | ✅ | `addStep` (6 hits), `step-row` (8 hits), `working-steps` CSS present |
| Final Answer field | ✅ | `final-answer` class (12 hits) + "Final Answer" label |
| Notes overlay present | ✅ | `notes-overlay` element (6 hits) with W2–W10 tabs (`n-w2` etc.) |
| Formula overlay present | ✅ | `formula-overlay` element (6 hits) with CVP/TVM/NPV/Valuation/WACC (`f-cvp` etc.) |
| Practice exam Q1–Q12 | ✅ | All 12 practice questions confirmed; duplicate block removed in `02b5eb5` |
| Netlify functions unchanged | ✅ | 0 lines diff on `netlify/` — untouched since 2026-07-19 |
| File size stable | ✅ | 7066 lines — unchanged from passes 57–59 |

## Question Count Detail

| Week | Count |
|------|-------|
| W2 | 15 |
| W3 | 26 |
| W4 | 15 |
| W5 | 33 |
| W7 | 26 |
| W8 | 26 |
| W9 | 26 |
| W10 | 14 |
| **Total** | **181** |

By type: `mcq:42  tf:15  sa:58  numerical:48  multipart:35`

QUESTIONS array spans lines 3057–4645. Count matches passes 57–59 baseline. No duplicates detected.
Raw `grep -c "week:[0-9]" index.html` returns 221; the extra 40 hits are inside hint/note text. Scoped grep inside the QUESTIONS array block returns the correct 181.

## Structural Checks

- `<!DOCTYPE html>` at line 1, closing `</html>` at line 7066.
- Main inline `<script>` opens at line 3035. Two external `<script src=…>` for jQuery and MathQuill at lines 7060–7061. One `<script>` string literal at line 5101 is inside a popup-window HTML template (expected and not a real script tag).
- Netlify functions: `netlify/functions/mark.js` and `netlify/functions/explain.js` untouched since 2026-07-19.

## Issues Found

No blocking issues.

1. **No new code changes today**: The last change to `index.html` was `02b5eb5` on 2026-08-17. Passes 57–60 all report the same stable state. The most recent commit (`46e29af`) is yesterday's QA report.
2. **Question count (181 vs. original 118 baseline)**: Correct and stable. The bank grew through successive build passes; all 12 practice-exam questions (W5 Q1–4, W7 Q5–7, W8 Q8–10, W9 Q11–12) are present exactly once after the `02b5eb5` deduplication fix.

## Recommendations

No follow-up actions required. App is in a healthy, passing state across all 16 checks.
