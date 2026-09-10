# COMM1180 Quiz App - QA Test Report
**Date:** 2026-09-10
**Tested by:** Automated QA Agent
**Pass count:** 80

## Overall Status: PASS

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Redesign commit: `0c7ba09 Major redesign: light mode, multi-week, learn mode...` (plus 79 previous QA passes since) |
| JS syntax valid | ✅ | No syntax errors detected |
| 181 questions intact | ✅ | 181 found in QUESTIONS array (QA task says 118 — CLAUDE.md confirms 181 is correct; expectation appears outdated) |
| Light mode CSS | ✅ | CSS custom properties and light backgrounds present |
| Dark mode toggle | ✅ | `darkMode` + toggle logic found (11 occurrences) |
| Multi-week selection | ✅ | Implemented via `.week-chip` / `#weekChips` (not `selectedWeeks` — alternate naming) |
| Learn mode | ✅ | `learnMode` / "Learn Mode" found (11 occurrences) |
| I'm Confused button | ✅ | "Confused" found (3 occurrences) |
| Hint 1 / Hint 2 | ✅ | `hint1` / `hint2` found (234 occurrences) |
| Multi-step math input | ✅ | `addStep` / `working-steps` found (19 occurrences) |
| Final Answer field | ✅ | `finalAnswer` / "Final Answer" found (13 occurrences) |
| Notes overlay present | ✅ | `notes-overlay` / `n-w2` found (8 occurrences) |
| Formula overlay present | ✅ | `formula-overlay` / `f-cvp` found (8 occurrences) |
| Netlify functions unchanged | ✅ | Last netlify change was `e13387c` (practice questions commit); no modifications in current QA runs |
| File size increased | ✅ | 7,092 lines (well above original ~1,458 lines) |

## Question Type Breakdown (within QUESTIONS array, lines 3083–4671)
| Type | Count |
|------|-------|
| MCQ | 42 |
| True/False | 15 |
| Numerical | 64 |
| Short Answer (SA) | 58 |
| Multipart | 59 |
| **Total** | **181** |

*Note: Counts above include subtype overlaps (multipart questions may also match other type strings). Net unique question objects confirmed at 181 via `week:` property count within array bounds.*

## Script Tag Structure
- 1 inline `<script>` block (main app JS, line 3061)
- 1 `<script>` string literal inside JS (popup window builder — not a real script tag)
- 2 external CDN scripts: jQuery 2.2.4 + MathQuill 0.10.1 (lines 7086–7087)

This structure is expected and correct.

## Issues Found
No issues found. The app is stable and all required features are present. The redesign was completed and has been passing QA for 79 consecutive daily runs (since 2026-07-31 approximately).

**Note on question count expectation:** The scheduled QA task checks for 118 questions, but CLAUDE.md states 181 questions were built (including 12 practice exam questions added post-redesign). Actual count is 181. The 118 figure in the QA task prompt appears to be an outdated expectation from before the practice questions were added. This is not a defect.

## Recommendations
1. Update the scheduled QA task's question count expectation from 118 to 181 to match the actual state of the app.
2. No code changes needed — the app is complete and stable.
