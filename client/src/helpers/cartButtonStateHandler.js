const cartButtonStateHandler = (
  globalUserState,
  globalUserDataState,
  localButtonState,
  localButtonStateSetter,
  productId,
) => {
  if (globalUserState) {
    if (globalUserDataState.length > 0) {
      localButtonStateSetter(
        globalUserDataState.some((p) => p.product._id === productId),
      );
    } else if (localButtonState) {
      localButtonStateSetter(!localButtonState);
    }
  } else {
    localButtonStateSetter(false);
  }
};

export default cartButtonStateHandler;
