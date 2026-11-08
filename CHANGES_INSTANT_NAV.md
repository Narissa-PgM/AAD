# Instant section navigation correction

This replaces animated/smooth scrolling with immediate navigation in the detailed career profile and the connected Stewardship Platform series.

## Changes
- All in-document CSS `scroll-behavior: smooth` values changed to `auto`.
- The shared `assets/wayfinder.css` now enforces the same immediate navigation preference.
- The Communications Library's explicit JavaScript smooth-scrolling operation now uses `auto`.
- The Suite's jump-to-section JavaScript now uses immediate scrolling.
- The detailed career profile's Chapter Tracker now uses standard `behavior: auto` (not the browser-specific `instant`).
- Active-section highlights, chapter URLs, scroll offsets, career-chart popups, Journey Navigator trail and return links are preserved.

A section still changes location in the document, but it moves **directly**, not by sliding up/down. A completely stationary view would instead require tabbed panels with content replacement.

The HTML files are independent. For an existing GitHub Pages site use the minimal patch, or upload the whole package to replace the entire portfolio.
