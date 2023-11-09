function getThcCategory(thc) {
  let thcCategory;
  switch (true) {
    case thc >= 0.2 && thc <= 10:
      thcCategory = '0.20-10.00%';
      break;
    case thc >= 11 && thc <= 20:
      thcCategory = '11.00-20.00%';
      break;
    case thc >= 21 && thc <= 30:
      thcCategory = '21.00-30.00%';
      break;
    case thc >= 31 && thc <= 40:
      thcCategory = '31.00- 40.00%';
      break;
    default:
      thcCategory = 'unknown';
  }
  return thcCategory;
}

export default getThcCategory;
