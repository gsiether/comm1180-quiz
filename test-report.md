# COMM1180 Quiz App - QA Test Report
**Date:** 2026-05-14
**Tested by:** Automated QA Agent (second pass — post deduplication commit `b5c53fa`)

## Overall Status: PARTIAL

All required UI features are present and JS syntax is valid. However, the question count (166) still exceeds the expected 118, despite three deduplication commits. The count has been reduced from 173 (previous QA) to 166, so Q1–Q7 duplicates were successfully removed, but 48 excess questions remain.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `b5c53fa` — "Remove duplicate practice exam questions (Q1-Q7)" |
| JS syntax valid | ✅ | No errors (bracket-depth-aware parse, Function constructor check) |
| 118 questions intact | ❌ | **166 questions found** (expected 118, still 48 over target) |
| Light mode CSS | ✅ | Default light theme: `--bg:#F8FAFC`, `--surface:#FFFFFF`, full var set |
| Dark mode toggle | ✅ | `darkModeBtn`, `toggleDarkMode()`, 🌙/☀️ icons, localStorage persistence |
| Multi-week selection | ✅ | `selectWeekChip()` + `homeState.weeks[]` — multi-select with chip toggling |
| Learn mode | ✅ | `showLearn()`, `renderLearnCard()`, `#learn` screen, learnMode state flag |
| I'm Confused button | ✅ | "😕 I'm Confused" → `showHintAI()` → inline AI explanation box |
| Hint 1 / Hint 2 | ✅ | Full 3-level reveal: `showHint1()` → `showHint2()` → `showHintAI()` |
| Multi-step math input | ✅ | `addStep()`, `.working-steps`, `.step-row`, MathQuill integration |
| Final Answer field | ✅ | `.final-answer-wrap`, `.final-answer-label`, `.final-answer-input` |
| Notes overlay present | ✅ | `#notes-overlay` with week tabs, scrollable content, close button |
| Formula overlay present | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC content |
| Netlify functions unchanged | ✅ | `mark.js` and `explain.js` not modified in any recent commit |
| File size increased | ✅ | **6,711 lines** (was 1,458 lines — 4.6× increase) |

---

## Question Count Detail

Verified with a bracket-depth-aware JS parser (string-literal-safe count of `{week:` at depth 0 of the QUESTIONS array):

| Metric | Count |
|--------|-------|
| Total top-level questions | **166** |
| Expected total | 118 |
| Excess | +48 |
| MCQ type | 42 |
| TF type | 0 |
| Numerical type (top-level) | 48 |
| SA type | 58 |
| Multipart type | 35 |

Note: `grep -c` across the whole file over-reports counts because `{week:` also appears inside model answer strings. The parser-based count of 166 is authoritative.

---

## Issues Found

### 1. Question count still 48 over target after three dedup commits (HIGH PRIORITY)
The QUESTIONS array has 166 entries vs the expected 118. The most recent commit (`b5c53fa`) removed duplicates for Q1–Q7 (practice exam TVM and capital budgeting questions), reducing from 173 to 166. Practice exam Q8–Q12 (valuation and WACC questions, Weeks 8–9) likely still have duplicates and should be audited.

**Suggested next step:** Run the following to spot near-duplicate question text in weeks 8–9:
```
grep -n "week:8\|week:9" index.html | grep "question:" | sort
```

### 2. No true/false (TF) questions (LOW)
`type:'tf'` count is 0. The original app specification listed TF as a supported type. Either TF questions were never in this version's QUESTIONS array, or they were removed during the redesign.

### 3. "I'm Confused" hidden when hints disabled (minor/by design)
The AI explain button is gated on `settings.hints !== false && !quizState.examMode`. Users who turn off hints in Settings also lose the "I'm Confused" AI shortcut. May be intentional (exam mode parity), but worth confirming with the designer.

---

## Recommendations

1. **Deduplicate practice exam Q8–Q12** (Weeks 8 and 9 — Valuation, WACC). These weeks were not covered by the three previous dedup commits.
2. **Verify TF omission is intentional** — if true/false questions were part of the original bank, restore them.
3. **No changes needed to Netlify functions** — `mark.js` and `explain.js` are confirmed untouched.
4. **All 13 other checks pass** — the redesign is complete and functional. Once question count is corrected to 118, status should be updated to PASS.
