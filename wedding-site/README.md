# Midhuna & Gautham - Wedding Invitation Website

A beautifully crafted, highly interactive wedding invitation website. It features a rich Indian-inspired design aesthetic, seamless CSS animations, interactive elements like a gatefold envelope, and a built-in background music player.

## 🚀 Tech Stack & Libraries

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 18)
- **Language**: TypeScript
- **Styling**: Vanilla CSS with custom design tokens (`globals.css`)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for complex scroll-driven and spring animations, and native CSS keyframes for organic continuous movements.
- **Icons**: `react-icons` (Game Icons, Font Awesome, Feather)
- **Media**: HTML5 Audio API for seamless background music

## 🎨 Design System

The application strictly follows a curated Indian-wedding color palette defined in `rules.md`:
- **Deep Emerald/Forest Green** (`#0f1a15`)
- **Warm Beige/Cream** (`#f2e3c6`)
- **Soft Peach/Blush** (`#e8b4a6`)
- **Golden Yellow/Ochre** (`#d4af37`)
- **Deep Crimson Red** (`#a33a3a`)
- **Muted Olive Green** (`#8b8a6a`)

## ✨ Key Features & Animations

1. **Parallax Hero Section**: 
   - Uses Framer Motion's `useScroll` to map the scroll position to Y-axis transformations for a stunning parallax effect.
   - The hero background has a continuous, slow, 30-second breathing/zoom animation using Framer Motion's `mirror` repeat type.
   - Monstera leaves gently sway infinitely in the foreground using `rotate` easing.

2. **Ultra-Realistic Floral Canopy**:
   - The transition to the envelope section is adorned with 20 incredibly realistic AI-generated jasmine and pink lotus garlands.
   - **Technical Highlight**: Leverages `mix-blend-mode: multiply` to perfectly melt the image's pure white background into the site's cream background, creating a flawless transparent effect without heavy PNGs.
   - Uses structural CSS to randomly shift the heights (`.len-1`, `.len-2`, `.len-3`) and rotate orientations (`scaleX(-1)`) of the garlands so they look uniquely organic.

3. **Interactive Gatefold Envelope**:
   - An interactive, clickable envelope that opens smoothly to reveal the actual invitation card.
   - Built using 3D CSS transforms (`perspective: 2500px`, `transform-style: preserve-3d`). 
   - The flaps open on a virtual hinge (`transform-origin`) using a smooth easing curve when the `isOpen` React state is toggled.
   - The wax seal is split mathematically in the CSS background positioning to look authentic when the envelope splits open.

4. **Background Music Player**:
   - Custom-built, floating equalizer button in the bottom right corner.
   - Uses pure CSS keyframes (`equalize`) with staggered animation delays (`0.1s`, `0.2s`, `0.4s`) to simulate an active sound wave when music is playing.
   - Auto-plays the music as soon as the user interacts with the page (scrolling or clicking) to bypass modern browser autoplay blocking restrictions.

## 📁 Project Structure

- `src/app/page.tsx`: Main React component holding the state, scroll tracking, audio logic, and Framer Motion declarations.
- `src/app/globals.css`: Contains all custom animations, layout logic, typography, media queries, and design tokens.
- `public/`: Houses all static assets, including the high-resolution AI-generated lotus garlands, hero backgrounds, and audio files.

## 🛠️ Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.
