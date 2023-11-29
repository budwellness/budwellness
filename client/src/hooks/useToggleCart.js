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
  const toggleCart = async (product, token, cartStoreData) => {
    if (!token) {
      // 1. Посмотреть есть ли в локалсторедже localCart
      const localCart = localStorage.getItem('localCart');
      if (localCart) {
        const localCartData = JSON.parse(localCart);
        log(localCartData);
        const isExist = localCartData.some((p) => p.productId === product._id);
        // log('LocalCartData', localCartData);
        // log('isProductExist', isExist);
        log(isExist);
        if (isExist) {
          // Если существует, вырезаем из локальной корзины
          const index = localCartData.findIndex(
            (p) => p.productId === product._id
          );
          if (index !== -1) {
            localCartData.splice(index, 1);
            localStorage.setItem('localCart', JSON.stringify(localCartData));
          }
        } else {
          // Если не существует, добавляем в локал стор
          localCartData.push({
            productId: product._id,
            itemNo: product.itemNo,
            quantity: product.quantity,
          });
          localStorage.setItem('localCart', JSON.stringify(localCartData));
        }
      } else {
        // Если нету localCart
        // - Добавить ИД продукта в локал сторКарт
        localStorage.setItem(
          'localCart',
          JSON.stringify([
            {
              productId: product._id,
              itemNo: product.itemNo,
              quantity: product.quantity,
            },
          ])
        );
      }

      // Если есть localCart
      // - Посмотреть есть ли такой продукт уже в localCart
      //Если есть убрать его от туда
      // Если нету добавить его туда
    } else {
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
    }
  };

  return toggleCart;
};

export default useToggleCart;
