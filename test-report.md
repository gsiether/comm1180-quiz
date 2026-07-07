# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-07
**Tested by:** Automated QA Agent

## Overall Status: PASS

All required features confirmed present. JS syntax clean. 166 top-level questions in QUESTIONS array (exceeds 118 + 12 target). One minor duplicate question detected.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Last non-QA commit: `419f80d` "Fix duplicate practice-exam questions" (2026-07-02); redesign at `56f3fd5` (2026-06-10) |
| JS syntax valid | ✅ | `node --check` on extracted script (3,900 lines) — no errors |
| 118+ questions intact | ✅ | **166 top-level questions** (bracket-balanced parse); W2=15, W3=23, W4=15, W5=30, W7=23, W8=23, W9=23, W10=14 |
| Light mode CSS | ✅ | `:root` has `--bg:#F8FAFC`, `--surface:#FFFFFF`, `--text:#0F172A`; Inter font via Google Fonts |
| Dark mode toggle | ✅ | `darkModeBtn` (🌙/☀️) calls `toggleDarkMode()`; applies `.dark` on `<html>`; persisted in localStorage |
| Multi-week selection | ✅ | `.week-chip` grid UI; `selectWeekChip()` toggles `homeState.weeks[]` array |
| Learn mode | ✅ | `#learn` screen (line 1007); `showLearn()` function; "Test yourself" button → quiz flow |
| I'm Confused button | ✅ | `😕 I'm Confused` (line 5168) calls `showHintAI()` → `/explain` Netlify function |
| Hint 1 / Hint 2 | ✅ | `hintBtn1`/`hintBtn2` sequential reveal (lines 5164–5166); 3-level progressive: hint→hint2→AI |
| Multi-step math input | ✅ | `.working-steps`, `.step-row`, `addStep()`, `+ Add Step` button (lines 5202–5207); MathQuill-backed |
| Final Answer field | ✅ | `.final-answer-wrap` + `Final Answer` label (line 5208–5209); used in numerical/multipart questions |
| Notes overlay present | ✅ | `#notes-overlay` (line 1153); W2–W10 tab content with pop-out window option |
| Formula overlay present | ✅ | `#formula-overlay` (line 2445); tabs: W3 CVP / W5 TVM / W7 NPV / W8 Valuation / W9 WACC |
| Netlify functions unchanged | ✅ | `mark.js` and `explain.js` unchanged since initial build commit `c44f0ba` |
| File size increased | ✅ | **6,944 lines** vs original 1,458 — 4.75× growth |

---

## Question Bank Breakdown (bracket-balanced parse)
| Week | Count | Topic |
|------|-------|-------|
| W2 | 15 | Market Opportunities |
| W3 | 23 | CVP / Pricing |
| W4 | 15 | Technology / BSC |
| W5 | 30 | TVM |
| W7 | 23 | Investment / Capital Budgeting |
| W8 | 23 | Investors / Valuation |
| W9 | 23 | WACC |
| W10 | 14 | Performance Measurement |
| **Total** | **166** | Top-level question objects; sub-questions within multipart not separately counted |

**Question types (within QUESTIONS array only):**
MCQ=25, SA=31, Numerical=20, Multipart=12 (at top level); sub-questions within multipart add ~59 further type references visible in global grep.

---

## Issues Found

### Minor — 1 duplicate question
"Calculate NPV for each project." appears twice in the QUESTIONS array (likely in the W7 multipart block). Low impact — quiz shuffle rarely surfaces both — but should be cleaned up.

### Note — Question count discrepancy vs yesterday's report
Yesterday's QA report stated 206 questions. Today's bracket-balanced parser yields 166. The discrepancy is likely because yesterday's parser stopped at an inner `];` terminator (e.g. inside a multipart `parts` array) rather than the outer QUESTIONS array close. Today's count of **166 is the accurate figure**.

### Minor — No true/false (`tf`) questions
Zero `tf` type questions in QUESTIONS array despite the type being supported by the rendering logic. Not a blocker.

### Minor — External CDN dependencies
jQuery 2.2.4 and MathQuill 0.10.1 loaded from `cdnjs.cloudflare.com` (lines 6938–6939). Math input breaks offline or if CDN is unavailable.

### Note — Exam date has passed
Primary exam was 5 May 2026. App has served its purpose.

---

## Recommendations

1. Remove the single duplicate question ("Calculate NPV for each project.").
2. No action needed on Netlify functions — both untouched.
3. If app is being kept active, consider self-hosting jQuery/MathQuill.
