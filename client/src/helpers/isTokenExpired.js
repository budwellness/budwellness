const isTokenExpired = (token) => {
  const tokenBody = token.split('.')[1];
  const { exp: expitationDate } = JSON.parse(atob(tokenBody));
  const currentDate = Math.floor(Date.now() / 1000);
  return currentDate > expitationDate;
};

export default isTokenExpired;
