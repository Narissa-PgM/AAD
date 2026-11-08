# Career Profile + Journey Navigator QA

## Tested (isolated Chromium rendering)

- **22/22 interaction checks passed.**
- Career timeline SVG generated and retained original role-click popups.
- Section Tracker: opens, lists all eight chapters, updates on scroll / navigation, and supports Previous / Next.
- The top header's scroll spy, Section Tracker, and shared Journey Navigator agree on the active chapter.
- The shared Journey Navigator renders all four program destinations and includes the added **Detailed Career Profile** as workspace 13.
- Desktop 1440×900 and mobile 390×844: no JavaScript exceptions; no mobile page-level horizontal overflow.
- The independent reporting career record remains **2008–Present**, concurrent with institutional roles.
- The summary profile links directly to the detailed career graph.
- Source HTML and shared navigation JavaScript syntax validated.

## Limitations

The local browser environment forbids direct browser navigation to file:// and test-hosted URLs. The tests loaded each application in isolation with its local CSS and JavaScript injected, then exercised interactive controls. Cross-file links were checked against actual packaged files, but hosted GitHub Pages page-to-page navigation still requires a live deployment click-through. Browser visit history is browser-local and does not sync between devices.

## Files to update

- `career-profile.html` (new detailed profile)
- `profile.html` (links to detailed profile)
- `assets/wayfinder.js` (adds the career profile to the suite-wide Journey Navigator)
- `assets/wayfinder.css` (same common stylesheet)

This historical Example University project is retained in the detailed profile as a **fictional archived work sample**, not merged into the separate AA&D Stewardship Operations Suite.
