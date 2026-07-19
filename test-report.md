# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-19 (fourteenth pass)
**Tested by:** Automated QA Agent

## Overall Status: PASS

All critical checks pass. The Blob URL fix committed earlier today resolved the last actionable issue (`document.write` in `openNotesWindow()`). One carry-forward issue remains (external CDN dependencies — no change since prior report).

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| Redesign commit exists | ✅ | `a6efd94` — "Major redesign: light mode, multi-week, learn mode, improved notes/formulas/math input + practice exam questions" |
| New commit today | ✅ | `1718498` — Fix: replaced `document.write` in `openNotesWindow()` with Blob URL |
| JS syntax valid | ✅ | `new Function()` parse — no errors |
| 181 questions intact | ✅ | **181 questions** in QUESTIONS array (W2–W10) |
| All 12 practice exam Qs | ✅ | Q1–Q12 all confirmed present |
| TF questions present | ✅ | TF questions present in W3, W5, W7, W8, W9 |
| Light mode CSS | ✅ | `--bg:#F8FAFC`, `--surface:#FFFFFF`, Inter font, target design system in place |
| Dark mode toggle | ✅ | `.dark` CSS class, `toggleDarkMode()`, `darkModeBtn` in header with 🌙/☀️ toggle |
| Multi-week selection | ✅ | `.week-chip.active`, `selectWeekChip()`, `homeState.weeks` array |
| Learn mode | ✅ | `#learn` screen, `learnMode` flag, "Test yourself" button |
| I'm Confused button | ✅ | `showHintAI()` renders inline AI explanation in quiz screen |
| Hint 1 / Hint 2 | ✅ | `showHint1`/`showHint2`, `hintBtn1`/`hintBtn2` — 3-level hint system present |
| Multi-step math input | ✅ | `addStep()`, `.working-steps`, `.step-row`; MathQuill integration |
| Final Answer field | ✅ | `.final-answer-wrap`, "Final Answer" label — present |
| Notes overlay present | ✅ | `#notes-overlay`, tab bar W2–W10 |
| Formula overlay present | ✅ | `#formula-overlay` present |
| Notes popup (document.write) | ✅ **FIXED** | `openNotesWindow()` now uses `Blob URL` — no `document.write` |
| Netlify functions unchanged | ✅ | `mark.js` and `explain.js` — added in initial commit, never modified |
| File size | ✅ | 7,061 lines (original was 1,458 lines) |
| HTML structure | ✅ | Starts `<!DOCTYPE html>`, ends `</html>` |

---

## Question Bank Detail

**181 total questions** across 8 weeks (stable since 2026-07-15):

| Week | Topic | Count |
|------|-------|-------|
| W2 | Market Opportunities | 15 |
| W3 | CVP / Pricing | 26 |
| W4 | Technology / BSC | 15 |
| W5 | TVM | 33 |
| W7 | Capital Budgeting | 26 |
| W8 | Valuation / Investors | 26 |
| W9 | Risk & WACC | 26 |
| W10 | Performance Measurement | 14 |
| **Total** | | **181** |

### Practice Exam Questions (12/12 confirmed)

| # | Topic | Status |
|---|-------|--------|
| Q1 | APR/EAR/FV — bank account 16% APR | ✅ |
| Q2 | Solve for r — $14k → $30k in 10 yrs | ✅ |
| Q3 | Deferred perpetuity — $128 in yr 22 | ✅ |
| Q4 | Mortgage — $300k house, $40k down, 25yr 4% | ✅ |
| Q5 | McDonald's NPV declining perpetuity | ✅ |
| Q6 | EAA — AT&T bus models | ✅ |
| Q7 | NPV/IRR/PI/Payback — Projects A & B (7 parts) | ✅ |
| Q8 | Bond pricing semi-annual — $1k, 7.2%, 8.2% YTM | ✅ |
| Q9 | Hush Puppies multi-stage DDM | ✅ |
| Q10 | Gordon Growth Model — $4.5 dividend | ✅ |
| Q11 | CAPM multi-company (Round Corp, Lemon LLC, etc.) | ✅ |
| Q12 | WACC varying D/E ratios — Sandwich Corp | ✅ |

---

## Issues Found

### 1. External CDN Dependencies (carry-forward — open since 2026-07-08)

Four external CDN resources are loaded at runtime:
- **Google Fonts** (`fonts.googleapis.com`) — Inter font family
- **MathQuill CSS** (`cdnjs.cloudflare.com`) — math input styling
- **jQuery 2.2.4** (`cdnjs.cloudflare.com`) — MathQuill dependency
- **MathQuill JS 0.10.1** (`cdnjs.cloudflare.com`) — multi-step math input

**Risk:** If the exam or study network blocks external CDNs, the multi-step math input UI will degrade silently.

**Recommendation:** Bundle MathQuill and jQuery as local static assets before exam day. Add graceful fallback (plain `<textarea>`) if MathQuill fails to initialise.

### 2. ~~Popup Notes Window Uses `document.write`~~ — RESOLVED 2026-07-19

`openNotesWindow()` now uses the Blob URL approach (`new Blob([html], {type:'text/html'})` + `URL.createObjectURL()`), avoiding any `document.write` call. The Blob URL is revoked after 30 seconds to prevent memory leaks.

---

## Recommendations

1. **Bundle MathQuill/jQuery locally** — exam-room networks may block cdnjs.cloudflare.com; this would silently break multi-step math input. Do this before the exam.
2. **Verify `ANTHROPIC_API_KEY`** is set in the Netlify dashboard — required for AI marking ("I'm Confused" / explain) features.
