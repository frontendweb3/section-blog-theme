import { useLocalStorage } from 'usehooks-ts'

export const useBannerCookies = () => {
  const [banner, setBanner] = useCookie('banner', "show");
  const hideBanner = () => {
    setBanner("hide");
  };
  return { banner, hideBanner };
};
