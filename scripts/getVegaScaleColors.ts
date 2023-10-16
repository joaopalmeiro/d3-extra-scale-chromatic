// Commands:
// npm install vega-scale --no-save
// npx jiti scripts/getVegaScaleColors.ts

import { scheme } from "vega-scale";

// https://github.com/vega/vega/blob/v5.25.0/packages/vega-scale/src/palettes.js

const tableau20Name = "tableau20";
const tableau20Scheme = scheme(tableau20Name);
console.log(tableau20Name, tableau20Scheme, tableau20Scheme.length);

const category20Name = "category20";
const category20Scheme = scheme(category20Name);
console.log(category20Name, category20Scheme, category20Scheme.length);

const category20bName = "category20b";
const category20bScheme = scheme(category20bName);
console.log(category20bName, category20bScheme, category20bScheme.length);
