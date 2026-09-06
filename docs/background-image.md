# Annapurna night-sky photograph

Current asset: `public/annapurna-milky-way-original.jpg` (6276 × 3976).

- Title: Mt. Annapurna milkyway
- Photographer: Shedeur Ghale (Wikimedia Commons user Shedeur)
- Date photographed: 1 November 2021
- Source: https://commons.wikimedia.org/wiki/File:Mt._Annapurna_milkyway.jpg
- Download: https://upload.wikimedia.org/wikipedia/commons/3/38/Mt._Annapurna_milkyway.jpg
- License: Creative Commons Attribution-ShareAlike 4.0 International, https://creativecommons.org/licenses/by-sa/4.0/

This is a photographer-published image, replacing the previous AI-generated background. The source page identifies it as the photographer's own work and includes Nikon Z 6 II capture metadata (30 seconds, f/2.8, ISO 16000).

The full-resolution Wikimedia original is stored unchanged. Next.js optimizes delivery at quality 90 with responsive candidates up to the native 6276-pixel width; portrait sizing accounts for the width needed to cover the screen height. This avoids the previous 3840-pixel ceiling without sending the original 17.6 MB JPEG to every visitor. The source retains its natural long-exposure softness and grain; CSS crops the visible framing and places dark overlays above the photo for readable text. The photograph and any adaptation of it remain under CC BY-SA 4.0. The site footer credits the photographer, links to the source and license, and notes the display adjustments. No endorsement is implied.

Animated shooting stars, glints over 24 sampled bright points, and drifting cloud textures are separate decorative website layers. They are not part of the photograph. The glints share the image’s cover crop so they remain anchored on different screen sizes. Glints and clouds sit above the photo’s dark shade, while remaining behind all page content; their own opacity controls visibility. Glints cycle independently every 4.5–9.5 seconds, and the clouds drift over 64/89-second alternating passes. Only opacity and transforms animate; there is no canvas, WebGL renderer, or continuous JavaScript animation loop. Phones render one cloud layer, larger screens two. Motion can be paused and respects the reduced-motion preference.

## Cloud overlay asset

Asset: `public/cirrus-wisps.png` (2172 × 724 RGBA). Created with the built-in image generator in generation mode, one request. The original PNG is used unchanged, with CSS opacity 0.11–0.19 above the photograph’s readability shade. This is an atmospheric overlay only; the real Himalayan photograph was not generated or edited with AI.

Exact generation prompt:

```text
Use case: photorealistic-natural
Asset type: One transparent PNG atmospheric texture asset for a barely visible night-sky overlay over a real mountain photograph, not a background scene.
Primary request: Wide 3:1 photographic wisps of very thin high-altitude cirrus drifting horizontally, sparse delicate irregular silver-gray vapor filaments mostly in the center horizontal third.
Composition: Soft translucent low-opacity edges tapering smoothly to fully transparent on all four edges. Subtle natural airy texture.
Scene/backdrop: Genuinely transparent background; alpha transparency everywhere outside mist. Preserve delicate partial transparency inside the wisps.
Avoid: Opaque backdrop, stars, mountains, horizon, text, moon, objects, cumulus puffs, dramatic storm clouds. No simulated checkerboard pattern. Generate exactly one image.
```
