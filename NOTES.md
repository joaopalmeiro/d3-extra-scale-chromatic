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

## Commands

```bash
npm install -D typescript vite @types/node@18.18
```

```bash
npm install -D tsup typescript @arethetypeswrong/cli prettier
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
