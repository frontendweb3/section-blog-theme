export function getMetaImage(image: string | string[] | object[]) {
  if (typeof image === "string") {
    if (image?.trim().split(" ")) {
      let imageSplit = image?.trim().split(" ");
      return imageSplit.map((item: string) => ({ url: item }));
    } else {
      return [{ url: image }];
    }
  }
  if (typeof image === "object") {
    return image?.map((item) => {
      if (item.url !== undefined) {
        return item;
      } else {
        return { url: item };
      }
    });
  }
}
