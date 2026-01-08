import { defineConfig } from '@voidzero-dev/vite-plus';

export default defineConfig({
  lint: {
    "ignorePatterns": ["node_modules", "__migration__", "dist", ".turbo"],
    "extends": [
      "../packages/oxlint-config/index.jsonc"
      // "@monkeytype/oxlint-config"
    ]
  },
  
});
