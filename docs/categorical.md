<script setup lang="ts">
// https://vitepress.dev/guide/using-vue#script-and-style
// https://vitepress.dev/guide/using-vue#using-components
// https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
import { schemeCarbonDark14, schemeCarbonLight14 } from "../"
import ColorSwatch from "./components/ColorSwatch.vue";
</script>

# Categorical Schemes

## schemeCarbonDark14 {#schemeCarbonDark14}

```js
import { schemeCarbonDark14 } from "d3-extra-scale-chromatic";
```

<ColorSwatch :colors="schemeCarbonDark14" />

[Source](https://github.com/joaopalmeiro/d3-extra-scale-chromatic/blob/main/src/categorical/CarbonDark14.ts) · An array of {{ schemeCarbonDark14.length }} categorical colors authored by [IBM (Carbon Design System)](https://carbondesignsystem.com/) represented as RGB hexadecimal strings.

## schemeCarbonLight14 {#schemeCarbonLight14}

```js
import { schemeCarbonLight14 } from "d3-extra-scale-chromatic";
```

<ColorSwatch :colors="schemeCarbonLight14" />

[Source](https://github.com/joaopalmeiro/d3-extra-scale-chromatic/blob/main/src/categorical/CarbonLight14.ts) · An array of {{ schemeCarbonLight14.length }} categorical colors authored by [IBM (Carbon Design System)](https://carbondesignsystem.com/) represented as RGB hexadecimal strings.
