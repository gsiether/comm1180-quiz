# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-03
**Tested by:** Automated QA Agent

## Overall Status: PASS ✅

All required redesign features are present and verified. JS syntax is valid. Netlify functions are unchanged. The question bank contains **178 questions** (exceeds the 118 baseline). The latest commit (`8fdbf94`) is mislabeled "Major redesign" but in practice made only 2 minor tweaks — this is documented under Issues below.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `8fdbf94` — "Major redesign: light mode, multi-week, learn mode…" (2026-06-03) |
| JS syntax valid | ✅ | `node --check` on extracted script block returns no errors |
| 118 questions intact | ✅ | Actual count: **178** — exceeds the 118 baseline (see breakdown below) |
| Light mode CSS | ✅ | Default theme uses `--bg: #F8FAFC`, `--surface: #FFFFFF` per design spec |
| Dark mode toggle | ✅ | `toggleDarkMode()` + `.dark{}` CSS override + 🌙/☀️ button + localStorage |
| Multi-week selection | ✅ | `homeState.weeks[]` array + `selectWeekChip()` + `.week-chip` grid (`#weekChips`) |
| Learn mode | ✅ | `#learn` screen + `renderLearnCard()` + "📚 Learn Mode" tab on home screen |
| I'm Confused button | ✅ | `😕 I'm Confused` (`#hintBtnAI`); calls `showHintAI()` → `/explain` API |
| Hint 1 / Hint 2 | ✅ | `showHint1()` / `showHint2()` with progressive reveal; 234 occurrences in code |
| Multi-step math input | ✅ | `addStep()` + `+ Add Step` button; `.step-row` / `#workingSteps` containers |
| Final Answer field | ✅ | `.final-answer-wrap` + `.final-answer-label` for numerical/multipart questions |
| Notes overlay present | ✅ | `#notes-overlay` with 8 week tabs (`n-w2`–`n-w10`); pop-out window supported |
| Formula overlay present | ✅ | `#formula-overlay` with tabs: W3 CVP, W5 TVM, W7 NPV, W8 Valuation, W9 WACC |
| Netlify functions unchanged | ✅ | `git show HEAD -- netlify/` returns no diff; functions untouched |
| File size increased | ✅ | **7,071 lines** (vs original 1,458 lines — 4.85× larger) |

---

## Question Breakdown

**By type (top-level questions only):**

| Type | Count |
|------|-------|
| `mcq` | 42 |
| `numerical` | 53 |
| `sa` | 41 |
| `multipart` | 42 |
| `tf` | 0 |
| **Total** | **178** |

**By week:** W2 (15), W3 (23), W4 (15), W5 (24), W7 (22), W8 (18), W9 (26), W10 (15)

---

## Issues Found

### Minor (Non-blocking)

1. **Misleading commit message** — The latest commit (`8fdbf94`) is titled "Major redesign: light mode, multi-week, learn mode…" but only made **2 minor changes** to an already-redesigned app:
   - `.fml-expr` font-size: `.88rem` → `1.02rem` (formula expression text slightly larger)
   - Count chips array: `[5,10,15,20]` → `[5,10,15,20,25]` (added 25-question option)

   The actual major redesign was performed in earlier commits. This new commit is a minor enhancement.

2. **Question count is 178, not 118** — Not a regression. Additional SA/numerical questions were added in prior commits. All 8 weeks (W2–W10) are represented; no truncation detected.

3. **No `type:'tf'` questions** — True/False rendering support exists in the code but zero questions use this type. Not a blocker.

4. **`<script>` tag in JS string** — Line 5133 contains `+'<script>'+` inside a `w.document.write(...)` string for the notes pop-out window. This is correctly escaped as `<\/script>` and does not affect HTML parsing. The real inline `<script>` block is at line 3035; plus 2 external CDN scripts (jQuery 2.2.4, MathQuill 0.10.1) at lines 7065–7066.

5. **jQuery 2.2.4 is EOL** — Used as MathQuill CDN dependency. Consider upgrading to jQuery 3.7+ when time permits.

6. **Exam date has passed** — The in-person exam was 2026-05-05. App remains useful for revision and future cohorts.

---

## Recommendations

1. **No action required on core functionality** — All redesign features verified present and syntax-valid.
2. **Update `CLAUDE.md`** — Revise expected question count from 118 → 178 to prevent false negatives in future QA runs.
3. **Verify Netlify deploy** — Confirm `ANTHROPIC_API_KEY` is set in the Netlify dashboard and the AI mark/explain endpoints are live.
4. **Use accurate commit messages** — Label small tweaks as "minor: ..." rather than "Major redesign" to keep git history informative.
5. **Upgrade jQuery** — Replace jQuery 2.2.4 CDN link with jQuery 3.7+ for security maintenance.
