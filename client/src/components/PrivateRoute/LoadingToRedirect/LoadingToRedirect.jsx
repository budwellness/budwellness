import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RedirectModal from '../../Modal/RedirectModal';

function LoadingToRedirect() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount - 1);
    }, 1000);

    // eslint-disable-next-line no-unused-expressions
    count === 0 && navigate('/');

    return () => clearInterval(interval);
  }, [count, navigate]);
  return (
    <RedirectModal>
      <p>
        Redirecting you in
        {count}
        {' '}
        seconds...
      </p>
    </RedirectModal>
  );
}

export default LoadingToRedirect;
