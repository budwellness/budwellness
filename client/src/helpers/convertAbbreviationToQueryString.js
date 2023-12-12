function convertAbbreviationToQueryString(str) {
  const matches = str.match(/([^=]+)=(\w+ (\d+)%-(\d+)%)/);
  console.log('matches', matches);
  if (!matches || matches.length < 5) {
    return '';
  }

  const abbreviation = matches[1];
  const minRange = matches[3];
  const maxRange = matches[4];

  const capitalizeAbbreviation =
    abbreviation.charAt(0).toUpperCase() + abbreviation.slice(1);

  const minParam = `min${capitalizeAbbreviation}`;
  const maxParam = `max${capitalizeAbbreviation}`;

  const query = `${minParam}=${minRange}&${maxParam}=${maxRange}`;
  return query;
}

export default convertAbbreviationToQueryString;
