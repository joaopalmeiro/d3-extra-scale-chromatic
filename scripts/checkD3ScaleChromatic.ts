// Commands:
// npm install d3-scale-chromatic @types/d3-scale-chromatic --no-save
// npx jiti scripts/checkD3ScaleChromatic.ts

import { schemeGreens, schemePuBuGn } from "d3-scale-chromatic";

console.log(schemeGreens, schemeGreens.length);
console.log(schemeGreens[9]);

console.log(schemePuBuGn, schemePuBuGn.length);
console.log(schemePuBuGn[9]);
