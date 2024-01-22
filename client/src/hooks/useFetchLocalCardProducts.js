// получить itemNo из локал стора
// создать массив промисов
// прогнать массив промисов с помощью Promiss.SetAll...
// вернуть из функции массив объектов

import { useLazyGetProductQuery } from '../store/serverResponse/danitApi.products';

const useFetchLocalCardProducts = () => {
  const [getProduct] = useLazyGetProductQuery();

  const fetchLocalCardProducts = async (arrOfItemNo) => {
    const requests = await Promise.all(
      arrOfItemNo.map((itemNo) => getProduct(itemNo).unwrap()),
    );

    return requests;
  };

  return fetchLocalCardProducts;
};

export default useFetchLocalCardProducts;
