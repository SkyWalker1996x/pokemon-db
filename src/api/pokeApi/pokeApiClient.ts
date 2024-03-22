import pokeApi from './apiClient.ts';
import { TPokeApiClient } from './types.ts';

const pokeApiClient: TPokeApiClient = {
  getPokemonList: (limit, offset) => pokeApi.get(`?limit=${limit}&offset=${offset}`),
  getPokemonItem: (name: string) => pokeApi.get(`${name}`),
};

export default pokeApiClient;
