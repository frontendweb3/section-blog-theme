import type { ReactNode } from "react";
import dynamicIconImports from 'lucide-react/dynamicIconImports';

export interface SubNavigation  {
  title: string;
  href: string;
  target:string;
  description: string;
}


export interface Navigation {
  href?: string;
  title: string;
  svg?: ReactNode;
  subNav?: boolean;
  target:string;
  subNavigation?: SubNavigation[];
}

export interface SocialLinks {
  name: keyof typeof dynamicIconImports;
  url: string;
}

export interface Logo {
  TextLogo: string;
  ImageLightPath: string;
  ImageDarkPath: string;
}
export type homePageAsAuthor = boolean | string

export  interface TypeSectionBlogTheme {
  homePageAsAuthor: homePageAsAuthor;
  Logo: Logo;
  PrimaryNavigation: Navigation[];
  SecondaryNavigation: Navigation[];
  SocialLinks: SocialLinks[];
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
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  type?: string;
  caption?:string
}
export type BlogFrontMatter = {
  author?: string;
  date?: string;
  description: string;
  image?: string | string[] | MetaImage;
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
  | "facebook"
  | "twitter"
  | "youtube"
  | "linkedin"
  | "github"
  | "instagram";

export type AuthorFrontMatter = {
  name: string;
  description?: string;
  date?: string;
  image?: string | string[] | MetaImage;
  tags?: string[];
  title: string;
  type: "author";
  job?: string;
  draft?: boolean;
  social?: { name: iconsType; svg?: React.ReactNode; url: string }[];
};

export type GetMetaData = MdxFileCard | MdxFileAuthorCard;

export type GetImage = MetaImage | string | string[];
