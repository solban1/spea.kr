import type { AstroUserConfig } from "astro";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
const config: AstroUserConfig = {
  site: "https://spea.kr",
  integrations: [
    sitemap({
      lastmod: new Date(),
      priority: 1,
    }),
  ],
};

export default config;
