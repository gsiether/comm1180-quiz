# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-12
**Tested by:** Automated QA Agent

## Overall Status: PARTIAL

All required features are present and JS syntax is clean. However, **no redesign agent ran today** — the most recent commit is a QA report from 2026-06-11 (yesterday); `index.html` was last modified by commit `693ec73` on 2026-06-11. Additionally, the QUESTIONS array remains at **178 questions instead of the expected 118**, with **5 confirmed duplicate questions** that have persisted across multiple sessions.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists (today) | ❌ | Last commit is `4a698f8` — QA report only, dated 2026-06-11. No redesign commit for 2026-06-12. |
| JS syntax valid | ✅ | `new Function()` parse succeeded — no syntax errors |
| 118 questions intact | ❌ | **178 questions found** (42 mcq, 0 tf, 53 numerical, 41 sa, 42 multipart); 5 confirmed duplicates |
| Light mode CSS | ✅ | `--bg:#F8FAFC; --surface:#FFFFFF` in `:root`; `.dark{…}` override present |
| Dark mode toggle | ✅ | `darkModeBtn` calls `toggleDarkMode()` at line 5075; state persisted in localStorage |
| Multi-week selection | ✅ | `.week-chip` grid with active-state toggling and "All" chip |
| Learn mode | ✅ | `learnMode` flag in `quizState`, Learn Mode tab, `#learn` screen, "Test yourself" button |
| I'm Confused button | ✅ | `hintBtnAI` renders `😕 I'm Confused` calling `showHintAI()` when hints enabled |
| Hint 1 / Hint 2 | ✅ | `hint` + `hint2` fields on questions; 3-level progressive hint reveal logic present |
| Multi-step math input | ✅ | `.working-steps`, `.step-row`, `addStep()` function; MathQuill CDN integrated |
| Final Answer field | ✅ | `.final-answer-wrap` + "Final Answer" label in CSS and HTML templates |
| Notes overlay present | ✅ | `#notes-overlay` at line 1153 with W2–W10 tabs and inline HTML content |
| Formula overlay present | ✅ | `#formula-overlay` at line 2445 with CVP/TVM/NPV/Valuation/WACC tabs |
| Netlify functions unchanged | ✅ | `git diff HEAD -- netlify/` shows 0 lines changed; functions untouched since initial build |
| File size increased | ✅ | **7,061 lines** (up from ~1,458 lines original baseline) |

---

## Issues Found

### Issue 1 — No Redesign Agent Ran Today (Critical)

The task expects a redesign agent to have run and committed changes to `index.html` before this QA pass. The git log shows no such commit for today (2026-06-12):

```
4a698f8  2026-06-11  QA report: automated code check (2026-06-11)   ← HEAD
693ec73  2026-06-11  Add 12 practice exam questions ...              ← last index.html change
c9234aa  2026-06-10  QA report: automated code check
56f3fd5  2026-06-10  Major redesign: ...
```

The working tree is clean with no uncommitted changes. Either the redesign agent did not run, or it ran and produced no output. This QA pass is therefore re-auditing the same codebase state as the 2026-06-11 report.

### Issue 2 — Question Count Inflation (Significant, Persistent)

**Expected:** 118 questions (106 original + 12 new practice questions)
**Actual:** 178 questions (42 mcq / 53 numerical / 41 sa / 42 multipart)

This has been flagged in every QA report since 2026-06-09. The QUESTIONS array accumulated 60 extra questions from repeated practice-question add commits across multiple agent sessions. Net commit history:

| Commit | Action | Net Effect |
|--------|--------|------------|
| `8fdbf94` | Major redesign (added extras) | ~166 |
| `13172b0` | Add 12 practice Qs | ~178 |
| `56f3fd5` | Redesign (stripped practice Qs) | ~166 |
| `693ec73` | Re-added 12 practice Qs | **178** |

### Issue 3 — Five Duplicate Questions Confirmed (Persistent)

Exact duplicates still present (confirmed via `sort | uniq -d`):

1. PulseWear Balanced Scorecard four-perspectives question
2. PulseWear market opportunity + Week 2 frameworks question
3. "Calculate NPV for each project" (capital budgeting)
4. McDonald's declining perpetuity NPV question
5. Weighted average contribution margin per unit (Week 3)

### Issue 4 — No `type:'tf'` Questions (Minor)

There are 0 true/false questions in the bank. If this was an intentional removal (all converted to MCQ), CLAUDE.md should be updated to remove `tf` from the supported question types list.

---

## Recommendations

1. **Investigate why redesign agent did not run today** (priority: critical) — check the pipeline/trigger for the redesign agent for 2026-06-12.

2. **Deduplicate QUESTIONS array** (priority: high) — 5 duplicate questions remain from prior sessions. These should be removed before the exam date (2026-05-05 has passed; still relevant for ongoing use).

3. **Fix question count baseline** (priority: high) — the 178 count has drifted significantly from the 118 target. Either revert to 118 by removing 60 inflated questions, or update CLAUDE.md to reflect 178 as the new canonical count so future QA agents stop flagging it.

4. **Add a question-count guard** — add `console.assert(QUESTIONS.length === N, 'Question bank drift detected')` at startup to prevent future agents silently inflating the bank.

5. **No changes needed to Netlify functions** — `mark.js` and `explain.js` are intact and untouched since the initial build.
