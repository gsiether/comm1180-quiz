# COMM1180 Quiz App - QA Test Report
**Date:** 2026-05-04
**Tested by:** Automated QA Agent (run 11)

## Overall Status: PASS

The redesign is live and all required features are present. Since the last report (run 10, 2026-05-03), two new commits added **Practice Exams 4 and 5** (PulseWear case study questions stored in separate arrays from QUESTIONS). The core QUESTIONS bank is unchanged at 166 entries. JS syntax is valid. Netlify functions are unchanged. File size grew to 6,711 lines. No regressions detected.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | Latest: `0b0abfb` "Add Practice Exam 5 — PulseWear Section B only". Redesign: `e8bea9b` "Major redesign: light mode, multi-week, learn mode, improved notes/formulas/math input + practice exam questions" |
| JS syntax valid | ✅ | `node --check` on extracted script block: no errors |
| ≥118 questions intact | ✅ | **166** question objects across W2–W10; all weeks present |
| Light mode CSS | ✅ | Full CSS variable system: `--bg:#F8FAFC`, `--surface:#FFFFFF`, `--border:#E2E8F0` etc. |
| Dark mode toggle | ✅ | `toggleDarkMode()`, `#darkModeBtn` with 🌙/☀️ toggle (line 820); persisted via localStorage |
| Multi-week selection | ✅ | `.week-chip` elements + `selectWeekChip()` at line 4456; "All" chip present |
| Learn mode | ✅ | `#learn` screen; "📚 Learn Mode" tab; learn-week-tile grid → per-week notes → "Test yourself" flow |
| I'm Confused button | ✅ | Line 4951: `😕 I'm Confused` button calls `showHintAI()` → inline AI response |
| Hint 1 / Hint 2 | ✅ | Progressive reveal: `showHint1()` at line 5304 reveals Hint 2; `showHint2()` at line 5328 reveals AI |
| Multi-step math input | ✅ | `addStep()` at line 5077; `.working-steps`, `.step-row` classes; MathQuill CDN loaded |
| Final Answer field | ✅ | `.final-answer-wrap` + "Final Answer" label at lines 4991–4992 |
| Notes overlay present | ✅ | `#notes-overlay` at line 1153 with per-week HTML content (W2–W10) |
| Formula overlay present | ✅ | `#formula-overlay` at line 2439 with CVP/TVM/NPV/Valuation/WACC sections |
| Netlify functions unchanged | ✅ | `mark.js` md5sum identical to original `65468c2` commit; no changes in git history after initial setup |
| File size increased | ✅ | **6,711 lines** (up from 6,525 in run 10; original was 1,458) |

---

## Question Count Detail

| Week | Run 10 Count | Run 11 Count | Change |
|------|--------------|--------------|--------|
| W2   | 15           | 15           | 0      |
| W3   | 23           | 23           | 0      |
| W4   | 15           | 15           | 0      |
| W5   | 30           | 30           | 0      |
| W7   | 23           | 23           | 0      |
| W8   | 23           | 23           | 0      |
| W9   | 23           | 23           | 0      |
| W10  | 14           | 14           | 0      |
| **Total** | **166** | **166** | **0** |

Type breakdown (run 11): `mcq`=42, `sa`=58, `numerical`=48, `multipart`=35. (`tf`=0 — no true/false questions in bank.)

Note: Practice Exam 4 (PulseWear T1 2026 case study) and Practice Exam 5 (PulseWear Section B) are stored in separate JS variables at lines 6495–6700 and are NOT part of the QUESTIONS array. They are rendered via their own exam-selection flow.

---

## Issues Found

1. **`<script>` tag count anomaly (cosmetic).** `grep -c "<script"` returns 4, but one occurrence is a `<script>` string embedded inside a `document.write()` call for the notes pop-out window — not a real DOM tag. Actual structure: 1 inline script block + 2 external scripts (jQuery 2.2.4 CDN, MathQuill 0.10.1 CDN). This is correct.

2. **Hint progression not fully gated (carry-over).** CLAUDE.md specifies Hint 1 → reveal Hint 2 → reveal Ask AI as a sequential gate. The "I'm Confused" (Ask AI) button at line 4951 renders without `display:none`, so it is visible from the start alongside Hint 1 rather than appearing only after Hint 2 is clicked. `showHint2()` does call `bAI.style.display=''` but this is a no-op since the button is already visible. Functionally the AI button works; the progressive disclosure is not enforced.

3. **No `type:'tf'` questions.** TF CSS exists in the stylesheet but zero questions use it. Dead code; not a functional issue.

4. **jQuery 2.2.4 is end-of-life.** Not a blocker for exam use, but worth noting.

---

## Recommendations

1. The exam is **tomorrow** (2026-05-05 1:45pm). Verify the Netlify deploy for `0b0abfb` succeeded and all 5 practice exams are accessible.
2. Implement gated hint progression (Hint 1 → Hint 2 → Ask AI) post-exam if desired: add `style="display:none"` to `hintBtnAI` and keep current `showHint2()` logic to reveal it.
3. Consider upgrading jQuery from 2.2.4 or migrating to a vanilla-JS MathQuill build post-exam.
4. Remove dead TF CSS if no TF questions will ever be added.
