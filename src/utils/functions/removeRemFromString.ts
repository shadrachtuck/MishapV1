const removeRemFromString = (str: string): number => {
  const endIndex = str.indexOf('rem');

  return Number(str.slice(0, endIndex));
};

export default removeRemFromString;
