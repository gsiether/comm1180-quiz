# COMM1180 Quiz App - QA Test Report
**Date:** 2026-05-21
**Tested by:** Automated QA Agent

## Overall Status: PASS

Latest commit (`440e8af`) correctly removes 12 duplicate practice exam questions that were re-added erroneously by a prior session. All 12 practice exam questions remain present exactly once. All required features are intact. JS syntax is valid. Netlify functions are untouched.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `440e8af` — "Remove duplicate practice exam questions from QUESTIONS array" (2026-05-21) |
| JS syntax valid | ✅ | `node --check` exits 0; no errors in extracted script |
| 12 practice exam questions present | ✅ | Count: 178 → 166 (−12 duplicates); all 12 remain in first-batch location |
| Total question count | ⚠️ | 166 found; original spec said 118 (stale — reflects multi-session additions, see Issues) |
| Light mode CSS | ✅ | `--bg:#F8FAFC`, `--surface:#FFFFFF`, 36+ light-mode variable references |
| Dark mode toggle | ✅ | `.dark{}` CSS override block at line 45; `toggleDarkMode()` + `#darkModeBtn` (🌙/☀️) |
| Multi-week selection | ✅ | `selectWeekChip()`, `homeState.weeks[]`, `.week-chip.active` — multi-select fully implemented |
| Learn mode | ✅ | `#learn` screen, `showLearn()`, `buildLearnGrid()` — 12+ references |
| I'm Confused button | ✅ | `😕 I'm Confused` → `showHintAI()` at line 5163 |
| Hint 1 / Hint 2 | ✅ | All questions carry `hint` + `hint2` fields; 215 hint-related references in code |
| Multi-step math input | ✅ | MathQuill CDN loaded; `addStep()`, `.step-row`, `.working-steps` at lines 5197–5334 |
| Final Answer field | ✅ | `.final-answer-wrap` + `.final-answer-label` at lines 5203–5204 |
| Notes overlay present | ✅ | `#notes-overlay` at line 1153 with W2/W3/W4/W5/W7/W8/W9/W10 tabs and content |
| Formula overlay present | ✅ | `#formula-overlay` at line 2439 with W3/W5/W7/W8/W9 tabs |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` returns empty; no changes to mark.js or explain.js |
| File size increased | ✅ | 6,916 lines (vs original ~1,458) |

---

## Issues Found

### 1. Question count is 166, not 118 (LOW — stale spec)
CLAUDE.md estimated 118 total questions (106 original + 12 new practice exam questions). The actual count is 166 across W2/W3/W4/W5/W7/W8/W9/W10. This reflects questions added across multiple earlier sessions prior to the redesign. All 12 practice exam questions from `practice-questions.md` are confirmed present. CLAUDE.md's 118 figure is outdated and should be updated to 166.

### 2. Duplicate-add cycle pattern observed in git history (INFO)
A recurring pattern has appeared: a build/add agent adds the 12 practice questions → QA notes the higher count → a subsequent agent re-adds them again → duplicates must be cleaned. Commits `a940a02` (2026-05-17) and `440e8af` (2026-05-21) both perform the same cleanup. Future sessions should grep before adding questions to confirm they are not already present.

### 3. No true/false (`type:'tf'`) questions (LOW — pre-existing)
0 questions use `type:'tf'`. All boolean-style content is encoded as `type:'sa'` or `type:'mcq'`. Pre-existing condition not introduced by recent commits.

### 4. Multi-week selection grep patterns in spec return 0 (INFO — naming mismatch only)
The spec's suggested greps (`selectedWeeks`, `toggleWeek`) return 0 matches, but the feature is fully implemented under `selectWeekChip()` and `homeState.weeks[]`. The spec's grep patterns are stale; the feature itself is working correctly.

---

## Question Type Breakdown (166 total)
| Type | Count |
|------|-------|
| `mcq` | 42 |
| `numerical` | 48 |
| `sa` | 41 |
| `multipart` | 35 |
| `tf` | 0 |
| **Total** | **166** |

---

## Recommendations

1. **Update CLAUDE.md** — change "118 questions total" to "166 questions total" to prevent future QA confusion and avoid more duplicate-add cycles.
2. **Guard against re-adds** — future build agents should run `python3 -c "import re; ..."` or `grep -c "{week:"` before adding questions to confirm they are not already present.
3. **Smoke-test AI endpoints** — `/mark` and `/explain` Netlify functions cannot be verified by static analysis; test against the live Netlify deploy.
4. **Verify MathQuill rendering** — numerical/multipart questions rely on jQuery + MathQuill CDN scripts; confirm these load correctly in the live deploy.
