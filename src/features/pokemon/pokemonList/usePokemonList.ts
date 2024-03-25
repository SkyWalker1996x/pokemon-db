import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// hooks
import useFetch from 'hooks/useFetch.ts';
// api
import pokemonRestClient from 'api/pokeApi/pokemonRestClient.ts';
// types
import { TGetPokemonListParams } from 'api/pokeApi/types/pokemonList';
// helpers
import { pokemonListAdapter } from 'features/pokemon/pokemonList/adapters';

const initialListParamsState: TGetPokemonListParams = {
  limit: 10,
  offset: 0,
};

const usePokemonList = () => {
  const [listParams, setListParams] = useState<TGetPokemonListParams>(initialListParamsState);
  const {
    data,
    handleRequest: getPokemonList,
    isLoading,
    error,
  } = useFetch({
    request: pokemonRestClient.getPokemonList,
    initialValue: null,
    dataAdapter: pokemonListAdapter,
  });
  const navigate = useNavigate();

  const toItemPage = (id: string) => {
    navigate(`/${id}`);
  };

  const handleChangeOffset = (offset: number) => {
    setListParams((prev) => ({
      ...prev,
      offset,
    }));
  };

  useEffect(() => {
    getPokemonList(listParams);
  }, [listParams]);

  return {
    data: data ?? [],
    isLoading,
    error,
    toItemPage,
    handleChangeOffset,
  };
};

export default usePokemonList;
