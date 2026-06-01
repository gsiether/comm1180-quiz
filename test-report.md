# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-01
**Tested by:** Automated QA Agent

## Overall Status: PASS ✅

All required redesign features are present and verified. JS syntax is valid. Netlify functions are unchanged. The current question bank contains **178 questions** across 8 weeks (exceeds the 118 baseline; additional SA/numerical questions were added in subsequent commits).

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `27c685c` — "Add 12 practice exam questions (W5, W7, W8, W9)"; redesign in `c90b28b` |
| JS syntax valid | ✅ | `node --check` on extracted script block returns no errors |
| 118 questions intact | ✅ | Actual count: **178** — exceeds the 118 baseline (see breakdown below) |
| Light mode CSS | ✅ | Default theme uses `--bg: #F8FAFC`, `--surface: #FFFFFF` from design spec |
| Dark mode toggle | ✅ | `.dark{}` CSS override + `toggleDarkMode()` + 🌙/☀️ button + localStorage |
| Multi-week selection | ✅ | `homeState.weeks[]` array + `selectWeekChip()` + `.week-chip` grid (`#weekChips`) |
| Learn mode | ✅ | `#learn` screen + `renderLearnCard()` + "📚 Learn Mode" tab on home screen |
| I'm Confused button | ✅ | `😕 I'm Confused` (`#hintBtnAI`); calls `showHintAI()` → `/explain` API; hidden in exam mode |
| Hint 1 / Hint 2 | ✅ | `showHint1()` / `showHint2()` with progressive reveal across all question types |
| Multi-step math input | ✅ | `addStep()` + `+ Add Step` button; `.step-row` / `#workingSteps` containers |
| Final Answer field | ✅ | `.final-answer-wrap` + `.final-answer-label` for numerical/multipart |
| Notes overlay present | ✅ | `#notes-overlay` with week tabs `#n-w2`–`#n-w10`; pop-out window via `openNotesWindow()` |
| Formula overlay present | ✅ | `#formula-overlay` with tabs: W3 CVP, W5 TVM, W7 NPV, W8 Valuation, W9 WACC |
| Netlify functions unchanged | ✅ | Only created in initial commit; no later commits touch `mark.js` or `explain.js` |
| File size increased | ✅ | **7,071 lines** (vs original 1,458 — 4.85× larger) |

---

## Question Breakdown by Type

| Type | Count |
|------|-------|
| `mcq` | 42 |
| `numerical` | 53 |
| `sa` | 41 |
| `multipart` | 42 |
| `tf` | 0 (type handled in code; no questions use it) |
| **Total** | **178** |

## Question Breakdown by Week

| Week | Count | Topic |
|------|-------|-------|
| W2 | 15 | Market Opportunities |
| W3 | 23 | CVP / Pricing |
| W4 | 15 | Technology / BSC |
| W5 | 34 | Time Value of Money |
| W7 | 26 | Investment / Capital Budgeting |
| W8 | 26 | Investors / Valuation |
| W9 | 25 | WACC |
| W10 | 14 | Performance Measurement |
| **Total** | **178** | |

---

## Additional Features Verified (Beyond Original Spec)

| Feature | Status | Notes |
|---------|--------|-------|
| Exam Mode (timed) | ✅ | `examMode` flag; hints disabled; separate timed exam UI |
| Practice Exam sessions | ✅ | Multiple practice exams in session history |
| Notes pop-out window | ✅ | `openNotesWindow()` opens notes in separate browser window |
| Admin panel | ✅ | Password-gated (`abc123`); stats and data management |
| History screen | ✅ | Past sessions stored in localStorage; per-question breakdown |
| Settings overlay | ✅ | Shuffle, hints toggle, count, API key |

---

## Issues Found

### Minor (Non-blocking)

1. **Question count is 178, not 118** — Not a regression. Multiple question rounds were added after the original redesign baseline. All 8 weeks W2–W10 are represented; no truncation detected. Recommend updating `CLAUDE.md` to reflect the new baseline of 178.

2. **No `type:'tf'` questions** — True/False rendering support exists in the code but no questions use this type. Not a blocker.

3. **`<script>` tag inside JS string at line 5133** — Appears in a `w.document.write(...)` string for the notes pop-out window, not a real HTML script block. There is exactly one real inline `<script>` block (line 3035) plus external CDN scripts for jQuery and MathQuill. Not an issue.

4. **jQuery 2.2.4 is EOL** — Used as MathQuill CDN dependency. Consider upgrading to jQuery 3.7+ when time permits.

5. **Exam date has passed** — The in-person exam was 2026-05-05. App remains useful for revision and future cohorts.

---

## Recommendations

1. **No action required on core functionality** — All redesign features verified present and syntax-valid.
2. **Update `CLAUDE.md`** — Revise expected question count from 118 → 178 to prevent false negatives in future QA runs.
3. **Verify Netlify deploy** — Confirm `ANTHROPIC_API_KEY` is set in the Netlify dashboard and the AI mark/explain endpoints are live.
4. **Upgrade jQuery** — Replace jQuery 2.2.4 CDN link with jQuery 3.7+ for security maintenance.
