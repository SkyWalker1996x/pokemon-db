import { AxiosResponse } from 'axios';

export type TGetPokemonListItemResponse = {
  name: string;
  url: string;
};

export type TGetPokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<TGetPokemonListItemResponse>;
};

export type TPokeApiClient = {
  getPokemonList: (
    limit: number,
    offset: number,
  ) => Promise<AxiosResponse<TGetPokemonListResponse>>;
  getPokemonItem: (name: string) => Promise<AxiosResponse>;
};
