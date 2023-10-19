// Commands:
// npm install @gitlab/ui --no-save
// npx jiti scripts/getPajamasColors.ts

// https://gitlab.com/gitlab-org/gitlab-ui/-/blob/v66.34.0/src/utils/charts/theme.js#L91
// https://gitlab.com/gitlab-org/gitlab-ui/-/blob/v66.34.0/src/utils/charts/theme.js#L126

import {
  colorPaletteDefault,
  colorPaletteDark,
} from "@gitlab/ui/dist/utils/charts/theme.js";

console.log("PajamasLight", colorPaletteDefault, colorPaletteDefault.length);
console.log("PajamasDark", colorPaletteDark, colorPaletteDark.length);
