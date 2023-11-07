import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MinusIcon from '../UI/MinusIcon';
import PlusIcon from '../UI/PlusIcon';

import styles from './ButtonCount.module.scss';

function ButtonCount({ quantity }) {
  const [count, setCount] = useState(1);

  const handleCountChange = (value) => {
    setCount(value);
  };
  return (
    <div className={styles.countWrapper}>
      <button
        type="button"
        className={styles.countBtn}
        onClick={() => handleCountChange(count - 1)}
        disabled={count === 1}
      >
        <MinusIcon className={styles.countIcon} />
      </button>
      <span>{count}</span>
      <button
        type="button"
        className={styles.countBtn}
        onClick={() => handleCountChange(count + 11)}
        disabled={count === quantity}
      >
        <PlusIcon className={styles.countIcon} />
      </button>
    </div>
  );
}

export default ButtonCount;

ButtonCount.propTypes = {
  quantity: PropTypes.number,
};
ButtonCount.defaultProps = {
  quantity: 1,
};
