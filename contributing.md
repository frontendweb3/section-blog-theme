The section blog theme comes under an open-source license. Before starting the contribution, first read our [Code of Conduct](./CODE_OF_CONDUCT.md) guidelines.

How to start a contribution?
1. Clone Repo
2. Install Package
3. Structure
4. Start local development server

## Clone Repo
First, clone the section blog theme repository from GitHub.
```bash
 git clone https://github.com/frontendweb3/section-blog-theme.git
```

## Install-Package
Install the package with pnpm.

```bash
cd section-blog-theme && pnpm install
```

## Structure
Our repository is part of a Monorepo structure, it is managed with Turbo. 

### Folder
1. Docs
2. Package
3. Example

### Docs
The Docs folder contains the documentation, the documentation site is built with the nextra and nextra docs theme.

### Packages
The package folder contains the actual code of the section blog theme.

### Example
The example folder contains a demo site built or used with a section blog theme.


## Start local development server
1. Section blog theme server
2. Documentation server

### Section blog theme server
You can start the local development server with the following command.

```bash
pnpm dev --filter=section-blog-theme  --filter=demo-section-blog
```
### Documentation server
Start your documentation server with following command.

```bash
pnpm dev --filter=docs
```
## What and where we found components?

* `components/Article/Article.tsx` > article by frontmatter
* `components/banner/Banner.tsx` > Banner
* `components/Card/Card.tsx` > posts card
* `components/Command/Command.tsx` > command or cmd
* `components/Footer/Footer.tsx` > footer component
* `components/Header/Header.tsx` > header component
* `components/Header/ThemeToggle.tsx` > theme toggle
* `components/Layouts` > layouts folders
* `components/Layouts/404.tsx` > 404 error page
* `components/Layouts/500.tsx` > 500 error page
* `components/Layouts/BlogLayout.tsx` > posts type
* `components/Layouts/HomePage.tsx` > home type
* `components/Layouts/index.tsx` > main file
* `components/Layouts/Page.tsx` > page type
* `components/Layouts/Posts.tsx` > posts type
* `components/Layouts/Read.tsx` > read type
* `components/Layouts/Tag.tsx` > Generate Dynamic Tag
* `components/Navigation/ListItem.tsx` > Part of Header
* `components/Navigation/NavgationItem.tsx` > Part of Header
* `components/Navigation/NavigationItems.tsx` > Part of Header
* `components/Seo/Seo.tsx` > SEO component
* `components/SocialLink/DynmicIcon.tsx` > Part of Header
* `components/SocialLink/SocialLink.tsx` > Part of Header
* `components/ui/*` > Part of shadcn/ui
* `components.json` > shadcn/ui
* `src/index.tsx` > Main 
* `src/tag.tsx` > Tag Page
* `src/types.ts` > type 
* `styles/globals.css` > tailwind css
* `tsup.config.ts` > tsup config
* `utility/NextURL.ts` > check develpment or production *
* `utility/slugify.ts` > convert title slugify *
* `utility/useContent.ts` > return all posts *
* `utility/useTagContent.ts` > return post based on tag
* `utility/useTags.ts` > return all tags based on posts
* `utility/utils.ts` > use by shadcn/ui and tailwind css
* `public/` > Public folder
* `__TEST__/` > testing folder
* `tsconfig.json` >  typescript config

