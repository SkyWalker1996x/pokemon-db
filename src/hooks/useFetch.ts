import { useState } from 'react';
import { AxiosResponse } from 'axios';

type Props<T, U, K> = {
  request: (params: U) => Promise<AxiosResponse<T>>;
  initialValue: unknown;
  dataAdapter: (data: T) => K;
};

const useFetch = <T, U, K>(props: Props<T, U, K>) => {
  const { request, initialValue, dataAdapter } = props;

  const [data, setData] = useState<K>(initialValue as K);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRequest = (params: U) => {
    setIsLoading(false);
    request(params)
      .then((response) => {
        const { data } = response;
        setData(dataAdapter(data));
      })
      .catch((err) => {
        setError(err);
      });
  };

  return {
    data,
    isLoading,
    error,
    handleRequest,
  };
};

export default useFetch;
