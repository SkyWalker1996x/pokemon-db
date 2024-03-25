import pokeApi from './apiClient.ts';
import { TPokeApiClient } from 'api/pokeApi/types';

const pokemonRestClient: TPokeApiClient = {
  getPokemonList: ({limit, offset}) => pokeApi.get(`?limit=${limit}&offset=${offset}`),
  getPokemonItem: (name) => pokeApi.get(`${name}`),
};

export default pokemonRestClient;
