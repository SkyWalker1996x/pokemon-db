import { useState } from 'react';
import { AxiosResponse } from 'axios';

type Props<T> = {
  request: () => Promise<AxiosResponse<T>>;
  initialValue: unknown;
};

const useFetch = <T>(props: Props<T>) => {
  const { request, initialValue } = props;

  const [data, setData] = useState<T>((initialValue as T));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRequest = () => {
    setIsLoading(false);
    request()
      .then((response) => {
        const {data,} = response;
        setData(data);
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
