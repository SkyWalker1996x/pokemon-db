import { TGetPokemonItem } from 'api/pokeApi/types/pokemonItem';
import { TPokemonItem } from 'features/pokemon/pokemonItem/types';

const generateImageSrc = (id: number): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

export const pokemonItemAdapter = (data: TGetPokemonItem): TPokemonItem => {
  return {
    id: data.id,
    imageSrc: generateImageSrc(data.id),
    abilities: data.abilities,
    baseExperience: data.base_experience,
    height: data.height,
    name: data.name,
    order: data.order,
    stats: data.stats,
    types: data.types,
  };
};
