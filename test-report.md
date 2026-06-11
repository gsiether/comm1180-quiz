# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-11
**Tested by:** Automated QA Agent

## Overall Status: PARTIAL

The app is largely functional with all required features present and JS syntax clean. However, the QUESTIONS array contains **178 questions instead of the expected 118**, with **5 confirmed duplicate questions** introduced by repeated practice-question addition commits across multiple sessions.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `693ec73` — "Add 12 practice exam questions from official COMM1180 practice materials" (2026-06-11) |
| JS syntax valid | ✅ | `node --check` exited 0 — no parse errors |
| 118 questions intact | ❌ | **178 questions found** (60 over target; 5 confirmed duplicates) |
| Light mode CSS | ✅ | `--bg:#F8FAFC; --surface:#FFFFFF` in `:root`; `.dark{…}` override also present |
| Dark mode toggle | ✅ | `darkModeBtn` (🌙/☀️) calls `toggleDarkMode()`; state persisted in localStorage |
| Multi-week selection | ✅ | `.week-chip` grid with active-state toggling and "All" chip |
| Learn mode | ✅ | `learnMode` flag in `quizState`, Learn Mode tab, `#learn` screen, "Test yourself" button |
| I'm Confused button | ✅ | `hintBtnAI` renders `😕 I'm Confused` calling `showHintAI()` when hints enabled |
| Hint 1 / Hint 2 | ✅ | `hint` + `hint2` fields on questions; 3-level progressive hint reveal logic present |
| Multi-step math input | ✅ | `.working-steps`, `.step-row`, `addStep()` function; MathQuill CDN integrated |
| Final Answer field | ✅ | `.final-answer-wrap` + "Final Answer" label in CSS and HTML templates |
| Notes overlay present | ✅ | `#notes-overlay` at line 1153 with W2–W10 tabs and inline HTML content |
| Formula overlay present | ✅ | `#formula-overlay` at line 2445 with CVP/TVM/NPV/Valuation/WACC tabs |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` shows no changes; last touched in old pre-redesign commit |
| File size increased | ✅ | **7,061 lines** (up from ~1,458 lines original baseline) |

---

## Issues Found

### Issue 1 — Question Count Inflation (Significant)

**Expected:** 118 questions (106 original + 12 new practice questions)
**Actual:** 178 questions

The QUESTIONS array has accumulated 60 extra questions across multiple agent sessions. Git history analysis:

| Commit | Action | Net Effect |
|--------|--------|------------|
| `27c685c` | First practice-question add (+12) | ~118 |
| `d628905`, `9c5e904` | Dedup cleanup | back to ~106? |
| `8fdbf94` | Major redesign | unclear |
| `13172b0` | Re-added 12 questions | +12 |
| `56f3fd5` | Redesign removed them | −12 (now 166) |
| `693ec73` | Re-added 12 again | +12 = **178** |

The 166-question baseline before the latest add indicates prior redesign sessions added extra questions beyond the original 106. Net result: 60 excess questions.

### Issue 2 — Five Duplicate Questions Confirmed

`grep -o "question:'[^']*'" index.html | sort | uniq -d` identifies these exact duplicates:

1. PulseWear Balanced Scorecard (BSC) four-perspectives question
2. PulseWear market opportunity + Week 2 frameworks question
3. "Calculate NPV for each project" (capital budgeting)
4. McDonald's declining perpetuity NPV question
5. Weighted average contribution margin per unit (Week 3)

### Issue 3 — External Script Tags (Minor)

`grep -c '<script>' index.html` matches 2. The second match is a `<script>` tag inside a `w.document.write(...)` string (notes popup window — legitimate). External CDN tags for jQuery and MathQuill use `<script src=` (different pattern) and are required for math input functionality.

---

## Recommendations

1. **Deduplicate QUESTIONS array** (priority: high) — remove the 5 confirmed duplicate entries. A one-liner can identify them: `grep -o "question:'[^']*'" index.html | sort | uniq -d`

2. **Audit question count baseline** — determine whether the 166-question baseline (before latest add) is intentional or whether extra questions crept in from earlier sessions. If 178 is the correct target going forward, update CLAUDE.md accordingly.

3. **Add a question-count guard** — a `console.assert(QUESTIONS.length === N, ...)` at startup would prevent future agents silently inflating or deflating the bank.

4. **No changes needed to Netlify functions** — `mark.js` and `explain.js` are intact and untouched across all recent commits.
