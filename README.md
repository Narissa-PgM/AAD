# Stewardship Operations Suite · GitHub Pages package

Independent, fictional university stewardship operating prototype. Not a university system or an adopted policy.

## Open the site

Upload the package contents, including the `assets` folder, to the repository root. Deploy GitHub Pages from `main` / `(root)`.

- `index.html` — default **Stewardship Operations Suite** dashboard, with live interactive modules at `#suite`
- `index.html#brief` — executive brief / full prior platform overview
- `index.html#reportgallery` — four canonical complete synthetic donor reports
- `index.html#trace` — evidence and source traceability
- `index.html#masscalendar` — annual stewardship calendar
- `playbook.html#donor` — integrated donor-review playbook
- `communications.html` — donor and team storytelling library
- `donor-profile.html` — detailed fictional donor record
- `operations.html` — data flow and tracking deep dive

**Upload the full ZIP contents together.** The new dashboard requires `assets/suite.js`, `assets/suite.css`, and `assets/steward_scene.webp`. Uploading only `index.html` will display a missing-assets explanation.

## What is functional in a browser

1. Open nine connected modules using the Suite navigation.
2. Choose fictional donors, inspect giving records and fund descriptions.
3. Add sample gift-officer notes and relationship communications; they are saved in browser localStorage.
4. Create sample reports; financial bridge validation runs and all six gates begin on HOLD.
5. Toggle demo Release Gate checks; reviewers must enter their name and rationale to record a simulated decision. If checks are missing, the system blocks a requested 'ready' decision.
6. Draft messages using the seven-section VERITAS structure, edit the text, copy or export HTML (no sending).
7. Import synthetic CSV with columns `donor_id,report_id,type,amount,owner,due` and run bulk preflight; download a sample CSV in the Batch screen.
8. Track report owners, due dates, sample exceptions, financial totals and outcome descriptions.
9. Export simulated review events and batch events, reset the demo, or export all fictional records to JSON.
10. Follow live links to the existing four reports, calendar, communications library, playbook and donor dossier.

## Shared framework

- **One Harvard** — proposed cross-unit coordination method, not an asserted adopted Harvard-wide operating policy.
- **SMARTER** — scope, measures, achievability, relevance, timing, evaluation and review.
- **Six-Check Release Gate** — Intent, Reconciliation, Consent, Traceability, Attribution, Authorization.
- **VERITAS** — Vision, Experience, Results, Investment, Truth, Advancement, Stewardship (editorial narrative only).
- **AA&D values** — respect, inclusion, trust, collaboration, continuous improvement and open communication.

## Canonical financial case amounts

| Case | Total / available | Spent | Balance | Meaning |
| --- | ---: | ---: | ---: | --- |
| SIM-END-2026 | $55,000 | $46,000 | $9,000 | Endowed-fund annual distribution |
| SIM-USE-2026 | $180,000 | $152,500 | $27,500 | Current-use gift receipts |
| SIM-CAP-2026 | $1,960,000 | $1,720,000 | $240,000 | Project-wide gifts received vs spending; **not one donor's giving** |
| SIM-GRT-2026 | $300,000 | $211,000 | $89,000 | Grant-wide budget vs actual; **not one donor's giving** |

All records are synthetic. The four canonical reports in the existing platform are the reference for financial models. The donor giving history for fictional Eleanor M. Whitfield totals $1,220,000 across six receipts.

## Critical security boundary

This is a **working local prototype**, not a production, multi-user application. GitHub Pages is publicly readable static hosting. Browser localStorage is not a secure donor database. The prototype deliberately has **no CRM access, no authenticated role authorization, no secure donor document serving, no real mailing, and no server-backed immutable audit history**.

**Never put real donor identities, gift histories, gift agreements, emails, passwords, access tokens or unredacted records into this repository or browser demo.**

A production build would require institutional approvals, privacy and legal review, SSO + role-based authorization, encrypted backend/database, approved data integrations, server-side audit, consent checks, verified templates, email suppression handling, approved distribution infrastructure, security/UAT/accessibility reviews and operations support.

## Testing

See `SUITE_QA_RESULTS.json` and `QA_SUMMARY.md`. Tests exercised Chromium in an isolated in-memory document because this runtime blocked local URL navigation; the actual GitHub Pages deployment still requires a final live click-through.
