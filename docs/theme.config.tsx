import type { DocsThemeConfig } from "nextra-theme-docs";

const themeConfig: DocsThemeConfig = {
  logo: <span> Section Blog </span>,
  project: {
    link: "https://github.com/frontendweb3/section-theme-blog",
  },
  head: function useHead() {
    return (
      <>
        <link rel="icon" href="/favicon.ico" type="image/ico" />
      </>
    );
  },
  docsRepositoryBase:
    "https://github.com/frontendweb3/section-theme-blog/blob/main/apps/docs/src/pages",
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          Section Blog
        </a>
        .
      </span>
    ),
  },
  faviconGlyph: "/favicon.ico",
};

export default themeConfig;
