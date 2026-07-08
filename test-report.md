# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-08
**Tested by:** Automated QA Agent

## Overall Status: PASS

All required features confirmed present. JS syntax clean. 166 top-level questions in QUESTIONS array (well above the 118 + 12 target). Most recent non-QA commit: `a1307d5` — Fix W7 NPV keyword bug (2026-07-08). Redesign was completed at `56f3fd5` and subsequent commits.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `a1307d5` "Fix W7 NPV keyword bug" (2026-07-08); redesign at `56f3fd5` |
| JS syntax valid | ✅ | `node -e new Function(script)` — no errors; `<\/script>` in string is a false positive |
| ≥118 questions intact | ✅ | **166 top-level questions** (lines 3057–4524); W2=15, W3=23, W4=15, W5=30, W7=23, W8=23, W9=23, W10=14 |
| Light mode CSS | ✅ | `:root` has `--bg:#F8FAFC`, `--surface:#FFFFFF`, `--text:#0F172A`; Inter font via Google Fonts |
| Dark mode toggle | ✅ | `darkModeBtn` (🌙/☀️) calls `toggleDarkMode()`; applies `.dark` on `<html>`; persisted in localStorage |
| Multi-week selection | ✅ | `.week-chip` grid + `selectWeekChip()` toggles `homeState.weeks[]`; supports multi-select and "All" toggle |
| Learn mode | ✅ | `#learn` screen; `quizState.learnMode`; "📚 Learn Mode" tab; "Test yourself" button |
| I'm Confused button | ✅ | `😕 I'm Confused` calls `showHintAI()` → `/explain` Netlify function + local fallback |
| Hint 1 / Hint 2 | ✅ | `hintBtn1`/`hintBtn2` with sequential reveal; `showHint1()`→`showHint2()`→AI 3-level flow |
| Multi-step math input | ✅ | `.working-steps`, `.step-row`, `addStep()`, `addStepAfter()`, `+ Add Step` button; MathQuill-backed |
| Final Answer field | ✅ | `.final-answer-wrap` + `.final-answer-label` + `.final-answer-input`; present in numerical/multipart |
| Notes overlay present | ✅ | `#notes-overlay` at line 1153; W2–W10 tabs; pop-out window option |
| Formula overlay present | ✅ | `#formula-overlay` at line 2445; tabs: W3 CVP / W5 TVM / W7 NPV / W8 Valuation / W9 WACC |
| Netlify functions unchanged | ✅ | `mark.js` (136 lines) and `explain.js` (79 lines) intact; model `claude-haiku-4-5-20251001` confirmed |
| File size increased | ✅ | **6,944 lines** vs original 1,458 lines — 4.75× growth |

---

## Question Bank Breakdown
| Week | Count | Topic |
|------|-------|-------|
| W2 | 15 | Market Opportunities |
| W3 | 23 | CVP / Pricing |
| W4 | 15 | Technology / BSC |
| W5 | 30 | TVM |
| W7 | 23 | Investment / Capital Budgeting |
| W8 | 23 | Investors / Valuation |
| W9 | 23 | WACC |
| W10 | 14 | Performance Measurement |
| **Total** | **166** | Top-level question objects |

**Question types (within QUESTIONS array, lines 3057–4524):**
`mcq`:42, `numerical`:48, `sa`:58, `multipart`:35, `tf`:0
(Type count exceeds 166 because multipart sub-parts each carry a `type:` property.)

---

## Issues Found

### Minor — No true/false (`tf`) questions
Zero `type:'tf'` entries in the QUESTIONS array despite `tf` being a supported render type. The original CLAUDE.md lists `tf` as one of the question types. Not a blocker for exam prep but reduces variety.

### Note — `grep -c "week:[0-9]" index.html` returns 206, not 118
The QA checklist expected 118, which was the pre-redesign baseline. The correct figure is 166 unique question objects. The raw file-wide grep inflates the count because `week:` also appears in `WEEKS{}`, `NOTES{}`, and `FORMULA_MAP{}` objects. No defect.

### Note — External CDN dependencies
jQuery 2.2.4 and MathQuill 0.10.1 loaded from `cdnjs.cloudflare.com`. Math input breaks offline or if CDN is unavailable. Low risk for a supervised exam environment.

---

## Changes Made This Run
- Refreshed QA report with findings from 2026-07-08 automated code check
- No code changes required; all features verified present and intact
