# Stewardship Operating Portfolio — navigable GitHub Pages suite

**New:** `profile.html` is the aligned professional executive profile. Every HTML page now includes a persistent **Journey Navigator** with a 12-workspace map, chapter-aware current location, previous stop, resume-playbook link, and a suggested 5-stop reviewer route. The tracker stores only URLs/page visits in the browser's localStorage; it does not store donor content or transmit data.

Suggested hiring link: `https://narissa-pgm.github.io/AAD/profile.html` (profile first) or `https://narissa-pgm.github.io/AAD/workframe.html` (operating map first). Existing `index.html` remains the Operating Suite root to preserve links.

Upload *all* files and the `assets/` folder. The new `assets/wayfinder.css` and `assets/wayfinder.js` are required; replacing an HTML file alone does not install the navigator. Clear browser local storage using the navigator's **Clear visit history** link if necessary.

The original uploaded professional profile discussed a different, fictional analytics-director role. The new `profile.html` focuses the relevant career evidence on a **proposed AA&D stewardship role** and removes that unrelated posting/financial model from the public site. Career figures are as reported in the supplied professional profile, not independently verified.

# Stewardship Operating Workframe · GitHub Pages package

## Deployment
Upload **all files and the `assets/` folder** to the root of your `narissa-pgm/AAD` repository.

* `workframe.html` — the new cross-program visual front door. Suggested portfolio-facing link: https://narissa-pgm.github.io/AAD/workframe.html
* `index.html` — retain the interactive Operating Suite at the existing site root to preserve previously published deep links.
* `playbook.html` — the Executive Playbook.
* Four working programs: `strategic-leadership.html`, `donor-impact-reporting.html`, `team-leadership.html`, `campaign-initiatives.html`.
* Supporting workspaces: `program-office.html`, `operations.html`, `communications.html`, `donor-profile.html`.

The four program links in the uploaded draft had obsolete filenames. They have been replaced with checked, existing files and chapter IDs. Do not rename the HTML files during upload.

## Framework definitions
* **One Harvard** — cross-unit coordination without asserting control over decentralized systems.
* **SMARTER** — Specifically, Measurably, Achievably, Relevantly, Time-bound, Evaluated, Reviewed.
* **Six-Check Release Gate** — Intent, Reconciliation, Consent, Traceability, Attribution, Authorization.
* **VERITAS** — Vision, Experience, Results, Investment, Truth, Advancement, Stewardship. This is a **proposed donor editorial mnemonic**, not an official expansion of Harvard's Latin motto.

The metadata and case bridges are versioned in `FRAMEWORK_CONTRACT.json`. Existing applications still contain their own datasets and editorial logic; the new manifest is an audited synchronization reference, **not** a live shared database.

## Navigation
All working pages include the compact Workframe / Suite / Playbook / Program Office toolbar. Cross-page HTML links append an encoded `return` address, preserving the previous page's chapter; a session-storage fallback is also used.

## Provenance
All donor profiles, finances, gift-officer notes, approval records, campaign goals, and staffing scores in sample workspaces remain synthetic. GitHub Pages is public static hosting, not an approved donor-data system, credential store, or mass-email sender.

## Validation
See `QA_WHOLE_SUITE.md` for file-level, route, arithmetic, and browser smoke-test findings. On GitHub Pages, open `workframe.html#qa` to run the built-in HTTP reachability preflight. This is a **reachability diagnostic only**, not proof of production functionality.
