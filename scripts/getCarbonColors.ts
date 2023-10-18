// Commands:
// npm install @carbon/charts css @types/node @types/css --no-save
// npx jiti scripts/getCarbonColors.ts

import type { Declaration, Node, Rule, StyleRules } from "css";
import { parse } from "css";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// https://github.com/reworkcss/css#types
const isRule = (node: Node): node is Rule => node.type === "rule";
const isDeclaration = (node: Node): node is Declaration =>
  node.type === "declaration";

const isUndefined = (value: any): value is undefined => {
  return typeof value === "undefined";
};

const isLightThemeRule = (
  styleRule: StyleRules["rules"][number],
): styleRule is Rule => {
  const isColorRule =
    isRule(styleRule) &&
    !isUndefined(styleRule.selectors) &&
    styleRule.selectors.includes(".cds--chart-holder");

  return isColorRule;
};

const isDarkThemeRule = (
  styleRule: StyleRules["rules"][number],
): styleRule is Rule => {
  const isColorRule =
    isRule(styleRule) &&
    !isUndefined(styleRule.selectors) &&
    styleRule.selectors.includes(".cds--chart-holder[data-carbon-theme=g90]") &&
    styleRule.selectors.includes(".cds--chart-holder[data-carbon-theme=g100]");

  return isColorRule;
};

const extractColors = (rule: Rule | undefined): string[] | undefined => {
  return rule?.declarations?.reduce<string[]>((acc, declaration) => {
    if (
      isDeclaration(declaration) &&
      !isUndefined(declaration.property) &&
      declaration.property.startsWith("--cds-charts-14") &&
      !declaration.property.endsWith("hovered") &&
      !isUndefined(declaration.value)
    ) {
      return [...acc, declaration.value];
    }

    return acc;
  }, []);
};

const colorsPath = resolve(
  __dirname,
  "../node_modules/@carbon/charts/styles.css",
);
const colors = readFileSync(colorsPath, { encoding: "utf8" });

const parsedColors = parse(colors).stylesheet;
// console.log(JSON.stringify(parsedColors));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://medium.com/@anchen.li/type-guard-in-typescript-array-find-a2879017e3ad
if (!isUndefined(parsedColors)) {
  const rules = parsedColors.rules;

  const carbonLight = rules.find(isLightThemeRule);
  const carbonLightColors = extractColors(carbonLight);
  console.log("CarbonLight14", carbonLightColors, carbonLightColors?.length);

  const carbonDark = rules.find(isDarkThemeRule);
  const carbonDarkColors = extractColors(carbonDark);
  console.log("CarbonDark14", carbonDarkColors, carbonDarkColors?.length);
}
