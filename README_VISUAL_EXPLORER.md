
# Unified Visual Explorer v4 for the AA&D Stewardship Portfolio

This package is a **GitHub Pages-only, synthetic** work-sample portfolio. It preserves the existing Suite, Workframe, Playbook, Operating modules, Communications, Career Profile, and Impact Circle.

## What changed

- `assets/visual-explorer.css` — one shared transparent-hotspot visual style. No labels or opaque buttons cover the infographic imagery.
- `assets/visual-explorer.js` — one shared Visual Explorer dialog available on all 15 HTML pages, with two reusable visual maps, grouped external legends, distinct content, accessibility labels, and direct links to working sections.
- `assets/visual_stewardship_cycle.webp` and `assets/visual_partnership_network.webp` — compressed copies of the original user-supplied infographic images (not newly fabricated).
- `impact-circle.html` and `bridge-builder.html` — restored the latest interactive no-Google version, with image click regions remaining active but now visually transparent. External labels provide a clear, usable fallback on mobile.
- Other HTML pages — added exactly one stylesheet link and one deferred JS link; original framework, app data, reporting tools and narrative remain unchanged.

## UX specification

1. The image itself always stays visible: precisely mapped transparent SVG click regions cover the actual labeled stage or partner card.
2. On hover or focus, an outline gently reveals the click area, but no permanent words or badges obscure imagery.
3. The legend sits **below** the image and opens the same sample.
4. On narrow phones, the visual hotspots are hidden and the large, accessible legend remains usable.
5. The reusable Visual Explorer is a native dialog with focus handling, Escape to close, sample details, and a deep link to the appropriate workspace.
6. The existing Journey Navigator remains responsible for cross-platform history and current sections; the Visual Explorer does not replace or duplicate it.

## Deployment

Extract the entire ZIP into the root of the `AAD` GitHub repository, keeping the `assets/` folder. The portfolio is hosted as ordinary static HTML. Open `impact-circle.html` or click **Visual Explorer** on any page.

**Not a production system:** synthetic donor records; no live donor CRM, real bookings, secure multi-user messaging, or automated approvals. The images are presentation illustrations, not authoritative institutional process diagrams.

## Version 4 fix
The original 26–29px click spots have been replaced by a shared SVG hit map using the original artwork coordinate system. All 25 regions on each map pair use the same geometry in the Impact Circle and the shared Explorer. Keys Enter/Space work; labels remain outside the images. No Google backend required.
