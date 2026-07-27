# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-27
**Tested by:** Automated QA Agent (pass 26)

## Overall Status: PARTIAL ⚠️

The app is fully functional with all required features present. However, the most recent commit (`264d437`) re-introduced **6 duplicate questions** from `practice-questions.md` that were already in the array from a prior session. These duplicates need to be removed.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `264d437 Add 12 practice exam questions from practice-questions.md` (2026-07-27) |
| JS syntax valid | ✅ | No syntax errors (`new Function()` parse check passed) |
| Question count | ⚠️ | 193 total; 6 are duplicates of already-present questions |
| Light mode CSS | ✅ | `--bg:#F8FAFC`, `--surface:#FFFFFF`, full target design system present |
| Dark mode toggle | ✅ | `toggleDarkMode()`, moon/sun button, `.dark {}` CSS override |
| Multi-week selection | ✅ | `selectWeekChip()`, `homeState.weeks[]`, `.week-chip.active` implemented |
| Learn mode | ✅ | `#learn` screen, `learnMode` flag, `renderLearnCard()` (71 matches) |
| I'm Confused button | ✅ | `showHintAI()` calls `/explain` function inline (3 matches) |
| Hint 1 / Hint 2 | ✅ | `showHint1()` / `showHint2()` — 3-level hint system working (246 matches) |
| Multi-step math input | ✅ | `.working-steps`, `.step-row`, `addStep()`, MathQuill integration |
| Final Answer field | ✅ | `finalAnswer` input / `.final-answer-wrap` present (13 matches) |
| Notes overlay present | ✅ | `#notes-overlay` with W2–W10 tabs and content |
| Formula overlay present | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC tabs |
| Netlify functions unchanged | ✅ | `mark.js` and `explain.js` only touched in initial commit (cff18ce) |
| File size increased | ✅ | 7,178 lines (vs original 1,458 lines) |

---

## Question Bank Details

```
Total questions: 193  (6 duplicates — effective unique: 187)
By week:  W2=15  W3=26  W4=15  W5=37  W7=29  W8=29  W9=28  W10=14
By type:  mcq=42  tf=15  numerical=53  sa=41  multipart=42
```

---

## Duplicate Questions Detected (6 of 12 in latest commit)

| Array Index | Week | Type | Question (excerpt) |
|-------------|------|------|--------------------|
| idx 181 | W5 | multipart | "A bank account offers a 16.0% APR with monthly compounding…" |
| idx 182 | W5 | numerical | "A saving account of $14,000 will be worth $30,000 in 10 years…" |
| idx 183 | W5 | numerical | "A perpetuity makes its first annual payment of $128 in 22 years…" |
| idx 184 | W5 | numerical | "You are thinking of purchasing a house. The house costs $300,000…" |
| idx 188 | W8 | numerical | "The yield to maturity of a $1,000 bond with a 7.2% coupon rate…" |
| idx 192 | W9 | multipart | "The Sandwich With A Pretty Big Pickle On It Corporation…" (WACC) |

The agent that ran commit `264d437` added all 12 practice exam questions without first checking whether they were already in the array. 6 of the 12 were already present from a prior session; only 6 were truly new additions.

---

## File Structure
| Check | Result |
|-------|--------|
| Starts with `<!DOCTYPE html>` | ✅ |
| Ends with `</html>` | ✅ |
| Main inline `<script>` block | ✅ (1 block, line 3035) |
| External `<script src>` tags | 2 — jQuery 2.2.4 and MathQuill 0.10.1 from Cloudflare CDN |

---

## Issues Found

### CRITICAL — 6 Duplicate Practice Exam Questions
Commit `264d437` re-added 6 questions already present in the array. The quiz engine may serve the same question twice in a session.

**Fix:** Remove array entries at indices 181–184, 188, 192 (the duplicates in the appended block near the end of `QUESTIONS`). Or revert `264d437` and re-add only the 6 truly new questions.

### MINOR — External CDN Dependencies
jQuery 2.2.4 and MathQuill 0.10.1 load from Cloudflare CDN. If the CDN is unavailable, MathQuill math input fields will break. Low priority for an exam prep app on a reliable network, but worth noting.

---

## Recommendations

1. **Remove the 6 duplicate questions** added in `264d437` — leaving the 187 unique questions already in the bank
2. Before any future question-addition commit, verify uniqueness: `node -e "..."` duplicate check as done in this report
3. Netlify functions are intact — no action needed there
