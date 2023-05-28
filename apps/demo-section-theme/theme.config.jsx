const themeConfig = {
  siteURL: "http://localhost:3000",
  defaultSeo: {
    canonical: "https://www.canonical.ie/",
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: "https://www.url.ie/",
      siteName: "SiteName",
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
    },
  },
  logo: {
    text: "Section",
    svg: (
      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" fill="#f2aff3" />
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
