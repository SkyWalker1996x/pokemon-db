import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
// hooks
import useFetch from 'hooks/useFetch.ts';
// api
import pokemonRestClient from 'api/pokeApi/pokemonRestClient.ts';
// helpers
import { pokemonItemAdapter } from 'features/pokemon/pokemonItem/adapters';

const usePokemonItem = () => {
  const { id } = useParams() as { id: string };
  const { data, handleRequest, isLoading, error } = useFetch({
    request: pokemonRestClient.getPokemonItem,
    initialValue: null,
    dataAdapter: pokemonItemAdapter,
  });
  const navigate = useNavigate();

  const toPreviousPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    handleRequest(id);
  }, [id]);

  return {
    id,
    data,
    handleRequest,
    isLoading,
    error,
    toPreviousPage,
  };
};

export default usePokemonItem;
