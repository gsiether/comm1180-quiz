# COMM1180 Quiz App - QA Test Report
**Date:** 2026-05-20
**Tested by:** Automated QA Agent

## Overall Status: PASS

The latest commit (`cf54ca7`) adds 12 practice exam questions as required — count went from 166 → 178. JS syntax is valid. All redesign features are present. Netlify functions are untouched.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `cf54ca7` — "Add 12 practice exam questions to QUESTIONS array (W5, W7, W8, W9)" |
| JS syntax valid | ✅ | `node --check` exits 0; no errors in extracted script |
| 12 new questions added | ✅ | Count: 166 → 178 (net +12, matches commit message) |
| Total question count | ⚠️ | 178 found; spec said 118 (see Issues section) |
| Light mode CSS | ✅ | 83 matches for white/light backgrounds; `--bg:#F8FAFC`, `--surface:#FFFFFF` present |
| Dark mode toggle | ✅ | `toggleDarkMode()` at line 5052; moon/sun button at line 820 |
| Multi-week selection | ✅ | `selectWeekChip()` + `homeState.weeks[]` at lines 4790–4824 |
| Learn mode | ✅ | `showLearn()`, `learnMode` flag, `#learn` screen — 68+ references |
| I'm Confused button | ✅ | `😕 I'm Confused` button at line 5285 → `showHintAI()` |
| Hint 1 / Hint 2 | ✅ | `hintBtn1`/`hintBtn2`, `showHint1()`/`showHint2()` at lines 5281–5670 |
| Multi-step math input | ✅ | MathQuill integrated; `addStep()`, `.step-row`, `.working-steps` at lines 5319–5456 |
| Final Answer field | ✅ | `.final-answer-wrap`, `.final-answer-label` at lines 5325–5326 |
| Notes overlay present | ✅ | `#notes-overlay` at line 1153 with week-tabbed content |
| Formula overlay present | ✅ | `#formula-overlay` at line 2439 |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` shows no changes |
| File size increased | ✅ | 7,038 lines (vs original ~1,458) |

---

## Issues Found

### 1. Question count is 178, not 118 (LOW — stale spec)
CLAUDE.md estimated 118 total questions (106 original + 12 new). The actual count is 178. This discrepancy reflects questions added across earlier sessions. The 12-question increment in this commit is correct. CLAUDE.md should be updated to reflect the actual count of 178.

### 2. No true/false (`type:'tf'`) questions exist (LOW — pre-existing)
`grep -c "type:'tf'"` returns 0. The question type `tf` is listed as supported in CLAUDE.md but no questions use it. All true/false content appears to be encoded as `type:'sa'`. Pre-existing condition; not introduced by this commit.

### 3. `grep` for `selectedWeeks`/`toggleWeek` returns 0 (INFO — naming mismatch only)
The QA spec's expected grep patterns (`selectedWeeks`, `selected-weeks`, `toggleWeek`) return 0 matches, but the multi-week selection feature is fully implemented under the names `selectWeekChip()` and `homeState.weeks[]`. This is a grep pattern issue in the QA spec, not a code defect.

### 4. Four `<script>` tag matches (INFO — by design)
`grep -c "<script"` returns 4: (1) main inline script at line 3028, (2) a `<script>` literal inside a `document.write()` string (not a real DOM element), (3) jQuery CDN at line 7032, (4) MathQuill CDN at line 7033. External CDN scripts are required for MathQuill math input and are not a defect.

---

## Recommendations

1. **Update CLAUDE.md** — change "118 questions total" to "178 questions total" to prevent QA confusion.
2. **Verify live Netlify deploy** — confirm the new W5/W7/W8/W9 practice questions appear correctly in the quiz and that multi-step math input works for these question types.
3. **Smoke-test AI endpoints** — `/explain` and `/mark` cannot be verified by static analysis; test against the deployed Netlify functions.
