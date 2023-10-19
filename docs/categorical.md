<script setup lang="ts">
// https://vitepress.dev/guide/using-vue#script-and-style
// https://vitepress.dev/guide/using-vue#using-components
// https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
import {
  schemeCarbonDark14,
  schemeCarbonLight14,
  schemeCategory20,
  schemeCategory20b,
  schemeCategory20c,
  schemeFlatUI,
} from "../";
import ColorSwatch from "./components/ColorSwatch.vue";
</script>

# Categorical Schemes

## schemeCarbonDark14 {#schemeCarbonDark14}

```js
import { schemeCarbonDark14 } from "d3-extra-scale-chromatic";
```

<ColorSwatch :colors="schemeCarbonDark14" />

- {{ schemeCarbonDark14.length }} colors
- Source: [IBM (Carbon Design System)](https://carbondesignsystem.com/)
- [Source code](https://github.com/joaopalmeiro/d3-extra-scale-chromatic/blob/main/src/categorical/CarbonDark14.ts)

## schemeCarbonLight14 {#schemeCarbonLight14}

```js
import { schemeCarbonLight14 } from "d3-extra-scale-chromatic";
```

<ColorSwatch :colors="schemeCarbonLight14" />

- {{ schemeCarbonLight14.length }} colors
- Source: [IBM (Carbon Design System)](https://carbondesignsystem.com/)
- [Source code](https://github.com/joaopalmeiro/d3-extra-scale-chromatic/blob/main/src/categorical/CarbonLight14.ts)

## schemeCategory20 {#schemeCategory20}

```js
import { schemeCategory20 } from "d3-extra-scale-chromatic";
```

<ColorSwatch :colors="schemeCategory20" />

- {{ schemeCategory20.length }} colors
- Source: [Vega](https://vega.github.io/vega/)
- [Source code](https://github.com/joaopalmeiro/d3-extra-scale-chromatic/blob/main/src/categorical/Category20.ts)

## schemeCategory20b {#schemeCategory20b}

```js
import { schemeCategory20b } from "d3-extra-scale-chromatic";
```

<ColorSwatch :colors="schemeCategory20b" />

- {{ schemeCategory20b.length }} colors
- Source: [Vega](https://vega.github.io/vega/)
- [Source code](https://github.com/joaopalmeiro/d3-extra-scale-chromatic/blob/main/src/categorical/Category20b.ts)

## schemeCategory20c {#schemeCategory20c}

```js
import { schemeCategory20c } from "d3-extra-scale-chromatic";
```

<ColorSwatch :colors="schemeCategory20c" />

- {{ schemeCategory20c.length }} colors
- Source: [Vega](https://vega.github.io/vega/)
- [Source code](https://github.com/joaopalmeiro/d3-extra-scale-chromatic/blob/main/src/categorical/Category20c.ts)

## schemeFlatUI {#schemeFlatUI}

```js
import { schemeFlatUI } from "d3-extra-scale-chromatic";
```

<ColorSwatch :colors="schemeFlatUI" />

- {{ schemeFlatUI.length }} colors
- Source: [proplot](https://github.com/proplot-dev/proplot) and [Flat UI Colors 2](https://flatuicolors.com/)
- [Source code](https://github.com/joaopalmeiro/d3-extra-scale-chromatic/blob/main/src/categorical/FlatUI.ts)