import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("eslint:recommended"), // يجب أن تكون التوسعات ككائنات أو مسارات صحيحة
  ...compat.extends("next/core-web-vitals"), // يمكنك إضافة تكوينات أخرى مثل هذه
];

export default eslintConfig;

