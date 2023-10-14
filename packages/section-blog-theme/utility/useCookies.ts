import useCookie from 'react-use-cookie';
export const useBannerCookies = () => {
  const [banner, setBanner] = useCookie('banner', "show");
  const hideBanner = () => {
    setBanner("hide");
  };
  return { banner, hideBanner };
};
