# Petal images (optional)

The game draws petals with a **canvas texture** in code, so it works without any image files.

If you want to use your own petal image instead:

1. Add a PNG here (e.g. `petal.png`) with **transparent background**.
2. In `index.html`, change `createPetal()` to load the image with `new THREE.TextureLoader().load('images/petal.png', ...)` and use it as the material map.

**petal.svg** — Simple petal shape you can open in a browser or editor and export as PNG (e.g. right‑click → Save image as, or use an online SVG→PNG converter).
