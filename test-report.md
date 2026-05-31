# COMM1180 Quiz App - QA Test Report
**Date:** 2026-05-31
**Tested by:** Automated QA Agent

## Overall Status: PASS ✅

All required redesign features are present and verified. JS syntax is valid. Netlify functions are unchanged. The most recent commit (`27c685c`) added 12 practice exam questions (W5/W7/W8/W9) on top of the major redesign. Current question bank: **178 questions** across 8 weeks.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `27c685c` — "Add 12 practice exam questions (W5, W7, W8, W9) from university-provided practice screenshots" |
| JS syntax valid | ✅ | `node --check` on extracted script block returns no errors |
| 118 questions intact | ✅ | Actual count: **178** — exceeds the 118 baseline (intentional; see breakdown) |
| Light mode CSS | ✅ | 89 matches; default theme uses `--bg: #F8FAFC`, `--surface: #FFFFFF` from design spec |
| Dark mode toggle | ✅ | 30 matches; `.dark{}` CSS override + `toggleDarkMode()` + localStorage persistence |
| Multi-week selection | ✅ | `homeState.weeks[]` array + `selectWeekChip()` + `.week-chip` grid (`#weekChips`) |
| Learn mode | ✅ | 71 matches; `#learn` screen, `renderLearnCard()`, "📚 Learn Mode" tab |
| I'm Confused button | ✅ | `😕 I'm Confused` (`#hintBtnAI`); calls `showHintAI()` → `/explain` API; hidden in exam mode |
| Hint 1 / Hint 2 | ✅ | 230 matches; `showHint1()` / `showHint2()` with progressive reveal |
| Multi-step math input | ✅ | 19 matches; `addStep()` + `+ Add Step` button; `.step-row` / `#workingSteps` |
| Final Answer field | ✅ | 13 matches; `.final-answer-wrap` + `.final-answer-label` |
| Notes overlay present | ✅ | 8 matches; `#notes-overlay` with week tabs; pop-out window via `openNotesWindow()` |
| Formula overlay present | ✅ | 8 matches; `#formula-overlay` with tabs W3 CVP, W5 TVM, W7 NPV, W8 Val, W9 WACC |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` shows no changes to `mark.js` or `explain.js` |
| File size increased | ✅ | **7,071 lines** (vs original 1,458 — 4.85× larger) |

---

## Question Breakdown

| Type | Count |
|------|-------|
| `mcq` | 42 |
| `tf` | 0 (type label supported in code; no questions use it) |
| `numerical` | 53 |
| `sa` | 41 |
| `multipart` | 42 |
| **Total** | **178** |

---

## Additional Features Verified (Beyond Original Spec)

| Feature | Status | Notes |
|---------|--------|-------|
| Exam Mode (timed) | ✅ | `examMode` flag; hints disabled; separate timed exam UI |
| Practice Exam sessions | ✅ | Multiple practice exams (Canteen Kitchen, VoltRide, PulseWear) |
| APR⇄EAR reverse formula | ✅ | Added to W5 notes and formula sheet |
| Notes pop-out window | ✅ | `openNotesWindow()` opens notes in separate browser window |
| Admin panel | ✅ | Password-gated (`abc123`); stats and data management |
| History screen | ✅ | Past sessions stored in localStorage; per-question breakdown |
| Settings overlay | ✅ | Shuffle, hints toggle, count, API key |

---

## Issues Found

### Minor (Non-blocking)

1. **Question count is 178, not 118** — Not a regression. Multiple question rounds were added after the original redesign baseline. All 8 weeks W2–W10 are represented; no truncation detected.

2. **No `type:'tf'` questions** — True/False support exists in the rendering code (has a "True/False" label) but no questions use this type. Not a blocker.

3. **`<script>` at line 5133 appears in grep count** — This instance is inside a JS string literal (`w.document.write(...)`) for the notes pop-out window, not a real HTML script block. There is one real inline `<script>` block (line 3035) plus external CDN scripts for jQuery and MathQuill.

4. **jQuery 2.2.4 is EOL** — Used as MathQuill CDN dependency. Consider upgrading to jQuery 3.7+ when time permits.

5. **Exam date has passed** — The in-person exam was 2026-05-05. App remains useful for revision and future cohorts.

---

## Recommendations

1. **No action required on core functionality** — All redesign features verified present and syntax-valid.
2. **Update `CLAUDE.md`** — Revise expected question count from 118 → 178 to prevent false negatives in future QA runs.
3. **Verify Netlify deploy** — Confirm `ANTHROPIC_API_KEY` is set in the Netlify dashboard and the AI mark/explain endpoints are live.
4. **Upgrade jQuery** — Replace jQuery 2.2.4 CDN link with jQuery 3.7+ for security maintenance.
