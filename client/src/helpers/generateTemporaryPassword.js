const generateTemporaryPassword = (length = 8) => {
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let temporaryPassword = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    temporaryPassword += charset.charAt(randomIndex);
  }
  return temporaryPassword;
};

export default generateTemporaryPassword;
