# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-26
**Tested by:** Automated QA Agent (pass 25)

## Overall Status: PARTIAL ⚠️

Critical issue: The latest commit (`e13387c`) **re-added the 12 practice exam questions** (Q1–Q12) that were already present in the QUESTIONS array, creating **duplicate questions**. All other features remain intact.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `e13387c Add 12 practice exam questions from university practice exam (W5/W7/W8/W9)` |
| JS syntax valid | ✅ | `node --check` on extracted script — no errors, exit code 0 |
| 193 questions present | ⚠️ | 193 questions found; 12 are DUPLICATES of questions already in the array (prev pass: 181) |
| Light mode CSS | ✅ | `:root` defines `--bg:#F8FAFC`, `--surface:#FFFFFF`, full variable system |
| Dark mode toggle | ✅ | `toggleDarkMode()` + `#darkModeBtn` moon/sun button + `.dark {}` CSS override |
| Multi-week selection | ✅ | `homeState.weeks[]` + `selectWeekChip()` — multi-week selection supported |
| Learn mode | ✅ | `#learn` screen, `learnMode` flag, `renderLearnCard()` present |
| I'm Confused button | ✅ | `showHintAI()` — calls `/explain` Netlify function inline |
| Hint 1 / Hint 2 | ✅ | `showHint1()` / `showHint2()` — 3-level hint system working |
| Multi-step math input | ✅ | `.working-steps`, `.step-row`, `addStep()` — MathQuill multi-step input |
| Final Answer field | ✅ | `.final-answer-wrap` CSS class present |
| Notes overlay present | ✅ | `notes-overlay` div; W2–W10 content; pop-out window |
| Formula overlay present | ✅ | `formula-overlay` div; tabbed formula sheet |
| Netlify functions unchanged | ✅ | Both `mark.js` and `explain.js` unchanged; `git diff HEAD~1 -- netlify/` empty |
| File size increased | ✅ | 7,192 lines (vs original 1,458; vs pass 24: 7,062) |

## Question Breakdown
| Week | Topic | Count | vs Pass 24 | Issue |
|------|-------|-------|-----------|-------|
| W2 | Value Creation | 15 | 15 | ✅ |
| W3 | CVP Analysis | 26 | 26 | ✅ |
| W4 | Balanced Scorecard | 15 | 15 | ✅ |
| W5 | Time Value of Money | 37 | 33 | ⚠️ +4 duplicates |
| W7 | Capital Budgeting | 29 | 26 | ⚠️ +3 duplicates |
| W8 | Valuation | 29 | 26 | ⚠️ +3 duplicates |
| W9 | Risk & WACC | 28 | 26 | ⚠️ +2 duplicates |
| W10 | Integration | 14 | 14 | ✅ |
| **Total** | | **193** | **181** | **⚠️ 12 duplicates** |

## Duplicate Questions Detected
The following question snippets appear **twice** in the QUESTIONS array:

1. `How much would a $700 investment be worth after 1 year?` (W5 Q1 multipart part b)
2. `A saving account of $14,000 will be worth $30,000 in 10 years…` (W5 Q2)
3. `A perpetuity makes its first annual payment of $128 in 22 years…` (W5 Q3)
4. `You are thinking of purchasing a house. The house costs $300,000…` (W5 Q4)
5. `Calculate NPV for each project.` (W7 Q7 part c)
6. `Thus, the IRR of the project must be less than 9.5%. True or False?` (W7 Q5 part b)
7. `The yield to maturity of a $1,000 bond with a 7.2%…` (W8 Q8)
8. `What beta for Lemon LLC would make investor expect…` (W9 Q11 part b)
9. `Given the expected market return in A), what is th…` (W9 Q11 part c)
10. `Given the expected market return in A), are shares…` (W9 Q11 part d)

## File Structure
| Check | Result |
|-------|--------|
| Starts with `<!DOCTYPE html>` | ✅ |
| Ends with `</html>` | ✅ |
| Inline `<script>` block | 1 main block (line 3035) |
| External `<script src>` tags | 2 (jQuery 2.2.4 + MathQuill 0.10.1 from cdnjs) |

## Issues Found

### CRITICAL — Duplicate Practice Exam Questions
The redesign/content agent (`e13387c`) re-added Q1–Q12 from `practice-questions.md` even though these questions were already in the array from a prior session. The QUESTIONS array now contains 12 duplicate question objects spread across W5/W7/W8/W9.

**Effect on users:** The quiz engine will serve the same questions twice within a session, reducing variety and potentially confusing students who encounter the same question twice.

**Root cause:** The agent was not aware (or did not verify) that Q1–Q12 were already present before inserting them.

## Recommendations

### Immediate Fix Required
Remove the 12 duplicate questions from the QUESTIONS array. The duplicates are clearly delineated in the source — the latest commit added a `// ── PRACTICE EXAM QUESTIONS (University-provided) ──` section. Since all content in that section also exists earlier in the array, the entire added block should be removed.

**Steps to fix:**
1. `git revert e13387c` — this will remove the duplicate block cleanly, restoring 181 questions
2. Or manually delete the `// ── PRACTICE EXAM QUESTIONS` block (added near end of QUESTIONS array)
3. Push the fix and confirm question count returns to 181
