<div style="display: block; margin-left: auto; margin-right: auto;width: 40%;">

![logo](./logo.svg)

</div>

<div style="margin-top: 10px auto;width:100%;"></div>

Start your blog journey with Next.js, Nextra, and MDX using section themes. You can start your blog in less than two minutes, and you need only one command and zero configuration. Section theme comes with an inbuilt dark mode, a search bar, Customize Navigation, and SEO Support.

## Tech Stack

<div className="flex flex-row flex-wrap item-center md:justify-between">
  <img style="margin: 5px auto;" title="pnpm" alt="pnpm" src="https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220" />
  <img style="margin: 5px auto;" title="reactjs" alt="reactjs"  src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img style="margin: 5px auto;" title="nextjs" alt="nextjs"  src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"/>
  <img style="margin: 5px auto;" title="typescript" alt="typescript"  src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img style="margin: 5px auto;" title="radix ui" alt="radix ui"  src="https://img.shields.io/badge/radixui-%23DD0031.svg?style=for-the-badge&logo=radixui&logoColor=white"/>
  <img style="margin: 5px auto;" title="tailwind css" alt="tailwind css" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img style="margin: 5px auto;" title="markdown" alt="markdown"  src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white"/>
  <img style="margin: 5px auto;" title="turborepo" alt="turborepo" src="https://img.shields.io/badge/turborepo-000204?style=for-the-badge&logo=turborepo&logoColor=white">
</div>

<div style="margin: 5px auto;width:100%;"></div>

## Installation

The Installation of the [section blog theme](https://www.npmjs.com/package/section-blog-theme) is a lot easier. You can install the section blog theme with the following command.

```bash
pnpm add nextra section-blog-theme
# or
yarn add nextra section-blog-theme
# or
npm install nextra section-blog-theme
```

## Configure the section blog with nextra

Create the following `next.config.js` file in your project’s root directory:

```javascript
// next.config.js

const withNextra = require("nextra")({
  theme: "section-blog-theme",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra();
```

## import css 

Next step to import css file from section blog theme inside your `_app.mdx' file.

```javascript
// _app.mdx

import "section-blog-theme/styles.css"
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

## Create Theme Config file

The lastly create a `theme.config.jsx` or `theme.config.tsx` file in your root level.

```javascript
// theme.config.jsx or theme.config.tsx

const themeConfig = {
  settings: {
    title: "My title",
    description: "my descript is here ",
    SiteURL:"https://officialrajdeepsingh.dev",
    defaultSEO: {
      title: "default SEO  title is here",
      titleTemplate: '%s | Section Blog Theme',
      twitter: {
        handle: "@FrontendWeb3",
        site: "FrontendWeb3",
        cardType: "summary_large_image",
      }
    }
  },
  bannerMessage: "Start your markdown portfolio blog with nextjs, nextra, tailwind CSS, and Shadcn UI using <a style='margin: 0px 4px;text-decoration:underline;' target='_blank' href='https://www.npmjs.com/package/section-blog-theme'>  the section blog theme. </a>",
  SocialLinks: [
    {
      name: "twitter",
      url: "https://twitter.com/FrontendWeb3",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/company/frontendweb",
    },
    {
      name: "github",
      url: "https://github.com/frontendweb3/section-theme-blog",
    },
  ],
  Logo: {
    text: "Section",
    logo:'<svg width="477" height="509" viewBox="0 0 477 509" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M247.177 104.672C242.99 97.1095 232.118 97.1095 227.93 104.672L68.3924 392.805C64.333 400.137 69.6354 409.133 78.0158 409.133H397.092C405.472 409.133 410.775 400.137 406.715 392.805L247.177 104.672ZM238.312 323.4C258.367 323.4 274.625 307.864 274.625 288.7C274.625 269.536 258.367 254 238.312 254C218.258 254 202 269.536 202 288.7C202 307.864 218.258 323.4 238.312 323.4Z" fill="white"/></svg>'
  },
  PrimaryNavigation: [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/posts",
      title: "Blog",
    },
    {
      title: "Projects",
      subNav: true,
      subNavigation: [
        {
          title: "Personal Blog",
          href: "https://officialrajdeepsingh.dev/",
          description:
            "Check out my personal portfolio blog website.",
        },
        {
          title: "Section Blog Theme",
          href: "https://github.com/frontendweb3/section-blog-theme",
          description: "Section blog theme is nextra based theme.",
        },
        {
          title: "Awesome Nextjs",
          href: "https://github.com/officialrajdeepsingh/awesome-nextjs",
          description:
            "A curated list of awesome Nextjs-based libraries that help build small and large-scale applications with next.js.",
        },
      ],
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/contact",
      title: "Contact",
    },
  ],
  SecondaryNavigation: [
    {
      href: "/disclaimer",
      title: "Disclaimer",
    },
    {
      href: "/privacy-policy",
      title: "Privacy policy",
    },
    {
      href: "/contact",
      title: "Contact",
    },
  ]
};
export default themeConfig;
```

## rename your file.
Lastly, rename the file extension the `.tsx ` or `.jsx` to a `.mdx`. for every file inside the pages folder. But does not change the `_document.jsx or _document.tsx` file extension.