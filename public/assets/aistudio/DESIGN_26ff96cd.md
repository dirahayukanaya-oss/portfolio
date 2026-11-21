---
name: Editorial Retro-Modern
colors:
  surface: '#fdf9ee'
  surface-dim: '#dddacf'
  surface-bright: '#fdf9ee'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3e8'
  surface-container: '#f2eee3'
  surface-container-high: '#ece8dd'
  surface-container-highest: '#e6e2d7'
  on-surface: '#1c1c15'
  on-surface-variant: '#434842'
  inverse-surface: '#323129'
  inverse-on-surface: '#f5f0e5'
  outline: '#737972'
  outline-variant: '#c3c8c0'
  surface-tint: '#4c6450'
  primary: '#152c1b'
  on-primary: '#ffffff'
  primary-container: '#2b4230'
  on-primary-container: '#94ae97'
  inverse-primary: '#b3cdb5'
  secondary: '#7c5800'
  on-secondary: '#ffffff'
  secondary-container: '#febf39'
  on-secondary-container: '#6f4f00'
  tertiary: '#491700'
  on-tertiary: '#ffffff'
  tertiary-container: '#6d2600'
  on-tertiary-container: '#fe8751'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ceead0'
  primary-fixed-dim: '#b3cdb5'
  on-primary-fixed: '#092010'
  on-primary-fixed-variant: '#354c39'
  secondary-fixed: '#ffdea7'
  secondary-fixed-dim: '#fbbc37'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb597'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#fdf9ee'
  on-background: '#1c1c15'
  surface-variant: '#e6e2d7'
  pitch-black: '#111111'
  ink-dark: '#141414'
  archival-cream: '#F3EFE4'
  card-cream: '#FAF7F0'
  frame-sand: '#E6DFD1'
  ochre-gold: '#C88A16'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 156px
    fontWeight: '900'
    lineHeight: '0.9'
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '900'
    lineHeight: '0.9'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 96px
    fontWeight: '900'
    lineHeight: '0.94'
    letterSpacing: -0.01em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '0.95'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '900'
    lineHeight: '0.95'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 42px
    fontWeight: '900'
    lineHeight: '0.95'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 38px
    fontWeight: '900'
    lineHeight: '1.1'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '800'
    lineHeight: '1.2'
  title-card:
    fontFamily: Playfair Display
    fontSize: 26px
    fontWeight: '900'
    lineHeight: '1.2'
  body-lg:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.7'
  body-sm:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.55'
  label-lg:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
  label-md:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: '700'
    lineHeight: '1.2'
  label-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
spacing:
  gutter: 1.75rem
  margin: 6vw
  space-xs: 0.5rem
  space-sm: 0.875rem
  space-md: 1.5rem
  space-lg: 2rem
  space-xl: 3.75rem
---

## Brand & Style

This design system embodies an **Editorial Retro-Modern & Poster Print** aesthetic tailored for a personal one-page portfolio. It balances the authority and tactile warmth of archival printmaking with the structured clarity of modern digital layouts. The target audience—recruiters, collaborators, and creative leads—should experience an immediate sense of confidence, approachability, and disciplined craft.

The visual language relies on bold, asymmetric color blocking, layered collage elements (overlapping bio cards, floating pill stickers, and 4-point sparkle stars), and dramatic typographic contrast. Rather than relying on soft, uniform gradients or sterile minimalism, the system embraces crisp edges, hard offset shadows, and subtle paper-grain textures to evoke the feeling of a physical, screen-printed poster.

## Colors

The palette alternates between deep, grounded surface blocks and warm, high-contrast accents. There is no light/dark mode toggle; instead, sections alternate rhythmically between **Deep Forest Green** (`#2B4230`), **Warm Archival Cream** (`#F3EFE4`), and **Pitch Black** (`#111111`).

- **Primary (`#2B4230`)**: Used for major structural blocks including the Hero, Resume right panel, Footer, and hard-offset hover shadows.
- **Secondary (`#E5A922`)**: Mustard Yellow drives primary calls-to-action ("Get in touch", "WhatsApp Me", "Scroll down" badge), the Experience card background, and decorative 4-point sparkle stars.
- **Tertiary (`#D96B38`)**: Terracotta Orange highlights editorial callouts, the Hero bio box, secondary CTAs ("Send an Email", LinkedIn pill), and inline achievement stars.
- **Neutral (`#F3EFE4`)**: Warm Archival Cream serves as the primary light canvas (with a subtle `0.03` opacity paper-grain overlay) and as the high-contrast text color on dark green and black surfaces.
- **Pitch Black (`#111111`) & Ink Dark (`#141414`)**: Used for the Contact card, `#Leadership` character pills, skill badges, and crisp `2px` card borders.

## Typography

