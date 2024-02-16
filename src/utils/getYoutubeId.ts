export const getYoutubeId = (url: string) => {
  const desktopPattern = /^https?:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]+$/;
  const mobilePattern =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;

  if (desktopPattern.test(url)) {
    console.log("desktop");
    return url.split("?v=")[1];
  } else if (url.match(mobilePattern)) {
    console.log("mobile");
    // https://youtu.be/TjqRLIS5-ro?si=jVZp_4K9sRRYXEMd
    let idOfVideo = url.split("be/")[1];
    idOfVideo = idOfVideo.split("?")[0];
    return idOfVideo;
  } else {
    return null;
  }
};
