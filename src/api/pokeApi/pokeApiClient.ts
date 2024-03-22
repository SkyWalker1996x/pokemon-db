import { AxiosResponse } from 'axios';
import pokeApi from './apiClient.ts';

type TPokeApiClient = {
  getPokemonList: (limit: number, offset: number) => Promise<AxiosResponse>;
  getPokemonItem: (name: string) => Promise<AxiosResponse>;
};

const pokeApiClient: TPokeApiClient = {
  getPokemonList: (limit, offset) => pokeApi.get(`?limit=${limit}&offset=${offset}`),
  getPokemonItem: (name: string) => pokeApi.get(`${name}`)
};

export default pokeApiClient;
