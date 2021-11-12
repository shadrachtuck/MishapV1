const getVideoEmbedLink = (videoEmbed: string): string => {
  const srcTag = videoEmbed.indexOf('src');
  const titleTag = videoEmbed.indexOf('title');
  // start 5 indexes from the beginning of srcTag
  const beginning = srcTag + 5;
  // end 2 positions before beginning of titleTag
  const end = titleTag - 2;

  return videoEmbed.slice(beginning, end);
};

export default getVideoEmbedLink;
