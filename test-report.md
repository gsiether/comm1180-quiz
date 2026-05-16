# COMM1180 Quiz App - QA Test Report
**Date:** 2026-05-16
**Tested by:** Automated QA Agent (fourth pass — post formula-sheet enhancement commit `f1fcdda`)

## Overall Status: PASS

All required features are present, JS syntax is valid, netlify functions are unchanged, and the formula sheet has been meaningfully enhanced with use-when context, variable legends, and colour-coded section headers. Question count remains 178 (as established by third-pass QA), consistent with the expanded question bank.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `f1fcdda` — "Enhance formula sheet with use-when descriptions, variable legends, and colored topic headers" (2026-05-16) |
| JS syntax valid | ✅ | `node --check` on extracted JS passed with no errors |
| 118 questions intact | ⚠️ | **178 questions found** — exceeds original 118 target; consistent with previous QA pass, no new duplicates |
| Light mode CSS | ✅ | `--bg:#F8FAFC`, `--surface:#FFFFFF` present; full design-system var set in place |
| Dark mode toggle | ✅ | `darkModeBtn`, `toggleDarkMode`, 🌙/☀️ icons, localStorage persistence (8 matches) |
| Multi-week selection | ✅ | `selectWeekChip()`, `homeState.weeks[]` (2 matches) |
| Learn mode | ✅ | `showLearn()`, `learnMode`, `#learn` screen (13 matches) |
| I'm Confused button | ✅ | "😕 I'm Confused" → `showHintAI()` inline AI explanation |
| Hint 1 / Hint 2 | ✅ | Full 3-level reveal: `showHint1()` → `showHint2()` → `showHintAI()` (227 matches) |
| Multi-step math input | ✅ | `addStep()`, `.working-steps`, `.step-row`, MathQuill (19 matches) |
| Final Answer field | ✅ | `finalAnswer`, `.final-answer` (13 matches) |
| Notes overlay present | ✅ | `#notes-overlay` with week tabs and scrollable content (8 matches) |
| Formula overlay present | ✅ | `#formula-overlay` with `f-cvp` + enhanced `.fml-use` / `.fml-legend` content |
| Netlify functions unchanged | ✅ | `mark.js` and `explain.js` last touched in commit `7f50f72` — unmodified since initial setup |
| File size increased | ✅ | **7,047 lines** (vs ~1,458 original spec — 4.8× increase) |

---

## What Changed in the Latest Commit (`f1fcdda`)

The formula overlay (`#formula-overlay`) was enhanced with:

- `.fml-use` — "Use this when…" context sentence for every formula group
- `.fml-legend` — variable definition list for W3 CVP, W5 TVM, W7 NPV, W8 Valuation, W9 WACC
- Colour-coded section headers per topic (teal=CVP, green=TVM, red=NPV, purple=Valuation, amber=WACC)
- Expanded CVP tab: DOL formula, BEP variants, multi-product BEP
- Expanded TVM tab: annuity due, deferred annuity, growing/deferred perpetuity
- Expanded NPV tab: payback formula, growing perpetuity terminal value
- Expanded Valuation tab: bond premium/discount rule, multi-stage dividend growth
- Expanded WACC tab: HPR, beta interpretation, D/E weight conversion, after-tax debt cost

Only `index.html` was modified; netlify functions were not touched.

---

## Question Count Detail

| Week | Label | Count |
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

---

## Issues Found

### 1. Question count 60 above QA brief's 118 target (LOW — outdated spec)
The QUESTIONS array has 178 unique entries. The QA brief expected 118. No new duplicates were introduced. The brief's 118 figure is stale; the expanded bank is intentional.

### 2. Duplicate sub-question label text (INFO — not a real bug)
The text `question:'Calculate NPV for each project.'` appears in two different multipart parent questions (lines 3577 and 4246). These are part-a labels of different parent questions with different inputs, keywords, and model answers — not a functional duplicate.

### 3. No true/false (TF) questions (LOW — pre-existing)
`type:'tf'` count remains 0. This was flagged in the previous QA report. If TF questions are needed for exam coverage, they still need to be added.

### 4. Four `<script>` elements (INFO — by design)
Scripts present: main inline app (line 3028), a string inside `document.write` (not a real script tag), jQuery CDN (line 7041), MathQuill CDN (line 7042). MathQuill requires jQuery. This is intentional.

---

## Recommendations

1. **No action required** for this commit — formula enhancements are clean and additive.
2. **Verify live Netlify deploy** to confirm the enhanced formula sheet renders correctly (colour-coded headers, legend items, use-when text).
3. **Update QA brief** to reflect canonical question count of 178.
4. **Decide on TF questions** — add them if the exam includes true/false items.
5. **Smoke-test AI functions** at the live URL to confirm `/mark` and `/explain` respond correctly — cannot be verified by static analysis alone.
