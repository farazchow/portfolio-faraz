import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Faraz Chowdhury Portfolio",
  description: "6.1040 Fall 2024",
  base: "/portfolio-faraz/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Assignments", link: "/assignments"},
      { text: "Blogs", link: "/blogs" },
      { text: "About Me", link: "/about" },
    ],

    sidebar: [
      {
        text: "Assignments",
        link: "/assignments"
      },
      {
        text: "Blogs",
        link: "/blogs",
      },
      {
        text: "About Me",
        link: "/about",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/farazchow" }],
  },
});
