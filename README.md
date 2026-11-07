# University Stewardship Reporting Suite — Operations Board Update

## What goes where
Upload `index.html`, `playbook.html`, `operations.html`, and `.nojekyll` into the root of the GitHub Pages repo `narissa-pgm/aad`. Replace the earlier `index.html` only if it is still the last smoke-tested version; first merge any newer edits you have made directly on GitHub.

- `https://narissa-pgm.github.io/aad/` — reporting platform
- `https://narissa-pgm.github.io/aad/#flow` — Data Flow & Tracking section, now links to the full operations view
- `https://narissa-pgm.github.io/aad/operations.html#systems` — interactive operational layers and 23 system records
- `https://narissa-pgm.github.io/aad/operations.html#public-cases` — public alumni gifts and separate synthetic CRM records
- `https://narissa-pgm.github.io/aad/playbook.html` — supporting operating playbook

## Provenance, safeguards, and portrait licensing
The operations-board environment image is embedded in the HTML as an AI-generated illustration; no separate asset is needed for it. Public alumni portraits are **not** embedded: they load from Wikimedia Commons when the page has Internet access. Image credits and license links are visible in each profile:

- Kenneth C. Griffin photo: Paul Elledge; CC BY-SA 4.0; source: https://commons.wikimedia.org/wiki/File:Kenneth_C._Griffin_photo.jpg
- Hansjörg Wyss photo: Oceana; CC BY 3.0; source: https://commons.wikimedia.org/wiki/File:Hansjorg_Wyss_profile_image.png
- Michael Bloomberg photo: Bloomberg Philanthropies; CC0; source: https://commons.wikimedia.org/wiki/File:Mike_Bloomberg_Headshot.jpg

Keep the credits and links when publishing. If portrait hotlinking fails, download and host the licensed images in the repo with proper attribution, then update the three image paths in `operations.html`. Do not interpret public giving announcements as complete giving histories. No real person’s gift officer, private contact history, donor preferences, or confidential CRM data appear in the demo.

## How to test
1. Open `operations.html` and switch all five layers: Systems Map, Automation, Human Review, Mass-load Alerts, Release Checklist.
2. Click a workflow stage and inspect its record.
3. Expand the 23-node lineage diagram and click different nodes.
4. Open each of the three public alumni profiles; their gift dates, amounts/purposes, and publication links should appear.
5. Open a synthetic donor (P-1104), add a fictional contact to its log, and export its CSV.
6. Change batch volume, filter HOLD / REVIEW / READY, and export audit CSV.
7. Check all 18 release controls and enter a sample approver; confirm that no actual send occurs.
8. From the main platform Data Flow section, click the operations-board link; use the return link in the operations board.

## Unverified integration
All HTML interactions were exercised in a controlled browser using inline page content. The GitHub Pages production URL and the availability of remote portrait images could not be tested from this environment. The sample does not connect to actual mass mailing, a CRM, or institutional records.
