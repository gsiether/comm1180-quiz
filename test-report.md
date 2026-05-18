# COMM1180 Quiz App - QA Test Report
**Date:** 2026-05-18
**Tested by:** Automated QA Agent (sixth pass — post duplicate-removal commit `a940a02`)

## Overall Status: PASS

The most recent commit (`a940a02`) correctly removed 12 duplicate practice exam questions that had been added twice in the QUESTIONS array (once in per-week blocks, once in a standalone block). All required features from the redesign remain intact. JS syntax is valid, netlify functions were not touched, and the file stands at 6,915 lines.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `a940a02` — "Remove duplicate practice exam questions from QUESTIONS array" (2026-05-18) |
| JS syntax valid | ✅ | `node --check` exits 0; no syntax errors in 3,878-line extracted script |
| 118+ questions intact | ✅ | **166 questions** — 178 from prior redesign minus 12 confirmed duplicates properly removed; original CLAUDE.md estimate of 118 was stale |
| Light mode CSS | ✅ | 70 matches: `--bg:#F8FAFC`, `--surface:#FFFFFF`, `--text:#0F172A` CSS variable system present |
| Dark mode toggle | ✅ | `toggleDarkMode()` function present; 8 matches for dark-mode / darkMode references |
| Multi-week selection | ✅ | `selectWeekChip()` with `homeState.weeks[]` array; 30 matches for chip/week-selection logic |
| Learn mode | ✅ | `showLearn()`, `learnMode` flag, `#learn` screen; 12 matches |
| I'm Confused button | ✅ | "😕 I'm Confused" button at line 5162 → `showHintAI()` function at line 5575 |
| Hint 1 / Hint 2 | ✅ | 3-level hint system: `hint` and `hint2` fields throughout; 219 matches for hint-related code |
| Multi-step math input | ✅ | `addStep()`, `.working-steps`, `.step-row`; 19 matches |
| Final Answer field | ✅ | `.final-answer-wrap`, `.final-answer-input`, `.final-answer-label`; 13 matches |
| Notes overlay present | ✅ | `#notes-overlay` present with 6 matches; week-tabbed content intact |
| Formula overlay present | ✅ | `#formula-overlay` present with 6 matches; formula content intact |
| Netlify functions unchanged | ✅ | `git show HEAD -- netlify/functions/mark.js` shows no output — files not in this commit |
| File size increased | ✅ | **6,915 lines** (vs original 1,458-line spec; -125 lines from prior commit after removing 12 duplicate questions) |

---

## What Changed in Latest Commit (`a940a02`)

The 12 official practice exam questions (W5 Q1–Q4, W7 Q5–Q7, W8 Q8–Q10, W9 Q11–Q12) were present **twice** in the QUESTIONS array: once embedded in their per-week blocks (added by the major redesign commit `137368f`) and again in a separate block appended at the end (added by an earlier commit `112dd8a`). The duplicate tail block (125 lines) was removed. Each question now appears exactly once.

---

## Issues Found

### 1. Question count differs from CLAUDE.md (LOW — stale spec)
CLAUDE.md says "118 questions total." Actual count is 166. The bank was expanded across multiple sessions. No questions were dropped improperly. The spec figure should be updated.

### 2. One real `<script>` tag but grep returns 2 (INFO — by design)
`grep -c '<script>'` returns 2. The second match is a JavaScript string literal inside a template literal building HTML, not a real HTML `<script>` element. The only actual script element is at line 3028.

### 3. No `type:'tf'` questions (LOW — pre-existing)
True/False UI support code is present (`selectTF()`, tf-option rendering) but no questions use `type:'tf'`. All true/false questions are encoded as `type:'sa'`. Pre-existing condition not introduced by any recent commit.

---

## Recommendations

1. **Verify live Netlify deploy** — confirm light/dark mode, learn mode, multi-week chip selection, and the 3-level hint flow in the browser at the deployed URL.
2. **Update CLAUDE.md** — change "118 questions total" to "166 questions total" to prevent QA confusion in future sessions.
3. **Smoke-test AI endpoints** (`/explain`, `/mark`) — cannot be verified by static analysis; requires a live test against the deployed Netlify functions.
