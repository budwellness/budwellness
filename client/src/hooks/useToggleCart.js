import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import {
  addItemToCartAction,
  removeItemFromCartAction,
} from '../store/cart/cart.slice';

import {
  useRemoveFromCartMutation,
  useAddToCartMutation,
} from '../store/serverResponse/danitApi.cart';

const { log } = console;
const useToggleCart = () => {
  const dispatch = useDispatch();
  const [removeProductFromCart] = useRemoveFromCartMutation();
  const [addProductToCart] = useAddToCartMutation();
  const toggleCart = async (productId, token, cartStoreData) => {
    const isExist = cartStoreData.some((p) => p.product._id === productId);
    if (isExist) {
      try {
        await removeProductFromCart({ productId, token })
          .unwrap()
          .then(() => {
            dispatch(removeItemFromCartAction(productId));
            toast.warn('Product was removed from cart!');
          });
      } catch (error) {
        log(error);
        toast.error('Something went wrong...');
      }
    } else {
      try {
        await addProductToCart({ productId, token })
          .unwrap()
          .then((response) => {
            dispatch(addItemToCartAction(response.products));
            toast.success('Product was added to cart!');
          });
      } catch (error) {
        log(error);
        toast.error('Something went wrong...');
      }
    }
  };

  return toggleCart;
};

export default useToggleCart;
