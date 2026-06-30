# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-30
**Tested by:** Automated QA Agent

## Overall Status: PASS (1 bug found and fixed)

All 7 requested features (light/dark mode, multi-week selection, comprehensive notes,
improved formula sheet, multi-step math working area, Learn Mode + 3-tier hints, and
the 12 practice exam questions) were already implemented in prior sessions. This run
independently re-verified the implementation rather than re-doing it, and found a real
regression that previous "PASS" QA reports had missed.

---

## Bug found: duplicate practice exam questions

The 12 practice-exam questions (from `practice-questions.md`) existed **twice** inside
the `QUESTIONS` array:
- First copy: added by commit `693ec73` under `// WEEK 5/7/8/9 — Practice Exam Questions` comments (full-text version with placeholder blanks, labels `A`/`B`/...).
- Second copy: added later by commit `df29682` under `// ── PRACTICE EXAM QUESTIONS (from practice-questions.md) ──` (shorter wording, labels `a`/`b`/...).

A prior commit (`5d4419e "Remove duplicate practice exam questions"`) had already tried
to fix an earlier instance of this problem, but `df29682` reintroduced it the next day.
Daily QA reports since then checked "are the 12 questions present" but never checked
"are they present more than once," so the regression went undetected for several days.

**Impact:** any quiz pulling from Weeks 5/7/8/9 had a chance of serving the same
question content twice in one session (worded slightly differently each time),
wasting study time and skewing week-level question counts.

**Fix:** removed the second (later, redundant) copy — 189 lines, the entire
`// ── PRACTICE EXAM QUESTIONS (from practice-questions.md) ──` block — keeping the
original fuller-text version. Verified zero duplicate question/scenario text remains
across the array by comparing first-100-char keys of every entry.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| JS syntax valid | ✅ | `node --check` exits 0 on extracted `<script>` block |
| No duplicate questions | ✅ (was ❌) | 0 duplicate pairs after fix (was 4 pairs / 5 entries) |
| Question count | ✅ | 166 unique top-level questions (178 before dedup) |
| Light mode CSS | ✅ | `--blue:#4F46E5` indigo accent, white/off-white surfaces, Inter font |
| Dark mode toggle | ✅ | `toggleDarkMode()` + `#darkModeBtn`, persists via `localStorage` |
| Multi-week selection | ✅ | `homeState.weeks[]`, `startQuiz(homeState.weeks)` accepts an array |
| Learn mode | ✅ | `#learn` screen, `learnMode`, populated from question hint/explanation fields |
| 3-tier hint system | ✅ | Hint 1 → Hint 2 → "I'm Confused" (AI explain + local fallback) |
| Multi-step math input | ✅ | `addStep` / `.working-steps` / `.step-row`, distinct "Final Answer" field |
| Notes overlay | ✅ | Full W2–W10 tabs with overview/definitions/formulas/exam tips/approach steps |
| Formula overlay | ✅ | Sectioned by week/topic, plain-English "use this when" notes |
| Netlify functions unchanged | ✅ | 0 lines of diff on `netlify/functions/` |

---

## Question Type / Week Breakdown (post-fix, 166 total)
| Week | Count |
|------|-------|
| 2 | 15 |
| 3 | 23 |
| 4 | 15 |
| 5 | 30 |
| 7 | 23 |
| 8 | 23 |
| 9 | 23 |
| 10 | 14 |

---

## Other observation (not a code bug, flagged for the user)

`CLAUDE.md` lists the exam date as **Tuesday 5 May 2026**. Today's date is
**30 June 2026** — almost two months after the exam. This automated daily routine
has kept running and committing changes well past the exam date. Worth confirming
whether this routine should still be active.
