import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  addItemToCartAction,
  removeItemFromCartAction,
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

  const toggleLocalCart = async (product, localCartStoreData) => {
    const localCart = JSON.parse(localStorage.getItem('localCart'));
    const isExist = localCart.some(
      ({ product: localProduct }) => localProduct.itemNo === product.itemNo
    );
    log('isExist', isExist);
    if (isExist) {
      // пишем логику на удаление
    } else {
      localStorage.setItem(
        'localCart',
        JSON.stringify([
          ...localCart,
          { itemNo: product.itemNo, cartQuantity: 1 },
        ])
      );
      getProduct(product.itemNo);
    }
    // if (localCartStoreData.length > 0) {
    //   const localCartData = JSON.parse(localCart);
    //   const isExist = localCartData.some((p) => p.productId === product._id);
    //   if (isExist) {
    //     // Если существует, вырезаем из локальной корзины
    //     const index = localCartData.findIndex(
    //       (p) => p.productId === product._id
    //     );
    //     if (index !== -1) {
    //       localCartData.splice(index, 1);
    //       localStorage.setItem('localCart', JSON.stringify(localCartData));
    //     }
    //   } else {
    //     // Если не существует, добавляем в локал стор
    //     localCartData.push({
    //       itemNo: product.itemNo,
    //       quantity: product.quantity,
    //       cartQuantity: 1,
    //     });
    //     localStorage.setItem('localCart', JSON.stringify(localCartData));
    //   }
    // } else {
    //   // Если нету localCart
    //   // - Добавить ИД продукта в локал сторКарт
    //   localStorage.setItem(
    //     'localCart',
    //     JSON.stringify([
    //       {
    //         itemNo: product.itemNo,
    //         quantity: product.quantity,
    //         cartQuantity: 1,
    //       },
    //     ])
    //   );
    // }

    // Если есть localCart
    // - Посмотреть есть ли такой продукт уже в localCart
    // Если есть убрать его от туда
    // Если нету добавить его туда
  };

  return { toggleCart, toggleLocalCart };
};

export default useToggleCart;
