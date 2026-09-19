// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "/",
  image: {
    remotePatterns: [{ protocol: "https", hostname: "placehold.net" }],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
