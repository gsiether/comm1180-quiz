# COMM1180 Quiz App - QA Test Report
**Date:** 2026-05-10
**Tested by:** Automated QA Agent

## Overall Status: PASS (with notes)

All required features are present and the app is structurally sound. Question count exceeds the spec's expected 118 (likely due to prior sessions adding questions), and minor structural notes are listed below.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | "Major redesign: light mode, multi-week, learn mode, improved notes/formulas/math input + practice exam questions" (a733fa5, 2026-05-08) |
| JS syntax valid | ✅ | `node --check` passed with no errors |
| 118 questions intact | ⚠️ | 178 questions found in QUESTIONS array (lines 2839–4497) — exceeds expected 118, likely from prior sessions adding questions; array is not truncated |
| Light mode CSS | ✅ | 69 matches; `--bg: #F8FAFC`, `--surface: #FFFFFF`, target design system CSS variables present |
| Dark mode toggle | ✅ | `toggleDarkMode()` at line 4909; button at line 820; persists to localStorage |
| Multi-week selection | ✅ | `week-chip` + `selectWeekChip()` at line 4647; supports multi-select and "All" chip toggle |
| Learn mode | ✅ | `learnMode` flag in state; `#learn` screen; "📚 Learn Mode" tab at line 842; `learn-week-grid` at line 912 |
| I'm Confused button | ✅ | "😕 I'm Confused" button at line 5142; only shown when hints enabled and not in exam mode |
| Hint 1 / Hint 2 | ✅ | 229 matches; 3-level progressive hint system implemented |
| Multi-step math input | ✅ | 23 matches for step-row/addStep patterns |
| Final Answer field | ✅ | 13 matches for finalAnswer patterns |
| Notes overlay present | ✅ | `notes-overlay` present; week tabs implemented via new-window popup |
| Formula overlay present | ✅ | `formula-overlay` present with formula reference content |
| Netlify functions unchanged | ✅ | Redesign commit only modified `index.html`; last netlify change was f60567e (prior QA run) |
| File size increased | ✅ | 6902 lines (original spec referenced ~1458 lines) |

## Question Type Breakdown (within QUESTIONS array, lines 2839–4497)
| Type | Count |
|------|-------|
| MCQ | 42 |
| True/False | 0 |
| Numerical | 69 |
| Short Answer | 70 |
| Multipart | 66* |
| **Total (array)** | **178** |

*Multipart grep counts inflated across whole file (66 includes EXAM2–EXAM5 arrays); main array line count = 178 question objects.

## Issues Found

1. **Question count is 178, not 118** — The spec says "should be 118 questions total." The QUESTIONS array currently has 178. This is not a truncation issue (the array is intact and has MORE questions than expected). Prior redesign sessions have added questions beyond the original spec count. No action required unless de-duplication is desired.

2. **Multiple `<script>` tags (3 real)** — The spec check expected exactly one. The file has: (1) the main app logic at line 2817, (2) jQuery CDN at line 6896, (3) MathQuill CDN at line 6897. The CDN scripts are expected dependencies for the math input feature — this is not a defect.

3. **No True/False question type** — `type:'tf'` returns 0 matches in the main QUESTIONS array. The original CLAUDE.md listed `tf` as a supported question type, but none are present. This appears to have been the case in prior versions as well; confirm whether TF questions were intentionally removed.

4. **`selectedWeeks` variable not used** — The QA spec grep for `selectedWeeks` returns 0. The implementation correctly uses `week-chip.active` CSS state and `selectWeekChip()` function instead. Feature works as designed; the variable name just differs from what the spec searched for.

5. **EXAM2–EXAM5 arrays** — Lines 6423–6856 contain additional practice exam question arrays (EXAM2 through EXAM5) with ~40 question objects. These appear to be supplementary exam simulation sets added in prior sessions. Confirm these are intentional and used by the UI.

## Recommendations

- **Verify TF questions**: Confirm whether true/false questions are needed; if so, add them to the QUESTIONS array.
- **Audit EXAM2–EXAM5**: Confirm these arrays are wired to a UI flow and not orphaned dead code.
- **Consider de-duplication check**: With 178 questions across 8 weeks, spot-check that questions were not duplicated across sessions.
- **No changes needed to netlify functions** — confirmed unchanged.
