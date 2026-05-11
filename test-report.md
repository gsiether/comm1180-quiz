# COMM1180 Quiz App - QA Test Report
**Date:** 2026-05-11
**Tested by:** Automated QA Agent

## Overall Status: PASS

The redesign agent ran successfully. All critical features are present and the JS syntax is valid.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `a733fa5 Major redesign: light mode, multi-week, learn mode, improved notes/formulas/math input + practice exam questions` |
| JS syntax valid | ✅ | `node --check` exit code 0 — no syntax errors |
| 118+ questions intact | ✅ | 178 questions in QUESTIONS array (lines 2839–4497) — exceeds spec's 118; array intact, not truncated |
| Light mode CSS | ✅ | CSS variables for light theme present; `.dark` class overrides for dark mode at line 45 |
| Dark mode toggle | ✅ | 🌙/☀️ button at line 820, `toggleDarkMode()` at line 4909, persists to localStorage |
| Multi-week selection | ✅ | `week-chip` + `selectWeekChip()` implemented; 18 matches for week selection patterns |
| Learn mode | ✅ | `learnMode` flag in state; `#learn` screen; "📚 Learn Mode" tab at line 842 |
| I'm Confused button | ✅ | "😕 I'm Confused" button at line 5142; shown after hints in non-exam mode |
| Hint 1 / Hint 2 | ✅ | 3-level progressive hint system; 229 matches for hint patterns |
| Multi-step math input | ✅ | `addStep`, `step-row`, `workingSteps` found (23 matches) |
| Final Answer field | ✅ | `finalAnswer` / `Final Answer` found (13 matches) |
| Notes overlay present | ✅ | Overlay at line 1153 with W2–W10 tab content all present |
| Formula overlay present | ✅ | Overlay at line 2439 with formula reference content |
| Netlify functions unchanged | ✅ | `git show a733fa5 -- netlify/` empty — redesign commit made no changes to functions |
| File size increased | ✅ | 6,902 lines (vs original spec's ~1,458 lines) |

## Question Type Breakdown (QUESTIONS array, lines 2839–4497)
| Type | Count |
|------|-------|
| MCQ | 42 |
| True/False | 0 |
| Numerical | 53 (top-level) |
| Short Answer | 70 |
| Multipart | 42 (top-level) |
| **Total question objects** | **178** |
| **By week** | W2:15, W3:23, W4:15, W5:34, W7:26, W8:26, W9:25, W10:14 |

*Note: Numerical/SA counts within multipart questions push the whole-file grep totals higher.*

## Issues Found

1. **Question count is 178, not 118** — Spec said 118 + 12 new = 130. The redesign commit itself added exactly 12 questions (confirmed via `git show a733fa5`). Additional questions were added in earlier commits. The array is not truncated; it has grown organically. No action required unless de-duplication is desired.

2. **Multiple `<script>` tags** — File has 1 inline script (line 2817) + jQuery CDN (line 6896) + MathQuill CDN (line 6897). The spec check expected "exactly one," but the CDN scripts are required dependencies for the math input feature — this is not a defect.

3. **No True/False question type** — `type:'tf'` returns 0 matches. The CLAUDE.md lists `tf` as a supported type, but none are present. Confirmed this was the case even in the earliest visible commit — not a regression from the redesign.

4. **EXAM2–EXAM5 arrays** — Lines ~6423–6856 contain supplementary practice exam arrays (EXAM2–EXAM5 with Section A + B questions). These were added in commits prior to the redesign and appear to be wired to a Practice Exam UI mode. Worth confirming all arrays are reachable via the UI.

## Recommendations

- No blocking issues. App is ready for use.
- Confirm EXAM2–EXAM5 arrays are all wired to the Practice Exam UI flow and not orphaned.
- Consider whether TF questions are still a desired question type; if so, add them to the QUESTIONS array.
- jQuery 2.2.4 is EOL. If MathQuill supports a jQuery-free build, removing the dependency would reduce CDN risk in an exam environment.
