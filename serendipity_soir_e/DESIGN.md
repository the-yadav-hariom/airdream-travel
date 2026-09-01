---
name: Serendipity Soirée
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#504444'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#827473'
  outline-variant: '#d4c2c2'
  surface-tint: '#7b5455'
  primary: '#7b5455'
  on-primary: '#ffffff'
  primary-container: '#f4c2c2'
  on-primary-container: '#734e4e'
  inverse-primary: '#ecbaba'
  secondary: '#8c4b55'
  on-secondary: '#ffffff'
  secondary-container: '#feaab6'
  on-secondary-container: '#7a3c46'
  tertiary: '#705d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#f1cb00'
  on-tertiary-container: '#675600'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad9'
  primary-fixed-dim: '#ecbaba'
  on-primary-fixed: '#2f1314'
  on-primary-fixed-variant: '#613d3e'
  secondary-fixed: '#ffd9dd'
  secondary-fixed-dim: '#ffb2bc'
  on-secondary-fixed: '#3a0915'
  on-secondary-fixed-variant: '#70343e'
  tertiary-fixed: '#ffe16d'
  tertiary-fixed-dim: '#e9c400'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#544600'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 80px
---

## Brand & Style
The design system embodies a romantic, playful, and intimate celebration. It is crafted to evoke feelings of joy, warmth, and personal connection, making every digital interaction feel like a curated invitation to a boutique event.

The aesthetic direction is **Whimsical Romanticism**. It blends the elegance of traditional stationery with modern interactive playfulness. The UI utilizes soft layering, subtle motion, and generous white space to create a "breathable" and premium atmosphere. Key visual identifiers include delicate borders, confetti-inspired micro-interactions, and a tactile sense of depth that feels as soft as a silk ribbon.

## Colors
The palette is rooted in a "Rose Gold and Cream" foundation to establish a romantic and high-end feel.

- **Primary (Soft Pink):** Used for large surfaces, background tints, and primary decorative elements.
- **Secondary (Rose Gold):** Reserved for high-emphasis actions, borders, and elegant iconography.
- **Tertiary (Champagne Gold):** Used sparingly for "sparkle" moments and premium highlights.
- **Neutral (Creamy White):** The primary background color to ensure the design feels warmer and more intimate than a clinical pure white.
- **Confetti Accents:** Vibrant pops of teal and lavender are used exclusively for feedback states, small decorative motifs, and celebratory animations to maintain a sense of playfulness.

## Typography
The typographic system relies on the contrast between an elegant, high-contrast serif and a friendly, modern sans-serif.

**Playfair Display** is used for all major headings and display moments. It provides a literary, sophisticated tone. Use it for titles, quotes, and names. 

**Plus Jakarta Sans** provides the functional balance. Its rounded terminals complement the "whimsical" theme while ensuring high readability for event details, forms, and instructions.

All body text should maintain a slightly increased line height to reinforce the airy, relaxed vibe of the design system.

## Layout & Spacing
The layout follows a **Fluid-Fixed Hybrid** model. Content is centered within a 1200px max-width container for desktop, while margins expand fluidly on mobile.

- **The 8px Grid:** All components and internal spacing should be multiples of 8px.
- **Visual Breathing Room:** Vertical spacing between major sections is intentionally large (80px+) to prevent the design from feeling cluttered.
- **Asymmetric Accents:** Occasionally break the grid with small floating decorative elements (confetti shapes or rose gold sparkles) to reinforce the whimsical nature.

## Elevation & Depth
Hierarchy is established using **Soft Ambient Shadows** and **Tonal Layering**. 

Avoid harsh, high-offset shadows. Instead, use multi-layered shadows with very low opacity (5-8%) and a slight color tint (using the Rose Gold or Soft Pink hues) to make elements appear as if they are floating gently above the cream surface. 

Backgrounds may use subtle radial gradients (Cream to Soft Pink) to create a sense of focal lighting, as if the UI is illuminated by a warm candle or a soft spotlight.

## Shapes
The shape language is defined by **Rounded Elegance**. 

Standard containers use a 0.5rem (8px) radius, while interactive elements like buttons and chips often utilize a 1rem (16px) or fully pill-shaped radius to feel more approachable and "bouncy." 

Images and cards should occasionally feature a "scalloped" border or a slight organic curvature to mimic high-quality cardstock or invitation edges.

## Components
- **Buttons:** Primary buttons are pill-shaped with a Rose Gold gradient and a soft drop shadow. Upon hover, they should scale up slightly (1.05x) and trigger a subtle "shimmer" effect.
- **Cards:** Cards use the Creamy White background with a 1px Soft Pink border and a subtle glow. They should have a "lift" animation on hover.
- **Inputs:** Text fields are clean with a thin Rose Gold bottom border (underline style) rather than a full box, evoking a hand-written invitation feel.
- **Chips/Tags:** Used for event categories or "Interest" tags, these should be pill-shaped with pastel confetti-colored backgrounds and dark rose-gold text.
- **Interactive Confetti:** A special "Celebrate" button component should trigger a canvas-based confetti burst when clicked.
- **Lists:** Use custom icons (e.g., small rose gold hearts or stars) as bullet points instead of standard dots.