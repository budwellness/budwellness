const countTotalPrice = (cartData) => {
  const totalPrice = cartData.reduce(
    (acc, { cartQuantity, product: { currentPrice } }) => acc + cartQuantity * currentPrice,
    0,
  );
  return totalPrice.toFixed(2);
};

export default countTotalPrice;
