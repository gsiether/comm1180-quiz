# COMM1180 Quiz App - QA Test Report
**Date:** 2026-05-07
**Tested by:** Automated QA Agent (run 14)

## Overall Status: PASS

> **Note:** No new redesign/feature commit was found since the last QA run (run 13). The most recent feature commit remains `dec1222` ("Fix formula buttons to open in-app overlay instead of PDF link", 2026-05-06). If a redesign agent was meant to run before this QA cycle, it appears to have made no changes — all features were already in place from prior sessions.

## Checklist
| Check | Result | Notes |
|-------|--------|-------|
| New commit since last QA | ❌ | No new commit since run 13 (f07cc2d). Last feature commit: `dec1222` |
| JS syntax valid | ✅ | `node --check` exits 0 — no syntax errors detected |
| 118+ questions intact | ✅ | 166 top-level questions in QUESTIONS array (lines 2839–4306); well above 118 target |
| Light mode CSS | ✅ | 23 matches for `white`/`#ffffff`/`--bg: #F8FAFC`/`--surface: #FFFFFF` |
| Dark mode toggle | ✅ | `toggleDarkMode()` at line 4718; 🌙/☀️ button in header (line 820); persisted in localStorage |
| Multi-week selection | ✅ | `.week-chip` UI (lines 120–132); `homeState.weeks[]` and chip click handlers wired |
| Learn mode | ✅ | `quizState.learnMode` flag; `#learn` screen; `renderLearnCard()` function |
| I'm Confused button | ✅ | `hintBtnAI` at line 4951; hidden until after hints shown (fixed in prior commit) |
| Hint 1 / Hint 2 | ✅ | `hintBtn1` (line 4947) and `hintBtn2` (line 4949); Hint 2 hidden until Hint 1 clicked |
| Multi-step math input | ✅ | 23 matches for `addStep`/`working-step`/`step-row`/`mathStep` |
| Final Answer field | ✅ | 13 matches for `finalAnswer`/`final-answer`/`Final Answer` |
| Notes overlay present | ✅ | `#notes-overlay` at line 1153; tabs for W2–W10 with content |
| Formula overlay present | ✅ | `#formula-overlay` at line 2439; all four 📐 buttons open in-app overlay |
| Netlify functions unchanged | ✅ | `git diff HEAD~1 -- netlify/` is empty — mark.js and explain.js untouched |
| File size increased | ✅ | 6,711 lines (vs original 1,458 lines) |

## Question Type Breakdown
| Type | Count (in QUESTIONS array) |
|------|---------------------------|
| `mcq` | 42 |
| `numerical` | 48 |
| `sa` | 58 |
| `multipart` | 35 |
| `tf` (true/false) | 0 |
| **Total top-level** | **166** |

*Count method: `{week:` occurrences in QUESTIONS array (lines 2839–4306). Each top-level question carries `{week:N`, multipart parts do not.*

## Issues Found

1. **No new redesign commit**: The task prompt states "a redesign agent ran before you", but `git log` shows no new commits since the previous QA run (run 13). This QA is re-verifying the same codebase. No regression detected.

2. **No true/false questions**: `type:'tf'` is absent throughout the question bank. This appears intentional (T/F questions converted to MCQ format in earlier sessions), consistent with all prior QA runs.

3. **Three script tags present**: Inline `<script>` at line ~2817 (main app logic); external jQuery 2.2.4 at line 6705; external MathQuill 0.10.1 at line 6706. The external scripts are required dependencies for the math-step input feature — not a defect. jQuery 2.2.4 is end-of-life with known vulnerabilities; low risk for an internal exam prep tool.

## Recommendations

1. Confirm that the intended redesign agent ran and investigate why no new commit is present. If it was supposed to make changes, it may have encountered an error.
2. The exam date has passed (exam was 2026-05-05, today is 2026-05-07). The app is post-exam; further feature work may not be needed.
3. If the app will be reused or adapted, upgrade jQuery from 2.2.4 to a current version.
