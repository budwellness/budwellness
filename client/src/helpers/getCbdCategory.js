function getCbdCategory(cbd) {
  let cbdCategory;
  switch (true) {
    case cbd >= 0.1 && cbd <= 1:
      cbdCategory = '0.10-1.00%';
      break;
    case cbd >= 2 && cbd <= 5:
      cbdCategory = '2.00-5.00%';
      break;
    case cbd >= 5 && cbd <= 20:
      cbdCategory = '5.00-20.00%';
      break;
    case cbd >= 20 && cbd <= 50:
      cbdCategory = '20.00-50.00%';
      break;
    default:
      cbdCategory = 'unknown';
  }
  return cbdCategory;
}

export default getCbdCategory;
