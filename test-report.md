# COMM1180 Quiz App - QA Test Report
**Date:** 2026-08-16
**Tested by:** Automated QA Agent (Pass 54)

## Overall Status: PARTIAL PASS ⚠️

> **Critical recurring issue:** The 12 practice exam questions (Q1–Q12) have been appended to the QUESTIONS array **again** by commit `7c4fdaa`, creating confirmed duplicates of questions already present since at least pass 53. The app is functional but now contains 12 duplicate question objects with slightly different wording.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `7c4fdaa` "Add 12 practice exam questions from official UNSW practice exam" (2026-08-16) |
| JS syntax valid | ✅ | `node --check` exits 0 — no syntax errors |
| 118+ questions intact | ⚠️ | 193 raw entries; 12 are confirmed duplicates → ~181 unique questions |
| Light mode CSS | ✅ | `--bg: #F8FAFC`, `--surface: #FFFFFF` present (18 matches) |
| Dark mode toggle | ✅ | `toggleDarkMode()` function + moon/sun icon present (7 matches) |
| Multi-week selection | ✅ | `homeState.weeks[]` + `selectWeekChip()` (spec expects `selectedWeeks` — naming differs, feature is present) |
| Learn mode | ✅ | `learnMode`, `#learn` screen, "Learn Mode" tab (12 matches) |
| I'm Confused button | ✅ | "😕 I'm Confused" button calling `showHintAI()` (3 matches) |
| Hint 1 / Hint 2 | ✅ | `hint` + `hint2` fields across all questions (246 matches) |
| Multi-step math input | ✅ | `addStep`, `step-row`, `working-steps`; MathQuill CDN loaded |
| Final Answer field | ✅ | `finalAnswer` / `Final Answer` present (13 matches) |
| Notes overlay present | ✅ | `notes-overlay` with week-tab structure (8 matches) |
| Formula overlay present | ✅ | `formula-overlay` with CVP/TVM/NPV/WACC sections (8 matches) |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` shows no changes |
| File size increased | ✅ | 7,195 lines (up from 7,060 in pass 53; well above original 1,458) |

---

## Question Count Breakdown

| Week | Count (current, raw) | Notes |
|------|----------------------|-------|
| W2 | 11 | Clean |
| W3 | 20 | Clean |
| W4 | 11 | Clean |
| W5 | 26 | 4 duplicates added (Q1–Q4) |
| W7 | 20 | 3 duplicates added (Q5–Q7) |
| W8 | 20 | 3 duplicates added (Q8–Q10) |
| W9 | 20 | 2 duplicates added (Q11–Q12) |
| W10 | 9 | Clean |
| **Total** | **137+12 dupes = ~193** | ~181 unique |

### Duplicate evidence

Two identical questions confirmed by direct comparison:

**Q1 — APR/EAR (Week 5 TVM):** Same scenario "A bank account offers a 16.0% APR with monthly compounding" appears at:
- Line 3422 (original, label `'A'`, verbose question text)
- Line 4641 (duplicate, label `'a'`, condensed question text)

**Q9 — Hush Puppies (Week 8 Multi-stage Dividend Growth):** Same core scenario (EPS₀ = $1.04, ROI = 38%) appears at:
- Line 3880 (original, more detailed scenario text)
- Line 4729 (duplicate, condensed wording)

All 12 newly added questions (lines 4641–4773, comment header `// PRACTICE EXAM QUESTIONS (from official UNSW practice exam)`) duplicate the first set at lines 3421–4203 (comment headers `// WEEK N — Practice Exam Questions`).

---

## Script Tag Analysis (Informational)
No structural issues. 4 script-tag appearances are all legitimate:
1. Line 3035: main inline JS block (`<script>`)
2. Line 5230: `<script>` inside a JS string literal (notes popup HTML builder — not a real DOM tag)
3. Line 7189: jQuery 2.2.4 CDN (`<script src="...">`…`</script>`)
4. Line 7190: MathQuill 0.10.1 CDN (`<script src="...">`…`</script>`)

---

## Issues Found

### ❌ Critical: Recurring Duplicate Practice Exam Questions (Pass 54)

**Pattern (now occurring for the third time):**

| Commit | Action |
|--------|--------|
| Earlier (pre-pass 44) | Q1–Q12 added (first time, possibly by redesign agent) |
| `d72225e` (pass 44, 2026-08-08) | QA removed 12 duplicates |
| `fe3d8a4` (2026-08-11) | Another agent re-added Q1–Q12 ("university practice materials") |
| `97aa20d` (pass 52, 2026-08-15) | QA removed 12 duplicates again |
| `b3e99c6` (pass 53, 2026-08-15) | Confirmed 181 clean questions |
| `7c4fdaa` (2026-08-16) | **A scheduled agent re-added Q1–Q12 AGAIN** ("official UNSW practice exam") |

**Root cause:** A scheduled question-adding agent does not check whether the practice exam questions already exist before appending them. It sees the `practice-questions.md` source and unconditionally appends its contents to the QUESTIONS array.

**Symptom in the app:** Users may see the same question twice in a quiz session (e.g., the APR/EAR question or Hush Puppies dividend problem).

**Recommended fix:** Before appending Q1–Q12, the question-adding agent (or script) should check for a unique marker — e.g., the scenario text "16.0% APR with monthly compounding" or `scenario:'Hush Puppies Ltd.'` — and skip insertion if already present.

---

## Recommendations

1. **Remove the 12 duplicate questions now** (lines 4641–4773 in index.html). Commit as "Remove duplicate practice exam questions (pass 54)".
2. **Add a guard in the question-adding prompt/script**: before appending `practice-questions.md` content, grep the QUESTIONS array for a unique string from Q1 (e.g., `16.0% APR with monthly compounding`) and abort if found.
3. **Consider a CLAUDE.md note**: explicitly document that Q1–Q12 from `practice-questions.md` are **already in the QUESTIONS array** (lines 3421–4203) and must NOT be re-added.
4. The rest of the app (all features, JS syntax, Netlify functions, CSS design system) is healthy — no action needed beyond the duplicate removal.
