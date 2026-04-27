# COMM1180 Quiz App - QA Test Report
**Date:** 2026-04-27
**Tested by:** Automated QA Agent (run 5)

## Overall Status: PARTIAL

Most features are present and working. The question count (147) exceeds the expected 118 from the QA spec — this is likely from multiple redesign passes each adding the 12 practice exam questions, but warrants a duplicate audit. All critical features pass.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `524860e` "Fix multipart inputs to show full working areas per calculation target" |
| JS syntax valid | ✅ | `node -e` parse check passed cleanly |
| 118 questions intact | ⚠️ | Actual count: **147** (29 more than expected 118) — see Issues |
| Light mode CSS | ✅ | 56 matching lines; `--bg: #F8FAFC`, white surfaces, Inter font |
| Dark mode toggle | ✅ | `toggleDarkMode()` at line 3886; 🌙/☀️ toggle button in header |
| Multi-week selection | ✅ | `homeState.weeks[]` + `selectWeekChip()` at line 3622 (different var names than grep searched) |
| Learn mode | ✅ | 59 matching lines; `#learn` screen and learn mode tab present |
| I'm Confused button | ✅ | Present at line 4084; always visible, calls `showHintAI()` → `/explain` |
| Hint 1 / Hint 2 | ✅ | 154 matches; progressive hint system (`hint`, `hint2` fields used) |
| Multi-step math input | ✅ | 19 matches; `step-row`, `working-steps`, `addStep` patterns present |
| Final Answer field | ✅ | 13 matches; `finalAnswer` / `Final Answer` present |
| Notes overlay present | ✅ | 6 matches; `notes-overlay` structure confirmed |
| Formula overlay present | ✅ | 7 matches; `formula-overlay` structure confirmed |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` produced no output |
| File size increased | ✅ | **5170 lines** (vs original 1458 lines — 3.5× growth) |

---

## Question Count Detail

| Week | Count |
|------|-------|
| W2 | 13 |
| W3 | 20 |
| W4 | 13 |
| W5 | 27 |
| W7 | 21 |
| W8 | 21 |
| W9 | 21 |
| W10 | 11 |
| **Total** | **147** |

Type breakdown (within QUESTIONS array only): `mcq`=40, `numerical`=44, `sa`=49, `multipart`=28. Note: `type:'tf'` = 0 (TF CSS classes exist but no TF questions in array — consistent with all previous QA runs).

---

## Issues Found

1. **Question count is 147, not 118.** The QA spec expects 118 (original ~106 + 12 practice exam questions). The actual count of 147 is 29 above target. Multiple redesign commits (`f101ca1`, `7f16cbb`) each claimed to add the 12 practice exam questions — it's likely these were added multiple times or extra questions were generated. Recommend auditing for duplicates, particularly in W5 (27 questions) and W7/W8/W9 (21 each).

2. **I'm Confused button always visible — deviates from 3-level gated spec.** The CLAUDE.md spec calls for: Hint 1 → Hint 2 → Ask AI (gated). The current implementation shows the "I'm Confused" button alongside Hint 1 at all times (commit note: "I'm Confused button now always visible"). If gated progression was a design requirement, this is a spec deviation.

3. **No true/false (`tf`) questions in array.** The CSS for `.tf-options` and `.tf-option` is present and styled, but no questions use `type:'tf'`. Either this type was planned but not used, or these questions were written as MCQ instead. Not a blocker — dead CSS only.

---

## Recommendations

1. **Audit for duplicate questions** in W5, W7, W8, W9 — compare question text to identify any practice exam questions added more than once across rebuild commits.
2. **Confirm hint gating behaviour** with the app owner: always-visible "I'm Confused" vs. gated 3-level progression from the spec.
3. **Remove dead TF CSS** if no TF questions will be added, to keep the codebase clean.
4. **Deploy verification** — confirm the latest commit (`524860e`) has triggered a successful Netlify build and the live site reflects the multipart working-area fix.
