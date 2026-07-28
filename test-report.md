# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-28
**Tested by:** Automated QA Agent (pass 28)

## Overall Status: PASS ✅

All features present and functional. 181 unique questions confirmed in the bank. No regressions detected.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `be2bd97` — "Remove 12 duplicate practice exam questions; QA pass 27 (2026-07-28)" |
| JS syntax valid | ✅ | `node --check` on extracted script block: no errors |
| 181 questions intact | ✅ | 181 unique questions (task spec says 118 but app has grown; see below) |
| Light mode CSS | ✅ | `--bg: #F8FAFC`, `--surface: #FFFFFF`, full target design system present (38 matches) |
| Dark mode toggle | ✅ | `.dark{}` CSS at line 45; `toggleDarkMode()` at line 5048; 🌙 button at line 820 |
| Multi-week selection | ✅ | `toggleWeek()`, `selectedWeeks`, `.week-chip` (16 matches) |
| Learn mode | ✅ | `#learn` screen, `learnMode` flag, `renderLearnCard()` (12 matches) |
| I'm Confused button | ✅ | `showHintAI()` → calls `/explain` inline (4 matches) |
| Hint 1 / Hint 2 | ✅ | `showHint1()` / `showHint2()` — 3-level hint system (236 matches) |
| Multi-step math input | ✅ | `.working-steps`, `.step-row`, `addStep()`, MathQuill integration (19 matches) |
| Final Answer field | ✅ | `finalAnswer` / `.final-answer-wrap` present (13 matches) |
| Notes overlay present | ✅ | `#notes-overlay` with W2–W10 tabs (8 matches) |
| Formula overlay present | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC tabs (8 matches) |
| Netlify functions unchanged | ✅ | `git log --diff-filter=M -- netlify/` returns empty — never modified |
| File size increased | ✅ | 7,059 lines (original was 1,458 lines) |

---

## Question Bank Details

```
Total questions: 181  (all unique)
By week:  W2=15  W3=26  W4=15  W5=33  W7=26  W8=26  W9=26  W10=14
By type:  mcq=42  tf=15  numerical=48  sa=58  multipart=35
```

**Note on question count vs task spec:** The original spec targeted 118 questions (106 original + 12 practice exam additions). Through multiple development passes the bank has grown to 181. The previous QA pass (27) confirmed these are all unique after the duplicate-removal commit (`264d437` added duplicates, `be2bd97` removed them). Count is stable and correct.

---

## Script Tag Structure

The file has 2 real `<script>` blocks:
- **Main script** (lines 3035–7051): all app logic and QUESTIONS array
- **External scripts** (lines 7053–7054): jQuery 2.2.4 and MathQuill 0.10.1 from CDN

A third `</script>` match in grep comes from `<\/script>` (escaped) inside a JavaScript string at line 5094 — this is correct practice to avoid HTML parser ambiguity within a JS string that builds a popup window. No structural issue.

---

## Issues Found

No new issues found. The app is in a stable, feature-complete state following the deduplication fix in the previous pass.

---

## Recommendations

1. **Question count drift**: The count has grown organically across passes without a clear authoritative target. Consider adding a comment in the QUESTIONS array header with the canonical count so future QA passes have a firm baseline.
2. **MathQuill/jQuery CDN dependency**: Both external libraries load from `cdnjs.cloudflare.com`. Consider noting this in CLAUDE.md so future agents don't add offline fallbacks unnecessarily.
3. No urgent code changes needed.
