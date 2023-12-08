const extractIdAndQuantityForCartMigration = (arr, token) => ({
  products: {
    products: arr.map((item) => ({
      product: item.product._id,
      cartQuantity: item.cartQuantity,
    })),
  },
  token,
});

export default extractIdAndQuantityForCartMigration;
