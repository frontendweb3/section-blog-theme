import { GetImage } from "@/src/types";

export function getImage(image: GetImage) {
  if (typeof image === "string") {
    if (image?.trim().split(" ")) {
      let imageSplit = image?.trim().split(" ");
      return imageSplit[0];
    } else {
      return image;
    }
  }

  if (typeof image === "object" && image?.src !== undefined) {
    return image?.src;
  } else if (typeof image === "object") {
    return image;
  }
}
