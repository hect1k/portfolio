import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  site: "https://nnisarg.in",
  integrations: [tailwind(), sitemap()],
});
