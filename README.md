### Installation

The Installation of the section theme blog is a lot easier. You can install the section theme blog with the following command.

```bash
pnpm add nextra section-theme-blog
```

```bash
yarn add nextra section-theme-blog
```

```bash
npm install nextra section-theme-blog
```

### Configure the section theme with nextra

Create the following `next.config.js` file in your project’s root directory:

```javascript
// next.config.js

const withNextra = require("nextra")({
  theme: "section-theme-blog",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra();
```

### Create Theme Config file

The lastly create a `theme.config.tsx` or `theme.config.jsx` file in your root level.

```javascript
// theme.config.tsx

import type { SectionBlogTheme } from "section-theme-blog";

const themeConfig: SectionBlogTheme = {
  siteURL: "http://localhost:3000",
  logo: {
    text: "Section",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V12"
          stroke="black"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  primary_navigation: [
    {
      route: "/",
      name: "Home",
    },
    {
      route: "/posts",
      name: "Blog",
    },
    {
      route: "/about",
      name: "About",
    },
    {
      route: "/contact",
      name: "Contact",
    },
  ],
  secondary_navigation: [
    {
      route: "/disclaimer",
      name: "Disclaimer",
    },
    {
      route: "/privacy-policy",
      name: "Privacy policy",
    },
  ],
  social_links: [
    {
      name: "Twitter",
      url: "https://facebook.com/officialrajdeepsingh",
    },
    {
      name: "Github",
      url: "https://facebook.com/officialrajdeepsingh",
    },
  ],
};

export default themeConfig;
```
