const themeConfig = {
  HomePageAsAuthor: false,
  DateFormat: "MMM DD, YYYY",
  SiteURL: "https://section-theme-blog-docs.vercel.app",
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
    TextLogo: "Section",
    ImageLightPath: "/logo.svg",
    ImageDarkPath: "/next.svg",
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
  ],
  social_links: [
    {
      name: "Twitter",
      url: "https://twitter.com/Official_R_deep",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/officalrajdeepsingh/",
    },
    {
      name: "Github",
      url: "https://github.com/officialrajdeepsingh",
    },
  ],
};
export default themeConfig;
