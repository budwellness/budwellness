const cartButtonStateHandler = (
  globalUserState,
  localButtonState,
  localButtonStateSetter,
  productId,
  globalCartDataState = [],
  globalLocalCartDataState = []
) => {
  // если юзер залогинен
  if (globalUserState) {
    // если у залогиненого юзера карта в редаксе не пустая
    if (globalCartDataState.length > 0) {
      // устанавливаем локальный стейт в карточке на тру если продукт имеется в корзине
      localButtonStateSetter(
        globalCartDataState.some((p) => p.product._id === productId)
      );
    } else if (localButtonState) {
      localButtonStateSetter(!localButtonState);
    }
  } else {
    localButtonStateSetter(false);
    if (globalLocalCartDataState.length > 0) {
      localButtonStateSetter(
        globalLocalCartDataState.some((p) => p.product._id === productId)
      );
    } else if (localButtonState) {
      localButtonStateSetter(!localButtonState);
    }
  }
};

export default cartButtonStateHandler;
