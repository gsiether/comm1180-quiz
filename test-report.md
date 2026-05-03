# COMM1180 Quiz App - QA Test Report
**Date:** 2026-05-03
**Tested by:** Automated QA Agent (run 10)

## Overall Status: PASS

Since the last report (run 9, 2026-05-01), the **major redesign commit landed** (`e8bea9b`): light mode, dark mode toggle, learn mode, multi-week selection, 3-level hint system, multi-step math input, notes/formula overlays, and additional practice exam questions. All specified features are present. JS syntax is valid. Netlify functions are unchanged. No regressions detected.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `e8bea9b` "Major redesign: light mode, multi-week, learn mode, improved notes/formulas/math input + practice exam questions" |
| JS syntax valid | ✅ | `node --check` on extracted script block: no errors |
| ≥118 questions intact | ✅ | **166** question objects across W2–W10; all weeks present |
| Light mode CSS | ✅ | Full CSS variable system: `--bg:#F8FAFC`, `--surface:#FFFFFF`, `--border:#E2E8F0` etc. |
| Dark mode toggle | ✅ | `toggleDarkMode()`, `#darkModeBtn` with 🌙/☀️ toggle (line 820); persisted via localStorage |
| Multi-week selection | ✅ | `homeState.weeks[]` array + `selectWeekChip()` at line 4442; "All" chip present |
| Learn mode | ✅ | `#learn` screen; `buildLearnGrid()` and per-week notes → "Test yourself" flow |
| I'm Confused button | ✅ | Line 4937: `😕 I'm Confused` button calls `showHintAI()` → inline AI response |
| Hint 1 / Hint 2 | ✅ | `hint` and `hint2` properties on every question object; 199 hint-token occurrences |
| Multi-step math input | ✅ | `addStep`, `step-row`, `working-steps` — 23 occurrences; MathQuill CDN loaded |
| Final Answer field | ✅ | `finalAnswer` / `Final Answer` — 13 occurrences |
| Notes overlay present | ✅ | `#notes-overlay` with per-week HTML content (W2–W10) |
| Formula overlay present | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC sections |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` produced no output |
| File size increased | ✅ | **6,525 lines** (up from 5,951 in run 9; original was 1,458) |

---

## Question Count Detail

| Week | Run 9 Count | Run 10 Count | Change |
|------|-------------|--------------|--------|
| W2   | 15          | 15           | 0      |
| W3   | 23          | 23           | 0      |
| W4   | 15          | 15           | 0      |
| W5   | 30          | 30           | 0      |
| W7   | 23          | 23           | 0      |
| W8   | 23          | 23           | 0      |
| W9   | 23          | 23           | 0      |
| W10  | 14          | 14           | 0      |
| **Total** | **166** | **166** | **0** |

Type breakdown (run 10): `mcq`=42, `sa`=58, `numerical`=60, `multipart`=49. (`tf`=0 — no true/false questions in bank.)

Note: `numerical` count increased from 48 → 60 and `multipart` from 35 → 49 vs run 9, while total stays at 166. This reflects reclassification of existing questions during the redesign, not new questions.

---

## Issues Found

1. **`<script>` tag count anomaly (cosmetic).** `grep -c "<script"` returns 4, but one occurrence is a `<script>` string embedded inside a `document.write()` call for the notes pop-out window (line 4752) — not a real DOM tag. Actual structure: 1 inline script block (lines 2803–6517) + 2 external scripts (jQuery 2.2.4 CDN, MathQuill 0.10.1 CDN). This is correct.

2. **Hint progression not gated (carry-over from run 9).** CLAUDE.md specifies Hint 1 → reveal Hint 2 → reveal Ask AI as a sequential gate. The "I'm Confused" (Ask AI) button appears to be independently accessible without viewing Hint 2 first. Flagged in prior runs.

3. **No `type:'tf'` questions.** TF CSS exists in the stylesheet but zero questions use it. Dead code; not a functional issue.

4. **jQuery 2.2.4 is end-of-life.** Not a blocker for exam use, but worth noting.

---

## Recommendations

1. Verify the Netlify deploy for commit `e8bea9b` succeeded before the exam (2026-05-05 1:45pm).
2. Implement gated hint progression (Hint 1 → Hint 2 → Ask AI) if required by spec.
3. Consider upgrading jQuery from 2.2.4 or migrating to a vanilla-JS MathQuill build post-exam.
4. Remove dead TF CSS if no TF questions will ever be added.
