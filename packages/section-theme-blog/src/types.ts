import type { DefaultSeoProps } from "next-seo";
import type { ReactNode } from "react";
interface Navigation {
  route: string;
  name: string;
  svg?: ReactNode;
}

interface SocialLink {
  name: string;
  url: string;
  svg?: ReactNode;
}
export interface SectionBlogTheme {
  dateFormat?: string;
  siteURL: string;
  defaultSeo?: DefaultSeoProps;
  logo: {
    text?: string;
    svg?: ReactNode;
  };
  primary_navigation: Navigation[];
  secondary_navigation: Navigation[];
  social_links: SocialLink[];
  titleSuffix?: string;
}

export type MdxFileCard<FrontMatterType = BlogFrontMatter> = {
  kind: "MdxPage";
  name: string;
  route: string;
  locale: string;
  frontMatter: FrontMatterType;
};

export type MdxFileAuthorCard<FrontMatterType = AuthorFrontMatter> = {
  kind: "MdxPage";
  name: string;
  route: string;
  locale: string;
  frontMatter: FrontMatterType;
};

export type LayoutTypes =
  | "home"
  | "post"
  | "page"
  | "posts"
  | "tag"
  | "author"
  | "authors"
  | 404
  | 500;

export interface MetaImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
  type?: string;
}
export type BlogFrontMatter = {
  author?: string;
  date?: string;
  except: string;
  image?: string | string[] | MetaImage[];
  tags?: string[];
  title: string;
  type: "post";
  draft?: boolean;
};

// define Author frontmatter for author card
export type MdxFileAuthor<FrontMatterType = AuthorFrontMatter> = {
  kind: "MdxPage";
  name: string;
  route: string;
  locale?: string;
  frontMatter: FrontMatterType;
};
export type iconsType =
  | "Facebook"
  | "Twitter"
  | "Youtube"
  | "Linkedin"
  | "Github"
  | "Instagram";

export type AuthorFrontMatter = {
  name: string;
  except?: string;
  date?: string;
  image?: string | string[] | MetaImage[];
  tags?: string[];
  title: string;
  type: "author";
  job?: string;
  draft?: boolean;
  social?: { name: iconsType; svg?: React.ReactNode; url: string }[];
};

export type GetMetaData = MdxFileCard | MdxFileAuthorCard;

export type GetImage = MetaImage[] | string | string[];
