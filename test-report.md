# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-08
**Tested by:** Automated QA Agent

## Overall Status: PASS

All required features confirmed present. JS syntax clean. 166 top-level questions in QUESTIONS array (exceeds 118 + 12 target). Keyword bug in W7 Alpha/Beta NPV question fixed (was `13,294`, now corrected to `15,479`/`15,480`).

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Last non-QA commit: `419f80d` "Fix duplicate practice-exam questions" (2026-07-02); redesign at `56f3fd5` (2026-06-10) |
| JS syntax valid | ✅ | `node --check` on extracted script — no structural errors (false-positive on `<\/script>` in string literals) |
| 118+ questions intact | ✅ | **166 top-level questions** (bracket-balanced parse); W2=15, W3=23, W4=15, W5=30, W7=23, W8=23, W9=23, W10=14 |
| Light mode CSS | ✅ | `:root` has `--bg:#F8FAFC`, `--surface:#FFFFFF`, `--text:#0F172A`; Inter font via Google Fonts |
| Dark mode toggle | ✅ | `darkModeBtn` (🌙/☀️) calls `toggleDarkMode()`; applies `.dark` on `<html>`; persisted in localStorage |
| Multi-week selection | ✅ | `.week-chip` grid UI; `selectWeekChip()` toggles `homeState.weeks[]` array |
| Learn mode | ✅ | `#learn` screen (line 1007); `showLearn()` function; "Test yourself" button → quiz flow |
| I'm Confused button | ✅ | `😕 I'm Confused` calls `showHintAI()` → `/explain` Netlify function + local fallback |
| Hint 1 / Hint 2 | ✅ | `hintBtn1`/`hintBtn2` sequential reveal; 3-level progressive: hint→hint2→AI |
| Multi-step math input | ✅ | `.working-steps`, `.step-row`, `addStep()`, `+ Add Step` button; MathQuill-backed |
| Final Answer field | ✅ | `.final-answer-wrap` + `Final Answer` label; used in numerical/multipart questions |
| Notes overlay present | ✅ | `#notes-overlay`; W2–W10 tab content with pop-out window option |
| Formula overlay present | ✅ | `#formula-overlay`; tabs: W3 CVP / W5 TVM / W7 NPV / W8 Valuation / W9 WACC |
| Netlify functions unchanged | ✅ | `mark.js` and `explain.js` unchanged since initial build commit `c44f0ba` |
| File size | ✅ | **6,944 lines** vs original 1,458 — 4.75× growth |

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

### Fixed — W7 Alpha/Beta NPV keyword error
The Week 7 multipart "Project Alpha / Project Beta" question had incorrect keywords for Beta's NPV: `['Beta','13,294','13294']`. The correct answer is $15,479/$15,480 (based on discounting $10k, $20k, $30k, $40k at 10%). Fixed to `['Beta','15,479','15479','15480']`. Model answer also cleaned up (removed internal "Wait: / Re-checking" deliberation text).

### Note — Shared question label (not a true duplicate)
Two different multipart questions both have a part labelled "Calculate NPV for each project." — one for Solar-A/Solar-B, one for Project Alpha/Beta. These are not duplicates: they test the same skill (NPV calculation) in entirely different scenarios. No fix needed.

### Minor — No true/false (`tf`) questions
Zero `tf` type questions in QUESTIONS array despite the type being supported by the rendering logic. Not a blocker.

### Minor — External CDN dependencies
jQuery 2.2.4 and MathQuill 0.10.1 loaded from `cdnjs.cloudflare.com`. Math input breaks offline or if CDN is unavailable.

### Note — Exam date has passed
Primary exam was 5 May 2026. App has served its purpose. No action required.

---

## Changes Made This Run
- Fixed W7 Alpha/Beta NPV keywords (`13294` → `15480`) and cleaned up model answer
- Updated this QA report
