import { GetImage, MetaImage } from "../types";

export function getMetaImage(image: GetImage) {
  if (typeof image === "string") {
    if (image?.trim().split(" ")) {
      let imageSplit = image?.trim().split(" ");
      return imageSplit.map((item: string) => ({ url: item }));
    } else {
      return [{ url: image }];
    }
  }

  if (typeof image === "object") {
    return image?.map((item: string | MetaImage) => {
      if (item === "string") {
        return { url: item };
      }
      if (item !== "object") {
        return item;
      }
    });
  }
}
