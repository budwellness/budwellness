const generateTemporaryPassword = (length = 8) => {
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let temporaryPassword = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    temporaryPassword += charset.charAt(randomIndex);
  }
  return temporaryPassword;
};

export default generateTemporaryPassword;
