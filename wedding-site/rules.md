# Wedding Site Project - Rules & Requirements

## 1. Color Palette
- **Warm Beige/Cream:** `#F2E3C6` (Main background and architectural elements)
- **Soft Peach/Blush:** `#E8B4A6` (Floral accents)
- **Golden Yellow/Ochre:** `#D4AF37` (Warm lighting and text)
- **Muted Olive Green:** `#8B8A6A` (Leaves and natural greenery)
- **Dark Sepia/Brown:** `#5C4033` (Shadows and deeper contrast areas)

## 2. Framer Motion & Parallax Effects
- **Hero Parallax:** Must use Framer Motion's `useScroll` and `useTransform` to create a smooth parallax effect on the background image. As the user scrolls down, the image translates on the Y-axis at a slower rate than the rest of the page.
- **Hero Container Size:** The hero container must take up the full viewport height (e.g., `100vh`) and handle `overflow: hidden` properly so the parallax image doesn't break the layout.

## 3. Typography & UI Overlay
- **Client Components:** Any component using Framer motion hooks must be marked as `'use client'`.
- **Editorial Typography:** Overlay elegant, editorial-style typography centered on the screen in the hero section.
- **Fonts:** Use a classic serif font for the couple's names (e.g., equivalent to `text-5xl md:text-7xl`) and a tracking-widened sans-serif font for details like the wedding date and location.
- **Gradient Overlay:** Apply a subtle gradient overlay (e.g., dark sepia-to-transparent) over the background image to ensure the bright text remains highly legible regardless of the photo used.

## 4. Animations
- **Load Animation:** Animate the hero text on initial load using a soft spring transition. 
- **Specs:** The text must fade in from `opacity: 0` to `opacity: 1` and slide up from `y: 30` to `y: 0`.

## 5. CSS Styling
- **Vanilla CSS:** Use vanilla CSS for styling (in `globals.css` or CSS modules) for maximum flexibility. Avoid TailwindCSS unless explicitly requested.
