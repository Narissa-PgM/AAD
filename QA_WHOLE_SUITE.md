# Stewardship Workframe · Whole-Package Smoke Test

**Build:** 2026-11-08.1  
**Scope:** Local static HTML, JavaScript render and interaction test; *not* hosted GitHub Pages or a production security assessment.

## Verification results

| Test family | Result | What was checked |
|---|---:|---|
| HTML entry points | 11/11 loaded | Workframe, Suite, Playbook, Program Office, four v2 programs, Operations, Communications, Donor Profile |
| Page-level Chromium smoke checks | **100/100 passed** | Startup, chapter switching, representative controls, synthetic report selection |
| Additional deep interactions | **29/29 passed** | 25 Suite page destinations, 5 Operations layers, 7 donor-dossier views, communications artifact controls |
| Inline JavaScript parse | **23/23 passed** | Node.js syntax validation of all inline script blocks |
| Internal HTML references | **121/121 present** | Relative file references collected from links and code, excluding two generated email-ZIP members |
| Known destination hashes | **0 invalid** | Chapter IDs matched to actual page registers where machine-readable |
| Synthetic financial bridge checks | **4/4 passed** | Endowed, current-use, capital, and restricted-grant arithmetic |
| Browser runtime exceptions | **0** | Errors recorded by `pageerror` in tested interactions |
| Mobile layout | **No page-level overflow** | Workframe at 390 px viewport, image and content rendered |

## Issues resolved in this build

1. **Broken Front Door links:** old `Strategic_Leadership_Platform_v2.html`, `Donor_Impact_Reporting_Stewardship_v2.html`, `Team_Leadership_Operations_v2.html`, and `Campaign_Institutional_Initiatives_v2.html` were replaced with the actual current GitHub file names.
2. **Restricted-grant routing:** internal case code is `grant`, not `restricted`. The Front Door now deep-links to `donor-impact-reporting.html?case=grant#reports`.
3. **Team Leadership link:** the invalid `index.html#strategy` destination now resolves to `index.html#suite`.
4. **Framework duplication:** retained the detailed single `FRAMEWORK_CONTRACT.json`, updated its version, linked program routes, and canonical fictional financial bridges. Removed the redundant front-door manifest.
5. **Return navigation:** added context links across all HTML pages. For real same-origin navigation, internal links carry an encoded `return` path with the source chapter; a session-storage fallback supports the same-tab journey.
6. **Broken script injection during assembly:** the first test exposed an insertion inside email HTML text. The builder was corrected to append shared handlers at the actual final `</body>`. All parse checks passed afterward.

## Explicit limitations

* The local environment **blocks navigation to file:// and test-hosted HTTP(S) URLs**, so complete page-to-page navigation and browser history were not tested against a running GitHub Pages deployment. Internal filenames, declared chapter hashes and JavaScript return-navigation code were audited statically; direct working-page renders were tested with Chromium's `set_content`.
* `workframe.html#qa` contains an optional HTTP file-reachability preflight to run **after GitHub deployment**. It does not test the entire app or authorize donor communications.
* The photo in the front-door preview is an existing **illustrative workbench asset** shipped in `assets/steward_scene.webp`. A fresh image generation attempt failed; the new diagrams and controls are HTML/SVG and retain working links.
* Four fictional report cases balance mathematically but do not assert certification, genuine donor identity, donor-officer notes, or university authorization.
* GitHub Pages is static hosting and does not provide authenticated CRM access, secure cross-user audit records, server-side integrations, real bulk sending, or institutional approvals.
* Some companion pages link to external public portrait sources; images and their licenses should be rechecked after deployment.

## Post-upload acceptance procedure

1. Visit `https://narissa-pgm.github.io/AAD/workframe.html` and verify the photographic hero loads.
2. Click all four program cards and confirm their expected starting chapters: `#northstar`, `#reports`, `#team`, and `#campaign`.
3. On the donor reporting sample, select Restricted Grant; verify `SIM-GRT-2026` opens and the $300,000 = $211,000 + $89,000 bridge is visible.
4. Use the breadcrumb **Return to Workframe / Playbook** control; confirm it returns to the originating chapter in the same tab.
5. Run the **link preflight** on `workframe.html#qa` and inspect any missing files.
6. Check all 25 Suite sections, the 5 Operations layers, the 7 donor-dossier tabs, and the Program Office task controls on the live site.
7. Confirm all real donor data remains outside this public repo.

## Data and framework contract

The proposed framework uses: **One Harvard** for cross-unit coordination, **SMARTER** for implementation, the **Six-Check Release Gate** for evidence/authorization, and **VERITAS** for the seven-part donor narrative. The Latin motto is not asserted to be an official acronym. The versioned `FRAMEWORK_CONTRACT.json` is the checked reference, not a production database.
