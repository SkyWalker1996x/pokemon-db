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

export type TGetPokemonListParams = {
  limit: number;
  offset: number;
};