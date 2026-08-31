# Test Record

## Conditions

- 320 CSS-pixel viewport
- 768 CSS-pixel viewport
- 1280 CSS-pixel viewport
- 200% browser zoom
- Keyboard navigation through interactive examples
- Default theme and alternate theme contrast checks
- Preferred font availability checks
- HTML and CSS validation
- Published-site verification

## Expected results

- No page-level overflow and all content remains readable at narrow widths.
- Interactive elements show visible focus states and remain keyboard operable.
- Default and alt themes maintain sufficient contrast for text and controls.
- Typography remains legible if the preferred webfont is blocked.
- Forms and actions inherit the type system and remain consistent.

## Observed results

- Layout collapses to a single-column stack below 760px without overflow.
- Focus-visible ring is visible on interactive elements in both themes.
- Alternate theme recalculates the surface, border, link, and action colors through scoped tokens.
- Fallback families remain readable through the local serif/sans stack.
- The specimen includes all six required sections and both themes.

## Revisions

- Reduced dense margin and spacing to allow mobile readability and avoid clipping.
- Added clear focus state styling for all interactive elements.
- Scoped the alternate theme to the body to prevent duplicated component styles.
- Kept the reset intentionally compact and semantic-preserving.
