import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  addItemToCartAction,
  addItemToLocalCartAction,
  removeItemFromCartAction,
  removeItemFromLocalCartAction,
} from '../store/cart/cart.slice';

import {
  useRemoveFromCartMutation,
  useAddToCartMutation,
} from '../store/serverResponse/danitApi.cart';
import { useLazyGetProductQuery } from '../store/serverResponse/danitApi.products';

const { log } = console;
const useToggleCart = () => {
  const dispatch = useDispatch();
  const [removeProductFromCart] = useRemoveFromCartMutation();
  const [addProductToCart] = useAddToCartMutation();
  const [getProduct] = useLazyGetProductQuery();
  const toggleCart = async (product, token, cartStoreData) => {
    const isExist = cartStoreData.some((p) => p.product._id === product._id);
    if (isExist) {
      try {
        await removeProductFromCart({ productId: product._id, token })
          .unwrap()
          .then(() => {
            dispatch(removeItemFromCartAction(product._id));
            toast.warn('Product was removed from cart!');
          });
      } catch (error) {
        log(error);
        toast.error('Something went wrong...');
      }
    } else {
      try {
        await addProductToCart({ productId: product._id, token })
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

  const toggleLocalCart = async (productItem) => {
    const localCart = JSON.parse(localStorage.getItem('localCart'));
    const isExist = localCart.some(
      ({ itemNo }) => itemNo === productItem.itemNo,
    );
    log('isExist', isExist);
    if (isExist) {
      const index = localCart.findIndex(
        ({ itemNo }) => itemNo === productItem.itemNo,
      );
      if (index !== -1) {
        localCart.splice(index, 1);
        localStorage.setItem('localCart', JSON.stringify(localCart));
      }
      dispatch(removeItemFromLocalCartAction(productItem.itemNo));
    } else {
      localStorage.setItem(
        'localCart',
        JSON.stringify([
          ...localCart,
          { itemNo: productItem.itemNo, cartQuantity: 1 },
        ]),
      );
      getProduct(productItem.itemNo)
        .unwrap()
        .then((response) => dispatch(
          addItemToLocalCartAction({
            product: response,
            cartQuantity: 1,
          }),
        ));
    }
  };

  return { toggleCart, toggleLocalCart };
};

export default useToggleCart;
