import type { DocsThemeConfig } from "nextra-theme-docs";

const themeConfig: DocsThemeConfig = {
  logo: (
    <>
      <svg
        className="fill-black dark:fill-white"
        fill="currentColor"
        width="120"
        height="80"
        viewBox="60 90 1328 380"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M247.177 104.672C242.99 97.1095 232.118 97.1095 227.93 104.672L68.3924 392.805C64.333 400.137 69.6354 409.133 78.0158 409.133H397.092C405.472 409.133 410.775 400.137 406.715 392.805L247.177 104.672ZM238.312 323.4C258.367 323.4 274.625 307.864 274.625 288.7C274.625 269.536 258.367 254 238.312 254C218.258 254 202 269.536 202 288.7C202 307.864 218.258 323.4 238.312 323.4Z"
        />
      </svg>
    </>
  ),
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
          Section Blog Theme
        </a>
        .
      </span>
    ),
  },
};

export default themeConfig;
