import { defineConfig } from "@voidzero-dev/vite-plus";

export default defineConfig({
  test: {
    environment: "node",
    coverage: {
      include: ["**/*.ts"],
    },
  },
});
