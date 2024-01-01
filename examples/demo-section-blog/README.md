Start your blog journey with Next.js, Nextra, and MDX using section themes. You can start your blog in less than two minutes, and you need only one command and zero configuration. Section theme comes with an inbuilt dark mode, a search bar, Customize Navigation, and SEO Support.

## Buy a Coffee

[![Buy a Coffee](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/K3K2E87F0)

### Installation

The Installation of the section blog theme is a lot easier. You can install the section blog theme with the following command.

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

Next step to import css file from section blog theme inside your `\_app.mdx' file.

```javascript
import "section-blog-theme/styles.css";
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

### Create Theme Config file

The lastly create a `theme.config.jsx` or `theme.config.tsx` file in your root level.

```javascript
// theme.config.jsx
const themeConfig = {
  settings: {
    title: "Start your blog or portfolio using MDX, Next.Js, and Nextra.",
    description: "Section blog theme is build with Nextjs and tailwind css.",
    SiteURL: "https://officialrajdeepsingh.dev",
    defaultSEO: {
      title: "Start your blog or portfolio using MDX, Next.Js, and Nextra.",
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
    logo: (
      <>
        <svg width="36" height="36" viewBox="0 0 434 420" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M226.569 66.5458C222.348 59.1514 211.686 59.1514 207.464 66.5458L63.4636 318.753C59.2767 326.086 64.5719 335.207 73.0163 335.207H361.018C369.462 335.207 374.757 326.086 370.57 318.753L226.569 66.5458ZM217.017 270.333C235.355 270.333 250.221 256.557 250.221 239.563C250.221 222.57 235.355 208.793 217.017 208.793C198.679 208.793 183.813 222.57 183.813 239.563C183.813 256.557 198.679 270.333 217.017 270.333Z" />
        </svg>
      </>
    ),
    link: "/",
    target: "_blank"
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

Lastly, rename the file extension the .tsx or .jsx to a .mdx. for every file inside the pages folder. But does not change the `_document.jsx or _document.tsx` file extension.
