import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/github": "https://github.com/jjoeldaniel",
    "/linkedin": "https://linkedin.com/in/joeldanielrico",
    "/steam": "https://steamcommunity.com/id/jjoeldaniel/",
    "/resume": "https://linkedin.com/in/joeldanielrico/resume/blob/main/resume.pdf"
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  }
});
