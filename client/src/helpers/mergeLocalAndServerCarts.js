const mergeLocalAndServerCarts = (localCart = [], serverCart = []) => {
  const merged = [...serverCart];
  const idMap = {};

  for (const serverProduct of serverCart) {
    idMap[serverProduct.product._id] = true;
  }

  for (const localProduct of localCart) {
    if (!idMap[localProduct.product._id]) {
      merged.push(localProduct);
      idMap[localProduct.product._id] = true;
    }
  }

  return merged;
};

export default mergeLocalAndServerCarts;
