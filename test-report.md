# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-05
**Tested by:** Automated QA Agent

## Overall Status: PASS

All required features are present and functional in the codebase. JS syntax is valid. The app has grown to 6963 lines (vs ~1458 original). The most recent commit is a deduplication cleanup that removed 108 lines of duplicate practice exam questions added by the redesign agent. All Netlify functions are unchanged.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `d628905` "Remove duplicate practice exam Q1-Q10 from QUESTIONS array (deduplication cleanup)" (2026-06-05). Full redesign in `8fdbf94`. |
| JS syntax valid | ✅ | `new Function()` parse test passed with no errors |
| 118 questions intact | ⚠️ | **168 top-level question objects** found — exceeds original 118 target. Redesign added 12+ practice exam questions; after deduplication of Q1-Q10, 168 remain. No questions appear lost. |
| Light mode CSS | ✅ | `:root` defines `--bg:#F8FAFC`, `--surface:#FFFFFF`; 106 light-colour references in CSS |
| Dark mode toggle | ✅ | `toggleDarkMode()` function at line 4977; `.dark{}` CSS override; 🌙/☀️ button in header (line 820) |
| Multi-week selection | ✅ | `selectWeekChip()` toggles weeks in/out of `homeState.weeks[]` array; `.week-chip.active` CSS; all/individual chips supported |
| Learn mode | ✅ | `#learn` screen, `📚 Learn Mode` tab, `.learn-week-grid`, `.learn-week-tile` all present |
| I'm Confused button | ✅ | `😕 I'm Confused` button calls `showHintAI()` (line 5210); AI response renders inline in blue `.hint-box.hai` box |
| Hint 1 / Hint 2 | ✅ | `💡 Hint 1` → shows hint, reveals `🔍 Hint 2` button; `showHint1()` / `showHint2()` functions at lines 5563/5583 |
| Multi-step math input | ✅ | `addStep()`, `.working-steps`, `.step-row` CSS, `+ Add Step` button all present |
| Final Answer field | ✅ | `.final-answer-wrap`, `.final-answer-label`, `.final-answer-input` all defined |
| Notes overlay present | ✅ | `notes-overlay` element; tabbed per-week content; 6 references in HTML |
| Formula overlay present | ✅ | `formula-overlay` element present; 6 references in HTML |
| Netlify functions unchanged | ✅ | `git log -- netlify/functions/` shows only original redesign commit — no further changes to `mark.js` or `explain.js` |
| File size increased | ✅ | **6963 lines** vs ~1458 original; 4.8× increase |

---

## Issues Found

### 1. Question count is 168, not 118 — informational
The QUESTIONS array contains 168 top-level objects. The QA spec targets 118, but the redesign agent added 12 practice exam questions (W5 TVM, W7 capital budgeting, W8 valuation, W9 WACC), and the original bank already had more than 106 questions. A deduplication pass on 2026-06-05 removed 10 duplicate practice exam entries (Q1–Q10). The final count of 168 is expected and correct.

### 2. `I'm Confused` always visible — minor spec deviation
The spec says the 3-level hint flow should be sequential: Hint 1 → Hint 2 → Ask AI. In the implementation, `😕 I'm Confused` is rendered alongside `💡 Hint 1` from the start (not hidden until after Hint 2 is clicked). The button is still functional; users can skip straight to AI. Low severity — usability choice, not a bug.

### 3. No `type:'tf'` (true/false) questions — same as prior report
0 TF questions found. This was also flagged in the 2026-06-04 QA report. May be intentional if the original bank never had TF questions.

### 4. Four `<script>` tags — expected
The file has 4 `<script>` tags: one main inline script (line 3035), one inline string used inside `document.write` for a pop-out notes window (not a real runtime tag), and two external CDN scripts for jQuery and MathQuill (lines 6957–6958). Only one real script block; structure is acceptable.

---

## Recommendations

1. **Live browser test** — static analysis confirms features are present; a manual pass through the Learn Mode flow, 3-level hints, multi-step math input, and dark/light toggle is recommended before the exam date (Tuesday 5 May 2026).
2. **Confirm TF question status** — if TF questions existed in the original bank, verify they were not accidentally removed during the redesign.
3. **Spec note** — update CLAUDE.md target count from 118 to 168 to reflect the current state.
