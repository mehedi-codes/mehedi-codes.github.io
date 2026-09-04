/**
 *
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  printWidth: 110,
  trailingComma: "es5",
  arrowParens: "always",
  bracketSpacing: true,
  bracketSameLine: true,
  singleAttributePerLine: true,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
