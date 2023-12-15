const generateTemporaryLogin = (email) => {
  const threeDigitNumber = Math.floor(Math.random() * 900) + 100;
  const temporaryLogin =
    email
      .split('@')[0]
      .slice(0, 7)
      .replace(/[^a-zA-Z0-9]/g, '') + threeDigitNumber;
  return temporaryLogin;
};

export default generateTemporaryLogin;
