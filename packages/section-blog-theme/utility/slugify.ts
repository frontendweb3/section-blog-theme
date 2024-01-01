import slugifyImport from "slugify";

export function slugify(slug: string) {
  return slugifyImport(slug, { lower: true, trim: true });
}
