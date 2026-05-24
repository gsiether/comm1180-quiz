# COMM1180 Quiz App - QA Test Report
**Date:** 2026-05-24
**Tested by:** Automated QA Agent

## Overall Status: PASS ✅

All critical features are present and functional. The redesign agent ran successfully. The question count exceeds the original 118 target (now 166) due to deliberate additions of new practice-aligned questions across multiple commits — this is a content improvement, not a defect.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Most recent: `f0b272f QA report: automated code check (2026-05-23)`. Major redesign at `137368f` on 2026-05-16 |
| JS syntax valid | ✅ | `node --check` exits 0. `localStorage` error on Node runtime is expected (browser API) |
| Questions intact (≥118) | ✅ | **166 questions** — started at 117, grew via practice exam additions and 20 new practice-aligned questions |
| Light mode CSS | ✅ | Default theme uses `--bg:#F8FAFC`, `--surface:#FFFFFF` (light/white) |
| Dark mode toggle | ✅ | `.dark` CSS class at line 45, `toggleDarkMode()` function at line 4930, button at line 820 |
| Multi-week selection | ✅ | `homeState.weeks[]` array, `selectWeekChip()`, week chips with `.active` toggling at lines 4668–4702 |
| Learn mode | ✅ | `#learn` screen, `showLearn()`, `quizState.learnMode`, Learn Mode tab at line 842 |
| I'm Confused button | ✅ | `😕 I'm Confused` button in hint system at line 5163 |
| Hint 1 / Hint 2 | ✅ | 215 occurrences of hint1/hint2/Hint 1/Hint 2 references throughout |
| Multi-step math input | ✅ | `.working-steps`, `.step-row`, `addStep()` function, `+ Add Step` button at lines 5197–5289 |
| Final Answer field | ✅ | `finalAnswer`/`final-answer`/`Final Answer` present (13 occurrences) |
| Notes overlay present | ✅ | `#notes-overlay` div at line 1153, tab `n-w2` at line 1173, content starting at line 1195 |
| Formula overlay present | ✅ | `#formula-overlay` at line 2439, tabs `f-cvp`, `f-tvm` etc. at lines 2456–2471 |
| Netlify functions unchanged | ✅ | Both `mark.js` and `explain.js` last modified only in initial commit (`36fe9da`) — never touched since |
| File size increased | ✅ | **6,916 lines** (original was 1,458 lines — 4.7× growth) |

---

## Question Breakdown by Week

| Week | Count | Topic |
|------|-------|-------|
| W2 | 15 | Market Opportunities |
| W3 | 23 | CVP/Pricing |
| W4 | 15 | Technology/BSC |
| W5 | 30 | TVM |
| W7 | 23 | Investment/Capital Budgeting |
| W8 | 23 | Investors/Valuation |
| W9 | 23 | WACC |
| W10 | 14 | Performance Measurement |
| **Total** | **166** | |

---

## Question Type Distribution

| Type | Count (raw grep) |
|------|-------|
| `mcq` | 42 |
| `numerical` | 64 |
| `sa` | 58 |
| `multipart` | 59 |

> Note: `type:` counts from grep are higher than the total question count because multipart questions contain nested `type:` references in their parts arrays. Total top-level questions = 166 (verified by Python parsing of the QUESTIONS array from line 3050 to 4518).

---

## Issues Found

1. **Question count discrepancy vs spec**: The QA spec expects 118 questions but the current file has 166. This is because redesign and subsequent commits deliberately added more questions (20 new practice-aligned questions, practice exam questions). The QUESTIONS array is well-formed and not truncated — this is an intentional content enhancement, not a defect.

2. **Multiple `<script>` tags**: There are 3 `<script>` tag lines — the main inline script (line 3028), a jQuery CDN script (line 6910), and a MathQuill CDN script (line 6911). This is by design (MathQuill requires jQuery). The single main application script is intact.

3. **No `type:'tf'` (true/false) questions**: The original spec mentions `tf` as a question type but 0 are present. This appears to be the pre-existing state — not a regression introduced by the redesign.

---

## Recommendations

1. Update `CLAUDE.md` to reflect the actual question count (166, not 118) so future QA agents use the correct target.
2. Consider verifying the app deploys cleanly on Netlify — the `ANTHROPIC_API_KEY` environment variable must be set in the Netlify dashboard for AI marking/explain features to work.
3. The exam date in `CLAUDE.md` (Tuesday 5 May 2026) has now passed. Update the CLAUDE.md if the app continues to be used for future cohorts.
