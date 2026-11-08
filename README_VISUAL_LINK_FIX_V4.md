# Visual Explorer v4 — Precision Image Links

This is the fix for the visible and unreliable hotspots in the original Visual Explorer v3.

## What changed
- Transparent SVG click regions fit the *whole seven-stage wheel segments* and the *partner/service/outcome cards* on the original artwork.
- The Impact Circle and shared Visual Explorer use **one identical coordinate map** to prevent different target placement.
- The old numbered/lettered HTML markers are invisible and no longer intercept clicks.
- Enter and Space activate keyboard-focusable SVG regions; mobile users have explicit legend controls below the artwork.
- The "Visual Explorer" launcher is in the page toolbar, not floating over the image.
- Existing popup samples and deep links remain intact.

## Apply to GitHub Pages
**Small patch**: copy `assets/visual-explorer.js`, `assets/visual-explorer.css`, `impact-circle.html` and `bridge-builder.html` to the matching paths in your existing `AAD` repository. Your other pages already load these shared assets. Retain other files unchanged.

**Full package**: upload all included site content if you want a clean all-in-one replacement, but merge first if your GitHub repository has newer content.

GitHub Pages may cache an earlier CSS/JS version; reload with Ctrl+Shift+R after publishing.

## Verification
- All 25 mapped locations: 7 reporting stages + 18 partnership network entries.
- Browser tests: 80 / 80 across desktop 1400 px, tablet 700 px, mobile 390 px.
- Additional focused tests: 16 / 16.
- JS syntax and local resource path validation for all 15 HTML pages passed.
- Hosted GitHub navigation remains unverified; the browser testing environment restricted URL navigation, so the tests used the real HTML and scripts within an isolated in-memory Chromium document.

Independent simulated work sample; no real donor data, approvals, shared calendar or confidential messaging.
