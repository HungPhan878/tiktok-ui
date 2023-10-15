import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [useDebounce, setUseDebounce] = useState(value);

  useEffect(() => {
    const handlerId = setTimeout(() => setUseDebounce(value), delay);

    // cleanup f
    return () => clearTimeout(handlerId);
  }, [value]);

  return useDebounce;
}

export default useDebounce;
