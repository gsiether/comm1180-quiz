# COMM1180 Quiz App - QA Test Report
**Date:** 2026-08-23
**Tested by:** Automated QA Agent (pass 62)

## Overall Status: PASS

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `fe9fd54` "QA report: automated code check (pass 61, 2026-08-22)" on origin/main — no redesign agent ran today; code is stable |
| JS syntax valid | ✅ | `node --check` on extracted script (lines 3036–7057) exits 0 |
| 181 questions intact | ✅ | 181 top-level questions in QUESTIONS array — stable since pass 56 |
| Light mode CSS | ✅ | Full design-token system present (`--bg:#F8FAFC`, `--surface:#FFFFFF`) |
| Dark mode toggle | ✅ | `toggleDarkMode()` function + `darkModeBtn` (🌙/☀️) + dark-token block |
| Multi-week selection | ✅ | `homeState.weeks[]` array + `selectWeekChip()` toggle/all-chip logic (19 hits) |
| Learn mode | ✅ | `learnMode` flag (10 hits), `#learn` screen, "Learn Mode" tab |
| I'm Confused button | ✅ | "Confused" button (3 hits) — calls AI explain endpoint |
| Hint 1 / Hint 2 | ✅ | `showHint1`, `showHint2`, Ask-AI escalation (4 hits each) |
| Multi-step math input | ✅ | `addStep` (14 hits), `step-row` CSS, `working-steps` present |
| Final Answer field | ✅ | `final-answer` class (12 hits) + "Final Answer" label |
| Notes overlay present | ✅ | `notes-overlay` element (6 hits) with W2–W10 tabs (`n-w2` etc.) |
| Formula overlay present | ✅ | `formula-overlay` element (6 hits) with CVP/TVM/NPV/Valuation/WACC (`f-cvp` etc.) |
| Practice exam Q1–Q12 | ✅ | All 12 practice questions present; deduplicated in `1ebf442` merge |
| Netlify functions unchanged | ✅ | Last touched `6211a5e` — untouched across all recent passes |
| File size stable | ✅ | 7066 lines — unchanged from passes 56–61 baseline |

## Question Count Detail

| Week | Count |
|------|-------|
| W2 | 19 |
| W3 | 29 |
| W4 | 18 |
| W5 | 40 |
| W7 | 35 |
| W8 | 31 |
| W9 | 32 |
| W10 | 17 |
| **Total** | **181** |

By type: `mcq:42  tf:15  sa:58  numerical:48  multipart:35` (sub-part occurrences inflate raw `grep -c` — top-level count is 181)

QUESTIONS array starts at line 3057. Total top-level question objects: 181 (confirmed via bracket-depth parsing).
Raw `grep -c "week:[0-9]" index.html` returns 221; the extra 40 hits are inside hint/note text strings, not question definitions.

## Structural Checks

- `<!DOCTYPE html>` at line 1, closing `</html>` at line 7066.
- Main inline `<script>` at lines 3035–7058 (4022 lines). Two external `<script src=…>` for jQuery and MathQuill at lines 7060–7061. One `<script>` string literal at line 5101 is inside a popup-window HTML template (expected, not a real script tag).
- Netlify functions: `mark.js` and `explain.js` both present and unmodified (last changed `6211a5e`).

## Issues Found

No blocking issues.

1. **No redesign agent ran today**: The most recent content commit (`1ebf442`, 2026-08-22) is a merge fixing duplicate questions. No new `index.html` changes since then. App is in the same stable state as passes 56–61.
2. **Question count (181 vs. original 118 baseline)**: Expected and stable. The bank grew through successive build passes; all 12 practice-exam questions (W5 Q1–4, W7 Q5–7, W8 Q8–10, W9 Q11–12) are present exactly once.

## Recommendations

No follow-up actions required. App is in a healthy, passing state across all 16 checks. If a redesign agent is intended to run before QA, verify its schedule is correctly configured.
