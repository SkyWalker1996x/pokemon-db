import { TGetPokemonListItemResponse } from 'api/pokeApi/types.ts';
import { TPokemonListItem } from './types.ts';

const generateImageSrc = (id: string): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

const extractId = (url: string): string => {
  const idRegExp = /\/([0-9]*)\/$/;
  // @ts-expect-error id should be found, null is not expected
  return url.match(idRegExp)[1];
};

export const pokemonListItemAdapter = (item: TGetPokemonListItemResponse): TPokemonListItem => {
  const id = extractId(item.url);
  return {
    id,
    name: item.name,
    imageSrc: generateImageSrc(id),
  };
};

export const pokemonListAdapter = (
  list: Array<TGetPokemonListItemResponse>,
): Array<TPokemonListItem> => {
  return list.map(pokemonListItemAdapter);
};
