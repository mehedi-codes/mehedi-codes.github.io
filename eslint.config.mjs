import { FlatCompat } from "@eslint/eslintrc";
import perfectionist from "eslint-plugin-perfectionist";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const eslintConfig = [
  ...compat.config({
    extends: ["next", "next/core-web-vitals", "next/typescript", "prettier"],
    plugins: ["prefer-arrow-functions"],
  }),
  perfectionist.configs["recommended-line-length"],
  {
    rules: {
      "prefer-template": "error",
      "prefer-arrow-callback": "error",
      "no-restricted-syntax": [
        "error",
        {
          selector: "FunctionExpression",
          message: "FunctionExpression: Function syntax is illegal. Only arrow functions are allowed",
        },
        {
          selector: "FunctionDeclaration",
          message: "FunctionDeclaration: Function syntax is illegal. Only arrow functions are allowed",
        },
      ],
      "prefer-arrow-functions/prefer-arrow-functions": [
        "error",
        {
          allowedNames: [],
          allowNamedFunctions: false,
          allowObjectProperties: false,
          classPropertiesAllowed: false,
          disallowPrototype: false,
          returnStyle: "unchanged",
          singleReturnOnly: false,
        },
      ],
    },
  },
];

export default eslintConfig;
