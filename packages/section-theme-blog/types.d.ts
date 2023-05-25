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

export type BlogFrontMatter = {
  author?: string;
  date?: string;
  description: string;
  image?: string;
  tags?: string[];
  title: string;
  type: "post";
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
  description?: string;
  date?: string;
  image?: string;
  tags?: string[];
  title: string;
  type: "author";
  social?: { name: iconsType; svg?: React.ReactNode; url: string }[];
};
