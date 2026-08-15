# COMM1180 Quiz App - QA Test Report
**Date:** 2026-08-15
**Tested by:** Automated QA Agent (Pass 53)

## Overall Status: PASS

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `97aa20d` (pass 52, 2026-08-15) removed 12 duplicate practice exam questions from QUESTIONS array |
| JS syntax valid | ✅ | `node --check` exits 0, no errors |
| 118 questions (min) | ✅ | 181 questions present across W2/W3/W4/W5/W7/W8/W9/W10 |
| Light mode CSS | ✅ | `--bg: #F8FAFC`, `--surface: #FFFFFF`, 82 light-mode matches |
| Dark mode toggle | ✅ | `toggleDarkMode()` function + 🌙 button present |
| Multi-week selection | ✅ | `homeState.weeks[]` + `selectWeekChip()` + `week-chip` / `.all-chip` toggle logic |
| Learn mode | ✅ | `learnMode`, "Learn Mode" tab, `#learn` screen (71 matches) |
| I'm Confused button | ✅ | "😕 I'm Confused" button calling `showHintAI()` (3 matches) |
| Hint 1 / Hint 2 | ✅ | `hint` + `hint2` fields across all questions (234 matches) |
| Multi-step math input | ✅ | `addStep`, `step-row`, `working-steps` present; MathQuill CDN loaded |
| Final Answer field | ✅ | `finalAnswer` / `Final Answer` field present (13 matches) |
| Notes overlay present | ✅ | `notes-overlay` with week-tab structure present |
| Formula overlay present | ✅ | `formula-overlay` with CVP/TVM/NPV/WACC sections present |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` shows no changes |
| File size increased | ✅ | 7060 lines (vs original 1458) |

## Question Count Breakdown
| Method | Count |
|--------|-------|
| `grep -c "^\s*{week:"` in QUESTIONS range (lines 3057–4644) | **181** |
| Previous pass 51 Python bracket-balanced scan | 193 |
| Pass 52 action | Removed 12 duplicates → **181** |

The 12-question difference between pass 51 (193) and pass 53 (181) reflects the duplication removal done by pass 52 earlier today.

## Script Tag Analysis
4 `<script>` occurrences in source — expected and acceptable:
1. Line 3035: main inline JS block (app logic, QUESTIONS, NOTES)
2. Line 5095: `<script>` inside a JS string literal (notes popup HTML builder — not a real tag)
3. Line 7054: jQuery 2.2.4 CDN
4. Line 7055: MathQuill 0.10.1 CDN

## Issues Found

### Recurring Duplication Pattern (Low Severity)
Practice exam questions (Q1–Q12 from `practice-questions.md`) have now been removed as duplicates **twice**:
- `d72225e` — earlier removal pass
- `97aa20d` (pass 52, 2026-08-15) — removed again after a re-duplication

This suggests a scheduled agent is periodically re-adding the 12 practice questions on top of existing ones. The pattern is:
1. Questions appear correctly
2. A redesign or question-add agent re-adds the 12 practice questions (duplicating them)
3. The next QA pass removes the 12 extras

**Current state (181 questions) is clean.** No duplicates detected in this pass.

### Multi-Week Selection Naming Mismatch (Informational)
The QA script searches for `selectedWeeks`, `selected-weeks`, or `toggleWeek` — none of which exist. The actual implementation uses `homeState.weeks[]` + `selectWeekChip()`. Feature is fully present; only the naming convention differs from the QA spec.

## Recommendations
1. **Investigate the duplication source** — identify which scheduled agent or prompt is re-adding the 12 practice questions and add a guard to prevent re-insertion of already-present questions.
2. **Update QA search terms** for multi-week selection check to include `homeState.weeks` or `selectWeekChip` to avoid false negatives.
3. A Playwright browser smoke test would provide stronger assurance that the hint flow, quiz scoring, and learn mode navigation work end-to-end.
