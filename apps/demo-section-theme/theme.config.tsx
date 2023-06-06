const themeConfig = {
  dateFormat: "MMM DD, YYYY",
  siteURL: "http://localhost:3000",
  defaultSeo: {
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
