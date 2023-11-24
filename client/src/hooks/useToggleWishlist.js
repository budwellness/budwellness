import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  addItemToWishListAction,
  removeItemFromWishListAction,
} from '../store/wishlist/wishList.slice';

import {
  useAddProductToWishlistMutation,
  useRemoveFromWishlistMutation,
} from '../store/serverResponse/danitApi.wishlist';

const { log } = console;
const useToggleWishlist = () => {
  const dispatch = useDispatch();
  const [removeProductFromWishlist] = useRemoveFromWishlistMutation();
  const [addProductToWishlist] = useAddProductToWishlistMutation();
  const toggleWishlist = async (product, token, wishlistStoreData) => {
    const isExist = wishlistStoreData.some((p) => p._id === product._id);
    if (token) {
      if (isExist) {
        try {
          await removeProductFromWishlist({ productId: product._id, token })
            .unwrap()
            .then(() => {
              dispatch(removeItemFromWishListAction(product));
              toast.warn('Product was removed from wishlist!');
            });
        } catch (error) {
          log(error);
          toast.error('Something went wrong...');
        }
      } else {
        try {
          await addProductToWishlist({ productId: product._id, token })
            .unwrap()
            .then(() => {
              dispatch(addItemToWishListAction(product));
              toast.success('Product was added to wishlist!');
            });
        } catch (error) {
          log(error);
          toast.error('Something went wrong...');
        }
      }
    } else {
      if (isExist) {
        dispatch(removeItemFromWishListAction(product));
      } else {
        dispatch(addItemToWishListAction(product));
        localStorage.setItem('localWishlist', JSON.stringify(product));
      }
      log('я работаю даже без токена');
    }
  };

  return toggleWishlist;
};

export default useToggleWishlist;
