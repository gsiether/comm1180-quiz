# COMM1180 Quiz App - QA Test Report
**Date:** 2026-06-19
**Tested by:** Automated QA Agent

## Overall Status: PASS

All required features are present and functional. The redesign was completed in prior sessions (commit `56f3fd5`). The question bank contains **178 questions** — larger than the 118 target due to multiple practice question batches added across sessions. Code is stable with no changes to `index.html` since `693ec73` (2026-06-11). Note: exam date was 2026-05-05 (45 days ago); app now serves as post-exam revision reference.

---

## Checklist

| Check | Result | Notes |
|-------|--------|-------|
| New commit (redesign) exists | ✅ | Redesign at `56f3fd5`; practice Qs added at `693ec73` (2026-06-11); only QA reports since |
| JS syntax valid | ✅ | `node --check` on extracted `<script>` block exits 0 — no errors |
| 118 questions intact | ⚠️ | **178 top-level questions** found (Python + awk agree). Exceeds 118 target — extra content added, no truncation |
| Light mode CSS | ✅ | `--bg:#F8FAFC; --surface:#FFFFFF` in `:root`; light mode is default |
| Dark mode toggle | ✅ | `toggleDarkMode()` (line 5075); `#darkModeBtn` in header with 🌙/☀️; persists via localStorage |
| Multi-week selection | ✅ | `.week-chip` grid (line 888); toggle handlers (line 4807); "All Weeks" chip |
| Learn mode | ✅ | `#learn` screen, `learnMode` flag in state, "📚 Learn Mode" tab, `renderLearnCard()` |
| I'm Confused button | ✅ | `#hintBtnAI` (line 5308) calls `showHintAI()` — inline AI explanation rendered |
| Hint 1 / Hint 2 | ✅ | `#hintBtn1` / `#hintBtn2` (lines 5304–5306); 3-level system: Hint 1 → Hint 2 → I'm Confused |
| Multi-step math input | ✅ | `addStep()` (line 5434); `.working-steps` / `.step-row` CSS; MathQuill CDN loaded |
| Final Answer field | ✅ | `.final-answer-wrap` + `.final-answer-label` rendered for numerical/multipart (lines 5348–5386) |
| Notes overlay present | ✅ | `#notes-overlay` with W2–W10 tab bar and full HTML study notes per week |
| Formula overlay present | ✅ | `#formula-overlay` with CVP/TVM/NPV/Valuation/WACC tabs (line 2445) |
| Practice Q1–Q12 present | ✅ | 12 practice exam questions confirmed in QUESTIONS array |
| Netlify functions unchanged | ✅ | MD5 of `mark.js` and `explain.js` match HEAD — no modifications |
| File size increased | ✅ | **7,061 lines** (vs original 1,458 — 4.8× larger) |

---

## Question Distribution

| Week | Topic | Type mix |
|------|-------|----------|
| 2 | Market Opportunities | SA, multipart |
| 3 | CVP/Pricing | MCQ, numerical, multipart |
| 4 | Technology/BSC | SA, multipart |
| 5 | Time Value of Money | Numerical, multipart |
| 7 | Capital Budgeting | Numerical, multipart |
| 8 | Valuation | Numerical, multipart |
| 9 | Risk & WACC | Numerical, multipart |
| 10 | Performance Measurement | SA, multipart |
| **Total** | | **178 questions** (42 MCQ, 69 numerical, 58 SA, 66 multipart sub-type occurrences) |

---

## Issues Found

### Minor / Informational

1. **Question count is 178, not 118.** The QUESTIONS array has grown through multiple practice question batches across sessions. This is not data loss — it is additional content. However, a deduplication audit is recommended (prior commits show partial deduplication was done but 60 extra questions remain vs target).

2. **No `type:'tf'` questions in the question bank.** The code supports true/false questions (renderTF, selectTF, scoring) but no questions currently use this type. Some multipart sub-questions embed "True or False?" wording but are typed as `sa`. This is a content gap, not a code bug.

3. **Three `<script>` tags present.** One inline block (line 3035, main app) + two external CDN imports (jQuery 2.2.4 + MathQuill 0.10.1, lines 7055–7056). Required for MathQuill math input. Not a defect.

---

## Recommendations

1. **Deduplication audit** — Check for duplicate question text across the 178 entries. Earlier git commits show dedup work was started (`d628905`, `9c5e904`) but may be incomplete.
2. **Add tf questions** — True/false question support is built in; writing some would round out the question bank.
3. **Exam has passed (2026-05-05):** Consider disabling this scheduled QA routine, or repurposing it for a future course.
4. **Netlify `ANTHROPIC_API_KEY`:** Confirm still active in Netlify dashboard — AI marking and explain require this env var.
