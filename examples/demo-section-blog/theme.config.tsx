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
    ImageDrakPath: "/next.png"
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
      title: "Components",
      subNav: true,
      subNavigation: [
        {
          title: "Alert Dialog",
          href: "/docs/primitives/alert-dialog",
          description:
            "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
          title: "Hover Card",
          href: "/docs/primitives/hover-card",
          description:
            "For sighted users to preview content available behind a link.",
        },
        {
          title: "Progress",
          href: "/docs/primitives/progress",
          description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
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
