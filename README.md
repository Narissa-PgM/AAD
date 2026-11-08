# University Stewardship Executive Work Sample · GitHub Pages package

Upload **all six HTML pages** and `.nojekyll` to the root of your `AAD` repository. These are independent portfolio demonstrations; do not upload real donor information.

- `index.html` — Reporting Platform, four synthetic donor reports, data flow, automation and tracking.
- `playbook.html` — Operating Playbook, **now includes Donor Review Workspace as a native interactive chapter** (`#donor`).
- `communications.html` — Storytelling and communications library, featuring the illustrated five-stage donor-story infographic.
- `donor-profile.html` — Optional extended synthetic dossier; the principal donor-review workflow is inside the playbook.
- `operations.html` — Existing Operations Board (unchanged).
- `FRAMEWORK_CONTRACT.json` — Shared narrative/release standards.

## Playbook ↔ platform return navigation
The playbook writes its current section to session storage on section navigation and outbound links. The main platform includes a "Return to playbook" button, preserving the last chapter. State is kept in the same browser tab and domain; it is not a permanent user profile and is not transferred between private tabs or devices. Direct links such as `playbook.html#donor` also work.

## Common terminology
- SMARTER governs execution.
- The **Six-Check Release Gate** covers Intent, Reconciliation, Consent, Traceability, Attribution and Authorization.
- VERITAS structures the donor narrative: Vision, Experience, Results, Investment, Truth, Advancement, Stewardship.

## Synthetic data reconciliation
The source donor-profile draft had conflicts: a header claiming five gifts / $1.20M while the receipt ledger showed six gifts / $1.22M; dates were inconsistent with its July–June FY2026 close; the cohort count was 14 continuing vs the platform's canonical 16; and the FY2026 principal-gift tally was $0 despite FY2026 receipts. The corrected work sample uses **six gifts / $1.22M**, fiscal-year-consistent synthetic dates, **16 of 18** continuing with two pending, and a separate $660K FY2026 receipt total. Financial distribution remains **$55K = $46K spent + $9K carried**. Never mistake donor contributions for spending distributions.

## Demo-only controls
Release-gate toggles and reviewer logs in the playbook operate solely in browser memory. "DEMO READY" never authorizes a send; GitHub Pages contains no connection to CRM, institutional financial systems or email services.
