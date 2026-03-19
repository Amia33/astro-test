// @ts-check

import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://test.amia.work",
  base: "/",
  trailingSlash: "always",
  integrations: [sitemap()],

  adapter: cloudflare({
    imageService: { build: "compile", runtime: "cloudflare-binding" },
  }),

  output: "server",

  vite: {
    plugins: [tailwindcss()],
  },
});
