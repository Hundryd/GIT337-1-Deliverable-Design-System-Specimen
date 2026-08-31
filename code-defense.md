# Code Defense

## Reset strategy

The reset is intentionally narrow and selective. It corrects the most common layout and browser inconsistencies without stripping useful behavior from native controls or semantics. The rules set `box-sizing: border-box`, remove the default `body` margin, constrain media to the container width, and inherit fonts for form controls. This preserves the default accessibility cues and interaction patterns that later components depend on.

A broad reset such as `* { all: unset; }` would remove critical semantics and interactive defaults. The chosen strategy keeps the design-system foundation stable while allowing blocks, headings, forms, and buttons to be composed intentionally.

## Token hierarchy

Tokens are defined on `:root` to establish global defaults: color, spacing, radii, typography, shadows, and measure values. Component rules then consume semantic tokens like `--color-brand`, `--color-surface`, and `--color-focus` instead of raw hex values. This separation keeps future modules easier to maintain, themeable, and consistent across sections.

## Scoped override

The alternate theme is applied with a single body-level override using `body[data-theme='alt']`. This changes the color and surface tokens without duplicating the component styling. The same buttons, cards, and form controls remain available, but they adapt to a darker editorial palette while preserving readable contrast and focus visibility.

## Evidence-based revision

A key revision was to simplify the mobile layout and spacing after checking the narrow viewport behavior. The initial design needed tighter guardrails to prevent overflow and maintain comfortable reading width. The final version uses responsive grid stacking and `clamp()` values, which are justified by the requirement to remain readable at 320 CSS pixels and under browser zoom conditions.
