# Unified Navigation Compass · version 2

The Stewardship Portfolio uses **three techniques with separate responsibilities**:

1. **IntersectionObserver ScrollSpy**: identifies the visible chapter, highlights the correct section and updates the Journey Navigator label without moving the viewport. Trigger zone is 30–40% down the visible viewport (`rootMargin: -30% 0px -60% 0px`).
2. **IntersectionObserver hero visibility**: changes the compact compass border after the hero is passed. This never scrolls the page.
3. **history.replaceState**: updates the shareable `#chapter` URL when a user clicks a section link, without triggering another anchor jump or adding redundant Back-button history entries.

### Interaction rules
- **Instant movement** for long document sections; no smooth scrolling.
- **In-place tabs** remain owned by their application modules. The global observer does not interfere with the Suite/Playbook SPA navigation.
- **Exact location**: page + current section / chapter in the compact button; hierarchical breadcrumb in the opened panel.
- **Navigation return**: previous location and five-stop reviewer route; locally stored visit history, not donor records.
- **Career profile** retains its own 8-section Section Tracker and interactive experience graph.

### Files changed
- `assets/wayfinder.js`
- `assets/wayfinder.css`
- `career-profile.html`

GitHub deployment: replacing these three files updates the global compass for all pages that already load the shared assets.
