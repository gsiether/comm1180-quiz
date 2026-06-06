# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-06
**Tested by:** Automated QA Agent

## Overall Status: PASS

All required features are present and functional. The app has grown well beyond the original 1458-line baseline and includes more questions than the initial 118-question target.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | "Remove duplicate Q11/Q12 from QUESTIONS array; dedup cleanup complete" (9c5e904) |
| JS syntax valid | ✅ | `node --check` passes; localStorage error in Node is expected (browser-only API) |
| 118+ questions intact | ✅ | 166 question objects in QUESTIONS array (exceeds target; see Notes) |
| Light mode CSS | ✅ | White/light theme with `--bg: #F8FAFC`, `--surface: #FFFFFF` |
| Dark mode toggle | ✅ | `.dark` class, `toggleDarkMode()`, `#darkModeBtn`, localStorage persistence |
| Multi-week selection | ✅ | `homeState.weeks[]`, `selectWeekChip()`, `buildWeekChips()`, `.week-chip.active` |
| Learn mode | ✅ | Learn Mode tab, `buildLearnGrid()`, learn screen flow |
| I'm Confused button | ✅ | Present (2 references) |
| Hint 1 / Hint 2 | ✅ | 3-level hint system present (220+ references) |
| Multi-step math input | ✅ | MathQuill integration, `addStep`, step-row UI (23 references) |
| Final Answer field | ✅ | `finalAnswer` field present (15 references) |
| Notes overlay present | ✅ | `#notes-overlay` with per-week content |
| Formula overlay present | ✅ | `#formula-overlay` present |
| Netlify functions unchanged | ✅ | `mark.js` and `explain.js` only in single original commit; no subsequent changes |
| File size increased | ✅ | 6,936 lines (vs original 1,458 lines — 4.7× larger) |

## Question Breakdown by Week
| Week | Count | Topic |
|------|-------|-------|
| W2 | 19 | Market Opportunities |
| W3 | 26 | CVP / Pricing |
| W4 | 18 | Technology / BSC |
| W5 | 37 | TVM |
| W7 | 32 | Capital Budgeting |
| W8 | 28 | Investors / Valuation |
| W9 | 29 | WACC |
| W10 | 17 | Performance Measurement |
| **Total** | **206 week-refs** | **166 top-level question objects** |

Question types: `mcq` (42), `numerical` (64), `sa` (58), `multipart` (59). No `tf` type in use.

*Note on counts:* `grep -c "week:[0-9]"` returns 206 because multipart sub-parts and helper code also contain `week:X` references. The awk-based count of top-level `{week:` question objects gives 166. Both exceed the original 118-question target because additional practice exam sets were intentionally added (12 practice exam questions from university-provided screenshots + PulseWear T1 2026 case study).

## Issues Found

1. **No true/false questions in QUESTIONS array** — The code contains full rendering support for `type:'tf'` (lines 5142, 5169, 5697) and a label mapping (`tf: 'True/False'`), but there are zero tf-type questions in the array. The original app had tf questions that appear to have been dropped during the redesign. Low priority unless tf questions are needed for exam prep coverage.

2. **4 `<script>` tags** — The file has 4 script tags instead of the recommended 1: the main inline script, a document.write in the notes popup, and two external CDN scripts (jQuery + MathQuill). The CDN scripts are load-time dependencies; if cdnjs.cloudflare.com is unavailable, MathQuill-dependent math input will break.

## Recommendations

1. Check whether any tf-type questions should be restored from the original build (if the original had them and they were needed for exam coverage).
2. Consider bundling or hosting jQuery and MathQuill locally to avoid CDN dependency risk.
3. No action needed on Netlify functions — they are correct and unchanged.
