import { TGetPokemonItem } from 'api/pokeApi/types/pokemonItem';

export type TPokemonItem = Pick<
  TGetPokemonItem,
  'id' | 'abilities' | 'height' | 'name' | 'order' | 'stats' | 'types'
> & {
  baseExperience: number;
  imageSrc: string;
};
