import { AxiosResponse } from 'axios';
import pokeApi from './apiClient.ts';

type TPokeApiClient = {
  getPokemonList: (limit: number, offset: number) => Promise<AxiosResponse>;
};

const pokeApiClient: TPokeApiClient = {
  getPokemonList: (limit, offset) => pokeApi.get(`?limit=${limit}&offset=${offset}`),
};

export default pokeApiClient;
