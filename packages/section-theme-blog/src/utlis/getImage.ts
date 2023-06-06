import { GetImage } from "../types";

export function getImage(image: GetImage) {
  if (typeof image === "string") {
    if (image?.trim().split(" ")) {
      let imageSplit = image?.trim().split(" ");
      return imageSplit[0];
    } else {
      return image;
    }
  }

  if (typeof image[0] === "object" && image[0].url !== undefined) {
    return image[0].url;
  } else if (typeof image === "object") {
    return image[0];
  }
}
