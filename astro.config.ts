import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://73rdstreet.com",
  integrations: [sitemap()],
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  // Astro 7 defaults to "jsx"-style whitespace; keep spaces between text and inline tags.
  compressHTML: true,
  scopedStyleStrategy: "where",
});
