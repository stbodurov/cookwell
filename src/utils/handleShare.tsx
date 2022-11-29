const handleShare = ({ event: e, title }: ShareSheetParams) => {
  e.stopPropagation();
  navigator.share({
    title: "CookWell",
    url: "https://cookwell.com",
    text: `Check out this ${title} recipe on CookWell!`,
  });
};

export default handleShare;
