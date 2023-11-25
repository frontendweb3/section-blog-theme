Start your blog journey with Next.js, Nextra, and MDX using section themes. You can start your blog in less than two minutes, and you need only one command and zero configuration. Section theme comes with an inbuilt dark mode, a search bar, Customize Navigation, and SEO Support.

### Tech Stack

<div className="flex flex-row flex-wrap item-center md:justify-between"  id="badges">
  <img style="margin: 5px auto;" title="typescript" alt="typescript"  src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img style="margin: 5px auto;" title="pnpm" alt="pnpm" src="https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220" />
  <img style="margin: 5px auto;" title="tailwind css" alt="tailwind css" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img style="margin: 5px auto;" title="markdown" alt="markdown"  src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white"/>
  <img style="margin: 5px auto;" title="reactjs" alt="reactjs"  src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img style="margin: 5px auto;" title="nextjs" alt="nextjs"  src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"/>
  <img style="margin: 5px auto;" title="radix ui" alt="radix ui"  src="https://img.shields.io/badge/radixui-%23DD0031.svg?style=for-the-badge&logo=radixui&logoColor=white"/>
  <img style="margin: 5px auto;" title="vercel" alt="vercel"  src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"/>
  <img style="margin: 5px auto;" title="turborepo" alt="turborepo" src="https://img.shields.io/badge/turborepo-000204?style=for-the-badge&logo=turborepo&logoColor=white">
  <img style="margin: 5px auto;" title="github pages" alt="github pages"  src="https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white"/>
  <img style="margin: 5px auto;" title="netlify" alt="netlify"  src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"/>
  <a target="_blank" href="https://codesandbox.io/u/officialrajdeepsingh">
    <img title="Buy a Coffee" alt="Buy a Coffee"  src="https://ko-fi.com/img/githubbutton_sm.svg"/>
  </a>
</div>

<div style="margin: 5px auto;width:100%;"></div>

### Installation

The Installation of the [section blog theme](https://www.npmjs.com/package/section-blog-theme) is a lot easier. You can install the section blog theme with the following command.

```bash
pnpm add nextra section-blog-theme
```

```bash
yarn add nextra section-blog-theme
```

```bash
npm install nextra section-blog-theme
```

### Configure the section blog with nextra

Create the following `next.config.js` file in your project’s root directory:

```javascript
// next.config.js

const withNextra = require("nextra")({
  theme: "section-blog-theme",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra();
```

### import css 

Next step to import css file from section blog theme inside your `_app.mdx' file.

```javascript
import "section-blog-theme/styles.css"
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

### Create Theme Config file

The lastly create a `theme.config.jsx` or `theme.config.tsx` file in your root level.

```javascript
// theme.config.jsx

const themeConfig = {
  settings: {
    title: "My title",
    description: "my descript is here ",
    SiteURL:"https://section-theme-blog-docs.vercel.app",
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
  DateFormat: "MMM DD, YYYY",
  bannerMessage: "How are your <a style='margin: 0px 10px;' target='_blank' href='https://google.com'> learn more </a>",
  SocialLinks: [
    {
      name: "twitter",
      url: "https://twitter.com/Official_R_deep",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/officalrajdeepsingh/",
    },
    {
      name: "github",
      url: "https://github.com/officialrajdeepsingh",
    },
  ],
  Logo: {
    TextLogo: "logo here"
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
Lastly, rename the file extension the .tsx or .jsx  to a .mdx. for every file inside the pages folder. But does not change the `_document.jsx or _document.tsx` file extension.