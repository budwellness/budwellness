import React, { useEffect, useState } from 'react';
import styles from './OrderHistory.module.scss';
import { useSelector } from 'react-redux';
import { useGetAllOrdersQuery } from '../../../store/serverResponse/danitApi.orders';
import OrderHistoryItem from './OrderHistoryItem/OrderHistoryItem';
import Preloader from '../../../components/Preloader/Preloader';

const { log } = console;

function OrderHistory() {
  /* --------------------------- INIT PROPS: --------------------------- */
  const [orderHistoryItems, setOrderHistoryItems] = useState([]);
  /* --------------------------- REDUX STATE: --------------------------- */
  const { token: tokenReduxState } = useSelector(state => state.user)
  /* --------------------------- INIT HOOKS: --------------------------- */
  const { data: allOrdersData, isLoading, isError, isSuccess } = useGetAllOrdersQuery(tokenReduxState);

  useEffect(() => {
    if (allOrdersData) {
      setOrderHistoryItems(
        allOrdersData?.map((item) => <OrderHistoryItem key={item._id} item={item} />)
      )
    }

  }, [allOrdersData])


  return (
    <section className={styles.container}>
      {isLoading ? <Preloader /> : orderHistoryItems}
      {/* <OrderHistoryItem /> */}
    </section>
  );
}

export default OrderHistory;
