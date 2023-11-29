// получить itemNo из локал стора
// создать массив промисов
// прогнать массив промисов с помощью Promiss.SetAll...
// вернуть из функции массив объектов

import { useLazyGetProductQuery } from '../store/serverResponse/danitApi.products';

const useFetchLocalCardProducts = () => {
  const [getProduct] = useLazyGetProductQuery();

  const fetchLocalCardProducts = async (arrOfItemNo) => {
    const requests = Promise.all(
      arrOfItemNo.map((itemNo) => getProduct(itemNo))
    );
    console.log(requests);
    // const data = await Promise.all(requests);
    // const actualData = data.map((result) => result.value);
    // console.log(actualData);
    // return data;
  };

  return fetchLocalCardProducts;
};

export default useFetchLocalCardProducts;
