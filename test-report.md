# COMM1180 Quiz App - QA Test Report
**Date:** 2026-08-17
**Tested by:** Automated QA Agent (Pass 55)

## Overall Status: PARTIAL PASS ⚠️

> **Recurring issue (unresolved since pass 44):** 12 practice exam questions (Q1–Q12) remain duplicated in the QUESTIONS array. This was re-introduced by commit `7c4fdaa` on 2026-08-16 and has not been fixed since. The app is fully functional but carries ~12 redundant question objects.

> **No changes since pass 54 (2026-08-16).** index.html is unchanged. The findings below reflect the same state as yesterday's report.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | HEAD = `dcd5186` QA report (pass 54, 2026-08-16); no redesign agent commit today |
| JS syntax valid | ✅ | `new Function(src)` parses without error; `localStorage` error in Node is expected (browser API) |
| 118+ questions present | ⚠️ | 193 raw entries in QUESTIONS array; ~12 are confirmed duplicates → ~181 unique |
| Light mode CSS | ✅ | `--bg: #F8FAFC`, `--surface: #FFFFFF`, `EFF6FF`, etc. (96 matches) |
| Dark mode toggle | ✅ | `toggleDarkMode()` function present (30 matches for dark/toggle/moon/sun) |
| Multi-week selection | ✅ | `homeState`, `selectWeekChip`, `weekChip` — 36 matches (uses different naming than spec) |
| Learn mode | ✅ | `learnMode`, `#learn` screen, "Learn Mode" tab — 71 matches |
| I'm Confused button | ✅ | "😕 I'm Confused" calling `showHintAI()` — 3 matches |
| Hint 1 / Hint 2 | ✅ | `hint` and `hint2` fields present — 246 matches |
| Multi-step math input | ✅ | `addStep`, `step-row`, `working-steps` — 19 matches; MathQuill CDN loaded |
| Final Answer field | ✅ | `finalAnswer` / `Final Answer` — 13 matches |
| Notes overlay present | ✅ | `notes-overlay` with week-tab structure — 8 matches |
| Formula overlay present | ✅ | `formula-overlay` with CVP/TVM/NPV/WACC — 8 matches |
| Netlify functions unchanged | ✅ | No changes to `netlify/` in any commit since original build |
| File size increased | ✅ | 7,195 lines (up from original 1,458; stable vs pass 54 at 7,195) |

---

## Question Count by Week (raw, including duplicates)

| Week | Raw count | Notes |
|------|-----------|-------|
| W2 | 15 | |
| W3 | 26 | |
| W4 | 15 | |
| W5 | 37 | Includes ~4 duplicated practice exam Q1–Q4 |
| W7 | 29 | Includes ~3 duplicated practice exam Q5–Q7 |
| W8 | 29 | Includes ~3 duplicated practice exam Q8–Q10 |
| W9 | 28 | Includes ~2 duplicated practice exam Q11–Q12 |
| W10 | 14 | |
| **Total** | **193** | ~181 unique; 12 duplicates from `7c4fdaa` (2026-08-16) |

---

## Script Tag Analysis (Informational)
4 `<script` occurrences — all legitimate:
1. Line 3035 — main inline JS block
2. Line 5230 — inside a JS string literal (popup HTML builder — not a real DOM tag)
3. Line 7189 — jQuery 2.2.4 CDN
4. Line 7190 — MathQuill 0.10.1 CDN

---

## Issues Found

### ❌ Recurring: 12 Duplicate Practice Exam Questions (since pass 44)

The 12 practice exam questions (Q1–Q12) were removed in commit `d72225e` (pass 44, 2026-08-08) but re-added by commit `7c4fdaa` (2026-08-16). They are now duplicated again under the comment header `// PRACTICE EXAM QUESTIONS (from official UNSW practice exam)` at lines ~4639–4773, while the originals exist under `// WEEK N — Practice Exam Questions` headers earlier in the array.

**Pattern of re-introduction:**
| Commit | Action |
|--------|--------|
| Pre-pass 44 | Q1–Q12 first added |
| `d72225e` (2026-08-08) | QA removed 12 duplicates |
| `fe3d8a4` (2026-08-11) | Re-added from "university practice materials" |
| `d72225e` (2026-08-08) — wait, see below | This was a different removal |
| `7c4fdaa` (2026-08-16) | Added AGAIN from "official UNSW practice exam" |

**Impact:** Exam prep quiz users will encounter the same question twice. Statistics and coverage tracking are inflated.

**Fix required:** Remove the block at lines ~4639–4773 (`// ── PRACTICE EXAM QUESTIONS (from official UNSW practice exam) ──` through end of Q12). A redesign/content agent must be told not to add Q1–Q12 again — they already exist in the `// WEEK N — Practice Exam Questions` blocks added earlier.

---

## Recommendations

1. **Remove the duplicate block (lines ~4639–4773)** — a one-time edit to delete the second set of Q1–Q12 from the QUESTIONS array.
2. **Guard against re-insertion** — add a code comment like `// DO NOT ADD Q1–Q12 here — they already exist above (Week N sections)` at the insertion point that agents keep targeting.
3. **Automate duplicate detection in QA** — next pass should compare question `question` or `scenario` strings and flag any pair with >90% similarity before committing.
