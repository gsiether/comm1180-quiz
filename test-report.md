# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-10
**Tested by:** Automated QA Agent

## Overall Status: PASS

All features confirmed present and working. JS syntax clean. **178 questions** in QUESTIONS array — unchanged from yesterday. No regressions detected.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit since last QA | ✅ | `291da18` — "QA report: automated code check (2026-07-09)" — no new feature commits expected today |
| JS syntax valid | ✅ | `node --check` on extracted JS — no errors |
| ≥118 questions intact | ✅ | **178 questions** found in QUESTIONS array (bracket-tracked; same as 2026-07-09) |
| All 12 practice exam Qs | ✅ | Q1–Q12 all confirmed present in QUESTIONS array |
| Light mode CSS | ✅ | `--bg:#F8FAFC`, `--surface:#FFFFFF`, Inter font, target design system in place |
| Dark mode toggle | ✅ | `darkMode`, `toggleDark` present (8 matches) |
| Multi-week selection | ✅ | `selectWeekChip`, `homeState.weeks` present (13 matches) |
| Learn mode | ✅ | `learnMode`, `#learn`, `Learn Mode` present (12 matches) |
| I'm Confused button | ✅ | `confused`, `Confused` present (3 matches) |
| Hint 1 / Hint 2 | ✅ | `hint1`, `hint2`, `showHint`, `btn-hint` present (234 matches) |
| Multi-step math input | ✅ | `addStep`, `working-steps`, `step-row` present (23 matches) |
| Final Answer field | ✅ | `finalAnswer`, `Final Answer`, `final-answer` present (13 matches) |
| Notes overlay present | ✅ | `notes-overlay`, `notesOverlay` present (6 matches) |
| Formula overlay present | ✅ | `formula-overlay`, `formulaOverlay` present (6 matches) |
| Netlify functions unchanged | ✅ | `git diff HEAD -- netlify/` — 0 lines changed |
| File size stable | ✅ | **7,063 lines** — identical to 2026-07-09 |

---

## Question Bank

**178 total questions** in QUESTIONS array (bracket-tracked count).

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

---

## Issues Found

### Note — External CDN dependencies (carry-forward from 2026-07-09)
jQuery 2.2.4 and MathQuill 0.10.1 loaded from `cdnjs.cloudflare.com` for the multi-step math input feature. Math input UI will degrade if CDN is unreachable — relevant for in-person exam with restricted networks.

**Recommendation:** Consider bundling MathQuill locally or adding a graceful fallback to plain `<textarea>` if MathQuill fails to load.

### Note — No true/false (`tf`) questions (carry-forward)
Zero `type:'tf'` entries. Supported by the renderer but unused. Not a blocker.

---

## No Changes Since Yesterday

No new commits to `index.html` since the 2026-07-09 QA run. App is stable. No action required today.

---

## Recommendations (carry-forward)

1. **Bundle MathQuill locally** or add CDN fallback — exam-room networks may block cdnjs.cloudflare.com.
2. **Smoke-test popup notes window** (the `document.write` pattern on line 5102) — some browsers restrict `document.write` in certain security contexts.
3. Confirm `ANTHROPIC_API_KEY` remains set in Netlify dashboard — required for AI marking and explanation features.
