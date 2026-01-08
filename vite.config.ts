import { defineConfig } from '@voidzero-dev/vite-plus';

export default defineConfig({
  fmt: {
    "$schema": "https://raw.githubusercontent.com/oxc-project/oxc/refs/heads/main/npm/oxfmt/configuration_schema.json",
    "printWidth": 80,
    "tabWidth": 2,
    "useTabs": false,
    "htmlWhitespaceSensitivity": "ignore",
    "endOfLine": "lf",
    "trailingComma": "all",
    "ignorePatterns": [
      "pnpm-lock.yaml",
      "node_modules",
      ".turbo",
      "dist",
      "build",
      "logs",
      "coverage",
      "*.md"
    ]
  },
  lint: {
    "ignorePatterns": ["node_modules", "dist", ".turbo"],
    "extends": [
      "./packages/oxlint-config/index.jsonc"
      // "@monkeytype/oxlint-config"
    ]
  },
});
