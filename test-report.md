# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-08
**Tested by:** Automated QA Agent
**Commit tested:** fd8c281 — "Fix dark mode toggle: apply .dark class to `<html>` not `<body>`"

## Overall Status: PASS

All required features are present. The only change since the last QA report (ea12bbe, 2026-06-07) is a single-line dark mode bug fix — `document.body` → `document.documentElement` — which is correct and intentional. Question bank (166 questions) and all feature checks remain unchanged.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | fd8c281 "Fix dark mode toggle" — dark mode now targets `<html>` (correct) |
| JS syntax valid | ✅ | Script block parses cleanly; one `</script>` inside a JS string literal (popup window write) is harmless |
| 118 questions intact | ✅ | 166 question objects in QUESTIONS array (exceeds 118 target) |
| Light mode CSS | ✅ | `--bg: #F8FAFC`, `--surface: #FFFFFF`, white/light theme throughout |
| Dark mode toggle | ✅ | `toggleDarkMode()` / `applyDarkMode()` toggle `.dark` on `document.documentElement` (fixed this commit) |
| Multi-week selection | ✅ | `homeState.weeks[]`, `buildWeekChips()`, `selectWeekChip()`, `.week-chip.active` — full implementation |
| Learn mode | ✅ | Learn Mode tab, `buildLearnGrid()`, learn screen flow — 12+ references |
| I'm Confused button | ✅ | Present (2 references) |
| Hint 1 / Hint 2 | ✅ | 3-level hint system (218 references) |
| Multi-step math input | ✅ | MathQuill integration, `addStep`, step-row UI — 19 references |
| Final Answer field | ✅ | `finalAnswer` field present — 13 references |
| Notes overlay present | ✅ | `#notes-overlay` with per-week tab content — 8 references |
| Formula overlay present | ✅ | `#formula-overlay` present — 8 references |
| Netlify functions unchanged | ✅ | No diff on `netlify/` across any commit; `mark.js` and `explain.js` untouched |
| File size increased | ✅ | 6,936 lines (vs original 1,458 lines — 4.7× larger) |

## Question Breakdown

| Week | Count | Topic |
|------|-------|-------|
| W2 | 15 | Market Opportunities |
| W3 | 23 | CVP / Pricing |
| W4 | 15 | Technology / BSC |
| W5 | 30 | TVM |
| W7 | 23 | Capital Budgeting |
| W8 | 23 | Investors / Valuation |
| W9 | 23 | WACC |
| W10 | 14 | Performance Measurement |
| **Total** | **166** | |

Question types (top-level): `mcq` (42), `sa` (58), `multipart` (35), `numerical` (48). Note: multipart sub-parts each have their own `type:` field — raw grep counts are higher than top-level totals.

## Changes Since Last QA Report (2026-06-07)

- **fd8c281**: One-line fix — `document.body.classList.toggle` → `document.documentElement.classList.toggle` in `applyDarkMode()`. This is a correct fix: CSS variables scoped to `.dark` in the stylesheet apply to the root `<html>` element, not `<body>`, so toggling on `document.documentElement` is required for the dark theme to cascade properly.

## Issues Found

1. **Dark mode fix is correct but untested in browser** — The one-line fix is logically sound, but no browser run was performed in this automated QA pass. Recommend a manual smoke-test of the dark mode toggle before the next deploy.

2. **Pre-existing: `type:'tf'` absent from question bank** — The code contains full rendering support for true/false questions but there are zero tf-type questions in the array. Low priority unless tf coverage is needed for exam prep.

3. **Pre-existing: CDN dependency for MathQuill/jQuery** — Two external CDN script tags (lines 6930–6931) load jQuery and MathQuill from `cdnjs.cloudflare.com`. If the CDN is unavailable, math input breaks silently. Consider bundling or self-hosting.

## Recommendations

1. Manual browser test of dark mode toggle to confirm the fix works end-to-end.
2. No action required on Netlify functions — both are unchanged and correct.
3. Consider adding tf-type questions if exam true/false coverage is needed.
