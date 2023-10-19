import matter from "gray-matter";
import { readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

import { description, name, version } from "../package.json";

const outputPath = resolve(__dirname, "../docs/index.md");

// https://nodejs.dev/en/learn/working-with-folders-in-nodejs/#read-the-content-of-a-directory
const numberCategoricalSchemes = readdirSync(
  resolve(__dirname, "../src/categorical"),
).length;

// https://github.com/jonschlinkert/gray-matter#api
// https://github.com/nodeca/js-yaml
// https://github.com/jonschlinkert/gray-matter/issues/107
// https://github.com/nodeca/js-yaml/issues/634
// https://github.com/nodeca/js-yaml/tree/3.14.1
// https://github.com/jonschlinkert/gray-matter/blob/master/package.json
// https://github.com/jonschlinkert/gray-matter/blob/4.0.2/lib/stringify.js#L51
// https://byby.dev/js-remove-last-char
// https://github.com/nodeca/js-yaml/issues/600
// https://github.com/nodeca/js-yaml/issues/441
const indexContent = matter.stringify(
  "",
  {
    layout: "home",
    titleTemplate: description,
    hero: {
      name,
      text: `v${version}`,
      tagline: description,
      actions: [
        { theme: "brand", text: "Get Started", link: "/getting-started" },
        {
          theme: "alt",
          text: "View on npm",
          link: "https://www.npmjs.com/package/d3-extra-scale-chromatic",
        },
      ],
    },
    features: [
      {
        icon: "📊",
        title: "Categorical Schemes",
        details: `${numberCategoricalSchemes} schemes available.`,
        link: "/categorical",
      },
    ],
  },
  {
    indent: 2,
    delimiters: "---",
    // quotingType: '"'
  },
);

// https://nodejs.dev/en/learn/writing-files-with-nodejs/#writing-a-file-synchronously
try {
  writeFileSync(outputPath, indexContent.slice(0, -1));
} catch (err) {
  console.error(err);
}
