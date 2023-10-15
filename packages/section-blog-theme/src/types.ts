import type { ReactNode } from "react";
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { DefaultSeoProps } from "next-seo"
export interface SubNavigation {
  title: string;
  href: string;
  target: string;
  description: string;
}

export interface Navigation {
  href?: string;
  title: string;
  svg?: ReactNode;
  subNav?: boolean;
  target: string;
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

export interface settingsTypes {
  SiteURL?: string;
  title?: string;
  description?: string;
  keyword?: string;
  defaultSEO?: DefaultSeoProps;
}

export interface TypeSectionBlogTheme {
  DateFormat?: string;
  settings?: settingsTypes;
  homePageAsAuthor: homePageAsAuthor;
  Logo: Logo;
  PrimaryNavigation: Navigation[];
  SecondaryNavigation: Navigation[];
  SocialLinks: SocialLinks[];
  titleSuffix?: string;
  bannerMessage?: string;
}

export type MdxFileCard<FrontMatterType = BlogFrontMatter> = {
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
  | 404
  | 500;

export interface MetaImage {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  type?: string;
  caption?: string
}

export interface authorType {
  name: string;
  authorUrl?: string;
}

export type BlogFrontMatter = {
  author?: authorType | string;
  date?: string;
  description: string;
  image?: string | string[] | MetaImage;
  tags?: string[];
  title: string;
  type: "post";
};
export type iconsType =
  | "facebook"
  | "twitter"
  | "youtube"
  | "linkedin"
  | "github"
  | "instagram";

export type GetMetaData = MdxFileCard

export type GetImage = MetaImage | string | string[];
