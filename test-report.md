# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-16 (tenth pass)
**Tested by:** Automated QA Agent

## Overall Status: PASS

No new code commits since yesterday's ninth-pass report. All previously confirmed features remain intact. The two carry-forward issues (CDN dependencies, `document.write` popup) are unchanged. App is stable and ready for exam use.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| Redesign commit exists | ✅ | `a6efd94` — "Major redesign: light mode, multi-week, learn mode, improved notes/formulas/math input + practice exam questions" |
| New commit today | ➖ | No code changes since 2026-07-15; latest is this QA report commit |
| JS syntax valid | ✅ | `node --check` — no errors |
| ≥118 questions intact | ✅ | **181 questions** in QUESTIONS array |
| All 12 practice exam Qs | ✅ | Q1–Q12 all confirmed present |
| TF questions present | ✅ | 15 TF questions (W3, W5, W7, W8, W9 — 3 each) |
| Light mode CSS | ✅ | `--bg:#F8FAFC`, `--surface:#FFFFFF`, Inter font, target design system in place |
| Dark mode toggle | ✅ | `.dark` CSS class, `toggleDarkMode()`, `darkModeBtn` in header |
| Multi-week selection | ✅ | `.week-chip.active`, `selectWeekChip()`, `homeState.weeks` array |
| Learn mode | ✅ | `#learn` screen, `learnMode`, "Test yourself" button |
| I'm Confused button | ✅ | `showHintAI()` renders inline AI explanation in quiz screen |
| Hint 1 / Hint 2 | ✅ | `showHint1`, `showHint2`, `btn-hint` — 3-level hint system present |
| Multi-step math input | ✅ | `addStep`, `working-steps`, `step-row`; MathQuill integration |
| Final Answer field | ✅ | `finalAnswer`, `Final Answer` — present |
| Notes overlay present | ✅ | `#notes-overlay`, tab bar W2–W10 |
| Formula overlay present | ✅ | `formula-overlay` present |
| Netlify functions unchanged | ✅ | `mark.js` and `explain.js` unmodified |
| File size | ✅ | **7,059 lines** (original was 1,458 lines) |

---

## Question Bank Detail

**181 total questions** across 8 weeks (stable since 2026-07-15):

| Week | Topic | Count | Types |
|------|-------|-------|-------|
| W2 | Market Opportunities | 15 | sa, multipart |
| W3 | CVP / Pricing | 26 | mcq, numerical, multipart, tf×3 |
| W4 | Technology / BSC | 15 | sa, multipart |
| W5 | TVM | 33 | mcq, numerical, multipart, tf×3 |
| W7 | Capital Budgeting | 26 | mcq, numerical, multipart, tf×3 |
| W8 | Valuation / Investors | 26 | mcq, numerical, multipart, tf×3 |
| W9 | WACC | 26 | mcq, numerical, multipart, tf×3 |
| W10 | Performance Measurement | 14 | sa |
| **Total** | | **181** | |

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

### 2. Popup Notes Window Uses `document.write` (carry-forward — open since 2026-07-08)

`openNotesWindow()` uses `document.write()` to render the notes popup window. Some browsers restrict `document.write` under strict CSP.

**Recommendation:** Smoke-test the Notes popup in the exam browser before the exam (open Notes overlay → "Open in Window").

---

## Recommendations

1. **Bundle MathQuill/jQuery locally** — exam-room networks may block cdnjs.cloudflare.com; this would silently break multi-step math input. Do this before the exam (Tuesday 5 May 2026).
2. **Smoke-test the Notes popup** — open the Notes overlay, click "Open in Window", confirm it renders correctly in Chrome.
3. **Verify `ANTHROPIC_API_KEY`** is set in the Netlify dashboard — required for AI marking ("I'm Confused" / explain) features.
