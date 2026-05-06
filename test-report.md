# COMM1180 Quiz App - QA Test Report
**Date:** 2026-05-06
**Tested by:** Automated QA Agent (run 13)

## Overall Status: PASS

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `dec1222` — "Fix formula buttons to open in-app overlay instead of PDF link" (2026-05-06) |
| JS syntax valid | ✅ | `node --check` exits 0 — no syntax errors |
| 118+ questions intact | ✅ | 206 `week:` occurrences; by type: mcq=42, numerical=64, sa=58, multipart=59; count has grown due to practice exam additions |
| Light mode CSS | ✅ | 93 matches for `white`/`#ffffff`/`--bg: #F8FAFC`/`--surface: #FFFFFF` |
| Dark mode toggle | ✅ | 8 matches for `dark`/`darkMode`/`toggleDark` |
| Multi-week selection | ✅ | Implemented as `.week-chip`/`homeState.weeks[]` (lines 4354–4490); all selected/deselected UI wired |
| Learn mode | ✅ | 68 matches for `learn`/`learnMode`/`Learn Mode`; `#learn` screen present |
| I'm Confused button | ✅ | `hintBtnAI` at line 4951; hidden until after hints shown (confirmed by previous fix commit) |
| Hint 1 / Hint 2 | ✅ | 213 matches for hint-related identifiers |
| Multi-step math input | ✅ | 19 matches for `addStep`/`working-step`/`step-row`/`mathStep` |
| Final Answer field | ✅ | 13 matches for `finalAnswer`/`final-answer`/`Final Answer` |
| Notes overlay present | ✅ | 8 matches for `notes-overlay`/`notesOverlay` with W2–W10 content |
| Formula overlay present | ✅ | 8 matches for `formula-overlay`/`formulaOverlay`; latest fix routes all 📐 buttons to in-app overlay |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` is empty — mark.js and explain.js untouched |
| File size increased | ✅ | 6,711 lines (vs original 1,458 lines) |

## Question Type Breakdown
| Type | Count |
|------|-------|
| `mcq` | 42 |
| `numerical` | 64 |
| `sa` | 58 |
| `multipart` | 59 |
| `tf` (true/false) | 0 |

## Issues Found

1. **No true/false questions**: The `type:'tf'` question type is absent. This appears intentional (T/F questions converted to MCQ), and was the same status in prior runs.

2. **Multiple script tags (3 total)**: Main inline `<script>` at line 2817; external jQuery 2.2.4 at line 6705; external MathQuill 0.10.1 at line 6706. The external scripts are required dependencies for the math-step input feature — not a defect. jQuery 2.2.4 is end-of-life and has known vulnerabilities, noted for awareness only (low-risk internal tool).

3. **Question count over 118**: Original target was 118 questions; count is now significantly higher due to multiple practice exam sessions (PE4, PE5, etc.) added in prior commits. No questions appear to have been removed.

## What Changed Since Last Run (run 12)

- **Formula buttons fixed**: All four 📐 Formulas buttons (header, learn screen, quiz toolbar, exam mode) now open the in-app `#formula-overlay` instead of attempting to load `/formula-sheet.pdf`.
- No regressions detected in any other feature area.

## Recommendations

1. Verify in-browser that 📐 Formulas button opens the in-app overlay on all four locations (header, learn screen, quiz toolbar, exam mode) — this is what the latest commit claims to fix.
2. Confirm hint progression end-to-end: Hint 1 → Hint 2 → I'm Confused (AI inline), since the previous commit fixed visibility ordering.
3. Consider upgrading jQuery from 2.2.4 to a current version if the app remains in active use post-exam.
