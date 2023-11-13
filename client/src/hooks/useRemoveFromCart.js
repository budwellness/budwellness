import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useRemoveFromCartMutation } from '../store/serverResponse/danitApi.cart';
import { removeItemFromCartAction } from '../store/cart/cart.slice';

const useRemoveFromCart = () => {
  const dispatch = useDispatch();
  const [removeFromCart, { isSuccess: isSuccessRemoveFromCart }] = useRemoveFromCartMutation();
  const removeFromServerCartHandler = (productId, token) => {
    const requestData = {
      productId,
      token,
    };
    try {
      removeFromCart(requestData);
    } catch (error) {
      toast.error('Something went wrong...');
    }
  };

  useEffect(() => {
    if (isSuccessRemoveFromCart) {
      dispatch(removeItemFromCartAction(productId));
      toast.success('Item was successfully removed from cart!');
    }
  }, [dispatch, isSuccessRemoveFromCart, productId]);

  return removeFromServerCartHandler;
};

export default useRemoveFromCart;
