const excludedParams = ["perPage", "startPage", "minPrice", "maxPrice", "sort", "minThc", "maxThc", "minCbd", "maxCbd"];

module.exports = function filterParser(filtersQueryString) {
  const mongooseQuery = {};

  if (filtersQueryString.minPrice || filtersQueryString.maxPrice) {
    mongooseQuery.currentPrice = {
      $gte: Number(filtersQueryString.minPrice),
      $lte: Number(filtersQueryString.maxPrice),
    };
  }

  if (filtersQueryString.minThc || filtersQueryString.maxThc) {
    mongooseQuery.thc = {
      $gte: Number(filtersQueryString.minThc),
      $lte: Number(filtersQueryString.maxThc),
    };
  }

  if (filtersQueryString.minCbd || filtersQueryString.maxCbd) {
    mongooseQuery.cbd = {
      $gte: Number(filtersQueryString.minCbd),
      $lte: Number(filtersQueryString.maxCbd),
    };
  }

  return Object.keys(filtersQueryString).reduce((mongooseQuery, filterParam) => {
    if (filtersQueryString[filterParam].includes(",")) {
      mongooseQuery[filterParam] = {
        $in: filtersQueryString[filterParam].split(",").map((item) => decodeURI(item)),
      };
    } else if (!excludedParams.includes(filterParam)) {
      mongooseQuery[filterParam] = decodeURI(filtersQueryString[filterParam]);
    }

    return mongooseQuery;
  }, mongooseQuery);
};
