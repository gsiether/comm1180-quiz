# COMM1180 Quiz App - QA Test Report
**Date:** 2026-09-22
**Tested by:** Automated QA Agent
**Pass number:** 95

## Overall Status: PASS

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Latest: "QA report: automated code check (pass 94, 2026-09-21)"; redesign commit: 0c7ba09 "Major redesign: light mode, multi-week, learn mode..." |
| JS syntax valid | ✅ | `new Function()` parse succeeded — no syntax errors |
| ~181 questions intact | ✅ | 181 top-level `{week:` objects counted (matches CLAUDE.md target of 181) |
| Light mode CSS | ✅ | 105 matches for `light\|#ffffff\|--bg` etc. |
| Dark mode toggle | ✅ | 7 matches for `darkMode\|dark-mode\|darkToggle` |
| Multi-week selection | ✅ | 19 matches for `selectedWeeks\|toggleWeek\|week-chip` |
| Learn mode | ✅ | 11 matches for `learnMode\|Learn Mode` |
| I'm Confused button | ✅ | 3 matches for `confused\|Confused` |
| Hint 1 / Hint 2 | ✅ | 234 matches for `hint1\|hint2\|Hint 1\|Hint 2\|hintLevel` |
| Multi-step math input | ✅ | 19 matches for `addStep\|Add Step\|step-row\|mathStep` |
| Final Answer field | ✅ | 13 matches for `finalAnswer\|final-answer\|Final Answer` |
| Notes overlay present | ✅ | 6 matches for `notes-overlay` |
| Formula overlay present | ✅ | 6 matches for `formula-overlay` |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` returned empty — no changes |
| File size (7092 lines) | ✅ | 7092 lines; well above original 1458 lines |
| HTML structure | ✅ | Starts `<!DOCTYPE html>`, ends `</html>`, 803 `<div` elements, exactly 1 `<script>` tag |

## Question Breakdown by Week
| Week | Count |
|------|-------|
| W2 | 19 |
| W3 | 29 |
| W4 | 18 |
| W5 | 40 |
| W7 | 35 |
| W8 | 31 |
| W9 | 32 |
| W10 | 17 |
| **Total** | **221** (includes multipart sub-part `week:` refs); **181 top-level questions** |

**Note:** The QA task prompt specifies 118 questions — this appears to be an outdated count from before practice exam questions were added. CLAUDE.md is authoritative and states 181 questions; confirmed by node.js parse of the QUESTIONS array (181 top-level objects).

## Issues Found
No issues found. All checks pass. The app has been stable for 95 consecutive QA passes. The last structural change was the addition and deduplication of 12 practice exam questions (commits around 2026-08-09 to 2026-08-18).

## Recommendations
No action required. App is stable and production-ready for the exam on Tuesday 5 May 2026.
