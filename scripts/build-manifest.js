// Run from repo root: node scripts/build-manifest.js
// Scans models/ and writes models/manifest.json.
// Edit the JSON manually to reorder or exclude files.
const { readdirSync, writeFileSync } = require('fs');

const files = readdirSync('models')
  .filter(f => /\.(ply|glb|gltf)$/i.test(f))
  .sort()
  .map(f => `models/${f}`);

writeFileSync('models/manifest.json', JSON.stringify(files, null, 2) + '\n');
console.log(`manifest.json updated — ${files.length} model(s):`);
files.forEach(f => console.log(`  ${f}`));
