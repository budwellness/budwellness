const wishlistButtonStateHandler = (
  globalUserState,
  globalUserDataState,
  localButtonState,
  localButtonStateSetter,
  productId,
) => {
  if (globalUserState) {
    if (globalUserDataState.length > 0) {
      localButtonStateSetter(
        globalUserDataState.some((p) => p._id === productId),
      );
    } else if (localButtonState) {
      localButtonStateSetter(!localButtonState);
    }
  } else {
    localButtonStateSetter(false);
  }
};

export default wishlistButtonStateHandler;
