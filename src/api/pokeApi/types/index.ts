import { AxiosResponse } from 'axios';
import { TGetPokemonListResponse, TGetPokemonListParams } from 'api/pokeApi/types/pokemonList';

export type TPokeApiClient = {
  getPokemonList: (
    params: TGetPokemonListParams,
  ) => Promise<AxiosResponse<TGetPokemonListResponse>>;
  getPokemonItem: (name: string) => Promise<AxiosResponse>;
};
