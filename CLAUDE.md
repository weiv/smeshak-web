# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page static teaser site for **SMESHAK** ("fractal mesh extraction"). It renders 3D fractal meshes (`models/*.ply`) in the browser with Three.js and orbit controls; tapping/clicking the canvas cycles to the next mesh. There is no build step, no package manager, no framework, and no tests — the entire app is inline in `index.html`.

## Running locally

Must be served over HTTP, not opened as `file://` — the page uses an ES module importmap and `fetch`es `model.ply`, both of which browsers block on the file protocol.

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Files

- `index.html` — the whole app: inline CSS + an inline `<script type="module">` Three.js scene (renderer, camera, OrbitControls, lights). On load it fetches `models/manifest.json` and loads the first entry. Each mesh is auto-centered and normalized to a fixed bounding-sphere radius, so export coordinates don't affect framing. A canvas pointer-up that barely moved counts as a tap and advances to the next model; a drag is left to OrbitControls. Supports `.ply` (via `PLYLoader`) and `.glb`/`.gltf` (via `GLTFLoader`) — dispatches by file extension. GLB meshes get the same `MeshPhysicalMaterial` as PLY for a unified look; remove the traverse in `loadGLTF` to use a GLB's embedded materials instead.
- `models/manifest.json` — ordered list of model paths. Edit this to add, remove, or reorder meshes. Run `node scripts/build-manifest.js` from the repo root to regenerate it alphabetically from whatever is in `models/`.
- `models/*.ply` / `models/*.glb` — mesh files. Treat as generated artifacts; don't hand-edit. Adding a new model: drop the file in `models/` and add its path to `manifest.json` (or run the build script).
- `_headers` — Cloudflare Pages config; the site deploys to Cloudflare Pages. Sets `Content-Type: application/octet-stream` and a 1-year immutable cache on everything under `/models/`.

## Key things to know

- **Three.js is loaded from a CDN** (jsDelivr) and pinned to `three@0.169` via the importmap in `index.html`. There are no local `node_modules`. Bumping the version means editing both importmap URLs and verifying the `OrbitControls`/`PLYLoader` addon paths still resolve.
- **The `.ply` files are intentionally committed** despite their size (see `.gitignore`, which documents the git-lfs alternative). `models/model.ply` alone is ~6.2 MB.
