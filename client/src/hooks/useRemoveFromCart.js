import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRemoveFromCartMutation } from '../store/serverResponse/danitApi.cart';
import { toast } from 'react-toastify';

const useRemoveFromCart = (
  product,
  tokenReduxStore,
  removeItemFromCartAction
) => {
  const dispatch = useDispatch();
  const [removeFromCart, { isSuccess: isSuccessRemoveFromCart }] =
    useRemoveFromCartMutation();
  const removeFromServerCartHandler = () => {
    const requestData = {
      productId: product._id,
      token: tokenReduxStore,
    };
    try {
      removeFromCart(requestData);
    } catch (error) {
      toast.error('Something went wrong...');
    }
  };

  useEffect(() => {
    if (isSuccessRemoveFromCart) {
      dispatch(removeItemFromCartAction(product._id));
      toast.success('Item was successfully removed from cart!');
    }
  }, [dispatch, isSuccessRemoveFromCart, product._id]);

  return removeFromServerCartHandler;
};

export default useRemoveFromCart;
