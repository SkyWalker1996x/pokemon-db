import { useEffect } from 'react';
// hooks
import useFetch from 'hooks/useFetch.ts';
// api
import pokeApiClient from 'api/pokeApi/pokeApiClient.ts';
// types
import { TGetPokemonListResponse } from 'api/pokeApi/types.ts';
// helpers
import { pokemonListAdapter } from './dataAdapter.ts';

const usePokemonList = () => {
  const {
    data,
    handleRequest: getPokemonList,
    isLoading,
    error,
  } = useFetch<TGetPokemonListResponse>({
    request: () => pokeApiClient.getPokemonList(10, 0),
    initialValue: null,
  });

  useEffect(() => {
    getPokemonList();
  }, []);

  return {
    data: data?.results ? pokemonListAdapter(data.results) : [],
    isLoading,
    error,
  };
};

export default usePokemonList;
