import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  root: __dirname,
  ignore: ["**/*.test.{js,jsx,ts,tsx}"],
  ignorePatterns: ["**/node_modules/**", "**/dist/**", "**/public/**"],
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;
