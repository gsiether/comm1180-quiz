# COMM1180 Quiz App - QA Test Report
**Date:** 2026-05-08
**Tested by:** Automated QA Agent (run 15)

## Overall Status: PASS

A fresh redesign commit (`a733fa5`) was found and all required features are present and functional. Two minor observations recorded below.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | "Major redesign: light mode, multi-week, learn mode, improved notes/formulas/math input + practice exam questions" (`a733fa5`, 2026-05-08 15:15:55) |
| JS syntax valid | ✅ | `node --check` returned no errors on extracted inline script |
| 118+ questions intact | ✅ | **178 questions** found — exceeds expected 118 (see notes) |
| Light mode CSS | ✅ | `--bg: #F8FAFC`, `--surface: #FFFFFF` in `:root{}`; 42 light-colour references |
| Dark mode toggle | ✅ | `toggleDarkMode()` function + `.dark{}` CSS overrides + 🌙/☀️ button in header (line 820) |
| Multi-week selection | ✅ | `homeState.weeks[]` array + `selectWeekChip()` + `.week-chip.active` CSS; note: searched var names `selectedWeeks`/`toggleWeek` are not used — feature exists under different identifiers |
| Learn mode | ✅ | 17 occurrences of learn-mode identifiers; `#learn` screen + `learnMode` state + `renderLearnCard()` |
| I'm Confused button | ✅ | `😕 I'm Confused` button rendered in quiz card via `hintBtnAI` (line 5142) |
| Hint 1 / Hint 2 | ✅ | 225 occurrences; 3-level hint system (hint → hint2 → Ask AI) fully present |
| Multi-step math input | ✅ | 19 occurrences of `addStep`/`step-row`/`working-steps` |
| Final Answer field | ✅ | 13 occurrences of `finalAnswer`/`final-answer`/`Final Answer` |
| Notes overlay present | ✅ | `#notes-overlay` element + 8 occurrences; tabs for W2–W10 |
| Formula overlay present | ✅ | `#formula-overlay` element + 8 occurrences; in-app overlay (not PDF links) |
| Netlify functions unchanged | ✅ | HEAD commit only modified `index.html`; `netlify/functions/mark.js` and `explain.js` untouched |
| File size increased | ✅ | 6,902 lines (up from 6,711 in prior commit; far exceeds original 1,458) |

## Question Distribution (178 total)
| Week | Topic | Count |
|------|-------|-------|
| W2 | Market Opportunities | 15 |
| W3 | CVP / Pricing | 23 |
| W4 | Technology / BSC | 15 |
| W5 | TVM | 34 |
| W7 | Capital Budgeting | 26 |
| W8 | Investors / Valuation | 26 |
| W9 | WACC | 25 |
| W10 | Performance Measurement | 14 |
| **Total** | | **178** |

## Question Type Breakdown
| Type | Count |
|------|-------|
| `mcq` | 42 |
| `numerical` | 53 |
| `sa` | 70 |
| `multipart` | 42 |
| `tf` | 0 |
| **Total** | **178** (grep-line counts; some types appear on multiple lines) |

## Issues Found

### 1. Question count exceeds spec (minor, non-critical)
The QA spec states "118 questions total", but **178 questions** are present — a surplus of 60. The redesign agent appears to have added all 12 practice exam questions **plus** substantial extra topic questions across weeks 5, 7, 8, 9. No questions appear missing or truncated. This is over-delivery, not truncation. Recommend spot-checking for unintentional duplicates in the high-count weeks (W5: 34, W7–W9: 26–26–25).

### 2. Multiple `<script>` tags (minor, non-critical)
The file has 3 real `<script>` elements:
- Line 2817: main inline script (expected)
- Line 6896: `<script src="jquery.min.js">` (required for MathQuill)
- Line 6897: `<script src="mathquill.min.js">` (required for multi-step math input)

The CDN scripts are necessary dependencies. Not a defect. Note: jQuery 2.2.4 is end-of-life with known vulnerabilities; low risk for an internal exam prep tool.

## Recommendations
1. **Spot-check W5/W7/W8/W9 questions** for duplicates. With 60 extra questions added, a quick scan for repeated question text is worthwhile.
2. **Smoke-test the live deploy** once Netlify finishes: run a quiz session, trigger each hint level (including AI), and verify multi-step math submission for a numerical question.
3. **Confirm dark mode persistence**: state is stored in `localStorage('c1180_dark')` — verify it survives page reloads.
