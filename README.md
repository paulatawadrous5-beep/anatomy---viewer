# Interactive Human Anatomy

React + Three.js (React Three Fiber) educational anatomy visualizer. English / Arabic (RTL), desktop, tablet and mobile.
Educational visualization only — it does not diagnose or recommend treatment.

## Run in VS Code
1. Install Node.js 18+ (https://nodejs.org).
2. Unzip, then in VS Code: File > Open Folder... and select `anatomy-viewer`.
3. Open the terminal (Terminal > New Terminal) and run:
   npm install
   npm run dev
4. Open http://localhost:5173 (a LAN URL is also printed, for testing on a phone).
5. Production build: `npm run build`, then `npm run preview`.

## Flow
Landing (Male / Female) > viewer > drag to rotate, scroll/pinch to zoom, right-drag/two-finger pan > click a body region >
camera glides in, the body turns translucent and internal anatomy fades in > toggle/isolate layers > pick an educational
visualization state. Back returns to the body view, then to the landing. Reset view re-frames the camera.

## Assets
No external assets: bodies and anatomy are procedural (built from primitives), so there is nothing to license. Fonts load from
Google Fonts and fall back to system fonts offline.

## Structure
- src/data/regions.js: body regions (add a region here)
- src/anatomy/structures.js: per-region anatomy. KNEE is detailed; other regions use a simplified generic set. Register more in REGISTRY.
- src/models/Body.jsx: clothed figure. Swap for a GLB via useGLTF, keeping onPick(regionId, side).
- src/layers, src/symptoms, src/i18n, src/controls, src/viewer, src/components, src/styles
