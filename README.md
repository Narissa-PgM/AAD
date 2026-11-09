# AA&D Stewardship Reporting Portfolio · GitHub Pages

Work samples for the **Director of Stewardship Reporting** role (Harvard Alumni Affairs & Development), by Narissara Khomkhai. All donor names, funds and figures are synthetic or labeled planning estimates.

## Start here
* `career-profile.html` — capability with proof (start here)
* `fas-stewardship.html` — FAS stewardship pilot brief, organized by SMARTER
* `workframe.html` — the operating model wheel and the **role-coverage map** (every posting duty linked to its proof)

## One operating model, every page
**One Harvard → Impact Circle → SMARTER → VERITAS**

| Layer | Answers | Definition |
|---|---|---|
| One Harvard | Who | Leading across offices without formal authority; each office keeps its decisions, everyone shares the automation, standards and evidence log. |
| Impact Circle | When | Seven stages every reporting year: Plan & Prioritize · Prepare & Gather · Produce & Personalize · Review & Certify · Deliver & Engage · Evaluate & Learn · Improve & Scale. |
| SMARTER | How | One gate per stage, in order: Specific · Measurable · Attainable · Relevant · Time-bound · Evaluate · Review. The **Six-Check Release Gate** (Intent · Reconciliation · Consent · Traceability · Attribution · Authorization) sits at Review & Certify. |
| VERITAS | What | Every report carries Vision · Experience · Results · Investment · Truth · Advancement · Stewardship (a proposed editorial mnemonic, not an expansion of the University motto). |

### Automation that keeps it consistent
* `assets/aad-model.js` + `assets/aad-model.css` — the single source of truth for the four models, the Release Gate and the posting's responsibilities. Pages render their model graphics from it: `<div data-aad-model="wheel|ribbon|coverage">`, and any element with `data-aad-open` opens the model.
* `tools/unify.py` — re-applies the canonical wording, loads the module and places the graphics. Idempotent; run it after rebuilding any page.
* `tools/check_models.py` — fails if a page drifts (old model order, non-canonical SMARTER labels, links to retired pages). Runs on every push via `.github/workflows/model-consistency.yml`.

## Pages
* Four working programs: `strategic-leadership.html`, `donor-impact-reporting.html`, `team-leadership.html`, `campaign-initiatives.html`
* `index.html` — Operating Suite (report gallery and release gate)
* `impact-circle.html` — Impact Circle infographics, open-door requests and team calendar
* Supporting workspaces: `playbook.html`, `program-office.html`, `operations.html`, `communications.html`, `donor-profile.html`
* Retired (redirects kept so old links work): `profile.html` → `career-profile.html`, `bridge-builder.html` → `impact-circle.html`

Upload all files and the `assets/` folder; do not rename HTML files.
