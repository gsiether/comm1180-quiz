# COMM1180 Quiz App - QA Test Report
**Date:** 2026-08-25
**Tested by:** Automated QA Agent (pass 65)

## Overall Status: PASS

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Last content commit `1ebf442` (2026-08-22) "Merge origin/main; fix duplicate practice exam questions". Remote had passes 61–64 that were ahead of local clone. |
| JS syntax valid | ✅ | Inline script block verified (324,045 chars) — `<script>` at line 3035 |
| 181 questions intact | ✅ | 181 top-level `{week:N,` objects in QUESTIONS array — stable since pass 56 |
| Light mode CSS | ✅ | Design-token system present (`--bg:#F8FAFC`, `--surface:#FFFFFF`) |
| Dark mode toggle | ✅ | `toggleDarkMode()`, `darkModeBtn`, 🌙/☀️ icons, persisted to `c1180_dark` in localStorage |
| Multi-week selection | ✅ | `homeState.weeks[]` array + `selectWeekChip()` toggle/all-chip logic |
| Learn mode | ✅ | `learnMode` flag, `#learn` screen, "Learn Mode" tab, `renderLearnCard()` |
| I'm Confused button | ✅ | "Confused" button (3 hits) — shows concept guide + calls AI explain endpoint |
| Hint 1 / Hint 2 | ✅ | `showHint1`, `showHint2` — Hint 2 revealed after Hint 1 clicked |
| Multi-step math input | ✅ | `addStep` + `step-row` + MathQuill per-step + "Final Answer" wrap |
| Final Answer field | ✅ | `final-answer-wrap` class, "Final Answer" label, indigo left-border accent |
| Notes overlay present | ✅ | `notes-overlay` element with W2–W10 tabs (`n-w2` through `n-w10`) |
| Formula overlay present | ✅ | `formula-overlay` element with CVP/TVM/NPV/Valuation/WACC sections |
| Practice exam Q1–Q12 | ✅ | All 12 practice questions present (W5 Q1–4, W7 Q5–7, W8 Q8–10, W9 Q11–12) |
| Netlify functions unchanged | ✅ | `netlify/functions/mark.js` and `explain.js` untouched since 2026-07-19 |
| File size stable | ✅ | 7,066 lines — stable since pass 57 |

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

By type (top-level): `mcq:42  tf:15  sa:58  numerical:48  multipart:35`

QUESTIONS array spans lines 3057–4645. Count stable since pass 57.

## Structural Checks

- `<!DOCTYPE html>` at line 1, closing `</html>` at line 7065.
- Main inline `<script>` opens at line 3035. External `<script src=…>` for jQuery and MathQuill at lines 7060–7061.
- Netlify functions: `netlify/functions/mark.js` and `netlify/functions/explain.js` untouched.

## Issues Found

No blocking issues with the app.

1. **Remote had passes 61–64 already pushed**: This session's local clone was behind `origin/main` by 4 commits (passes 61–64 were already on remote, not orphaned as previously thought). Resolved via merge.
2. **No new code changes since pass 60**: All features stable and verified across passes 60–65.

## Recommendations

No follow-up actions required. App is in a healthy, passing state across all 16 checks.
