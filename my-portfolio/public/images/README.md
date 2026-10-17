# Profile & Project Images Guide

To display your real photograph:
1. Place your portrait photo at: `public/images/profile.jpg`
2. Recommended size: 800x1000px (4:5 ratio) or high-resolution vertical portrait.
3. The component in `src/components/home/HeroPortrait.jsx` will automatically detect and render your photo with `object-fit: cover` and editorial framing.

To add project screenshots or mockups:
1. Place project images in `public/images/projects/`:
   - `bharatdocs.png`
   - `srijan.png`
   - `chatty.png`
2. Update the `image` paths in `src/data/projects.js` if you wish to override the interactive mock interfaces.
