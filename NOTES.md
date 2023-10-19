# Notes

- https://github.com/joaopalmeiro/vue-social-media-icons
- https://seaborn.pydata.org/tutorial/color_palettes.html#qualitative-color-palettes
- https://matplotlib.org/stable/users/explain/colors/colormaps.html
- https://sciviscolor.org/colormaps/
- https://proplot.readthedocs.io/en/stable/colormaps.html
- https://proplot.readthedocs.io/en/stable/cycles.html
- http://medialab.github.io/iwanthue/
- https://github.com/d3/d3-scale-chromatic/blob/main/package.json
- https://d3js.org/d3-scale-chromatic
- https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/d3-scale-chromatic/index.d.ts
- https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type
- https://vitejs.dev/guide/build.html#library-mode
- https://vitejs.dev/guide/cli.html#build
- https://github.com/vitejs/vite/tree/main/packages/create-vite
- https://github.com/vitejs/vite/blob/main/packages/create-vite/template-react-ts/package.json
- https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vanilla-ts
- https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vue-ts
- https://www.totaltypescript.com/tsconfig-cheat-sheet
- https://github.com/vitejs/vite/blob/main/packages/create-vite/template-react-ts/tsconfig.json
- https://github.com/vitejs/vite/blob/main/packages/create-vite/template-vanilla-ts/tsconfig.json
- https://github.com/vitejs/vite/blob/main/packages/create-vite/template-vue-ts/tsconfig.json
- https://github.com/vitejs/vite/blob/main/packages/create-vite/template-vue-ts/tsconfig.node.json
- https://github.com/vitejs/vite/blob/main/packages/create-vite/template-vue-ts/package.json
- https://github.com/joaopalmeiro/vue-social-media-icons/blob/main/package.json
- https://www.typescriptlang.org/tsconfig#lib
- https://www.typescriptlang.org/docs/handbook/project-references.html#overall-structure
- https://github.com/vuejs/create-vue/tree/main/template/tsconfig/base
- https://github.com/vuejs/tsconfig/blob/main/tsconfig.json
- https://stephango.com/flexoki
- https://docs.npmjs.com/cli/v10/configuring-npm/package-json#repository
- https://www.typescriptlang.org/tsconfig#moduleDetection
- https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess
- https://github.com/tsconfig/bases/blob/main/bases/strictest.json
- https://github.com/DefinitelyTyped/DefinitelyTyped/issues/42640
- https://stackoverflow.com/questions/42035263/relationship-between-the-version-of-node-js-and-the-version-of-types-node
- https://github.com/vuejs/tsconfig/blob/v0.4.0/tsconfig.dom.json#L20
- https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html
- https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html#supported-jsdoc
- https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
- https://github.com/vitejs/vite/issues/3461 + https://github.com/vitejs/vite/issues/2989
- https://nodejs.org/dist/latest-v18.x/docs/api/packages.html#nodejs-packagejson-field-definitions
- https://github.com/egoist/rollup-plugin-esbuild/blob/dev/package.json
- https://nodejs.org/dist/latest-v18.x/docs/api/packages.html#conditional-exports
- https://publint.dev/rules#export_types_invalid_format
- https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/UntypedResolution.md
- https://d3js.org/d3-scale-chromatic/categorical
- https://vega.github.io/vega/docs/schemes/#categorical
- https://github.com/d3/d3/blob/main/docs/components/ColorSwatches.vue
- https://vitepress.dev/guide/getting-started
- https://github.com/carbon-design-system/carbon-charts/blob/v1.13.6/packages/core/scss/_color-palette.scss
- https://carbondesignsystem.com/data-visualization/color-palettes/#categorical-palettes
- https://github.com/plentycode/sass-export
- https://github.com/carbon-design-system/carbon-charts/tree/v1.13.6/packages/core
- `npm install @carbon/charts --no-save`
- `npx sass --load-path=node_modules --no-source-map node_modules/@carbon/charts/scss/_color-palette.scss carbon.css`
- `npx sass-export node_modules/@carbon/charts/scss/_color-palette.scss -o carbon-color-palettes.json -d "node_modules/"`
- https://github.com/carbon-design-system/carbon/blob/v11.40.0/packages/colors/src/colors.js
- https://www.falldowngoboone.com/blog/share-variables-between-javascript-and-css/
- https://github.com/egoist/ts-lib-starter
- https://spacejelly.dev/posts/how-to-export-sass-variables-to-javascript-with-next-js/
- https://github.com/jairmedeiros/scss-json
- https://github.com/salesforce-ux/scss-parser
- https://github.com/parcel-bundler/lightningcss + https://lightningcss.dev/docs.html
- https://github.com/linkedin/eyeglass
- https://gitlab.com/gitlab-org/gitlab-ui/-/blob/v66.34.0/src/utils/utils.js#L57
- https://vitepress.dev/guide/deploy#surge
- https://github.com/vuejs/vitepress/blob/v1.0.0-rc.22/src/client/theme-default/components/VPSocialLink.vue
- https://github.com/vuejs/vitepress/blob/v1.0.0-rc.22/src/client/theme-default/support/socialIcons.ts
- https://vitepress.dev/reference/default-theme-config#sociallinks
- https://github.com/jonschlinkert/gray-matter
- `npm install -D vitepress vue`
- https://en.wikipedia.org/wiki/Source_code
- https://surge.sh/help/resetting-your-password
- `npm install -D surge`

## Commands

```bash
npm install -D typescript vite @types/node@18.18
```

```bash
npm install -D tsup typescript @arethetypeswrong/cli prettier
```

```bash
rm -rf node_modules/ && npm install -D vitepress
```

```bash
npm install -D vitepress gray-matter
```

```bash
npx vitepress init
```

```bash
npx surge --help
```

```bash
npx surge token
```

## Snippets

### `tsconfig.json` file

```json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.node.json"
    },
    {
      "path": "./tsconfig.pkg.json"
    }
  ]
}
```

```json
{
  "compilerOptions": {
    "allowJs": true,
    "declaration": true,
    "emitDeclarationOnly": true,
    "outDir": "dist",
    "declarationMap": true
  },
  "include": ["src/**/*.js"]
}
```
