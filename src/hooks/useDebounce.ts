import {useState, useEffect} from 'react';

/**
 *
 * @description https://usehooks-ts.com/react-hook/use-debounce-value
 * @param value to be debounce
 * @param dalay in milliconds `default: 500 ms`
 * @returns  debounce value
 */
export function useDebounce<T>(value: T, dalay = 500): T {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), dalay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, dalay]);

  return debounceValue;
}
