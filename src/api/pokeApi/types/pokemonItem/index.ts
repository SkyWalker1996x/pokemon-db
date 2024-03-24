type TNameUrlObjectStructure = {
  name: string;
  url: string;
};

type Nullable<T> = T | null;

type TGetPokemonAbilityItem = {
  ability: TNameUrlObjectStructure;
  slot: number;
  is_hidden: boolean;
};

type TGetPokemonCries = {
  latest: string;
  legacy: string;
};

type TGetPokemonFormItem = TNameUrlObjectStructure;

type TGetPokemonGameIndicesItem = {
  game_index: number;
  version: TNameUrlObjectStructure;
};

type TGetPokemonVersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: TNameUrlObjectStructure;
  version_group: TNameUrlObjectStructure;
};

type TGetPokemonMoveItem = {
  move: TNameUrlObjectStructure;
  version_group_details: Array<TGetPokemonVersionGroupDetail>;
};

type TGetPokemonSpecies = TNameUrlObjectStructure;

type TGetPokemonSprites = {
  back_default: Nullable<string>;
  back_female: Nullable<string>;
  back_shiny: Nullable<string>;
  back_shiny_female: Nullable<string>;
  front_default: Nullable<string>;
  front_female: Nullable<string>;
  front_shiny: Nullable<string>;
  front_shiny_female: Nullable<string>;
  other: {
    dream_world: {
      front_default: Nullable<string>;
      front_female: Nullable<string>;
    };
    home: {
      front_default: Nullable<string>;
      front_female: Nullable<string>;
      front_shiny: Nullable<string>;
      front_shiny_female: Nullable<string>;
    };
    official_artwork: {
      front_default: Nullable<string>;
      front_female: Nullable<string>;
    };
    showdown: {
      back_default: Nullable<string>;
      back_female: Nullable<string>;
      back_shiny: Nullable<string>;
      back_shiny_female: Nullable<string>;
      front_default: Nullable<string>;
      front_female: Nullable<string>;
      front_shiny: Nullable<string>;
      front_shiny_female: Nullable<string>;
    };
  };
};

type TGetPokemonStatItem = {
  base_stat: number;
  effort: number;
  stat: TNameUrlObjectStructure;
};

type TGetPokemonTypeItem = {
  slot: number;
  type: TNameUrlObjectStructure;
};

export type TGetPokemonItem = {
  id: number;
  abilities: Array<TGetPokemonAbilityItem>;
  base_experience: number;
  height: number;
  name: string;
  order: number;
  stats: Array<TGetPokemonStatItem>;
  types: Array<TGetPokemonTypeItem>;
  cries: TGetPokemonCries;
  forms: Array<TGetPokemonFormItem>;
  game_indices: Array<TGetPokemonGameIndicesItem>;
  held_items: [];
  is_default: number;
  location_area_encounters: string;
  moves: Array<TGetPokemonMoveItem>;
  past_abilities: [];
  past_types: [];
  species: TGetPokemonSpecies;
  sprites: TGetPokemonSprites;
};
