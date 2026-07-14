# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-14 (seventh pass)
**Tested by:** Automated QA Agent

## Overall Status: PASS

New commit `f583fcc` — added 15 True/False questions (W3/W5/W7/W8/W9), resolving the "no TF questions" carry-forward issue. Question bank now has **193 questions**. JS syntax clean, all required features confirmed present. Two carry-forward issues remain open (CDN dependencies, `document.write` popup).

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| Redesign commit exists | ✅ | `a6efd94` — "Major redesign: light mode, multi-week, learn mode, improved notes/formulas/math input + practice exam questions" |
| New feature commits today | ✅ | `f583fcc` — "Add 15 True/False questions to fix carry-forward gap (W3/W5/W7/W8/W9)" |
| JS syntax valid | ✅ | `new Function(script)` — no errors |
| ≥118 questions intact | ✅ | **193 questions** in QUESTIONS array (lines 3057–4758) |
| All 12 practice exam Qs | ✅ | Q1–Q12 all confirmed |
| TF questions present | ✅ | **15 TF questions** added — 3 per week (W3, W5, W7, W8, W9) |
| Light mode CSS | ✅ | `--bg:#F8FAFC`, `--surface:#FFFFFF`, Inter font, target design system in place |
| Dark mode toggle | ✅ | `.dark` CSS class, `toggleDarkMode()`, `darkModeBtn` in header (🌙/☀️) |
| Multi-week selection | ✅ | `selectWeekChip()`, `.week-chip.active`, `homeState.weeks` — chip grid present |
| Learn mode | ✅ | `#learn` screen, `learnMode`, "Test yourself" button |
| I'm Confused button | ✅ | `showHintAI()`, "😕 I'm Confused" renders in quiz screen |
| Hint 1 / Hint 2 | ✅ | `showHint1`, `showHint2`, `btn-hint` — present |
| Multi-step math input | ✅ | `addStep`, `working-steps`, `step-row`; MathQuill integration |
| Final Answer field | ✅ | `finalAnswer`, `Final Answer` — present |
| Notes overlay present | ✅ | `#notes-overlay`, tab bar W2–W10 |
| Formula overlay present | ✅ | `formula-overlay` present |
| Netlify functions unchanged | ✅ | `mark.js` and `explain.js` unmodified |
| File size | ✅ | **7,178 lines** |

---

## Question Bank Detail

**193 total questions** across 8 weeks:

| Week | Topic | Count | Types |
|------|-------|-------|-------|
| W2 | Market Opportunities | 15 | sa, multipart |
| W3 | CVP / Pricing | 26 | mcq, numerical, multipart, **tf×3** |
| W4 | Technology / BSC | 15 | sa, multipart |
| W5 | TVM | 37 | mcq, numerical, multipart, **tf×3** |
| W7 | Capital Budgeting | 29 | mcq, numerical, multipart, **tf×3** |
| W8 | Valuation / Investors | 29 | mcq, numerical, multipart, **tf×3** |
| W9 | WACC | 28 | mcq, numerical, multipart, **tf×3** |
| W10 | Performance Measurement | 14 | sa |
| **Total** | | **193** | |

### Practice Exam Questions (12/12 confirmed)

| # | Topic | Status |
|---|-------|--------|
| Q1 | APR/EAR/FV — bank account 16% APR | ✅ |
| Q2 | Solve for r — $14k → $30k in 10 yrs | ✅ |
| Q3 | Deferred perpetuity — $128 in yr 22 | ✅ |
| Q4 | Mortgage — $300k house, $40k down, 25yr 4% | ✅ |
| Q5 | McDonald's NPV declining perpetuity | ✅ |
| Q6 | AT&T EAA bus models | ✅ |
| Q7 | NPV/IRR/PI/Payback — Projects A & B (7 parts) | ✅ |
| Q8 | Bond pricing semi-annual — $1k, 7.2%, 8.2% YTM | ✅ |
| Q9 | Hush Puppies multi-stage DDM | ✅ |
| Q10 | Gordon Growth Model — $4.5 dividend | ✅ |
| Q11 | CAPM multi-company (Round Corp, Lemon LLC, etc.) | ✅ |
| Q12 | WACC varying D/E ratios — Sandwich Corp | ✅ |

### New True/False Questions (15 added this run)

| Week | Statement | Answer |
|------|-----------|--------|
| W3 | At BEP, revenue = total variable costs only | FALSE |
| W3 | CM Ratio 0.40 → VC Ratio = 0.60 | TRUE |
| W3 | Higher FC → higher BEP (all else equal) | TRUE |
| W5 | Higher discount rate → higher PV | FALSE |
| W5 | Annuity due > ordinary annuity in PV terms | TRUE |
| W5 | EAR ≥ APR for the same nominal rate | TRUE |
| W7 | Positive NPV → IRR > cost of capital | TRUE |
| W7 | Payback period accounts for TVM | FALSE |
| W7 | Highest IRR always wins for mutually exclusive projects | FALSE |
| W8 | YTM > coupon rate → bond trades at premium | FALSE |
| W8 | GGM undefined when r = g | TRUE |
| W8 | All bonds converge to face value at maturity | TRUE |
| W9 | Unsystematic risk diversifiable | TRUE |
| W9 | Beta = 0 → earns risk-free rate (CAPM) | TRUE |
| W9 | Book value weights preferred in WACC | FALSE |

---

## Issues Found

### 1. External CDN Dependencies (carry-forward from 2026-07-08)

Four external CDN resources are loaded at runtime:
- **Google Fonts** (`fonts.googleapis.com`) — Inter font family
- **MathQuill CSS** (`cdnjs.cloudflare.com`) — math input styling
- **jQuery 2.2.4** (`cdnjs.cloudflare.com`) — MathQuill dependency
- **MathQuill JS 0.10.1** (`cdnjs.cloudflare.com`) — multi-step math input

**Risk:** If the exam or study network blocks external CDNs, the multi-step math input UI will degrade silently.

**Recommendation:** Bundle MathQuill and jQuery as local static assets. Add graceful fallback (plain `<textarea>`) if MathQuill fails to initialise.

### 2. Popup Notes Window Uses `document.write` (carry-forward)

`openNotesWindow()` uses `document.write()` to render the notes popup window. Some browsers restrict `document.write` under strict CSP. Not reproduced in testing, but worth a manual smoke-test.

---

## ✅ Resolved This Run

- **No `type:'tf'` questions** — fixed by adding 15 TF questions (3 per financial week: W3, W5, W7, W8, W9). The TF rendering code (`renderTF()`, `.tf-options`, `.tf-option`) was already present; questions were the missing piece.

---

## Recommendations

1. **Bundle MathQuill/jQuery locally** — exam-room networks may block cdnjs.cloudflare.com; this would silently break multi-step math input.
2. **Smoke-test the Notes popup** — open the Notes overlay, click "Open in Window", confirm it renders correctly in Chrome.
3. **Verify `ANTHROPIC_API_KEY`** is set in the Netlify dashboard — required for AI marking ("I'm Confused" / explain) features.
