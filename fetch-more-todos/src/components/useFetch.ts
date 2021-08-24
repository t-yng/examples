import { useCallback, useEffect, useState } from "react";

export const useFetch = <T>(fetcher: (...args: any[]) => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);

  const doFetch = useCallback(async (...args: any[]) => {
    setLoading(true);
    const result = await fetcher(...args);
    setData(result);
    setLoading(false);
  }, []);

  return {
    data,
    loading,
    doFetch,
  };
};
