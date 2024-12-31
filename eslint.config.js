import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

const compat = new FlatCompat();

export default [
  // Base configurations for all projects
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    ignores: ["**/dist/**", "**/build/**", "**/node_modules/**"],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },

  // TypeScript configuration for all projects
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: ["**/dist/**", "**/build/**", "**/node_modules/**"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: ["./api/tsconfig.json", "./app/tsconfig.json"],
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },

  // Prettier compatibility for all projects
  ...compat.extends("eslint-config-prettier"),
];
