import { defineConfig } from "vite-plus";

export default defineConfig({
  lint: {
    ignorePatterns: ["node_modules", "dist", ".turbo"],
    extends: [
      "../oxlint-config/index.jsonc",
      // "@monkeytype/oxlint-config"
    ],
  },
});
