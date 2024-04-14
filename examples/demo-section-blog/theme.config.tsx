const themeConfig = {
  settings: {
    title: "Start your blog or portfolio using MDX, Next.Js, and Nextra.",
    description: "Section blog theme is build with Nextjs and tailwind css.",
    SiteURL: "https://officialrajdeepsingh.dev",
    defaultSEO: {
      title: "Start your blog or portfolio using MDX, Next.Js, and Nextra.",
      titleTemplate: "%s | Section Blog Theme",
      twitter: {
        handle: "@FrontendWeb3",
        site: "FrontendWeb3",
        cardType: "summary_large_image",
      },
    },
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
    {
      name: "facebook",
      url: "https://github.com/frontendweb3/section-theme-blog",
    },
    {
      name: "medium",
      url: "https://github.com/frontendweb3/section-theme-blog",
    }
  ],
  Logo: {
    logo: (
      <>
        <svg
          width="36"
          height="36"
          viewBox="0 0 434 420"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="currentColor"
            d="M226.569 66.5458C222.348 59.1514 211.686 59.1514 207.464 66.5458L63.4636 318.753C59.2767 326.086 64.5719 335.207 73.0163 335.207H361.018C369.462 335.207 374.757 326.086 370.57 318.753L226.569 66.5458ZM217.017 270.333C235.355 270.333 250.221 256.557 250.221 239.563C250.221 222.57 235.355 208.793 217.017 208.793C198.679 208.793 183.813 222.57 183.813 239.563C183.813 256.557 198.679 270.333 217.017 270.333Z"
          />
        </svg>
      </>
    ),
    link: "/",
    target: "_blank",
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
      title: "Layout",
      description : "Our description",
      subNav: true,
      subNavigation: [
        {
          title: "Home",
          href: "http://localhost:3000/",
          description: "Home Page Layout",
        },
        {
          title: "Page",
          href: "http://localhost:3000/about",
          description: "Page Layout",
        },
        {
          title: "Blog List",
          href: "http://localhost:3000/posts",
          description: "Reading Page Layout",
        },
        {
          title: "Reading",
          href: "http://localhost:3000/posts/cillum-cupidatat-proident-fugiat-aute",
          description: "Reading Page Layout",
        },
        {
          title: "Tag",
          href: "http://localhost:3000/tags/cillum",
          description: "Tag Page Layout",
        },
        {
          title: "Raw",
          href: "http://localhost:3000/raw",
          description: "Raw Page Layout",
        }
      ],
    },
    {
      title: "Projects",
      subNav: true,
      subNavigation: [
        {
          title: "Personal Blog",
          href: "https://officialrajdeepsingh.dev/",
          description: "Check out my personal portfolio blog website.",
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
};
export default themeConfig;
