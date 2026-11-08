# Unified Journey Navigator / ScrollSpy — QA and Release Notes

## Implemented

- One global **Journey Navigator** across the 13-page portfolio; exactly one instance per page.
- `IntersectionObserver` ScrollSpy on the static Professional Profile and Workframe; the career profile retains its eight-chapter tracker, now also using an observer.
- Deterministic active section selection (last section above the 35% reading line), instead of relying on order of the callback entries.
- A second observer changes the compact launch control when the hero scrolls out of view; it does not move the page.
- Instant, sticky-header-aware anchor navigation and `history.replaceState` after clicks (without creating duplicate history entries).
- Chapter-aware return destination, including when a reviewer manually scrolls to another section before visiting a different page.
- Updated breadcrumb, compact current-location indicator and recent-stop panel.
- Older SPA chapters retain their own routing and controls; the new static ScrollSpy deliberately does not run on their DOM.

## Test scope (local browser, in-memory HTML)

- **13/13** HTML pages: one Navigator instance, current location label, panel toggle and breadcrumb.
- **3/3** mobile pages: Navigator opens within device viewport.
- **3/3** focused desktop pages: profile chapter click and scroll highlight, career chapter switch and graph, Workframe chapter identification.
- **26/26** inline JavaScript blocks: Node syntax validation.
- **143/143** local HTML/CSS/JS/image references resolve to files in the package.
- **0** runtime errors recorded in the portfolio Navigator rendering sweep.

The source site cannot be navigated with file:// in the restricted browser; local tests used full HTML injected into isolated Chromium pages with matching page identity. The ZIP must still be deployed to GitHub Pages to verify live hosting, caching and cross-page return links.

## Test result detail

- campaign-initiatives.html: PASS
- career-profile.html: PASS
- communications.html: PASS
- donor-impact-reporting.html: PASS
- donor-profile.html: PASS
- index.html: PASS
- operations.html: PASS
- playbook.html: PASS
- profile.html: PASS
- program-office.html: PASS
- strategic-leadership.html: PASS
- team-leadership.html: PASS
- workframe.html: PASS
- profile.html [mobile]: PASS
- career-profile.html [mobile]: PASS
- workframe.html [mobile]: PASS

## Deployment

**Small patch**: upload `assets/wayfinder.js`, `assets/wayfinder.css`, and `career-profile.html` into the same paths in the `AAD` repo. A `NAVIGATION_V2.md` file documents behavior. Clear GitHub/browser cache after deployment.

**Full package**: upload all 13 HTML files, `assets/` and the supporting contracts from the complete ZIP; retain the repo root `index.html` as the Suite.

This is browser-level navigation, not a production donor system or real business-process completion monitor.
