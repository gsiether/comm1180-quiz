# COMM1180 Quiz App - QA Test Report
**Date:** 2026-08-22
**Tested by:** Automated QA Agent (pass 61)

## Overall Status: PASS

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `1ebf442` "Merge origin/main; fix duplicate practice exam questions" (2026-08-22) |
| JS syntax valid | ✅ | `node --check` exits 0 on extracted inline script (4022 lines) |
| 181 questions intact | ✅ | 181 top-level questions in QUESTIONS array — stable and verified |
| Light mode CSS | ✅ | Full design-token system present (`--bg:#F8FAFC`, `--surface:#FFFFFF`) |
| Dark mode toggle | ✅ | `toggleDarkMode()` function + `darkModeBtn` (🌙/☀️) + dark-token block |
| Multi-week selection | ✅ | `homeState.weeks[]` array + `selectWeekChip()` toggle/all-chip logic |
| Learn mode | ✅ | `learnMode` flag (12 hits), `#learn` screen, "Learn Mode" tab |
| I'm Confused button | ✅ | "Confused" button (3 hits) — calls AI explain endpoint |
| Hint 1 / Hint 2 | ✅ | `showHint1`, `showHint2`, and Ask-AI escalation present (238 hits) |
| Multi-step math input | ✅ | `addStep` (23 hits), `step-row` CSS, `working-steps` present |
| Final Answer field | ✅ | `final-answer` class (13 hits) + "Final Answer" label |
| Notes overlay present | ✅ | `notes-overlay` element (8 hits) with W2–W10 tabs (`n-w2` etc.) |
| Formula overlay present | ✅ | `formula-overlay` element (8 hits) with CVP/TVM/NPV/Valuation/WACC (`f-cvp` etc.) |
| Practice exam Q1–Q12 | ✅ | All 12 practice questions confirmed; duplicate block removed in `02b5eb5` (main) and `52f75f2` (branch), merged cleanly |
| Netlify functions unchanged | ✅ | Last touched `3002aa8` (2026-07-14) — untouched across all recent passes |
| File size stable | ✅ | 7066 lines — unchanged from passes 57–60 baseline |

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

By type: `mcq:42  tf:15  sa:58  numerical:48  multipart:35` (sub-part occurrences inflate raw `grep -c` — top-level count is 181)

QUESTIONS array spans lines 3057–4645. Count matches passes 57–60 baseline. No duplicates detected.
Raw `grep -c "week:[0-9]" index.html` returns 221; the extra 40 hits are inside hint/note text. Scoped grep inside the QUESTIONS array block returns the correct 181.

## Structural Checks

- `<!DOCTYPE html>` at line 1, closing `</html>` at line 7066.
- Main inline `<script>` opens at line 3035 (4022 lines). Two external `<script src=…>` for jQuery and MathQuill at lines 7060–7061. One `<script>` string literal at line 5101 is inside a popup-window HTML template (expected and not a real script tag).
- Netlify functions: `netlify/functions/mark.js` and `netlify/functions/explain.js` untouched since 2026-07-14.

## Issues Found

No blocking issues.

1. **Merge commit today (`1ebf442`)**: Two sessions independently fixed the duplicate-question bug on separate branches. The merge resolved a trivial text conflict (comment wording) and preserved the correct fix. Net result: index.html unchanged in substance, test-report.md updated.
2. **Question count (181 vs. original 118 baseline)**: Correct and stable. The bank grew through successive build passes; all 12 practice-exam questions (W5 Q1–4, W7 Q5–7, W8 Q8–10, W9 Q11–12) are present exactly once.

## Recommendations

No follow-up actions required. App is in a healthy, passing state across all 16 checks. State is stable — no code changes to `index.html` since `02b5eb5` (2026-08-17).
