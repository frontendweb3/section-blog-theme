const themeConfig = {
  logo: {
    svg: (
      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="#f2aff3" x="50" y="50" />
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
      route: "/authors",
      name: "Authors",
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
    {
      route: "/contact",
      name: "Contact",
    },
  ],
  social_links: [
    {
      name: "Facebook",
      url: "https://facebook.com/officialrajdeepsingh",
    },
    {
      name: "Twitter",
      url: "https://facebook.com/officialrajdeepsingh",
    },
    {
      name: "Linkedin",
      url: "https://facebook.com/officialrajdeepsingh",
    },
    {
      name: "Instagram",
      url: "https://facebook.com/officialrajdeepsingh",
    },
    {
      name: "Github",
      url: "https://facebook.com/officialrajdeepsingh",
    },
  ],
};

export default themeConfig;
