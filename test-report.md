# COMM1180 Quiz App - QA Test Report
**Date:** 2026-07-09
**Tested by:** Automated QA Agent

## Overall Status: PASS

All required features confirmed present. JS syntax clean. **178 questions** now in QUESTIONS array (up from 166 yesterday — practice exam questions successfully added by today's redesign commit). Netlify functions untouched.

---

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit exists | ✅ | `a6efd94` — "Major redesign: light mode, multi-week, learn mode, improved notes/formulas/math input + practice exam questions" (2026-07-09 15:13 UTC) |
| JS syntax valid | ✅ | `node --check` on extracted JS (329,351 chars) — no errors |
| ≥118 questions intact | ✅ | **178 questions** found in QUESTIONS array (up from 166 on 2026-07-08) |
| Light mode CSS | ✅ | 69 occurrences — `--bg:#F8FAFC`, `--surface:#FFFFFF`, Inter font, target design system in place |
| Dark mode toggle | ✅ | `darkMode`, `toggleDark` present (8 matches) |
| Multi-week selection | ✅ | `selectedWeeks`, `toggleWeek` present (2 matches) |
| Learn mode | ✅ | `learnMode`, `#learn`, `Learn Mode` present (12 matches) |
| I'm Confused button | ✅ | `confused`, `Confused` present (3 matches) |
| Hint 1 / Hint 2 | ✅ | `hint1`, `hint2`, `showHint` present (235 matches) |
| Multi-step math input | ✅ | `addStep`, `working-steps`, `workingSteps` present (23 matches) |
| Final Answer field | ✅ | `finalAnswer`, `Final Answer` present (13 matches) |
| Notes overlay present | ✅ | `notes-overlay`, `notesOverlay` present (8 matches) |
| Formula overlay present | ✅ | `formula-overlay`, `formulaOverlay` present (8 matches) |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` — 0 lines changed |
| File size increased | ✅ | **7,063 lines** (was 1,458 originally; 4.8× growth) |

---

## Question Bank

**178 total questions** in QUESTIONS array (bracket-tracked count, excludes false positives from NOTES/WEEKS objects).

Question type grep counts across full file (includes multipart sub-parts):
`mcq`:42, `numerical`:69, `sa`:73, `multipart`:66, `tf`:0

---

## Issues Found

### Note — `grep -c "week:[0-9]" index.html` returns 218, not 178
The raw file-wide grep inflates the count because `week:` also appears in `WEEKS{}`, `NOTES{}`, and `FORMULA_MAP{}` lookup objects. Bracket-tracked parse of the QUESTIONS array confirms 178 top-level question objects. No defect.

### Note — Script tag counts appear unusual in grep
`grep -c '<script>'` returns 2; `grep -c '</script>'` returns 3. On inspection:
- The second `<script>` (line 5102) is inside a JavaScript `document.write()` string that builds a popup notes window — not a real duplicate tag.
- The three `</script>` matches are: the real closing tag (line 7055) plus two self-closing external script tags (`<script src="..."></script>`) at lines 7057–7058.
- JS syntax check passed — no actual issue.

### Note — External CDN dependencies
jQuery 2.2.4 and MathQuill 0.10.1 loaded from `cdnjs.cloudflare.com` for the multi-step math input feature. Math input UI will degrade if CDN is unreachable (e.g. offline or exam-room network). Low risk for typical use but worth noting for an in-person exam environment.

### Note — No true/false (`tf`) questions
Zero `type:'tf'` entries detected. Supported by the renderer but not used. Not a blocker.

---

## Recommendations

1. **Verify math input degrades gracefully** if MathQuill CDN is unreachable — especially relevant for in-person exam sessions with restricted networks.
2. **Smoke-test the popup notes window** (the `document.write` pattern on line 5102) in Chrome; some browsers restrict `document.write` in certain security contexts.
3. Confirm `ANTHROPIC_API_KEY` is still set in Netlify dashboard after today's deploy triggers.
4. No action needed on question count — 178 > 118 target, and the 12 practice exam questions are confirmed added.
