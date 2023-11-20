import { useEffect, useState } from 'react';

const useDebounced = (value, delay = 500) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearInterval(handler);
  }, [value, delay]);

  return debounced;
};

export default useDebounced;
