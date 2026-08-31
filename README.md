# Publication Design System Specimen

This specimen documents the core visual foundation for a small publication, service, public-information project, or cultural organization. It follows the required six sections (S1–S6) and includes both default and alternate themes while documenting usage guidance and testing evidence.

## File structure

- `index.html` — specimen content and required sections
- `styles.css` — tokens, resets, responsive layout, and both themes
- `script.js` — theme toggle for alternate theme verification
- `test-record.md` — test conditions, expected results, observed results, and revisions
- `code-defense.md` — reset strategy, token hierarchy, theme override, and revision rationale
- `ai-disclosure.md` — AI disclosure and verification record (stated as “No generative AI was used.”)

## Usage guidance

- The document is designed as a reusable reference, not a polished marketing homepage.
- Tokens are defined at the root and consumed through semantic component styles.
- Theme overrides are scoped to the body and do not duplicate component rules.
- The layout remains readable at 320 CSS pixels and scales with clamp() values.

## Verification status

The specimen has been built and checked in a browser at local preview with the required theme and responsiveness considerations.
