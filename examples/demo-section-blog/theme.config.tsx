const themeConfig = {
  settings: {
    title: "My title",
    description: "my descript is here ",
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
  bannerMessage: "Start your markdown portfolio blog with nextjs, nextra, tailwind CSS, and Shadcn UI using <a style='margin: 0px 4px;' target='_blank' href='https://www.npmjs.com/package/section-blog-theme'>  the section blog theme. </a>",
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
    TextLogo: "Section"
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
