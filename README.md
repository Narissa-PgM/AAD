# University Stewardship Operating Suite — Program Office integration

This package integrates the attached `AAandD_Program_Playbook.html` into the existing operating suite while preventing two conflicting program definitions.

## Where each piece lives

- `index.html` — **Suite** (default landing page). Select **Program Office** from the left navigation for an interactive six-phase implementation view, action register, status changes, and links to the advanced controls.
- `program-office.html` — **Advanced Program Office** with 11 working views: Start Here, Year Plan, Analyze & Predict, Command Center, Initiate, Plan, Execute, Monitor & Control, Close & Handover, AI & Decision Support, Governance & Provenance. Includes a full 24-package Gantt, Kanban, risk/benefit visualizations, RACI, cost forecasts, gated decisions, and a startup self-check.
- `playbook.html` — **Executive Playbook**. The Plan & Roadmap chapter connects the proposal to the Program Office Gantt, Kanban and governance; Toolkit connects to the command center. It retains its unique donor-report SOPs and controls rather than duplicating the new page.
- `communications.html` — donor communications and story library.
- `operations.html` — data flow, automation and human review companion.
- `donor-profile.html` — detailed synthetic donor profile.
- `assets/` — required Suite CSS and JS, concept image and synthetic CSV import example.

## Unified frameworks

**One Harvard:** consensus across decentralized schools, Finance, Gift Administration, Advancement Services, academic stakeholders and gift officers.

**SMARTER:** reporting scope, measurements, attainable rollout, relevance to mission, time windows, evaluation and review.

**Six-Check Release Gate:** Intent · Reconciliation · Consent · Traceability · Attribution · Authorization. Evidence and human authorization control publication.

**VERITAS:** Vision · Experience · Results · Investment · Truth · Advancement · Stewardship. Only the donor narrative/editorial structure uses this acronym.

## Dates and synthetic data

The user-provided playbook originally described an FAS research/gift-processing initiative with unrelated PIMS tasks and a November 2026 start. This version **adapts those work packages to stewardship reporting** and **rebaselines its six-phase, 24-week scenario to January–June 2027**, as used by the companion Executive Playbook. The rebaseline shifts the attached draft's sample phase/gate/action dates consistently, preserving dependency windows. These are not actual institutional plans.

P50/P80 estimates, EVM, original risk readings, RACI roles, KPI histories, staffing, forecasts and financial benefits are **illustrative**, retained for methodological demonstration and not represented as Harvard operating metrics. No donor or financial system is connected.

The Suite's Program Office table and the advanced Program Office Kanban use the same browser-local storage key (`aad_stewardship_program_board_v1`). Changes update the other view on reload or reentry. This is not multi-user synchronization or an auditable backend. No real email is sent and no approval is granted.

## Deploy to GitHub Pages

1. Extract the ZIP. Upload all site files and the **entire `assets/` folder** to the repository root (e.g. `narissa-pgm/AAD`).
2. In GitHub repository **Settings → Pages**, publish the correct branch and root directory.
3. Visit `/AAD/` for the Suite, `/AAD/program-office.html#plan` for the Program Office Gantt, and `/AAD/playbook.html#plan` for the executive roadmap.
4. Test the report links, Program Office status update, browser refresh, `#execute` Kanban, return to playbook and mobile layout after deployment.
5. Do not commit identifiable donor records, gifts, notes, addresses, or credentials to a public repository.

## Testing

The package was run with a headless Chromium in-memory browser. The advanced page's own startup check passed all 16 checks, including 11 chapter renders, 24 Gantt packages, the RACI invariant, 793 linked details, provenance labels and no duplicate IDs. The external regression checks passed 21/21, including Suite Program Office actions, chapter navigation, Playbook links, and mobile width. JavaScript syntax checked with Node. Live GitHub Pages remains to be tested once deployed.


## Strategic Leadership · new addition (November 2026)
- `strategic-leadership.html` is a new interactive strategy workspace, linked from Operating Suite > Strategic Leadership and the Playbook.
- Public FY2026 Harvard financial and announced research figures are URL-cited and labeled **PUBLIC**.
- The January–December 2027 implementation quarters are **PROPOSED**; workflow capacity assumptions, scenario outputs, and simulated KPIs are **SYNTHETIC / FORECAST**. No Harvard production data is represented.
- Framework: One Harvard = working method; SMARTER = execution; Six-Check Release Gate = evidence and authorization; VERITAS = donor-facing narrative.
- No real donor profiles or external data endpoints are included.


## People & Collaboration Leadership upgrade (November 2026)
The strategic-leadership.html#leadership tab is a functional demo of a One Harvard team plan, six partner records, portfolio prioritization with capacity constraints, an AI/human review workflow, and executive communications in four channels. Planning data and contact entries are SYNTHETIC / PROPOSED and stored only in this browser. All real donor and staff information stays in authorized systems.
