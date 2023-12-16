const generateTemporaryOrderNo = (length) => {
  const randomNumber = Math.floor(Math.random() * (10 ** length - 10 ** (length - 1)))
    + 10 ** (length - 1);
  return randomNumber;
};

export default generateTemporaryOrderNo;
