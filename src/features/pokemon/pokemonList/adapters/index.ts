import {
  TGetPokemonListItemResponse,
  TGetPokemonListResponse,
} from 'api/pokeApi/types/pokemonList';
import { TPokemonListItem } from 'features/pokemon/pokemonList/types';

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

export const pokemonListAdapter = (response: TGetPokemonListResponse): Array<TPokemonListItem> => {
  return response.results.map(pokemonListItemAdapter);
};
