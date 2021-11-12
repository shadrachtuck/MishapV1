function isExternalLink(link: string): boolean {
  return !!link.match('^(http|https)://');
}

export default isExternalLink;
