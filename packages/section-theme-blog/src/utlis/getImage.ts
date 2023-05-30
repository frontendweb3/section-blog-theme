import {MetaImage} from "../../types"
export function getImage(image: string | string[] | MetaImage[]) {
  if (typeof image === "string") {
    if (image?.trim().split(" ")) {
      let imageSplit = image?.trim().split(" ");
      return imageSplit[0];
    } else {
      return image;
    }
  }
  if (typeof image === "object") {
    if (image[0].url !== undefined) {
      return image[0].url;
    } else {
      return image[0];
    }
  }
}
