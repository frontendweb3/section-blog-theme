import { DefaultSeoProps } from "next-seo";
import type { ReactNode, FC } from "react";

// SubNavigation
export interface SubNavigation {
  title: string;
  href: string;
  target: string;
  description: string;
}
// Navigation
export interface Navigation {
  href?: string;
  title: string;
  svg?: ReactNode;
  subNav?: boolean;
  target: string;
  subNavigation?: SubNavigation[];
}


// Social link
export interface SocialLinks extends IconSvg {
  url: string;
}

// Lucide icon
export interface IconSvg extends React.SVGProps<SVGSVGElement> {
  name: string;
}

// logo
export interface Logo {
  logo: React.ReactNode | FC;
  link?: string;
  target?: string;
}
export interface settingsTypes {
  SiteURL?: string;
  title?: string;
  description?: string;
  keyword?: string;
  defaultSEO?: DefaultSeoProps;
}

export interface TypeSectionBlogTheme {
  DateFormat?: string;
  CardType?: CardType
  settings?: settingsTypes;
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

// layout type
export type LayoutTypes =
  | "home"
  | "post"
  | "page"
  | "posts"
  | "tag"
  | 404
  | 500;

// Card Type
export type CardType = {
   post: "one" | "two" | "three";
   tag: "two" | "three" 
}

// author
export interface authorType {
  name: string;
  url: string;
}

// blog front matter
export type BlogFrontMatter = {
  author?: authorType | string;
  date?: string;
  description: string;
  image?: string;
  tags?: string[];
  title: string;
  type: "post";
};

// icon type
export type iconsType =
  | "facebook"
  | "twitter"
  | "youtube"
  | "linkedin"
  | "github"
  | "instagram";

export type GetMetaData = MdxFileCard;

// type for space component
export type spaceType = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

// command
export type StructurizedData = Record<string, string>;

export type SearchData = {
  [route: string]: {
    title: string;
    data: StructurizedData;
  };
};
