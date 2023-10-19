import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
// https://vitepress.dev/reference/default-theme-config
// https://github.com/d3/d3/blob/main/docs/.vitepress/config.ts
// https://vitepress.dev/reference/default-theme-home-page
// https://github.com/d3/d3/blob/main/docs/index.md?plain=1
// https://github.com/d3/d3/blob/main/docs/getting-started.md?plain=1
// https://vitepress.dev/guide/routing#route-rewrites
// https://vitepress.dev/reference/site-config#rewrites
// https://github.com/vuejs/vitepress/blob/main/docs/guide/getting-started.md?plain=1
export default defineConfig({
  lang: 'en-US',
  title: "d3-extra-scale-chromatic",
  description: "Extra color scales for D3, following d3-scale-chromatic.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "d3-scale-chromatic",
        link: "https://d3js.org/d3-scale-chromatic",
      },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "Getting Started", link: "/getting-started" }],
      },
      {
        text: "Schemes",
        items: [{ text: "Categorical", link: "/categorical" }],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/joaopalmeiro/d3-extra-scale-chromatic",
        ariaLabel: "GitHub repo"
      },
    ],
    search: {
      provider: "local",
    },
  },
  cleanUrls: true,
});
