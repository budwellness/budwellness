import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MinusIcon from '../UI/MinusIcon';
import PlusIcon from '../UI/PlusIcon';

import styles from './ButtonCount.module.scss';

function ButtonCount(props) {
  /* --------------------------- INIT PROPS: --------------------------- */
  const {
    productQuantity,
    cartQuantity,
    actions: {
      increaseCartQuantityHandler,
      decreaseCartQuantityHandler,
    },
  } = props;

  /* --------------------------- COMPONENT STATE: --------------------------- */

  const [count, setCount] = useState(cartQuantity);

  const handleCountChange = (value) => {
    setCount(value);
  };
  return (
    <div className={styles.countWrapper}>
      <button
        type="button"
        className={styles.countBtn}
        onClick={() => {
          decreaseCartQuantityHandler();
          handleCountChange(count - 1);
        }}
        disabled={count === 1}
      >
        <MinusIcon className={styles.countIcon} />
      </button>
      <span className={styles.count}>{count}</span>
      <button
        type="button"
        className={styles.countBtn}
        onClick={() => {
          increaseCartQuantityHandler();
          handleCountChange(count + 1);
        }}
        disabled={count === productQuantity}
      >
        <PlusIcon className={styles.countIcon} />
      </button>
    </div>
  );
}

export default ButtonCount;

ButtonCount.propTypes = {
  productQuantity: PropTypes.number,
};
ButtonCount.defaultProps = {
  productQuantity: 1,
};
