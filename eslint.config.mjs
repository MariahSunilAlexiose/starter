import path from "node:path"
import { fileURLToPath } from "node:url"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import { defineConfig, globalIgnores } from "eslint/config"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  globalIgnores([
    "**/*.css",
    "**/*.json",
    "**/.md",
    ".husky/*",
    ".next/*",
    ".vscode/*",
    "node_modules/*",
    "public/*",
    "src/fonts/*",
    "**/next-env.d.ts",
    "**/next.config.ts",
    "**/yarn.lock",
    "**/.env*.local",
    "**/.gitignore",
    "**/.prettierignore",
    "**/next.config.mjs",
    "**/postcss.config.mjs",
    "**/README.md",
    "**/tailwind.config.ts",
    "**/tsconfig.tsbuildinfo",
  ]),
  {
    extends: compat.extends(
      "next/core-web-vitals",
      "plugin:react/jsx-runtime",
      "next",
      "prettier"
    ),

    rules: {
      "valid-typeof": "error",
      "use-isnan": "error",
      "no-unused-vars": "error",
      "no-import-assign": "error",
      "no-duplicate-imports": "error",
      "no-duplicate-case": "error",
      "no-dupe-keys": "error",
      "no-dupe-else-if": "error",
      "no-dupe-args": "error",
      "no-cond-assign": "error",
      "no-compare-neg-zero": "error",
      "no-func-assign": "error",
    },
  },
])
