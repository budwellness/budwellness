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
    log('Prohoju');
    if (!token) {
      // 1. Посмотреть есть ли в локалсторедже localCart
      const localCart = localStorage.getItem('localCart');
      if (localCart) {
        const localCartData = JSON.parse(localCart);
        const isExist = localCartData.some((p) => p === productId);
        log('LocalCartData', localCartData);
        log('isProductExist', isExist);
        if (isExist) {
          // Если существует, вырезаем из локальной корзины
          const index = localCartData.findIndex((p) => p === productId);
          if (index !== -1) {
            localCartData.splice(index, 1);
            localStorage.setItem('localCart', JSON.stringify(localCartData));
          }
        } else {
          // Если не существует, добавляем в локал стор
          localCartData.push(productId);
          localStorage.setItem('localCart', JSON.stringify(localCartData));
        }
      } else {
        // Если нету localCart
        // - Добавить ИД продукта в локал сторКарт
        localStorage.setItem('localCart', JSON.stringify([productId]));
      }

      // Если есть localCart
      // - Посмотреть есть ли такой продукт уже в localCart
      //Если есть убрать его от туда
      // Если нету добавить его туда
    } else {
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
    }
  };

  return toggleCart;
};

export default useToggleCart;
