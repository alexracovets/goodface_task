import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

import { playwright } from "@vitest/browser-playwright";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(dirname, "."),
      "@styles": path.resolve(dirname, "./src/styles"),
      "@fonts": path.resolve(dirname, "./src/ui/fonts"),
      "@utils": path.resolve(dirname, "./src/utils"),
      "@components": path.resolve(dirname, "./src/ui/components"),
      "@atoms": path.resolve(dirname, "./src/ui/components/atoms"),
      "@molecules": path.resolve(dirname, "./src/ui/components/molecules"),
      "@organisms": path.resolve(dirname, "./src/ui/components/organisms"),
      "@templates": path.resolve(dirname, "./src/ui/components/templates"),
      "@types": path.resolve(dirname, "./src/ui/types"),
      "@hooks": path.resolve(dirname, "./src/hooks"),
      "@store": path.resolve(dirname, "./src/store"),
      "@schemas": path.resolve(dirname, "./src/ui/schemas"),
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({ configDir: path.join(dirname, ".storybook") }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: "chromium" }],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
      {
        extends: true,
        test: {
          name: "unit",
          environment: "jsdom",
          globals: true,
          setupFiles: ["./vitest.setup.ts"],
          include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
          exclude: ["**/node_modules/**", "**/.storybook/**"],
        },
      },
    ],
  },
});
