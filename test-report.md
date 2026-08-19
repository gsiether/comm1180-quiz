# COMM1180 Quiz App - QA Test Report
**Date:** 2026-08-19
**Tested by:** Automated QA Agent (pass 57)

## Overall Status: PASS

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `5553c92` "QA report: automated code check (pass 56, 2026-08-18)" — no `index.html` changes since `02b5eb5` |
| JS syntax structure | ✅ | QUESTIONS array bounds verified (lines 3057–4645); no stray syntax detected |
| 118+ questions intact | ✅ | 181 top-level questions in QUESTIONS array (mcq:42, tf:15, numerical:48, sa:41 direct + sub-parts, multipart:35) |
| Light mode CSS | ✅ | Full design-token system present (`--bg: #F8FAFC`, `--surface: #FFFFFF`, etc.) |
| Dark mode toggle | ✅ | `toggleDarkMode()` function, `darkModeBtn` (🌙/☀️), `.dark` class toggle present |
| Multi-week selection | ✅ | `homeState.weeks[]` array + `selectWeekChip()` — toggle/all-chip logic confirmed |
| Learn mode | ✅ | `learnMode` (9 occurrences), `#learn` screen, "Learn Mode" tab |
| I'm Confused button | ✅ | "I'm Confused" button present — calls `showHintAI()` / AI explain endpoint |
| Hint 1 / Hint 2 | ✅ | `showHint1`, `showHint2`, `showHintAI` — 3-level hint system (503 hint occurrences) |
| Multi-step math input | ✅ | `addStep` (6 occurrences), `step-row`, `working-steps` CSS present |
| Final Answer field | ✅ | `final-answer-wrap` class + `final-answer-input` present |
| Notes overlay present | ✅ | `notes-overlay` (6 occurrences) with W2–W10 week tabs |
| Formula overlay present | ✅ | `formula-overlay` (6 occurrences) with CVP/TVM/NPV/Valuation/WACC sections |
| Practice exam Q1–Q12 | ✅ | APR/EAR, McDonald's NPV, AT&T EAA, Hush Puppies DDM, CAPM multi-company, WACC D/E — all found in QUESTIONS array |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` produced no output; last netlify touch was `aece6bd` (2026-07-17) |
| File size stable | ✅ | 7066 lines — unchanged from pass 56 |

## Question Count Detail

| Type | Count |
|------|-------|
| mcq | 42 |
| tf | 15 |
| numerical | 48 |
| sa | 41 (direct) + 17 (sub-parts in multipart) = 58 total |
| multipart | 35 |
| **Total top-level** | **181** |

QUESTIONS array confirmed at lines 3057–4645. No duplicates detected (fixed in commit `02b5eb5`).

## Practice Exam Questions Verified

All 12 practice exam questions confirmed present:
- **W5**: Q1 APR/EAR/FV (multipart), Q2 solve for r (numerical), Q3 deferred perpetuity (numerical), Q4 mortgage payment (numerical)
- **W7**: Q5 McDonald's NPV declining perpetuity (multipart), Q6 AT&T EAA bus models (multipart), Q7 NPV/IRR/PI/Payback 7-part (multipart)
- **W8**: Q8 bond pricing semi-annual (numerical), Q9 Hush Puppies multi-stage DDM (multipart), Q10 Gordon Growth Model (numerical)
- **W9**: Q11 CAPM multi-company 5-part (multipart), Q12 WACC with varying D/E ratios (multipart)

## Issues Found

No blocking issues.

1. **Question count note**: 181 top-level entries (vs 118 original baseline). Count is correct and stable — the bank grew through successive passes.
2. **`sa` count variation**: Python regex counting `week:\d+,type:'sa'` yields 41 direct; including multipart sub-parts yields ~58 total. Both are consistent with prior reports.

## Recommendations

No follow-up actions required. App is in a healthy, passing state across all checks.