The typographic hierarchy pairs **Playfair Display**—a high-contrast, heavy-weight editorial serif—with **DM Sans**, a clean geometric sans-serif.

- **Display & Stacked Outline Echoes**: Hero and section titles (`PORTFOLIO`, `RESUME`) use `clamp()` scaling between mobile and desktop sizes. Decorative 3x vertically stacked outline echoes (`-webkit-text-stroke: 1.5px`) sit behind solid titles in translucent cream (`rgba(243, 239, 228, 0.42)`).
- **Body & Readability**: Bio paragraphs are constrained to `max-width: 52ch` at `15px` with generous `1.7` line-height for effortless scanning.
- **Labels & Stickers**: Pill badges, navigation links, and metadata use `DM Sans` in `600`–`700` weights to maintain crisp legibility at small sizes (`12px`–`14px`).

## Layout & Spacing

The layout uses a **fluid asymmetric grid** anchored by viewport-relative outer margins (`6vw`) to preserve generous breathing room across screen sizes.

- **Desktop & Tablet (`> 768px`)**:
  - **About Section**: 2-column asymmetric split (`1.15fr 0.85fr`) with a `60px` (`space-xl`) gap.
  - **Resume Section**: 2-column split (`1.05fr 0.95fr`) separating light cream and dark green panels.
  - **Projects Section**: 3-column card grid (`repeat(3, 1fr)`) with `28px` (`gutter`) gaps.
  - **Micro-Grids**: Language uses a 3-column row (`16px` gap); Interests uses a 4-column icon grid (`14px` gap).
- **Mobile (`≤ 768px`)**: All multi-column grids collapse to a single `1fr` column, stacking portrait frames, bio boxes, and project cards vertically while maintaining `6vw` horizontal margins.

## Elevation & Depth

Depth is conveyed through **tactile print layering** rather than soft, diffused UI shadows:

- **Hard Offset Shadows**: Interactive editorial cards (such as Project cards) use a crisp, zero-blur offset shadow (`6px 6px 0 #2B4230`) on hover, paired with a `-6px` vertical lift.
- **Collage Drop Shadows**: Overlapping elements—such as the Terracotta bio box (`0 14px 30px rgba(0, 0, 0, 0.22)`), the `"Scroll down"` circular badge (`0 8px 20px rgba(0, 0, 0, 0.12)`), and floating portrait pills (`0 6px 16px rgba(0, 0, 0, 0.1)`)—use compact drop shadows to separate them from the underlying photography.
- **Surface Texture**: Warm archival cream (`#F3EFE4`) surfaces include a subtle CSS noise/grain overlay at `0.03` opacity to reinforce the physical poster aesthetic.

## Shapes

The system uses a deliberate **binary shape language** that contrasts sharp architectural blocks with fully rounded pill stickers:

- **Sharp Rectangles (`0px`)**: All structural containers—Terracotta bio box, Pitch Black Contact card, Mustard Experience card, Editorial Project cards, and Portrait frames—have `0px` border-radius to anchor the poster-print grid.
- **Pill Stickers (`999px`)**: All interactive CTAs, navigation buttons, skill badges, `#Leadership` character tags, and floating portrait labels use full pill rounding (`999px`) to feel like tactile stickers placed on top of the print layout.
- **Circular & Micro-Rounded Exceptions**: The `"Scroll down"` badge is a `50%` circle (`84px × 84px`), and square Tools & Software icon badges use a subtle `6px` radius.

## Components

- **Buttons & CTAs**: Full pill (`999px`) with `12px 24px` to `14px 28px` padding. Primary CTAs use `#E5A922` with `#141414` text; secondary CTAs use `#D96B38` with `#FFFFFF` text; outline CTAs on dark surfaces use `1.5px solid #F3EFE4` with `#F3EFE4` text.
- **Pill Stickers & Chips**: Compact `999px` badges (`6px 14px` to `8px 18px`). Core character tags (`#Leadership`) and skill pills use `#111111` backgrounds with `#FFFFFF` text.
- **Editorial Project Cards**: Sharp `0px` corners on `#FAF7F0` surfaces with a `2px solid #141414` border and `28px` padding. Hovering lifts the card (`translateY(-6px)`) and reveals a `6px 6px 0 #2B4230` hard offset shadow.
- **Contact & Experience Cards**: High-contrast, sharp-cornered (`0px`) color blocks—`#111111` for Contact (`28px 32px` padding) and `#E5A922` for Experience (`32px 30px` padding)—with inline `4-point sparkle stars` (`✦`) marking timeline entries.
- **Scroll-Down Badge**: An `84px × 84px` `#E5A922` circle straddling the bottom edge of the Hero (`z-index: 10`), featuring centered `13px` bold `#141414` text and a gentle hover bobbing animation (disabled under `prefers-reduced-motion`).