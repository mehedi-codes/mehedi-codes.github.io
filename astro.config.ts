// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "/",
  build: {
    // Site CSS is small (~14 KB) — inline it to remove a render-blocking
    // request and shorten the CSS -> font critical chain on mobile.
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
