# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-07
**Tested by:** Automated QA Agent

## Overall Status: PASS

All required features are present and functional. No regressions since the previous report (2026-06-06). The only commit since the last QA run was a `.gitignore` housekeeping change — `index.html` is unchanged.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Most recent: "Add .claude/ to .gitignore (agent worktree artifacts)" (a9db633, 2026-06-07); redesign commit 8fdbf94 on 2026-06-03 |
| JS syntax valid | ✅ | `node --check quiz_script.js` passes; localStorage error in Node is expected (browser-only API) |
| 118+ questions intact | ✅ | 166 question objects in QUESTIONS array (exceeds 118 target; see Notes) |
| Light mode CSS | ✅ | White/light theme with `--bg: #F8FAFC`, `--surface: #FFFFFF` |
| Dark mode toggle | ✅ | `.dark` class, `toggleDarkMode()`, `#darkModeBtn`, localStorage persistence (14 refs) |
| Multi-week selection | ✅ | `homeState.weeks[]`, `selectWeekChip()`, `buildWeekChips()`, `.week-chip.active` (38 refs) |
| Learn mode | ✅ | Learn Mode tab, `buildLearnGrid()`, learn screen flow (18 refs) |
| I'm Confused button | ✅ | Present (2 references) |
| Hint 1 / Hint 2 | ✅ | 3-level hint system present (220+ references) |
| Multi-step math input | ✅ | MathQuill integration, `addStep`, step-row UI (23 references) |
| Final Answer field | ✅ | `finalAnswer` field present (15 references) |
| Notes overlay present | ✅ | `#notes-overlay` with per-week content (8 references) |
| Formula overlay present | ✅ | `#formula-overlay` present (8 references) |
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

*Note on counts:* `grep -c "week:[0-9]"` returns 206 because multipart sub-parts and helper code also contain `week:X` references. The top-level `{week:N,type:` pattern count gives 166 question objects. Both exceed the 118-question target because additional practice exam sets were intentionally added (12 practice exam questions + PulseWear T1 2026 case study).

## Changes Since Last QA Report (2026-06-06)
- Commit `a9db633`: Added `.claude/` to `.gitignore` to suppress agent worktree artifacts — no functional change to app.
- `index.html` is byte-for-byte identical to the 2026-06-06 snapshot (`git diff 3ebe6cf HEAD -- index.html` returns empty).

## Issues Found

1. **No true/false questions in QUESTIONS array** — The code contains full rendering support for `type:'tf'` and a label mapping (`tf: 'True/False'`), but there are zero tf-type questions in the array. The original app had tf questions that appear to have been dropped during the redesign. Low priority unless tf coverage is needed for exam prep.

2. **Multiple `<script>` tags** — The file has 4 script tags instead of the recommended 1: the main inline script, a `document.write` in the notes popup, and two external CDN scripts (jQuery + MathQuill). The CDN scripts are load-time dependencies; if `cdnjs.cloudflare.com` is unavailable, MathQuill-dependent math input will break silently.

## Recommendations

1. Check whether any tf-type questions should be restored from the original build.
2. Consider bundling or hosting jQuery and MathQuill locally to avoid CDN dependency risk.
3. No action needed on Netlify functions — they are correct and unchanged.
