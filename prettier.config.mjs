/** @type {import("prettier").Config} */
const config = {
  arrowParens: "always",
  embeddedLanguageFormatting: "auto",
  endOfLine: "auto",
  htmlWhitespaceSensitivity: "css",
  printWidth: 80,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  semi: true,
  trailingComma: "es5",
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["mergeCn", "cva"],
};

export default config;
